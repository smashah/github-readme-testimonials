require("dotenv").config();
const { getScreenshot } = require('./ppt');
module.exports = async (req, res) => {
  const {
    issues
  } = req.query;

  // res.setHeader("Content-Type", "image/png");
  console.log("issues", issues)
  try {
    // const cacheSeconds = clampValue(
    //   parseInt(cache_seconds || CONSTANTS.TWO_HOURS, 10),
    //   CONSTANTS.TWO_HOURS,
    //   CONSTANTS.ONE_DAY
    // );

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
    console.log("comment", comment)
    // res.setHeader("Cache-Control", `public, max-age=${cacheSeconds}`);

    const im = await getScreenshot(comment);
    console.log("x ", im)

    const img = Buffer.from(im, 'base64');
    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Length': img.length
    });
    return res.end(img);
  } catch (err) {
    return res.send(
      err
    );
  }
};