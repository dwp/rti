var data = [ {
  "name"        : "Mary Jane Smith",
  "companyName" : "Prudential",
  "nino"        : "ABC123456C",
  "pension"     : "true",
  "financials"  : [
    {"DatePaid":"01/01/15","Gross":"80.00","Deductions" : "","Net" : "80.00"},
    {"DatePaid":"03/12/14","Gross":"80.00","Deductions":"10.00", "Net":"70.00"},
    {"DatePaid":"02/11/14","Gross":"80.00","Deductions":"", "Net":"80.00"}
  ]
}
]

exports.getTableData = function() {
  return data;
}
