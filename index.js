const express = require('express');
const path = require('path');

const server = express('server');

//middleware definitions
server.use(express.static(path.join(__dirname, 'public')));

// const serveHomePage = (req, res) => {
//      const homepageFilePath = path.join(__dirname, 'public', 'index.html');
//      res.sendFile(homepageFilePath);
// };

// const serveProfilePage = (req, res) => {
//      const profilePageFilePath = path.join(__dirname, 'public', 'profile.html');
//      res.sendFile(profilePageFilePath);
// };
// const serveAboutPage = (req, res) => {
//      const aboutPageFilePath = path.join(__dirname, 'public', 'about.html');
//      res.sendFile(aboutPageFilePath);
// };
// const servePortfolioPage = (req, res) => {
//      const portfolioPageFilePath = path.join(
//           __dirname,
//           'public',
//           'portfolio.html'
//      );
//      res.sendFile(portfolioPageFilePath);
// };

////routes definitions
// server.get('/', serveHomePage);
// server.get('/profile', serveProfilePage);
// server.get('/about', serveAboutPage);
// server.get('/portfolio', servePortfolioPage);

server.listen(3000, () => console.log('server is ready'));
