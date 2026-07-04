# Human Resource Management System (HRMS)

## 1. Purpose
The purpose of this project is to define and implement the functional and non-functional requirements of a Human Resource Management System (HRMS).  
The system aims to digitize and streamline core HR operations such as:
- Employee onboarding
- Profile management
- Attendance tracking
- Leave and time-off management
- Payroll visibility
- Approval workflows for admins and HR officers

## 2. Scope
The HRMS will provide:
- Secure authentication (Sign Up / Sign In)
- Role-based access (Admin vs Employee)
- Employee profile management
- Attendance tracking (daily/weekly view)
- Leave and time-off management
- Approval workflows for HR/Admin

## 3. User Classes and Characteristics
- **Admin / HR Officer**: Manages employees, approves leave & attendance, views payroll details.  
- **Employee**: Views personal profile, attendance, applies for leave, views salary details.  

## 4. Functional Requirements
### 4.1 Authentication & Authorization
- Sign Up with Employee ID, Email, Password, Role (Employee/HR), Email verification.  
- Sign In with Email + Password, error handling, dashboard redirect.  

### 4.2 Dashboards
- **Employee Dashboard**: Profile, Attendance, Leave Requests, Logout, recent activity.  
- **Admin Dashboard**: Employee list, Attendance records, Leave approvals, payroll visibility.  

### 4.3 Employee Profile Management
- View personal/job/salary details, documents, profile picture.  
- Edit limited fields (Employee) or all details (Admin).  

### 4.4 Attendance Management
- Daily/weekly attendance views, check-in/check-out, status types (Present, Absent, Half-day, Leave).  
- Employee sees own records; Admin sees all employees.  

### 4.5 Leave & Time-Off Management
- Employee applies for leave (Paid, Sick, Unpaid) with date range and remarks.  
- Admin approves/rejects requests with comments.  

### 4.6 Payroll Management
- Employee: Read-only payroll view.  
- Admin: View/update salary structure, ensure payroll accuracy.  

## 5. Team Members
- Tuhin Dey  
- Ankita Paul  
- Prisha Chakrabarti  
- Dibiya Gorai
