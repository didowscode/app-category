'use strict';
module.exports = function(app) {
var category = require('../controllers/categoryController');
// messages Routes
app.route('/category')
   .get(category.filter);
};