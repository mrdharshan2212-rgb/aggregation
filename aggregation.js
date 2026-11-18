Query:

use RetailDB

db.Sales.insertMany([
  { Product: "Laptop", Quantity: 2, Price: 50000 },
  { Product: "Mobile", Quantity: 3, Price: 20000 },
  { Product: "Laptop", Quantity: 1, Price: 50000 },
  { Product: "Tablet", Quantity: 2, Price: 15000 }
])

db.Sales.aggregate([
  {
    $group: {
      id: "$Product",
      totalQuantity: { $sum: "$Quantity" },
      totalSales: {
        $sum: { $multiply: ["$Quantity", "$Price"] }
      }
    }
  },
  { $sort: { totalSales: -1 } }
])