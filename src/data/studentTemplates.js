export const studentViewTemplates = {
    "Dashboard": (role = "Student") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Welcome Back, Aarav</h1>
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
                <div style="font-size: 0.65rem; color: #64ffda; font-weight: 700;">Optimal Presence</div>
            </div>
            <div class="kpi-card">
                <span class="kpi-label">Pending Fees</span>
                <span class="kpi-val" style="color: #ff4d4d;">$1,250</span>
                <div style="font-size: 0.65rem; color: #ffab00; font-weight: 700;">Due in 5 Days</div>
            </div>
            <div class="kpi-card">
                <span class="kpi-label">Credits Earned</span>
                <span class="kpi-val">124</span>
                <div style="font-size: 0.65rem; color: var(--gold); font-weight: 700;">Target: 180</div>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 25px; margin-top: 25px;" class="slide-up">
            <div style="background: var(--glass); padding: 30px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 25px;">My Academic Performance Trend</h3>
                <div style="height: 180px; background: rgba(0,0,0,0.2); border-radius: 12px; border: 1px dashed var(--glass-border); position: relative; overflow: hidden; display: flex; align-items: flex-end;">
                    <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="none" style="position: absolute; bottom: 0; left: 0;">
                        <defs>
                            <linearGradient id="grad-student-dash" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style="stop-color:var(--gold);stop-opacity:0.3" />
                                <stop offset="100%" style="stop-color:var(--gold);stop-opacity:0" />
                            </linearGradient>
                        </defs>
                        <path d="M0,200 Q200,150 400,180 T800,120 T1000,100 V300 H0 Z" fill="url(#grad-student-dash)" stroke="var(--gold)" stroke-width="2" />
                    </svg>
                    <div style="position: absolute; top: 10px; right: 20px; text-align: right;">
                        <div style="font-size: 0.6rem; color: var(--gold); letter-spacing: 2px;">NEURAL_PROGRESS_NODE</div>
                    </div>
                </div>
            </div>
            <div style="background: var(--glass); padding: 30px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 20px;">Up Next Today</h3>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div style="padding: 15px; background: rgba(255,255,255,0.03); border-radius: 10px; border-left: 4px solid var(--gold);">
                        <p style="font-size: 0.75rem; font-weight: 600;">Design & Analysis of Algorithms</p>
                        <p style="font-size: 0.65rem; color: var(--slate); margin-top: 4px;">09:00 AM | Hall-A (NL-402)</p>
                    </div>
                    <div style="padding: 15px; background: rgba(255,255,255,0.03); border-radius: 10px; border-left: 4px solid #64ffda;">
                        <p style="font-size: 0.75rem; font-weight: 600;">Database Systems Lab</p>
                        <p style="font-size: 0.65rem; color: var(--slate); margin-top: 4px;">02:00 PM | Lab-DB</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    "Exams": (role = "Student") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800;">My Examination Results</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Academic Progression & Evaluation Node | Semester 06</p>
        </div>

        <div class="kpi-grid" style="margin-top: 30px;">
            <div class="kpi-card"><span class="kpi-label">Current CGPA</span><span class="kpi-val" style="color: var(--gold);">9.42</span></div>
            <div class="kpi-card"><span class="kpi-label">Rank in Batch</span><span class="kpi-val">#02</span></div>
            <div class="kpi-card"><span class="kpi-label">Credits Cleared</span><span class="kpi-val">124</span></div>
        </div>

        <div class="slide-up" style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 20px;">
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold); margin-bottom: 20px;">Semester-wise Performance</h3>
                <div style="overflow-x: auto;">
                    <table class="data-table" style="font-size: 0.75rem;">
                        <thead><tr><th>Semester</th><th>GPA</th><th>Credits</th><th>Status</th></tr></thead>
                        <tbody>
                            <tr><td>Semester 05</td><td>9.50</td><td>22</td><td><span class="status-pill status-verified">COMPLETED</span></td></tr>
                            <tr><td>Semester 04</td><td>9.33</td><td>20</td><td><span class="status-pill status-verified">COMPLETED</span></td></tr>
                            <tr><td>Semester 03</td><td>9.58</td><td>21</td><td><span class="status-pill status-verified">COMPLETED</span></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold); margin-bottom: 20px;">Upcoming Assessments</h3>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div style="padding: 15px; background: rgba(255,255,255,0.03); border-radius: 10px; border-left: 4px solid var(--gold);">
                        <p style="font-size: 0.75rem; font-weight: 800;">Mid-Term: Algorithm Design</p>
                        <p style="font-size: 0.65rem; color: var(--slate); margin-top: 4px;">Schedule: March 12, 2026</p>
                        <button class="login-btn action-trigger" data-action="hall_ticket" style="margin-top: 10px; font-size: 0.6rem; width: auto; padding: 5px 12px;">DOWNLOAD_ADMIT_CARD</button>
                    </div>
                </div>
            </div>
        </div>
    `,
    "Fees": (role = "Student") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800;">My Fiscal Account</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Student Finance Ledger | Academic Year 2026-27</p>
        </div>

        <div class="kpi-grid" style="margin-top: 30px;">
            <div class="kpi-card"><span class="kpi-label">Total Payable</span><span class="kpi-val">$8,500</span></div>
            <div class="kpi-card"><span class="kpi-label">Amount Paid</span><span class="kpi-val" style="color: #64ffda;">$7,250</span></div>
            <div class="kpi-card"><span class="kpi-label">Outstanding Dues</span><span class="kpi-val" style="color: #ff4d4d;">$1,250</span></div>
        </div>

        <div class="slide-up" style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 20px;">
            <div style="background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
                <h3 style="padding: 20px; font-size: 0.9rem; font-weight: 700; color: var(--gold);">Payment History</h3>
                <table class="data-table" style="font-size: 0.72rem;">
                    <thead><tr><th>Date</th><th>Description</th><th>TxID</th><th>Amount</th><th>Status</th></tr></thead>
                    <tbody>
                        <tr><td>Jan 12, 2026</td><td>Tuition Fee - Sem 6</td><td>#FT-2291</td><td>$4,500</td><td><span class="status-pill status-verified">SUCCESS</span></td></tr>
                        <tr><td>Jan 14, 2026</td><td>Hostel & Mess</td><td>#FT-2304</td><td>$2,750</td><td><span class="status-pill status-verified">SUCCESS</span></td></tr>
                    </tbody>
                </table>
            </div>

            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold); margin-bottom: 20px;">Pending Fee Demands</h3>
                <div style="padding: 15px; background: rgba(255,77,77,0.05); border-radius: 10px; border-left: 4px solid #ff4d4d;">
                    <p style="font-size: 0.75rem; font-weight: 700;">Library Overdue Charges</p>
                    <p style="font-size: 0.65rem; color: var(--slate); margin-top: 4px;">Due Date: Feb 25, 2026</p>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px;">
                        <span style="font-weight: 800; color: var(--white);">$1,250</span>
                        <button class="login-btn action-trigger" data-action="pay_fees" style="width: auto; padding: 6px 18px; font-size: 0.65rem; background: var(--gold); color: var(--navy-dark);">PAY_NOW</button>
                    </div>
                </div>
            </div>
        </div>
    `,
    "Timetable": (role = "Student") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800;">My Weekly Schedule</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Class Timetable | Semester 06 | Section CS-6A</p>
        </div>

        <div class="slide-up" style="margin-top: 30px; overflow-x: auto;">
            <table class="data-table" style="min-width: 800px;">
                <thead>
                    <tr>
                        <th style="width: 100px;">Time</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="font-weight: 800; color: var(--gold);">09:00 AM</td>
                        <td style="background: rgba(100,255,218,0.05);">Algorithms (NL-402)</td>
                        <td>-</td>
                        <td style="background: rgba(100,255,218,0.05);">Data Structures</td>
                        <td>-</td>
                        <td style="background: rgba(100,255,218,0.05);">Algorithms</td>
                    </tr>
                    <tr>
                        <td style="font-weight: 800; color: var(--gold);">11:00 AM</td>
                        <td>-</td>
                        <td style="background: rgba(100,255,218,0.05);">OS Lab (SL-10)</td>
                        <td>-</td>
                        <td style="background: rgba(100,255,218,0.05);">Networking</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td style="font-weight: 800; color: var(--gold);">02:00 PM</td>
                        <td style="background: rgba(100,255,218,0.05);">AI Analytics</td>
                        <td>-</td>
                        <td style="background: rgba(100,255,218,0.05);">Ethics in CS</td>
                        <td>-</td>
                        <td style="background: rgba(100,255,218,0.05);">AI Analytics</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    "Attendance": (role = "Student") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800;">My Attendance Overview</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Personal Presence Analytics | Semester 06</p>
        </div>

        <div class="kpi-grid" style="margin-top: 30px;">
            <div class="kpi-card"><span class="kpi-label">Overall Attendance</span><span class="kpi-val" style="color: #64ffda;">98.5%</span></div>
            <div class="kpi-card"><span class="kpi-label">Total Classes</span><span class="kpi-val">140</span></div>
            <div class="kpi-card"><span class="kpi-label">Classes Attended</span><span class="kpi-val">138</span></div>
        </div>

        <div class="slide-up" style="margin-top: 25px; background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
            <div style="padding: 18px 22px; border-bottom: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold);">Subject-wise Attendance</h3>
            </div>
            <table class="data-table" style="font-size: 0.75rem;">
                <thead><tr><th>Subject</th><th>Faculty</th><th>Attended</th><th>Total</th><th>Percentage</th></tr></thead>
                <tbody>
                    <tr><td>Design & Analysis of Algorithms</td><td>Dr. R. Verma</td><td>24</td><td>24</td><td style="color:#64ffda;font-weight:800;">100%</td></tr>
                    <tr><td>Machine Learning Fundamentals</td><td>Prof. A. Singh</td><td>18</td><td>20</td><td style="color:var(--gold);font-weight:800;">90%</td></tr>
                    <tr><td>Computer Networks</td><td>Dr. M. Khan</td><td>16</td><td>16</td><td style="color:#64ffda;font-weight:800;">100%</td></tr>
                </tbody>
            </table>
        </div>
    `,
    "Reports": (role = "Student") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800;">Notices & Circulars</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Institutional Announcements for Students</p>
        </div>

        <div class="slide-up" style="margin-top: 30px; display: flex; flex-direction: column; gap: 15px;">
            <div style="background: var(--glass); padding: 20px; border-radius: 12px; border: 1px solid var(--glass-border); border-left: 4px solid var(--gold);">
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <h3 style="font-size: 0.9rem; font-weight: 700;">End Term Examination Schedule</h3>
                    <span style="font-size: 0.65rem; color: var(--slate);">Feb 20, 2026</span>
                </div>
                <p style="font-size: 0.75rem; color: var(--slate); margin-top: 8px;">The final schedule for Semester 06 exams has been published. Please check the results module for your admit card.</p>
                <button class="login-btn" style="margin-top: 15px; width: auto; padding: 6px 15px; font-size: 0.65rem;">VIEW_DETAILS</button>
            </div>
            
            <div style="background: var(--glass); padding: 20px; border-radius: 12px; border: 1px solid var(--glass-border); border-left: 4px solid #64ffda;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <h3 style="font-size: 0.9rem; font-weight: 700;">Hackathon Winners Announced</h3>
                    <span style="font-size: 0.65rem; color: var(--slate);">Feb 18, 2026</span>
                </div>
                <p style="font-size: 0.75rem; color: var(--slate); margin-top: 8px;">Congratulations to team 'Nexus' for winning the Annual Tech-Fest Hackathon!</p>
            </div>
        </div>
    `,
    "Home": (role = "Student") => `
        <div style="max-width: 600px; margin: 0 auto; padding-bottom: 50px;" class="slide-up">
            <div style="text-align: center; padding: 40px 0;">
                <h1 style="font-size: 1.5rem; font-weight: 800; color: var(--gold);">Student Portal</h1>
                <p style="color: var(--slate); font-size: 0.8rem;">Session Sync Active</p>
            </div>
            <div class="kpi-grid" style="grid-template-columns: 1fr 1fr; gap: 15px;">
                <div class="kpi-card" style="text-align: center;">
                    <span class="kpi-label">ATTENDANCE</span>
                    <span class="kpi-val" style="color: var(--gold);">98.5%</span>
                </div>
                <div class="kpi-card" style="text-align: center;">
                    <span class="kpi-label">FEES_DUE</span>
                    <span class="kpi-val" style="color: #ff4d4d;">$1,250</span>
                </div>
            </div>
            <div style="margin-top: 25px; background: var(--glass); border-radius: 16px; padding: 20px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 15px; color: var(--gold);">Upcoming Session</h3>
                <div style="padding: 15px; background: rgba(100,255,218,0.05); border-radius: 10px; border-left: 4px solid var(--gold);">
                    <p style="font-size: 0.8rem; font-weight: 600; color: var(--white);">Design & Analysis of Algorithms</p>
                    <p style="font-size: 0.7rem; color: var(--slate); margin-top: 4px;">Today | 09:00 AM | Room NL-402</p>
                </div>
            </div>
        </div>
    `
};
