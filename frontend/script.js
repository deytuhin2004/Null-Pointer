const API_URL = 'http://localhost:5000/api/resources';

// API theke data load korar function
async function loadResources() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        // Dashboard text update kora
        document.getElementById('available-beds').innerText = data.beds.available;
        document.getElementById('total-beds').innerText = data.beds.total;

        document.getElementById('onduty-doctors').innerText = data.doctors.onDuty;
        document.getElementById('total-doctors').innerText = data.doctors.total;

        document.getElementById('available-oxygen').innerText = data.oxygenCylinders.available;
        document.getElementById('total-oxygen').innerText = data.oxygenCylinders.total;
    } catch (error) {
        console.error("Data fetch korte somossa hocche:", error);
    }
}

// Form submit kore data update korar handler
document.getElementById('update-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const type = document.getElementById('resource-type').value;
    let field = document.getElementById('resource-field').value;
    const value = document.getElementById('new-value').value;

    // Backend object format mapping (e.g., doctors er field name 'onDuty')
    if (type === 'doctors' && field === 'available') {
        field = 'onDuty';
    }

    try {
        const response = await fetch(`${API_URL}/update`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type, field, value })
        });

        const result = await response.json();
        if (result.success) {
            alert("Dashboard successful vabe update hoyeche!");
            loadResources(); // UI refresh
            document.getElementById('update-form').reset();
        } else {
            alert("Update failed: " + result.message);
        }
    } catch (error) {
        console.error("Update request pathate somossa:", error);
    }
});

// Prothome data load hobe web page run korle
loadResources();