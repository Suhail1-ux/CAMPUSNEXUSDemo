export const profileTabTemplates = {
    "Overview": `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
            <div>
                <h4 style="color: var(--vibrant-violet); font-size: 0.75rem; margin-bottom: 25px; font-weight: 900; letter-spacing: 2px;">INSTITUTION_ID</h4>
                <div class="biometric-list">
                    <div class="biometric-row" style="border-bottom: 1px solid var(--glass-border); padding: 10px 0;">
                        <span><i data-lucide="droplet" style="width:14px; height:14px; vertical-align:middle; margin-right:8px; color:#ef4444;"></i> Blood Group</span>
                        <span style="color: var(--white); font-weight: 700;">O+</span>
                    </div>
                    <div class="biometric-row" style="border-bottom: 1px solid var(--glass-border); padding: 10px 0;">
                        <span><i data-lucide="phone" style="width:14px; height:14px; vertical-align:middle; margin-right:8px; color:var(--white);"></i> Contact</span>
                        <span style="color: var(--white); font-weight: 700;">+91 98765-XXXXX</span>
                    </div>
                    <div class="biometric-row" style="border-bottom: 1px solid var(--glass-border); padding: 10px 0;">
                        <span><i data-lucide="id-card" style="width:14px; height:14px; vertical-align:middle; margin-right:8px; color:var(--white);"></i> Verification</span>
                        <span class="status-pill success">VERIFIED</span>
                    </div>
                </div>
            </div>
            <div>
                <h4 style="color: var(--vibrant-violet); font-size: 0.75rem; margin-bottom: 25px; font-weight: 900; letter-spacing: 2px;">EXECUTIVE_ACTIONS</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                    <div class="action-card action-trigger" data-action="download_id" style="background: rgba(0, 128, 128, 0.05); cursor: pointer; text-align: center; border: 1px solid var(--vibrant-violet); padding: 15px; border-radius: 12px;">
                        <i data-lucide="id-card" style="width: 24px; height: 24px; color: var(--vibrant-violet); display: block; margin: 0 auto 8px;"></i>
                        <span style="font-size: 0.65rem; font-weight: 700; color: var(--white);">Download ID Card</span>
                    </div>
                    <div class="action-card action-trigger" data-action="bonafide" style="background: rgba(0, 128, 128, 0.05); cursor: pointer; text-align: center; border: 1px solid var(--vibrant-violet); padding: 15px; border-radius: 12px;">
                        <i data-lucide="file-text" style="width: 24px; height: 24px; color: var(--vibrant-violet); display: block; margin: 0 auto 8px;"></i>
                        <span style="font-size: 0.65rem; font-weight: 700; color: var(--white);">Bonafide Certificate</span>
                    </div>
                    <div class="action-card action-trigger" data-action="parent_connect" style="background: rgba(0, 128, 128, 0.05); cursor: pointer; text-align: center; border: 1px solid rgba(0, 128, 128, 0.2); padding: 15px; border-radius: 12px;">
                        <i data-lucide="users" style="width: 24px; height: 24px; color: var(--white); display: block; margin: 0 auto 8px;"></i>
                        <span style="font-size: 0.65rem; font-weight: 700; color: var(--white);">Parent Connect</span>
                    </div>
                    <div class="action-card action-trigger" data-action="reset_key" style="background: rgba(255,255,255,0.03); cursor: pointer; text-align: center; border: 1px solid var(--glass-border); padding: 15px; border-radius: 12px;">
                        <i data-lucide="key" style="width: 24px; height: 24px; color: var(--slate); display: block; margin: 0 auto 8px;"></i>
                        <span style="font-size: 0.65rem; font-weight: 700; color: var(--slate);">Reset Access</span>
                    </div>
                </div>
            </div>
        </div>
    `,
    "Academics": `
        <div class="slide-up">
            <h4 style="color: var(--vibrant-violet); font-size: 0.75rem; margin-bottom: 20px; font-weight: 900; letter-spacing: 2px;">ACADEMIC_REGISTRY</h4>
            <div class="table-container">
                <table class="data-table">
                    <thead><tr><th>Term / Sem</th><th>Primary Course</th><th>Grade</th><th>Status</th></tr></thead>
                    <tbody>
                        <tr><td>Semester 05</td><td>Algorithm Design</td><td>A+</td><td><span class="status-pill success">CLEARED</span></td></tr>
                        <tr><td>Semester 06</td><td>Machine Learning</td><td>TBD</td><td><span class="status-pill warning">ENROLLED</span></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    `,
    "Attendance": `
        <div class="slide-up">
            <div style="display: grid; grid-template-columns: 1fr; gap: 30px; margin-bottom: 30px;">
                <div class="glass-card" style="background: rgba(0, 128, 128, 0.05); border-color: var(--vibrant-violet);">
                    <h5 style="font-size: 0.7rem; color: var(--vibrant-violet); font-weight: 900; margin-bottom: 15px; letter-spacing: 2px;">PRESENCE_TELEMETRY</h5>
                    <span style="font-size: 3rem; font-weight: 900; color: var(--white); text-shadow: 0 0 30px rgba(0, 128, 128, 0.4); font-family: var(--font-display);">94.2%</span>
                </div>
            </div>
            <div class="table-container">
                <table class="data-table">
                    <thead><tr><th>Date</th><th>Session</th><th>Capture Mode</th><th>Result</th></tr></thead>
                    <tbody>
                        <tr><td>Feb 20, 2026</td><td>Morning Session</td><td>Biometric Scan</td><td><span class="status-pill success">Present</span></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    `,
    "Exams": `
        <div class="slide-up">
            <h4 style="color: var(--vibrant-violet); font-size: 0.75rem; margin-bottom: 20px; font-weight: 900; letter-spacing: 2px;">EXAMINATION_CREDENTIALS</h4>
            <div style="background: rgba(0, 128, 128, 0.05); padding: 20px; border-radius: 12px; border-left: 4px solid var(--vibrant-violet);">
                <span style="font-size: 0.65rem; color: var(--vibrant-violet); font-weight: 900;">Upcoming Assessment</span>
                <h5 style="font-size: 0.95rem; margin-top: 5px; color: var(--white);">Final Theory: Distributed Systems & Cloud</h5>
                <button class="login-btn" style="margin-top: 15px; width: auto; padding: 10px 20px; font-size: 0.7rem; background: var(--vibrant-violet); color: #000; border: none; font-weight: 900;">Download Admit Card</button>
            </div>
        </div>
    `,
    "Fees": `
        <div class="slide-up">
            <div class="kpi-grid grid-adaptive" style="margin-bottom: 30px;">
                <div class="kpi-card glass-card" style="padding: 20px; text-align: center;">
                    <span class="kpi-label" style="display: block; margin-bottom: 8px;">Total Due</span>
                    <span class="kpi-val" style="font-size: 1.4rem; color: var(--white);">$8,500</span>
                </div>
                <div class="kpi-card glass-card" style="padding: 15px; text-align: center;">
                    <span class="kpi-label" style="display: block; margin-bottom: 8px;">Paid</span>
                    <span class="kpi-val" style="font-size: 1.4rem; color: var(--vibrant-violet);">$7,200</span>
                </div>
                <div class="kpi-card glass-card" style="padding: 20px; text-align: center; background: rgba(239, 68, 68, 0.05); border-color: rgba(239, 68, 68, 0.2);">
                    <span class="kpi-label" style="display: block; margin-bottom: 8px; color: #ef4444;">Balance</span>
                    <span class="kpi-val" style="font-size: 1.4rem; color: #ef4444;">$1,300</span>
                </div>
            </div>
            <div class="slide-up">
            <h4 style="font-size: 0.8rem; font-weight: 700; color: var(--vibrant-violet); margin-bottom: 15px;">Today's Classes</h4>
            <div style="overflow-x: auto;">
                <table class="data-table">
                    <thead><tr><th>Time</th><th>Subject</th></tr></thead>
                    <tbody>
                        <tr><td>09:00 AM</td><td>Adv. Algorithms</td></tr>
                        <tr><td>11:30 AM</td><td>System Arch.</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
            <div style="overflow-x: auto;">
                <table class="data-table">
                    <thead><tr><th>Receipt ID</th><th>Header</th><th>Date</th><th>Amount</th></tr></thead>
                    <tbody>
                        <tr><td>#REC-4412</td><td>Tuition Fee (Sem 06)</td><td>Jan 15, 2026</td><td>$4,500</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    `
};

