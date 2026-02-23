export const studentViewTemplates = {
    "Dashboard": (role = "Student") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Sovereign Academic Pulse</h1>
            <p style="color: var(--slate); font-size: 0.8rem; margin-top: 5px;">Scholar ID: #CN-9822 &nbsp;|&nbsp; <span style="color: #64ffda;">Session Synched: Priority Alpha</span></p>
        </div>
        
        <div class="kpi-grid" style="margin-top: 30px;">
            <div class="kpi-card">
                <span class="kpi-label">Sovereign GPA</span>
                <span class="kpi-val" style="color: var(--gold);">9.42</span>
                <div style="font-size: 0.65rem; color: #64ffda; font-weight: 700;">↑ Top 2% of Batch</div>
            </div>
            <div class="kpi-card">
                <span class="kpi-label">Registry Presence</span>
                <span class="kpi-val" style="color: #64ffda;">98.5%</span>
                <div style="font-size: 0.65rem; color: #64ffda; font-weight: 700;">Optimal Academic Sync</div>
            </div>
            <div class="kpi-card">
                <span class="kpi-label">Fiscal Liability</span>
                <span class="kpi-val" style="color: #ff4d4d;">$1,250</span>
                <div style="font-size: 0.65rem; color: #ffab00; font-weight: 700;">Due in 48 Hours</div>
            </div>
            <div class="kpi-card">
                <span class="kpi-label">Skill Node Index</span>
                <span class="kpi-val">124</span>
                <div style="font-size: 0.65rem; color: var(--gold); font-weight: 700;">Target: 180 Credits</div>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 25px; margin-top: 25px;" class="slide-up">
            <div style="background: var(--glass); padding: 30px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
                    <h3 style="font-size: 0.9rem; font-weight: 700;">Neural Academic Progression</h3>
                    <div style="display: flex; gap: 15px;">
                        <span style="font-size: 0.7rem; color: var(--slate);"><i style="color: var(--gold); margin-right: 5px;">●</i>My Performance</span>
                        <span style="font-size: 0.7rem; color: var(--slate);"><i style="color: rgba(100,255,218,0.5); margin-right: 5px;">●</i>Batch Avg</span>
                    </div>
                </div>
                <div style="height: 200px; background: rgba(0,0,0,0.2); border-radius: 12px; border: 1px dashed var(--glass-border); position: relative; overflow: hidden; display: flex; align-items: flex-end;">
                    <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="none" style="position: absolute; bottom: 0; left: 0;">
                        <defs>
                            <linearGradient id="grad-student-pulse" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style="stop-color:var(--gold);stop-opacity:0.25" />
                                <stop offset="100%" style="stop-color:var(--gold);stop-opacity:0" />
                            </linearGradient>
                        </defs>
                        <path d="M0,220 Q200,100 400,180 T800,80 T1000,100 V300 H0 Z" fill="url(#grad-student-pulse)" stroke="var(--gold)" stroke-width="3" />
                        <path d="M0,250 Q250,220 500,240 T1000,210 V300 H0 Z" fill="rgba(100,255,218,0.05)" stroke="rgba(100,255,218,0.3)" stroke-width="2" stroke-dasharray="5,5" />
                    </svg>
                    <div style="position: absolute; top: 15px; left: 20px;">
                        <div style="font-size: 0.6rem; color: var(--gold); letter-spacing: 2px;">NEURAL_PROGRESS_NODE</div>
                    </div>
                </div>
            </div>
            
            <div style="display: flex; flex-direction: column; gap: 20px;">
                <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border);">
                    <h3 style="font-size: 0.85rem; font-weight: 700; color: var(--gold); margin-bottom: 20px;">Next Curricular Hub</h3>
                    <div style="padding: 18px; background: rgba(100,255,218,0.05); border-radius: 12px; border-left: 4px solid var(--gold); margin-bottom: 12px;">
                        <span style="font-size: 0.6rem; color: var(--gold); letter-spacing: 2px; font-weight:900;">IN_15_MINS</span>
                        <h4 style="font-size: 0.9rem; margin-top: 5px;">Advanced Algorithms</h4>
                        <p style="font-size: 0.65rem; color: var(--slate); margin-top: 5px;">Hall-A (NL-402) | Dr. R. Verma</p>
                    </div>
                    <button class="login-btn" style="width: 100%; font-size: 0.7rem; letter-spacing: 1px;">VIEW_RESOURCE_STREAM</button>
                </div>
                
                <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border); text-align: center;">
                    <div style="font-size: 0.65rem; color: var(--slate); letter-spacing: 1px;">CREDIT_ACCUMULATION</div>
                    <div style="font-size: 2rem; font-weight: 900; color: white; margin-top: 5px;">68.8%</div>
                    <div style="height: 4px; background: rgba(255,255,255,0.05); margin-top: 15px; border-radius: 2px;">
                        <div style="width: 68.8%; height: 100%; background: #64ffda;"></div>
                    </div>
                </div>
            </div>
        </div>
    `,

    "Exams": (role = "Student") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Evaluation & Grade Node</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Verified Academic Progression Ledger | Semester 06</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 30px;" class="slide-up">
            <div class="kpi-card">
                <span class="kpi-label">Cumulative GPA</span>
                <span class="kpi-val" style="color: var(--gold);">9.42</span>
            </div>
            <div class="kpi-card">
                <span class="kpi-label">Course Rank</span>
                <span class="kpi-val">#02 / 120</span>
            </div>
            <div class="kpi-card">
                <span class="kpi-label">Backlog Nodes</span>
                <span class="kpi-val" style="color: #64ffda;">ZERO</span>
            </div>
        </div>

        <div class="slide-up" style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 20px; margin-top: 25px;">
            <div style="background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
                <div style="padding: 20px; border-bottom: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center;">
                    <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold);">Historical Performance</h3>
                    <button class="login-btn action-trigger" data-action="export_pdf" style="width: auto; padding: 6px 15px; font-size: 0.6rem;">DOWNLOAD_TRANSCRIPT</button>
                </div>
                <table class="data-table" style="font-size: 0.72rem;">
                    <thead><tr><th>Term Node</th><th>Pointer</th><th>Credits</th><th>Status</th><th>Accreditation</th></tr></thead>
                    <tbody>
                        <tr><td style="font-weight:800;">Semester 05</td><td>9.50</td><td>22</td><td style="color:#64ffda;">EXCELLENT</td><td><span class="status-pill status-verified">NODE_SYNC</span></td></tr>
                        <tr><td style="font-weight:800;">Semester 04</td><td>9.33</td><td>20</td><td style="color:#64ffda;">EXCELLENT</td><td><span class="status-pill status-verified">NODE_SYNC</span></td></tr>
                        <tr><td style="font-weight:800;">Semester 03</td><td>9.58</td><td>21</td><td style="color:#64ffda;">EXCELLENT</td><td><span class="status-pill status-verified">NODE_SYNC</span></td></tr>
                    </tbody>
                </table>
            </div>

            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold); margin-bottom: 20px;">Active Assessment Hub</h3>
                <div style="padding: 20px; background: rgba(255,255,255,0.03); border-radius: 12px; border-left: 4px solid var(--gold); border-bottom: 1px solid rgba(255,255,255,0.05);">
                    <span style="font-size: 0.6rem; color: var(--gold); letter-spacing: 2px; font-weight:800;">END_TERM_EXAM</span>
                    <h4 style="font-size: 1.1rem; margin-top: 8px;">Semester 06 Finality</h4>
                    <p style="font-size: 0.7rem; color: var(--slate); margin-top: 10px;">Evaluation Window: May 12 - May 25, 2026</p>
                    <div style="margin-top: 20px; display: flex; flex-direction: column; gap: 10px;">
                        <button class="login-btn action-trigger" data-action="hall_ticket" style="width: 100%; font-size: 0.75rem; background: var(--gold); color: var(--navy-dark); font-weight: 900; border: none;">GENERATE_ENCRYPTED_ADMIT_CARD</button>
                        <button class="login-btn" style="width: 100%; font-size: 0.7rem; border-color: rgba(255,255,255,0.1);">VIEW_DETAILED_DATE_SHEET</button>
                    </div>
                </div>
            </div>
        </div>
    `,

    "Fees": (role = "Student") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Sovereign Fee Portal</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Fiscal Integrity & Institutional Dues Management</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 30px;" class="slide-up">
            <div class="kpi-card">
                <span class="kpi-label">Cumulative Paid</span>
                <span class="kpi-val" style="color: #64ffda;">$7,250</span>
            </div>
            <div class="kpi-card" style="border-color: #ff4d4d;">
                <span class="kpi-label">Outstanding Liability</span>
                <span class="kpi-val" style="color: #ff4d4d;">$1,250</span>
            </div>
            <div class="kpi-card">
                <span class="kpi-label">Scholarship Node</span>
                <span class="kpi-val" style="color: var(--gold);">Merit Node (25%)</span>
            </div>
        </div>

        <div class="slide-up" style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 20px; margin-top: 25px;">
            <div style="background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
                <div style="padding: 20px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--glass-border);">
                    <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold);">Successful Transaction Nodes</h3>
                    <span style="font-size: 0.6rem; color: var(--slate);">Sovereign Verification Complete</span>
                </div>
                <table class="data-table" style="font-size: 0.72rem;">
                    <thead><tr><th>Ref_No</th><th>Description</th><th>Commit Date</th><th>Node Value</th><th>Signature</th></tr></thead>
                    <tbody>
                        <tr><td>#FT-2291</td><td>Tuition Node Installment</td><td>Jan 12, 2026</td><td>$4,500</td><td><span class="status-pill status-verified" style="background:#64ffda; color:var(--navy-dark);">COMMITTED</span></td></tr>
                        <tr><td>#FT-2304</td><td>Hostel & Infra Node</td><td>Jan 14, 2026</td><td>$2,750</td><td><span class="status-pill status-verified" style="background:#64ffda; color:var(--navy-dark);">COMMITTED</span></td></tr>
                    </tbody>
                </table>
            </div>

            <div style="background: var(--glass); padding: 30px; border-radius: 16px; border: 1px solid var(--glass-border); background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.2) 100%);">
                <h3 style="font-size: 1rem; font-weight: 900; color: var(--white); margin-bottom: 25px;">Fiscal Action Required</h3>
                <div style="background: rgba(0,0,0,0.2); padding: 25px; border-radius: 12px; border: 1px solid var(--glass-border); margin-bottom: 25px; text-align: center;">
                    <div style="font-size: 0.6rem; color: var(--gold); letter-spacing: 2px;">PENDING_LIABILITY</div>
                    <div style="font-size: 2.5rem; font-weight: 900; color: white; margin: 10px 0;">$1,250</div>
                    <p style="font-size: 0.6rem; color: var(--slate);">Hostel & Lab Dues | Deadline: Feb 25, 2026</p>
                </div>
                <button class="login-btn action-trigger" data-action="pay_fees" style="width: 100%; height: 55px; font-size: 1rem; background: var(--gold); color: var(--navy-dark); font-weight: 900; letter-spacing: 1px; border: none; border-radius: 8px;">AUTHORIZE_PAYMENT</button>
                <div style="display: flex; gap: 10px; margin-top: 20px;">
                    <button class="login-btn" style="flex: 1; font-size: 0.65rem; border-color: rgba(255,255,255,0.1);">RAISE_QUERY</button>
                    <button class="login-btn" style="flex: 1; font-size: 0.65rem; border-color: rgba(255,255,255,0.1);">DOWNLOAD_DEMAND</button>
                </div>
            </div>
        </div>
    `,

    "Timetable": (role = "Student") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Institutional Schedule Node</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Personal Weekly Calibration | Section CS-6A</p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 3fr; gap: 25px; margin-top: 30px;" class="slide-up">
            <div style="display: flex; flex-direction: column; gap: 15px;">
                <div style="background: var(--glass); padding: 20px; border-radius: 12px; border: 1px solid var(--gold);">
                    <span style="font-size: 0.6rem; color: var(--gold); letter-spacing: 2px; font-weight: 800;">ACTIVE_DOMAIN</span>
                    <h3 style="font-size: 1rem; margin-top: 8px;">Monday Cycle</h3>
                    <p style="font-size: 0.65rem; color: var(--slate); margin-top: 5px;">0845h - 1730h Operational Window</p>
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
                        <tr><th>Temporal Slot</th><th>Domain Node</th><th>Location</th><th>Mentor</th><th>Status</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="font-weight:900; color:var(--gold);">09:00 - 10:30</td>
                            <td style="font-weight:800;">Advanced Algorithms</td>
                            <td>Hall-A (NL-402)</td>
                            <td>Dr. R. Verma</td>
                            <td><span style="color: #64ffda;">IN_SESSION</span></td>
                        </tr>
                        <tr>
                            <td style="font-weight:900; color:var(--gold);">11:00 - 12:30</td>
                            <td style="font-weight:800;">Network Security</td>
                            <td>Hall-C (NL-405)</td>
                            <td>Dr. M. Khan</td>
                            <td><span style="color: var(--slate);">UPCOMING</span></td>
                        </tr>
                        <tr style="background: rgba(255,255,255,0.02);">
                            <td style="font-weight:900; color:var(--gold);">13:30 - 15:30</td>
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
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Presence Ledger & Analytics</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Real-time Registry Sync | Semester 06 Presence Domain</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 30px;" class="slide-up">
            <div class="kpi-card">
                <span class="kpi-label">Cumulative Presence</span>
                <span class="kpi-val" style="color: #64ffda;">98.5%</span>
                <div style="font-size: 0.6rem; color: #64ffda; font-weight: 800;">↑ 2.4% vs Academic Goal</div>
            </div>
            <div class="kpi-card">
                <span class="kpi-label">Lectures Authorized</span>
                <span class="kpi-val">138 / 140</span>
                <div style="font-size: 0.6rem; color: var(--slate);">Strict Registry Compliance</div>
            </div>
            <div class="kpi-card" style="border-color: var(--gold);">
                <span class="kpi-label">Buffer Capacity</span>
                <span class="kpi-val" style="color: var(--gold);">12 Slots</span>
                <div style="font-size: 0.6rem; color: var(--gold);">Above 75% Threshold</div>
            </div>
        </div>

        <div class="slide-up" style="margin-top: 25px; background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
            <table class="data-table" style="font-size: 0.75rem;">
                <thead><tr><th>Academic Node (Subject)</th><th>Mentor</th><th>Registry Hash</th><th>Consistency</th><th>Status</th></tr></thead>
                <tbody>
                    <tr>
                        <td style="font-weight: 800;">Design & Analysis of Algorithms</td>
                        <td>Dr. R. Verma</td>
                        <td style="font-family: monospace; font-size: 0.6rem;">0x882A...FD12</td>
                        <td style="color:#64ffda;font-weight:900;">100%</td>
                        <td><span class="status-pill status-verified" style="background:#64ffda; color:var(--navy-dark);">OPTIMAL</span></td>
                    </tr>
                    <tr>
                        <td style="font-weight: 800;">Machine Learning Fundamentals</td>
                        <td>Prof. A. Singh</td>
                        <td style="font-family: monospace; font-size: 0.6rem;">0x771B...EE44</td>
                        <td style="color:var(--gold);font-weight:900;">90.5%</td>
                        <td><span class="status-pill status-verified" style="background:var(--gold); color:var(--navy-dark);">SECURE</span></td>
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
    `,

    "Reports": (role = "Student") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Institutional Notices & Circulars</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Broadcasted Priority Communcations | AY 2026-27</p>
        </div>

        <div class="slide-up" style="margin-top: 30px; display: flex; flex-direction: column; gap: 20px;">
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border); border-left: 5px solid var(--gold); position: relative; overflow: hidden;">
                <div style="position: absolute; right: -20px; top: -20px; font-size: 5rem; opacity: 0.03; transform: rotate(-15deg);">📢</div>
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <div>
                        <span style="font-size: 0.6rem; color: var(--gold); letter-spacing: 2px; font-weight: 800;">PRIORITY: SOVEREIGN_ALERT</span>
                        <h3 style="font-size: 1.1rem; font-weight: 800; margin-top: 8px; color: white;">End Term Evaluation Cycle 2026</h3>
                        <p style="font-size: 0.8rem; color: var(--slate); margin-top: 10px; line-height: 1.6;">The final examination schedule for Semester 06 has been committed to the institutional registry. All student nodes must download their encrypted admit cards by March 10.</p>
                        <div style="display: flex; gap: 12px; margin-top: 20px;">
                            <button class="login-btn action-trigger" data-action="hall_ticket" style="width: auto; padding: 10px 25px; font-size: 0.75rem; background: var(--gold); color: var(--navy-dark); font-weight: 900;">ACCESS_ADMIT_NODE</button>
                            <button class="login-btn" style="width: auto; padding: 10px 25px; font-size: 0.75rem; border-color: rgba(255,255,255,0.1);">VIEW_DATE_SHEET</button>
                        </div>
                    </div>
                    <span style="font-size: 0.65rem; color: var(--slate); font-weight: 700;">Broadcasted: Feb 20</span>
                </div>
            </div>
            
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border); border-left: 5px solid #64ffda;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <div>
                        <span style="font-size: 0.6rem; color: #64ffda; letter-spacing: 2px; font-weight: 800;">PRIORITY: NORMAL</span>
                        <h3 style="font-size: 1.1rem; font-weight: 800; margin-top: 8px; color: white;">Global Innovation Challenge: Merit Awards</h3>
                        <p style="font-size: 0.8rem; color: var(--slate); margin-top: 10px; line-height: 1.6;">Team 'Nexus' from Department of CS has been awarded the Sovereign Innovation Trophy at the Annual Inter-Institutional Research Hub.</p>
                    </div>
                    <span style="font-size: 0.65rem; color: var(--slate); font-weight: 700;">Broadcasted: Feb 18</span>
                </div>
            </div>
        </div>
    `
};
