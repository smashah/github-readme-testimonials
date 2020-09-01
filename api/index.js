require("dotenv").config();
var htmlToImage = require('html-to-image');
// const {
//   renderError,
//   parseBoolean,
//   parseArray,
//   clampValue,
//   CONSTANTS,
// } = require("./utils");

module.exports = async (req, res) => {
    const {
        issues
    } = req.query;
    let stats;
  
    // res.setHeader("Content-Type", "image/svg+xml");
  
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
  
      // res.setHeader("Cache-Control", `public, max-age=${cacheSeconds}`);
      const dataURl = await htmlToImage.toSvgDataURL(`
      <div class="testimonial">
	<div class="testimonial-profile">
		<img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user" />
		<h3>@example</h3>
	</div>
	<div class="testimonial-body">
		<p>
			Florin is a front-end development master, delivering pixel-perfect css and
			html designs. He is professional, highly available and delivers on his
			promises - an all around pleasure to work with!
		</p>
		<i class="fas fa-quote-right"></i>
	</div>
</div>
      `)
      return res.send(dataURl
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
        'error'
        );
    }
  };