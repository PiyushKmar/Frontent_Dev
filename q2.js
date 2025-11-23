const menu = {
    pizza: 250,
    burger: 120,
    fries: 80,
    momo: 150,
    coke: 40
};

function calculateBill(orderItems) {
    
    const prices = orderItems.map(item => {
        if (!menu[item]) {
            throw new Error(`Item not available: ${item}`);
        }
        return menu[item];
    });

    
    const total = prices.reduce((sum, price) => sum + price, 0);
    return total;
}


try {
    const order = ["pizza", "burger", "fries"];
    const bill = calculateBill(order);
    console.log("Order:", order.join(", "));
    console.log("Total Bill:", bill);
} catch (err) {
    console.log("Error:", err.message);
}

try {
    const wrongOrder = ["pizza", "noodles"]; // invalid item
    const bill = calculateBill(wrongOrder);
    console.log("Total Bill:", bill);
} catch (err) {
    console.log("Error:", err.message);
}
