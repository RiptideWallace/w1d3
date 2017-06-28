var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var telusBCSalesData = companySalesData[0];
  var listOfBCSales = telusBCSalesData["sales"];
  var sumOfSalesBC = listOfBCSales.reduce(addBC, 0);
    function addBC(a, b) {
      return a + b;
  }
  var totalTaxesBC = salesTaxRates["BC"];

  var telusSKSalesData = companySalesData[2];
  var lisOfSKSales = telusSKSalesData["sales"];
  var sumOfSalesSK = lisOfSKSales.reduce(addSK, 0);
    function addSK(a, b) {
      return a + b;
  }
  var totalTaxesSK = salesTaxRates["SK"];

  var totalTaxesTelus = (sumOfSalesBC * totalTaxesBC) + (sumOfSalesSK * totalTaxesSK);

  var salesDataAB = companySalesData[1];
  var listOfABSales = salesDataAB["sales"]
  var sumOfSalesAB = listOfABSales.reduce(addAB, 0);
    function addAB(a, b) {
      return a + b;
  }
  var totalTaxesAB = salesTaxRates["AB"];

  var totalTaxesBombardier = sumOfSalesAB * totalTaxesAB;

console.log("Telus Total Sales: ", sumOfSalesBC + sumOfSalesSK)
console.log("Telus Total Taxes:", totalTaxesTelus)
console.log("Bombardier Total Sales:", sumOfSalesAB)
console.log("Bombardier Total Taxes:", totalTaxesBombardier)

}

var results = calculateSalesTax(companySalesData, salesTaxRates)