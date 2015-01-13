var data = [ {
  "name"        : "Jane Mary Smith",
  "companyName" : "Sainsburys",
  "nino"        : "DE123456F",
  "pension"     : "true",
  "financials"  : [
    {"DatePaid":"01/09/14","Gross":"80.00","Deductions" : "","Net" : "80.00"},
    {"DatePaid":"03/08/14","Gross":"80.00","Deductions":"10.00", "Net":"70.00"},
    {"DatePaid":"02/07/14","Gross":"80.00","Deductions":"", "Net":"80.00"},
    {"DatePaid":"01/06/14","Gross":"80.00","Deductions":"", "Net":"80.00"},
    {"DatePaid":"02/05/14","Gross":"80.00","Deductions":"", "Net":"80.00"},
    {"DatePaid":"03/04/14","Gross":"70.00","Deductions":"", "Net":"70.00"},
    {"DatePaid":"01/03/14","Gross":"70.00","Deductions":"", "Net":"70.00"},
    {"DatePaid":"02/02/14","Gross":"70.00","Deductions":"", "Net":"70.00"},
    {"DatePaid":"01/01/14","Gross":"70.00","Deductions":"", "Net":"70.00"},
    {"DatePaid":"02/07/14","Gross":"80.00","Deductions":"", "Net":"80.00"},
    {"DatePaid":"01/06/14","Gross":"80.00","Deductions":"", "Net":"80.00"},
    {"DatePaid":"02/05/14","Gross":"80.00","Deductions":"", "Net":"80.00"},
    {"DatePaid":"03/04/14","Gross":"70.00","Deductions":"", "Net":"70.00"},
    {"DatePaid":"01/03/14","Gross":"70.00","Deductions":"20.00", "Net":"50.00"},
    {"DatePaid":"02/02/14","Gross":"70.00","Deductions":"", "Net":"70.00"},
    {"DatePaid":"01/01/14","Gross":"70.00","Deductions":"", "Net":"70.00"},
    {"DatePaid":"03/12/13","Gross":"70.00","Deductions":"", "Net":"70.00"}
  ]
},{
  "name"        : "Jane Mary Smith",
  "companyName" : "Tesco",
  "nino"        : "DE123456F",
  "financials"  : [
      {"DatePaid":"01/09/14","Gross":"500.00","Deductions" : "100.00","Net" : "400.00"},
      {"DatePaid":"01/09/14","Gross":"500.00","Deductions" : "100.00","Net" : "400.00"},
      {"DatePaid":"01/09/14","Gross":"500.00","Deductions" : "100.00","Net" : "400.00"},
      {"DatePaid":"01/09/14","Gross":"500.00","Deductions" : "100.00","Net" : "400.00"},
      {"DatePaid":"01/09/14","Gross":"500.00","Deductions" : "100.00","Net" : "400.00"},
      {"DatePaid":"01/09/14","Gross":"500.00","Deductions" : "100.00","Net" : "400.00"},
      {"DatePaid":"03/08/14","Gross":"500.00","Deductions":"100.00", "Net":"400.00"}
    ]
  }
]

exports.getTableData = function() {
  return data;
}
