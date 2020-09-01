require("dotenv").config();
const {
  renderError,
  parseBoolean,
  parseArray,
  clampValue,
  CONSTANTS,
} = require("../src/common/utils");

module.exports = async (req, res) => {
    const {
        issues
    } = req.query;
    let stats;
  
    res.setHeader("Content-Type", "image/svg+xml");
  
    if (blacklist.includes(username)) {
      return res.send(renderError("Something went wrong"));
    }
  
    try {
    //   stats = await fetchStats(
    //     username,
    //     parseBoolean(count_private),
    //     parseBoolean(include_all_commits)
    //   );
  
      const cacheSeconds = clampValue(
        parseInt(cache_seconds || CONSTANTS.TWO_HOURS, 10),
        CONSTANTS.TWO_HOURS,
        CONSTANTS.ONE_DAY
      );
  
      res.setHeader("Cache-Control", `public, max-age=${cacheSeconds}`);
  
      return res.send(issues
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
        // }
        )
      );
    } catch (err) {
      return res.send(
          renderError(err.message, err.secondaryMessage).
          );
    }
  };