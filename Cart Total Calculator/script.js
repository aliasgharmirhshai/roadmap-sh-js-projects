
function calculateSubtotal(items) 
{
    const totalPrice = items.reduce((accumulator, item) => 
        {
            const price = item?.price ?? 0;
            const quantity = item?.quantity ?? 0;

        const itemTotal = price * quantity;

        return accumulator + itemTotal;
    }, 0);

    return totalPrice;
}

function calculateDiscount(subtotal, discountPercent) {
    return (subtotal / 100) * discountPercent;
}

function calculateTax(amountAfterDiscount, taxPercent) {
    return (amountAfterDiscount / 100) * taxPercent; 
}

function createCartSummary(items, discountPercent, taxPercent) {
    const subtotal = calculateSubtotal(items);
    const discount = calculateDiscount(subtotal, discountPercent);
    const amountAfterDiscount = subtotal - discount;
    const tax = calculateTax(amountAfterDiscount, taxPercent);
    const total = amountAfterDiscount + tax;
    

    return {
        subtotal,
        discount,
        tax: +tax.toFixed(2),
        total: +total.toFixed(2),
    }
}

// Run 

const cartItems = [
  { name: 'Notebook', price: 10, quantity: 2 },
  { name: 'Pen', price: 2, quantity: 5 },
  { name: 'Bag', price: 30, quantity: 1 },
];

console.log(createCartSummary(cartItems, 10, 5));
console.log(calculateSubtotal(cartItems));

const singleItemCart = [{ name: 'Mouse', price: 25, quantity: 2 }];
console.log(createCartSummary(singleItemCart, 0, 10));



