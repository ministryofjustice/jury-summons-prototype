var JURORS = getJurors();

/////////////

function getJurors () {
  if (process.env['JURORS']) {
    return process.env['JURORS'];
  }

  return '[{id:"54291234",postcode:"SW11AA",name:"John Smith",address:"Buckingham Palace,London,SW11AA",court:{name:"The Crown Court at Southwark",address:"1 English Ground,London,SE19 3TS",url:"https://courttribunalfinder.service.gov.uk/courts/southwark-crown-court"},datetime:"2015-09-20T09:15"}]';
}

module.exports = {
  bind : function (app) {

    app.get('/jury-service', function (req, res) {
      res.redirect('/');
    });

    app.get('/', function (req, res) {
      res.render('govuk-start-page', {
        env: process.env['NODE_ENV'], 
        debug: process.env['DEBUG']
      });
    });

    app.get('*', function (req, res) {
      res.render('layout', {
        env: process.env['NODE_ENV'],
        debug: process.env['DEBUG'],
        jurors: JURORS
      });
    });

    // add your routes here

  }
};