export const financeSectionTemplates = {
    "Dashboard": `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;" class="slide-up">
            <div style="background: var(--glass-white); padding: 25px; border-radius: 12px; border: 1px solid var(--glass-border);">
                <h4 style="font-size: 0.8rem; font-weight: 900; margin-bottom: 20px; color: var(--white); letter-spacing: 2px;">REVENUE ANALYTICS</h4>
                <div style="height: 150px; background: #f8fafc; border-radius: 10px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: center; color: var(--vibrant-violet); font-size: 0.8rem; font-family: monospace; font-weight: 900; animation: pulse 2s infinite;">LIVE FEED ACTIVE</div>
                <button class="login-btn action-trigger" data-action="fee_demand" style="margin-top: 20px; background: var(--vibrant-violet); color: #000; font-weight: 900;">Generate Fees Demand</button>
            </div>
            <div style="background: var(--glass); padding: 20px; border-radius: 12px; border: 1px solid var(--glass-border);">
                <h4 style="font-size: 0.8rem; font-weight: 700; margin-bottom: 15px; color: var(--white);">Reconciliation Queue</h4>
            <div class="table-container">
                <table class="data-table" style="font-size: 0.75rem;">
                    <thead><tr><th>Ref ID</th><th>Scholar</th><th>Risk</th></tr></thead>
                    <tbody>
                        <tr><td>#FT-8812</td><td>Aarav Malhotra</td><td><span class="status-pill success">LOW</span></td></tr>
                        <tr><td>#FT-8813</td><td>Isha Kapur</td><td><button class="login-btn action-trigger" style="padding: 5px 10px; font-size: 0.55rem; background: #f59e0b; color: white; border: none; width: auto;">Reconcile</button></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    `
};

