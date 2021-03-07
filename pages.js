var VERIFY_TOKEN = '@@yolostudio';
var PAGES = [
  // Add your pages here, change key for each one, I use numberical values starting at 0
  {
    id: '102026535293831',
    name: 'King of Tiles - Matching Game',
    key: '0',
    title: 'Daily Reward!',
    subtitle: 'A free rewards is waiting for you! Claim now!',
    cta: 'Claim',
    imageurl: 'https://i.ibb.co/5YKW8h4/Banner-1200-627.png',
    payload: null,
    pat:
      'EAAlbC6xI39oBAKgEVhgsQyBdcLjxrpyssJ60VWyPheILEFdJas8XNzSY1YvBOkfOZAX5dx3bwo7B3X0DcGBb4V3dkodX3hrQM6XeciSHVgbf6oQ4QzHFEdmZCrKdZCYCNqa1ElDxjKEaXQmOAgaeEZAnZCVI0SBUbHZAQZCIi1fjb1kZCnBN6XXP0eoqOlKnhI8ZD',
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
