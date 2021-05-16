var VERIFY_TOKEN = '@@yolostudio';
var PAGES = [
  // Add your pages here, change key for each one, I use numberical values starting at 0
  {
    key: '0',
    id: '102026535293831',
    url: 'https://fb.gg/play/kingoftiles',
    name: 'King of Tiles - Matching Game',
    title: 'Daily Reward!',
    subtitle: 'A free rewards is waiting for you! Claim now!',
    cta: 'Claim',
    imageUrl: 'https://i.ibb.co/5YKW8h4/Banner-1200-627.png',
    payload: null,
    pat: 'EAAlbC6xI39oBAKgEVhgsQyBdcLjxrpyssJ60VWyPheILEFdJas8XNzSY1YvBOkfOZAX5dx3bwo7B3X0DcGBb4V3dkodX3hrQM6XeciSHVgbf6oQ4QzHFEdmZCrKdZCYCNqa1ElDxjKEaXQmOAgaeEZAnZCVI0SBUbHZAQZCIi1fjb1kZCnBN6XXP0eoqOlKnhI8ZD',
  },
  {
    key: '1',
    id: '101937265375591',
    url: 'https://fb.gg/play/onetconnectcandy',
    name: 'Onet Connect - Candy Sweet',
    title: 'Daily Reward!',
    subtitle: 'A free rewards is waiting for you! Claim now!',
    cta: 'Claim',
    imageUrl: 'https://i.ibb.co/rsYh2c5/1200627-onetcandy.jpg',
    payload: null,
    pat: 'EAAhjb5tv9JkBAIZAb73s6bfWMFTwfwT1dVHIt1xRjpbOndSmdbh2u74mwsCelX8dUxzdwdTLyAyRcj5Yt9ZBi3njENlOdaZC60icHNUtSXlxTiYto8mlb8gTQemWDSsu4vs6Y5GAJQqcZAZB1H9ACltmga1YKR8y0ZBjABq0mWr9CvnQ38eL8dadGnvxlqXQcYCtUS2vwg8wZDZD',
  },
];

function GetGame(page_id) {
  for (var t = 0; t < PAGES.length; t++) {
    if (page_id === PAGES[t].id) return PAGES[t];
  }
}

function GetPage(which) {
  return PAGES[which];
}

function GetVertifyToken() {
  return VERIFY_TOKEN;
}

module.exports = {
  GetGame,
  GetPage,
  GetVertifyToken,
};
