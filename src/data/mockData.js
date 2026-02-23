export const mockData = {
    "Admin": {
        title: "Executive Dashboard",
        breadcrumb: "GLOBAL GOVERNANCE / ANALYTICS HUB",
        kpis: [
            { val: "10,245", label: "Active Census", color: "var(--white)" },
            { val: "3,200", label: "Leads Injected", color: "var(--white)" },
            { val: "$4.1M", label: "Revenue Sync", color: "var(--gold)" },
            { val: "92.4%", label: "Node Integrity", color: "#64ffda" },
            { val: "1,450", label: "Faculty Nodes", color: "var(--white)" },
            { val: "99.9%", label: "System Uptime", color: "#64ffda" }
        ]
    },
    "Faculty": {
        title: "Faculty Control Center",
        breadcrumb: "INSTRUCTIONAL_LOGIC / FACULTY_NODE",
        kpis: [
            { val: "04", label: "Active Classes", color: "var(--gold)" },
            { val: "185", label: "Total Students", color: "var(--white)" },
            { val: "96%", label: "Avg Attendance", color: "#64ffda" },
            { val: "12", label: "Pending Marks", color: "var(--white)" }
        ]
    },
    "Student": {
        title: "Student Sovereign Node",
        breadcrumb: "SCHOLAR_CORE / PERSONAL_INFRA",
        kpis: [
            { val: "94%", label: "My Presence", color: "#64ffda" },
            { val: "$1,250", label: "Fees Pending", color: "#ff4d4d" },
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

export const campusNodes = ['MAIN_CAMPUS', 'CITY_CAMPUS', 'NORTH_CAMPUS'];

export const sidebarTemplates = {
    "Management": `
        <button class="nav-item active" data-view="Dashboard"><i>📊</i> Dashboard</button>
        <button class="nav-item" data-view="Admissions"><i>🤝</i> Admissions</button>
        <button class="nav-item" data-view="SIS"><i>👥</i> SIS (Students)</button>
        <button class="nav-item" data-view="Academics"><i>📚</i> Academics</button>
        <button class="nav-item" data-view="Timetable"><i>📅</i> Timetable</button>
        <button class="nav-item" data-view="Attendance"><i>✅</i> Attendance</button>
        <button class="nav-item" data-view="Exams"><i>✍️</i> Exams & Results</button>
        <button class="nav-item" data-view="Fees"><i>💰</i> Fees & Receipts</button>
        <button class="nav-item" data-view="HRMS"><i>👔</i> HRMS</button>
        <button class="nav-item" data-view="Finance"><i>📈</i> Finance</button>
        <button class="nav-item" data-view="Reports"><i>📋</i> ReportsHub</button>
        <button class="nav-item" data-view="Settings"><i>⚙️</i> Settings</button>
    `,
    "Admissions": `
        <button class="nav-item active" data-view="Dashboard"><i>📊</i> Intake Performance</button>
        <button class="nav-item" data-view="Admissions"><i>👥</i> Lead Pipeline</button>
        <button class="nav-item" data-view="Reports"><i>📋</i> Daily Analytics</button>
    `,
    "Exams": `
        <button class="nav-item active" data-view="Exams"><i>✍️</i> Exam Controller</button>
        <button class="nav-item" data-view="Reports"><i>📋</i> Result Reports</button>
    `,
    "Accounts": `
        <button class="nav-item active" data-view="Fees"><i>💰</i> Fee Control</button>
        <button class="nav-item" data-view="Finance"><i>📊</i> Collections</button>
        <button class="nav-item" data-view="Reports"><i>📋</i> Fee Reports</button>
    `,
    "HR": `
        <button class="nav-item active" data-view="HRMS"><i>👔</i> HR Management</button>
        <button class="nav-item" data-view="Reports"><i>📋</i> Staff Reports</button>
    `,
    "Finance": `
        <button class="nav-item active" data-view="Finance"><i>📈</i> Finance Admin</button>
        <button class="nav-item" data-view="Reports"><i>📋</i> Ledger Reports</button>
    `,
    "Faculty": `
        <button class="nav-item active" data-view="Dashboard"><i>🏠</i> My Dashboard</button>
        <button class="nav-item" data-view="Academics"><i>📖</i> My Classes</button>
        <button class="nav-item" data-view="Attendance"><i>✅</i> Mark Attendance</button>
        <button class="nav-item" data-view="Exams"><i>📝</i> Enter Marks</button>
        <button class="nav-item" data-view="Reports"><i>📋</i> Class Reports</button>
    `,
    "Student": `
        <button class="nav-item active" data-view="Dashboard"><i>🏠</i> My Home</button>
        <button class="nav-item" data-view="Timetable"><i>📅</i> Timetable</button>
        <button class="nav-item" data-view="Attendance"><i>✅</i> Attendance</button>
        <button class="nav-item" data-view="Exams"><i>✍️</i> Results</button>
        <button class="nav-item" data-view="Fees"><i>💰</i> My Fees</button>
        <button class="nav-item" data-view="Reports"><i>🔔</i> Notices</button>
    `,
    "Parent": `
        <button class="nav-item active" data-view="Dashboard"><i>🏠</i> Ward Overview</button>
        <button class="nav-item" data-view="Attendance"><i>✅</i> Attendance</button>
        <button class="nav-item" data-view="Exams"><i>✍️</i> Academics</button>
        <button class="nav-item" data-view="Fees"><i>💰</i> Fee Portal</button>
        <button class="nav-item" data-view="Reports"><i>🔔</i> Notices</button>
    `
};
