/**
 * BookController
 *
 * @description :: Server-side logic for managing books
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `BookController.create()`
   */
  create: function (req, res) {
    return res.json({
      todo: 'create() is not implemented yet!'
    });
  },


  /**
   * `BookController.show()`
   */
  show: function (req, res) {
    res.render('book/show');
//    console.log("ss");
//    return res.json({
//      todo: 'show() is not implemented yet!'
//    });
  }
};

