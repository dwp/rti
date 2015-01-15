var data = [ {
  "name"        : "Jane Mary Smith",
  "companyName" : "Prudential",
  "nino"        : "DE123456F",
  "pension"     : "true",
  "financials"  : [
    {"DatePaid":"01/01/15","Gross":"90.00","Deductions": "","Net" : "90.00"},
    {"DatePaid":"03/12/14","Gross":"90.00","Deductions":"10.00", "Net":"80.00"},
    {"DatePaid":"02/11/14","Gross":"90.00","Deductions":"", "Net":"90.00"},
    {"DatePaid":"05/10/14","Gross":"90.00","Deductions":"", "Net":"90.00"},
    {"DatePaid":"01/09/14","Gross":"90.00","Deductions": "","Net" : "90.00"},
    {"DatePaid":"03/08/14","Gross":"90.00","Deductions":"", "Net":"90.00"},
    {"DatePaid":"02/07/14","Gross":"90.00","Deductions":"", "Net":"90.00"},
    {"DatePaid":"01/06/14","Gross":"90.00","Deductions":"", "Net":"90.00"},
    {"DatePaid":"02/05/14","Gross":"90.00","Deductions":"", "Net":"90.00"},
    {"DatePaid":"03/04/14","Gross":"90.00","Deductions":"", "Net":"90.00"},
    {"DatePaid":"01/03/14","Gross":"90.00","Deductions":"", "Net":"90.00"},
    {"DatePaid":"02/02/14","Gross":"90.00","Deductions":"", "Net":"90.00"}
  ]
},{
  "name"        : "Mary Jane Smith",
  "companyName" : "ASDA",
  "nino"        : "ABC123456C",
  "financials"  : [
      {"DatePaid":"01/09/14","Gross":"600.00","Deductions" : "150.00","Net" : "450.00"},
      {"DatePaid":"03/08/14","Gross":"600.00","Deductions":"150.00", "Net":"450.00"}
    ]
  }
]

exports.getTableData = function() {
  return data;
}
