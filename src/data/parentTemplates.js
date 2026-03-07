export const parentViewTemplates = {
    "Dashboard": (role = "Parent") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Guardian Oversight Pulse</h1>
            <p style="color: var(--slate); font-size: 0.8rem; margin-top: 5px;">Ward: Aarav Malhotra (#CN-9822) &nbsp;|&nbsp; <span style="color: #10b981;">Registry Sync: Active</span></p>
        </div>
        
        <div class="kpi-grid" style="margin-top: 30px;">
            <div class="kpi-card glass-card">
                <span class="kpi-label">Cumulative GPA</span>
                <span class="kpi-val" style="color: var(--gold);">9.42</span>
                <div style="font-size: 0.65rem; color: #10b981; font-weight: 700;">↑ 0.12 vs Semester 05</div>
            </div>
            <div class="kpi-card glass-card">
                <span class="kpi-label">Attendance Registry</span>
                <span class="kpi-val" style="color: #10b981;">98.5%</span>
                <div style="font-size: 0.65rem; color: #10b981; font-weight: 700;">Regular Domain Presence</div>
            </div>
            <div class="kpi-card glass-card">
                <span class="kpi-label">Current Liability</span>
                <span class="kpi-val" style="color: #ef4444;">$1,250</span>
                <div style="font-size: 0.65rem; color: #f59e0b; font-weight: 700;">Due: Feb 25, 2026</div>
            </div>
            <div class="kpi-card glass-card">
                <span class="kpi-label">Institutional Rank</span>
                <span class="kpi-val" style="color: var(--white);">#02</span>
                <div style="font-size: 0.65rem; color: var(--gold); font-weight: 700;">Top Decile Performance</div>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 25px; margin-top: 25px;" class="slide-up">
            <div class="glass-card" style="padding: 30px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
                    <h3 style="font-size: 0.9rem; font-weight: 700;">Ward Performance Momentum</h3>
                    <div style="display: flex; gap: 15px;">
                        <span style="font-size: 0.7rem; color: var(--slate);"><i style="color: var(--gold); margin-right: 5px;">●</i>Ward GPA</span>
                        <span style="font-size: 0.7rem; color: var(--slate);"><i style="color: rgba(16,185,129,0.5); margin-right: 5px;">●</i>Batch Avg</span>
                    </div>
                </div>
                <div style="height: 220px; background: rgba(15, 23, 42, 0.03); border-radius: 12px; border: 1px dashed var(--glass-border); position: relative; overflow: hidden; display: flex; align-items: flex-end;">
                    <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="none" style="position: absolute; bottom: 0; left: 0;">
                        <defs>
                            <linearGradient id="grad-ward-pulse" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style="stop-color:var(--gold);stop-opacity:0.2" />
                                <stop offset="100%" style="stop-color:var(--gold);stop-opacity:0" />
                            </linearGradient>
                        </defs>
                        <path d="M0,200 Q200,50 400,180 T800,100 T1000,120 V300 H0 Z" fill="url(#grad-ward-pulse)" stroke="var(--gold)" stroke-width="3" />
                        <path d="M0,240 Q250,210 500,230 T1000,200 V300 H0 Z" fill="rgba(16,185,129,0.05)" stroke="rgba(16,185,129,0.3)" stroke-width="2" stroke-dasharray="5,5" />
                    </svg>
                    <div style="position: absolute; top: 20px; left: 20px;">
                        <div style="font-size: 0.6rem; color: var(--gold); letter-spacing: 2px;">ACADEMIC_VELOCITY_IDX</div>
                        <div style="font-size: 1.8rem; font-weight: 900; color: var(--white); margin-top: 5px;">9.42 / 10</div>
                    </div>
                </div>
            </div>
            
            <div style="display: flex; flex-direction: column; gap: 20px;">
                <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border);">
                    <h3 style="font-size: 0.85rem; font-weight: 700; color: var(--gold); margin-bottom: 20px;">Primary Subject Mentor</h3>
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                        <div style="width:50px; height:50px; border-radius:12px; background:rgba(184,134,11,0.1); border:1px solid var(--gold); display:flex; align-items:center; justify-content:center;">
                            <i data-lucide="user-round" style="width:24px; height:24px; color:var(--gold);"></i>
                        </div>
                        <div>
                            <span style="font-size: 0.85rem; font-weight: 800; display: block;">Dr. Rohan Verma</span>
                            <span style="font-size: 0.65rem; color: var(--slate);">Department Mentor (Engineering)</span>
                        </div>
                    </div>
                    <button class="login-btn action-trigger" data-action="parent_connect" style="width: 100%; font-size: 0.7rem; letter-spacing: 1px;">INITIALIZE_SECURE_CHANNEL</button>
                </div>

                <div class="glass-card" style="padding: 25px; border-left: 4px solid #ef4444;">
                    <h3 style="font-size: 0.85rem; font-weight: 700; color: #ef4444; margin-bottom: 5px;">Action Required</h3>
                    <p style="font-size: 0.65rem; color: var(--slate); margin-bottom: 15px;">Hostel & Lab Dues Outstanding</p>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-size: 1.1rem; font-weight: 900; color: var(--white);">$1,250</span>
                        <button class="login-btn action-trigger" data-action="pay_fees" style="width: auto; padding: 6px 15px; font-size: 0.65rem; background: var(--gold); color: white; border: none;">PAY_NOW</button>
                    </div>
                </div>
            </div>
        </div>
    `,

    "Attendance": (role = "Parent") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Ward Absence Analytics</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Subject-wise Presence Ledger | Semester 06</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 30px;" class="slide-up">
            <div class="kpi-card glass-card">
                <span class="kpi-label">Lectures Present</span>
                <span class="kpi-val" style="color: #10b981;">242</span>
                <div style="font-size: 0.6rem; color: #10b981;">98.5% Consistency</div>
            </div>
            <div class="kpi-card glass-card">
                <span class="kpi-label">Lectures Missed</span>
                <span class="kpi-val" style="color: #ef4444;">04</span>
                <div style="font-size: 0.6rem; color: #ef4444;">Authorized Absences</div>
            </div>
            <div class="kpi-card glass-card">
                <span class="kpi-label">Average Load</span>
                <span class="kpi-val" style="color: var(--white);">6 hr/day</span>
                <div style="font-size: 0.6rem; color: var(--slate);">Optimal Academic Pulse</div>
            </div>
        </div>

        <div class="slide-up" style="margin-top: 25px; background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
            <table class="data-table" style="font-size: 0.75rem;">
                <thead>
                    <tr><th>Subject</th><th>Required %</th><th>Current %</th><th>Buffer</th><th>Status</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="font-weight: 800;">Advanced Algorithms</td>
                        <td>75%</td>
                        <td><span style="color: #10b981; font-weight: 900;">100%</span></td>
                        <td style="color: var(--slate);">+6 Lectures</td>
                        <td><span class="status-pill status-verified" style="background: rgba(16, 185, 129, 0.1); color: #10b981; border-color: #10b981;">EXEMPT</span></td>
                    </tr>
                    <tr>
                        <td style="font-weight: 800;">Machine Learning</td>
                        <td>75%</td>
                        <td><span style="color: var(--gold); font-weight: 900;">92%</span></td>
                        <td style="color: var(--slate);">+4 Lectures</td>
                        <td><span class="status-pill status-verified" style="background: rgba(184,134,11,0.1); color: var(--gold); border-color: var(--gold);">SECURE</span></td>
                    </tr>
                    <tr>
                        <td style="font-weight: 800;">Network Security</td>
                        <td>75%</td>
                        <td><span style="color: #ff4d4d; font-weight: 900;">72%</span></td>
                        <td style="color: #ff4d4d;">-1 Lecture</td>
                        <td><span class="status-pill status-pending" style="background: rgba(255,77,77,0.1); color: #ff4d4d; border-color: #ff4d4d;">CRITICAL</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,

    "Exams": (role = "Parent") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Grade Ledger & Progress</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Institutional Academic Progression Tracking</p>
        </div>

        <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 25px; margin-top: 30px;" class="slide-up">
            <div style="background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
                <div style="padding: 20px; border-bottom: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center;">
                    <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold);">Historical Performance Ledger</h3>
                    <button class="login-btn action-trigger" data-action="export_pdf" style="width: auto; padding: 6px 15px; font-size: 0.6rem;">DOWNLOAD_TRANSCRIPT</button>
                </div>
                <table class="data-table" style="font-size: 0.72rem;">
                    <thead><tr><th>Academic Term</th><th>SGPA</th><th>CGPA</th><th>Outcome</th><th>Accreditation</th></tr></thead>
                    <tbody>
                        <tr><td>Semester 05</td><td>9.50</td><td>9.42</td><td style="color:#10b981; font-weight:800;">EXCELLENT</td><td><span class="status-pill status-verified">VERIFIED</span></td></tr>
                        <tr><td>Semester 04</td><td>9.33</td><td>9.30</td><td style="color:#10b981; font-weight:800;">EXCELLENT</td><td><span class="status-pill status-verified">VERIFIED</span></td></tr>
                        <tr><td>Semester 03</td><td>9.58</td><td>9.28</td><td style="color:#10b981; font-weight:800;">EXCELLENT</td><td><span class="status-pill status-verified">VERIFIED</span></td></tr>
                    </tbody>
                </table>
            </div>

            <div style="display: flex; flex-direction: column; gap: 20px;">
                <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border);">
                    <h3 style="font-size: 0.85rem; font-weight: 700; color: var(--gold); margin-bottom: 20px;">Upcoming Evaluations</h3>
                    <div style="padding: 18px; background: rgba(255,255,255,0.03); border-radius: 12px; border-left: 4px solid var(--gold);">
                        <span style="font-size: 0.6rem; color: var(--gold); letter-spacing: 2px; font-weight: 800;">TERM_END_EXAM</span>
                        <h4 style="font-size: 1rem; margin-top: 5px;">Semester 06 Finality</h4>
                        <p style="font-size: 0.65rem; color: var(--slate); margin-top: 8px;">Window Opens: May 12, 2026</p>
                        <button class="login-btn action-trigger" data-action="hall_ticket" style="margin-top: 15px; width: 100%; border-color: rgba(255,255,255,0.1);">ACCESS_EXAM_HALL_TICKET</button>
                    </div>
                </div>
                
                <div class="glass-card" style="padding: 25px; text-align: center;">
                    <div style="font-size: 0.65rem; color: var(--slate); letter-spacing: 1px;">GRADUATION_PROGRESS</div>
                    <div style="font-size: 2.2rem; font-weight: 900; color: var(--white); margin-top: 10px;">68%</div>
                    <div style="height: 4px; background: rgba(15, 23, 42, 0.05); margin-top: 15px; border-radius: 2px;">
                        <div style="width: 68%; height: 100%; background: #10b981;"></div>
                    </div>
                </div>
            </div>
        </div>
    `,

    "Fees": (role = "Parent") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Guardian Financial Portal</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Tuition, Infrastructure & Scholarship Ledger</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 30px;" class="slide-up">
            <div class="kpi-card">
                <span class="kpi-label">Institutional Credits</span>
                <span class="kpi-val" style="color: #10b981;">$7,250</span>
                <div style="font-size: 0.6rem; color: #10b981;">YTD Verified Success</div>
            </div>
            <div class="kpi-card" style="border-color: #ff4d4d;">
                <span class="kpi-label">Outstanding Liability</span>
                <span class="kpi-val" style="color: #ff4d4d;">$1,250</span>
                <div style="font-size: 0.6rem; color: #ffab00;">Sovereign Grace: 2 Days</div>
            </div>
            <div class="kpi-card">
                <span class="kpi-label">Scholarship Adjustment</span>
                <span class="kpi-val">-$2,125</span>
                <div style="font-size: 0.6rem; color: var(--gold);">Merit Based Tier-1</div>
            </div>
        </div>

        <div class="slide-up" style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 20px; margin-top: 25px;">
            <div style="background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
                <div style="padding: 20px; border-bottom: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center;">
                    <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold);">Transaction Integrity Log</h3>
                    <span style="font-size: 0.6rem; color: var(--slate);">Last Sync: Just Now</span>
                </div>
                <table class="data-table" style="font-size: 0.72rem;">
                    <thead><tr><th>Reference</th><th>Fiscal Nature</th><th>Execution Date</th><th>Amount</th><th>Status</th></tr></thead>
                    <tbody>
                        <tr><td>#PX-0442</td><td>Tuition Installment (S2)</td><td>Jan 12, 2026</td><td>$4,500</td><td><span class="status-pill status-verified" style="background:#10b981; color:white;">COMMITTED</span></td></tr>
                        <tr><td>#PX-0443</td><td>Hostel/Infra Pass</td><td>Jan 14, 2026</td><td>$2,750</td><td><span class="status-pill status-verified" style="background:#10b981; color:white;">COMMITTED</span></td></tr>
                    </tbody>
                </table>
            </div>

            <div style="background: var(--glass); padding: 30px; border-radius: 16px; border: 1px solid var(--glass-border); background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);">
                <h3 style="font-size: 1rem; font-weight: 900; color: var(--white); margin-bottom: 25px;">Secure Fiscal Action</h3>
                <div style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 12px; border: 1px solid var(--glass-border); margin-bottom: 25px;">
                    <div style="font-size: 0.6rem; color: var(--gold); letter-spacing: 2px;">PENDING_FEE_LIABILITY</div>
                    <div style="font-size: 2rem; font-weight: 900; color: white; margin: 10px 0;">$1,250</div>
                    <div style="font-size: 0.65rem; color: #ffab00;">Note: Late fee penalty applies in 48h.</div>
                </div>
                <button class="login-btn action-trigger" data-action="pay_fees" style="width: 100%; height: 50px; font-size: 0.9rem; background: var(--gold); color: white; font-weight: 900; letter-spacing: 1px;">INITIALIZE_PAYMENT_GATEWAY</button>
                <p style="font-size:0.55rem; color:var(--slate); text-align:center; margin-top:20px;">256-bit AES Encryption Active | Transaction ID: 0x884Z</p>
            </div>
        </div>
    `,

    "Reports": (role = "Parent") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Institutional Broadcast Hub</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Official Notifications & Priority Alerts</p>
        </div>

        <div class="slide-up" style="margin-top: 30px; display: flex; flex-direction: column; gap: 20px;">
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border); border-left: 5px solid var(--gold); position: relative; overflow: hidden;">
                <div style="position: absolute; right: 10px; top: 10px; opacity: 0.1;">
                    <i data-lucide="megaphone" style="width:60px; height:60px; color:var(--gold); transform: rotate(-15deg);"></i>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <div>
                        <span style="font-size: 0.6rem; color: var(--gold); letter-spacing: 2px; font-weight: 800;">PRIORITY: HIGH</span>
                        <h3 style="font-size: 1.1rem; font-weight: 800; margin-top: 5px; color: white;">Annual Parent-Institutional Nexus 2026</h3>
                        <p style="font-size: 0.8rem; color: var(--slate); margin-top: 8px; line-height: 1.6;">The annual interactive session with the Dean and Department Mentors is scheduled for March 15. Please RSVP to secure your slot in the central auditorium.</p>
                        <div style="display: flex; gap: 12px; margin-top: 20px;">
                            <button class="login-btn action-trigger" data-action="rsvp" style="width: auto; padding: 10px 25px; font-size: 0.75rem; background: var(--gold); color: white;">SECURE_RSVP_SLOT</button>
                            <button class="login-btn" style="width: auto; padding: 10px 25px; font-size: 0.75rem; border-color: rgba(255,255,255,0.1);">VIEW_AGENDA</button>
                        </div>
                    </div>
                    <span style="font-size: 0.65rem; color: var(--slate); font-weight: 700;">Broadcasted: Feb 22</span>
                </div>
            </div>

            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border); border-left: 5px solid #10b981;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <div>
                        <span style="font-size: 0.6rem; color: #10b981; letter-spacing: 2px; font-weight: 800;">PRIORITY: NORMAL</span>
                        <h3 style="font-size: 1.1rem; font-weight: 800; margin-top: 5px; color: white;">Hostel Infrastructure Sanitization Pass</h3>
                        <p style="font-size: 0.8rem; color: var(--slate); margin-top: 8px; line-height: 1.6;">Main Campus Hostel Alpha has successfully cleared the recursive institutional safety audit for Q1 2026. All operations optimal.</p>
                    </div>
                    <span style="font-size: 0.65rem; color: var(--slate); font-weight: 700;">Broadcasted: Feb 19</span>
                </div>
            </div>
        </div>
    `
};
