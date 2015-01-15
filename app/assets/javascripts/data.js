var data = [
{
  "name": "Mary Jane Semith",
  "nino": "ABC123456C",
  "fromDate": "03/12/14",
  "toDate": "03/08/13",
  "earnings": [
{
  "organisation": "Prudential",
  "pension": "true",
  "payments": [
{"datePaid": "01/09/14", "gross": "80.00", "deduction": "", "net": "80.00"},
{"datePaid": "03/08/14", "gross": "80.00", "deduction": "10.00", "net": "70.00"},
{"datePaid": "02/07/14", "gross": "80.00", "deduction": "", "net": "80.00"},
{"datePaid": "01/06/14", "gross": "80.00", "deduction": "", "net": "80.00"},
{"datePaid": "02/05/14", "gross": "80.00", "deduction": "", "net": "80.00"},
{"datePaid": "03/04/14", "gross": "70.00", "deduction": "", "net": "70.00"},
{"datePaid": "01/03/14", "gross": "70.00", "deduction": "", "net": "70.00"},
{"datePaid": "02/02/14", "gross": "70.00", "deduction": "", "net": "70.00"},
{"datePaid": "01/01/14", "gross": "70.00", "deduction": "", "net": "70.00"},
{"datePaid": "03/12/13", "gross": "70.00", "deduction": "", "net": "70.00"}
]
}  ,
{
  "organisation": "ASDA",
  "pension": "false",
  "payments": [
{"datePaid": "01/09/14", "gross": "500.00", "deduction": "100.00", "net": "400.00"},
{"datePaid": "03/08/14", "gross": "500.00", "deduction": "100.00", "net": "400.00"}
]
}

]
}
]


exports.getTableData = function () {
  return data;
}
