export const parentViewTemplates = {
    "Dashboard": (role = "Parent") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Ward Overview: Aarav Malhotra</h1>
            <p style="color: var(--slate); font-size: 0.8rem; margin-top: 5px;">Scholar ID: #CN-9822 &nbsp;|&nbsp; <span style="color: #64ffda;">Session Synched</span></p>
        </div>
        
        <div class="kpi-grid" style="margin-top: 30px;">
            <div class="kpi-card">
                <span class="kpi-label">Current GPA</span>
                <span class="kpi-val" style="color: var(--gold);">9.42</span>
                <div style="font-size: 0.65rem; color: #64ffda; font-weight: 700;">↑ Top 2% of Batch</div>
            </div>
            <div class="kpi-card">
                <span class="kpi-label">Attendance</span>
                <span class="kpi-val" style="color: #64ffda;">98.5%</span>
                <div style="font-size: 0.65rem; color: #64ffda; font-weight: 700;">Regular Presence</div>
            </div>
            <div class="kpi-card">
                <span class="kpi-label">Outstanding Fees</span>
                <span class="kpi-val" style="color: #ff4d4d;">$1,250</span>
                <div style="font-size: 0.65rem; color: #ffab00; font-weight: 700;">Due in 5 Days</div>
            </div>
            <div class="kpi-card">
                <span class="kpi-label">Scholarship Status</span>
                <span class="kpi-val">ACTIVE</span>
                <div style="font-size: 0.65rem; color: var(--gold); font-weight: 700;">Merit-Based (25%)</div>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 25px; margin-top: 25px;" class="slide-up">
            <div style="background: var(--glass); padding: 30px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 25px;">Academic Progression Tracker</h3>
                <div style="height: 180px; background: rgba(0,0,0,0.2); border-radius: 12px; border: 1px dashed var(--glass-border); position: relative; overflow: hidden; display: flex; align-items: flex-end;">
                    <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="none" style="position: absolute; bottom: 0; left: 0;">
                        <defs>
                            <linearGradient id="grad-parent-dash" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style="stop-color:var(--gold);stop-opacity:0.3" />
                                <stop offset="100%" style="stop-color:var(--gold);stop-opacity:0" />
                            </linearGradient>
                        </defs>
                        <path d="M0,200 Q200,150 400,180 T800,120 T1000,100 V300 H0 Z" fill="url(#grad-parent-dash)" stroke="var(--gold)" stroke-width="2" />
                    </svg>
                </div>
            </div>
            <div style="background: var(--glass); padding: 30px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 20px;">Faculty Contact</h3>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div style="padding: 15px; background: rgba(255,255,255,0.03); border-radius: 10px; border-left: 4px solid var(--gold);">
                        <p style="font-size: 0.75rem; font-weight: 600;">Dr. R. Verma</p>
                        <p style="font-size: 0.65rem; color: var(--gold); margin-top: 4px;">Mentor | CS-6A</p>
                        <button class="login-btn action-trigger" data-action="parent_connect" style="margin-top: 10px; font-size: 0.6rem; width: auto; padding: 5px 12px;">MESSAGE_MENTOR</button>
                    </div>
                </div>
            </div>
        </div>
    `,
    "Attendance": (role = "Parent") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800;">Ward Attendance Insight</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Aarav Malhotra | Semester 06 Presence Analytics</p>
        </div>

        <div class="kpi-grid" style="margin-top: 30px;">
            <div class="kpi-card"><span class="kpi-label">Cumulative Attendance</span><span class="kpi-val" style="color: #64ffda;">98.5%</span></div>
            <div class="kpi-card"><span class="kpi-label">Lectures Missed</span><span class="kpi-val" style="color: #ff4d4d;">02</span></div>
            <div class="kpi-card"><span class="kpi-label">Monthly Trend</span><span class="kpi-val" style="color: #64ffda;">↑ 2.4%</span></div>
        </div>

        <div class="slide-up" style="margin-top: 25px; background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
            <div style="padding: 18px 22px; border-bottom: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold);">Performance by Subject</h3>
            </div>
            <table class="data-table" style="font-size: 0.75rem;">
                <thead><tr><th>Subject</th><th>Requirement</th><th>Present</th><th>Total</th><th>Status</th></tr></thead>
                <tbody>
                    <tr><td>Algorithms</td><td>75%</td><td>24</td><td>24</td><td style="color:#64ffda;font-weight:800;">OPTIMAL</td></tr>
                    <tr><td>Machine Learning</td><td>75%</td><td>18</td><td>20</td><td style="color:var(--gold);font-weight:800;">VERIFIED</td></tr>
                    <tr><td>Networks</td><td>75%</td><td>16</td><td>16</td><td style="color:#64ffda;font-weight:800;">OPTIMAL</td></tr>
                </tbody>
            </table>
        </div>
    `,
    "Exams": (role = "Parent") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800;">Academic Progression Hub</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Grade Ledger for Aarav Malhotra</p>
        </div>

        <div class="kpi-grid" style="margin-top: 30px;">
            <div class="kpi-card"><span class="kpi-label">Overall CGPA</span><span class="kpi-val" style="color: var(--gold);">9.42</span></div>
            <div class="kpi-card"><span class="kpi-label">Current Standings</span><span class="kpi-val">#02</span></div>
            <div class="kpi-card"><span class="kpi-label">Credits Earned</span><span class="kpi-val">124 / 180</span></div>
        </div>

        <div class="slide-up" style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 20px; margin-top: 20px;">
            <div style="background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
                <h3 style="padding: 20px; font-size: 0.9rem; font-weight: 700; color: var(--gold);">Semester-wise Performance</h3>
                <table class="data-table" style="font-size: 0.72rem;">
                    <thead><tr><th>Term</th><th>GPA</th><th>Result</th><th>Status</th></tr></thead>
                    <tbody>
                        <tr><td>Semester 05</td><td>9.50</td><td>PASS</td><td><span class="status-pill status-verified">COMPLETED</span></td></tr>
                        <tr><td>Semester 04</td><td>9.33</td><td>PASS</td><td><span class="status-pill status-verified">COMPLETED</span></td></tr>
                        <tr><td>Semester 03</td><td>9.58</td><td>PASS</td><td><span class="status-pill status-verified">COMPLETED</span></td></tr>
                    </tbody>
                </table>
            </div>
            
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold); margin-bottom: 20px;">Upcoming Exam Matrix</h3>
                <div style="padding: 15px; background: rgba(255,255,255,0.03); border-radius: 10px; border-left: 4px solid var(--gold);">
                    <p style="font-size: 0.75rem; font-weight: 800;">End-Term Evaluation</p>
                    <p style="font-size: 0.65rem; color: var(--slate); margin-top: 4px;">Commencing: May 12, 2026</p>
                    <button class="login-btn action-trigger" data-action="hall_ticket" style="margin-top: 10px; font-size: 0.6rem; width: auto; padding: 5px 12px;">VIEW_DATE_SHEET</button>
                </div>
            </div>
        </div>
    `,
    "Fees": (role = "Parent") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800;">Parental Fee Portal</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Tuition & Institutional Ledger | AY 2026-27</p>
        </div>

        <div class="kpi-grid" style="margin-top: 30px;">
            <div class="kpi-card"><span class="kpi-label">Paid This Year</span><span class="kpi-val" style="color: #64ffda;">$7,250</span></div>
            <div class="kpi-card"><span class="kpi-label">Current Liability</span><span class="kpi-val" style="color: #ff4d4d;">$1,250</span></div>
            <div class="kpi-card"><span class="kpi-label">Scholarship Adj.</span><span class="kpi-val">-$2,125</span></div>
        </div>

        <div class="slide-up" style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 20px; margin-top: 20px;">
            <div style="background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
                <h3 style="padding: 20px; font-size: 0.9rem; font-weight: 700; color: var(--gold);">Verified Transaction Log</h3>
                <table class="data-table" style="font-size: 0.72rem;">
                    <thead><tr><th>Ref_No</th><th>Description</th><th>Date</th><th>Amount</th><th>Status</th></tr></thead>
                    <tbody>
                        <tr><td>#PX-0442</td><td>Tuition Node Installment</td><td>Jan 12, 2026</td><td>$4,500</td><td><span class="status-pill status-verified">SUCCESS</span></td></tr>
                        <tr><td>#PX-0443</td><td>Hostel/Infrastructure</td><td>Jan 14, 2026</td><td>$2,750</td><td><span class="status-pill status-verified">SUCCESS</span></td></tr>
                    </tbody>
                </table>
            </div>

            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: #ff4d4d; margin-bottom: 20px;">Secure Payment Gateway</h3>
                <div style="padding: 15px; background: rgba(255,77,77,0.05); border-radius: 10px; border-left: 4px solid #ff4d4d;">
                    <p style="font-size: 0.75rem; font-weight: 700;">Library & Lab Dues</p>
                    <p style="font-size: 0.65rem; color: var(--slate); margin-top: 4px;">Deadline: Feb 25, 2026</p>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px;">
                        <span style="font-weight: 800; color: var(--white);">$1,250</span>
                        <button class="login-btn action-trigger" data-action="pay_fees" style="width: auto; padding: 6px 18px; font-size: 0.65rem; background: var(--gold); color: var(--navy-dark);">INITIALIZE_PAYMENT</button>
                    </div>
                </div>
            </div>
        </div>
    `,
    "Reports": (role = "Parent") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800;">Parental Broadcast Hub</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Departmental & Institutional Notifications</p>
        </div>

        <div class="slide-up" style="margin-top: 30px; display: flex; flex-direction: column; gap: 15px;">
            <div style="background: var(--glass); padding: 20px; border-radius: 12px; border: 1px solid var(--glass-border); border-left: 4px solid var(--gold);">
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <h3 style="font-size: 0.9rem; font-weight: 700;">Annual PTM Schedule</h3>
                    <span style="font-size: 0.65rem; color: var(--slate);">Feb 22, 2026</span>
                </div>
                <p style="font-size: 0.75rem; color: var(--slate); margin-top: 8px;">Institutional Parent-Teacher Interaction scheduled for March 15. Please RSVP via the portal.</p>
                <button class="login-btn" style="margin-top: 15px; width: auto; padding: 6px 15px; font-size: 0.65rem;">RSVP_NOW</button>
            </div>
            
            <div style="background: var(--glass); padding: 20px; border-radius: 12px; border: 1px solid var(--glass-border); border-left: 4px solid #64ffda;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <h3 style="font-size: 0.9rem; font-weight: 700;">Hostel Safety Audit Cleared</h3>
                    <span style="font-size: 0.65rem; color: var(--slate);">Feb 19, 2026</span>
                </div>
                <p style="font-size: 0.75rem; color: var(--slate); margin-top: 8px;">Main Campus Hostel Alpha has successfully passed the annual institutional safety and hygiene audit.</p>
            </div>
        </div>
    `
};