export const hrmsSectionTemplates = {
    "Directory": `
        <div class="slide-up">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h3 style="font-size: 0.85rem; font-weight: 700; color: var(--white);">Employee Directory</h3>
                <div style="display: flex; gap: 10px;">
                    <input class="login-input" placeholder="Search employee..." style="margin:0;padding:8px 15px;font-size:0.7rem;width:200px;" />
                    <button class="login-btn action-trigger" data-action="export_excel" style="width:auto;padding:8px 16px;font-size:0.7rem;"><i data-lucide="download" style="width:14px; height:14px; margin-right:4px;"></i> Export Data</button>
                </div>
            </div>
            <div style="overflow-x: auto;">
                <table class="data-table" style="font-size: 0.75rem;">
                    <thead><tr><th>Resource ID</th><th>Name</th><th>Designation</th><th>Department</th><th>Campus</th><th>Salary Grade</th><th>Status</th><th>Action</th></tr></thead>
                    <tbody>
                        <tr><td>#HR-001</td><td>Dr. Vikram Seth</td><td>Professor</td><td>Engineering</td><td>Main</td><td>G-7</td><td><span class="status-pill success">ACTIVE</span></td><td><button class="login-btn" style="padding:4px 10px;font-size:0.6rem;width:auto;">VIEW_FILE</button></td></tr>
                        <tr><td>#HR-002</td><td>Prof. Anita Roy</td><td>Assoc. Professor</td><td>Commerce</td><td>City</td><td>G-6</td><td><span class="status-pill warning">ON_LEAVE</span></td><td><button class="login-btn" style="padding:4px 10px;font-size:0.6rem;width:auto;">VIEW_FILE</button></td></tr>
                        <tr><td>#HR-003</td><td>Dr. Ravi Kumar</td><td>HOD \u2014 CS</td><td>Engineering</td><td>Main</td><td>G-8</td><td><span class="status-pill success">ACTIVE</span></td><td><button class="login-btn" style="padding:4px 10px;font-size:0.6rem;width:auto;">VIEW_FILE</button></td></tr>
                        <tr><td>#HR-004</td><td>Ms. Shruti Patel</td><td>Admin Officer</td><td>Administration</td><td>North</td><td>G-4</td><td><span class="status-pill success">ACTIVE</span></td><td><button class="login-btn" style="padding:4px 10px;font-size:0.6rem;width:auto;">VIEW_FILE</button></td></tr>
                        <tr><td>#HR-005</td><td>Mr. Jay Mehta</td><td>Lab Instructor</td><td>Engineering</td><td>Main</td><td>G-5</td><td><span class="status-pill success">ACTIVE</span></td><td><button class="login-btn" style="padding:4px 10px;font-size:0.6rem;width:auto;">VIEW_FILE</button></td></tr>
                        <tr><td>#HR-006</td><td>Dr. Meera Nair</td><td>Asst. Professor</td><td>Engineering</td><td>Main</td><td>G-5</td><td><span class="status-pill warning">SICK_LEAVE</span></td><td><button class="login-btn" style="padding:4px 10px;font-size:0.6rem;width:auto;">VIEW_FILE</button></td></tr>
                        <tr><td>#HR-007</td><td>Prof. Arjun Singh</td><td>Asst. Professor</td><td>Commerce</td><td>City</td><td>G-5</td><td><span class="status-pill success">ACTIVE</span></td><td><button class="login-btn" style="padding:4px 10px;font-size:0.6rem;width:auto;">VIEW_FILE</button></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    `,
    "Payroll": `
        <div class="slide-up" style="background: rgba(0, 128, 128, 0.05); padding: 30px; border-radius: 12px; border: 1px solid rgba(0, 128, 128, 0.2); text-align: center;">
            <h4 style="font-size: 1rem; color: var(--white); font-weight: 800;">Payroll Process</h4>
            <p style="color: #555; font-size: 0.75rem; margin-top: 8px;">Cycle: FEB 2026</p>
            <button class="login-btn action-trigger" data-action="payroll" style="margin-top: 20px; max-width: 280px; background: var(--vibrant-violet); color: #000;">Disburse Salary</button>
            <button class="login-btn action-trigger" data-action="gen_payslip" style="margin-top: 12px; max-width: 280px;"><i data-lucide="download" style="width:14px; height:14px; margin-right:4px;"></i> Export Bulk Payslips</button>
        </div>
    `,
    "Leave": `
        <div class="slide-up">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
                <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--white);">Leave Management Console</h3>
                <div style="display: flex; gap: 10px;">
                    <select class="login-input" style="margin:0;padding:8px 15px;font-size:0.75rem;"><option>All Departments</option><option>Engineering</option><option>Finance</option></select>
                    <button class="login-btn action-trigger" data-action="export_excel" style="width:auto;padding:8px 18px;font-size:0.7rem;"><i data-lucide="download" style="width:14px; height:14px; margin-right:4px;"></i> EXPORT</button>
                </div>
            </div>

            <!-- Leave Balance Cards -->
            <div class="grid-adaptive" style="margin-bottom: 25px;">
                <div class="kpi-card glass-card" style="padding: 18px;"><span class="kpi-label">Casual Leave</span><span class="kpi-val" style="font-size:1.8rem; color: var(--white);">8</span><div style="font-size:0.6rem;color:#10b981;">of 12 remaining</div></div>
                <div class="kpi-card glass-card" style="padding: 15px;"><span class="kpi-label">Sick Leave</span><span class="kpi-val" style="font-size:1.8rem; color: var(--white);">10</span><div style="font-size:0.6rem;color:var(--vibrant-violet);">REMAINING</div></div>
                <div class="kpi-card glass-card" style="padding: 15px;"><span class="kpi-label">Earned Leave</span><span class="kpi-val" style="font-size:1.8rem; color: var(--white);">18</span><div style="font-size:0.6rem;color:var(--vibrant-violet);">ACCUMULATED</div></div>
                <div class="kpi-card glass-card" style="padding: 15px;"><span class="kpi-label">Pending</span><span class="kpi-val" style="font-size:1.8rem;color:#f59e0b;">6</span><div style="font-size:0.6rem;color:#f59e0b;">AWAITING</div></div>
            </div>

            <!-- Leave Requests Table -->
            <div class="glass-card" style="overflow: hidden;">
                <div style="padding: 18px 22px; border-bottom: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center;">
                    <h4 style="font-size: 0.8rem; font-weight: 700; color: var(--white);">Pending Leave Requests</h4>
                    <span class="status-pill warning">6 AWAITING</span>
                </div>
                <div style="overflow-x: auto;">
                    <table class="data-table" style="font-size: 0.75rem;">
                        <thead><tr><th>Employee</th><th>Department</th><th>Type</th><th>From</th><th>To</th><th>Days</th><th>Reason</th><th>Approve</th><th>Reject</th></tr></thead>
                        <tbody>
                            <tr>
                                <td>Dr. Meera Nair</td><td>CS Dept.</td><td>Sick</td><td>Feb 22</td><td>Feb 24</td><td>3</td><td>Medical</td>
                                <td><button class="login-btn action-trigger" data-action="leave_approve" style="padding:4px 10px;font-size:0.6rem;width:auto;background:rgba(16, 185, 129, 0.1);color:#10b981;border-color:rgba(16, 185, 129, 0.3);">APPROVE</button></td>
                                <td><button class="login-btn action-trigger" data-action="leave_reject" style="padding:4px 10px;font-size:0.6rem;width:auto;background:rgba(239, 68, 68, 0.1);color:#ef4444;border-color:rgba(239, 68, 68, 0.3);">REJECT</button></td>
                            </tr>
                            <tr>
                                <td>Prof. Arjun Singh</td><td>MBA Dept.</td><td>Casual</td><td>Feb 25</td><td>Feb 25</td><td>1</td><td>Personal</td>
                                <td><button class="login-btn action-trigger" data-action="leave_approve" style="padding:4px 10px;font-size:0.6rem;width:auto;background:rgba(16, 185, 129, 0.1);color:#10b981;border-color:rgba(16, 185, 129, 0.3);">APPROVE</button></td>
                                <td><button class="login-btn action-trigger" data-action="leave_reject" style="padding:4px 10px;font-size:0.6rem;width:auto;background:rgba(239, 68, 68, 0.1);color:#ef4444;border-color:rgba(239, 68, 68, 0.3);">REJECT</button></td>
                            </tr>
                            <tr>
                                <td>Mr. Zaid Ahmed</td><td>Finance</td><td>Earned</td><td>Mar 1</td><td>Mar 5</td><td>5</td><td>Family event</td>
                                <td><button class="login-btn action-trigger" data-action="leave_approve" style="padding:4px 10px;font-size:0.6rem;width:auto;background:rgba(16, 185, 129, 0.1);color:#10b981;border-color:rgba(16, 185, 129, 0.3);">APPROVE</button></td>
                                <td><button class="login-btn action-trigger" data-action="leave_reject" style="padding:4px 10px;font-size:0.6rem;width:auto;background:rgba(239, 68, 68, 0.1);color:#ef4444;border-color:rgba(239, 68, 68, 0.3);">REJECT</button></td>
                            </tr>
                            <tr>
                                <td>Ms. Priya Nair</td><td>CS Dept.</td><td>Sick</td><td>Feb 21</td><td>Feb 21</td><td>1</td><td>Fever</td>
                                <td><button class="login-btn action-trigger" data-action="leave_approve" style="padding:4px 10px;font-size:0.6rem;width:auto;background:rgba(16, 185, 129, 0.1);color:#10b981;border-color:rgba(16, 185, 129, 0.3);">APPROVE</button></td>
                                <td><button class="login-btn action-trigger" data-action="leave_reject" style="padding:4px 10px;font-size:0.6rem;width:auto;background:rgba(239, 68, 68, 0.1);color:#ef4444;border-color:rgba(239, 68, 68, 0.3);">REJECT</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `
};
export const reportSectionTemplates = {
    "Admissions": `
        <div class="slide-up">
            <div class="report-header" style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 15px; margin-bottom: 30px;">
                <div>
                    <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--white);">Admissions Conversion Analysis</h3>
                    <p style="color: var(--gold); font-size: 0.7rem; margin-top: 4px; font-weight: 700;">REPORT_ID: RPT-ADM-99X | AY 2026-27</p>
                </div>
                <div class="button-group" style="display: flex; gap: 10px; flex-wrap: wrap;">
                    <button class="login-btn action-trigger" data-action="export_csv" style="width: auto; padding: 8px 16px; font-size: 0.7rem;">Export CSV</button>
                    <button class="login-btn action-trigger" data-action="export_pdf" style="width: auto; padding: 8px 16px; font-size: 0.7rem; background: var(--vibrant-violet); color: #000;">Generate PDF</button>
                </div>
            </div>

            <div class="kpi-grid grid-adaptive" style="margin-bottom: 35px;">
                <div class="kpi-card glass-card" style="padding: 20px; background: rgba(99, 102, 241, 0.03);">
                    <span class="kpi-label">Total Leads</span>
                    <span class="kpi-val" style="font-size: 1.5rem; color: var(--white);">4,240</span>
                    <span style="font-size: 0.6rem; color: #10b981;">↑ 18% month-over-month</span>
                </div>
                <div class="kpi-card glass-card" style="padding: 15px; background: rgba(0, 128, 128, 0.03);">
                    <span class="kpi-label" style="color: var(--vibrant-violet); font-weight: 900;">Conversion Rate</span>
                    <span class="kpi-val" style="font-size: 1.5rem; color: var(--vibrant-violet);">32.4%</span>
                    <span style="font-size: 0.6rem; color: var(--vibrant-violet);">Target: 35%</span>
                </div>
                <div class="kpi-card glass-card" style="padding: 20px; background: rgba(15, 23, 42, 0.03);">
                    <span class="kpi-label">Revenue Impact</span>
                    <span class="kpi-val" style="font-size: 1.5rem; color: var(--white);">$1.2M</span>
                    <span style="font-size: 0.6rem; color: var(--slate);">Verified Deposits</span>
                </div>
            </div>

            <div style="overflow-x: auto;">
                <table class="data-table" style="font-size: 0.8rem;">
                    <thead>
                        <tr><th>Lead Source</th><th>Total Inquiries</th><th>Verification</th><th>Conv. Rate</th><th>Performance</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Organic Web Search</td><td>1,250</td><td><span class="status-pill success">92%</span></td><td style="color: var(--vibrant-violet); font-weight: 800;">42%</td><td><div style="width: 100px; height: 6px; background: rgba(255, 255, 255, 0.05); border-radius: 3px;"><div style="width: 84%; height: 100%; background: var(--vibrant-violet);"></div></div></td></tr>
                        <tr><td>Direct Referrals</td><td>850</td><td><span class="status-pill success">98%</span></td><td style="color: var(--vibrant-violet); font-weight: 800;">68%</td><td><div style="width: 100px; height: 6px; background: rgba(255, 255, 255, 0.05); border-radius: 3px;"><div style="width: 95%; height: 100%; background: var(--vibrant-violet);"></div></div></td></tr>
                        <tr><td>Social Campaigns</td><td>1,540</td><td><span class="status-pill success">88%</span></td><td style="color: var(--vibrant-violet); font-weight: 800;">24%</td><td><div style="width: 100px; height: 6px; background: rgba(255, 255, 255, 0.05); border-radius: 3px;"><div style="width: 62%; height: 100%; background: var(--vibrant-violet);"></div></div></td></tr>
                        <tr><td>Alumni Network</td><td>600</td><td><span class="status-pill success">100%</span></td><td style="color: var(--vibrant-violet); font-weight: 800;">72%</td><td><div style="width: 100px; height: 6px; background: rgba(255, 255, 255, 0.05); border-radius: 3px;"><div style="width: 98%; height: 100%; background: var(--vibrant-violet);"></div></div></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    `,
    "Academics": `
        <div class="slide-up">
            <div class="report-header" style="margin-bottom: 30px;">
                <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--white);">Academic Progression Registry</h3>
            </div>
            <div class="kpi-grid" style="grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
                <div class="kpi-card glass-card"><span class="kpi-label">Pass Rate</span><span class="kpi-val" style="color: #10b981;">98.4%</span></div>
            </div>
            <div style="overflow-x: auto;">
                <table class="data-table">
                    <thead><tr><th>Batch</th><th>Active Students</th><th>Credits Earned</th><th>Status</th></tr></thead>
                    <tbody>
                        <tr><td>B.Tech CS 2023</td><td>124</td><td>15,400</td><td><span class="status-pill success">Optimal</span></td></tr>
                        <tr><td>BBA 2024</td><td>85</td><td>8,200</td><td><span class="status-pill success">Optimal</span></td></tr>
                        <tr><td>M.Tech AL 2022</td><td>42</td><td>6,800</td><td><span class="status-pill success">Optimal</span></td></tr>
                        <tr><td>PhD Research</td><td>18</td><td>2,400</td><td><span class="status-pill success">Stable</span></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    `,
    "Revenue": `
        <div class="slide-up">
            <div class="report-header" style="margin-bottom: 30px;">
                <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--white);">Revenue &amp; Dues Telemetry</h3>
            </div>
            <div class="kpi-grid grid-adaptive" style="margin-bottom: 30px;">
                <div class="kpi-card glass-card"><span class="kpi-label">Expected (FY 26)</span><span class="kpi-val" style="font-size: 1.5rem;">$5.4M</span><span style="font-size:0.6rem;color:var(--slate);">Annual Target</span></div>
                <div class="kpi-card glass-card"><span class="kpi-label">Collected YTD</span><span class="kpi-val" style="font-size: 1.5rem; color: #10b981;">$4.1M</span><span style="font-size:0.6rem;color:#10b981;">&#8593; 76% of target</span></div>
                <div class="kpi-card glass-card"><span class="kpi-label">Outstanding Dues</span><span class="kpi-val" style="font-size: 1.5rem; color: #ff4d4d;">$1.3M</span><span style="font-size:0.6rem;color:#ff4d4d;">Overdue notices: 142</span></div>
            </div>
            <div class="table-container">
                <table class="data-table">
                    <thead><tr><th>Fee Head</th><th>Total Target</th><th>Realized</th><th>Gap</th><th>Recovery</th></tr></thead>
                    <tbody>
                        <tr><td>Tuition (UG)</td><td>$4.2M</td><td>$3.5M</td><td style="color:#ff4d4d;font-weight:800;">$0.7M</td><td><div style="width:100px;height:6px;background:rgba(0,0,0,0.05);border-radius:3px;"><div style="width:83%;height:100%;background:var(--vibrant-violet);"></div></div></td></tr>
                        <tr><td>Hostel Fees</td><td>$1.2M</td><td>$0.6M</td><td style="color:#ff4d4d;font-weight:800;">$0.6M</td><td><div style="width:100px;height:6px;background:rgba(0,0,0,0.05);border-radius:3px;"><div style="width:50%;height:100%;background:#f59e0b;"></div></div></td></tr>
                        <tr><td>Lab Fees</td><td>$0.4M</td><td>$0.38M</td><td style="color:#10b981;font-weight:800;">$0.02M</td><td><div style="width:100px;height:6px;background:rgba(0,0,0,0.05);border-radius:3px;"><div style="width:95%;height:100%;background:#10b981;"></div></div></td></tr>
                        <tr><td>Transport</td><td>$0.2M</td><td>$0.18M</td><td style="color:#10b981;font-weight:800;">$0.02M</td><td><div style="width:100px;height:6px;background:rgba(0,0,0,0.05);border-radius:3px;"><div style="width:90%;height:100%;background:#10b981;"></div></div></td></tr>
                        <tr><td>Examination</td><td>$0.18M</td><td>$0.15M</td><td style="color:#f59e0b;font-weight:800;">$0.03M</td><td><div style="width:100px;height:6px;background:rgba(0,0,0,0.05);border-radius:3px;"><div style="width:83%;height:100%;background:#f59e0b;"></div></div></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    `,
    "Staff": `
        <div class="slide-up">
            <div class="report-header" style="margin-bottom: 30px;">
                <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--white);">Staff Productivity &amp; Load</h3>
            </div>
            <div class="kpi-grid grid-adaptive" style="margin-bottom: 30px;">
                <div class="kpi-card glass-card"><span class="kpi-label">Total Headcount</span><span class="kpi-val" style="font-size: 1.5rem;">1,250</span><span style="font-size:0.6rem;color:var(--slate);">Across 3 campuses</span></div>
                <div class="kpi-card glass-card"><span class="kpi-label">Faculty Utilization</span><span class="kpi-val" style="font-size: 1.5rem; color: #10b981;">82%</span><span style="font-size:0.6rem;color:#10b981;">Above 80% benchmark</span></div>
                <div class="kpi-card glass-card"><span class="kpi-label">Attrition Rate</span><span class="kpi-val" style="font-size: 1.5rem; color: #f59e0b;">1.2%</span><span style="font-size:0.6rem;color:#f59e0b;">YTD: 15 resignations</span></div>
            </div>
            <div class="table-container">
                <table class="data-table">
                    <thead><tr><th>Department</th><th>Headcount</th><th>Avg Load</th><th>Avg Rating</th><th>Health</th></tr></thead>
                    <tbody>
                        <tr><td>Computer Science</td><td>45</td><td>18h/wk</td><td>4.7 / 5</td><td><span class="status-pill success">Stable</span></td></tr>
                        <tr><td>Management</td><td>22</td><td>14h/wk</td><td>4.4 / 5</td><td><span class="status-pill success">Stable</span></td></tr>
                        <tr><td>Life Sciences</td><td>18</td><td>20h/wk</td><td>4.1 / 5</td><td><span class="status-pill warning">Overstretched</span></td></tr>
                        <tr><td>Mathematics</td><td>12</td><td>16h/wk</td><td>4.6 / 5</td><td><span class="status-pill success">Stable</span></td></tr>
                        <tr><td>Humanities</td><td>9</td><td>12h/wk</td><td>4.8 / 5</td><td><span class="status-pill success">Stable</span></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    `,
    "Compliance": `
        <div class="slide-up">
            <div class="report-header" style="margin-bottom: 30px;">
                <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--white);">Compliance & Regulatory Registry</h3>
            </div>
            <div class="glass-card" style="padding: 30px; text-align: center; color: var(--slate); margin-bottom: 25px;">
                <i data-lucide="landmark" style="width: 48px; height: 48px; color: var(--vibrant-violet); display: block; margin: 0 auto 20px;"></i>
                <p style="font-size: 0.9rem; font-weight: 900; color: var(--white); letter-spacing: 2px;">Compliance Synced</p>
                <p style="font-size: 0.7rem; margin-top: 10px; color: #555; font-weight: 700;">All regulatory filings for FY 2025-26 are synchronized with the Central Gateway.</p>
                <button class="login-btn action-trigger" data-action="run_audit" style="margin-top: 25px; max-width: 250px;">Generate Compliance Audit</button>
            </div>
            <div class="glass-card" style="background: var(--glass);">
                <div style="padding: 15px 20px; border-bottom: 1px solid var(--glass-border);">
                    <h4 style="font-size: 0.8rem; font-weight: 700; color: var(--white);">Recent Regulatory Filings</h4>
                </div>
                <div style="overflow-x: auto;">
                    <table class="data-table" style="font-size: 0.75rem;">
                        <thead><tr><th>Filing ID</th><th>Jurisdiction</th><th>Target Date</th><th>Status</th></tr></thead>
                        <tbody>
                            <tr><td>#FIL-9921</td><td>Statutory Audit</td><td>Mar 15, 2026</td><td><span class="status-pill status-verified">Synchronized</span></td></tr>
                            <tr><td>#FIL-9922</td><td>Tax Compliance</td><td>Apr 10, 2026</td><td><span class="status-pill warning">Drafting</span></td></tr>
                            <tr><td>#FIL-9923</td><td>Campus Safety</td><td>Feb 20, 2026</td><td><span class="status-pill status-verified">Approved</span></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `
};

