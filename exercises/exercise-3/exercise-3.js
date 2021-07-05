let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

console.log(`QTY\tITEM\t\t    TOTAL`)
let total = 0;
for ({ quantity, itemName, unitPrice} of order){
  total += quantity * unitPrice;
  let unitTotal = quantity * unitPrice;
  if(unitPrice === 3) {
    console.log(`${quantity}\t${itemName}    ${unitTotal.toFixed(2)}`);
  } else{
    console.log(`${quantity}\t${itemName}\t    ${unitTotal.toFixed(2)}`);
  }
}
console.log(`\nTotal: ${total}`);