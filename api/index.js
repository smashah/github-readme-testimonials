require("dotenv").config();
const {getScreenshot} = require('./ppt');
module.exports = async (req, res) => {
    const {
        issues
    } = req.query;
  
    res.setHeader("Content-Type", "image/png");
  
    // if (blacklist.includes(username)) {
    //   return res.send(renderError("Something went wrong"));
    // }
  
    try {
    //   stats = await fetchStats(
    //     username,
    //     parseBoolean(count_private),
    //     parseBoolean(include_all_commits)
    //   );
  
      // const cacheSeconds = clampValue(
      //   parseInt(cache_seconds || CONSTANTS.TWO_HOURS, 10),
      //   CONSTANTS.TWO_HOURS,
      //   CONSTANTS.ONE_DAY
      // );
  
      const comments = [
        'https://github.com/open-wa/wa-automate-nodejs/issues/747#issuecomment-682116171',
        ...issues
    ]
    var comment = comments[Math.floor(Math.random() * comments.length)];
      // res.setHeader("Cache-Control", `public, max-age=${cacheSeconds}`);

    const x = await getScreenshot(comment);

      return res.send(`data:image/png;base64,${x}`
        // renderStatsCard(stats, {
        //   hide: parseArray(hide),
        //   show_icons: parseBoolean(show_icons),
        //   hide_title: parseBoolean(hide_title),
        //   hide_border: parseBoolean(hide_border),
        //   hide_rank: parseBoolean(hide_rank),
        //   include_all_commits: parseBoolean(include_all_commits),
        //   line_height,
        //   title_color,
        //   icon_color,
        //   text_color,
        //   bg_color,
        //   theme,
        // })
      );
    } catch (err) {
      return res.send(
        err
        );
    }
  };