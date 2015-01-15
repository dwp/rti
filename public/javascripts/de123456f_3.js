var data = [ {
  "name"        : "Jane Mary Smith",
  "companyName" : "Prudential",
  "nino"        : "DE123456F",
  "pension"     : "true",
  "financials"  : [
    {"DatePaid":"01/01/15","Gross":"90.00","Deductions": "","Net" : "90.00"},
    {"DatePaid":"03/12/14","Gross":"90.00","Deductions":"10.00", "Net":"80.00"},
    {"DatePaid":"02/11/14","Gross":"90.00","Deductions":"", "Net":"90.00"}
  ]
}
]

exports.getTableData = function() {
  return data;
}
