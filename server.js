import express from 'express';
import UsersRatings from './src/UsersRatings.js';

const app = express();
const usersratings = new UsersRatings();


app.get(
  '/excellent',
  function(req, res, next) {
    usersratings.rateExcellent();
    next();
  },
  function(req, res) {
    res.send({ ratings: usersratings.excellentrating });
  }
);



var server = app.listen(4000, () =>
  console.log('App listening on port 4000!')
);

module.exports = {
  server: server,
  app: app
};
