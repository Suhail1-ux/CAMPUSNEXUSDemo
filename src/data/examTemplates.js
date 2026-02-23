export const examViewTemplates = {
    "Dashboard": (role = "Exams") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Exam Controller Command Center</h1>
            <p style="color: var(--slate); font-size: 0.8rem; margin-top: 5px;">Sovereign Assessment Engine &bull; Cycle 2026-A &nbsp;|&nbsp; <span style="color: #64ffda;">Integrity Shield: ACTIVE</span></p>
        </div>
        
        <div class="kpi-grid" style="margin-top: 30px; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px;">
            <div class="kpi-card" style="border-left: 3px solid #64ffda;">
                <span class="kpi-label">Evaluation Efficiency</span>
                <span class="kpi-val" style="color: #64ffda;">68.4%</span>
                <div style="font-size: 0.65rem; color: #64ffda; font-weight: 700;">+12.5% Target Lead</div>
            </div>
            <div class="kpi-card" style="border-left: 3px solid var(--gold);">
                <span class="kpi-label">Papers Moderated</span>
                <span class="kpi-val" style="color: var(--gold);">842 <span style="font-size: 0.7rem; opacity: 0.5;">/ 1200</span></span>
                <div style="font-size: 0.65rem; color: var(--gold); font-weight: 700;">Final Review Pending</div>
            </div>
            <div class="kpi-card" style="border-left: 3px solid #ff3b3b;">
                <span class="kpi-label">UFM Integrity Cases</span>
                <span class="kpi-val" style="color: #ff3b3b;">02</span>
                <div style="font-size: 0.65rem; color: #ff3b3b; font-weight: 700;">Rapid Response Active</div>
            </div>
            <div class="kpi-card" style="border-left: 3px solid #64ffda;">
                <span class="kpi-label">Hall Readiness</span>
                <span class="kpi-val">100%</span>
                <div style="font-size: 0.65rem; color: #64ffda; font-weight: 700;">42/42 Centers Synced</div>
            </div>
            <div class="kpi-card" style="border-left: 3px solid var(--gold);">
                <span class="kpi-label">Result Publication</span>
                <span class="kpi-val" style="color: var(--gold);">T-14 Days</span>
                <div style="font-size: 0.65rem; color: var(--gold); font-weight: 700;">On-Track for June 1st</div>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 20px; margin-top: 20px;" class="slide-up">
            <!-- Evaluation Tracking -->
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                    <h3 style="font-size: 0.9rem; font-weight: 800; color: var(--gold); letter-spacing: 1px;">DEPARTMENTAL EVALUATION PULSE</h3>
                    <div style="display:flex; gap:10px;">
                        <span style="font-size:0.6rem; color:#64ffda;">● Verified</span>
                        <span style="font-size:0.6rem; color:var(--gold);">● In Progress</span>
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.65rem; margin-bottom: 5px;">
                            <span style="font-weight: 700;">CS & Engineering</span><span style="color: #64ffda; font-weight: 800;">82%</span>
                        </div>
                        <div style="height: 6px; background: rgba(255,255,255,0.05); border-radius: 3px; overflow: hidden; border: 1px solid rgba(100,255,218,0.2);">
                            <div style="width: 82%; height: 100%; background: #64ffda; box-shadow: 0 0 10px rgba(100,255,218,0.3);"></div>
                        </div>
                    </div>
                    <div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.65rem; margin-bottom: 5px;">
                            <span style="font-weight: 700;">Electronics (ECE)</span><span style="color: var(--gold); font-weight: 800;">74%</span>
                        </div>
                        <div style="height: 6px; background: rgba(255,255,255,0.05); border-radius: 3px; overflow: hidden; border: 1px solid rgba(184,134,11,0.2);">
                            <div style="width: 74%; height: 100%; background: var(--gold); box-shadow: 0 0 10px rgba(184,134,11,0.3);"></div>
                        </div>
                    </div>
                    <div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.65rem; margin-bottom: 5px;">
                            <span style="font-weight: 700;">Mechanical Engineering</span><span style="color: #ffab00; font-weight: 800;">45%</span>
                        </div>
                        <div style="height: 6px; background: rgba(255,255,255,0.05); border-radius: 3px; overflow: hidden; border: 1px solid rgba(255,171,0,0.2);">
                            <div style="width: 45%; height: 100%; background: #ffab00; box-shadow: 0 0 10px rgba(255,171,0,0.3);"></div>
                        </div>
                    </div>
                    <div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.65rem; margin-bottom: 5px;">
                            <span style="font-weight: 700;">MBA School of Business</span><span style="color: #64ffda; font-weight: 800;">91%</span>
                        </div>
                        <div style="height: 6px; background: rgba(255,255,255,0.05); border-radius: 3px; overflow: hidden; border: 1px solid rgba(100,255,218,0.2);">
                            <div style="width: 91%; height: 100%; background: #64ffda; box-shadow: 0 0 10px rgba(100,255,218,0.3);"></div>
                        </div>
                    </div>
                </div>
                <div style="margin-top: 20px; padding: 15px; background: rgba(184,134,11,0.03); border-radius: 12px; border: 1px dashed rgba(184,134,11,0.2); display: flex; gap: 15px; align-items: center;">
                    <div style="font-size: 1.5rem;">🚨</div>
                    <div>
                        <p style="font-size: 0.7rem; color: var(--gold); font-weight: 800;">CRITICAL DELAY ALERT</p>
                        <p style="font-size: 0.65rem; color: var(--slate); line-height: 1.4;">Mechanical Dept. evaluation is behind SLA by 48 hours. Notifying HOD and lead moderators automatically.</p>
                    </div>
                </div>
            </div>

            <!-- Security Monitor -->
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 800; color: var(--gold); margin-bottom: 20px; letter-spacing: 1px;">INTEGRITY MONITOR</h3>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 8px;">
                        <div><p style="font-size: 0.65rem; color: var(--slate);">Digital Paper Release</p><p style="font-size: 0.8rem; font-weight: 700; color: #64ffda;">SECURE</p></div>
                        <div style="width: 8px; height: 8px; background: #64ffda; border-radius: 50%; box-shadow: 0 0 8px #64ffda;"></div>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 8px;">
                        <div><p style="font-size: 0.65rem; color: var(--slate);">CCTV Center Feeds</p><p style="font-size: 0.8rem; font-weight: 700; color: #64ffda;">42 ONLINE</p></div>
                        <div style="width: 8px; height: 8px; background: #64ffda; border-radius: 50%; box-shadow: 0 0 8px #64ffda;"></div>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 8px;">
                        <div><p style="font-size: 0.65rem; color: var(--slate);">UFM Alerts (Live)</p><p style="font-size: 0.8rem; font-weight: 700; color: #ff3b3b;">01 NEW</p></div>
                        <div style="width: 8px; height: 8px; background: #ff3b3b; border-radius: 50%; box-shadow: 0 0 8px #ff3b3b;"></div>
                    </div>
                </div>
                <button class="login-btn action-trigger" data-action="emergency_override" style="margin-top: 15px; width: 100%; background: #ff3b3b; color: white; font-weight: 800; font-size: 0.65rem; border: none; padding: 12px;">SYSTEM_EMERGENCY_LOCK</button>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px;" class="slide-up">
            <!-- Assessment Distribution -->
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 800; color: var(--gold); margin-bottom: 20px; letter-spacing: 1px;">MODERATION ANALYTICS</h3>
                <div style="height: 180px; position: relative;">
                    <svg width="100%" height="100%" viewBox="0 0 400 150">
                        <polyline fill="none" stroke="#64ffda" stroke-width="2" points="0,140 50,110 100,120 150,80 200,90 250,50 300,70 350,30 400,40" />
                        <path d="M0,140 50,110 100,120 150,80 200,90 250,50 300,70 350,30 400,40 V150 H0 Z" fill="rgba(100,255,218,0.1)" />
                    </svg>
                    <div style="position: absolute; top:0; left:0; width:100%; height:100%; display: flex; align-items: center; justify-content: center;">
                        <span style="font-size: 0.6rem; color: var(--slate); font-weight: 700;">Script Moderation Variance (Real-time)</span>
                    </div>
                </div>
            </div>

            <!-- Global Hall Tracker -->
            <div style="background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
                <div style="padding: 18px 22px; border-bottom: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center;">
                    <h3 style="font-size: 0.9rem; font-weight: 800; color: var(--gold); letter-spacing: 1px;">HALL LOGISTICS PULSE</h3>
                    <span style="font-size: 0.6rem; color: #64ffda;">LIVE SYNC</span>
                </div>
                <table class="data-table" style="font-size: 0.65rem;">
                    <thead>
                        <tr><th>Center</th><th>Capacity</th><th>Present</th><th>Absences</th><th>Integrity</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Main Campus Block-A</td><td>450</td><td>442</td><td style="color:#ff3b3b;">08</td><td><span style="color:#64ffda;">GREEN</span></td></tr>
                        <tr><td>South Wing Center-2</td><td>310</td><td>308</td><td>02</td><td><span style="color:#64ffda;">GREEN</span></td></tr>
                        <tr><td>Technical Hub-4</td><td>110</td><td>110</td><td>00</td><td><span style="color:#64ffda;">GREEN</span></td></tr>
                        <tr><td>North Campus Wing</td><td>280</td><td>272</td><td style="color:#ff3b3b;">08</td><td><span style="color:#ffab00;">WARN</span></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    `,
    "Exams": (role = "Exams") => `
        <div class="view-header" style="display: flex; justify-content: space-between; align-items: center;">
            <div>
                <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800;">Examination Hub</h1>
                <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Cycle Management & Evaluation Workspace</p>
            </div>
            <button class="login-btn action-trigger" data-action="new_exam" style="width: auto; padding: 10px 25px; background: var(--gold); color: var(--navy-dark); font-weight: 800; border: none;">+ SCHEDULE_EXAM</button>
        </div>

        <div class="slide-up" style="margin-top: 25px; background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
            <div style="padding: 18px 22px; border-bottom: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center;">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold);">Active Assessment Cycle</h3>
                <div style="display: flex; gap: 10px;">
                    <input type="text" placeholder="Search course code..." style="background: rgba(255,255,255,0.03); border: 1px solid var(--glass-border); color: white; padding: 6px 12px; border-radius: 6px; font-size: 0.7rem; width: 200px;">
                    <button class="login-btn action-trigger" data-action="export_excel" style="width: auto; padding: 6px 12px; font-size: 0.65rem;">DOWNLOAD_SCHEDULE</button>
                </div>
            </div>
            <table class="data-table" style="font-size: 0.72rem;">
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Subject Name</th>
                        <th>Date</th>
                        <th>Slots</th>
                        <th>Mode</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>CS6001</td>
                        <td><strong>Algorithms & Complexity</strong></td>
                        <td>May 10, 2026</td>
                        <td>10:00 - 13:00</td>
                        <td>PEN-PAPER</td>
                        <td><span class="status-pill status-verified">COMPLETED</span></td>
                        <td><button class="login-btn action-trigger" data-action="view_grading" style="padding:4px 8px;font-size:0.58rem;width:auto;background:#64ffda;color:var(--navy-dark);">EVALUATE</button></td>
                    </tr>
                    <tr>
                        <td>CS6005</td>
                        <td><strong>Machine Learning</strong></td>
                        <td>May 13, 2026</td>
                        <td>10:00 - 13:00</td>
                        <td>SYSTEM-BASED</td>
                        <td><span class="status-pill status-pending">EVAL_PENDING</span></td>
                        <td><button class="login-btn action-trigger" data-action="view_grading" style="padding:4px 8px;font-size:0.58rem;width:auto;">EVALUATE</button></td>
                    </tr>
                    <tr>
                        <td>CS6022</td>
                        <td><strong>Cloud Computing</strong></td>
                        <td>May 15, 2026</td>
                        <td>14:00 - 17:00</td>
                        <td>PEN-PAPER</td>
                        <td><span class="status-pill status-pending" style="color:var(--gold); border-color:var(--gold); background:rgba(184,134,11,0.1);">SCHEDULED</span></td>
                        <td><button class="login-btn" style="padding:4px 8px;font-size:0.58rem;width:auto;">EDIT</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    "Reports": (role = "Exams") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Result Analytics Pulse</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Institutional Performance & Grading Distribution</p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 25px;" class="slide-up">
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 800; color: var(--gold); margin-bottom: 20px; letter-spacing: 1px;">GRADING TRENDS (AY 2025)</h3>
                <div style="height: 200px; display: flex; align-items: flex-end; gap: 15px; padding-bottom: 20px;">
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 8px;">
                        <div style="width: 100%; height: 90%; background: var(--gold); border-radius: 4px; position: relative;">
                            <span style="position: absolute; top: -20px; width: 100%; text-align: center; font-size: 0.6rem;">8.4</span>
                        </div>
                        <span style="font-size: 0.6rem; color: var(--slate);">CS</span>
                    </div>
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 8px;">
                        <div style="width: 100%; height: 75%; background: #64ffda; border-radius: 4px; position: relative;">
                            <span style="position: absolute; top: -20px; width: 100%; text-align: center; font-size: 0.6rem;">7.8</span>
                        </div>
                        <span style="font-size: 0.6rem; color: var(--slate);">ECE</span>
                    </div>
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 8px;">
                        <div style="width: 100%; height: 60%; background: var(--gold); border-radius: 4px; position: relative;">
                            <span style="position: absolute; top: -20px; width: 100%; text-align: center; font-size: 0.6rem;">6.9</span>
                        </div>
                        <span style="font-size: 0.6rem; color: var(--slate);">MECH</span>
                    </div>
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 8px;">
                        <div style="width: 100%; height: 85%; background: #64ffda; border-radius: 4px; position: relative;">
                            <span style="position: absolute; top: -20px; width: 100%; text-align: center; font-size: 0.6rem;">8.1</span>
                        </div>
                        <span style="font-size: 0.6rem; color: var(--slate);">MBA</span>
                    </div>
                </div>
            </div>

            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 800; color: var(--gold); margin-bottom: 20px; letter-spacing: 1px;">MODERATION GATEWAY</h3>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <button class="login-btn action-trigger" data-action="view_bell_curve" style="text-align: left; padding: 15px; font-size: 0.75rem;">📈 Generate Bell Curve Analytics</button>
                    <button class="login-btn action-trigger" data-action="export_pdf" style="text-align: left; padding: 15px; font-size: 0.75rem;">⏬ Merit List Publication (Top 100)</button>
                    <button class="login-btn action-trigger" data-action="publish_results" style="text-align: left; padding: 15px; font-size: 0.75rem; background: var(--gold); color: var(--navy-dark); font-weight: 800;">🚀 PUBLISH SEMESTER RESULTS</button>
                </div>
            </div>
        </div>
    `
};
