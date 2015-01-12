var tableData = require('./assets/javascripts/data');

module.exports = {
  bind : function (app, assetPath) {
    app.get('/', function (req, res) {
      res.render('index',
                {'assetPath' : assetPath});
    });

    /* Example pages */

    app.get('/examples/hello-world', function (req, res) {
      res.render('examples/hello-world', {'message' : 'Hello world'});
    });

    app.get('/examples/inheritance', function (req, res) {
      res.render('examples/inheritance/page-level', {'message' : 'Hello world'});
    });

    app.get('/examples/alpha', function (req, res) {
      res.render('examples/alpha/alpha', {'assetPath' : assetPath });
    });

    app.get('/examples/elements', function (req, res) {
      res.render('examples/elements/forms', {'assetPath' : assetPath });
    });

    app.get('/examples/rti', function (req, res) {
      res.render('examples/rti/rti', {
        'assetPath' : assetPath
        });
    });

    app.post('/examples/rti/nino', function(req, res) {
      res.send('staffnumber: ' + req.body.staffnumber);
    });

    app.get('/examples/rti/data', function (req, res) {
      res.render('examples/rti/data',{
        data        : tableData.getTableData(),
        'assetPath' : assetPath
      });
    });
  }
};
