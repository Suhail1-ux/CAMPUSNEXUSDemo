import { globalStats } from './mockData.js';

export const viewTemplates = {
    "Dashboard": (role = "Management") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.2rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">${role} Dashboard</h1>
            <p style="color: #555; font-size: 0.8rem; margin-top: 5px; font-weight: 700; letter-spacing: 2px;">Status: <span style="color: var(--vibrant-violet);">Active</span> &nbsp;|&nbsp; AY 2026-27</p>
        </div>
        
        <div class="kpi-grid grid-adaptive" style="margin-top: 40px;">
            <div class="kpi-card" style="border-top: 2px solid var(--vibrant-violet); padding: 18px 25px;">
                <span class="kpi-label" style="color: var(--vibrant-violet);">Total Enrollment</span>
                <span class="kpi-val">${globalStats.Students}</span>
                <div style="font-size: 0.65rem; color: var(--vibrant-violet); font-weight: 900; letter-spacing: 1px;">↑ 12% Growth</div>
            </div>
            <div class="kpi-card" style="border-top: 2px solid var(--vibrant-violet); padding: 18px 25px;">
                <span class="kpi-label" style="color: var(--vibrant-violet);">Active Faculty</span>
                <span class="kpi-val">${globalStats.Faculty}</span>
                <div class="status-pill" style="margin-top: 5px; background: rgba(0, 128, 128, 0.1); color: var(--vibrant-violet); border: 1px solid rgba(168, 85, 247, 0.2);">Optimal</div>
            </div>
            <div class="kpi-card">
                <span class="kpi-label">Current Applications</span>
                <span class="kpi-val">${globalStats.Admissions}</span>
                <div class="status-pill warning" style="margin-top: 5px; border-radius: 5px;">450 Pending Documents</div>
            </div>
            <div class="kpi-card" style="background: rgba(0, 128, 128, 0.02); padding: 18px 25px;">
                <span class="kpi-label">Revenue YTD</span>
                <span class="kpi-val" style="color: var(--vibrant-violet);">${globalStats.Revenue}</span>
                <div style="font-size: 0.65rem; color: var(--vibrant-violet); font-weight: 900;">↑ 8% Growth</div>
            </div>
        </div>

        <!-- Row 1: Analytical Insights (Graphs) -->
        <div class="grid-2-col" style="margin-top: 30px;">
            <div class="chart-container">
                <h3 class="chart-title">Campus Stats</h3>
                <div class="donut-grid grid-adaptive">
                    <div class="donut-chart-container">
                        <svg class="donut-svg" width="120" height="120">
                            <circle class="donut-ring" cx="60" cy="60" r="50"></circle>
                            <circle class="donut-segment" cx="60" cy="60" r="50" stroke-dasharray="314 314" stroke-dashoffset="18"></circle>
                        </svg>
                        <div class="donut-center-text">
                            <span class="donut-val">94%</span>
                            <span class="donut-label-inner">ATTND</span>
                        </div>
                        <span class="donut-caption">Attendance</span>
                    </div>
                    <div class="donut-chart-container">
                        <svg class="donut-svg" width="120" height="120">
                            <circle class="donut-ring" cx="60" cy="60" r="50"></circle>
                            <circle class="donut-segment" cx="60" cy="60" r="50" stroke-dasharray="314 314" stroke-dashoffset="69" style="stroke: #10b981;"></circle>
                        </svg>
                        <div class="donut-center-text">
                            <span class="donut-val">78%</span>
                            <span class="donut-label-inner">SYLL</span>
                        </div>
                        <span class="donut-caption">Syllabus</span>
                    </div>
                    <div class="donut-chart-container">
                        <svg class="donut-svg" width="120" height="120">
                            <circle class="donut-ring" cx="60" cy="60" r="50"></circle>
                            <circle class="donut-segment" cx="60" cy="60" r="50" stroke-dasharray="314 314" stroke-dashoffset="110" style="stroke: var(--gold);"></circle>
                        </svg>
                        <div class="donut-center-text">
                            <span class="donut-val">65%</span>
                            <span class="donut-label-inner">FEE</span>
                        </div>
                        <span class="donut-caption">Fees</span>
                    </div>
                    <div class="donut-chart-container">
                        <svg class="donut-svg" width="120" height="120">
                            <circle class="donut-ring" cx="60" cy="60" r="50"></circle>
                            <circle class="donut-segment" cx="60" cy="60" r="50" stroke-dasharray="314 314" stroke-dashoffset="28" style="stroke: var(--white);"></circle>
                        </svg>
                        <div class="donut-center-text">
                            <span class="donut-val">91%</span>
                            <span class="donut-label-inner">EXAM</span>
                        </div>
                        <span class="donut-caption">Results</span>
                    </div>
                </div>
            </div>

            <div class="chart-container">
                <h3 class="chart-title">Admission Trends</h3>
                <div class="bar-chart-grid">
                    <div class="bar-col">
                        <div class="bar-pill" style="height: 45%;"></div>
                        <span class="bar-name">Jan</span>
                    </div>
                    <div class="bar-col">
                        <div class="bar-pill" style="height: 65%;"></div>
                        <span class="bar-name">Feb</span>
                    </div>
                    <div class="bar-col">
                        <div class="bar-pill" style="height: 90%;"></div>
                        <span class="bar-name">Mar</span>
                    </div>
                    <div class="bar-col">
                        <div class="bar-pill" style="height: 75%;"></div>
                        <span class="bar-name">Apr</span>
                    </div>
                    <div class="bar-col">
                        <div class="bar-pill" style="height: 85%;"></div>
                        <span class="bar-name">May</span>
                    </div>
                    <div class="bar-col">
                        <div class="bar-pill" style="height: 60%;"></div>
                        <span class="bar-name">Jun</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Row 2: Funnel + Activity -->
        <div style="display: grid; grid-template-columns: 2fr 1.2fr; gap: 30px; margin-top: 30px;">
            <div style="background: var(--glass-white); padding: 25px; border-radius: 20px; border: 1px solid var(--glass-border); position: relative; overflow: hidden;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <h3 style="font-size: 0.8rem; font-weight: 900; letter-spacing: 3px; color: var(--vibrant-violet);">Student Trends</h3>
                    <div style="display: flex; gap: 20px;">
                        <span style="font-size: 0.65rem; color: #555; font-weight: 800;"><i style="color: var(--vibrant-violet); margin-right: 8px;">●</i>Undergrad</span>
                        <span style="font-size: 0.65rem; color: #444; font-weight: 800;"><i style="color: var(--white); margin-right: 8px;">●</i>Postgrad</span>
                    </div>
                </div>
                <div style="height: 300px; background: #f8fafc; border-radius: 20px; border: 1px solid #e2e8f0; position: relative; padding: 20px; box-sizing: border-box;">
                    <svg width="100%" height="240" viewBox="0 0 1000 240" preserveAspectRatio="none" style="overflow: visible;">
                        <defs>
                            <linearGradient id="grad-cyan" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style="stop-color:var(--electric-cyan);stop-opacity:0.2" />
                                <stop offset="100%" style="stop-color:var(--electric-cyan);stop-opacity:0" />
                            </linearGradient>
                            <linearGradient id="grad-violet" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style="stop-color:var(--vibrant-violet);stop-opacity:0.2" />
                                <stop offset="100%" style="stop-color:var(--vibrant-violet);stop-opacity:0" />
                            </linearGradient>
                        </defs>
                        <!-- Horizontal Grid Lines -->
                        <line x1="0" y1="200" x2="1000" y2="200" stroke="#f1f5f9" stroke-width="1" />
                        <line x1="0" y1="150" x2="1000" y2="150" stroke="#f1f5f9" stroke-width="1" />
                        <line x1="0" y1="100" x2="1000" y2="100" stroke="#f1f5f9" stroke-width="1" />
                        <line x1="0" y1="50" x2="1000" y2="50" stroke="#f1f5f9" stroke-width="1" />

                        <!-- Path 1: Undergrad (Cyan) -->
                        <path d="M0,180 C150,160 350,220 500,150 S850,140 1000,160" 
                              fill="none" stroke="var(--electric-cyan)" stroke-width="5" stroke-linecap="round" class="spline-line" />
                        <path d="M0,180 C150,160 350,220 500,150 S850,140 1000,160 V240 H0 Z" 
                              fill="url(#grad-cyan)" opacity="0.5" />
                        
                        <!-- Path 2: Postgrad (Violet) -->
                        <path d="M0,150 C150,130 350,190 500,120 S850,110 1000,130" 
                              fill="none" stroke="var(--vibrant-violet)" stroke-width="5" stroke-linecap="round" class="spline-line" />
                        <path d="M0,150 C150,130 350,190 500,120 S850,110 1000,130 V240 H0 Z" 
                              fill="url(#grad-violet)" opacity="0.5" />
                        
                        <!-- X-Axis Labels -->
                        <g transform="translate(0, 230)" style="font-size: 11px; font-weight: 800; fill: #94a3b8; letter-spacing: 1px;">
                            <text x="50" text-anchor="middle">Jan</text>
                            <text x="150" text-anchor="middle">Feb</text>
                            <text x="250" text-anchor="middle">Mar</text>
                            <text x="350" text-anchor="middle">Apr</text>
                            <text x="450" text-anchor="middle">May</text>
                            <text x="550" text-anchor="middle">Jun</text>
                            <text x="650" text-anchor="middle">Jul</text>
                            <text x="750" text-anchor="middle">Aug</text>
                            <text x="850" text-anchor="middle">Sep</text>
                            <text x="950" text-anchor="middle">Oct</text>
                        </g>

                        <!-- Tooltip Marker -->
                        <circle cx="500" cy="120" r="6" fill="var(--vibrant-violet)" stroke="white" stroke-width="2" />
                    </svg>
                </div>
            </div>
            <div style="background: var(--glass-white); padding: 25px; border-radius: 20px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.8rem; font-weight: 900; margin-bottom: 25px; letter-spacing: 2px; color: var(--vibrant-violet);">Recent Activity</h3>
                <div style="display: flex; flex-direction: column; gap: 15px;">
                    <div style="padding: 15px; background: rgba(255, 255, 255, 0.02); border-radius: 12px; border-left: 5px solid var(--vibrant-violet);">
                        <p style="font-size: 0.8rem; font-weight: 800; color: var(--white);">Syllabus Audit Required</p>
                        <p style="font-size: 0.65rem; color: #555; margin-top: 5px; font-weight: 700;">B.Tech CS - Sem 6</p>
                    </div>
                    <div style="padding: 15px; background: rgba(255, 255, 255, 0.02); border-radius: 12px; border-left: 1px solid rgba(255,255,255,0.1);">
                        <p style="font-size: 0.8rem; font-weight: 800; color: var(--white);">Fee Collection</p>
                        <p style="font-size: 0.65rem; color: #555; margin-top: 5px; font-weight: 700;">Spring Semester</p>
                    </div>
                    <div style="padding: 15px; background: rgba(255, 0, 0, 0.05); border-radius: 12px; border-left: 5px solid #ff4d4d;">
                        <p style="font-size: 0.8rem; font-weight: 800; color: #ff4d4d;">Grievance Alert (18)</p>
                        <p style="font-size: 0.65rem; color: #555; margin-top: 5px; font-weight: 700;">Portal Latency Reported</p>
                    </div>
                    <button class="login-btn action-trigger" data-action="reports" style="margin-top: 10px; font-size: 0.7rem; border-radius: 12px; background: var(--vibrant-violet); color: #000;">View All Activity</button>
                </div>
            </div>
        </div>

        <!-- Row 3: Department Health + Activity Feed -->
        <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 25px; margin-top: 25px;">
            <div style="background: var(--glass-white); padding: 28px; border-radius: 20px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 900; color: var(--electric-cyan); margin-bottom: 20px; letter-spacing: 2px;">Faculty Scores</h3>
                <div style="display: flex; flex-direction: column; gap: 14px;">
                    <div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.7rem; margin-bottom: 6px;"><span>Engineering Faculty</span><span style="color: var(--electric-cyan); font-weight: 900;">94%</span></div>
                        <div style="height: 5px; background: rgba(0, 242, 255, 0.05); border-radius: 3px;"><div style="width: 94%; height: 100%; background: var(--electric-cyan); border-radius: 3px; box-shadow: 0 0 10px var(--electric-cyan);"></div></div>
                    </div>
                    <div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.7rem; margin-bottom: 6px;"><span>Management & Commerce</span><span style="color: #10b981; font-weight: 800;">87%</span></div>
                        <div style="height: 5px; background: rgba(15, 23, 42, 0.05); border-radius: 3px;"><div style="width: 87%; height: 100%; background: #10b981; border-radius: 3px;"></div></div>
                    </div>
                    <div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.7rem; margin-bottom: 6px;"><span>Sciences & Humanities</span><span style="color: var(--gold); font-weight: 800;">79%</span></div>
                        <div style="height: 5px; background: rgba(255,255,255,0.07); border-radius: 3px;"><div style="width: 79%; height: 100%; background: var(--gold); border-radius: 3px; opacity: 0.7;"></div></div>
                    </div>
                    <div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.7rem; margin-bottom: 6px;"><span>Medical & Life Sciences</span><span style="color: #ffab00; font-weight: 800;">65%</span></div>
                        <div style="height: 5px; background: rgba(255,255,255,0.07); border-radius: 3px;"><div style="width: 65%; height: 100%; background: #ffab00; border-radius: 3px;"></div></div>
                    </div>
                </div>
            </div>

            <div style="background: var(--glass-white); padding: 28px; border-radius: 20px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 900; color: var(--cyber-gold); margin-bottom: 20px; letter-spacing: 2px;">Recent Updates</h3>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div style="display: flex; gap: 12px; align-items: flex-start;">
                        <div style="width: 8px; height: 8px; background: #10b981; border-radius: 50%; margin-top: 5px; flex-shrink: 0; box-shadow: 0 0 10px #10b981;"></div>
                        <div><p style="font-size: 0.72rem; font-weight: 800; color: var(--white);">Fee challan generated — Aarav M.</p><p style="font-size: 0.6rem; color: #555; font-weight: 700;">Finance System</p></div>
                    </div>
                    <div style="display: flex; gap: 12px; align-items: flex-start;">
                        <div style="width: 8px; height: 8px; background: var(--gold); border-radius: 50%; margin-top: 5px; flex-shrink: 0; box-shadow: 0 0 8px var(--gold);"></div>
                        <div><p style="font-size: 0.72rem; font-weight: 600;">Result published — B.Tech CS Sem 6</p><p style="font-size: 0.6rem; color: var(--slate);">18 min ago · Exam Cell</p></div>
                    </div>
                    <div style="display: flex; gap: 12px; align-items: flex-start;">
                        <div style="width: 8px; height: 8px; background: #f59e0b; border-radius: 50%; margin-top: 5px; flex-shrink: 0;"></div>
                        <div><p style="font-size: 0.72rem; font-weight: 600;">New applicant registered — MBA Finance</p><p style="font-size: 0.6rem; color: var(--slate);">34 min ago · Admissions Gateway</p></div>
                    </div>
                    <div style="display: flex; gap: 12px; align-items: flex-start;">
                        <div style="width: 8px; height: 8px; background: #ef4444; border-radius: 50%; margin-top: 5px; flex-shrink: 0;"></div>
                        <div><p style="font-size: 0.72rem; font-weight: 600; color: #ef4444;">Attendance below 75% — Zaid A.</p><p style="font-size: 0.6rem; color: var(--slate);">1 hr ago · SIS Alert</p></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Row 4: Quick Access Hubs -->
        <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border); margin-top: 25px;">
            <h3 style="font-size: 0.85rem; font-weight: 700; color: var(--white); margin-bottom: 18px;">Quick Access Hubs</h3>
            <div class="grid-adaptive" style="margin-top: 10px; gap: 12px;">
                <button class="nav-item" data-view="Admissions" style="flex-direction: column; padding: 20px 10px; gap: 10px; text-align: center; font-size: 0.7rem; color: var(--gold); border-color: rgba(255,171,0,0.2);">
                    <i data-lucide="user-plus" style="width: 32px; height: 32px;"></i>Admissions
                </button>
                <button class="nav-item" data-view="SIS" style="flex-direction: column; padding: 20px 10px; gap: 10px; text-align: center; font-size: 0.7rem;">
                    <i data-lucide="users" style="width: 32px; height: 32px;"></i>Students
                </button>
                <button class="nav-item" data-view="Exams" style="flex-direction: column; padding: 20px 10px; gap: 10px; text-align: center; font-size: 0.7rem;">
                    <i data-lucide="file-edit" style="width: 32px; height: 32px;"></i>Exams
                </button>
                <button class="nav-item" data-view="Fees" style="flex-direction: column; padding: 20px 10px; gap: 10px; text-align: center; font-size: 0.7rem;">
                    <i data-lucide="dollar-sign" style="width: 32px; height: 32px;"></i>Fees
                </button>
                <button class="nav-item" data-view="Reports" style="flex-direction: column; padding: 20px 10px; gap: 10px; text-align: center; font-size: 0.7rem;">
                    <i data-lucide="file-text" style="width: 32px; height: 32px;"></i>Reports
                </button>
                <button class="nav-item" data-view="Settings" style="flex-direction: column; padding: 20px 10px; gap: 10px; text-align: center; font-size: 0.7rem;">
                    <i data-lucide="settings" style="width: 32px; height: 32px;"></i>Settings
                </button>
            </div>
        </div>
    `,
    "SIS": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.2rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Scholar Governance Hub</h1>
            <div style="margin-top: 25px; background: var(--glass-white); padding: 15px 25px; border-radius: 15px; display: flex; gap: 15px; align-items: center; border: 1px solid var(--glass-border); flex-wrap: wrap;">
                <select class="login-input" style="width: auto; background: rgba(255,255,255,0.03); color: var(--slate); border: 1px solid var(--glass-border); padding: 8px; border-radius: 10px;"><option>All Campuses</option></select>
                <select class="login-input" style="width: auto; background: rgba(255,255,255,0.03); color: var(--slate); border: 1px solid var(--glass-border); padding: 8px; border-radius: 10px;"><option>AY 2026-27</option></select>
                <input type="text" placeholder="Search Student ID or Name..." style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; color: var(--white); font-family: monospace; font-size: 0.75rem; padding: 8px 15px; outline: none; flex: 1;" />
                <button class="login-btn action-trigger" data-action="export_pdf" style="width: auto; padding: 8px 20px; font-size: 0.7rem; background: var(--vibrant-violet); color: #000; font-weight: 900; border-radius: 10px;">Export Records</button>
            </div>
        </div>

        <!-- KPI Row -->
        <div class="kpi-grid grid-adaptive" style="margin-top: 25px;">
            <div class="kpi-card" style="border-left: 4px solid var(--vibrant-violet); padding: 18px 25px;">
                <span class="kpi-label" style="color: var(--vibrant-violet);">Active Students</span>
                <span class="kpi-val">10,245</span>
                <div style="font-size: 0.65rem; color: #555; font-weight: 900;">Status: Optimal</div>
            </div>
            <div class="kpi-card" style="border-left: 4px solid var(--white); padding: 18px 25px;">
                <span class="kpi-label" style="color: var(--white);">Average CGPA</span>
                <span class="kpi-val">7.84</span>
                <div style="font-size: 0.65rem; color: #555; font-weight: 900;">Status: Stable</div>
            </div>
            <div class="kpi-card" style="border-left: 4px solid #ff4d4d; padding: 18px 25px;">
                <span class="kpi-label" style="color: #ff4d4d;">Attendance Alerts</span>
                <span class="kpi-val">124</span>
                <div style="font-size: 0.65rem; color: #ff4d4d; font-weight: 900;">Action Required</div>
            </div>
        </div>

        <!-- Status Filter Tabs -->
        <div style="display: flex; gap: 8px; margin-top: 20px; margin-bottom: 12px;">
            <button class="login-btn" style="font-size: 0.65rem; padding: 6px 14px; width: auto; background: var(--vibrant-violet); color: #000;">All Students</button>
            <button class="login-btn" style="font-size: 0.65rem; padding: 6px 14px; width: auto; background: rgba(16, 185, 129, 0.1); color: #10b981; border-color: rgba(16, 185, 129, 0.2);">✓ Active</button>
            <button class="login-btn" style="font-size: 0.65rem; padding: 6px 14px; width: auto; background: rgba(255,77,77,0.08); color: #ff4d4d; border-color: rgba(255,77,77,0.3);"><i data-lucide="alert-triangle" style="width:12px; height:12px; vertical-align:middle; margin-right:4px;"></i> Att. Defaulters</button>
            <button class="login-btn" style="font-size: 0.65rem; padding: 6px 14px; width: auto; background: rgba(168, 85, 247, 0.08); color: var(--vibrant-violet); border-color: rgba(168, 85, 247, 0.3);"><i data-lucide="credit-card" style="width:12px; height:12px; vertical-align:middle; margin-right:4px;"></i> Fee Pending</button>
            <button class="login-btn" style="font-size: 0.65rem; padding: 6px 14px; width: auto; background: rgba(255,255,255,0.05); color: #555;"><i data-lucide="sun" style="width:12px; height:12px; vertical-align:middle; margin-right:4px;"></i> On Leave</button>
        </div>

        <!-- Main grid: Scholar Table + Sidebar -->
        <div style="display: grid; grid-template-columns: 1fr 300px; gap: 20px;" class="slide-up">

            <!-- Student Table -->
            <div style="background: var(--glass); border-radius: 12px; border: 1px solid var(--glass-border); overflow: hidden;">
                <div style="padding: 12px 20px; border-bottom: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center;">
                    <h3 style="font-size: 0.8rem; font-weight: 700; color: var(--white); opacity: 0.9;">Scholar Directory</h3>
                    <span class="status-pill status-pending" style="font-size: 0.6rem;">12 of 10,245 shown</span>
                </div>
                <div style="overflow-x: auto;">
                <table class="data-table" style="font-size: 0.72rem; min-width: 860px;">
                    <thead>
                        <tr><th>Scholar ID</th><th>Student</th><th>Program</th><th>Campus</th><th>CGPA</th><th>Attendance</th><th>Fees</th><th>Status</th><th style="min-width:110px;">Actions</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="color:var(--white);font-weight:700;white-space:nowrap;">#CN-9822</td>
                            <td><strong>Aarav Malhotra</strong><br><span style="font-size:0.6rem;color:#555;">aarav.m@cms.edu</span></td>
                            <td style="white-space:nowrap;">B.Tech CS · Yr3 S6</td><td>Main</td>
                            <td style="color:#10b981;font-weight:800;">8.92</td>
                            <td style="color:#10b981;font-weight:700;">98.5%</td>
                            <td><span class="status-pill status-verified" style="font-size:0.55rem;">PAID</span></td>
                            <td><span class="status-pill status-verified" style="font-size:0.55rem;">ACTIVE</span></td>
                            <td style="white-space:nowrap;">
                                <button class="profile-trigger" data-id="#CN-9822" style="display:inline-block;padding:3px 8px;font-size:0.55rem;font-weight:900;border-radius:4px;border:1px solid rgba(0, 128, 128, 0.4);background:rgba(0, 128, 128, 0.1);color:var(--vibrant-violet);cursor:pointer;margin-right:3px;">VIEW</button>
                                <button class="action-trigger" data-action="download_id" style="display:inline-block;padding:3px 8px;font-size:0.55rem;font-weight:900;border-radius:4px;border:1px solid rgba(255,255,255,0.2);background:rgba(255,255,255,0.05);color:var(--white);cursor:pointer;">ID</button>
                            </td>
                        </tr>
                        <tr>
                            <td style="color:var(--white);font-weight:700;white-space:nowrap;">#CN-9823</td>
                            <td><strong>Isha Kapur</strong><br><span style="font-size:0.6rem;color:#555;">isha.k@cms.edu</span></td>
                            <td style="white-space:nowrap;">B.Com · Yr2 S4</td><td>City</td>
                            <td style="color:var(--white);font-weight:800;">7.41</td>
                            <td style="color:#f59e0b;font-weight:700;">82.1%</td>
                            <td><span class="status-pill status-verified" style="font-size:0.55rem;">PAID</span></td>
                            <td><span class="status-pill status-verified" style="font-size:0.55rem;">ACTIVE</span></td>
                            <td style="white-space:nowrap;">
                                <button class="profile-trigger" data-id="#CN-9823" style="display:inline-block;padding:3px 8px;font-size:0.55rem;font-weight:900;border-radius:4px;border:1px solid rgba(0, 128, 128, 0.4);background:rgba(0, 128, 128, 0.1);color:var(--vibrant-violet);cursor:pointer;margin-right:3px;">VIEW</button>
                                <button class="action-trigger" data-action="bonafide" style="display:inline-block;padding:3px 8px;font-size:0.55rem;font-weight:900;border-radius:4px;border:1px solid rgba(255,255,255,0.2);background:rgba(255,255,255,0.05);color:var(--white);cursor:pointer;">BON</button>
                            </td>
                        </tr>
                        <tr>
                            <td style="color:var(--white);font-weight:700;white-space:nowrap;">#CN-9824</td>
                            <td><strong>Riya Sharma</strong><br><span style="font-size:0.6rem;color:#555;">riya.s@cms.edu</span></td>
                            <td style="white-space:nowrap;">B.Tech CS · Yr2 S4</td><td>Main</td>
                            <td style="color:var(--white);font-weight:800;">8.15</td>
                            <td style="color:#10b981;font-weight:700;">91.3%</td>
                            <td><span class="status-pill status-verified" style="font-size:0.55rem;">PAID</span></td>
                            <td><span class="status-pill status-verified" style="font-size:0.55rem;">ACTIVE</span></td>
                            <td style="white-space:nowrap;">
                                <button class="profile-trigger" data-id="#CN-9824" style="display:inline-block;padding:3px 8px;font-size:0.55rem;font-weight:900;border-radius:4px;border:1px solid rgba(0, 128, 128, 0.4);background:rgba(0, 128, 128, 0.1);color:var(--vibrant-violet);cursor:pointer;margin-right:3px;">VIEW</button>
                                <button class="action-trigger" data-action="download_id" style="display:inline-block;padding:3px 8px;font-size:0.55rem;font-weight:900;border-radius:4px;border:1px solid rgba(255,255,255,0.2);background:rgba(255,255,255,0.05);color:var(--white);cursor:pointer;">ID</button>
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
                        <tr>
                            <td style="color:var(--white);font-weight:700;white-space:nowrap;">#CN-9836</td>
                            <td><strong>Arjun Verma</strong><br><span style="font-size:0.6rem;color:#555;">arjun.v@cms.edu</span></td>
                            <td style="white-space:nowrap;">B.Tech CS · Yr4 S8</td><td>Main</td>
                            <td style="color:var(--white);font-weight:800;">7.62</td>
                            <td style="color:#10b981;font-weight:700;">88.9%</td>
                            <td><span class="status-pill" style="font-size:0.55rem;background:rgba(255,77,77,0.12);color:#ff4d4d;border-color:rgba(255,77,77,0.3);">OVERDUE</span></td>
                            <td><span class="status-pill status-verified" style="font-size:0.55rem;">ACTIVE</span></td>
                            <td style="white-space:nowrap;">
                                <button class="profile-trigger" data-id="#CN-9836" style="display:inline-block;padding:3px 8px;font-size:0.55rem;font-weight:900;border-radius:4px;border:1px solid rgba(0, 128, 128, 0.4);background:rgba(0, 128, 128, 0.1);color:var(--vibrant-violet);cursor:pointer;margin-right:3px;">VIEW</button>
                                <button class="action-trigger" data-action="fee_demand" style="display:inline-block;padding:3px 8px;font-size:0.55rem;font-weight:900;border-radius:4px;border:1px solid rgba(255,77,77,0.3);background:rgba(255,77,77,0.1);color:#ff4d4d;cursor:pointer;">DUES</button>
                            </td>
                        </tr>
                        <tr>
                            <td style="color:var(--white);font-weight:700;white-space:nowrap;">#CN-9841</td>
                            <td><strong>Fatima Sheikh</strong><br><span style="font-size:0.6rem;color:#555;">fatima.s@cms.edu</span></td>
                            <td style="white-space:nowrap;">B.Com · Yr3 S6</td><td>City</td>
                            <td style="color:#10b981;font-weight:800;">8.33</td>
                            <td style="color:#10b981;font-weight:700;">93.7%</td>
                            <td><span class="status-pill status-verified" style="font-size:0.55rem;">PAID</span></td>
                            <td><span class="status-pill status-verified" style="font-size:0.55rem;">ACTIVE</span></td>
                            <td style="white-space:nowrap;">
                                <button class="profile-trigger" data-id="#CN-9841" style="display:inline-block;padding:3px 8px;font-size:0.55rem;font-weight:900;border-radius:4px;border:1px solid rgba(0, 128, 128, 0.4);background:rgba(0, 128, 128, 0.1);color:var(--vibrant-violet);cursor:pointer;margin-right:3px;">VIEW</button>
                                <button class="action-trigger" data-action="download_id" style="display:inline-block;padding:3px 8px;font-size:0.55rem;font-weight:900;border-radius:4px;border:1px solid rgba(255,255,255,0.2);background:rgba(255,255,255,0.05);color:var(--white);cursor:pointer;">ID</button>
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
                <div style="background: var(--glass); border-radius: 12px; border: 1px solid var(--glass-border); padding: 15px;">
                    <h4 style="font-size: 0.75rem; font-weight: 700; color: var(--vibrant-violet); margin-bottom: 12px;">PROGRAM DISTRIBUTION</h4>
                    <div style="display: flex; flex-direction: column; gap: 10px; font-size: 0.7rem;">
                        <div>
                            <div style="display:flex;justify-content:space-between;margin-bottom:4px;"><span>B.Tech CS</span><span style="font-weight:800;color:var(--vibrant-violet);">4,120 · 40%</span></div>
                            <div style="height:3px;background:rgba(168, 85, 247, 0.08);border-radius:3px;"><div style="width:80%;height:100%;background:var(--vibrant-violet);border-radius:3px;"></div></div>
                        </div>
                        <div>
                            <div style="display:flex;justify-content:space-between;margin-bottom:4px;"><span>B.Com</span><span style="font-weight:800;color:var(--white);">3,085 · 30%</span></div>
                            <div style="height:3px;background:rgba(255,255,255,0.08);border-radius:3px;"><div style="width:60%;height:100%;background:rgba(255,255,255,0.3);border-radius:3px;"></div></div>
                        </div>
                    </div>
                </div>

                <!-- Campus Spread -->
                <div style="background: var(--glass); border-radius: 12px; border: 1px solid var(--glass-border); padding: 15px;">
                    <h4 style="font-size: 0.75rem; font-weight: 700; color: var(--vibrant-violet); margin-bottom: 12px;">CAMPUS SPREAD</h4>
                    <div style="display:flex;flex-direction:column;gap:8px;font-size:0.7rem;">
                        <div style="display:flex;justify-content:space-between;padding:6px 12px;background:rgba(0, 128, 128, 0.05);border-radius:8px;border-left:3px solid var(--vibrant-violet);"><span>Main Campus</span><span style="font-weight:800;color:var(--vibrant-violet);">5,820</span></div>
                        <div style="display:flex;justify-content:space-between;padding:6px 12px;background:rgba(255,255,255,0.05);border-radius:8px;border-left:3px solid var(--white);"><span>City Campus</span><span style="font-weight:800;color:var(--white);">2,740</span></div>
                    </div>
                </div>

                <!-- Flagged Students Alert Panel -->
                <div style="background:rgba(255,77,77,0.04);border-radius:16px;border:1px solid rgba(255,77,77,0.2);padding:20px;flex:1;">
                    <h4 style="font-size:0.8rem;font-weight:700;color:#ff4d4d;margin-bottom:14px;"><i data-lucide="alert-triangle" style="width:14px; height:14px; vertical-align:middle; margin-right:6px;"></i> FLAGGED STUDENTS</h4>
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
            <h1 class="page-title" style="font-size: 2.2rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Admissions Command Center</h1>
            <div class="filters-bar" style="margin-top: 25px; background: var(--glass-white); padding: 12px 25px; border-radius: 15px; display: flex; gap: 12px; align-items: center; border: 1px solid var(--glass-border);">
                <select class="login-input" style="width: auto; background: rgba(255,255,255,0.03); color: var(--slate); border: 1px solid var(--glass-border); padding: 8px; border-radius: 10px;"><option>GATEWAY_AY_2026-27</option></select>
                <input type="text" placeholder="LOCATE_APPLICANT_UUID..." class="login-input" style="margin: 0; padding: 8px 20px; font-size: 0.75rem; flex: 1; border-radius: 10px; background: rgba(255,255,255,0.03);" />
                <button class="login-btn action-trigger" data-action="new_applicant" style="width: auto; padding: 8px 25px; font-size: 0.7rem; background: var(--vibrant-violet); color: #000; font-weight: 900; border-radius: 10px;">+ INITIATE_ADMISSION</button>
            </div>
        </div>

        <!-- KPI Row -->
        <div class="kpi-grid grid-adaptive" style="margin-top: 25px;">
            <div class="kpi-card" style="padding: 15px; border-top: 3px solid var(--vibrant-violet);">
                <span class="kpi-label">Total Leads</span>
                <span class="kpi-val" style="font-size: 1.6rem;">4,240</span>
                <div style="font-size: 0.6rem; color: var(--vibrant-violet); margin-top: 4px;">↑ 18% VELOCITY</div>
            </div>
            <div class="kpi-card" style="padding: 15px;">
                <span class="kpi-label">Converted</span>
                <span class="kpi-val" style="font-size: 1.6rem; color: var(--vibrant-violet);">185</span>
                <div style="font-size: 0.6rem; color: #555; margin-top: 4px;">Conv. rate: 32.4%</div>
            </div>
            <div class="kpi-card" style="padding: 15px; background: rgba(0, 128, 128, 0.05); border-color: rgba(168, 85, 247, 0.2);">
                <span class="kpi-label">Revenue</span>
                <span class="kpi-val" style="font-size: 1.6rem; color: var(--vibrant-violet);">$1.2M</span>
                <div style="font-size: 0.6rem; color: var(--vibrant-violet); margin-top: 4px;">SYNCED</div>
            </div>
        </div>

        <!-- Pipeline Funnel bar -->
        <div style="margin-top: 30px; background: #f8fafc; border-radius: 20px; border: 1px solid #e2e8f0; padding: 30px;" class="slide-up">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
                <h3 style="font-size: 0.8rem; font-weight: 900; color: var(--cyber-gold); letter-spacing: 2px;">ADMISSION_PIPELINE_TELEMETRY</h3>
                <span style="font-size: 0.65rem; color: #555; font-weight: 800;">AY 2026-27 · QUANTUM_SYNC</span>
            </div>
            <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                <div style="flex: 4; background: rgba(0, 242, 255, 0.05); border: 1px solid rgba(0, 242, 255, 0.2); border-radius: 10px; padding: 15px; text-align: center;">
                    <p style="font-size: 0.6rem; color: var(--electric-cyan); font-weight: 900;">LEADS</p><p style="font-size: 1.2rem; font-weight: 900; color: var(--white);">4,240</p>
                </div>
                <div style="flex: 0.8; background: rgba(255, 215, 0, 0.05); border: 1px solid rgba(255, 215, 0, 0.2); border-radius: 10px; padding: 15px; text-align: center;">
                    <p style="font-size: 0.6rem; color: var(--cyber-gold); font-weight: 900;">OFFERED</p><p style="font-size: 1.2rem; font-weight: 900; color: var(--white);">310</p>
                </div>
                <div style="flex: 0.4; background: rgba(0, 242, 255, 0.1); border: 1px solid var(--electric-cyan); border-radius: 10px; padding: 15px; text-align: center; box-shadow: 0 0 20px rgba(0, 242, 255, 0.2);">
                    <p style="font-size: 0.6rem; color: var(--electric-cyan); font-weight: 900;">ENROLLED</p><p style="font-size: 1.2rem; font-weight: 900; color: var(--electric-cyan);">185</p>
                </div>
            </div>
        </div>

        <!-- Main Grid: Applicant Pipeline + Sidebar Stats -->
        <div class="grid-2-col" style="margin-top: 22px;">

            <!-- Applicant Pipeline Table -->
            <div style="background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border);">
                <div style="padding: 18px 22px; border-bottom: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center;">
                    <h3 style="font-size: 0.88rem; font-weight: 700; color: var(--gold);">Active Applicant Pipeline</h3>
                    <span class="status-pill status-pending" style="font-size: 0.65rem;">10 of 4,240 shown</span>
                </div>
                <div class="table-container">
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
            </div>

            <!-- Right sidebar: Source Stats + Counsellor Feed -->
            <div style="display: flex; flex-direction: column; gap: 18px;">

                <!-- Source-wise Conversion -->
                <div style="background: var(--glass); border-radius: 12px; border: 1px solid var(--glass-border); padding: 15px;">
                    <h4 style="font-size: 0.75rem; font-weight: 700; color: var(--vibrant-violet); margin-bottom: 12px; letter-spacing: 0.5px;">SOURCE CONVERSION</h4>
                    <div style="display: flex; flex-direction: column; gap: 10px; font-size: 0.7rem;">
                        <div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;"><span>Organic Search</span><span style="color:var(--vibrant-violet);font-weight:800;">42%</span></div>
                            <div style="height: 3px; background: rgba(168, 85, 247, 0.08); border-radius: 3px;"><div style="width:84%;height:100%;background:var(--vibrant-violet);border-radius:3px;"></div></div>
                        </div>
                        <div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;"><span>Direct Referrals</span><span style="color:var(--white);font-weight:800;">68%</span></div>
                            <div style="height: 3px; background: rgba(255,255,255,0.08); border-radius: 3px;"><div style="width:68%;height:100%;background:rgba(255,255,255,0.3);border-radius:3px;"></div></div>
                        </div>
                    </div>
                </div>

                <!-- Seat Utilisation -->
                <div style="background: var(--glass); border-radius: 12px; border: 1px solid var(--glass-border); padding: 15px;">
                    <h4 style="font-size: 0.75rem; font-weight: 700; color: var(--vibrant-violet); margin-bottom: 12px;">SEAT UTILISATION</h4>
                    <div style="display: flex; flex-direction: column; gap: 8px; font-size: 0.7rem;">
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 6px 12px; background: rgba(0, 128, 128, 0.05); border-radius: 8px; border-left: 3px solid var(--vibrant-violet);">
                            <span>B.Tech CS</span>
                            <div style="text-align: right;"><span style="font-weight:800;color:var(--vibrant-violet);">118</span><span style="color:#555;">/120</span></div>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 6px 12px; background: rgba(255,255,255,0.05); border-radius: 8px; border-left: 3px solid var(--white);">
                            <span>MBA Finance</span>
                            <div style="text-align: right;"><span style="font-weight:800;color:var(--white);">54</span><span style="color:#555;">/60</span></div>
                        </div>
                    </div>
                </div>

                <!-- Counsellor Activity Feed -->
                <div style="background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); padding: 20px; flex: 1;">
                    <h4 style="font-size: 0.8rem; font-weight: 700; color: var(--gold); margin-bottom: 14px;">COUNSELLOR ACTIVITY</h4>
                    <div style="display: flex; flex-direction: column; gap: 10px; font-size: 0.68rem; color: var(--slate);">
                        <div style="padding: 10px 0; border-bottom: 1px solid var(--glass-border); display: flex; gap: 10px;">
                            <i data-lucide="file-text" style="width: 16px; height: 16px;"></i>
                            <div><span style="color: var(--white); font-weight: 600;">Ms. Priya</span> verified docs for <span style="color:#64ffda;">Nadia Khan</span><br><span style="font-size:0.6rem;">2 min ago · #L-9820</span></div>
                        </div>
                        <div style="padding: 10px 0; border-bottom: 1px solid var(--glass-border); display: flex; gap: 10px;">
                            <i data-lucide="target" style="width: 16px; height: 16px;"></i>
                            <div><span style="color: var(--white); font-weight: 600;">Dr. Sharma</span> issued seat offer to <span style="color:var(--gold);">Divya Srinivas</span><br><span style="font-size:0.6rem;">18 min ago · #L-9801</span></div>
                        </div>
                        <div style="padding: 10px 0; border-bottom: 1px solid var(--glass-border); display: flex; gap: 10px;">
                            <i data-lucide="check-circle" style="width: 16px; height: 16px;"></i>
                            <div><span style="color: var(--white); font-weight: 600;">Ms. Priya</span> enrolled <span style="color:#64ffda;">Meena Pillai</span> — SIS created<br><span style="font-size:0.6rem;">1 hr ago · #L-9779</span></div>
                        </div>
                        <div style="padding: 10px 0; display: flex; gap: 10px;">
                            <i data-lucide="phone" style="width: 16px; height: 16px;"></i>
                            <div><span style="color: var(--white); font-weight: 600;">Mr. Rajan</span> followed up with <span style="color:#ffab00;">Rahul Desai</span><br><span style="font-size:0.6rem;">2 hr ago · #L-9845</span></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `,
    "Academics": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.2rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Academic Governance</h1>
            <div class="filters-bar" style="margin-top: 25px; background: var(--glass-white); padding: 12px 25px; border-radius: 15px; display: flex; gap: 12px; border: 1px solid var(--glass-border); align-items: center;">
                <select class="login-input" style="background: rgba(255,255,255,0.03); color: var(--slate); border: 1px solid var(--glass-border); padding: 8px; border-radius: 10px;"><option>MAIN_CAMPUS_CLUSTER</option></select>
                <button class="login-btn action-trigger" data-action="add_program" style="width: auto; padding: 8px 20px; font-size: 0.7rem; background: var(--vibrant-violet); color: #000; font-weight: 900; border-radius: 10px;">+ DEPLOY_PROGRAM</button>
            </div>
        </div>

        <div class="kpi-grid" style="margin-top: 25px;">
            <div class="kpi-card" style="border-top: 3px solid var(--vibrant-violet);"><span class="kpi-label">Programs</span><span class="kpi-val">12</span><div style="font-size:0.6rem;color:#555;">UG · PG · PhD</div></div>
            <div class="kpi-card"><span class="kpi-label">Courses</span><span class="kpi-val">142</span><div style="font-size:0.6rem;color:var(--vibrant-violet);">SYNCED</div></div>
            <div class="kpi-card"><span class="kpi-label">Sections</span><span class="kpi-val">48</span><div style="font-size:0.6rem;color:var(--white);">ACTIVE</div></div>
            <div class="kpi-card"><span class="kpi-label">Faculty Load</span><span class="kpi-val" style="color:var(--vibrant-violet);">Optimal</span><div style="font-size:0.6rem;color:#555;">~18 hrs/week</div></div>
        </div>

        <div class="slide-up" style="margin-top: 25px;">
            <!-- Programs tab -->
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-bottom: 25px;">
                <div class="glass-card" style="padding: 18px; border-radius: 12px; border-top: 3px solid var(--vibrant-violet);">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <div>
                            <p style="font-size: 0.7rem; color: var(--vibrant-violet); font-weight: 800; letter-spacing: 1px;">B.TECH</p>
                            <p style="font-size: 0.65rem; color: #555; margin-top: 3px;">Computer Science</p>
                        </div>
                        <span class="status-pill status-verified" style="font-size: 0.55rem;">UG</span>
                    </div>
                </div>
                <div class="glass-card" style="padding: 18px; border-radius: 12px; border-top: 3px solid var(--white);">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <div>
                            <p style="font-size: 0.7rem; color: var(--white); font-weight: 800; letter-spacing: 1px;">MBA</p>
                            <p style="font-size: 0.65rem; color: #555; margin-top: 3px;">Finance Analytics</p>
                        </div>
                        <span class="status-pill status-verified" style="font-size: 0.55rem;">PG</span>
                    </div>
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
            <h1 class="page-title" style="font-size: 2.2rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Examination Matrix</h1>
            <div class="filters-bar" style="margin-top: 25px; background: var(--glass-white); padding: 12px 25px; border-radius: 15px; display: flex; gap: 12px; border: 1px solid var(--glass-border); align-items: center; flex-wrap: wrap;">
                <select class="login-input" style="background: rgba(255,255,255,0.03); color: var(--slate); border: 1px solid var(--glass-border); padding: 8px; border-radius: 10px;">
                    <option>B.Tech CS - Sem 6</option>
                    <option>B.Tech ECE - Sem 4</option>
                    <option>MBA Finance - Sem 2</option>
                </select>
                <button class="login-btn action-trigger" data-action="hall_ticket" style="width: auto; padding: 8px 20px; font-size: 0.7rem; background: var(--vibrant-violet); color: #000; font-weight: 900; border-radius: 10px;">Generate Hall Tickets</button>
            </div>
        </div>

        <div class="kpi-grid grid-adaptive" style="margin-top: 30px;">
            <div class="kpi-card glass-card"><span class="kpi-label">Papers Digitized</span><span class="kpi-val" style="color:#10b981;">100%</span><div style="font-size:0.6rem;color:#10b981;">All scripts scanned</div></div>
            <div class="kpi-card glass-card"><span class="kpi-label">Evaluation Progress</span><span class="kpi-val" style="color: var(--gold);">82.4%</span><div style="font-size:0.6rem;color:var(--gold);">3 depts pending</div></div>
            <div class="kpi-card glass-card"><span class="kpi-label">Result Accuracy</span><span class="kpi-val">99.9%</span><div style="font-size:0.6rem;color:var(--slate);">AI-verified</div></div>
            <div class="kpi-card glass-card"><span class="kpi-label">Results Published</span><span class="kpi-val" style="color:var(--vibrant-violet);">8 / 12</span><div style="font-size:0.6rem;color:var(--slate);">This semester</div></div>
        </div>

        <div class="grid-2-col slide-up" style="margin-top: 25px;">
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border); min-width: 0;">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold); margin-bottom: 20px;">Result Publishing Queue</h3>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div style="padding: 15px; background: rgba(255,255,255,0.02); border-radius: 10px; border-left: 4px solid var(--gold); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                        <div>
                            <p style="font-size: 0.75rem; font-weight: 600;">B.TECH CS | SEM 6</p>
                            <p style="font-size: 0.65rem; color: var(--slate);">External Theory • May 2026</p>
                        </div>
                        <button class="login-btn action-trigger" data-action="publish_results" style="padding: 5px 15px; font-size: 0.6rem; width: auto; background: var(--vibrant-violet); color: #000;">Publish</button>
                    </div>
                    <div style="padding: 15px; background: rgba(255,255,255,0.02); border-radius: 10px; border-left: 4px solid #ffab00; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                        <div>
                            <p style="font-size: 0.75rem; font-weight: 600;">MBA FINANCE | SEM 2</p>
                            <p style="font-size: 0.65rem; color: var(--slate);">Internal Lab • April 2026</p>
                        </div>
                        <button class="login-btn" style="padding: 5px 15px; font-size: 0.6rem; width: auto; opacity: 0.5;">In Review</button>
                    </div>
                    <div style="padding: 15px; background: rgba(255,255,255,0.02); border-radius: 10px; border-left: 4px solid #10b981; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                        <div>
                            <p style="font-size: 0.75rem; font-weight: 600;">B.TECH ECE | SEM 4</p>
                            <p style="font-size: 0.65rem; color: var(--slate);">External Theory • May 2026</p>
                        </div>
                        <span class="status-pill success" style="font-size:0.55rem;">Published</span>
                    </div>
                    <div style="padding: 15px; background: rgba(255,255,255,0.02); border-radius: 10px; border-left: 4px solid #6366f1; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                        <div>
                            <p style="font-size: 0.75rem; font-weight: 600;">M.SC MATHEMATICS | SEM 3</p>
                            <p style="font-size: 0.65rem; color: var(--slate);">Practicals • June 2026</p>
                        </div>
                        <span class="status-pill warning" style="font-size:0.55rem;">Pending Eval</span>
                    </div>
                </div>
            </div>

            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border); min-width: 0;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
                    <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold);">Student Performance Ledger</h3>
                    <button class="login-btn action-trigger" data-action="export_pdf" style="padding: 5px 14px; font-size: 0.6rem; width: auto;">Export PDF</button>
                </div>
                <div class="table-container">
                    <table class="data-table" style="font-size: 0.7rem;">
                        <thead><tr><th>Scholar</th><th>Roll No.</th><th>Dept</th><th>SGPA</th><th>CGPA</th><th>Rank</th><th>Status</th></tr></thead>
                        <tbody>
                            <tr><td><strong>Aarav Malhotra</strong></td><td>#CS-2201</td><td>CS</td><td style="color:#10b981;font-weight:800;">9.50</td><td>9.42</td><td>🥇 1st</td><td><span class="status-pill success">Pass</span></td></tr>
                            <tr><td><strong>Isha Kapoor</strong></td><td>#CS-2202</td><td>CS</td><td style="color:#10b981;font-weight:800;">8.80</td><td>8.75</td><td>2nd</td><td><span class="status-pill success">Pass</span></td></tr>
                            <tr><td><strong>Zaid Ahmed</strong></td><td>#CS-2203</td><td>CS</td><td style="color:#10b981;font-weight:800;">9.20</td><td>9.15</td><td>3rd</td><td><span class="status-pill success">Pass</span></td></tr>
                            <tr><td><strong>Priya Sharma</strong></td><td>#CS-2204</td><td>CS</td><td style="color:#f59e0b;font-weight:800;">7.60</td><td>7.80</td><td>12th</td><td><span class="status-pill success">Pass</span></td></tr>
                            <tr><td><strong>Rohit Verma</strong></td><td>#EC-2101</td><td>ECE</td><td style="color:#f59e0b;font-weight:800;">6.40</td><td>6.90</td><td>24th</td><td><span class="status-pill warning">Reval.</span></td></tr>
                            <tr><td><strong>Meera Nair</strong></td><td>#EC-2102</td><td>ECE</td><td style="color:#10b981;font-weight:800;">8.20</td><td>8.10</td><td>5th</td><td><span class="status-pill success">Pass</span></td></tr>
                            <tr><td><strong>Arjun Pillai</strong></td><td>#MB-2301</td><td>MBA</td><td style="color:#ff4d4d;font-weight:800;">4.80</td><td>5.20</td><td>31st</td><td><span class="status-pill" style="background:rgba(239,68,68,0.1);color:#ef4444;">At Risk</span></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    "Fees": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.2rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Fiscal Governance</h1>
            <div class="filters-bar" style="margin-top: 25px; background: var(--glass-white); padding: 12px 25px; border-radius: 15px; display: flex; gap: 12px; border: 1px solid var(--glass-border); align-items: center;">
                <select class="login-input" style="background: rgba(255,255,255,0.03); color: var(--slate); border: 1px solid var(--glass-border); padding: 8px; border-radius: 10px;"><option>AY 2026-27</option></select>
                <button class="login-btn action-trigger" data-action="fee_demand" style="width: auto; padding: 8px 20px; font-size: 0.7rem; background: var(--vibrant-violet); color: #000; font-weight: 900; border-radius: 10px;">GENERATE_FEE_DEMAND</button>
            </div>
        </div>

        <div class="kpi-grid" style="margin-top: 25px;">
            <div class="kpi-card" style="border-top: 3px solid var(--vibrant-violet);"><span class="kpi-label">Total Collections</span><span class="kpi-val">$4.12M</span></div>
            <div class="kpi-card"><span class="kpi-label">Receivables</span><span class="kpi-val" style="color: #ff4d4d;">$1.24M</span></div>
            <div class="kpi-card"><span class="kpi-label">Buffer</span><span class="kpi-val" style="color: var(--vibrant-violet);">$850K</span></div>
        </div>

        <div class="slide-up" style="display: grid; grid-template-columns: 1fr 1.5fr; gap: 20px;">
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold); margin-bottom: 20px;">Institutional Fee Heads</h3>
                <div style="display: flex; flex-direction: column; gap: 15px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;">
                        <span style="font-size: 0.7rem; color: var(--white);">Tuition</span>
                        <span style="font-size: 0.8rem; font-weight: 800; color: var(--gold);">$2.8M</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;">
                        <span style="font-size: 0.7rem; color: var(--white);">Hostel Infrastructure</span>
                        <span style="font-size: 0.8rem; font-weight: 800; color: #10b981;">$0.9M</span>
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
            <h1 class="page-title" style="font-size: 2.2rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Finance Control</h1>
            <div class="filters-bar" style="margin-top: 25px; background: var(--glass-white); padding: 12px 25px; border-radius: 15px; display: flex; gap: 12px; border: 1px solid var(--glass-border); align-items: center;">
                <select class="login-input" style="background: rgba(255,255,255,0.03); color: var(--slate); border: 1px solid var(--glass-border); padding: 8px; border-radius: 10px;"><option>Consolidated View</option></select>
                <button class="login-btn action-trigger" data-action="export_balance" style="width: auto; padding: 8px 20px; font-size: 0.7rem; background: var(--vibrant-violet); color: #000; font-weight: 900; border-radius: 10px;">EXPORT_SHEET</button>
            </div>
        </div>

        <div class="kpi-grid" style="margin-top: 25px;">
            <div class="kpi-card" style="border-top: 3px solid var(--vibrant-violet);"><span class="kpi-label">Institutional Worth</span><span class="kpi-val">$24.5M</span></div>
            <div class="kpi-card"><span class="kpi-label">Margin</span><span class="kpi-val" style="color: #10b981;">22.4%</span></div>
            <div class="kpi-card"><span class="kpi-label">Reserve</span><span class="kpi-val" style="color: var(--vibrant-violet);">$4.8M</span></div>
        </div>

        <div class="grid-2-col slide-up" style="margin-top: 25px;">
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold); margin-bottom: 20px;">Detailed Expenditure Ledger</h3>
                <div class="table-container">
                    <table class="data-table" style="font-size: 0.75rem; border-collapse: separate; border-spacing: 0;">
                        <thead><tr><th>Date</th><th>Category</th><th>Beneficiary</th><th>Amount</th><th>Status</th></tr></thead>
                        <tbody>
                            <tr><td>Feb 18, 2026</td><td>Faculty Payroll</td><td>Global Disbursement</td><td>$840,000</td><td><span class="status-pill status-verified">PAID</span></td></tr>
                            <tr><td>Feb 17, 2026</td><td>Infrastructure</td><td>Cloud Services</td><td>$12,400</td><td><span class="status-pill status-verified">PAID</span></td></tr>
                            <tr><td>Feb 15, 2026</td><td>Marketing</td><td>Admissions Campaign</td><td>$45,000</td><td><span class="status-pill status-pending">IN_RECON</span></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold); margin-bottom: 20px;">Departmental Allocations</h3>
                <div style="display: flex; flex-direction: column; gap: 15px;">
                    <div style="padding: 15px; background: rgba(16, 185, 129, 0.05); border-radius: 10px; border-left: 4px solid #10b981;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 0.75rem; font-weight: 700;">Academic Depts</span>
                            <span style="font-size: 0.8rem; font-weight: 800; color: #10b981;">$1.2M</span>
                        </div>
                        <div style="height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; margin-top: 10px; overflow: hidden;">
                            <div style="width: 75%; height: 100%; background: #10b981;"></div>
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
                <button class="login-btn action-trigger" data-action="init_audit" style="margin-top: 20px; width: 100%;">REQUEST_AUDIT</button>
            </div>
        </div>
    `,
    "HRMS": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800;">Human Capital Management</h1>
            <div class="filters-bar" style="margin-top: 20px; background: var(--glass); padding: 20px; border-radius: 12px; display: flex; gap: 15px; border: 1px solid var(--glass-border);">
                <select class="login-input" style="margin: 0; padding: 8px 15px; font-size: 0.75rem;"><option>All Campuses</option><option>Main Campus</option><option>City Campus</option><option>North Campus</option></select>
                <select class="login-input" style="margin: 0; padding: 8px 15px; font-size: 0.75rem;"><option>All Departments</option><option>Engineering</option><option>Commerce</option></select>
                <button class="login-btn action-trigger" data-action="export_payroll" style="width: auto; padding: 8px 20px; font-size: 0.75rem;"><i data-lucide="download" style="width:14px; height:14px; margin-right:4px;"></i> PAYROLL_REGISTER</button>
            </div>
        </div>

        <div class="kpi-grid" style="margin-top: 30px;">
            <div class="kpi-card glass-card"><span class="kpi-label">Headcount</span><span class="kpi-val">1,250</span><div style="font-size:0.6rem;color:var(--slate);">3 campuses</div></div>
            <div class="kpi-card glass-card"><span class="kpi-label">Attendance Rate</span><span class="kpi-val" style="color: #10b981;">98%</span><div style="font-size:0.6rem;color:#10b981;">Above 95% target</div></div>
            <div class="kpi-card glass-card"><span class="kpi-label">Leave Pending</span><span class="kpi-val" style="color: #ffab00;">6</span><div style="font-size:0.6rem;color:#ffab00;">Needs HOD approval</div></div>
            <div class="kpi-card glass-card"><span class="kpi-label">Payroll Ready</span><span class="kpi-val" style="color: var(--gold);">FEB 26</span><div style="font-size:0.6rem;color:var(--gold);">Cycle prepared</div></div>
        </div>

        <!-- Inner Tabs -->
        <div style="display: flex; gap: 8px; margin-top: 25px; margin-bottom: 20px;">
            <button class="login-btn inner-tab-trigger" data-view="HRMS" data-sub="Directory" style="font-size: 0.7rem; padding: 8px 18px; background: var(--gold); color: white;"><i data-lucide="users" style="width:12px; height:12px; margin-right:6px;"></i> Directory</button>
            <button class="login-btn inner-tab-trigger" data-view="HRMS" data-sub="Leave" style="font-size: 0.7rem; padding: 8px 18px; background: rgba(255,255,255,0.05); color: var(--slate);"><i data-lucide="sun" style="width:12px; height:12px; margin-right:6px;"></i> Leave Management</button>
            <button class="login-btn inner-tab-trigger" data-view="HRMS" data-sub="Payroll" style="font-size: 0.7rem; padding: 8px 18px; background: rgba(255,255,255,0.05); color: var(--slate);"><i data-lucide="credit-card" style="width:12px; height:12px; margin-right:6px;"></i> Payroll Run</button>
        </div>

        <div id="hrms-section-container" style="background: var(--glass); padding: 30px; border-radius: 16px; border: 1px solid var(--glass-border); min-height: 400px;">
            <!-- DYNAMIC HRMS CONTENT -->
        </div>
    `,
    "Reports": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800;">Institutional Reporting Hub</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Unified Analytics & Compliance Export 1.0</p>
        </div>

        <div style="margin-top: 30px;" class="settings-layout slide-up">
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border); display: flex; flex-direction: column; gap: 20px; min-width: 0;">
                <div>
                    <h4 style="font-size: 0.65rem; color: var(--gold); margin-bottom: 20px; font-weight: 800; letter-spacing: 1.5px;">REPORT_CATEGORIES</h4>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <button class="nav-item active inner-tab-trigger" data-view="Reports" data-sub="Admissions" style="font-size: 0.75rem; justify-content: flex-start; padding: 12px 15px;"><i data-lucide="trending-up" style="width:16px; height:16px; margin-right:8px;"></i> Admissions & Leads</button>
                        <button class="nav-item inner-tab-trigger" data-view="Reports" data-sub="Academics" style="font-size: 0.75rem; justify-content: flex-start; padding: 12px 15px; color: var(--slate);"><i data-lucide="graduation-cap" style="width:16px; height:16px; margin-right:8px;"></i> Academic Progression</button>
                        <button class="nav-item inner-tab-trigger" data-view="Reports" data-sub="Revenue" style="font-size: 0.75rem; justify-content: flex-start; padding: 12px 15px; color: var(--slate);"><i data-lucide="dollar-sign" style="width:16px; height:16px; margin-right:8px;"></i> Revenue & Dues</button>
                        <button class="nav-item inner-tab-trigger" data-view="Reports" data-sub="Staff" style="font-size: 0.75rem; justify-content: flex-start; padding: 12px 15px; color: var(--slate);"><i data-lucide="briefcase" style="width:16px; height:16px; margin-right:8px;"></i> Staff Productivity</button>
                        <button class="nav-item inner-tab-trigger" data-view="Reports" data-sub="Compliance" style="font-size: 0.75rem; justify-content: flex-start; padding: 12px 15px; color: var(--slate);"><i data-lucide="landmark" style="width:16px; height:16px; margin-right:8px;"></i> Compliance Registry</button>
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
                <button class="login-btn" style="width: auto; padding: 8px 20px; font-size: 0.75rem; background: var(--gold); color: white;"><i data-lucide="download" style="width:14px; height:14px; margin-right:4px;"></i> DOWNLOAD_SCHEDULE</button>
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
                        <td style="background: rgba(184, 134, 11, 0.05);">Algorithms (NL-402)</td>
                        <td>-</td>
                        <td style="background: rgba(184, 134, 11, 0.05);">Data Structures</td>
                        <td>-</td>
                        <td style="background: rgba(184, 134, 11, 0.05);">Algorithms</td>
                    </tr>
                    <tr>
                        <td style="font-weight: 800; color: var(--gold);">11:00 AM</td>
                        <td>-</td>
                        <td style="background: rgba(184, 134, 11, 0.05);">OS Lab (SL-10)</td>
                        <td>-</td>
                        <td style="background: rgba(184, 134, 11, 0.05);">Networking</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td style="font-weight: 800; color: var(--gold);">02:00 PM</td>
                        <td style="background: rgba(184, 134, 11, 0.05);">AI Analytics</td>
                        <td>-</td>
                        <td style="background: rgba(184, 134, 11, 0.05);">Ethics in CS</td>
                        <td>-</td>
                        <td style="background: rgba(184, 134, 11, 0.05);">AI Analytics</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    "Settings": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800;">Institutional Settings Hub</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Governance, Branding & System Configuration</p>
        </div>

        <div style="margin-top: 30px;" class="settings-layout slide-up">
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border); display: flex; flex-direction: column; gap: 8px;">
                <h4 style="font-size: 0.65rem; color: var(--gold); margin-bottom: 12px; font-weight: 800; letter-spacing: 1.5px;">CONFIGURATION_SETTINGS</h4>
                <button class="nav-item active inner-tab-trigger" data-view="Settings" data-sub="Security" style="font-size: 0.75rem; justify-content: flex-start; padding: 12px 15px;"><i data-lucide="lock" style="width:16px; height:16px; margin-right:8px;"></i> Security Protocols</button>
                <button class="nav-item inner-tab-trigger" data-view="Settings" data-sub="Branding" style="font-size: 0.75rem; justify-content: flex-start; padding: 12px 15px; color: var(--slate);"><i data-lucide="palette" style="width:16px; height:16px; margin-right:8px;"></i> Institutional Branding</button>
                <button class="nav-item inner-tab-trigger" data-view="Settings" data-sub="System" style="font-size: 0.75rem; justify-content: flex-start; padding: 12px 15px; color: var(--slate);"><i data-lucide="settings" style="width:16px; height:16px; margin-right:8px;"></i> System Parameters</button>
                <button class="nav-item inner-tab-trigger" data-view="Settings" data-sub="Preferences" style="font-size: 0.75rem; justify-content: flex-start; padding: 12px 15px; color: var(--slate);"><i data-lucide="settings-2" style="width:16px; height:16px; margin-right:8px;"></i> UI Preferences</button>

                <div style="margin-top: auto; padding-top: 20px; border-top: 1px solid var(--glass-border);">
                    <p style="font-size: 0.6rem; color: var(--slate);">Build: v1.0.42</p>
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
            <div class="kpi-card glass-card"><span class="kpi-label">Daily Avg</span><span class="kpi-val">94.2%</span><div style="font-size:0.6rem;color:#10b981;">Above 90% target</div></div>
            <div class="kpi-card glass-card"><span class="kpi-label">Defaulters (&lt;75%)</span><span class="kpi-val" style="color: #ff4d4d;">12</span><div style="font-size:0.6rem;color:#ff4d4d;">Shortage notices due</div></div>
            <div class="kpi-card glass-card"><span class="kpi-label">Present Today</span><span class="kpi-val">118</span><div style="font-size:0.6rem;color:var(--gold);">of 120 enrolled</div></div>
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
                        <tr><td>#CN-9822</td><td>Aarav Malhotra</td><td style="color:#10b981;font-weight:800;">98.5%</td><td><span class="status-pill success">PRESENT</span></td><td><button class="login-btn" style="padding:4px 12px;font-size:0.6rem;width:auto;">MOD</button></td></tr>
                        <tr><td>#CN-9823</td><td>Isha Kapur</td><td style="color:#f59e0b;font-weight:800;">82.1%</td><td><span class="status-pill warning">UNMARKED</span></td><td><button class="login-btn action-trigger" data-action="mark_all_present" style="padding:4px 12px;font-size:0.6rem;width:auto;">MARK_P</button></td></tr>
                        <tr><td>#CN-9824</td><td>Riya Sharma</td><td style="color:var(--gold);font-weight:800;">91.3%</td><td><span class="status-pill success">PRESENT</span></td><td><button class="login-btn" style="padding:4px 12px;font-size:0.6rem;width:auto;">MOD</button></td></tr>
                        <tr><td>#CN-9825</td><td>Kabir Mehta</td><td style="color:#ef4444;font-weight:800;">71.4%</td><td><span class="status-pill danger">ABSENT</span></td><td><button class="login-btn" style="padding:4px 12px;font-size:0.6rem;width:auto;opacity:0.5;">ABSENT</button></td></tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Shortage / Defaulters List -->
        <div style="background: rgba(255,77,77,0.04); border-radius: 16px; border: 1px solid rgba(255,77,77,0.2); overflow: hidden; margin-top: 20px;">
            <div style="padding: 18px 22px; border-bottom: 1px solid rgba(255,77,77,0.2); display: flex; justify-content: space-between; align-items: center;">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: #ff4d4d;"><i data-lucide="alert-triangle" style="width:16px; height:16px; vertical-align:middle; margin-right:6px;"></i> Defaulters List — Below 75% Attendance</h3>
                <button class="login-btn action-trigger" data-action="export_excel" style="width:auto;padding:6px 14px;font-size:0.65rem;"><i data-lucide="download" style="width:12px; height:12px; margin-right:4px;"></i> EXPORT_SHORTAGE</button>
            </div>
            <div style="overflow-x: auto;">
                <table class="data-table" style="font-size: 0.75rem;">
                    <thead><tr><th>Scholar ID</th><th>Name</th><th>Program</th><th>Attendance %</th><th>Classes Attended</th><th>Total Classes</th><th>Notice</th></tr></thead>
                    <tbody>
                        <tr><td>#CN-9825</td><td>Kabir Mehta</td><td>B.Tech CS</td><td style="color:#ef4444;font-weight:800;">71.4%</td><td>100</td><td>140</td><td><button class="login-btn action-trigger" data-action="send_notice" style="padding:4px 10px;font-size:0.6rem;width:auto;background:rgba(239, 68, 68, 0.1);color:#ef4444;">SEND_NOTICE</button></td></tr>
                        <tr><td>#CN-9830</td><td>Anika Rao</td><td>MBA Finance</td><td style="color:#ef4444;font-weight:800;">68.2%</td><td>52</td><td>76</td><td><button class="login-btn action-trigger" data-action="send_notice" style="padding:4px 10px;font-size:0.6rem;width:auto;background:rgba(239, 68, 68, 0.1);color:#ef4444;">SEND_NOTICE</button></td></tr>
                        <tr><td>#CN-9841</td><td>Farhan Sheikh</td><td>B.Tech CS</td><td style="color:#ef4444;font-weight:800;">72.9%</td><td>102</td><td>140</td><td><button class="login-btn action-trigger" data-action="send_notice" style="padding:4px 10px;font-size:0.6rem;width:auto;background:rgba(239, 68, 68, 0.1);color:#ef4444;">SEND_NOTICE</button></td></tr>
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
                <div class="kpi-card glass-card" style="text-align: center;">
                    <span class="kpi-label">ATTENDANCE</span>
                    <span class="kpi-val" style="color: var(--gold);">94%</span>
                </div>
                <div class="kpi-card glass-card" style="text-align: center;">
                    <span class="kpi-label">FEES_DUE</span>
                    <span class="kpi-val" style="color: #ef4444;">$1,250</span>
                </div>
            </div>
            <div style="margin-top: 25px; background: var(--glass); border-radius: 16px; padding: 20px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 15px; color: var(--gold);">Upcoming Exams</h3>
                <div style="padding: 15px; background: rgba(99, 102, 241, 0.05); border-radius: 10px; border-left: 4px solid var(--gold);">
                    <p style="font-size: 0.8rem; font-weight: 600; color: var(--white);">CS-601: Design & Analysis of Algorithms</p>
                    <p style="font-size: 0.7rem; color: var(--slate); margin-top: 4px;">Dec 20, 2026 | 09:00 AM | Room NL-402</p>
                </div>
            </div>
        </div>
    `
};
