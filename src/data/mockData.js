export const mockData = {
    "Admin": {
        title: "Executive Dashboard",
        breadcrumb: "GLOBAL GOVERNANCE / ANALYTICS HUB",
        kpis: [
            { val: "10,245", label: "Active Census", color: "var(--white)" },
            { val: "3,200", label: "Leads Injected", color: "var(--gold)" },
            { val: "$4.1M", label: "Revenue Sync", color: "var(--gold)" },
            { val: "92.4%", label: "System Integrity", color: "#10b981" },
            { val: "1,450", label: "Faculty Members", color: "var(--white)" },
            { val: "99.9%", label: "System Uptime", color: "#10b981" }
        ]
    },
    "Faculty": {
        title: "Faculty Control Center",
        breadcrumb: "INSTRUCTIONAL_LOGIC / FACULTY_PROFILE",
        kpis: [
            { val: "04", label: "Active Classes", color: "var(--gold)" },
            { val: "185", label: "Total Students", color: "var(--white)" },
            { val: "96%", label: "Avg Attendance", color: "#10b981" },
            { val: "12", label: "Pending Marks", color: "var(--white)" }
        ]
    },
    "Student": {
        title: "Student Profile",
        breadcrumb: "SCHOLAR_CORE / PERSONAL_INFRA",
        kpis: [
            { val: "94%", label: "My Presence", color: "#10b981" },
            { val: "$1,250", label: "Fees Pending", color: "#ef4444" },
            { val: "9.42", label: "Current GPA", color: "var(--gold)" },
            { val: "02", label: "Active Exams", color: "var(--white)" }
        ]
    }
};

// --- 1.0 Demo Build Brief Alignment (Daneen Al Majaz IT Services) ---

export const demoAccounts = {
    admin: { email: 'admin@campusnexus.demo', pass: 'Demo@123', role: 'Management' },
    admissions: { email: 'admissions@campusnexus.demo', pass: 'Demo@123', role: 'Admissions' },
    exam: { email: 'examcell@campusnexus.demo', pass: 'Demo@123', role: 'Exams' },
    accounts: { email: 'accounts@campusnexus.demo', pass: 'Demo@123', role: 'Accounts' },
    hr: { email: 'hr@campusnexus.demo', pass: 'Demo@123', role: 'HR' },
    finance: { email: 'finance@campusnexus.demo', pass: 'Demo@123', role: 'Finance' },
    faculty: { email: 'faculty.meera@campusnexus.demo', pass: 'Demo@123', role: 'Faculty' },
    student: { email: 'rahul.sharma@campusnexus.demo', pass: 'Demo@123', role: 'Student' }
};

export const globalStats = {
    Students: '10,245',
    Faculty: '1,250',
    Admissions: '3,200',
    Revenue: '$4.2M'
};

export const campusNames = ['MAIN_CAMPUS', 'CITY_CAMPUS', 'NORTH_CAMPUS'];

