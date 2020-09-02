require("dotenv").config();
const { getScreenshot } = require('./ppt');
module.exports = async (req, res) => {
  const {
    issues
  } = req.query;
  // res.setHeader("Content-Type", "image/png");
  console.log("issues", req.query, issues, typeof issues)
  issues = JSON.parse(Buffer.from(issues, 'base64').toString('ascii').replace(/'/g,'"'));
  if(!issues.length) return false;
  try {
    // const cacheSeconds = clampValue(
    //   parseInt(cache_seconds || CONSTANTS.TWO_HOURS, 10),
    //   CONSTANTS.TWO_HOURS,
    //   CONSTANTS.ONE_DAY
    // );

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