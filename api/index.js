require("dotenv").config();
const { getScreenshot } = require('./ppt');
module.exports = async (req, res) => {
  let {
    issues,
    svg
  } = req.query;
  // res.setHeader("Content-Type", "image/png");
  try {
    if(svg) {
      res.setHeader("Content-Type", "image/svg+xml");
      return res.send(`
      <svg ><style>.loader-path{stroke-dasharray:150,200;stroke-dashoffset:-10;-webkit-animation:dash 1.5s ease-in-out infinite,color 6s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 6s ease-in-out infinite;stroke-linecap:round}@-webkit-keyframes rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}100%{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}100%{stroke-dasharray:89,200;stroke-dashoffset:-124}}@-webkit-keyframes color{0%{stroke:#70c542}40%{stroke:#70c542}66%{stroke:#70c542}80%,90%{stroke:#70c542}}@keyframes color{0%{stroke:#70c542}40%{stroke:#70c542}66%{stroke:#70c542}80%,90%{stroke:#70c542}}</style> <circle class="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#70c542" stroke-width="2"/> <image id="myimage" width="150" height="150" href="${escape(`https://github-readme-testimonials.vercel.app/api?${issues}`)}"/> </svg> 
      `);
    }
    // const cacheSeconds = clampValue(
    //   parseInt(cache_seconds || CONSTANTS.TWO_HOURS, 10),
    //   CONSTANTS.TWO_HOURS,
    //   CONSTANTS.ONE_DAY
    // );

    console.log("issues", req.query, issues, typeof issues)
    issues = JSON.parse(Buffer.from(issues, 'base64').toString('ascii').replace(/'/g,'"'));
    if(!issues.length) return false;
    const comments = [
      ...issues
    ]
    var comment = comments[Math.floor(Math.random() * comments.length)];
    console.log("comment", comment)
    // res.setHeader("Cache-Control", `public, max-age=${cacheSeconds}`);

    const im = await getScreenshot(comment);
    // console.log("x ", im)

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