export const settingSectionTemplates = {
    "Security": `
        <div class="slide-up">
            <div class="report-header" style="margin-bottom: 30px;">
                <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--white);">Security Control Center</h3>
            </div>
            <div class="grid-2-col" style="margin-bottom: 30px;">
                <div class="glass-card" style="background: rgba(16, 185, 129, 0.05); padding: 25px; border-radius: 12px; border: 1px solid rgba(16, 185, 129, 0.2);">
                    <h4 style="font-size: 0.75rem; color: var(--white); font-weight: 800; margin-bottom: 10px;">Two Factor Authentication</h4>
                    <p style="font-size: 0.65rem; color: #555; margin-bottom: 15px;">Biometric Gateway Active</p>
                    <span class="status-pill success">Secure</span>
                </div>
                <div style="background: rgba(255,255,255,0.02); padding: 25px; border-radius: 12px; border: 1px solid var(--glass-border);">
                    <h4 style="font-size: 0.75rem; color: var(--white); font-weight: 800; margin-bottom: 10px;">Password Rotation Policy</h4>
                    <p style="font-size: 0.65rem; color: var(--slate); margin-bottom: 15px;">Next mandated change in 42 days</p>
                    <button class="login-btn action-trigger" data-action="rotate_pass" style="width: auto; padding: 8px 15px; font-size: 0.6rem;">Rotate Passwords</button>
                </div>
            </div>
            <div style="background: var(--glass); padding: 25px; border-radius: 12px; border: 1px solid var(--glass-border);">
                <h4 style="font-size: 0.8rem; font-weight: 700; color: var(--white); margin-bottom: 20px;">Active Login Sessions</h4>
                <div class="table-container">
                    <table class="data-table" style="font-size: 0.75rem;">
                        <thead><tr><th>Device</th><th>Location</th><th>Logout Time</th><th>Action</th></tr></thead>
                        <tbody>
                            <tr>
                                <td><i data-lucide="monitor" style="width:14px; height:14px; vertical-align:middle; margin-right:6px;"></i> Windows Desktop</td>
                                <td>New Delhi, IN</td>
                                <td><span class="status-pill status-verified">Active</span></td>
                                <td style="color: var(--slate); font-size: 0.65rem;">Primary</td>
                            </tr>
                            <tr>
                                <td><i data-lucide="smartphone" style="width:14px; height:14px; vertical-align:middle; margin-right:6px;"></i> Mobile Gateway (iOS)</td>
                                <td>Mumbai, IN</td>
                                <td>2h 14m ago</td>
                                <td><button class="login-btn action-trigger" data-action="logout" style="padding: 4px 12px; font-size: 0.55rem; width: auto; background: rgba(255,77,77,0.1); color: #ff4d4d; border-color: rgba(255,77,77,0.3);">LOGOUT</button></td>
                            </tr>
                            <tr>
                                <td><i data-lucide="laptop" style="width:14px; height:14px; vertical-align:middle; margin-right:6px;"></i> MacBook Air</td>
                                <td>Bengaluru, IN</td>
                                <td>Yesterday 11:30 PM</td>
                                <td><button class="login-btn action-trigger" data-action="logout" style="padding: 4px 12px; font-size: 0.55rem; width: auto; background: rgba(255,77,77,0.1); color: #ff4d4d; border-color: rgba(255,77,77,0.3);">LOGOUT</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    "Branding": `
        <div class="slide-up">
            <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--white); margin-bottom: 30px;">Institutional Identity Configuration</h3>
            <div style="display: grid; grid-template-columns: 280px 1fr; gap: 30px;">
                <div style="background: var(--glass); padding: 25px; border-radius: 12px; border: 1px dashed rgba(0, 128, 128, 0.3); text-align: center;">
                    <div style="width: 120px; height: 120px; background: rgba(5,5,5,0.8); border: 2px solid var(--white); border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-weight: 900; font-size: 2rem; color: var(--white); box-shadow: 0 0 30px rgba(0, 128, 128, 0.2);">C<span style="color: var(--vibrant-violet);">N</span></div>
                    <p style="font-size: 0.65rem; color: var(--white); margin-bottom: 20px; font-weight: 900; letter-spacing: 2px;">Brand Mark</p>
                    <button class="login-btn action-trigger" data-action="upload_logo" style="font-size: 0.7rem; background: var(--glass-white); color: var(--white); border: 1px solid var(--vibrant-violet);">Upload Emblem</button>
                </div>
                <div style="display: flex; flex-direction: column; gap: 20px;">
                    <div>
                        <label style="font-size: 0.65rem; color: var(--slate); display: block; margin-bottom: 8px; letter-spacing: 1px;">INSTITUTION_NAME</label>
                        <input type="text" class="login-input" value="CampusNexus Sovereign Institute" style="margin: 0;">
                    </div>
                    <div>
                        <label style="font-size: 0.65rem; color: var(--slate); display: block; margin-bottom: 8px;">ACCREDITATION_TAGLINE</label>
                        <input type="text" class="login-input" value="Sovereign Institutional ERP 1.0" style="margin: 0;">
                    </div>
                    <div>
                        <label style="font-size: 0.65rem; color: var(--slate); display: block; margin-bottom: 8px;">THEME_ACCENT_COLOR (HEX)</label>
                        <div style="display: flex; gap: 10px; align-items: center;">
                            <input type="text" class="login-input" value="#A855F7" style="margin: 0; width: 130px;">
                            <div style="width: 40px; height: 40px; background: var(--vibrant-violet); border-radius: 8px; border: 1px solid var(--glass-border); flex-shrink: 0;"></div>
                        </div>
                    </div>
                    <button class="login-btn action-trigger" data-action="commit_branding" style="width: 250px; background: var(--vibrant-violet); color: #000;">Save Branding</button>
                </div>
            </div>
        </div>
    `,
    "System": `
        <div class="slide-up">
            <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--white); margin-bottom: 30px;">System Global Parameters</h3>
            <div style="background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--glass-border); padding: 20px 25px;">
                    <div>
                        <h5 style="font-size: 0.8rem; color: var(--white); font-weight: 700;">Automatic Log Backup</h5>
                        <p style="font-size: 0.65rem; color: var(--slate); margin-top: 4px;">Sync system audit logs to cold storage daily</p>
                    </div>
                    <button class="login-btn action-trigger" data-action="toggle_setting" style="width: 90px; padding: 8px; font-size: 0.65rem; background: rgba(16, 185, 129, 0.1); color: #10b981; border-color: rgba(16, 185, 129, 0.2);">● Active</button>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--glass-border); padding: 20px 25px;">
                    <div>
                        <h5 style="font-size: 0.8rem; color: var(--white); font-weight: 700;">Academic Year Auto-Promotion</h5>
                        <p style="font-size: 0.65rem; color: var(--slate); margin-top: 4px;">Automatic roll-forward of students at end of academic cycle</p>
                    </div>
                    <button class="login-btn action-trigger" data-action="toggle_setting" style="width: 90px; padding: 8px; font-size: 0.65rem; opacity: 0.4;">○ Disabled</button>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--glass-border); padding: 20px 25px;">
                    <div>
                        <h5 style="font-size: 0.8rem; color: var(--white); font-weight: 700;">Neural Optimization Engine</h5>
                        <p style="font-size: 0.65rem; color: var(--slate); margin-top: 4px;">AI-driven scheduling and resource conflict resolution</p>
                    </div>
                    <button class="login-btn action-trigger" data-action="toggle_setting" style="width: 90px; padding: 8px; font-size: 0.65rem; background: rgba(0, 128, 128, 0.15); color: var(--white); border-color: rgba(0, 128, 128, 0.3);">● Active</button>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 20px 25px;">
                    <div>
                        <h5 style="font-size: 0.8rem; color: var(--white); font-weight: 700;">Maintenance Window</h5>
                        <p style="font-size: 0.65rem; color: var(--slate); margin-top: 4px;">Scheduled: Every Sunday 02:00–04:00 AM IST</p>
                    </div>
                    <button class="login-btn action-trigger" data-action="schedule_maint" style="width: auto; padding: 8px 15px; font-size: 0.65rem;">RESCHEDULE</button>
                </div>
            </div>
        </div>
    `,
    "Preferences": `
        <div class="slide-up">
            <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--white); margin-bottom: 30px;">Interface Personalization</h3>
            <div class="grid-2-col" style="margin-bottom: 25px;">
                <div style="background: var(--glass); padding: 25px; border-radius: 12px; border: 1px solid var(--glass-border);">
                    <h4 style="font-size: 0.75rem; color: var(--white); margin-bottom: 15px; font-weight: 800;">Particle Density</h4>
                    <input type="range" style="width: 100%; accent-color: var(--vibrant-violet);" min="0" max="100" value="50">
                    <div style="display: flex; justify-content: space-between; font-size: 0.6rem; color: var(--slate); margin-top: 8px;">
                        <span>Static</span><span>Hyper-Dynamic</span>
                    </div>
                </div>
                <div style="background: var(--glass); padding: 25px; border-radius: 12px; border: 1px solid var(--glass-border);">
                    <h4 style="font-size: 0.75rem; color: var(--white); margin-bottom: 15px; font-weight: 800;">Localization</h4>
                    <select class="login-input" style="margin: 0;">
                        <option>English (Neural Std)</option>
                        <option>Arabic</option>
                        <option>Hindi (Bharat Matrix)</option>
                    </select>
                </div>
                <div style="background: var(--glass); padding: 25px; border-radius: 12px; border: 1px solid var(--glass-border);">
                    <h4 style="font-size: 0.75rem; color: var(--white); margin-bottom: 15px; font-weight: 800;">NOTIFICATIONS</h4>
                    <select class="login-input" style="margin: 0;">
                        <option>All Alerts</option>
                        <option>Critical Only</option>
                        <option>Silent Mode</option>
                    </select>
                </div>
                <div style="background: var(--glass); padding: 25px; border-radius: 12px; border: 1px solid var(--glass-border);">
                    <h4 style="font-size: 0.75rem; color: var(--white); margin-bottom: 15px; font-weight: 800;">LANDING_VIEW</h4>
                    <select class="login-input" style="margin: 0;">
                        <option>Dashboard</option>
                        <option>Admissions</option>
                        <option>Finance</option>
                        <option>Reports</option>
                    </select>
                </div>
            </div>
            <button class="login-btn action-trigger" data-action="save_prefs" style="width: 250px; background: var(--vibrant-violet); color: #000;">Save Preferences</button>
        </div>
    `
};
