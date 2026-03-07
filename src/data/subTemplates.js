export const profileTabTemplates = {
    "Overview": `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
            <div>
                <h4 style="color: var(--gold); font-size: 0.75rem; margin-bottom: 25px; font-weight: 800; letter-spacing: 1px;">INSTITUTIONAL_IDENTITY</h4>
                <div class="biometric-list">
                    <div class="biometric-row" style="border-bottom: 1px solid var(--glass-border); padding: 12px 0;">
                        <span><i data-lucide="droplet" style="width:14px; height:14px; vertical-align:middle; margin-right:8px; color:#ef4444;"></i> Blood Group</span>
                        <span style="color: var(--white); font-weight: 700;">O+ Positive</span>
                    </div>
                    <div class="biometric-row" style="border-bottom: 1px solid var(--glass-border); padding: 12px 0;">
                        <span><i data-lucide="phone" style="width:14px; height:14px; vertical-align:middle; margin-right:8px; color:var(--gold);"></i> Emergency Contact</span>
                        <span style="color: var(--white); font-weight: 700;">+91 98765-XXXXX</span>
                    </div>
                    <div class="biometric-row" style="border-bottom: 1px solid var(--glass-border); padding: 12px 0;">
                        <span><i data-lucide="id-card" style="width:14px; height:14px; vertical-align:middle; margin-right:8px; color:var(--gold);"></i> Regulatory Verification</span>
                        <span class="status-pill success">VERIFIED</span>
                    </div>
                </div>
            </div>
            <div>
                <h4 style="color: var(--gold); font-size: 0.75rem; margin-bottom: 25px; font-weight: 800; letter-spacing: 1px;">EXECUTIVE_ACTIONS</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                    <div class="action-card action-trigger" data-action="download_id" style="background: rgba(255,255,255,0.03); cursor: pointer; text-align: center; border: 1px solid var(--glass-border); padding: 15px; border-radius: 12px;">
                        <i data-lucide="id-card" style="width: 24px; height: 24px; color: var(--gold); display: block; margin: 0 auto 8px;"></i>
                        <span style="font-size: 0.65rem; font-weight: 700; color: var(--slate);">Download ID</span>
                    </div>
                    <div class="action-card action-trigger" data-action="bonafide" style="background: rgba(255,255,255,0.03); cursor: pointer; text-align: center; border: 1px solid var(--glass-border); padding: 15px; border-radius: 12px;">
                        <i data-lucide="file-text" style="width: 24px; height: 24px; color: var(--gold); display: block; margin: 0 auto 8px;"></i>
                        <span style="font-size: 0.65rem; font-weight: 700; color: var(--slate);">Bonafide Gen</span>
                    </div>
                    <div class="action-card action-trigger" data-action="parent_connect" style="background: rgba(255,171,0,0.05); cursor: pointer; text-align: center; border: 1px solid rgba(255,171,0,0.2); padding: 15px; border-radius: 12px;">
                        <i data-lucide="users" style="width: 24px; height: 24px; color: #ffab00; display: block; margin: 0 auto 8px;"></i>
                        <span style="font-size: 0.65rem; font-weight: 700; color: #ffab00;">Parent Connect</span>
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
            <h4 style="color: var(--gold); font-size: 0.75rem; margin-bottom: 20px; font-weight: 800;">Academic Progression Registry</h4>
            <div style="background: var(--glass); border: 1px solid var(--glass-border); border-radius: 12px; overflow: hidden;">
                <div style="overflow-x: auto;">
                    <table class="data-table">
                        <thead><tr><th>Term / Sem</th><th>Primary Course</th><th>Grade</th><th>Status</th></tr></thead>
                        <tbody>
                            <tr><td>Semester 05</td><td>Algorithm Design</td><td>A+</td><td><span class="status-pill success">CLEARED</span></td></tr>
                            <tr><td>Semester 06</td><td>Machine Learning</td><td>TBD</td><td><span class="status-pill warning">ENROLLED</span></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    "Attendance": `
        <div class="slide-up">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px;">
                <div class="glass-card" style="background: rgba(184, 134, 11, 0.05); border-color: rgba(184, 134, 11, 0.25);">
                    <h5 style="font-size: 0.7rem; color: var(--gold); font-weight: 800; margin-bottom: 15px;">AGGREGATE_PRESENCE</h5>
                    <span style="font-size: 2.2rem; font-weight: 900; color: var(--white); text-shadow: 0 0 20px rgba(184, 134, 11, 0.2);">94.2%</span>
                </div>
            </div>
            <div style="overflow-x: auto;">
                <table class="data-table">
                    <thead><tr><th>Date</th><th>Session</th><th>Capture Mode</th><th>Result</th></tr></thead>
                    <tbody>
                        <tr><td>Feb 20, 2026</td><td>Morning Scan</td><td>Institutional_Bio</td><td><span class="status-pill success">PRESENT</span></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    `,
    "Exams": `
        <div class="slide-up">
            <h4 style="color: var(--gold); font-size: 0.75rem; margin-bottom: 20px; font-weight: 800;">Examination Credentials</h4>
            <div style="background: rgba(255,255,255,0.02); padding: 20px; border-radius: 12px; border-left: 4px solid var(--gold);">
                <span style="font-size: 0.65rem; color: var(--gold); font-weight: 800;">UPCOMING_ASSESSMENT</span>
                <h5 style="font-size: 0.9rem; margin-top: 5px; color: var(--white);">Final Theory: Distributed Systems & Cloud</h5>
                <button class="login-btn" style="margin-top: 15px; width: auto; padding: 8px 15px; font-size: 0.7rem;">DOWNLOAD_ADMIT_CARD</button>
            </div>
        </div>
    `,
    "Fees": `
        <div class="slide-up">
            <div class="kpi-grid" style="grid-template-columns: repeat(3, 1fr); gap: 15px; margin-bottom: 30px;">
                <div class="kpi-card glass-card" style="padding: 20px; text-align: center;">
                    <span class="kpi-label" style="display: block; margin-bottom: 8px;">Total Due</span>
                    <span class="kpi-val" style="font-size: 1.4rem; color: var(--white);">$8,500</span>
                </div>
                <div class="kpi-card glass-card" style="padding: 20px; text-align: center;">
                    <span class="kpi-label" style="display: block; margin-bottom: 8px;">Paid</span>
                    <span class="kpi-val" style="font-size: 1.4rem; color: var(--gold);">$7,200</span>
                </div>
                <div class="kpi-card glass-card" style="padding: 20px; text-align: center; background: rgba(239, 68, 68, 0.05); border-color: rgba(239, 68, 68, 0.2);">
                    <span class="kpi-label" style="display: block; margin-bottom: 8px; color: #ef4444;">Balance</span>
                    <span class="kpi-val" style="font-size: 1.4rem; color: #ef4444;">$1,300</span>
                </div>
            </div>
            <div class="slide-up">
            <h4 style="font-size: 0.9rem; font-weight: 700; color: var(--gold); margin-bottom: 20px;">Today's Classes</h4>
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
            <div style="background: var(--glass); padding: 25px; border-radius: 12px; border: 1px solid var(--glass-border);">
                <h4 style="font-size: 0.8rem; font-weight: 700; margin-bottom: 20px; color: var(--gold);">Revenue Recognition Velocity</h4>
                <div style="height: 150px; background: rgba(0,0,0,0.2); border-radius: 10px; border: 1px dashed var(--glass-border); display: flex; align-items: center; justify-content: center; color: var(--slate); font-size: 0.75rem;">Revenue_Stream_Active</div>
                <button class="login-btn action-trigger" data-action="fee_demand" style="margin-top: 20px;">INITIALIZE_FEE_DEMAND</button>
            </div>
            <div style="background: var(--glass); padding: 25px; border-radius: 12px; border: 1px solid var(--glass-border);">
                <h4 style="font-size: 0.8rem; font-weight: 700; margin-bottom: 20px; color: var(--gold);">Exception Reconciliation Queue</h4>
                <div style="overflow-x: auto;">
                    <table class="data-table" style="font-size: 0.75rem;">
                        <thead><tr><th>Ref ID</th><th>Scholar</th><th>Risk</th></tr></thead>
                        <tbody>
                            <tr><td>#FT-8812</td><td>Aarav Malhotra</td><td><span class="status-pill success">LOW</span></td></tr>
                            <tr><td>#FT-8813</td><td>Isha Kapur</td><td><button class="login-btn action-trigger" style="padding: 5px 10px; font-size: 0.55rem; background: #f59e0b; color: white; border: none;">RECON</button></td></tr>
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
                <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold);">Employee Directory — All Campuses</h3>
                <div style="display: flex; gap: 10px;">
                    <input class="login-input" placeholder="Search employee..." style="margin:0;padding:8px 15px;font-size:0.7rem;width:200px;" />
                    <button class="login-btn action-trigger" data-action="export_excel" style="width:auto;padding:8px 16px;font-size:0.7rem;"><i data-lucide="download" style="width:14px; height:14px; margin-right:4px;"></i> EXPORT</button>
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
        <div class="slide-up" style="background: rgba(184, 134, 11, 0.05); padding: 40px; border-radius: 16px; border: 1px solid rgba(184, 134, 11, 0.2); text-align: center;">
            <h4 style="font-size: 1rem; color: var(--gold); font-weight: 800;">Institutional Payroll Dispatch</h4>
            <p style="color: var(--slate); font-size: 0.8rem; margin-top: 10px;">Ready for Cycle: FEBRUARY 2026</p>
            <button class="login-btn action-trigger" data-action="payroll" style="margin-top: 25px; max-width: 300px; background: var(--gold); color: white;">EXECUTE_GLOBAL_DISBURSEMENT</button>
            <button class="login-btn action-trigger" data-action="gen_payslip" style="margin-top: 15px; max-width: 300px;"><i data-lucide="download" style="width:14px; height:14px; margin-right:4px;"></i> EXPORT_PAYSLIP_BATCH</button>
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
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-bottom: 25px;">
                <div class="kpi-card glass-card" style="padding: 18px;"><span class="kpi-label">Casual Leave</span><span class="kpi-val" style="font-size:1.8rem; color: var(--white);">8</span><div style="font-size:0.6rem;color:#10b981;">of 12 remaining</div></div>
                <div class="kpi-card glass-card" style="padding: 18px;"><span class="kpi-label">Sick Leave</span><span class="kpi-val" style="font-size:1.8rem; color: var(--white);">10</span><div style="font-size:0.6rem;color:var(--gold);">of 12 remaining</div></div>
                <div class="kpi-card glass-card" style="padding: 18px;"><span class="kpi-label">Earned Leave</span><span class="kpi-val" style="font-size:1.8rem; color: var(--white);">18</span><div style="font-size:0.6rem;color:#10b981;">Accumulated</div></div>
                <div class="kpi-card glass-card" style="padding: 18px;"><span class="kpi-label">Pending Requests</span><span class="kpi-val" style="font-size:1.8rem;color:#f59e0b;">6</span><div style="font-size:0.6rem;color:#f59e0b;">Awaiting HOD</div></div>
            </div>

            <!-- Leave Requests Table -->
            <div class="glass-card" style="overflow: hidden;">
                <div style="padding: 18px 22px; border-bottom: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center;">
                    <h4 style="font-size: 0.85rem; font-weight: 700; color: var(--gold);">Pending Leave Requests</h4>
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
            <div class="report-header" style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 30px;">
                <div>
                    <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--white);">Admissions Conversion Analysis</h3>
                    <p style="color: var(--gold); font-size: 0.7rem; margin-top: 4px; font-weight: 700;">REPORT_ID: RPT-ADM-99X | AY 2026-27</p>
                </div>
                <div class="button-group" style="display: flex; gap: 12px;">
                    <button class="login-btn action-trigger" data-action="export_csv" style="width: auto; padding: 10px 20px; font-size: 0.7rem;">EXPORT_CSV</button>
                    <button class="login-btn action-trigger" data-action="export_pdf" style="width: auto; padding: 10px 20px; font-size: 0.7rem; background: var(--gold); color: white;">GENERATE_MASTER_PDF</button>
                </div>
            </div>

            <div class="kpi-grid" style="grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 35px;">
                <div class="kpi-card glass-card" style="padding: 20px; background: rgba(99, 102, 241, 0.03);">
                    <span class="kpi-label">Total Leads</span>
                    <span class="kpi-val" style="font-size: 1.5rem; color: var(--white);">4,240</span>
                    <span style="font-size: 0.6rem; color: #10b981;">↑ 18% month-over-month</span>
                </div>
                <div class="kpi-card glass-card" style="padding: 20px; background: rgba(245, 158, 11, 0.03);">
                    <span class="kpi-label">Conversion Rate</span>
                    <span class="kpi-val" style="font-size: 1.5rem; color: var(--gold);">32.4%</span>
                    <span style="font-size: 0.6rem; color: var(--gold);">Target: 35.0%</span>
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
                        <tr><td>Organic Web Search</td><td>1,250</td><td><span class="status-pill success">92%</span></td><td style="color: var(--gold); font-weight: 800;">42%</td><td><div style="width: 100px; height: 6px; background: rgba(15, 23, 42, 0.05); border-radius: 3px;"><div style="width: 84%; height: 100%; background: #10b981;"></div></div></td></tr>
                        <tr><td>Direct Referrals</td><td>850</td><td><span class="status-pill success">98%</span></td><td style="color: var(--gold); font-weight: 800;">68%</td><td><div style="width: 100px; height: 6px; background: rgba(15, 23, 42, 0.05); border-radius: 3px;"><div style="width: 95%; height: 100%; background: #10b981;"></div></div></td></tr>
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
                        <tr><td>B.Tech CS 2023</td><td>124</td><td>15,400</td><td><span class="status-pill success">OPTIMAL</span></td></tr>
                        <tr><td>BBA 2024</td><td>85</td><td>8,200</td><td><span class="status-pill success">OPTIMAL</span></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    `,
    "Revenue": `
        <div class="slide-up">
            <div class="report-header" style="margin-bottom: 30px;">
                <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--white);">Revenue & Dues Telemetry</h3>
            </div>
            <div class="kpi-grid" style="grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 30px;">
                <div class="kpi-card"><span class="kpi-label">Expected</span><span class="kpi-val">$5.4M</span></div>
                <div class="kpi-card"><span class="kpi-label">Outstanding</span><span class="kpi-val" style="color: #ff4d4d;">$1.3M</span></div>
            </div>
            <div style="overflow-x: auto;">
                <table class="data-table">
                    <thead><tr><th>Fee Head</th><th>Total Target</th><th>Realized</th><th>Gap</th></tr></thead>
                    <tbody>
                        <tr><td>Tuition</td><td>$4.2M</td><td>$3.5M</td><td>$0.7M</td></tr>
                        <tr><td>Hostel</td><td>$1.2M</td><td>$0.6M</td><td>$0.6M</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    `,
    "Staff": `
        <div class="slide-up">
            <div class="report-header" style="margin-bottom: 30px;">
                <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--white);">Staff Productivity & Load</h3>
            </div>
            <div class="kpi-grid" style="grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
                <div class="kpi-card"><span class="kpi-label">Faculty Utilization</span><span class="kpi-val">82%</span></div>
                <div class="kpi-card"><span class="kpi-label">Resigned/Attrition</span><span class="kpi-val" style="color: #ff4d4d;">1.2%</span></div>
            </div>
            <div style="overflow-x: auto;">
                <table class="data-table">
                    <thead><tr><th>Department</th><th>Resource Count</th><th>Avg Load (Hrs)</th><th>Health</th></tr></thead>
                    <tbody>
                        <tr><td>Engineering</td><td>45</td><td>18/wk</td><td><span class="status-pill success">STABLE</span></td></tr>
                        <tr><td>Management</td><td>22</td><td>14/wk</td><td><span class="status-pill success">STABLE</span></td></tr>
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
            <div class="glass-card" style="padding: 30px; text-align: center; color: var(--slate);">
                <i data-lucide="landmark" style="width: 48px; height: 48px; color: var(--gold); display: block; margin: 0 auto 20px;"></i>
                <p style="font-size: 0.9rem; font-weight: 700; color: var(--gold);">INSTITUTIONAL_COMPLIANCE_ACTIVE</p>
                <p style="font-size: 0.7rem; margin-top: 10px;">All regulatory filings for FY 2025-26 are synchronized with the Central Gateway.</p>
                <button class="login-btn action-trigger" data-action="run_audit" style="margin-top: 25px; max-width: 250px;">GENERATE_COMPLIANCE_AUDIT</button>
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
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
                <div class="glass-card" style="background: rgba(16, 185, 129, 0.05); padding: 25px; border-radius: 12px; border: 1px solid rgba(16, 185, 129, 0.2);">
                    <h4 style="font-size: 0.75rem; color: var(--gold); font-weight: 800; margin-bottom: 10px;">TWO_FACTOR_AUTH</h4>
                    <p style="font-size: 0.65rem; color: var(--slate); margin-bottom: 15px;">Biometric & Mobile OTP Gateway Active</p>
                    <span class="status-pill success">SECURE_SYSTEM</span>
                </div>
                <div style="background: rgba(255,255,255,0.02); padding: 25px; border-radius: 12px; border: 1px solid var(--glass-border);">
                    <h4 style="font-size: 0.75rem; color: var(--white); font-weight: 800; margin-bottom: 10px;">PASS_ROTATION_POLICY</h4>
                    <p style="font-size: 0.65rem; color: var(--slate); margin-bottom: 15px;">Next mandated change in 42 days</p>
                    <button class="login-btn action-trigger" data-action="rotate_pass" style="width: auto; padding: 8px 15px; font-size: 0.6rem;">ROTATE_NOW</button>
                </div>
            </div>
            <div style="background: var(--glass); padding: 25px; border-radius: 12px; border: 1px solid var(--glass-border);">
                <h4 style="font-size: 0.8rem; font-weight: 700; color: var(--gold); margin-bottom: 20px;">Active Login Sessions</h4>
                <div style="overflow-x: auto;">
                    <table class="data-table" style="font-size: 0.75rem;">
                        <thead><tr><th>Device</th><th>Location</th><th>Logout Time</th><th>Action</th></tr></thead>
                        <tbody>
                            <tr>
                                <td><i data-lucide="monitor" style="width:14px; height:14px; vertical-align:middle; margin-right:6px;"></i> Windows Desktop</td>
                                <td>New Delhi, IN</td>
                                <td><span class="status-pill status-verified">CURRENT</span></td>
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
                <div style="background: var(--glass); padding: 30px; border-radius: 16px; border: 1px dashed rgba(184, 134, 11, 0.3); text-align: center;">
                    <div style="width: 120px; height: 120px; background: var(--slate-900); border: 2px solid var(--gold); border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-weight: 900; font-size: 1.6rem; color: var(--gold);">C<span style="color: var(--white);">N</span></div>
                    <p style="font-size: 0.6rem; color: var(--slate); margin-bottom: 15px;">INSTITUTIONAL_BRAND_MARK</p>
                    <button class="login-btn action-trigger" data-action="upload_logo" style="font-size: 0.65rem;">UPLOAD_NEW_EMBLEM</button>
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
                            <input type="text" class="login-input" value="#B8860B" style="margin: 0; width: 130px;">
                            <div style="width: 40px; height: 40px; background: var(--gold); border-radius: 8px; border: 1px solid var(--glass-border); flex-shrink: 0;"></div>
                        </div>
                    </div>
                    <button class="login-btn action-trigger" data-action="commit_branding" style="width: 250px; background: var(--gold); color: white;">SAVE_BRANDING_CONFIGURATION</button>
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
                    <button class="login-btn action-trigger" data-action="toggle_setting" style="width: 90px; padding: 8px; font-size: 0.65rem; background: rgba(16, 185, 129, 0.1); color: #10b981; border-color: rgba(16, 185, 129, 0.2);">● ACTIVE</button>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--glass-border); padding: 20px 25px;">
                    <div>
                        <h5 style="font-size: 0.8rem; color: var(--white); font-weight: 700;">Academic Year Auto-Promotion</h5>
                        <p style="font-size: 0.65rem; color: var(--slate); margin-top: 4px;">Automatic roll-forward of students at end of academic cycle</p>
                    </div>
                    <button class="login-btn action-trigger" data-action="toggle_setting" style="width: 90px; padding: 8px; font-size: 0.65rem; opacity: 0.4;">○ DISABLED</button>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--glass-border); padding: 20px 25px;">
                    <div>
                        <h5 style="font-size: 0.8rem; color: var(--white); font-weight: 700;">Neural Optimization Engine</h5>
                        <p style="font-size: 0.65rem; color: var(--slate); margin-top: 4px;">AI-driven scheduling and resource conflict resolution</p>
                    </div>
                    <button class="login-btn action-trigger" data-action="toggle_setting" style="width: 90px; padding: 8px; font-size: 0.65rem; background: rgba(184, 134, 11, 0.15); color: var(--gold); border-color: rgba(184, 134, 11, 0.3);">● ACTIVE</button>
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
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px;">
                <div style="background: var(--glass); padding: 25px; border-radius: 12px; border: 1px solid var(--glass-border);">
                    <h4 style="font-size: 0.75rem; color: var(--gold); margin-bottom: 15px; font-weight: 800;">PARTICLE_DENSITY</h4>
                    <input type="range" style="width: 100%; accent-color: var(--gold);" min="0" max="100" value="50">
                    <div style="display: flex; justify-content: space-between; font-size: 0.6rem; color: var(--slate); margin-top: 8px;">
                        <span>Static</span><span>Hyper-Dynamic</span>
                    </div>
                </div>
                <div style="background: var(--glass); padding: 25px; border-radius: 12px; border: 1px solid var(--glass-border);">
                    <h4 style="font-size: 0.75rem; color: var(--gold); margin-bottom: 15px; font-weight: 800;">LANGUAGE_LOCALIZATION</h4>
                    <select class="login-input" style="margin: 0;">
                        <option>English (Neural Std)</option>
                        <option>Arabic</option>
                        <option>Hindi (Bharat Matrix)</option>
                    </select>
                </div>
                <div style="background: var(--glass); padding: 25px; border-radius: 12px; border: 1px solid var(--glass-border);">
                    <h4 style="font-size: 0.75rem; color: var(--gold); margin-bottom: 15px; font-weight: 800;">NOTIFICATION_GATEWAY</h4>
                    <select class="login-input" style="margin: 0;">
                        <option>All Alerts</option>
                        <option>Critical Only</option>
                        <option>Silent Mode</option>
                    </select>
                </div>
                <div style="background: var(--glass); padding: 25px; border-radius: 12px; border: 1px solid var(--glass-border);">
                    <h4 style="font-size: 0.75rem; color: var(--gold); margin-bottom: 15px; font-weight: 800;">DEFAULT_LANDING_VIEW</h4>
                    <select class="login-input" style="margin: 0;">
                        <option>Dashboard</option>
                        <option>Admissions</option>
                        <option>Finance</option>
                        <option>Reports</option>
                    </select>
                </div>
            </div>
            <button class="login-btn action-trigger" data-action="save_prefs" style="width: 280px; background: var(--gold); color: white;">SAVE_PREFERENCES</button>
        </div>
    `
};
