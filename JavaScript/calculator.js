/*Reference:
   (Mozilla. 2026. JavaScript Guide: Working with Numbers and Arithmetic. 
   Available at: https://developer.mozilla.org/) [Accessed: 2 November 2026]. 
   
   calculator.js JavaScript for the Fee Calculator*/

document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('input[name="package"]');
    const selectedCountDisplay = document.getElementById('selected-count');
    const subtotalDisplay = document.getElementById('subtotal-display');
    const discountDisplay = document.getElementById('discount-display');
    const totalDisplay = document.getElementById('total-display');
    const resetBtn = document.getElementById('reset-btn');

    function updateCalculator() {
        let subtotal = 0;
        let count = 0;

        checkboxes.forEach(box => {
            if (box.checked) {
                subtotal += parseInt(box.value);
                count++;
            }
        });

        //Dynamically multi-items pricing and discount calculation
        //implemented using DOM event listeners and arithmetic rules (Mozilla, 2026).
        let discountRate = 0;
        if (count === 2) {
            discountRate = 0.05; // 5% discount for two items
        } else if (count === 3) {
            discountRate = 0.10; // 10% discount for three items
        } else if (count >= 4) {
            discountRate = 0.15; // 15% discount for four or more items
        }

        const discountAmount = subtotal * discountRate;
        const finalTotal = subtotal - discountAmount;

        //Update display text on the page
        selectedCountDisplay.textContent = `Selected items: ${count}`;
        subtotalDisplay.textContent = `Subtotal: R${subtotal}`;
        discountDisplay.textContent = `Multi-booking Discount: -R${discountAmount}`;
        totalDisplay.textContent = `Final Total: R${finalTotal}`;
    }
    checkboxes.forEach(box => {
        box.addEventListener('change', updateCalculator);
    });

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            setTimeout(updateCalculator, 10); // Update after reset
        });
    }

    //Initial update to set the display correctly on page load
    updateCalculator();
    console.log("Fee Calculator script initialized.");
});