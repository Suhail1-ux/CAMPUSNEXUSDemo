import { globalStats } from './mockData.js';

export const viewTemplates = {
    "Dashboard": (role = "Management") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">${role} Executive Dashboard</h1>
            <p style="color: var(--slate); font-size: 0.8rem; margin-top: 5px;">Institutional Overview for Academic Year 2026-27 &nbsp;|&nbsp; <span style="color: #64ffda;">All Systems Operational</span></p>
        </div>
        
        <div class="kpi-grid" style="margin-top: 30px;">
            <div class="kpi-card">
                <span class="kpi-label">Total Enrollment</span>
                <span class="kpi-val">${globalStats.Students}</span>
                <div style="font-size: 0.65rem; color: var(--gold); font-weight: 700;">↑ 12% Growth</div>
            </div>
            <div class="kpi-card">
                <span class="kpi-label">Active Faculty</span>
                <span class="kpi-val">${globalStats.Faculty}</span>
                <div style="font-size: 0.65rem; color: #64ffda; font-weight: 700;">Optimal Utilization</div>
            </div>
            <div class="kpi-card">
                <span class="kpi-label">Current Applications</span>
                <span class="kpi-val">${globalStats.Admissions}</span>
                <div style="font-size: 0.65rem; color: #ffab00; font-weight: 700;">450 Pending Docs</div>
            </div>
            <div class="kpi-card">
                <span class="kpi-label">Revenue YTD</span>
                <span class="kpi-val">${globalStats.Revenue}</span>
                <div style="font-size: 0.65rem; color: var(--gold); font-weight: 700;">↑ 8% vs Prev Year</div>
            </div>
            <div class="kpi-card">
                <span class="kpi-label">Avg Attendance</span>
                <span class="kpi-val">94.2%</span>
                <div style="font-size: 0.65rem; color: #64ffda; font-weight: 700;">Above 90% Target</div>
            </div>
            <div class="kpi-card">
                <span class="kpi-label">Open Grievances</span>
                <span class="kpi-val" style="color: #ff4d4d;">18</span>
                <div style="font-size: 0.65rem; color: #ff4d4d; font-weight: 700;">Requires Attention</div>
            </div>
            <div class="kpi-card">
                <span class="kpi-label">Active Campuses</span>
                <span class="kpi-val" style="color: #64ffda;">3</span>
                <div style="font-size: 0.65rem; color: var(--slate); font-weight: 700;">Main · City · North</div>
            </div>
            <div class="kpi-card">
                <span class="kpi-label">Fee Collection Rate</span>
                <span class="kpi-val" style="color: var(--gold);">78.4%</span>
                <div style="font-size: 0.65rem; color: #ffab00; font-weight: 700;">$1.24M Receivable</div>
            </div>
        </div>

        <!-- Row 1: Funnel + Actions -->
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 25px; margin-top: 25px;" class="slide-up">
            <div style="background: var(--glass); padding: 30px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
                    <h3 style="font-size: 0.9rem; font-weight: 700;">Enrollment Funnel Visualization</h3>
                    <div style="display: flex; gap: 15px;">
                        <span style="font-size: 0.7rem; color: var(--slate);"><i style="color: var(--gold); margin-right: 5px;">●</i>Undergraduate</span>
                        <span style="font-size: 0.7rem; color: var(--slate);"><i style="color: #64ffda; margin-right: 5px;">●</i>Postgraduate</span>
                    </div>
                </div>
                <div style="height: 250px; background: rgba(0,0,0,0.2); border-radius: 12px; border: 1px dashed var(--glass-border); position: relative; overflow: hidden; display: flex; align-items: flex-end;">
                    <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="none" style="position: absolute; bottom: 0; left: 0;">
                        <defs>
                            <linearGradient id="grad-undergrad-dash" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style="stop-color:var(--gold);stop-opacity:0.3" />
                                <stop offset="100%" style="stop-color:var(--gold);stop-opacity:0" />
                            </linearGradient>
                            <linearGradient id="grad-postgrad-dash" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style="stop-color:#64ffda;stop-opacity:0.2" />
                                <stop offset="100%" style="stop-color:#64ffda;stop-opacity:0" />
                            </linearGradient>
                        </defs>
                        <path d="M0,150 Q250,100 500,150 T1000,150 V300 H0 Z" fill="url(#grad-undergrad-dash)" stroke="var(--gold)" stroke-width="2" />
                        <path d="M0,180 Q250,230 500,180 T1000,180 V300 H0 Z" fill="url(#grad-postgrad-dash)" stroke="#64ffda" stroke-width="2" opacity="0.6" />
                    </svg>
                    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center;">
                        <div style="font-size: 3rem; font-weight: 900; color: var(--white); text-shadow: 0 0 30px rgba(100,255,218,0.4);">92.4%</div>
                        <div style="font-size: 0.65rem; color: var(--gold); letter-spacing: 3px; font-weight: 800;">ENROLLMENT_VELOCITY_NODE</div>
                    </div>
                </div>
            </div>
            <div style="background: var(--glass); padding: 30px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 20px;">Pending Executive Actions</h3>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div style="padding: 15px; background: rgba(255,255,255,0.03); border-radius: 10px; border-left: 4px solid var(--gold);">
                        <p style="font-size: 0.75rem; font-weight: 600;">Syllabus Approval Required</p>
                        <p style="font-size: 0.65rem; color: var(--slate); margin-top: 4px;">Faculty of Engineering | B.Tech CS</p>
                    </div>
                    <div style="padding: 15px; background: rgba(255,255,255,0.03); border-radius: 10px; border-left: 4px solid #ffab00;">
                        <p style="font-size: 0.75rem; font-weight: 600;">Financial Reconciliation</p>
                        <p style="font-size: 0.65rem; color: var(--slate); margin-top: 4px;">Spring Semester Fee Collection</p>
                    </div>
                    <div style="padding: 15px; background: rgba(255,77,77,0.05); border-radius: 10px; border-left: 4px solid #ff4d4d;">
                        <p style="font-size: 0.75rem; font-weight: 600; color: #ff4d4d;">18 Open Grievances</p>
                        <p style="font-size: 0.65rem; color: var(--slate); margin-top: 4px;">Student & Faculty Portal</p>
                    </div>
                    <button class="login-btn" style="margin-top: 5px; font-size: 0.75rem;">VIEW_ALL_TASKS</button>
                </div>
            </div>
        </div>

        <!-- Row 2: Department Health + Activity Feed -->
        <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 25px; margin-top: 25px;">
            <div style="background: var(--glass); padding: 28px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold); margin-bottom: 20px;">Department Health Matrix</h3>
                <div style="display: flex; flex-direction: column; gap: 14px;">
                    <div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.7rem; margin-bottom: 6px;"><span>Engineering & Technology</span><span style="color: var(--gold); font-weight: 800;">94%</span></div>
                        <div style="height: 5px; background: rgba(255,255,255,0.07); border-radius: 3px;"><div style="width: 94%; height: 100%; background: linear-gradient(90deg, var(--gold), #64ffda); border-radius: 3px;"></div></div>
                    </div>
                    <div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.7rem; margin-bottom: 6px;"><span>Management & Commerce</span><span style="color: #64ffda; font-weight: 800;">87%</span></div>
                        <div style="height: 5px; background: rgba(255,255,255,0.07); border-radius: 3px;"><div style="width: 87%; height: 100%; background: #64ffda; border-radius: 3px;"></div></div>
                    </div>
                    <div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.7rem; margin-bottom: 6px;"><span>Sciences & Humanities</span><span style="color: var(--gold); font-weight: 800;">79%</span></div>
                        <div style="height: 5px; background: rgba(255,255,255,0.07); border-radius: 3px;"><div style="width: 79%; height: 100%; background: var(--gold); border-radius: 3px; opacity: 0.7;"></div></div>
                    </div>
                    <div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.7rem; margin-bottom: 6px;"><span>Medical & Life Sciences</span><span style="color: #ffab00; font-weight: 800;">65%</span></div>
                        <div style="height: 5px; background: rgba(255,255,255,0.07); border-radius: 3px;"><div style="width: 65%; height: 100%; background: #ffab00; border-radius: 3px;"></div></div>
                    </div>
                    <div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.7rem; margin-bottom: 6px;"><span>Law & Governance</span><span style="color: #ff4d4d; font-weight: 800;">51%</span></div>
                        <div style="height: 5px; background: rgba(255,255,255,0.07); border-radius: 3px;"><div style="width: 51%; height: 100%; background: #ff4d4d; border-radius: 3px;"></div></div>
                    </div>
                </div>
            </div>

            <div style="background: var(--glass); padding: 28px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold); margin-bottom: 20px;">Live System Activity</h3>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div style="display: flex; gap: 12px; align-items: flex-start;">
                        <div style="width: 8px; height: 8px; background: #64ffda; border-radius: 50%; margin-top: 5px; flex-shrink: 0; box-shadow: 0 0 8px #64ffda;"></div>
                        <div><p style="font-size: 0.72rem; font-weight: 600;">Fee challan generated — Aarav M.</p><p style="font-size: 0.6rem; color: var(--slate);">2 min ago · Finance Node</p></div>
                    </div>
                    <div style="display: flex; gap: 12px; align-items: flex-start;">
                        <div style="width: 8px; height: 8px; background: var(--gold); border-radius: 50%; margin-top: 5px; flex-shrink: 0; box-shadow: 0 0 8px var(--gold);"></div>
                        <div><p style="font-size: 0.72rem; font-weight: 600;">Result published — B.Tech CS Sem 6</p><p style="font-size: 0.6rem; color: var(--slate);">18 min ago · Exam Cell</p></div>
                    </div>
                    <div style="display: flex; gap: 12px; align-items: flex-start;">
                        <div style="width: 8px; height: 8px; background: #ffab00; border-radius: 50%; margin-top: 5px; flex-shrink: 0;"></div>
                        <div><p style="font-size: 0.72rem; font-weight: 600;">New applicant registered — MBA Finance</p><p style="font-size: 0.6rem; color: var(--slate);">34 min ago · Admissions Gateway</p></div>
                    </div>
                    <div style="display: flex; gap: 12px; align-items: flex-start;">
                        <div style="width: 8px; height: 8px; background: #ff4d4d; border-radius: 50%; margin-top: 5px; flex-shrink: 0;"></div>
                        <div><p style="font-size: 0.72rem; font-weight: 600; color: #ff4d4d;">Attendance below 75% — Zaid A.</p><p style="font-size: 0.6rem; color: var(--slate);">1 hr ago · SIS Alert Node</p></div>
                    </div>
                    <div style="display: flex; gap: 12px; align-items: flex-start;">
                        <div style="width: 8px; height: 8px; background: #64ffda; border-radius: 50%; margin-top: 5px; flex-shrink: 0;"></div>
                        <div><p style="font-size: 0.72rem; font-weight: 600;">Payroll disbursed — Feb 2026 Cycle</p><p style="font-size: 0.6rem; color: var(--slate);">Yesterday · HRMS Node</p></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Row 3: Quick Access Shortcuts -->
        <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border); margin-top: 25px;">
            <h3 style="font-size: 0.85rem; font-weight: 700; color: var(--white); margin-bottom: 18px;">Quick Access Nodes</h3>
            <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 12px;">
                <button class="nav-item" data-view="Admissions" style="flex-direction: column; padding: 16px 10px; gap: 8px; text-align: center; font-size: 0.65rem; color: var(--gold); border-color: rgba(255,171,0,0.2);">
                    <i style="font-size: 1.4rem;">🤝</i>Admissions
                </button>
                <button class="nav-item" data-view="SIS" style="flex-direction: column; padding: 16px 10px; gap: 8px; text-align: center; font-size: 0.65rem;">
                    <i style="font-size: 1.4rem;">👥</i>Students
                </button>
                <button class="nav-item" data-view="Exams" style="flex-direction: column; padding: 16px 10px; gap: 8px; text-align: center; font-size: 0.65rem;">
                    <i style="font-size: 1.4rem;">✍️</i>Exams
                </button>
                <button class="nav-item" data-view="Fees" style="flex-direction: column; padding: 16px 10px; gap: 8px; text-align: center; font-size: 0.65rem;">
                    <i style="font-size: 1.4rem;">💰</i>Fees
                </button>
                <button class="nav-item" data-view="Reports" style="flex-direction: column; padding: 16px 10px; gap: 8px; text-align: center; font-size: 0.65rem;">
                    <i style="font-size: 1.4rem;">📋</i>Reports
                </button>
                <button class="nav-item" data-view="Settings" style="flex-direction: column; padding: 16px 10px; gap: 8px; text-align: center; font-size: 0.65rem;">
                    <i style="font-size: 1.4rem;">⚙️</i>Settings
                </button>
            </div>
        </div>
    `,
    "SIS": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800;">Student Information System</h1>
            <div style="margin-top: 20px; background: var(--glass); padding: 14px 18px; border-radius: 12px; display: flex; gap: 10px; align-items: center; border: 1px solid var(--glass-border);">
                <select style="background: rgba(0,0,0,0.3); border: 1px solid var(--glass-border); border-radius: 8px; color: #fff; font-family: Inter, sans-serif; font-size: 0.7rem; padding: 7px 10px; outline: none; width: 130px; flex-shrink: 0;"><option>All Campuses</option><option>Main Campus</option><option>City Campus</option><option>North Campus</option></select>
                <select style="background: rgba(0,0,0,0.3); border: 1px solid var(--glass-border); border-radius: 8px; color: #fff; font-family: Inter, sans-serif; font-size: 0.7rem; padding: 7px 10px; outline: none; width: 105px; flex-shrink: 0;"><option>AY 2026-27</option><option>AY 2025-26</option></select>
                <select style="background: rgba(0,0,0,0.3); border: 1px solid var(--glass-border); border-radius: 8px; color: #fff; font-family: Inter, sans-serif; font-size: 0.7rem; padding: 7px 10px; outline: none; width: 130px; flex-shrink: 0;"><option>All Programs</option><option>B.Tech CS</option><option>MBA Finance</option><option>B.Com</option><option>Ph.D</option></select>
                <select style="background: rgba(0,0,0,0.3); border: 1px solid var(--glass-border); border-radius: 8px; color: #fff; font-family: Inter, sans-serif; font-size: 0.7rem; padding: 7px 10px; outline: none; width: 95px; flex-shrink: 0;"><option>All Years</option><option>Year 1</option><option>Year 2</option><option>Year 3</option><option>Year 4</option></select>
                <input type="text" placeholder="🔍 Search Scholar ID / Name..." style="background: rgba(0,0,0,0.3); border: 1px solid var(--glass-border); border-radius: 8px; color: #fff; font-family: Inter, sans-serif; font-size: 0.7rem; padding: 7px 12px; outline: none; flex: 1; min-width: 0;" />
                <button class="login-btn action-trigger" data-action="export_pdf" style="width: auto; padding: 7px 14px; font-size: 0.7rem; white-space: nowrap; flex-shrink: 0; background: var(--gold); color: var(--navy-dark);">⬇ PDF</button>
                <button class="login-btn action-trigger" data-action="export_excel" style="width: auto; padding: 7px 14px; font-size: 0.7rem; white-space: nowrap; flex-shrink: 0;">⬇ EXCEL</button>
            </div>
        </div>

        <!-- KPI Row -->
        <div class="kpi-grid" style="margin-top: 26px; grid-template-columns: repeat(6, 1fr); gap: 14px;">
            <div class="kpi-card" style="padding: 18px;">
                <span class="kpi-label">Active Scholars</span>
                <span class="kpi-val" style="font-size: 1.8rem;">10,245</span>
                <div style="font-size: 0.6rem; color: #64ffda; margin-top: 4px;">↑ 6.4% YoY</div>
            </div>
            <div class="kpi-card" style="padding: 18px;">
                <span class="kpi-label">New This AY</span>
                <span class="kpi-val" style="font-size: 1.8rem;">1,840</span>
                <div style="font-size: 0.6rem; color: #64ffda; margin-top: 4px;">SIS-active enrolments</div>
            </div>
            <div class="kpi-card" style="padding: 18px;">
                <span class="kpi-label">Avg CGPA</span>
                <span class="kpi-val" style="font-size: 1.8rem; color: var(--gold);">7.84</span>
                <div style="font-size: 0.6rem; color: var(--gold); margin-top: 4px;">All programs combined</div>
            </div>
            <div class="kpi-card" style="padding: 18px;">
                <span class="kpi-label">Avg Attendance</span>
                <span class="kpi-val" style="font-size: 1.8rem; color: #64ffda;">94.2%</span>
                <div style="font-size: 0.6rem; color: #64ffda; margin-top: 4px;">Above 90% threshold</div>
            </div>
            <div class="kpi-card" style="padding: 18px; border-color: rgba(255,77,77,0.25);">
                <span class="kpi-label">Att. Defaulters</span>
                <span class="kpi-val" style="font-size: 1.8rem; color: #ff4d4d;">124</span>
                <div style="font-size: 0.6rem; color: #ff4d4d; margin-top: 4px;">&lt;75% attendance</div>
            </div>
            <div class="kpi-card" style="padding: 18px; border-color: rgba(255,171,0,0.25);">
                <span class="kpi-label">Fee Defaulters</span>
                <span class="kpi-val" style="font-size: 1.8rem; color: #ffab00;">312</span>
                <div style="font-size: 0.6rem; color: #ffab00; margin-top: 4px;">Dues outstanding</div>
            </div>
        </div>

        <!-- Status Filter Tabs -->
        <div style="display: flex; gap: 8px; margin-top: 22px; margin-bottom: 16px;">
            <button class="login-btn" style="font-size: 0.7rem; padding: 7px 16px; width: auto; background: var(--gold); color: var(--navy-dark);">All Students</button>
            <button class="login-btn" style="font-size: 0.7rem; padding: 7px 16px; width: auto; background: rgba(100,255,218,0.1); color: #64ffda; border-color: rgba(100,255,218,0.3);">✓ Active</button>
            <button class="login-btn" style="font-size: 0.7rem; padding: 7px 16px; width: auto; background: rgba(255,77,77,0.08); color: #ff4d4d; border-color: rgba(255,77,77,0.3);">⚠ Att. Defaulters</button>
            <button class="login-btn" style="font-size: 0.7rem; padding: 7px 16px; width: auto; background: rgba(255,171,0,0.08); color: #ffab00; border-color: rgba(255,171,0,0.3);">💳 Fee Pending</button>
            <button class="login-btn" style="font-size: 0.7rem; padding: 7px 16px; width: auto; background: rgba(255,255,255,0.05); color: var(--slate);">🏖️ On Leave</button>
        </div>

        <!-- Main grid: Scholar Table + Sidebar -->
        <div style="display: grid; grid-template-columns: 1fr 300px; gap: 20px;" class="slide-up">

            <!-- Student Table -->
            <div style="background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
                <div style="padding: 16px 22px; border-bottom: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center;">
                    <h3 style="font-size: 0.88rem; font-weight: 700; color: var(--gold);">Scholar Directory</h3>
                    <span class="status-pill status-pending" style="font-size: 0.65rem;">12 of 10,245 shown</span>
                </div>
                <div style="overflow-x: auto;">
                <table class="data-table" style="font-size: 0.72rem; min-width: 860px;">
                    <thead>
                        <tr><th>Scholar ID</th><th>Student</th><th>Program</th><th>Campus</th><th>CGPA</th><th>Attendance</th><th>Fees</th><th>Status</th><th style="min-width:110px;">Actions</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="color:var(--gold);font-weight:700;white-space:nowrap;">#CN-9822</td>
                            <td><strong>Aarav Malhotra</strong><br><span style="font-size:0.6rem;color:var(--slate);">aarav.m@cms.edu</span></td>
                            <td style="white-space:nowrap;">B.Tech CS · Yr3 S6</td><td>Main</td>
                            <td style="color:#64ffda;font-weight:800;">8.92</td>
                            <td style="color:#64ffda;font-weight:700;">98.5%</td>
                            <td><span class="status-pill status-verified" style="font-size:0.6rem;">PAID</span></td>
                            <td><span class="status-pill status-verified" style="font-size:0.6rem;">ACTIVE</span></td>
                            <td style="white-space:nowrap;">
                                <button class="profile-trigger" data-id="#CN-9822" style="display:inline-block;padding:3px 9px;font-size:0.58rem;font-weight:700;border-radius:6px;border:1px solid rgba(184,134,11,0.4);background:rgba(184,134,11,0.15);color:var(--gold);cursor:pointer;margin-right:3px;font-family:Inter,sans-serif;letter-spacing:1px;">VIEW</button>
                                <button class="action-trigger" data-action="download_id" style="display:inline-block;padding:3px 9px;font-size:0.58rem;font-weight:700;border-radius:6px;border:1px solid rgba(100,255,218,0.3);background:rgba(100,255,218,0.1);color:#64ffda;cursor:pointer;font-family:Inter,sans-serif;letter-spacing:1px;">ID</button>
                            </td>
                        </tr>
                        <tr>
                            <td style="color:var(--gold);font-weight:700;white-space:nowrap;">#CN-9823</td>
                            <td><strong>Isha Kapur</strong><br><span style="font-size:0.6rem;color:var(--slate);">isha.k@cms.edu</span></td>
                            <td style="white-space:nowrap;">B.Com · Yr2 S4</td><td>City</td>
                            <td style="color:var(--gold);font-weight:800;">7.41</td>
                            <td style="color:#ffab00;font-weight:700;">82.1%</td>
                            <td><span class="status-pill status-verified" style="font-size:0.6rem;">PAID</span></td>
                            <td><span class="status-pill status-verified" style="font-size:0.6rem;">ACTIVE</span></td>
                            <td style="white-space:nowrap;">
                                <button class="profile-trigger" data-id="#CN-9823" style="display:inline-block;padding:3px 9px;font-size:0.58rem;font-weight:700;border-radius:6px;border:1px solid rgba(184,134,11,0.4);background:rgba(184,134,11,0.15);color:var(--gold);cursor:pointer;margin-right:3px;font-family:Inter,sans-serif;letter-spacing:1px;">VIEW</button>
                                <button class="action-trigger" data-action="bonafide" style="display:inline-block;padding:3px 9px;font-size:0.58rem;font-weight:700;border-radius:6px;border:1px solid rgba(184,134,11,0.3);background:rgba(184,134,11,0.1);color:var(--gold);cursor:pointer;font-family:Inter,sans-serif;letter-spacing:1px;">BON</button>
                            </td>
                        </tr>
                        <tr>
                            <td style="color:var(--gold);font-weight:700;white-space:nowrap;">#CN-9824</td>
                            <td><strong>Riya Sharma</strong><br><span style="font-size:0.6rem;color:var(--slate);">riya.s@cms.edu</span></td>
                            <td style="white-space:nowrap;">B.Tech CS · Yr2 S4</td><td>Main</td>
                            <td style="color:var(--gold);font-weight:800;">8.15</td>
                            <td style="color:#64ffda;font-weight:700;">91.3%</td>
                            <td><span class="status-pill status-verified" style="font-size:0.6rem;">PAID</span></td>
                            <td><span class="status-pill status-verified" style="font-size:0.6rem;">ACTIVE</span></td>
                            <td style="white-space:nowrap;">
                                <button class="profile-trigger" data-id="#CN-9824" style="display:inline-block;padding:3px 9px;font-size:0.58rem;font-weight:700;border-radius:6px;border:1px solid rgba(184,134,11,0.4);background:rgba(184,134,11,0.15);color:var(--gold);cursor:pointer;margin-right:3px;font-family:Inter,sans-serif;letter-spacing:1px;">VIEW</button>
                                <button class="action-trigger" data-action="download_id" style="display:inline-block;padding:3px 9px;font-size:0.58rem;font-weight:700;border-radius:6px;border:1px solid rgba(100,255,218,0.3);background:rgba(100,255,218,0.1);color:#64ffda;cursor:pointer;font-family:Inter,sans-serif;letter-spacing:1px;">ID</button>
                            </td>
                        </tr>
                        <tr style="background:rgba(255,77,77,0.03);">
                            <td style="color:var(--gold);font-weight:700;white-space:nowrap;">#CN-9825</td>
                            <td><strong>Kabir Mehta</strong><br><span style="font-size:0.6rem;color:var(--slate);">kabir.m@cms.edu</span></td>
                            <td style="white-space:nowrap;">B.Tech CS · Yr3 S6</td><td>Main</td>
                            <td style="color:#ffab00;font-weight:800;">6.88</td>
                            <td style="color:#ff4d4d;font-weight:700;">71.4% ⚠</td>
                            <td><span class="status-pill" style="font-size:0.6rem;background:rgba(255,171,0,0.12);color:#ffab00;border-color:rgba(255,171,0,0.3);">PARTIAL</span></td>
                            <td><span class="status-pill status-pending" style="font-size:0.6rem;">AT_RISK</span></td>
                            <td style="white-space:nowrap;">
                                <button class="profile-trigger" data-id="#CN-9825" style="display:inline-block;padding:3px 9px;font-size:0.58rem;font-weight:700;border-radius:6px;border:1px solid rgba(184,134,11,0.4);background:rgba(184,134,11,0.15);color:var(--gold);cursor:pointer;margin-right:3px;font-family:Inter,sans-serif;letter-spacing:1px;">VIEW</button>
                                <button class="action-trigger" data-action="send_notice" style="display:inline-block;padding:3px 9px;font-size:0.58rem;font-weight:700;border-radius:6px;border:1px solid rgba(255,77,77,0.3);background:rgba(255,77,77,0.1);color:#ff4d4d;cursor:pointer;font-family:Inter,sans-serif;letter-spacing:1px;">NOTICE</button>
                            </td>
                        </tr>
                        <tr>
                            <td style="color:var(--gold);font-weight:700;white-space:nowrap;">#CN-9830</td>
                            <td><strong>Priya Nambiar</strong><br><span style="font-size:0.6rem;color:var(--slate);">priya.n@cms.edu</span></td>
                            <td style="white-space:nowrap;">MBA Finance · Yr1 S2</td><td>North</td>
                            <td style="color:#64ffda;font-weight:800;">8.74</td>
                            <td style="color:#64ffda;font-weight:700;">96.2%</td>
                            <td><span class="status-pill status-verified" style="font-size:0.6rem;">PAID</span></td>
                            <td><span class="status-pill status-verified" style="font-size:0.6rem;">ACTIVE</span></td>
                            <td style="white-space:nowrap;">
                                <button class="profile-trigger" data-id="#CN-9830" style="display:inline-block;padding:3px 9px;font-size:0.58rem;font-weight:700;border-radius:6px;border:1px solid rgba(184,134,11,0.4);background:rgba(184,134,11,0.15);color:var(--gold);cursor:pointer;margin-right:3px;font-family:Inter,sans-serif;letter-spacing:1px;">VIEW</button>
                                <button class="action-trigger" data-action="bonafide" style="display:inline-block;padding:3px 9px;font-size:0.58rem;font-weight:700;border-radius:6px;border:1px solid rgba(184,134,11,0.3);background:rgba(184,134,11,0.1);color:var(--gold);cursor:pointer;font-family:Inter,sans-serif;letter-spacing:1px;">BON</button>
                            </td>
                        </tr>
                        <tr style="background:rgba(255,171,0,0.03);">
                            <td style="color:var(--gold);font-weight:700;white-space:nowrap;">#CN-9836</td>
                            <td><strong>Arjun Verma</strong><br><span style="font-size:0.6rem;color:var(--slate);">arjun.v@cms.edu</span></td>
                            <td style="white-space:nowrap;">B.Tech CS · Yr4 S8</td><td>Main</td>
                            <td style="color:var(--gold);font-weight:800;">7.62</td>
                            <td style="color:#64ffda;font-weight:700;">88.9%</td>
                            <td><span class="status-pill" style="font-size:0.6rem;background:rgba(255,77,77,0.12);color:#ff4d4d;border-color:rgba(255,77,77,0.3);">OVERDUE</span></td>
                            <td><span class="status-pill status-verified" style="font-size:0.6rem;">ACTIVE</span></td>
                            <td style="white-space:nowrap;">
                                <button class="profile-trigger" data-id="#CN-9836" style="display:inline-block;padding:3px 9px;font-size:0.58rem;font-weight:700;border-radius:6px;border:1px solid rgba(184,134,11,0.4);background:rgba(184,134,11,0.15);color:var(--gold);cursor:pointer;margin-right:3px;font-family:Inter,sans-serif;letter-spacing:1px;">VIEW</button>
                                <button class="action-trigger" data-action="fee_demand" style="display:inline-block;padding:3px 9px;font-size:0.58rem;font-weight:700;border-radius:6px;border:1px solid rgba(255,77,77,0.3);background:rgba(255,77,77,0.1);color:#ff4d4d;cursor:pointer;font-family:Inter,sans-serif;letter-spacing:1px;">DUES</button>
                            </td>
                        </tr>
                        <tr>
                            <td style="color:var(--gold);font-weight:700;white-space:nowrap;">#CN-9841</td>
                            <td><strong>Fatima Sheikh</strong><br><span style="font-size:0.6rem;color:var(--slate);">fatima.s@cms.edu</span></td>
                            <td style="white-space:nowrap;">B.Com · Yr3 S6</td><td>City</td>
                            <td style="color:#64ffda;font-weight:800;">8.33</td>
                            <td style="color:#64ffda;font-weight:700;">93.7%</td>
                            <td><span class="status-pill status-verified" style="font-size:0.6rem;">PAID</span></td>
                            <td><span class="status-pill status-verified" style="font-size:0.6rem;">ACTIVE</span></td>
                            <td style="white-space:nowrap;">
                                <button class="profile-trigger" data-id="#CN-9841" style="display:inline-block;padding:3px 9px;font-size:0.58rem;font-weight:700;border-radius:6px;border:1px solid rgba(184,134,11,0.4);background:rgba(184,134,11,0.15);color:var(--gold);cursor:pointer;margin-right:3px;font-family:Inter,sans-serif;letter-spacing:1px;">VIEW</button>
                                <button class="action-trigger" data-action="download_id" style="display:inline-block;padding:3px 9px;font-size:0.58rem;font-weight:700;border-radius:6px;border:1px solid rgba(100,255,218,0.3);background:rgba(100,255,218,0.1);color:#64ffda;cursor:pointer;font-family:Inter,sans-serif;letter-spacing:1px;">ID</button>
                            </td>
                        </tr>
                        <tr>
                            <td style="color:var(--gold);font-weight:700;white-space:nowrap;">#CN-9849</td>
                            <td><strong>Dev Patel</strong><br><span style="font-size:0.6rem;color:var(--slate);">dev.p@cms.edu</span></td>
                            <td style="white-space:nowrap;">Ph.D CS · Year 2</td><td>Main</td>
                            <td style="color:#64ffda;font-weight:800;">9.10</td>
                            <td style="color:#64ffda;font-weight:700;">97.4%</td>
                            <td><span class="status-pill status-verified" style="font-size:0.6rem;">PAID</span></td>
                            <td><span class="status-pill status-verified" style="font-size:0.6rem;">ACTIVE</span></td>
                            <td style="white-space:nowrap;">
                                <button class="profile-trigger" data-id="#CN-9849" style="display:inline-block;padding:3px 9px;font-size:0.58rem;font-weight:700;border-radius:6px;border:1px solid rgba(184,134,11,0.4);background:rgba(184,134,11,0.15);color:var(--gold);cursor:pointer;margin-right:3px;font-family:Inter,sans-serif;letter-spacing:1px;">VIEW</button>
                                <button class="action-trigger" data-action="bonafide" style="display:inline-block;padding:3px 9px;font-size:0.58rem;font-weight:700;border-radius:6px;border:1px solid rgba(184,134,11,0.3);background:rgba(184,134,11,0.1);color:var(--gold);cursor:pointer;font-family:Inter,sans-serif;letter-spacing:1px;">BON</button>
                            </td>
                        </tr>
                        <tr style="background:rgba(255,77,77,0.03);">
                            <td style="color:var(--gold);font-weight:700;white-space:nowrap;">#CN-9855</td>
                            <td><strong>Anika Rao</strong><br><span style="font-size:0.6rem;color:var(--slate);">anika.r@cms.edu</span></td>
                            <td style="white-space:nowrap;">MBA Finance · Yr1 S2</td><td>City</td>
                            <td style="color:#ffab00;font-weight:800;">6.54</td>
                            <td style="color:#ff4d4d;font-weight:700;">68.2% ⚠</td>
                            <td><span class="status-pill" style="font-size:0.6rem;background:rgba(255,77,77,0.12);color:#ff4d4d;border-color:rgba(255,77,77,0.3);">OVERDUE</span></td>
                            <td><span class="status-pill status-pending" style="font-size:0.6rem;">AT_RISK</span></td>
                            <td style="white-space:nowrap;">
                                <button class="profile-trigger" data-id="#CN-9855" style="display:inline-block;padding:3px 9px;font-size:0.58rem;font-weight:700;border-radius:6px;border:1px solid rgba(184,134,11,0.4);background:rgba(184,134,11,0.15);color:var(--gold);cursor:pointer;margin-right:3px;font-family:Inter,sans-serif;letter-spacing:1px;">VIEW</button>
                                <button class="action-trigger" data-action="send_notice" style="display:inline-block;padding:3px 9px;font-size:0.58rem;font-weight:700;border-radius:6px;border:1px solid rgba(255,77,77,0.3);background:rgba(255,77,77,0.1);color:#ff4d4d;cursor:pointer;font-family:Inter,sans-serif;letter-spacing:1px;">NOTICE</button>
                            </td>
                        </tr>
                        <tr>
                            <td style="color:var(--gold);font-weight:700;white-space:nowrap;">#CN-9862</td>
                            <td><strong>Rohan Joshi</strong><br><span style="font-size:0.6rem;color:var(--slate);">rohan.j@cms.edu</span></td>
                            <td style="white-space:nowrap;">B.Tech CS · Yr1 S2</td><td>North</td>
                            <td style="color:var(--gold);font-weight:800;">7.95</td>
                            <td style="color:#64ffda;font-weight:700;">90.1%</td>
                            <td><span class="status-pill status-verified" style="font-size:0.6rem;">PAID</span></td>
                            <td><span class="status-pill status-verified" style="font-size:0.6rem;">ACTIVE</span></td>
                            <td style="white-space:nowrap;">
                                <button class="profile-trigger" data-id="#CN-9862" style="display:inline-block;padding:3px 9px;font-size:0.58rem;font-weight:700;border-radius:6px;border:1px solid rgba(184,134,11,0.4);background:rgba(184,134,11,0.15);color:var(--gold);cursor:pointer;margin-right:3px;font-family:Inter,sans-serif;letter-spacing:1px;">VIEW</button>
                                <button class="action-trigger" data-action="download_id" style="display:inline-block;padding:3px 9px;font-size:0.58rem;font-weight:700;border-radius:6px;border:1px solid rgba(100,255,218,0.3);background:rgba(100,255,218,0.1);color:#64ffda;cursor:pointer;font-family:Inter,sans-serif;letter-spacing:1px;">ID</button>
                            </td>
                        </tr>
                        <tr>
                            <td style="color:var(--gold);font-weight:700;white-space:nowrap;">#CN-9868</td>
                            <td><strong>Shreya Nair</strong><br><span style="font-size:0.6rem;color:var(--slate);">shreya.n@cms.edu</span></td>
                            <td style="white-space:nowrap;">B.Com · Yr1 S1</td><td>Main</td>
                            <td style="color:var(--gold);font-weight:800;">7.70</td>
                            <td style="color:#64ffda;font-weight:700;">95.8%</td>
                            <td><span class="status-pill status-verified" style="font-size:0.6rem;">PAID</span></td>
                            <td><span class="status-pill status-verified" style="font-size:0.6rem;">ACTIVE</span></td>
                            <td style="white-space:nowrap;">
                                <button class="profile-trigger" data-id="#CN-9868" style="display:inline-block;padding:3px 9px;font-size:0.58rem;font-weight:700;border-radius:6px;border:1px solid rgba(184,134,11,0.4);background:rgba(184,134,11,0.15);color:var(--gold);cursor:pointer;margin-right:3px;font-family:Inter,sans-serif;letter-spacing:1px;">VIEW</button>
                                <button class="action-trigger" data-action="bonafide" style="display:inline-block;padding:3px 9px;font-size:0.58rem;font-weight:700;border-radius:6px;border:1px solid rgba(184,134,11,0.3);background:rgba(184,134,11,0.1);color:var(--gold);cursor:pointer;font-family:Inter,sans-serif;letter-spacing:1px;">BON</button>
                            </td>
                        </tr>
                        <tr>
                            <td style="color:var(--gold);font-weight:700;white-space:nowrap;">#CN-9874</td>
                            <td><strong>Tarun Singh</strong><br><span style="font-size:0.6rem;color:var(--slate);">tarun.s@cms.edu</span></td>
                            <td style="white-space:nowrap;">Ph.D CS · Year 1</td><td>Main</td>
                            <td style="color:#64ffda;font-weight:800;">8.88</td>
                            <td style="color:#64ffda;font-weight:700;">99.1%</td>
                            <td><span class="status-pill status-verified" style="font-size:0.6rem;">PAID</span></td>
                            <td><span class="status-pill status-verified" style="font-size:0.6rem;">ACTIVE</span></td>
                            <td style="white-space:nowrap;">
                                <button class="profile-trigger" data-id="#CN-9874" style="display:inline-block;padding:3px 9px;font-size:0.58rem;font-weight:700;border-radius:6px;border:1px solid rgba(184,134,11,0.4);background:rgba(184,134,11,0.15);color:var(--gold);cursor:pointer;margin-right:3px;font-family:Inter,sans-serif;letter-spacing:1px;">VIEW</button>
                                <button class="action-trigger" data-action="download_id" style="display:inline-block;padding:3px 9px;font-size:0.58rem;font-weight:700;border-radius:6px;border:1px solid rgba(100,255,218,0.3);background:rgba(100,255,218,0.1);color:#64ffda;cursor:pointer;font-family:Inter,sans-serif;letter-spacing:1px;">ID</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>

            <!-- Right Sidebar -->
            <div style="display: flex; flex-direction: column; gap: 18px;">

                <!-- Program Distribution -->
                <div style="background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); padding: 20px;">
                    <h4 style="font-size: 0.8rem; font-weight: 700; color: var(--gold); margin-bottom: 16px;">PROGRAM DISTRIBUTION</h4>
                    <div style="display: flex; flex-direction: column; gap: 12px; font-size: 0.72rem;">
                        <div>
                            <div style="display:flex;justify-content:space-between;margin-bottom:4px;"><span>B.Tech CS</span><span style="font-weight:800;color:#64ffda;">4,120 · 40%</span></div>
                            <div style="height:5px;background:rgba(255,255,255,0.08);border-radius:3px;"><div style="width:80%;height:100%;background:#64ffda;border-radius:3px;"></div></div>
                        </div>
                        <div>
                            <div style="display:flex;justify-content:space-between;margin-bottom:4px;"><span>B.Com</span><span style="font-weight:800;color:var(--gold);">3,085 · 30%</span></div>
                            <div style="height:5px;background:rgba(255,255,255,0.08);border-radius:3px;"><div style="width:60%;height:100%;background:var(--gold);border-radius:3px;"></div></div>
                        </div>
                        <div>
                            <div style="display:flex;justify-content:space-between;margin-bottom:4px;"><span>MBA Finance</span><span style="font-weight:800;color:#ffab00;">2,050 · 20%</span></div>
                            <div style="height:5px;background:rgba(255,255,255,0.08);border-radius:3px;"><div style="width:40%;height:100%;background:#ffab00;border-radius:3px;"></div></div>
                        </div>
                        <div>
                            <div style="display:flex;justify-content:space-between;margin-bottom:4px;"><span>Ph.D</span><span style="font-weight:800;">990 · 10%</span></div>
                            <div style="height:5px;background:rgba(255,255,255,0.08);border-radius:3px;"><div style="width:20%;height:100%;background:rgba(255,255,255,0.3);border-radius:3px;"></div></div>
                        </div>
                    </div>
                </div>

                <!-- Campus Spread -->
                <div style="background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); padding: 20px;">
                    <h4 style="font-size: 0.8rem; font-weight: 700; color: var(--gold); margin-bottom: 14px;">CAMPUS SPREAD</h4>
                    <div style="display:flex;flex-direction:column;gap:9px;font-size:0.72rem;">
                        <div style="display:flex;justify-content:space-between;padding:8px 12px;background:rgba(100,255,218,0.05);border-radius:8px;border-left:3px solid var(--gold);"><span>Main Campus</span><span style="font-weight:800;color:#64ffda;">5,820</span></div>
                        <div style="display:flex;justify-content:space-between;padding:8px 12px;background:rgba(100,255,218,0.05);border-radius:8px;border-left:3px solid #64ffda;"><span>City Campus</span><span style="font-weight:800;color:#64ffda;">2,740</span></div>
                        <div style="display:flex;justify-content:space-between;padding:8px 12px;background:rgba(100,255,218,0.05);border-radius:8px;border-left:3px solid #ffab00;"><span>North Campus</span><span style="font-weight:800;color:#ffab00;">1,685</span></div>
                    </div>
                </div>

                <!-- Flagged Students Alert Panel -->
                <div style="background:rgba(255,77,77,0.04);border-radius:16px;border:1px solid rgba(255,77,77,0.2);padding:20px;flex:1;">
                    <h4 style="font-size:0.8rem;font-weight:700;color:#ff4d4d;margin-bottom:14px;">⚠ FLAGGED STUDENTS</h4>
                    <div style="display:flex;flex-direction:column;gap:10px;font-size:0.68rem;">
                        <div style="padding:10px;background:rgba(255,77,77,0.06);border-radius:8px;border-left:3px solid #ff4d4d;">
                            <div style="font-weight:700;color:var(--white);">Kabir Mehta <span style="color:#ff4d4d;">#CN-9825</span></div>
                            <div style="color:var(--slate);margin-top:2px;">Att. 71.4% · Fee partial</div>
                        </div>
                        <div style="padding:10px;background:rgba(255,77,77,0.06);border-radius:8px;border-left:3px solid #ff4d4d;">
                            <div style="font-weight:700;color:var(--white);">Anika Rao <span style="color:#ff4d4d;">#CN-9855</span></div>
                            <div style="color:var(--slate);margin-top:2px;">Att. 68.2% · Fee overdue</div>
                        </div>
                        <div style="padding:10px;background:rgba(255,171,0,0.06);border-radius:8px;border-left:3px solid #ffab00;">
                            <div style="font-weight:700;color:var(--white);">Arjun Verma <span style="color:#ffab00;">#CN-9836</span></div>
                            <div style="color:var(--slate);margin-top:2px;">Fee overdue · 2nd notice due</div>
                        </div>
                        <button class="login-btn action-trigger" data-action="export_excel" style="margin-top:8px;font-size:0.65rem;padding:7px 12px;">⬇ EXPORT_DEFAULTER_LIST</button>
                    </div>
                </div>

            </div>
        </div>
    `,

    "Admissions": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800;">Admissions Command Centre</h1>
            <div class="filters-bar" style="margin-top: 20px; background: var(--glass); padding: 18px 22px; border-radius: 12px; display: flex; gap: 12px; align-items: center; border: 1px solid var(--glass-border);">
                <select class="login-input" style="margin: 0; padding: 8px 14px; font-size: 0.72rem;"><option>AY 2026-27</option><option>AY 2025-26</option></select>
                <select class="login-input" style="margin: 0; padding: 8px 14px; font-size: 0.72rem;"><option>All Campuses</option><option>Main Campus</option><option>City Campus</option><option>North Campus</option></select>
                <select class="login-input" style="margin: 0; padding: 8px 14px; font-size: 0.72rem;"><option>All Programs</option><option>B.Tech CS</option><option>MBA Finance</option><option>B.Com</option><option>Ph.D</option></select>
                <select class="login-input" style="margin: 0; padding: 8px 14px; font-size: 0.72rem;"><option>All Stages</option><option>Lead</option><option>In Review</option><option>Verified</option><option>Offered</option><option>Converted</option></select>
                <input type="text" placeholder="🔍  Search applicant name or ID..." class="login-input" style="margin: 0; padding: 8px 14px; font-size: 0.72rem; flex: 1;" />
                <button class="login-btn action-trigger" data-action="new_applicant" style="width: auto; padding: 8px 20px; font-size: 0.72rem; white-space: nowrap;">+ NEW_APPLICANT</button>
                <button class="login-btn action-trigger" data-action="export_excel" style="width: auto; padding: 8px 18px; font-size: 0.72rem; background: var(--gold); color: var(--navy-dark); white-space: nowrap;">⬇ EXPORT</button>
            </div>
        </div>

        <!-- KPI Row -->
        <div class="kpi-grid" style="margin-top: 28px; grid-template-columns: repeat(6, 1fr); gap: 14px;">
            <div class="kpi-card" style="padding: 18px;">
                <span class="kpi-label">Total Leads</span>
                <span class="kpi-val" style="font-size: 1.8rem;">4,240</span>
                <div style="font-size: 0.6rem; color: #64ffda; margin-top: 4px;">↑ 18% vs last AY</div>
            </div>
            <div class="kpi-card" style="padding: 18px;">
                <span class="kpi-label">In Review</span>
                <span class="kpi-val" style="font-size: 1.8rem;">812</span>
                <div style="font-size: 0.6rem; color: #ffab00; margin-top: 4px;">Docs pending: 124</div>
            </div>
            <div class="kpi-card" style="padding: 18px;">
                <span class="kpi-label">Doc Verified</span>
                <span class="kpi-val" style="font-size: 1.8rem;">450</span>
                <div style="font-size: 0.6rem; color: #64ffda; margin-top: 4px;">Ready for offer</div>
            </div>
            <div class="kpi-card" style="padding: 18px;">
                <span class="kpi-label">Seat Offered</span>
                <span class="kpi-val" style="font-size: 1.8rem;">310</span>
                <div style="font-size: 0.6rem; color: #ffab00; margin-top: 4px;">Response awaited: 80</div>
            </div>
            <div class="kpi-card" style="padding: 18px;">
                <span class="kpi-label">Converted</span>
                <span class="kpi-val" style="font-size: 1.8rem; color: var(--gold);">185</span>
                <div style="font-size: 0.6rem; color: var(--gold); margin-top: 4px;">Conv. rate: 32.4%</div>
            </div>
            <div class="kpi-card" style="padding: 18px; background: rgba(100,255,218,0.05); border-color: rgba(100,255,218,0.25);">
                <span class="kpi-label">Revenue Projected</span>
                <span class="kpi-val" style="font-size: 1.8rem; color: #64ffda;">$1.2M</span>
                <div style="font-size: 0.6rem; color: #64ffda; margin-top: 4px;">Verified deposits only</div>
            </div>
        </div>

        <!-- Pipeline Funnel bar -->
        <div style="margin-top: 22px; background: var(--glass); border-radius: 14px; border: 1px solid var(--glass-border); padding: 22px 28px;" class="slide-up">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                <h3 style="font-size: 0.85rem; font-weight: 800; color: var(--gold); letter-spacing: 0.5px;">ADMISSION PIPELINE — FUNNEL VIEW</h3>
                <span style="font-size: 0.65rem; color: var(--slate);">AY 2026-27 · All Campuses</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0;">
                <div style="flex: 4.24; background: linear-gradient(90deg, rgba(100,255,218,0.25), rgba(100,255,218,0.1)); border-radius: 8px 0 0 8px; padding: 12px 16px; text-align: center; border: 1px solid rgba(100,255,218,0.2);">
                    <p style="font-size: 0.65rem; color: #64ffda; font-weight: 700;">LEADS</p><p style="font-size: 1.1rem; font-weight: 900;">4,240</p>
                </div>
                <div style="flex: 0.5; text-align: center; color: var(--slate); font-size: 1rem;">▶</div>
                <div style="flex: 0.81; background: rgba(255,171,0,0.12); padding: 12px 10px; text-align: center; border: 1px solid rgba(255,171,0,0.2);">
                    <p style="font-size: 0.65rem; color: #ffab00; font-weight: 700;">REVIEW</p><p style="font-size: 1.1rem; font-weight: 900;">812</p>
                </div>
                <div style="flex: 0.5; text-align: center; color: var(--slate); font-size: 1rem;">▶</div>
                <div style="flex: 0.45; background: rgba(100,255,218,0.1); padding: 12px 10px; text-align: center; border: 1px solid rgba(100,255,218,0.18);">
                    <p style="font-size: 0.65rem; color: #64ffda; font-weight: 700;">VERIFIED</p><p style="font-size: 1.1rem; font-weight: 900;">450</p>
                </div>
                <div style="flex: 0.5; text-align: center; color: var(--slate); font-size: 1rem;">▶</div>
                <div style="flex: 0.31; background: rgba(184,134,11,0.12); padding: 12px 8px; text-align: center; border: 1px solid rgba(184,134,11,0.2);">
                    <p style="font-size: 0.65rem; color: var(--gold); font-weight: 700;">OFFERED</p><p style="font-size: 1.1rem; font-weight: 900;">310</p>
                </div>
                <div style="flex: 0.5; text-align: center; color: var(--slate); font-size: 1rem;">▶</div>
                <div style="flex: 0.185; background: linear-gradient(90deg, rgba(184,134,11,0.2), rgba(184,134,11,0.35)); border-radius: 0 8px 8px 0; padding: 12px 8px; text-align: center; border: 1px solid rgba(184,134,11,0.35);">
                    <p style="font-size: 0.65rem; color: var(--gold); font-weight: 700;">ENROLLED</p><p style="font-size: 1.1rem; font-weight: 900; color: var(--gold);">185</p>
                </div>
            </div>
        </div>

        <!-- Main Grid: Applicant Pipeline + Sidebar Stats -->
        <div style="display: grid; grid-template-columns: 1fr 320px; gap: 20px; margin-top: 22px;" class="slide-up">

            <!-- Applicant Pipeline Table -->
            <div style="background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
                <div style="padding: 18px 22px; border-bottom: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center;">
                    <h3 style="font-size: 0.88rem; font-weight: 700; color: var(--gold);">Active Applicant Pipeline</h3>
                    <span class="status-pill status-pending" style="font-size: 0.65rem;">10 of 4,240 shown</span>
                </div>
                <table class="data-table" style="font-size: 0.72rem;">
                    <thead>
                        <tr>
                            <th>App ID</th>
                            <th>Applicant</th>
                            <th>Program Applied</th>
                            <th>Campus</th>
                            <th>Stage</th>
                            <th>Merit Score</th>
                            <th>Counsellor</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9844</td>
                            <td><strong>Sarah Jenkins</strong><br><span style="font-size:0.6rem;color:var(--slate);">sarah.j@gmail.com</span></td>
                            <td>B.Tech CS</td><td>Main</td>
                            <td><span class="status-pill status-pending" style="font-size:0.6rem;">IN_REVIEW</span></td>
                            <td style="font-weight:800;color:var(--gold);">82.4</td>
                            <td>Ms. Priya</td>
                            <td style="display:flex;gap:5px;flex-wrap:wrap;"><button class="login-btn action-trigger" data-action="doc_verify" style="padding:3px 8px;font-size:0.58rem;width:auto;">DOC_VERIFY</button></td>
                        </tr>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9845</td>
                            <td><strong>Rahul Desai</strong><br><span style="font-size:0.6rem;color:var(--slate);">rahul.d@yahoo.in</span></td>
                            <td>MBA Finance</td><td>City</td>
                            <td><span class="status-pill status-pending" style="font-size:0.6rem;">IN_REVIEW</span></td>
                            <td style="font-weight:800;color:var(--gold);">78.1</td>
                            <td>Mr. Rajan</td>
                            <td><button class="login-btn action-trigger" data-action="doc_verify" style="padding:3px 8px;font-size:0.58rem;width:auto;">DOC_VERIFY</button></td>
                        </tr>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9820</td>
                            <td><strong>Nadia Khan</strong><br><span style="font-size:0.6rem;color:var(--slate);">nadia.k@hotmail.com</span></td>
                            <td>B.Tech CS</td><td>Main</td>
                            <td><span class="status-pill status-verified" style="font-size:0.6rem;">VERIFIED</span></td>
                            <td style="font-weight:800;color:#64ffda;">91.6</td>
                            <td>Ms. Priya</td>
                            <td><button class="login-btn action-trigger" data-action="seat_offer" style="padding:3px 8px;font-size:0.58rem;width:auto;background:rgba(100,255,218,0.1);color:#64ffda;border-color:rgba(100,255,218,0.3);">SEAT_OFFER</button></td>
                        </tr>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9818</td>
                            <td><strong>Vikash Gupta</strong><br><span style="font-size:0.6rem;color:var(--slate);">vikash.g@gmail.com</span></td>
                            <td>B.Com</td><td>North</td>
                            <td><span class="status-pill status-verified" style="font-size:0.6rem;">VERIFIED</span></td>
                            <td style="font-weight:800;color:#64ffda;">74.9</td>
                            <td>Mr. Rajan</td>
                            <td><button class="login-btn action-trigger" data-action="seat_offer" style="padding:3px 8px;font-size:0.58rem;width:auto;background:rgba(100,255,218,0.1);color:#64ffda;border-color:rgba(100,255,218,0.3);">SEAT_OFFER</button></td>
                        </tr>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9801</td>
                            <td><strong>Divya Srinivas</strong><br><span style="font-size:0.6rem;color:var(--slate);">divya.s@outlook.com</span></td>
                            <td>MBA Finance</td><td>Main</td>
                            <td><span class="status-pill" style="font-size:0.6rem;background:rgba(184,134,11,0.15);color:var(--gold);border-color:rgba(184,134,11,0.3);">OFFERED</span></td>
                            <td style="font-weight:800;color:var(--gold);">88.3</td>
                            <td>Dr. Sharma</td>
                            <td><button class="login-btn action-trigger" data-action="convert_applicant" style="padding:3px 8px;font-size:0.58rem;width:auto;background:rgba(184,134,11,0.15);color:var(--gold);border-color:rgba(184,134,11,0.3);">ENROLL</button></td>
                        </tr>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9798</td>
                            <td><strong>Omar Farouk</strong><br><span style="font-size:0.6rem;color:var(--slate);">omar.f@gmail.com</span></td>
                            <td>B.Tech CS</td><td>City</td>
                            <td><span class="status-pill" style="font-size:0.6rem;background:rgba(184,134,11,0.15);color:var(--gold);border-color:rgba(184,134,11,0.3);">OFFERED</span></td>
                            <td style="font-weight:800;color:var(--gold);">85.7</td>
                            <td>Ms. Priya</td>
                            <td><button class="login-btn action-trigger" data-action="convert_applicant" style="padding:3px 8px;font-size:0.58rem;width:auto;background:rgba(184,134,11,0.15);color:var(--gold);border-color:rgba(184,134,11,0.3);">ENROLL</button></td>
                        </tr>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9791</td>
                            <td><strong>Preethi Nair</strong><br><span style="font-size:0.6rem;color:var(--slate);">preethi@gmail.com</span></td>
                            <td>Ph.D CS</td><td>Main</td>
                            <td><span class="status-pill status-pending" style="font-size:0.6rem;">IN_REVIEW</span></td>
                            <td style="font-weight:800;">80.0</td>
                            <td>Dr. Sharma</td>
                            <td><button class="login-btn action-trigger" data-action="doc_verify" style="padding:3px 8px;font-size:0.58rem;width:auto;">DOC_VERIFY</button></td>
                        </tr>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9785</td>
                            <td><strong>Aiden Cruz</strong><br><span style="font-size:0.6rem;color:var(--slate);">aiden.c@yahoo.com</span></td>
                            <td>B.Com</td><td>City</td>
                            <td><span class="status-pill status-verified" style="font-size:0.6rem;">VERIFIED</span></td>
                            <td style="font-weight:800;color:#64ffda;">69.4</td>
                            <td>Mr. Rajan</td>
                            <td><button class="login-btn action-trigger" data-action="seat_offer" style="padding:3px 8px;font-size:0.58rem;width:auto;background:rgba(100,255,218,0.1);color:#64ffda;border-color:rgba(100,255,218,0.3);">SEAT_OFFER</button></td>
                        </tr>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9779</td>
                            <td><strong>Meena Pillai</strong><br><span style="font-size:0.6rem;color:var(--slate);">meena.p@gmail.com</span></td>
                            <td>MBA Finance</td><td>North</td>
                            <td><span class="status-pill" style="font-size:0.6rem;background:rgba(100,255,218,0.12);color:#64ffda;border-color:rgba(100,255,218,0.3);">ENROLLED</span></td>
                            <td style="font-weight:800;color:#64ffda;">92.1</td>
                            <td>Ms. Priya</td>
                            <td><button class="login-btn action-trigger" data-action="download_id" style="padding:3px 8px;font-size:0.58rem;width:auto;">DOWNLOAD_ID</button></td>
                        </tr>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9770</td>
                            <td><strong>Harut Baghdasaryan</strong><br><span style="font-size:0.6rem;color:var(--slate);">harut.b@mail.am</span></td>
                            <td>B.Tech CS</td><td>Main</td>
                            <td><span class="status-pill status-pending" style="font-size:0.6rem;">IN_REVIEW</span></td>
                            <td style="font-weight:800;">76.5</td>
                            <td>Dr. Sharma</td>
                            <td><button class="login-btn action-trigger" data-action="doc_verify" style="padding:3px 8px;font-size:0.58rem;width:auto;">DOC_VERIFY</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Right sidebar: Source Stats + Counsellor Feed -->
            <div style="display: flex; flex-direction: column; gap: 18px;">

                <!-- Source-wise Conversion -->
                <div style="background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); padding: 20px;">
                    <h4 style="font-size: 0.8rem; font-weight: 700; color: var(--gold); margin-bottom: 16px; letter-spacing: 0.5px;">SOURCE CONVERSION</h4>
                    <div style="display: flex; flex-direction: column; gap: 12px; font-size: 0.72rem;">
                        <div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;"><span>Organic Search</span><span style="color:#64ffda;font-weight:800;">42%</span></div>
                            <div style="height: 5px; background: rgba(255,255,255,0.08); border-radius: 3px;"><div style="width:84%;height:100%;background:#64ffda;border-radius:3px;"></div></div>
                        </div>
                        <div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;"><span>Direct Referrals</span><span style="color:var(--gold);font-weight:800;">68%</span></div>
                            <div style="height: 5px; background: rgba(255,255,255,0.08); border-radius: 3px;"><div style="width:95%;height:100%;background:var(--gold);border-radius:3px;"></div></div>
                        </div>
                        <div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;"><span>Social Media</span><span style="color:#64ffda;font-weight:800;">28%</span></div>
                            <div style="height: 5px; background: rgba(255,255,255,0.08); border-radius: 3px;"><div style="width:56%;height:100%;background:#64ffda;border-radius:3px;"></div></div>
                        </div>
                        <div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;"><span>Education Fairs</span><span style="color:#ffab00;font-weight:800;">35%</span></div>
                            <div style="height: 5px; background: rgba(255,255,255,0.08); border-radius: 3px;"><div style="width:70%;height:100%;background:#ffab00;border-radius:3px;"></div></div>
                        </div>
                        <div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;"><span>Agent Network</span><span style="color:var(--gold);font-weight:800;">55%</span></div>
                            <div style="height: 5px; background: rgba(255,255,255,0.08); border-radius: 3px;"><div style="width:78%;height:100%;background:var(--gold);border-radius:3px;"></div></div>
                        </div>
                    </div>
                </div>

                <!-- Program-wise seats -->
                <div style="background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); padding: 20px;">
                    <h4 style="font-size: 0.8rem; font-weight: 700; color: var(--gold); margin-bottom: 16px;">SEAT UTILISATION</h4>
                    <div style="display: flex; flex-direction: column; gap: 10px; font-size: 0.72rem;">
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: rgba(100,255,218,0.05); border-radius: 8px; border-left: 3px solid var(--gold);">
                            <span>B.Tech CS</span>
                            <div style="text-align: right;"><span style="font-weight:800;color:#64ffda;">118</span><span style="color:var(--slate);">/120</span></div>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: rgba(100,255,218,0.05); border-radius: 8px; border-left: 3px solid #64ffda;">
                            <span>MBA Finance</span>
                            <div style="text-align: right;"><span style="font-weight:800;color:#64ffda;">54</span><span style="color:var(--slate);">/60</span></div>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: rgba(100,255,218,0.05); border-radius: 8px; border-left: 3px solid #ffab00;">
                            <span>B.Com</span>
                            <div style="text-align: right;"><span style="font-weight:800;color:#ffab00;">72</span><span style="color:var(--slate);">/90</span></div>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: rgba(100,255,218,0.05); border-radius: 8px; border-left: 3px solid rgba(255,255,255,0.2);">
                            <span>Ph.D</span>
                            <div style="text-align: right;"><span style="font-weight:800;">18</span><span style="color:var(--slate);">/24</span></div>
                        </div>
                    </div>
                </div>

                <!-- Counsellor Activity Feed -->
                <div style="background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); padding: 20px; flex: 1;">
                    <h4 style="font-size: 0.8rem; font-weight: 700; color: var(--gold); margin-bottom: 14px;">COUNSELLOR ACTIVITY</h4>
                    <div style="display: flex; flex-direction: column; gap: 10px; font-size: 0.68rem; color: var(--slate);">
                        <div style="padding: 10px 0; border-bottom: 1px solid var(--glass-border); display: flex; gap: 10px;">
                            <span style="font-size: 0.8rem;">📋</span>
                            <div><span style="color: var(--white); font-weight: 600;">Ms. Priya</span> verified docs for <span style="color:#64ffda;">Nadia Khan</span><br><span style="font-size:0.6rem;">2 min ago · #L-9820</span></div>
                        </div>
                        <div style="padding: 10px 0; border-bottom: 1px solid var(--glass-border); display: flex; gap: 10px;">
                            <span style="font-size: 0.8rem;">🎯</span>
                            <div><span style="color: var(--white); font-weight: 600;">Dr. Sharma</span> issued seat offer to <span style="color:var(--gold);">Divya Srinivas</span><br><span style="font-size:0.6rem;">18 min ago · #L-9801</span></div>
                        </div>
                        <div style="padding: 10px 0; border-bottom: 1px solid var(--glass-border); display: flex; gap: 10px;">
                            <span style="font-size: 0.8rem;">✅</span>
                            <div><span style="color: var(--white); font-weight: 600;">Ms. Priya</span> enrolled <span style="color:#64ffda;">Meena Pillai</span> — SIS created<br><span style="font-size:0.6rem;">1 hr ago · #L-9779</span></div>
                        </div>
                        <div style="padding: 10px 0; display: flex; gap: 10px;">
                            <span style="font-size: 0.8rem;">📞</span>
                            <div><span style="color: var(--white); font-weight: 600;">Mr. Rajan</span> followed up with <span style="color:#ffab00;">Rahul Desai</span><br><span style="font-size:0.6rem;">2 hr ago · #L-9845</span></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `,
    "Academics": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800;">Academic Governance Hub</h1>
            <div class="filters-bar" style="margin-top: 20px; background: var(--glass); padding: 20px; border-radius: 12px; display: flex; gap: 15px; border: 1px solid var(--glass-border);">
                <select class="login-input" style="margin: 0; padding: 8px 15px; font-size: 0.75rem;"><option>Main Campus</option><option>City Campus</option><option>North Campus</option></select>
                <select class="login-input" style="margin: 0; padding: 8px 15px; font-size: 0.75rem;"><option>AY 2026-27</option><option>AY 2025-26</option></select>
                <button class="login-btn action-trigger" data-action="add_program" style="width: auto; padding: 8px 20px; font-size: 0.75rem;">+ ADD_PROGRAM</button>
                <button class="login-btn" style="width: auto; padding: 8px 20px; font-size: 0.75rem; background: var(--gold); color: var(--navy-dark);">⏬ EXPORT_CATALOG</button>
            </div>
        </div>

        <div class="kpi-grid" style="margin-top: 30px;">
            <div class="kpi-card"><span class="kpi-label">Programs</span><span class="kpi-val">12</span><div style="font-size:0.6rem;color:var(--gold);">UG · PG · PhD</div></div>
            <div class="kpi-card"><span class="kpi-label">Active Courses</span><span class="kpi-val">142</span><div style="font-size:0.6rem;color:#64ffda;">6-8 per semester</div></div>
            <div class="kpi-card"><span class="kpi-label">Sections</span><span class="kpi-val">48</span><div style="font-size:0.6rem;color:var(--white);">Across all campuses</div></div>
            <div class="kpi-card"><span class="kpi-label">Faculty Load</span><span class="kpi-val" style="color:var(--gold);">Optimal</span><div style="font-size:0.6rem;color:#64ffda;">~18 hrs/week avg</div></div>
        </div>

        <div class="slide-up" style="margin-top: 25px;">
            <!-- Programs tab -->
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-bottom: 25px;">
                <div style="background: var(--glass); padding: 22px; border-radius: 14px; border: 1px solid var(--glass-border); border-top: 3px solid var(--gold);">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <div>
                            <p style="font-size: 0.7rem; color: var(--gold); font-weight: 800; letter-spacing: 1px;">B.TECH</p>
                            <p style="font-size: 0.65rem; color: var(--slate); margin-top: 3px;">Computer Science & Engineering</p>
                        </div>
                        <span class="status-pill status-verified">UG</span>
                    </div>
                    <div style="margin-top: 15px; display: flex; gap: 20px;">
                        <div><p style="font-size: 0.6rem; color: var(--slate);">Seats</p><p style="font-size: 0.85rem; font-weight: 800;">120</p></div>
                        <div><p style="font-size: 0.6rem; color: var(--slate);">Filled</p><p style="font-size: 0.85rem; font-weight: 800; color: #64ffda;">118</p></div>
                        <div><p style="font-size: 0.6rem; color: var(--slate);">Semesters</p><p style="font-size: 0.85rem; font-weight: 800;">8</p></div>
                    </div>
                    <button class="login-btn" style="margin-top: 15px; font-size: 0.6rem; padding: 7px;">VIEW_COURSES</button>
                </div>
                <div style="background: var(--glass); padding: 22px; border-radius: 14px; border: 1px solid var(--glass-border); border-top: 3px solid #64ffda;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <div>
                            <p style="font-size: 0.7rem; color: #64ffda; font-weight: 800; letter-spacing: 1px;">MBA</p>
                            <p style="font-size: 0.65rem; color: var(--slate); margin-top: 3px;">Finance & Business Analytics</p>
                        </div>
                        <span class="status-pill status-verified">PG</span>
                    </div>
                    <div style="margin-top: 15px; display: flex; gap: 20px;">
                        <div><p style="font-size: 0.6rem; color: var(--slate);">Seats</p><p style="font-size: 0.85rem; font-weight: 800;">60</p></div>
                        <div><p style="font-size: 0.6rem; color: var(--slate);">Filled</p><p style="font-size: 0.85rem; font-weight: 800; color: #64ffda;">54</p></div>
                        <div><p style="font-size: 0.6rem; color: var(--slate);">Semesters</p><p style="font-size: 0.85rem; font-weight: 800;">4</p></div>
                    </div>
                    <button class="login-btn" style="margin-top: 15px; font-size: 0.6rem; padding: 7px;">VIEW_COURSES</button>
                </div>
                <div style="background: var(--glass); padding: 22px; border-radius: 14px; border: 1px solid var(--glass-border); border-top: 3px solid #ffab00;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <div>
                            <p style="font-size: 0.7rem; color: #ffab00; font-weight: 800; letter-spacing: 1px;">Ph.D</p>
                            <p style="font-size: 0.65rem; color: var(--slate); margin-top: 3px;">Advanced Research — 2 Departments</p>
                        </div>
                        <span class="status-pill status-pending">RESEARCH</span>
                    </div>
                    <div style="margin-top: 15px; display: flex; gap: 20px;">
                        <div><p style="font-size: 0.6rem; color: var(--slate);">Scholars</p><p style="font-size: 0.85rem; font-weight: 800;">24</p></div>
                        <div><p style="font-size: 0.6rem; color: var(--slate);">Guides</p><p style="font-size: 0.85rem; font-weight: 800;">12</p></div>
                        <div><p style="font-size: 0.6rem; color: var(--slate);">Dept.</p><p style="font-size: 0.85rem; font-weight: 800;">2</p></div>
                    </div>
                    <button class="login-btn" style="margin-top: 15px; font-size: 0.6rem; padding: 7px;">VIEW_SCHOLARS</button>
                </div>
            </div>

            <!-- Course list -->
            <div style="background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
                <div style="padding: 20px 25px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--glass-border);">
                    <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold);">Course Master — B.Tech CS · Sem 6</h3>
                    <button class="login-btn action-trigger" data-action="add_course" style="width: auto; padding: 6px 14px; font-size: 0.65rem;">+ ADD_COURSE</button>
                </div>
                <table class="data-table" style="font-size: 0.75rem;">
                    <thead><tr><th>Course Code</th><th>Subject</th><th>Credits</th><th>Faculty</th><th>Room</th><th>Section</th><th>Status</th><th>Action</th></tr></thead>
                    <tbody>
                        <tr><td>#CS-601</td><td>Design & Analysis of Algorithms</td><td>4</td><td>Dr. R. Verma</td><td>NL-402</td><td>CS-6A</td><td><span class="status-pill status-verified">ACTIVE</span></td><td><button class="login-btn" style="padding:4px 10px;font-size:0.6rem;width:auto;">EDIT</button></td></tr>
                        <tr><td>#CS-602</td><td>Machine Learning Fundamentals</td><td>3</td><td>Prof. A. Singh</td><td>ML-Lab 1</td><td>CS-6A</td><td><span class="status-pill status-verified">ACTIVE</span></td><td><button class="login-btn" style="padding:4px 10px;font-size:0.6rem;width:auto;">EDIT</button></td></tr>
                        <tr><td>#CS-603</td><td>Computer Networks</td><td>4</td><td>Dr. M. Khan</td><td>NL-204</td><td>CS-6B</td><td><span class="status-pill status-verified">ACTIVE</span></td><td><button class="login-btn" style="padding:4px 10px;font-size:0.6rem;width:auto;">EDIT</button></td></tr>
                        <tr><td>#CS-604</td><td>Software Engineering</td><td>3</td><td>Prof. P. Nair</td><td>NL-301</td><td>CS-6B</td><td><span class="status-pill status-verified">ACTIVE</span></td><td><button class="login-btn" style="padding:4px 10px;font-size:0.6rem;width:auto;">EDIT</button></td></tr>
                        <tr><td>#CS-605</td><td>Database Systems</td><td>4</td><td>Dr. R. Verma</td><td>DB-Lab</td><td>CS-6A/B</td><td><span class="status-pill status-verified">ACTIVE</span></td><td><button class="login-btn" style="padding:4px 10px;font-size:0.6rem;width:auto;">EDIT</button></td></tr>
                        <tr><td>#CS-606</td><td>Ethics in Computing</td><td>2</td><td>Prof. S. Reddy</td><td>NL-102</td><td>CS-6A/B</td><td><span class="status-pill status-pending">DRAFT</span></td><td><button class="login-btn action-trigger" data-action="publish_course" style="padding:4px 10px;font-size:0.6rem;width:auto;">PUBLISH</button></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    `,
    "Exams": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800;">Examination Matrix</h1>
            <div class="filters-bar" style="margin-top: 20px; background: var(--glass); padding: 20px; border-radius: 12px; display: flex; gap: 15px; border: 1px solid var(--glass-border);">
                <select class="login-input" style="margin: 0; padding: 8px 15px; font-size: 0.75rem;"><option>B.Tech CS - Sem 6</option></select>
                <button class="login-btn" style="width: auto; padding: 8px 20px; font-size: 0.75rem;"><i>📤</i> UPLOAD_MARKS_BULK</button>
                <button class="login-btn action-trigger" data-action="hall_ticket" style="width: auto; padding: 8px 20px; font-size: 0.75rem; background: var(--gold); color: var(--navy-dark);">GEN_HALL_TICKETS</button>
            </div>
        </div>

        <div class="kpi-grid" style="margin-top: 30px;">
            <div class="kpi-card"><span class="kpi-label">Papers Digitized</span><span class="kpi-val">100%</span></div>
            <div class="kpi-card"><span class="kpi-label">Evaluation Node</span><span class="kpi-val" style="color: var(--gold);">82.4%</span></div>
            <div class="kpi-card"><span class="kpi-label">Result Accuracy</span><span class="kpi-val">99.9%</span></div>
        </div>

        <div class="slide-up" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold); margin-bottom: 20px;">Result Publishing Queue</h3>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div style="padding: 15px; background: rgba(255,255,255,0.02); border-radius: 10px; border-left: 4px solid var(--gold); display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <p style="font-size: 0.75rem; font-weight: 600;">B.TECH CS | SEM 6</p>
                            <p style="font-size: 0.65rem; color: var(--slate);">External Theory • May 2026</p>
                        </div>
                        <button class="login-btn action-trigger" data-action="publish_results" style="padding: 5px 15px; font-size: 0.6rem; width: auto;">PUBLISH</button>
                    </div>
                    <div style="padding: 15px; background: rgba(255,255,255,0.02); border-radius: 10px; border-left: 4px solid #ffab00; display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <p style="font-size: 0.75rem; font-weight: 600;">MBA FINANCE | SEM 2</p>
                            <p style="font-size: 0.65rem; color: var(--slate);">Internal Lab • April 2026</p>
                        </div>
                        <button class="login-btn" style="padding: 5px 15px; font-size: 0.6rem; width: auto; opacity: 0.5;">IN_REVIEW</button>
                    </div>
                </div>
            </div>
            
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold); margin-bottom: 20px;">Student Performance Ledger</h3>
                <div style="overflow-x: auto;">
                    <table class="data-table" style="font-size: 0.7rem;">
                        <thead><tr><th>Scholar</th><th>SGPA</th><th>CGPA</th><th>Status</th></tr></thead>
                        <tbody>
                            <tr><td>Aarav M.</td><td>9.50</td><td>9.42</td><td><span class="status-pill status-verified">PASS</span></td></tr>
                            <tr><td>Isha K.</td><td>8.80</td><td>8.75</td><td><span class="status-pill status-verified">PASS</span></td></tr>
                            <tr><td>Zaid A.</td><td>9.20</td><td>9.15</td><td><span class="status-pill status-verified">PASS</span></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    "Fees": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800;">Fiscal Management Hub</h1>
            <div class="filters-bar" style="margin-top: 20px; background: var(--glass); padding: 20px; border-radius: 12px; display: flex; gap: 15px; border: 1px solid var(--glass-border);">
                <select class="login-input" style="margin: 0; padding: 8px 15px; font-size: 0.75rem;"><option>AY 2026-27</option></select>
                <button class="login-btn action-trigger" data-action="fee_demand" style="width: auto; padding: 8px 20px; font-size: 0.75rem;">GENERATE_FEE_DEMAND</button>
                <button class="login-btn" style="width: auto; padding: 8px 20px; font-size: 0.75rem; background: var(--gold); color: var(--navy-dark);"><i>📄</i> BULK_RECEIPTS</button>
            </div>
        </div>

        <div class="kpi-grid" style="margin-top: 30px;">
            <div class="kpi-card"><span class="kpi-label">Total Collections</span><span class="kpi-val">$4.12M</span></div>
            <div class="kpi-card"><span class="kpi-label">Receivables Node</span><span class="kpi-val" style="color: #ff4d4d;">$1.24M</span></div>
            <div class="kpi-card"><span class="kpi-label">Current Buffer</span><span class="kpi-val" style="color: var(--gold);">$850K</span></div>
        </div>

        <div class="slide-up" style="display: grid; grid-template-columns: 1fr 1.5fr; gap: 20px;">
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold); margin-bottom: 20px;">Institutional Fee Heads</h3>
                <div style="display: flex; flex-direction: column; gap: 15px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;">
                        <span style="font-size: 0.7rem; color: var(--white);">Tuition Node</span>
                        <span style="font-size: 0.8rem; font-weight: 800; color: var(--gold);">$2.8M</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;">
                        <span style="font-size: 0.7rem; color: var(--white);">Hostel Infrastructure</span>
                        <span style="font-size: 0.8rem; font-weight: 800; color: #64ffda;">$0.9M</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;">
                        <span style="font-size: 0.7rem; color: var(--white);">Transport/Logistics</span>
                        <span style="font-size: 0.8rem; font-weight: 800; color: var(--gold);">$0.4M</span>
                    </div>
                </div>
                <button class="login-btn" style="margin-top: 20px; font-size: 0.7rem; padding: 10px;">FINANCIAL_AUDIT_REPORT</button>
            </div>

            <div style="background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
                <h3 style="padding: 25px 25px 15px 25px; font-size: 0.9rem; font-weight: 700; color: var(--gold);">Recent Fiscal Transactions</h3>
                <div style="overflow-x: auto;">
                    <table class="data-table" style="font-size: 0.75rem; border: none; border-radius: 0;">
                        <thead><tr><th>TxID</th><th>Scholar</th><th>Head</th><th>Amount</th><th>Status</th></tr></thead>
                        <tbody>
                            <tr><td>#FT-8812</td><td>Aarav M.</td><td>Tuition</td><td>$4,500</td><td><span class="status-pill status-verified">SUCCESS</span></td></tr>
                            <tr><td>#FT-8813</td><td>Isha K.</td><td>Hostel</td><td>$1,200</td><td><span class="status-pill status-verified">SUCCESS</span></td></tr>
                            <tr><td>#FT-8814</td><td>Zaid A.</td><td>Tuition</td><td>$4,500</td><td><span class="status-pill status-pending">PENDING</span></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    "Finance": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800;">Institutional Finance Hub</h1>
            <div class="filters-bar" style="margin-top: 20px; background: var(--glass); padding: 20px; border-radius: 12px; display: flex; gap: 15px; border: 1px solid var(--glass-border);">
                <select class="login-input" style="margin: 0; padding: 8px 15px; font-size: 0.75rem;"><option>Consolidated View</option></select>
                <button class="login-btn" style="width: auto; padding: 8px 20px; font-size: 0.75rem; background: var(--gold); color: var(--navy-dark);"><i>📊</i> EXPORT_BALANCE_SHEET</button>
            </div>
        </div>

        <div class="kpi-grid" style="margin-top: 30px;">
            <div class="kpi-card"><span class="kpi-label">Institutional Net Worth</span><span class="kpi-val">$24.5M</span></div>
            <div class="kpi-card"><span class="kpi-label">Operating Margin</span><span class="kpi-val" style="color: #64ffda;">22.4%</span></div>
            <div class="kpi-card"><span class="kpi-label">Institutional Reserve</span><span class="kpi-val" style="color: var(--gold);">$4.8M</span></div>
        </div>

        <div class="slide-up" style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 20px;">
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold); margin-bottom: 20px;">Detailed Expenditure Ledger</h3>
                <div style="overflow-x: auto;">
                    <table class="data-table" style="font-size: 0.75rem;">
                        <thead><tr><th>Date</th><th>Category</th><th>Beneficiary</th><th>Amount</th><th>Status</th></tr></thead>
                        <tbody>
                            <tr><td>Feb 18, 2026</td><td>Faculty Payroll</td><td>Global Disbursement</td><td>$840,000</td><td><span class="status-pill status-verified">PAID</span></td></tr>
                            <tr><td>Feb 17, 2026</td><td>Infrastructure</td><td>Cloud Services Node</td><td>$12,400</td><td><span class="status-pill status-verified">PAID</span></td></tr>
                            <tr><td>Feb 15, 2026</td><td>Marketing</td><td>Admissions Campaign</td><td>$45,000</td><td><span class="status-pill status-pending">IN_RECON</span></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold); margin-bottom: 20px;">Departmental Allocations</h3>
                <div style="display: flex; flex-direction: column; gap: 15px;">
                    <div style="padding: 15px; background: rgba(100,255,218,0.05); border-radius: 10px; border-left: 4px solid #64ffda;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 0.75rem; font-weight: 700;">Academic Depts</span>
                            <span style="font-size: 0.8rem; font-weight: 800; color: #64ffda;">$1.2M</span>
                        </div>
                        <div style="height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; margin-top: 10px; overflow: hidden;">
                            <div style="width: 75%; height: 100%; background: #64ffda;"></div>
                        </div>
                    </div>
                    <div style="padding: 15px; background: rgba(255,171,0,0.05); border-radius: 10px; border-left: 4px solid var(--gold);">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 0.75rem; font-weight: 700;">Operational Overheads</span>
                            <span style="font-size: 0.8rem; font-weight: 800; color: var(--gold);">$450K</span>
                        </div>
                        <div style="height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; margin-top: 10px; overflow: hidden;">
                            <div style="width: 45%; height: 100%; background: var(--gold);"></div>
                        </div>
                    </div>
                </div>
                <button class="login-btn action-trigger" data-action="init_audit" style="margin-top: 20px; width: 100%;">REQUEST_INTERNAL_AUDIT</button>
            </div>
        </div>
    `,
    "HRMS": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800;">Human Capital Management</h1>
            <div class="filters-bar" style="margin-top: 20px; background: var(--glass); padding: 20px; border-radius: 12px; display: flex; gap: 15px; border: 1px solid var(--glass-border);">
                <select class="login-input" style="margin: 0; padding: 8px 15px; font-size: 0.75rem;"><option>All Campuses</option><option>Main Campus</option><option>City Campus</option><option>North Campus</option></select>
                <select class="login-input" style="margin: 0; padding: 8px 15px; font-size: 0.75rem;"><option>All Departments</option><option>Engineering</option><option>Commerce</option></select>
                <button class="login-btn action-trigger" data-action="export_payroll" style="width: auto; padding: 8px 20px; font-size: 0.75rem;">⏬ PAYROLL_REGISTER</button>
            </div>
        </div>

        <div class="kpi-grid" style="margin-top: 30px;">
            <div class="kpi-card"><span class="kpi-label">Headcount</span><span class="kpi-val">1,250</span><div style="font-size:0.6rem;color:var(--slate);">3 campuses</div></div>
            <div class="kpi-card"><span class="kpi-label">Attendance Rate</span><span class="kpi-val" style="color: #64ffda;">98%</span><div style="font-size:0.6rem;color:#64ffda;">Above 95% target</div></div>
            <div class="kpi-card"><span class="kpi-label">Leave Pending</span><span class="kpi-val" style="color: #ffab00;">6</span><div style="font-size:0.6rem;color:#ffab00;">Needs HOD approval</div></div>
            <div class="kpi-card"><span class="kpi-label">Payroll Ready</span><span class="kpi-val" style="color: var(--gold);">FEB 26</span><div style="font-size:0.6rem;color:var(--gold);">Cycle prepared</div></div>
        </div>

        <!-- Inner Tabs -->
        <div style="display: flex; gap: 8px; margin-top: 25px; margin-bottom: 20px;">
            <button class="login-btn inner-tab-trigger" data-view="HRMS" data-sub="Directory" style="font-size: 0.7rem; padding: 8px 18px; background: var(--gold); color: var(--navy-dark);">👥 Directory</button>
            <button class="login-btn inner-tab-trigger" data-view="HRMS" data-sub="Leave" style="font-size: 0.7rem; padding: 8px 18px; background: rgba(255,255,255,0.05); color: var(--slate);">🏖️ Leave Management</button>
            <button class="login-btn inner-tab-trigger" data-view="HRMS" data-sub="Payroll" style="font-size: 0.7rem; padding: 8px 18px; background: rgba(255,255,255,0.05); color: var(--slate);">💳 Payroll Run</button>
        </div>

        <div id="hrms-section-container" style="background: var(--glass); padding: 30px; border-radius: 16px; border: 1px solid var(--glass-border); min-height: 400px;">
            <!-- DYNAMIC HRMS CONTENT -->
        </div>
    `,
    "Reports": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800;">Institutional Reporting Hub</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Unified Analytics & Compliance Export Node 1.0</p>
        </div>

        <div style="margin-top: 30px; display: grid; grid-template-columns: 260px 1fr; gap: 30px;" class="slide-up">
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border); display: flex; flex-direction: column; gap: 20px;">
                <div>
                    <h4 style="font-size: 0.65rem; color: var(--gold); margin-bottom: 20px; font-weight: 800; letter-spacing: 1.5px;">REPORT_CATEGORIES</h4>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <button class="nav-item active inner-tab-trigger" data-view="Reports" data-sub="Admissions" style="font-size: 0.75rem; justify-content: flex-start; padding: 12px 15px;"><i>📈</i> Admissions & Leads</button>
                        <button class="nav-item inner-tab-trigger" data-view="Reports" data-sub="Academics" style="font-size: 0.75rem; justify-content: flex-start; padding: 12px 15px; color: var(--slate);"><i>🎓</i> Academic Progression</button>
                        <button class="nav-item inner-tab-trigger" data-view="Reports" data-sub="Revenue" style="font-size: 0.75rem; justify-content: flex-start; padding: 12px 15px; color: var(--slate);"><i>💰</i> Revenue & Dues</button>
                        <button class="nav-item inner-tab-trigger" data-view="Reports" data-sub="Staff" style="font-size: 0.75rem; justify-content: flex-start; padding: 12px 15px; color: var(--slate);"><i>👔</i> Staff Productivity</button>
                        <button class="nav-item inner-tab-trigger" data-view="Reports" data-sub="Compliance" style="font-size: 0.75rem; justify-content: flex-start; padding: 12px 15px; color: var(--slate);"><i>🏛️</i> Compliance Registry</button>
                    </div>
                </div>
                
                <div style="margin-top: auto; padding-top: 20px; border-top: 1px solid var(--glass-border);">
                    <h4 style="font-size: 0.65rem; color: var(--slate); margin-bottom: 15px; font-weight: 800;">SCHEDULED_TASKS</h4>
                    <div style="font-size: 0.7rem; color: var(--gold); border-left: 2px solid var(--gold); padding-left: 10px;">
                        Weekly Financial Recon<br>
                        <span style="color: var(--slate); font-size: 0.6rem;">Next: Monday 09:00 AM</span>
                    </div>
                </div>
            </div>

            <div id="reports-section-container" style="background: var(--glass); padding: 35px; border-radius: 16px; border: 1px solid var(--glass-border); min-height: 600px;">
                <!-- DYNAMIC REPORT CONTENT -->
            </div>
        </div>
    `,
    "Timetable": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800;">Institutional Timetable</h1>
            <div class="filters-bar" style="margin-top: 20px; background: var(--glass); padding: 20px; border-radius: 12px; display: flex; gap: 15px; border: 1px solid var(--glass-border);">
                <select class="login-input" style="margin: 0; padding: 8px 15px; font-size: 0.75rem;"><option>B.Tech CS - Sem 6</option></select>
                <select class="login-input" style="margin: 0; padding: 8px 15px; font-size: 0.75rem;"><option>Weekly View</option></select>
                <button class="login-btn" style="width: auto; padding: 8px 20px; font-size: 0.75rem;"><i>📥</i> DOWNLOAD_SCHEDULE</button>
            </div>
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
    "Settings": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800;">Institutional Settings Hub</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Governance, Branding & System Configuration Node</p>
        </div>

        <div style="margin-top: 30px; display: grid; grid-template-columns: 240px 1fr; gap: 30px;" class="slide-up">
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border); display: flex; flex-direction: column; gap: 8px;">
                <h4 style="font-size: 0.65rem; color: var(--gold); margin-bottom: 12px; font-weight: 800; letter-spacing: 1.5px;">CONFIGURATION_NODES</h4>
                <button class="nav-item active inner-tab-trigger" data-view="Settings" data-sub="Security" style="font-size: 0.75rem; justify-content: flex-start; padding: 12px 15px;"><i>🔐</i> Security Protocols</button>
                <button class="nav-item inner-tab-trigger" data-view="Settings" data-sub="Branding" style="font-size: 0.75rem; justify-content: flex-start; padding: 12px 15px; color: var(--slate);"><i>🎨</i> Institutional Branding</button>
                <button class="nav-item inner-tab-trigger" data-view="Settings" data-sub="System" style="font-size: 0.75rem; justify-content: flex-start; padding: 12px 15px; color: var(--slate);"><i>⚙️</i> System Parameters</button>
                <button class="nav-item inner-tab-trigger" data-view="Settings" data-sub="Preferences" style="font-size: 0.75rem; justify-content: flex-start; padding: 12px 15px; color: var(--slate);"><i>🎛️</i> UI Preferences</button>

                <div style="margin-top: auto; padding-top: 20px; border-top: 1px solid var(--glass-border);">
                    <p style="font-size: 0.6rem; color: var(--slate);">Build Node: v1.0.42</p>
                    <p style="font-size: 0.6rem; color: var(--gold); margin-top: 4px;">NEXUS_CORE: STABLE</p>
                </div>
            </div>

            <div id="settings-section-container" style="background: var(--glass); padding: 35px; border-radius: 16px; border: 1px solid var(--glass-border); min-height: 500px;">
                <!-- DYNAMIC SETTINGS CONTENT -->
            </div>
        </div>
    `,
    "Attendance": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800;">Registry: Student Presence</h1>
            <div class="filters-bar" style="margin-top: 20px; background: var(--glass); padding: 20px; border-radius: 12px; display: flex; gap: 15px; border: 1px solid var(--glass-border);">
                <select class="login-input" style="margin: 0; padding: 8px 15px; font-size: 0.75rem;"><option>B.Tech CS - Sem 6</option><option>MBA Finance - Sem 2</option></select>
                <select class="login-input" style="margin: 0; padding: 8px 15px; font-size: 0.75rem;"><option>Today (Feb 20, 2026)</option><option>This Week</option></select>
                <button class="login-btn action-trigger" data-action="mark_all_present" style="width: auto; padding: 8px 20px; font-size: 0.75rem;">✅ MARK_ALL_PRESENT</button>
                <button class="login-btn action-trigger" data-action="export_excel" style="width: auto; padding: 8px 20px; font-size: 0.75rem; margin-left: auto;">⏬ EXPORT_REGISTER</button>
            </div>
        </div>

        <div class="kpi-grid" style="margin-top: 30px;">
            <div class="kpi-card"><span class="kpi-label">Daily Avg</span><span class="kpi-val">94.2%</span><div style="font-size:0.6rem;color:#64ffda;">Above 90% target</div></div>
            <div class="kpi-card"><span class="kpi-label">Defaulters (&lt;75%)</span><span class="kpi-val" style="color: #ff4d4d;">12</span><div style="font-size:0.6rem;color:#ff4d4d;">Shortage notices due</div></div>
            <div class="kpi-card"><span class="kpi-label">Present Today</span><span class="kpi-val">118</span><div style="font-size:0.6rem;color:var(--gold);">of 120 enrolled</div></div>
        </div>

        <!-- Attendance Marking -->
        <div class="slide-up" style="margin-top: 20px; background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
            <div style="padding: 18px 22px; border-bottom: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold);">Today's Attendance Register — CS-6A</h3>
            </div>
            <div style="overflow-x: auto;">
                <table class="data-table" style="font-size: 0.75rem;">
                    <thead>
                        <tr><th>Scholar ID</th><th>Name</th><th>Overall %</th><th>Status</th><th>Mark Today</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>#CN-9822</td><td>Aarav Malhotra</td><td style="color:#64ffda;font-weight:800;">98.5%</td><td><span class="status-pill status-verified">PRESENT</span></td><td><button class="login-btn" style="padding:4px 12px;font-size:0.6rem;width:auto;">MOD</button></td></tr>
                        <tr><td>#CN-9823</td><td>Isha Kapur</td><td style="color:#ffab00;font-weight:800;">82.1%</td><td><span class="status-pill status-pending">UNMARKED</span></td><td><button class="login-btn action-trigger" data-action="mark_all_present" style="padding:4px 12px;font-size:0.6rem;width:auto;">MARK_P</button></td></tr>
                        <tr><td>#CN-9824</td><td>Riya Sharma</td><td style="color:var(--gold);font-weight:800;">91.3%</td><td><span class="status-pill status-verified">PRESENT</span></td><td><button class="login-btn" style="padding:4px 12px;font-size:0.6rem;width:auto;">MOD</button></td></tr>
                        <tr><td>#CN-9825</td><td>Kabir Mehta</td><td style="color:#ff4d4d;font-weight:800;">71.4%</td><td><span class="status-pill" style="background:rgba(255,77,77,0.1);color:#ff4d4d;border-color:#ff4d4d;">ABSENT</span></td><td><button class="login-btn" style="padding:4px 12px;font-size:0.6rem;width:auto;opacity:0.5;">ABSENT</button></td></tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Shortage / Defaulters List -->
        <div style="background: rgba(255,77,77,0.04); border-radius: 16px; border: 1px solid rgba(255,77,77,0.2); overflow: hidden; margin-top: 20px;">
            <div style="padding: 18px 22px; border-bottom: 1px solid rgba(255,77,77,0.2); display: flex; justify-content: space-between; align-items: center;">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: #ff4d4d;">⚠️ Defaulters List — Below 75% Attendance</h3>
                <button class="login-btn action-trigger" data-action="export_excel" style="width:auto;padding:6px 14px;font-size:0.65rem;">⏬ EXPORT_SHORTAGE</button>
            </div>
            <div style="overflow-x: auto;">
                <table class="data-table" style="font-size: 0.75rem;">
                    <thead><tr><th>Scholar ID</th><th>Name</th><th>Program</th><th>Attendance %</th><th>Classes Attended</th><th>Total Classes</th><th>Notice</th></tr></thead>
                    <tbody>
                        <tr><td>#CN-9825</td><td>Kabir Mehta</td><td>B.Tech CS</td><td style="color:#ff4d4d;font-weight:800;">71.4%</td><td>100</td><td>140</td><td><button class="login-btn action-trigger" data-action="send_notice" style="padding:4px 10px;font-size:0.6rem;width:auto;background:rgba(255,77,77,0.1);color:#ff4d4d;border-color:rgba(255,77,77,0.3);">SEND_NOTICE</button></td></tr>
                        <tr><td>#CN-9830</td><td>Anika Rao</td><td>MBA Finance</td><td style="color:#ff4d4d;font-weight:800;">68.2%</td><td>52</td><td>76</td><td><button class="login-btn action-trigger" data-action="send_notice" style="padding:4px 10px;font-size:0.6rem;width:auto;background:rgba(255,77,77,0.1);color:#ff4d4d;border-color:rgba(255,77,77,0.3);">SEND_NOTICE</button></td></tr>
                        <tr><td>#CN-9841</td><td>Farhan Sheikh</td><td>B.Tech CS</td><td style="color:#ff4d4d;font-weight:800;">72.9%</td><td>102</td><td>140</td><td><button class="login-btn action-trigger" data-action="send_notice" style="padding:4px 10px;font-size:0.6rem;width:auto;background:rgba(255,77,77,0.1);color:#ff4d4d;border-color:rgba(255,77,77,0.3);">SEND_NOTICE</button></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    `,
    "Home": () => `
        <div style="max-width: 600px; margin: 0 auto; padding-bottom: 50px;" class="slide-up">
            <div style="text-align: center; padding: 40px 0;">
                <h1 style="font-size: 1.5rem; font-weight: 800; color: var(--gold);">Student Portal</h1>
                <p style="color: var(--slate); font-size: 0.8rem;">Session Sync Active</p>
            </div>
            <div class="kpi-grid" style="grid-template-columns: 1fr 1fr; gap: 15px;">
                <div class="kpi-card" style="text-align: center;">
                    <span class="kpi-label">ATTENDANCE</span>
                    <span class="kpi-val" style="color: var(--gold);">94%</span>
                </div>
                <div class="kpi-card" style="text-align: center;">
                    <span class="kpi-label">FEES_DUE</span>
                    <span class="kpi-val" style="color: #ff4d4d;">$1,250</span>
                </div>
            </div>
            <div style="margin-top: 25px; background: var(--glass); border-radius: 16px; padding: 20px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 15px; color: var(--gold);">Upcoming Exams</h3>
                <div style="padding: 15px; background: rgba(100,255,218,0.05); border-radius: 10px; border-left: 4px solid var(--gold);">
                    <p style="font-size: 0.8rem; font-weight: 600; color: var(--white);">CS-601: Design & Analysis of Algorithms</p>
                    <p style="font-size: 0.7rem; color: var(--slate); margin-top: 4px;">Dec 20, 2026 | 09:00 AM | Room NL-402</p>
                </div>
            </div>
        </div>
    `
};
