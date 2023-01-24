module.exports = {
  getIndex: (req, res) => {
    res.render('index.ejs', { apikey: process.env.GOOGLE_MAPS_API });
  },
};
