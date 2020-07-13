module.exports = {
	name: "Motor Trend", // optional, falls back to object key
	description: "Motor Trend pages",
	options: {
		frequency: 60 * 23, // 24 hours
		freshChrome: "site",
	},
	urls: [
		"https://www.motortrend.com/",
		"https://www.motortrend.com/news/roadkill-happened-must-see-tv/",
	]
};