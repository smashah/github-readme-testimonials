require("dotenv").config();
const { getScreenshot } = require('./ppt');

const CONSTANTS = {
  THIRTY_MINUTES: 1800,
  TWO_HOURS: 7200,
  FOUR_HOURS: 14400,
  ONE_DAY: 86400,
};

function clampValue(number, min, max) {
  return Math.max(min, Math.min(number, max));
}

const svgCss = `.loader-path{stroke-dasharray:150,200;stroke-dashoffset:-10;-webkit-animation:dash 1.5s ease-in-out infinite,color 6s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 6s ease-in-out infinite;stroke-linecap:round}@-webkit-keyframes rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}100%{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}100%{stroke-dasharray:89,200;stroke-dashoffset:-124}}@-webkit-keyframes color{0%{stroke:#70c542}40%{stroke:#70c542}66%{stroke:#70c542}80%,90%{stroke:#70c542}}@keyframes color{0%{stroke:#70c542}40%{stroke:#70c542}66%{stroke:#70c542}80%,90%{stroke:#70c542}}`

module.exports = async (req, res) => {
  let {
    comments,
    svg,
    noCache = false,
    cache_seconds,
    lazy = false,
    specificComment = false
  } = req.query;
  if(lazy==="false") lazy = false;
  if (!noCache) {
    const cacheSeconds = clampValue(
      parseInt(cache_seconds || CONSTANTS.TWO_HOURS, 10),
      CONSTANTS.TWO_HOURS,
      CONSTANTS.ONE_DAY
    );
    res.setHeader("Cache-Control", `public, max-age=${cacheSeconds}`);
  }
  try {
    let comment = '';
    if(!specificComment) {
      let _comments = JSON.parse(Buffer.from(comments, 'base64').toString('ascii').replace(/'/g, '"'));
      if (!_comments.length) return false;
      comment = specificComment || _comments[Math.floor(Math.random() * _comments.length)];
      console.log("comment", comment)
      if (svg) {
        res.setHeader("Content-Type", "image/svg+xml");
        if(lazy)
        return res.send(`
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style>${svgCss}</style><circle class="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#70c542" stroke-width="2"/>
        <a xlink:href="${comment}">
        <image id="myimage" href="https://github-readme-testimonials.vercel.app/api?specificComment=${escape(comment)}"/>
        </a>
        </svg>`);
      }
    } else {
      comment = specificComment
    }
    console.log("comment", comment)
    const im = await getScreenshot(comment);
    if(svg && !lazy){
      return res.send(`
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <a xlink:href="${comment}">
      <image id="myimage" href="data:image/png;base64,${im}"/>
      </a>
      <a xlink:href="${comment}">
      <text
        font-weight="normal" fill="#008F68">
          <tspan>
            Link
          </tspan>
      </text>
    </a>

      </svg>`);
    } else {
      const img = Buffer.from(im, 'base64');
      res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': img.length
      });
      return res.end(img);
    }
  } catch (err) {
    return res.send(
      err
    );
  }
};