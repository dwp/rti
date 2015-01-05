var entries = [
{"DatePaid": "01/09/14", "Gross" : "80.00", "Deductions" : "", "Net" : "80.00"},
{"DatePaid":"03/08/14","Gross":"80.00","Deductions":"10.00", "Net":"70.00"}
{"DatePaid":"02/07/14","Gross":"80.00","Deductions":"", "Net":"80.00"},
{"DatePaid":"01/06/14","Gross":"80.00","Deductions":"", "Net":"80.00"},
{"DatePaid":"02/05/14","Gross":"80.00","Deductions":"", "Net":"80.00"},
{"DatePaid":"03/04/14","Gross":"70.00","Deductions":"", "Net":"70.00"},
{"DatePaid":"01/03/14","Gross":"70.00","Deductions":"", "Net":"70.00"},
{"DatePaid":"02/02/14","Gross":"70.00","Deductions":"", "Net":"70.00"},
{"DatePaid":"01/01/14","Gross":"70.00","Deductions":"", "Net":"70.00"},
{"DatePaid":"03/12/13","Gross":"70.00","Deductions":"", "Net":"70.00"}
];


exports.getBlogEntries = function() {
  return entries;
}

exports.getBlogEntry = function(id) {
  for(var i=0; i < entries.length; i++) {
    if(entries[i].id == id) return entries[i];
  }
}
