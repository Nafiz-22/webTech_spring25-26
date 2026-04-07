const priceField = document.getElementById('price');
const quantityField = document.getElementById("perday");
const totalField = document.getElementById("total");

const unitPrice = 1000;
const totalDays = 30;

function calculateTotal() {
    let qty = Number(quantityField.value);

    if (qty < 0) {
        alert("Quantity cannot be negative!");
        qty = 0;
        quantityField.value = 0;
    } 
    else if (isNaN(qty)) {
        totalField.value = "";
        return;
    }

    const finalTotal = unitPrice * qty * totalDays;
    totalField.value = finalTotal;

    if (finalTotal > 1000) {
        alert("Congratulations! You are eligible for a gift coupon");
    }
}

quantityField.addEventListener("input", calculateTotal);