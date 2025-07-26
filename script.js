// Fuel Cost Calculator JavaScript

// Simple function to update placeholders based on fuel type
function updatePlaceholders() {
    var fuelType = document.getElementById('fuelType').value;
    var fuelPriceInput = document.getElementById('fuelPrice');
    var mileageInput = document.getElementById('mileage');
    
    if (fuelPriceInput) {
        switch(fuelType) {
            case 'petrol':
                fuelPriceInput.placeholder = 'Enter petrol price per liter';
                break;
            case 'diesel':
                fuelPriceInput.placeholder = 'Enter diesel price per liter';
                break;
            case 'cng':
                fuelPriceInput.placeholder = 'Enter CNG price per kg';
                break;
            default:
                fuelPriceInput.placeholder = 'Enter current fuel price';
        }
    }
    
    if (mileageInput) {
        mileageInput.placeholder = fuelType === 'cng' ? 'Enter mileage (km/kg)' : 'Enter mileage (km/l)';
    }
}

// Main calculation function - Simple and Direct
function calculateFuel() {
    // Get values
    var fuelType = document.getElementById('fuelType').value;
    var fuelPrice = parseFloat(document.getElementById('fuelPrice').value);
    var distance = parseFloat(document.getElementById('distance').value);
    var mileage = parseFloat(document.getElementById('mileage').value);
    
    // Validate inputs
    if (!fuelType) {
        alert('Please select a fuel type');
        return;
    }
    
    if (!fuelPrice || fuelPrice <= 0) {
        alert('Please enter a valid fuel price');
        return;
    }
    
    if (!distance || distance <= 0) {
        alert('Please enter a valid distance');
        return;
    }
    
    if (!mileage || mileage <= 0) {
        alert('Please enter a valid mileage');
        return;
    }
    
    // Calculate results
    var fuelRequired = distance / mileage;
    var totalCost = fuelRequired * fuelPrice;
    var costPerKm = totalCost / distance;
    
    // Display results
    var unit = fuelType === 'cng' ? 'kg' : 'L';
    var currency = '₹';
    
    document.getElementById('fuelRequired').textContent = fuelRequired.toFixed(2) + ' ' + unit;
    document.getElementById('totalCost').textContent = currency + totalCost.toFixed(2);
    document.getElementById('costPerKm').textContent = currency + costPerKm.toFixed(2);
    
    // Show results
    var resultsDiv = document.getElementById('results');
    resultsDiv.classList.add('show');
    resultsDiv.style.display = 'block';
    
    // Scroll to results
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Optional: Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add any additional initialization here if needed
    console.log('Fuel Cost Calculator loaded successfully');
});

// Optional: Add keyboard support for Enter key
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        // Check if we're in an input field
        var activeElement = document.activeElement;
        if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'SELECT')) {
            calculateFuel();
        }
    }
});

