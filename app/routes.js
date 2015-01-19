
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
      res.render('examples/rti/login', {
        'assetPath' : assetPath
        });
    });

    app.post('/examples/rti/nino', function (req, res) {
      res.render('examples/rti/nino', {
        'assetPath' : assetPath
      })
    });

    app.get('/examples/rti/data', function (req, res) {
      var tableDataPath = require('./assets/javascripts/data');
      res.render('examples/rti/data',{
        data        : tableDataPath.getTableData(),
        'assetPath' : assetPath
      });
    });

    app.post('/examples/rti/data', function (req, res) {

      var date        = new Date(),
          todaysDate  = date.getDate(),
          todaysMonth = date.getMonth() + 1,
          thisYear    = date.getFullYear(),
          today       = todaysDate + '/' + todaysMonth + "/" + thisYear,
          getFromDate = date.setDate(date.getDate() -90),
          fromDate    = new Date(getFromDate);

      if( req.body.nino.toLowerCase() === 'de123456f') {
        var ninoName = 'Jane Smith';
      } else {
        var ninoName = 'Mary Jane Smith';
      }

      if (req.body.nino) {
        if (req.body.radioGroup === '3') {
          var jsonData = require('./assets/javascripts/' + req.body.nino.toLowerCase() + '_3');
          var fromDdate = todaysDate  + '/' + (fromDate.getMonth() + 1) + "/" + fromDate.getFullYear();
        } else if (req.body.radioGroup === '12') {
          var jsonData = require('./assets/javascripts/' + req.body.nino.toLowerCase() + '_12');
          var fromDdate = todaysDate + '/' + todaysMonth + "/" + fromDate.getFullYear();
        } else {
          var jsonData = require('./assets/javascripts/' + req.body.nino.toLowerCase());
          var fromDdate = todaysDate  + '/' + todaysMonth + "/" + (thisYear - 2);
        }
      } else {
        var jsonData = require('./assets/javascripts/data');
      }

      var tableDataPath = jsonData,
          ninoFromDate  = req.body.fromDay + '/' + req.body.fromMonth + '/' + req.body.fromYear,
          ninoToDate    = req.body.toDay + '/' + req.body.toMonth + '/' + req.body.toYear;

      res.render('examples/rti/data',{
        data            : tableDataPath.getTableData(),
        'ninoName'      : ninoName,
        'assetPath'     : assetPath,
        'nino'          : req.body.nino.toUpperCase(),
        'today'         : today,
        'prevDate'      : '03/02/13'
      });
    });
  }

};
