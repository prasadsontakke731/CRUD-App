const axios = require('axios');

exports.homeRoutes = (req, res) => {
  // make a get request api/user
  axios
    .get('http://localhost:4000/api/users')
    .then((response) => {
      res.render('index.ejs', { users: response.data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `Error retriving user with id ${id}`,
      });
    });
};

exports.add_user = (req, res) => {
  res.render('add_user.ejs');
};

exports.update_user = (req, res) => {
  axios
    .get('http://localhost:4000/api/users', { params: { id: req.query.id } })
    .then(function (userdata) {
      res.render('update_user.ejs', { user: userdata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
