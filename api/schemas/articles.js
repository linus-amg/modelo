var Schema, article, mongoose;

mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

Schema = mongoose.Schema;

article = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: String
  }
});

module.exports = mongoose.model('articles', article);