const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname)));

let employees = [
    { id: "EMP001", name: "John Doe", department: "IT / Software", role: "Senior Developer", salary: 5000, checkIn: "09:15 AM", status: "Present", bonus: 500 },
    { id: "EMP002", name: "Jane Smith", department: "Human Resources", role: "HR Manager", salary: 4500, checkIn: "09:30 AM", status: "Present", bonus: 400 },
    { id: "EMP003", name: "Alex Johnson", department: "Marketing", role: "Designer", salary: 3500, checkIn: "-", status: "Absent", bonus: 0 }
];

app.get('/api/employees', (req, res) => {
    res.json(employees);
});

app.post('/api/employees', (req, res) => {
    const { name, department, role, salary } = req.body;

    if (!name || !department) {
        return res.status(400).json({ error: "Name and Department are required fields." });
    }

    const newId = `EMP${String(employees.length + 1).padStart(3, '0')}`;
    
    const newEmployee = {
        id: newId,
        name: name,
        department: department,
        role: role || "Staff",
        salary: Number(salary) || 3000,
        checkIn: "09:00 AM", 
        status: "Present",
        bonus: 0
    };

    employees.push(newEmployee);
    res.status(201).json({ message: "Employee added successfully!", employee: newEmployee });
});

app.get('/api/dashboard/summary', (req, res) => {
    const total = employees.length;
    const present = employees.filter(emp => emp.status === "Present").length;
    const absent = employees.filter(emp => emp.status === "Absent").length;

    res.json({
        totalEmployees: total,
        presentToday: present,
        leaveRequests: absent 
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 HRMS Server is up and running on: http://localhost:${PORT}`);
});
