export const studentViewTemplates = {
    "Dashboard": (role = "Student") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Student Dashboard</h1>
            <p style="color: #555; font-size: 0.75rem; margin-top: 5px; font-weight: 700; letter-spacing: 2px;">ID: #CN-9822 &nbsp;|&nbsp; Status: <span style="color: var(--vibrant-violet);">Live</span></p>
        </div>
        
        <div class="kpi-grid" style="margin-top: 25px;">
            <div class="kpi-card" style="border-top: 3px solid var(--vibrant-violet); padding: 15px 22px;">
                <span class="kpi-label" style="color: var(--vibrant-violet); font-weight: 900;">GPA</span>
                <span class="kpi-val">9.42</span>
            </div>
            <div class="kpi-card" style="border-top: 3px solid var(--white); padding: 15px 22px;">
                <span class="kpi-label" style="color: var(--white); font-weight: 900;">Attendance</span>
                <span class="kpi-val">98.5%</span>
            </div>
            <div class="kpi-card" style="border-top: 3px solid #ef4444; padding: 15px 22px;">
                <span class="kpi-label" style="color: #ef4444; font-weight: 900;">Dues Payable</span>
                <span class="kpi-val">$1,250</span>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 25px; margin-top: 25px;" class="slide-up">
            <div class="glass-card" style="padding: 22px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <h3 style="font-size: 0.9rem; font-weight: 700;">Academic Progression</h3>
                    <div style="display: flex; gap: 15px;">
                        <span style="font-size: 0.7rem; color: #555;"><i style="color: var(--vibrant-violet); margin-right: 5px;">●</i>Performance</span>
                        <span style="font-size: 0.7rem; color: #555;"><i style="color: var(--white); margin-right: 5px;">●</i>Avg</span>
                    </div>
                </div>
                <div style="height: 180px; background: rgba(0, 128, 128, 0.05); border-radius: 12px; border: 1px dashed var(--glass-border); position: relative; overflow: hidden; display: flex; align-items: flex-end;">
                    <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="none" style="position: absolute; bottom: 0; left: 0;">
                        <defs>
                            <linearGradient id="grad-student-pulse" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style="stop-color:var(--vibrant-violet);stop-opacity:0.25" />
                                <stop offset="100%" style="stop-color:var(--vibrant-violet);stop-opacity:0" />
                            </linearGradient>
                        </defs>
                        <path d="M0,220 Q200,100 400,180 T800,80 T1000,100 V300 H0 Z" fill="url(#grad-student-pulse)" stroke="var(--vibrant-violet)" stroke-width="3" />
                    </svg>
                </div>
            </div>
            
            <div style="display: flex; flex-direction: column; gap: 20px;">
                <div style="background: var(--glass); padding: 22px; border-radius: 12px; border: 1px solid var(--glass-border);">
                    <h3 style="font-size: 0.82rem; font-weight: 700; color: var(--vibrant-violet); margin-bottom: 15px;">Next Class</h3>
                    <div style="padding: 15px; background: rgba(0, 128, 128, 0.05); border-radius: 10px; border-left: 4px solid var(--vibrant-violet); margin-bottom: 12px;">
                        <span style="font-size: 0.6rem; color: var(--vibrant-violet); letter-spacing: 2px; font-weight:900;">Starts in 15 mins</span>
                        <h4 style="font-size: 0.85rem; margin-top: 5px;">Algorithms</h4>
                        <p style="font-size: 0.62rem; color: #555; margin-top: 3px;">Hall-A (NL-402)</p>
                    </div>
                    <button class="login-btn" style="width: 100%; font-size: 0.65rem; background: var(--vibrant-violet); color: #000;">View Resources</button>
                </div>
                
                <div class="glass-card" style="padding: 25px; text-align: center;">
                    <div style="font-size: 0.65rem; color: var(--slate); letter-spacing: 1px;">Degree Progress</div>
                    <div style="font-size: 2rem; font-weight: 900; color: var(--white); margin-top: 5px;">68.8%</div>
                    <div style="height: 4px; background: rgba(15, 23, 42, 0.05); margin-top: 15px; border-radius: 2px;">
                        <div style="width: 68.8%; height: 100%; background: #10b981;"></div>
                    </div>
                </div>
            </div>
        </div>
    `,

    "Exams": (role = "Student") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Evaluations</h1>
            <p style="color: #555; font-size: 0.8rem; margin-top: 5px; font-weight: 700; letter-spacing: 2px;">Record: <span style="color: var(--vibrant-violet);">Verified</span> &nbsp;|&nbsp; Semester 06</p>
        </div>

        <div class="grid-adaptive slide-up" style="margin-top: 30px;">
            <div class="kpi-card glass-card">
                <span class="kpi-label">Cumulative GPA</span>
                <span class="kpi-val" style="color: var(--gold);">9.42</span>
            </div>
            <div class="kpi-card glass-card">
                <span class="kpi-label">Course Rank</span>
                <span class="kpi-val" style="color: var(--white);">#02 / 120</span>
            </div>
            <div class="kpi-card glass-card">
                <span class="kpi-label">Backlogs</span>
                <span class="kpi-val" style="color: #10b981;">None</span>
            </div>
        </div>

        <div class="slide-up" style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 20px; margin-top: 25px;">
            <div style="background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
                <div style="padding: 20px; border-bottom: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center;">
                    <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold);">Historical Performance</h3>
                    <button class="login-btn action-trigger" data-action="export_pdf" style="width: auto; padding: 6px 15px; font-size: 0.6rem;">Download Transcript</button>
                </div>
                <div class="table-container">
                    <table class="data-table" style="font-size: 0.72rem;">
                    <thead><tr><th>Term</th><th>Pointer</th><th>Credits</th><th>Status</th><th>Accreditation</th></tr></thead>
                    <tbody>
                        <tr><td style="font-weight:800;">Semester 05</td><td>9.50</td><td>22</td><td style="color:#10b981;">Excellent</td><td><span class="status-pill status-verified">Verified</span></td></tr>
                        <tr><td style="font-weight:800;">Semester 04</td><td>9.33</td><td>20</td><td style="color:#10b981;">Excellent</td><td><span class="status-pill status-verified">Verified</span></td></tr>
                        <tr><td style="font-weight:800;">Semester 03</td><td>9.58</td><td>21</td><td style="color:#10b981;">Excellent</td><td><span class="status-pill status-verified">Verified</span></td></tr>
                    </tbody>
                </table>
            </div>

            <div style="background: var(--glass); padding: 18px; border-radius: 12px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.8rem; font-weight: 700; color: var(--vibrant-violet); margin-bottom: 15px;">Assessment</h3>
                <div style="padding: 15px; background: rgba(0, 128, 128, 0.05); border-radius: 10px; border-left: 4px solid var(--vibrant-violet);">
                    <span style="font-size: 0.6rem; color: var(--vibrant-violet); font-weight:800;">Term Finals</span>
                    <h4 style="font-size: 0.95rem; margin-top: 5px;">Semester 06</h4>
                    <div style="margin-top: 15px; display: flex; flex-direction: column; gap: 8px;">
                        <button class="login-btn action-trigger" data-action="hall_ticket" style="width: 100%; font-size: 0.7rem; background: var(--vibrant-violet); color: #000; font-weight: 900; border: none;">View Hall Ticket</button>
                    </div>
                </div>
            </div>
        </div>
    `,

    "Fees": (role = "Student") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Fees & Finance</h1>
            <p style="color: #555; font-size: 0.8rem; margin-top: 5px; font-weight: 700; letter-spacing: 2px;">Status: <span style="color: var(--vibrant-violet);">Paid</span> &nbsp;|&nbsp; Fee Management</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 25px;" class="slide-up">
            <div class="kpi-card glass-card" style="padding: 15px 22px;">
                <span class="kpi-label">Paid</span>
                <span class="kpi-val" style="color: var(--vibrant-violet);">$7,250</span>
            </div>
            <div class="kpi-card glass-card" style="border-color: #ff4d4d; padding: 15px 22px;">
                <span class="kpi-label">Dues Payable</span>
                <span class="kpi-val" style="color: #ff4d4d;">$1,250</span>
            </div>
            <div class="kpi-card glass-card" style="padding: 15px 22px;">
                <span class="kpi-label">Merit</span>
                <span class="kpi-val" style="color: var(--vibrant-violet);">25%</span>
            </div>
        </div>

        <div class="slide-up" style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 20px; margin-top: 25px;">
            <div style="background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
                <div style="padding: 20px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--glass-border);">
                    <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold);">Recent Transactions</h3>
                    <span style="font-size: 0.6rem; color: var(--slate);">Payment Verification Complete</span>
                </div>
                <table class="data-table" style="font-size: 0.72rem;">
                    <thead><tr><th>Ref_No</th><th>Description</th><th>Commit Date</th><th>Amount</th><th>Signature</th></tr></thead>
                    <tbody>
                        <tr><td>#FT-2291</td><td>Tuition Installment</td><td>Jan 12, 2026</td><td>$4,500</td><td><span class="status-pill status-verified" style="background:#64ffda; color:var(--navy-dark);">Success</span></td></tr>
                        <tr><td>#FT-2304</td><td>Hostel & Infrastructure</td><td>Jan 14, 2026</td><td>$2,750</td><td><span class="status-pill status-verified" style="background:#64ffda; color:var(--navy-dark);">Success</span></td></tr>
                    </tbody>
                </table>
            </div>

            <div style="background: var(--glass-white); padding: 22px; border-radius: 12px; border: 1px solid var(--glass-border); background: #f8fafc;">
                <h3 style="font-size: 0.95rem; font-weight: 900; color: var(--white); margin-bottom: 20px;">Action</h3>
                <div style="background: #f1f5f9; padding: 20px; border-radius: 10px; border: 1px solid #e2e8f0; margin-bottom: 20px; text-align: center;">
                    <div style="font-size: 0.6rem; color: var(--vibrant-violet); letter-spacing: 2px;">Dues Outstanding</div>
                    <div style="font-size: 2.2rem; font-weight: 900; color: white; margin: 8px 0;">$1,250</div>
                </div>
                <button class="login-btn action-trigger" data-action="pay_fees" style="width: 100%; height: 48px; font-size: 0.9rem; background: var(--vibrant-violet); color: #000; font-weight: 900; letter-spacing: 1px; border: none; border-radius: 8px;">PAY NOW</button>
                <div style="display: flex; gap: 10px; margin-top: 20px;">
                    <button class="login-btn" style="flex: 1; font-size: 0.65rem; border-color: rgba(255,255,255,0.1);">RAISE_QUERY</button>
                    <button class="login-btn" style="flex: 1; font-size: 0.65rem; border-color: rgba(255,255,255,0.1);">DOWNLOAD_DEMAND</button>
                </div>
            </div>
        </div>
    `,

    "Timetable": (role = "Student") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Class Schedule</h1>
            <p style="color: #555; font-size: 0.8rem; margin-top: 5px; font-weight: 700; letter-spacing: 2px;">Section: <span style="color: var(--vibrant-violet);">CS-6A</span></p>
        </div>

        <div class="grid-2-col slide-up" style="margin-top: 30px;">
            <div style="display: flex; flex-direction: column; gap: 15px;">
                <div style="background: var(--glass); padding: 18px; border-radius: 10px; border: 1px solid var(--vibrant-violet);">
                    <span style="font-size: 0.6rem; color: var(--vibrant-violet); letter-spacing: 2px; font-weight: 800;">Current</span>
                    <h3 style="font-size: 0.9rem; margin-top: 6px;">Monday</h3>
                </div>
                <div style="background: var(--glass); padding: 15px; border-radius: 12px; border: 1px solid var(--glass-border); opacity: 0.6;">
                    <h4 style="font-size: 0.8rem; color: var(--slate);">Tuesday Cycle</h4>
                </div>
                <div style="background: var(--glass); padding: 15px; border-radius: 12px; border: 1px solid var(--glass-border); opacity: 0.6;">
                    <h4 style="font-size: 0.8rem; color: var(--slate);">Wednesday Cycle</h4>
                </div>
            </div>

            <div style="background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
                <table class="data-table" style="font-size: 0.75rem;">
                    <thead>
                        <tr><th>Slot</th><th>Subject</th><th>Location</th><th>Mentor</th><th>Status</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="font-weight:900; color:var(--vibrant-violet);">09:00 - 10:30</td>
                            <td style="font-weight:800;">Algorithms</td>
                            <td>Hall-A</td>
                            <td>Dr. Verma</td>
                            <td><span style="color: var(--vibrant-violet);">Live</span></td>
                        </tr>
                        <tr>
                            <td style="font-weight:900; color:var(--vibrant-violet);">11:00 - 12:30</td>
                            <td style="font-weight:800;">Security</td>
                            <td>Hall-C</td>
                            <td>Dr. Khan</td>
                            <td><span style="color: #555;">Upcoming</span></td>
                        </tr>
                        <tr style="background: rgba(255,255,255,0.02);">
                            <td style="font-weight:900; color:var(--vibrant-violet);">13:30 - 15:30</td>
                            <td style="font-weight:800;">Laboratory: AI Benchmarks</td>
                            <td>Lab-SL-08</td>
                            <td>Prof. S. Iyer</td>
                            <td><span style="color: var(--slate);">UPCOMING</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `,

    "Attendance": (role = "Student") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Attendance Record</h1>
            <p style="color: #555; font-size: 0.8rem; margin-top: 5px; font-weight: 700; letter-spacing: 2px;">Sync: <span style="color: var(--vibrant-violet);">Active</span> &nbsp;|&nbsp; Semester 06</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 25px;" class="slide-up">
            <div class="kpi-card" style="padding: 15px 22px;">
                <span class="kpi-label">Cumulative Attendance</span>
                <span class="kpi-val" style="color: var(--vibrant-violet);">98.5%</span>
            </div>
            <div class="kpi-card" style="padding: 15px 22px;">
                <span class="kpi-label">Lectures</span>
                <span class="kpi-val">138 / 140</span>
            </div>
            <div class="kpi-card" style="border-color: var(--white); padding: 15px 22px;">
                <span class="kpi-label">Slots</span>
                <span class="kpi-val" style="color: var(--white);">12 Buffer</span>
            </div>
        </div>

        <div class="table-container slide-up" style="margin-top: 25px; background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
            <table class="data-table" style="font-size: 0.75rem;">
                <thead><tr><th>Subject</th><th>Mentor</th><th>Reference Hash</th><th>Consistency</th><th>Status</th></tr></thead>
                <tbody>
                    <tr>
                        <td style="font-weight: 800;">Algorithms</td>
                        <td>Dr. Verma</td>
                        <td style="font-family: monospace; font-size: 0.6rem;">0x882A...FD12</td>
                        <td style="color:var(--vibrant-violet);font-weight:900;">100%</td>
                        <td><span class="status-pill status-verified" style="background:var(--vibrant-violet); color:#000;">OPTIMAL</span></td>
                    </tr>
                    <tr>
                        <td style="font-weight: 800;">Machine Learning</td>
                        <td>Prof. Singh</td>
                        <td style="font-family: monospace; font-size: 0.6rem;">0x771B...EE44</td>
                        <td style="color:var(--vibrant-violet);font-weight:900;">90.5%</td>
                        <td><span class="status-pill success" style="background:#0ea5e9; color:#fff;">SECURE</span></td>
                    </tr>
                    <tr>
                        <td style="font-weight: 800;">Network Security Protocol</td>
                        <td>Dr. M. Khan</td>
                        <td style="font-family: monospace; font-size: 0.6rem;">0x664C...AC09</td>
                        <td style="color:#ff4d4d;font-weight:900;">72.2%</td>
                        <td><span class="status-pill status-pending" style="background:#ff4d4d; color:white;">CRITICAL</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    `,

    "Reports": (role = "Student") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Notices</h1>
            <p style="color: #555; font-size: 0.8rem; margin-top: 5px; font-weight: 700; letter-spacing: 2px;">BROADCASTS | AY 2026-27</p>
        </div>

        <div class="slide-up" style="margin-top: 30px; display: flex; flex-direction: column; gap: 20px;">
            <div style="background: var(--glass); padding: 18px; border-radius: 12px; border: 1px solid var(--glass-border); border-left: 5px solid var(--vibrant-violet); position: relative; overflow: hidden;">
                <div style="position: absolute; right: -10px; top: -10px; opacity: 0.03; transform: rotate(-15deg);"><i data-lucide="megaphone" style="width: 80px; height: 80px;"></i></div>
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <div>
                        <span style="font-size: 0.6rem; color: var(--vibrant-violet); letter-spacing: 2px; font-weight: 800;">PRIORITY: URGENT</span>
                        <h3 style="font-size: 1.05rem; font-weight: 800; margin-top: 5px; color: white;">End Term Evaluation Cycle</h3>
                        <p style="font-size: 0.75rem; color: #555; margin-top: 8px; line-height: 1.5;">Examination schedule committed. Download admit cards by March 10.</p>
                        <div style="display: flex; gap: 10px; margin-top: 15px;">
                            <button class="login-btn action-trigger" data-action="hall_ticket" style="width: auto; padding: 8px 20px; font-size: 0.7rem; background: var(--vibrant-violet); color: #000; font-weight: 900;">ADMIT_CARD</button>
                        </div>
                    </div>
                    <span style="font-size: 0.65rem; color: var(--slate); font-weight: 700;">Broadcasted: Feb 20</span>
                </div>
            </div>
            
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border); border-left: 5px solid #10b981;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <div>
                        <span style="font-size: 0.6rem; color: #10b981; letter-spacing: 2px; font-weight: 800;">PRIORITY: NORMAL</span>
                        <h3 style="font-size: 1.1rem; font-weight: 800; margin-top: 8px; color: white;">Global Innovation Challenge: Merit Awards</h3>
                        <p style="font-size: 0.8rem; color: var(--slate); margin-top: 10px; line-height: 1.6;">Team 'Nexus' from Department of CS has been awarded the Sovereign Innovation Trophy at the Annual Inter-Institutional Research Hub.</p>
                    </div>
                    <span style="font-size: 0.65rem; color: var(--slate); font-weight: 700;">Broadcasted: Feb 18</span>
                </div>
            </div>
        </div>
    `
};
