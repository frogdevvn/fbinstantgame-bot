var VERIFY_TOKEN = "@@yolostudio";
var PAGES = [
	// Add your pages here, change key for each one, I use numberical values starting at 0
	{
		id: "297646080934977",
		name: "Merge Spaceship IDLE",
		key: "0",
		title: "Your offline earnings are FULL!",
		subtitle: "We miss you, come back and play",
		cta: "Play Now",
		imageurl: "https://i.ibb.co/qnPQwzz/banner-share.jpg",
		payload: null,
		pat: "EAADqWjBZB7owBAOuNVXy64I59rRr6lZBTATEYPQOB73UE0ZArAwZC9m7e4UDE8SVmlbjU7skZCzGfQE0EP9iVYBxMoNvJ0zZBVb27whz1H7X4a4GTzUV6cDOK4YHZAaZAQFUZCZCp2W7jdewApmcAkXMuQpt3R4wLLMqZCMI9eK2ZB6I4aQFmQeOojcN",
	},
];

function GetGame(page_id)
{
	for (var t = 0; t < PAGES.length; t++)
	{
		if (page_id === PAGES[t].id)
			return PAGES[t];
	}
}

function GetPage(which)
{
	return PAGES[which];
}

function GetVertifyToken()
{
	return VERIFY_TOKEN;
}

module.exports = 
{
	GetGame,
	GetPage,
	GetVertifyToken,
};
