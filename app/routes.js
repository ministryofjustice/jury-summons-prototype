module.exports = {
  bind : function (app) {

    app.get('*', function (req, res) {
      res.render('layout', {env: process.env['NODE_ENV']});
    });

    // add your routes here

  }
};
