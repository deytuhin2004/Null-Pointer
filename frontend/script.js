function openTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(button => button.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add('active');
    }
}

let totalEmployees = 45; 

function handleAddEmployee(event) {
    event.preventDefault();

    const fullNameInput = document.getElementById('empFullName');
    const departmentSelect = document.getElementById('empDepartment');
    const roleInput = document.getElementById('empRole');
    const salaryInput = document.getElementById('empSalary');

    const name = fullNameInput.value.trim();
    const dept = departmentSelect.value;
    const role = roleInput ? roleInput.value.trim() : "Staff";
    const salary = salaryInput ? salaryInput.value.trim() : "3000";

    if (name === "") return;

    totalEmployees++;
    const empId = `#EMP${String(totalEmployees).padStart(3, '0')}`;

    const totalEmpBadge = document.getElementById('statTotalEmployees');
    if (totalEmpBadge) {
        totalEmpBadge.textContent = totalEmployees;
    }
    const empTableBody = document.querySelector('#employees table tbody');
    if (empTableBody) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${empId}</td>
            <td>${name}</td>
            <td>${dept} Department</td>
            <td>${role}</td>
        `;
        empTableBody.appendChild(newRow);
    }

    const attendanceTableBody = document.querySelector('#attendance table tbody');
    if (attendanceTableBody) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${name}</td>
            <td>09:00 AM</td>
            <td style="color: green; font-weight: bold;">Present</td>
        `;
        attendanceTableBody.appendChild(newRow);
    }
    const payrollTableBody = document.querySelector('#payroll table tbody');
    if (payrollTableBody) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${empId}</td>
            <td>${name}</td>
            <td>$${Number(salary).toLocaleString()}</td>
            <td>$0</td>
            <td>$${Number(salary).toLocaleString()}</td>
        `;
        payrollTableBody.appendChild(newRow);
    }

    alert(`Success: ${name} has been added as ${empId}!`);

    document.getElementById('addEmployeeForm').reset();
}
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('addEmployeeForm');
    if (form) {
        form.addEventListener('submit', handleAddEmployee);
    }
});
