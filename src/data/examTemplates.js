export const examViewTemplates = {
    "Dashboard": (role = "Exams") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Exam Control</h1>
            <p style="color: #555; font-size: 0.75rem; margin-top: 5px; font-weight: 700; letter-spacing: 2px;">ASSESSMENT_SYNC: <span style="color: var(--vibrant-violet);">ACTIVE</span></p>
        </div>
        
        <div class="kpi-grid grid-adaptive" style="margin-top: 25px;">
            <div class="kpi-card glass-card" style="border-top: 3px solid var(--vibrant-violet); padding: 15px 22px;">
                <span class="kpi-label" style="color: var(--vibrant-violet); font-weight: 900;">Efficiency</span>
                <span class="kpi-val">68.4%</span>
                <div style="font-size:0.6rem;color:var(--slate);">Moderation rate</div>
            </div>
            <div class="kpi-card glass-card" style="padding: 15px 22px;">
                <span class="kpi-label" style="font-weight: 900;">Scripts Moderated</span>
                <span class="kpi-val">842</span>
                <div style="font-size:0.6rem;color:#10b981;">↑ 12% vs last cycle</div>
            </div>
            <div class="kpi-card glass-card" style="padding: 15px 22px;">
                <span class="kpi-label">UFM Cases</span>
                <span class="kpi-val" style="color: #ff4d4d;">02</span>
                <div style="font-size:0.6rem;color:#ff4d4d;">Under investigation</div>
            </div>
            <div class="kpi-card glass-card" style="padding: 15px 22px;">
                <span class="kpi-label">Hall Sync</span>
                <span class="kpi-val" style="color: #10b981;">100%</span>
                <div style="font-size:0.6rem;color:#10b981;">All centers online</div>
            </div>
        </div>

        <div class="grid-2-col" style="margin-top: 20px;" >
            <div class="glass-card" style="padding: 22px; min-width: 0;">
                <h3 style="font-size: 0.85rem; font-weight: 800; color: var(--vibrant-violet); letter-spacing: 1px; margin-bottom: 15px;">Evaluation Pulse</h3>
                <div class="grid-adaptive">
                    <div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.65rem; margin-bottom: 4px;">
                            <span style="font-weight: 700;">Engineering</span><span style="color: var(--vibrant-violet); font-weight: 800;">82%</span>
                        </div>
                        <div style="height: 4px; background: rgba(0,0,0,0.05); border-radius: 2px; overflow: hidden;">
                            <div style="width: 82%; height: 100%; background: var(--vibrant-violet);"></div>
                        </div>
                    </div>
                    <div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.65rem; margin-bottom: 4px;">
                            <span style="font-weight: 700;">Electronics</span><span style="color: var(--white); font-weight: 800;">74%</span>
                        </div>
                        <div style="height: 4px; background: rgba(0,0,0,0.05); border-radius: 2px; overflow: hidden;">
                            <div style="width: 74%; height: 100%; background: var(--white);"></div>
                        </div>
                    </div>
                    <div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.65rem; margin-bottom: 5px;">
                            <span style="font-weight: 700;">Mechanical Engg</span><span style="color: #ffab00; font-weight: 800;">45%</span>
                        </div>
                        <div style="height: 6px; background: rgba(0,0,0,0.05); border-radius: 3px; overflow: hidden;">
                            <div style="width: 45%; height: 100%; background: #ffab00;"></div>
                        </div>
                    </div>
                    <div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.65rem; margin-bottom: 5px;">
                            <span style="font-weight: 700;">MBA Business</span><span style="color: #10b981; font-weight: 800;">91%</span>
                        </div>
                        <div style="height: 6px; background: rgba(0,0,0,0.05); border-radius: 3px; overflow: hidden;">
                            <div style="width: 91%; height: 100%; background: #10b981;"></div>
                        </div>
                    </div>
                </div>
                <div style="margin-top: 20px; padding: 15px; background: rgba(184,134,11,0.03); border-radius: 12px; border: 1px dashed rgba(184,134,11,0.2); display: flex; gap: 15px; align-items: center;">
                    <div style="font-size: 1.5rem;">🚨</div>
                    <div>
                        <p style="font-size: 0.7rem; color: var(--gold); font-weight: 800;">CRITICAL DELAY ALERT</p>
                        <p style="font-size: 0.65rem; color: var(--slate); line-height: 1.4;">Mechanical Dept. evaluation is behind SLA by 48 hours. Notifying HOD automatically.</p>
                    </div>
                </div>
            </div>

            <div style="background: var(--glass); padding: 22px; border-radius: 12px; border: 1px solid var(--glass-border); min-width: 0;">
                <h3 style="font-size: 0.85rem; font-weight: 800; color: var(--white); margin-bottom: 15px; letter-spacing: 1px;">Integrity Sync</h3>
                <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 15px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: rgba(0,0,0,0.02); border-radius: 8px; border: 1px solid var(--glass-border);">
                        <p style="font-size: 0.6rem; color: #555;">Paper Release</p><p style="font-size: 0.75rem; font-weight: 700; color: var(--vibrant-violet);">SECURE</p>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: rgba(0,0,0,0.02); border-radius: 8px; border: 1px solid var(--glass-border);">
                        <p style="font-size: 0.6rem; color: #555;">CCTV Centers</p><p style="font-size: 0.75rem; font-weight: 700; color: var(--white);">42 Online</p>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: rgba(16,185,129,0.03); border-radius: 8px; border: 1px solid rgba(16,185,129,0.2);">
                        <p style="font-size: 0.6rem; color: #555;">Biometric Auth</p><p style="font-size: 0.75rem; font-weight: 700; color: #10b981;">ACTIVE</p>
                    </div>
                </div>
                <button class="login-btn action-trigger" data-action="emergency_override" style="width: 100%; background: rgba(239,68,68,0.1); color: #ef4444; font-weight: 800; font-size: 0.6rem; border: 1px solid rgba(239,68,68,0.3); padding: 10px;">Emergency Lock</button>
            </div>
        </div>

        <div class="grid-2-col" style="margin-top: 20px;">
            <div style="background: var(--glass); padding: 22px; border-radius: 12px; border: 1px solid var(--glass-border); min-width: 0;">
                <h3 style="font-size: 0.85rem; font-weight: 800; color: var(--white); margin-bottom: 15px; letter-spacing: 1px;">Moderation Trend</h3>
                <div style="height: 130px; position: relative; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; padding: 10px;">
                    <svg width="100%" height="100%" viewBox="0 0 400 100" preserveAspectRatio="none">
                        <polyline fill="none" stroke="var(--vibrant-violet)" stroke-width="2.5" points="0,90 80,75 160,55 240,40 320,25 400,10" />
                        <polyline fill="rgba(0,128,128,0.1)" stroke="none" points="0,90 80,75 160,55 240,40 320,25 400,10 400,100 0,100" />
                    </svg>
                </div>
            </div>

            <div style="background: var(--glass); border-radius: 12px; border: 1px solid var(--glass-border); overflow: hidden; min-width: 0;">
                <div style="padding: 15px 22px; border-bottom: 1px solid var(--glass-border);">
                    <h3 style="font-size: 0.85rem; font-weight: 800; color: var(--white); letter-spacing: 1px;">Exam Center Logistics</h3>
                </div>
                <div class="table-container">
                    <table class="data-table" style="font-size: 0.65rem;">
                        <thead>
                            <tr><th>Center</th><th>Capacity</th><th>Present</th><th>Status</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Main Campus</td><td>450</td><td>442</td><td><span class="status-pill success">Synced</span></td></tr>
                            <tr><td>South Wing</td><td>310</td><td>308</td><td><span class="status-pill success">Synced</span></td></tr>
                            <tr><td>Technical Hub</td><td>110</td><td>110</td><td><span class="status-pill success">Full</span></td></tr>
                            <tr><td>North Annex</td><td>80</td><td>74</td><td><span class="status-pill warning">Partial</span></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    "Exams": (role = "Exams") => `
        <div class="view-header" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">
            <div>
                <h1 class="page-title" style="font-size: 2rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Assessments</h1>
                <p style="color: #555; font-size: 0.75rem; margin-top: 5px; font-weight: 700; letter-spacing: 2px;">Cycle Management</p>
            </div>
            <button class="login-btn action-trigger" data-action="new_exam" style="width: auto; padding: 10px 25px; background: var(--vibrant-violet); color: #000; font-weight: 800; border: none;">+ Schedule Exam</button>
        </div>

        <div class="kpi-grid grid-adaptive" style="margin-top: 20px;">
            <div class="kpi-card glass-card"><span class="kpi-label">Scheduled</span><span class="kpi-val" style="font-size: 1.6rem;">12</span><div style="font-size:0.6rem;color:var(--slate);">This semester</div></div>
            <div class="kpi-card glass-card"><span class="kpi-label">Completed</span><span class="kpi-val" style="font-size: 1.6rem; color: #10b981;">08</span><div style="font-size:0.6rem;color:#10b981;">Results published</div></div>
            <div class="kpi-card glass-card"><span class="kpi-label">Pending Eval</span><span class="kpi-val" style="font-size: 1.6rem; color: #f59e0b;">03</span><div style="font-size:0.6rem;color:#f59e0b;">Awaiting moderation</div></div>
            <div class="kpi-card glass-card"><span class="kpi-label">Upcoming</span><span class="kpi-val" style="font-size: 1.6rem; color: var(--vibrant-violet);">01</span><div style="font-size:0.6rem;color:var(--slate);">Scheduled next week</div></div>
        </div>

        <div class="slide-up" style="margin-top: 25px; background: var(--glass); border-radius: 12px; border: 1px solid var(--glass-border); overflow: hidden;">
            <div style="padding: 15px 22px; border-bottom: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
                <h3 style="font-size: 0.85rem; font-weight: 700; color: var(--white);">Current Semester Exams</h3>
                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                    <button class="login-btn action-trigger" data-action="export_schedule" style="padding: 6px 14px; font-size: 0.65rem; width: auto;">Export Schedule</button>
                </div>
            </div>
            <div class="table-container">
                <table class="data-table" style="font-size: 0.72rem;">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Subject Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Mode</th>
                            <th>Students</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CS6001</td>
                            <td><strong>Algorithms & Data Structures</strong></td>
                            <td>May 10, 2026</td>
                            <td>10:00 AM</td>
                            <td>Paper</td>
                            <td>124</td>
                            <td><span class="status-pill success">Done</span></td>
                            <td><button class="login-btn action-trigger" data-action="view_grading" style="padding:4px 10px;font-size:0.58rem;width:auto;">Evaluate</button></td>
                        </tr>
                        <tr>
                            <td>CS6005</td>
                            <td><strong>Machine Learning Fundamentals</strong></td>
                            <td>May 13, 2026</td>
                            <td>10:00 AM</td>
                            <td>System</td>
                            <td>89</td>
                            <td><span class="status-pill warning">Evaluating</span></td>
                            <td><button class="login-btn action-trigger" data-action="view_grading" style="padding:4px 10px;font-size:0.58rem;width:auto;">Review</button></td>
                        </tr>
                        <tr>
                            <td>CS6022</td>
                            <td><strong>Cloud Computing</strong></td>
                            <td>May 15, 2026</td>
                            <td>02:00 PM</td>
                            <td>Paper</td>
                            <td>110</td>
                            <td><span class="status-pill warning">Pending</span></td>
                            <td><button class="login-btn" style="padding:4px 10px;font-size:0.58rem;width:auto;">Edit</button></td>
                        </tr>
                        <tr>
                            <td>MA4001</td>
                            <td><strong>Engineering Mathematics IV</strong></td>
                            <td>May 17, 2026</td>
                            <td>09:00 AM</td>
                            <td>Paper</td>
                            <td>215</td>
                            <td><span class="status-pill warning">Pending</span></td>
                            <td><button class="login-btn" style="padding:4px 10px;font-size:0.58rem;width:auto;">Edit</button></td>
                        </tr>
                        <tr>
                            <td>EC5012</td>
                            <td><strong>VLSI Design</strong></td>
                            <td>May 20, 2026</td>
                            <td>11:00 AM</td>
                            <td>System</td>
                            <td>62</td>
                            <td><span class="status-pill status-verified">Upcoming</span></td>
                            <td><button class="login-btn" style="padding:4px 10px;font-size:0.58rem;width:auto;opacity:0.6;">Locked</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `,
    "Reports": (role = "Exams") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Results Intelligence</h1>
            <p style="color: #555; font-size: 0.75rem; margin-top: 5px; font-weight: 700; letter-spacing: 2px;">Analytics Dashboard</p>
        </div>

        <div class="kpi-grid grid-adaptive" style="margin-top: 20px;">
            <div class="kpi-card glass-card"><span class="kpi-label">Overall Pass Rate</span><span class="kpi-val" style="color: #10b981;">91.2%</span></div>
            <div class="kpi-card glass-card"><span class="kpi-label">Distinction</span><span class="kpi-val" style="color: var(--vibrant-violet);">18.4%</span></div>
            <div class="kpi-card glass-card"><span class="kpi-label">At Risk (&lt;40%)</span><span class="kpi-val" style="color: #ff4d4d;">24</span></div>
            <div class="kpi-card glass-card"><span class="kpi-label">Results Published</span><span class="kpi-val">08 / 12</span></div>
        </div>

        <div class="grid-2-col" style="margin-top: 25px;">
            <div style="background: var(--glass); padding: 22px; border-radius: 12px; border: 1px solid var(--glass-border); min-width: 0;">
                <h3 style="font-size: 0.85rem; font-weight: 800; color: var(--white); margin-bottom: 15px; letter-spacing: 1px;">Grading Trends by Department</h3>
                <div style="display: flex; align-items: flex-end; gap: 12px; height: 140px; padding: 0 10px;">
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 5px;">
                        <div style="width: 100%; height: 90%; background: var(--vibrant-violet); border-radius: 4px 4px 0 0;"></div>
                        <span style="font-size: 0.55rem; color: #555; font-weight: 700;">CS (91%)</span>
                    </div>
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 5px;">
                        <div style="width: 100%; height: 75%; background: #6366f1; border-radius: 4px 4px 0 0;"></div>
                        <span style="font-size: 0.55rem; color: #555; font-weight: 700;">ECE (75%)</span>
                    </div>
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 5px;">
                        <div style="width: 100%; height: 45%; background: #f59e0b; border-radius: 4px 4px 0 0;"></div>
                        <span style="font-size: 0.55rem; color: #555; font-weight: 700;">MECH (45%)</span>
                    </div>
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 5px;">
                        <div style="width: 100%; height: 85%; background: #10b981; border-radius: 4px 4px 0 0;"></div>
                        <span style="font-size: 0.55rem; color: #555; font-weight: 700;">MBA (85%)</span>
                    </div>
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 5px;">
                        <div style="width: 100%; height: 68%; background: var(--vibrant-violet); border-radius: 4px 4px 0 0; opacity: 0.6;"></div>
                        <span style="font-size: 0.55rem; color: #555; font-weight: 700;">MATH (68%)</span>
                    </div>
                </div>
            </div>

            <div style="background: var(--glass); padding: 22px; border-radius: 12px; border: 1px solid var(--glass-border); min-width: 0;">
                <h3 style="font-size: 0.85rem; font-weight: 800; color: var(--vibrant-violet); margin-bottom: 15px; letter-spacing: 1px;">Analytics Actions</h3>
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <button class="login-btn action-trigger" data-action="view_bell_curve" style="text-align: left; padding: 12px 18px; font-size: 0.7rem; background: rgba(0,128,128,0.05); border: 1px solid var(--glass-border);">
                        <i data-lucide="bar-chart-2" style="width:14px;height:14px;margin-right:8px;vertical-align:middle;"></i>View Bell Curve Analysis
                    </button>
                    <button class="login-btn action-trigger" data-action="export_pdf" style="text-align: left; padding: 12px 18px; font-size: 0.7rem; background: rgba(0,128,128,0.05); border: 1px solid var(--glass-border);">
                        <i data-lucide="download" style="width:14px;height:14px;margin-right:8px;vertical-align:middle;"></i>Export Results PDF
                    </button>
                    <button class="login-btn action-trigger" data-action="publish_results" style="text-align: left; padding: 12px 18px; font-size: 0.7rem; background: var(--vibrant-violet); color: #000; font-weight: 800;">
                        <i data-lucide="send" style="width:14px;height:14px;margin-right:8px;vertical-align:middle;"></i>Publish Results
                    </button>
                </div>
            </div>
        </div>

        <div class="slide-up" style="margin-top: 25px; background: var(--glass); border-radius: 12px; border: 1px solid var(--glass-border); overflow: hidden;">
            <div style="padding: 15px 22px; border-bottom: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.85rem; font-weight: 700; color: var(--white);">Subject-wise Result Summary</h3>
            </div>
            <div class="table-container">
                <table class="data-table" style="font-size: 0.72rem;">
                    <thead>
                        <tr><th>Subject</th><th>Appeared</th><th>Pass %</th><th>Highest</th><th>Avg Score</th><th>At Risk</th><th>Status</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Algorithms</td><td>124</td><td style="color:#10b981;font-weight:800;">96.8%</td><td>98</td><td>74.2</td><td>04</td><td><span class="status-pill success">Published</span></td></tr>
                        <tr><td>Machine Learning</td><td>89</td><td style="color:#f59e0b;font-weight:800;">81.0%</td><td>95</td><td>62.8</td><td>17</td><td><span class="status-pill warning">In Review</span></td></tr>
                        <tr><td>Cloud Computing</td><td>110</td><td style="color:#64748b;font-weight:800;">—</td><td>—</td><td>—</td><td>—</td><td><span class="status-pill status-verified">Pending</span></td></tr>
                        <tr><td>Eng. Mathematics IV</td><td>215</td><td style="color:#10b981;font-weight:800;">88.4%</td><td>100</td><td>68.5</td><td>25</td><td><span class="status-pill success">Published</span></td></tr>
                        <tr><td>VLSI Design</td><td>62</td><td style="color:#64748b;font-weight:800;">—</td><td>—</td><td>—</td><td>—</td><td><span class="status-pill status-verified">Upcoming</span></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    `
};