export const sidebarTemplates = {
    "Management": `
        <button class="nav-item active" data-view="Dashboard"><i data-lucide="layout-dashboard"></i> <span class="nav-label">Dashboard</span></button>
        <button class="nav-item" data-view="Admissions"><i data-lucide="user-plus"></i> <span class="nav-label">Admissions</span></button>
        <button class="nav-item" data-view="SIS"><i data-lucide="users"></i> <span class="nav-label">SIS (Students)</span></button>
        <button class="nav-item" data-view="Academics"><i data-lucide="book-open"></i> <span class="nav-label">Academics</span></button>
        <button class="nav-item" data-view="Timetable"><i data-lucide="calendar"></i> <span class="nav-label">Timetable</span></button>
        <button class="nav-item" data-view="Attendance"><i data-lucide="check-circle"></i> <span class="nav-label">Attendance</span></button>
        <button class="nav-item" data-view="Exams"><i data-lucide="file-edit"></i> <span class="nav-label">Exams & Results</span></button>
        <button class="nav-item" data-view="Fees"><i data-lucide="dollar-sign"></i> <span class="nav-label">Fees & Receipts</span></button>
        <button class="nav-item" data-view="HRMS"><i data-lucide="briefcase"></i> <span class="nav-label">HRMS</span></button>
        <button class="nav-item" data-view="Finance"><i data-lucide="trending-up"></i> <span class="nav-label">Finance</span></button>
        <button class="nav-item" data-view="ReportsHub"><i data-lucide="file-text"></i> <span class="nav-label">ReportsHub</span></button>
        <button class="nav-item" data-view="Settings"><i data-lucide="settings"></i> <span class="nav-label">Settings</span></button>
    `,
    "Admissions": `
        <button class="nav-item active" data-view="Dashboard"><i data-lucide="layout-dashboard"></i> <span class="nav-label">Intake Performance</span></button>
        <button class="nav-item" data-view="Admissions"><i data-lucide="users"></i> <span class="nav-label">Lead Pipeline</span></button>
        <button class="nav-item" data-view="Reports"><i data-lucide="file-text"></i> <span class="nav-label">Daily Analytics</span></button>
    `,
    "Exams": `
        <button class="nav-item active" data-view="Dashboard"><i data-lucide="layout-dashboard"></i> <span class="nav-label">Exam Dash</span></button>
        <button class="nav-item" data-view="Exams"><i data-lucide="file-edit"></i> <span class="nav-label">Exam Hub</span></button>
        <button class="nav-item" data-view="Reports"><i data-lucide="trending-up"></i> <span class="nav-label">Result Pulse</span></button>
    `,
    "Accounts": `
        <button class="nav-item active" data-view="Dashboard"><i data-lucide="layout-dashboard"></i> <span class="nav-label">Fiscal Overview</span></button>
        <button class="nav-item" data-view="Fees"><i data-lucide="dollar-sign"></i> <span class="nav-label">Fee Control</span></button>
        <button class="nav-item" data-view="Finance"><i data-lucide="trending-up"></i> <span class="nav-label">Collections</span></button>
        <button class="nav-item" data-view="Reports"><i data-lucide="file-text"></i> <span class="nav-label">Fee Reports</span></button>
    `,
    "HR": `
        <button class="nav-item active" data-view="Dashboard"><i data-lucide="layout-dashboard"></i> <span class="nav-label">Human Capital Pulse</span></button>
        <button class="nav-item" data-view="Directory"><i data-lucide="users"></i> <span class="nav-label">Resource Directory</span></button>
        <button class="nav-item" data-view="Leave"><i data-lucide="sun"></i> <span class="nav-label">Leave Control</span></button>
        <button class="nav-item" data-view="Payroll"><i data-lucide="credit-card"></i> <span class="nav-label">Payroll Hub</span></button>
        <button class="nav-item" data-view="Reports"><i data-lucide="file-text"></i> <span class="nav-label">HR Reports</span></button>
    `,
    "Finance": `
        <button class="nav-item active" data-view="Dashboard"><i data-lucide="layout-dashboard"></i> <span class="nav-label">Fiscal Pulse</span></button>
        <button class="nav-item" data-view="Ledger"><i data-lucide="landmark"></i> <span class="nav-label">Sovereign Ledger</span></button>
        <button class="nav-item" data-view="Assets"><i data-lucide="gem"></i> <span class="nav-label">Asset Matrix</span></button>
        <button class="nav-item" data-view="Reports"><i data-lucide="file-text"></i> <span class="nav-label">Finance Analytics</span></button>
    `,
    "Faculty": `
        <button class="nav-item active" data-view="Dashboard"><i data-lucide="layout-dashboard"></i> <span class="nav-label">Instructional Hub</span></button>
        <button class="nav-item" data-view="Academics"><i data-lucide="book"></i> <span class="nav-label">My Classes</span></button>
        <button class="nav-item" data-view="Attendance"><i data-lucide="check-circle"></i> <span class="nav-label">Mark Attendance</span></button>
        <button class="nav-item" data-view="Reports"><i data-lucide="trending-down"></i> <span class="nav-label">Academic Pulse</span></button>
    `,
    "Student": `
        <button class="nav-item active" data-view="Dashboard"><i data-lucide="shield"></i> <span class="nav-label">Sovereign Pulse</span></button>
        <button class="nav-item" data-view="Timetable"><i data-lucide="calendar"></i> <span class="nav-label">Schedule</span></button>
        <button class="nav-item" data-view="Attendance"><i data-lucide="layout-dashboard"></i> <span class="nav-label">Presence Ledger</span></button>
        <button class="nav-item" data-view="Exams"><i data-lucide="book"></i> <span class="nav-label">Evaluation Hub</span></button>
        <button class="nav-item" data-view="Fees"><i data-lucide="credit-card"></i> <span class="nav-label">Fiscal Portal</span></button>
        <button class="nav-item" data-view="ReportsHub"><i data-lucide="megaphone"></i> <span class="nav-label">Notices</span></button>
    `,
    "Parent": `
        <button class="nav-item active" data-view="Dashboard"><i data-lucide="shield"></i> <span class="nav-label">Guardian Hub</span></button>
        <button class="nav-item" data-view="Attendance"><i data-lucide="layout-dashboard"></i> <span class="nav-label">Ward Attendance</span></button>
        <button class="nav-item" data-view="Exams"><i data-lucide="book"></i> <span class="nav-label">Academic Ledger</span></button>
        <button class="nav-item" data-view="Fees"><i data-lucide="credit-card"></i> <span class="nav-label">Fee Portal</span></button>
        <button class="nav-item" data-view="ReportsHub"><i data-lucide="megaphone"></i> <span class="nav-label">Broadcasts</span></button>
    `
};
