const chromium = require('chrome-aws-lambda');

async function getScreenshot(url) {
    browser = await chromium.puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: true,//chromium.headless,
        ignoreHTTPSErrors: true,
        defaultViewport: {
          width: 375,
          height: 667,
          isMobile: true,
        }
      });

    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'networkidle2'});
    var rgx = /\#(issuecomment-\d*)/g
    const selector = url.match(rgx) ? url.match(rgx)[0] : false;
    if(!selector) return false;
    await page.evaluate("document.querySelector('.gh-header').remove()");
    await page.evaluate(`document.querySelector('${selector}').parentElement.parentElement.style.padding = "0px 16px 0px 16px"`);
    const el = await page.$x(`//*[@id='${selector.replace('#','')}']/../..`);
    if(el.length===0) return false;
    const file = await el[0].screenshot({ 
        // path: 'capture.png',
     encoding: 'base64'
});
    await browser.close();
    return file;
}

module.exports = { getScreenshot }; 

async function test(){
    const comments = [
        'https://github.com/open-wa/wa-automate-nodejs/issues/747#issuecomment-682116171',
        "https://github.com/open-wa/wa-automate-nodejs/issues/325#issuecomment-614747409",
        "https://github.com/open-wa/wa-automate-nodejs/issues/297#issuecomment-612183849",
        "https://github.com/open-wa/wa-automate-nodejs/issues/304#issuecomment-612975003",
        "https://github.com/open-wa/wa-automate-nodejs/issues/98#issuecomment-583237115",
        "https://github.com/open-wa/wa-automate-nodejs/issues/407#issuecomment-625052304",
        "https://github.com/open-wa/wa-automate-nodejs/issues/277#issuecomment-609538724",
        "https://github.com/open-wa/wa-automate-nodejs/issues/261#issuecomment-609403404",
        "https://github.com/open-wa/wa-automate-nodejs/issues/260#issuecomment-609550067",
        "https://github.com/open-wa/wa-automate-nodejs/issues/82#issuecomment-586136992"
    ]
    var comment = comments[Math.floor(Math.random() * comments.length)];
    const x = await getScreenshot(comment);
    console.log("test -> x", x)
    return x;
}

test();