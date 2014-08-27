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
      Author.create({name: 'ips'}).exec(function createCB(err, created){
          console.log(created.name);
      });
      Author.find({}).exec(function findCB(err, found){
//          var user = null;
//        while(found.length){
//            user = found.pop().name;
//        }
//          res.render('book/show', {
//              user: user
//          });
      });
    console.log("ss");
//    return res.json({
//      todo: 'show() is not implemented yet!'
//    });
    res.render('book/show');
  }
};

