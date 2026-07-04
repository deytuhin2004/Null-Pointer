const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory Database (Prototype er jonno)
let hospitalResources = {
    beds: { total: 100, available: 45 },
    doctors: { total: 30, onDuty: 12 },
    oxygenCylinders: { total: 50, available: 20 }
};

// GET Route: Resource data fetch korar jonno
app.get('/api/resources', (req, res) => {
    res.json(hospitalResources);
});

// POST Route: Resource data update korar jonno
app.post('/api/resources/update', (req, res) => {
    const { type, field, value } = req.body;
    
    if (hospitalResources[type] && hospitalResources[type][field] !== undefined) {
        hospitalResources[type][field] = parseInt(value) || 0;
        return res.json({ success: true, message: "Resource updated successfully!", data: hospitalResources });
    }
    
    return res.status(400).json({ success: false, message: "Invalid resource type or field." });
});

// Server Start
app.listen(PORT, '0.0.0.0', () => { 
    console.log(`Server running on http://0.0.0.0:${PORT}`); 
});