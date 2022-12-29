const Photo = require('../models/Photo');

exports.getAddPage = (req, res) => {
  res.render('add', {
    page_name: 'add',
  });
};

exports.getAboutPage = (req, res) => {
  res.render('about', {
    page_name: 'about',
  });
};

exports.getEditPage = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  res.render('edit', {
    photo,
  });
};
