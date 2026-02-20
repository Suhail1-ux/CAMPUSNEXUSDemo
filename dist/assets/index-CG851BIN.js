(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();const d={Students:"10,245",Faculty:"1,250",Admissions:"3,200",Revenue:"$4.2M"},l={Management:`
        <button class="nav-item active" data-view="Dashboard"><i>📊</i> Dashboard</button>
        <button class="nav-item" data-view="Admissions"><i>🤝</i> Admissions</button>
        <button class="nav-item" data-view="SIS"><i>👥</i> SIS (Students)</button>
        <button class="nav-item" data-view="Academics"><i>📚</i> Academics</button>
        <button class="nav-item" data-view="Timetable"><i>📅</i> Timetable</button>
        <button class="nav-item" data-view="Attendance"><i>✅</i> Attendance</button>
        <button class="nav-item" data-view="Exams"><i>✍️</i> Exams & Results</button>
        <button class="nav-item" data-view="Fees"><i>💰</i> Fees & Receipts</button>
        <button class="nav-item" data-view="HRMS"><i>👔</i> HRMS</button>
        <button class="nav-item" data-view="Finance"><i>📈</i> Finance</button>
        <button class="nav-item" data-view="Reports"><i>📋</i> ReportsHub</button>
        <button class="nav-item" data-view="Settings"><i>⚙️</i> Settings</button>
    `,Admissions:`
        <button class="nav-item active" data-view="Dashboard"><i>📊</i> Admin Dashboard</button>
        <button class="nav-item" data-view="Admissions"><i>🤝</i> Applications</button>
        <button class="nav-item" data-view="Reports"><i>📋</i> Lead Reports</button>
    `,Exams:`
        <button class="nav-item active" data-view="Exams"><i>✍️</i> Exam Controller</button>
        <button class="nav-item" data-view="Reports"><i>📋</i> Result Reports</button>
    `,Accounts:`
        <button class="nav-item active" data-view="Fees"><i>💰</i> Fee Control</button>
        <button class="nav-item" data-view="Finance"><i>📊</i> Collections</button>
        <button class="nav-item" data-view="Reports"><i>📋</i> Fee Reports</button>
    `,HR:`
        <button class="nav-item active" data-view="HRMS"><i>👔</i> HR Management</button>
        <button class="nav-item" data-view="Reports"><i>📋</i> Staff Reports</button>
    `,Finance:`
        <button class="nav-item active" data-view="Finance"><i>📈</i> Finance Admin</button>
        <button class="nav-item" data-view="Reports"><i>📋</i> Ledger Reports</button>
    `,Faculty:`
        <button class="nav-item active" data-view="Dashboard"><i>🏠</i> My Dashboard</button>
        <button class="nav-item" data-view="Academics"><i>📖</i> My Classes</button>
        <button class="nav-item" data-view="Attendance"><i>✅</i> Mark Attendance</button>
        <button class="nav-item" data-view="Exams"><i>📝</i> Enter Marks</button>
        <button class="nav-item" data-view="Reports"><i>📋</i> Class Reports</button>
    `,Student:`
        <button class="nav-item active" data-view="Dashboard"><i>🏠</i> My Home</button>
        <button class="nav-item" data-view="Timetable"><i>📅</i> Timetable</button>
        <button class="nav-item" data-view="Attendance"><i>✅</i> Attendance</button>
        <button class="nav-item" data-view="Exams"><i>✍️</i> Results</button>
        <button class="nav-item" data-view="Fees"><i>💰</i> My Fees</button>
        <button class="nav-item" data-view="Reports"><i>🔔</i> Notices</button>
    `},p={Dashboard:(n="Management")=>`
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">${n} Executive Dashboard</h1>
            <p style="color: var(--slate); font-size: 0.8rem; margin-top: 5px;">Institutional Overview for Academic Year 2026-27 &nbsp;|&nbsp; <span style="color: #64ffda;">All Systems Operational</span></p>
        </div>
        
        <div class="kpi-grid" style="margin-top: 30px;">
            <div class="kpi-card">
                <span class="kpi-label">Total Enrollment</span>
                <span class="kpi-val">${d.Students}</span>
                <div style="font-size: 0.65rem; color: var(--gold); font-weight: 700;">↑ 12% Growth</div>
            </div>
            <div class="kpi-card">
                <span class="kpi-label">Active Faculty</span>
                <span class="kpi-val">${d.Faculty}</span>
                <div style="font-size: 0.65rem; color: #64ffda; font-weight: 700;">Optimal Utilization</div>
            </div>
            <div class="kpi-card">
                <span class="kpi-label">Current Applications</span>
                <span class="kpi-val">${d.Admissions}</span>
                <div style="font-size: 0.65rem; color: #ffab00; font-weight: 700;">450 Pending Docs</div>
            </div>
            <div class="kpi-card">
                <span class="kpi-label">Revenue YTD</span>
                <span class="kpi-val">${d.Revenue}</span>
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
    `,SIS:()=>`
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
    `,Admissions:()=>`
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
    `,Academics:()=>`
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
    `,Exams:()=>`
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
    `,Fees:()=>`
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
    `,Finance:()=>`
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
                <table class="data-table" style="font-size: 0.75rem;">
                    <thead><tr><th>Date</th><th>Category</th><th>Beneficiary</th><th>Amount</th><th>Status</th></tr></thead>
                    <tbody>
                        <tr><td>Feb 18, 2026</td><td>Faculty Payroll</td><td>Global Disbursement</td><td>$840,000</td><td><span class="status-pill status-verified">PAID</span></td></tr>
                        <tr><td>Feb 17, 2026</td><td>Infrastructure</td><td>Cloud Services Node</td><td>$12,400</td><td><span class="status-pill status-verified">PAID</span></td></tr>
                        <tr><td>Feb 15, 2026</td><td>Marketing</td><td>Admissions Campaign</td><td>$45,000</td><td><span class="status-pill status-pending">IN_RECON</span></td></tr>
                    </tbody>
                </table>
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
    `,HRMS:()=>`
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
    `,Reports:()=>`
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
    `,Timetable:()=>`
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
    `,Settings:()=>`
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
    `,Attendance:()=>`
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

        <!-- Shortage / Defaulters List -->
        <div style="background: rgba(255,77,77,0.04); border-radius: 16px; border: 1px solid rgba(255,77,77,0.2); overflow: hidden; margin-top: 20px;">
            <div style="padding: 18px 22px; border-bottom: 1px solid rgba(255,77,77,0.2); display: flex; justify-content: space-between; align-items: center;">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: #ff4d4d;">⚠️ Defaulters List — Below 75% Attendance</h3>
                <button class="login-btn action-trigger" data-action="export_excel" style="width:auto;padding:6px 14px;font-size:0.65rem;">⏬ EXPORT_SHORTAGE</button>
            </div>
            <table class="data-table" style="font-size: 0.75rem;">
                <thead><tr><th>Scholar ID</th><th>Name</th><th>Program</th><th>Attendance %</th><th>Classes Attended</th><th>Total Classes</th><th>Notice</th></tr></thead>
                <tbody>
                    <tr><td>#CN-9825</td><td>Kabir Mehta</td><td>B.Tech CS</td><td style="color:#ff4d4d;font-weight:800;">71.4%</td><td>100</td><td>140</td><td><button class="login-btn action-trigger" data-action="send_notice" style="padding:4px 10px;font-size:0.6rem;width:auto;background:rgba(255,77,77,0.1);color:#ff4d4d;border-color:rgba(255,77,77,0.3);">SEND_NOTICE</button></td></tr>
                    <tr><td>#CN-9830</td><td>Anika Rao</td><td>MBA Finance</td><td style="color:#ff4d4d;font-weight:800;">68.2%</td><td>52</td><td>76</td><td><button class="login-btn action-trigger" data-action="send_notice" style="padding:4px 10px;font-size:0.6rem;width:auto;background:rgba(255,77,77,0.1);color:#ff4d4d;border-color:rgba(255,77,77,0.3);">SEND_NOTICE</button></td></tr>
                    <tr><td>#CN-9841</td><td>Farhan Sheikh</td><td>B.Tech CS</td><td style="color:#ff4d4d;font-weight:800;">72.9%</td><td>102</td><td>140</td><td><button class="login-btn action-trigger" data-action="send_notice" style="padding:4px 10px;font-size:0.6rem;width:auto;background:rgba(255,77,77,0.1);color:#ff4d4d;border-color:rgba(255,77,77,0.3);">SEND_NOTICE</button></td></tr>
                </tbody>
            </table>
        </div>
    `,Home:()=>`
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
    `},c={Overview:`
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
            <div>
                <h4 style="color: var(--gold); font-size: 0.75rem; margin-bottom: 25px; font-weight: 800; letter-spacing: 1px;">INSTITUTIONAL_IDENTITY</h4>
                <div class="biometric-list">
                    <div class="biometric-row" style="border-bottom: 1px solid var(--glass-border); padding: 12px 0;">
                        <span><i>🩸</i> Blood Group</span>
                        <span style="color: var(--white); font-weight: 700;">O+ Positive</span>
                    </div>
                    <div class="biometric-row" style="border-bottom: 1px solid var(--glass-border); padding: 12px 0;">
                        <span><i>📞</i> Emergency Contact</span>
                        <span style="color: var(--white); font-weight: 700;">+91 98765-XXXXX</span>
                    </div>
                    <div class="biometric-row" style="padding: 12px 0;">
                        <span><i>🆔</i> Regulatory Verification</span>
                        <span class="status-pill status-verified">VERIFIED</span>
                    </div>
                </div>
            </div>
            <div>
                <h4 style="color: var(--gold); font-size: 0.75rem; margin-bottom: 25px; font-weight: 800; letter-spacing: 1px;">EXECUTIVE_ACTIONS</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                    <div class="action-card action-trigger" data-action="download_id" style="background: rgba(255,255,255,0.03); cursor: pointer; text-align: center; border: 1px solid var(--glass-border); padding: 15px; border-radius: 12px;">
                        <i style="font-size: 1.5rem; color: var(--gold); display: block; margin-bottom: 8px;">📇</i>
                        <span style="font-size: 0.65rem; font-weight: 700; color: var(--slate);">Download ID</span>
                    </div>
                    <div class="action-card action-trigger" data-action="bonafide" style="background: rgba(255,255,255,0.03); cursor: pointer; text-align: center; border: 1px solid var(--glass-border); padding: 15px; border-radius: 12px;">
                        <i style="font-size: 1.5rem; color: var(--gold); display: block; margin-bottom: 8px;">📄</i>
                        <span style="font-size: 0.65rem; font-weight: 700; color: var(--slate);">Bonafide Gen</span>
                    </div>
                    <div class="action-card action-trigger" data-action="parent_connect" style="background: rgba(255,171,0,0.05); cursor: pointer; text-align: center; border: 1px solid rgba(255,171,0,0.2); padding: 15px; border-radius: 12px;">
                        <i style="font-size: 1.5rem; color: #ffab00; display: block; margin-bottom: 8px;">👪</i>
                        <span style="font-size: 0.65rem; font-weight: 700; color: #ffab00;">Parent Connect</span>
                    </div>
                    <div class="action-card action-trigger" data-action="reset_key" style="background: rgba(255,255,255,0.03); cursor: pointer; text-align: center; border: 1px solid var(--glass-border); padding: 15px; border-radius: 12px;">
                        <i style="font-size: 1.5rem; color: var(--slate); display: block; margin-bottom: 8px;">🔑</i>
                        <span style="font-size: 0.65rem; font-weight: 700; color: var(--slate);">Reset Access</span>
                    </div>
                </div>
            </div>
        </div>
    `,Academics:`
        <div class="slide-up">
            <h4 style="color: var(--gold); font-size: 0.75rem; margin-bottom: 20px; font-weight: 800;">Academic Progression Registry</h4>
            <div style="background: var(--glass); border: 1px solid var(--glass-border); border-radius: 12px; overflow: hidden;">
                <table class="data-table">
                    <thead><tr><th>Term / Sem</th><th>Primary Course</th><th>Grade</th><th>Status</th></tr></thead>
                    <tbody>
                        <tr><td>Semester 05</td><td>Algorithm Design</td><td>A+</td><td><span class="status-pill status-verified">CLEARED</span></td></tr>
                        <tr><td>Semester 06</td><td>Machine Learning</td><td>TBD</td><td><span class="status-pill status-pending">ENROLLED</span></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    `,Attendance:`
        <div class="slide-up">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px;">
                <div style="background: rgba(100,255,218,0.05); padding: 25px; border-radius: 12px; border: 1px solid rgba(100,255,218,0.2);">
                    <h5 style="font-size: 0.7rem; color: var(--gold); font-weight: 800; margin-bottom: 15px;">AGGREGATE_PRESENCE</h5>
                    <span style="font-size: 2.2rem; font-weight: 900; color: var(--white);">94.2%</span>
                </div>
            </div>
            <table class="data-table">
                <thead><tr><th>Date</th><th>Session</th><th>Capture Mode</th><th>Result</th></tr></thead>
                <tbody>
                    <tr><td>Feb 20, 2026</td><td>Morning Scan</td><td>Institutional_Bio</td><td><span class="status-pill status-verified">PRESENT</span></td></tr>
                </tbody>
            </table>
        </div>
    `,Exams:`
        <div class="slide-up">
            <h4 style="color: var(--gold); font-size: 0.75rem; margin-bottom: 20px; font-weight: 800;">Examination Credentials</h4>
            <div style="background: rgba(255,255,255,0.02); padding: 20px; border-radius: 12px; border-left: 4px solid var(--gold);">
                <span style="font-size: 0.65rem; color: var(--gold); font-weight: 800;">UPCOMING_ASSESSMENT</span>
                <h5 style="font-size: 0.9rem; margin-top: 5px; color: var(--white);">Final Theory: Distributed Systems & Cloud</h5>
                <button class="login-btn" style="margin-top: 15px; width: auto; padding: 8px 15px; font-size: 0.7rem;">DOWNLOAD_ADMIT_CARD</button>
            </div>
        </div>
    `,Fees:`
        <div class="slide-up">
            <div class="kpi-grid" style="grid-template-columns: repeat(3, 1fr); gap: 15px; margin-bottom: 30px;">
                <div class="kpi-card" style="padding: 20px; text-align: center;">
                    <span class="kpi-label" style="display: block; margin-bottom: 8px;">Total Due</span>
                    <span class="kpi-val" style="font-size: 1.4rem;">$8,500</span>
                </div>
                <div class="kpi-card" style="padding: 20px; text-align: center;">
                    <span class="kpi-label" style="display: block; margin-bottom: 8px;">Paid</span>
                    <span class="kpi-val" style="font-size: 1.4rem; color: var(--gold);">$7,200</span>
                </div>
                <div class="kpi-card" style="padding: 20px; text-align: center; background: rgba(255,77,77,0.05); border-color: rgba(255,77,77,0.2);">
                    <span class="kpi-label" style="display: block; margin-bottom: 8px; color: #ff4d4d;">Balance</span>
                    <span class="kpi-val" style="font-size: 1.4rem; color: #ff4d4d;">$1,300</span>
                </div>
            </div>
            <table class="data-table">
                <thead><tr><th>Receipt ID</th><th>Header</th><th>Date</th><th>Amount</th></tr></thead>
                <tbody>
                    <tr><td>#REC-4412</td><td>Tuition Fee (Sem 06)</td><td>Jan 15, 2026</td><td>$4,500</td></tr>
                </tbody>
            </table>
        </div>
    `},g={Dashboard:`
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;" class="slide-up">
            <div style="background: var(--glass); padding: 25px; border-radius: 12px; border: 1px solid var(--glass-border);">
                <h4 style="font-size: 0.8rem; font-weight: 700; margin-bottom: 20px; color: var(--gold);">Revenue Recognition Velocity</h4>
                <div style="height: 150px; background: rgba(0,0,0,0.2); border-radius: 10px; border: 1px dashed var(--glass-border); display: flex; align-items: center; justify-content: center; color: var(--slate); font-size: 0.75rem;">Revenue_Stream_Active</div>
                <button class="login-btn action-trigger" data-action="fee_demand" style="margin-top: 20px;">INITIALIZE_FEE_DEMAND</button>
            </div>
            <div style="background: var(--glass); padding: 25px; border-radius: 12px; border: 1px solid var(--glass-border);">
                <h4 style="font-size: 0.8rem; font-weight: 700; margin-bottom: 20px; color: var(--gold);">Exception Reconciliation Queue</h4>
                <table class="data-table" style="font-size: 0.75rem;">
                    <thead><tr><th>Ref ID</th><th>Scholar</th><th>Risk</th></tr></thead>
                    <tbody>
                        <tr><td>#FT-8812</td><td>Aarav Malhotra</td><td><span class="status-pill status-verified">LOW</span></td></tr>
                        <tr><td>#FT-8813</td><td>Isha Kapur</td><td><button class="login-btn action-trigger" style="padding: 5px 10px; font-size: 0.55rem; background: #ffab00; color: var(--navy-dark);">RECON</button></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    `},b={Directory:`
        <div class="slide-up">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold);">Employee Directory — All Campuses</h3>
                <div style="display: flex; gap: 10px;">
                    <input class="login-input" placeholder="Search employee..." style="margin:0;padding:8px 15px;font-size:0.7rem;width:200px;" />
                    <button class="login-btn action-trigger" data-action="export_excel" style="width:auto;padding:8px 16px;font-size:0.7rem;">⏬ EXPORT</button>
                </div>
            </div>
            <table class="data-table" style="font-size: 0.75rem;">
                <thead><tr><th>Resource ID</th><th>Name</th><th>Designation</th><th>Department</th><th>Campus</th><th>Salary Grade</th><th>Status</th><th>Action</th></tr></thead>
                <tbody>
                    <tr><td>#HR-001</td><td>Dr. Vikram Seth</td><td>Professor</td><td>Engineering</td><td>Main</td><td>G-7</td><td><span class="status-pill status-verified">ACTIVE</span></td><td><button class="login-btn" style="padding:4px 10px;font-size:0.6rem;width:auto;">VIEW_FILE</button></td></tr>
                    <tr><td>#HR-002</td><td>Prof. Anita Roy</td><td>Assoc. Professor</td><td>Commerce</td><td>City</td><td>G-6</td><td><span class="status-pill status-pending">ON_LEAVE</span></td><td><button class="login-btn" style="padding:4px 10px;font-size:0.6rem;width:auto;">VIEW_FILE</button></td></tr>
                    <tr><td>#HR-003</td><td>Dr. Ravi Kumar</td><td>HOD — CS</td><td>Engineering</td><td>Main</td><td>G-8</td><td><span class="status-pill status-verified">ACTIVE</span></td><td><button class="login-btn" style="padding:4px 10px;font-size:0.6rem;width:auto;">VIEW_FILE</button></td></tr>
                    <tr><td>#HR-004</td><td>Ms. Shruti Patel</td><td>Admin Officer</td><td>Administration</td><td>North</td><td>G-4</td><td><span class="status-pill status-verified">ACTIVE</span></td><td><button class="login-btn" style="padding:4px 10px;font-size:0.6rem;width:auto;">VIEW_FILE</button></td></tr>
                    <tr><td>#HR-005</td><td>Mr. Jay Mehta</td><td>Lab Instructor</td><td>Engineering</td><td>Main</td><td>G-5</td><td><span class="status-pill status-verified">ACTIVE</span></td><td><button class="login-btn" style="padding:4px 10px;font-size:0.6rem;width:auto;">VIEW_FILE</button></td></tr>
                    <tr><td>#HR-006</td><td>Dr. Meera Nair</td><td>Asst. Professor</td><td>Engineering</td><td>Main</td><td>G-5</td><td><span class="status-pill status-pending">SICK_LEAVE</span></td><td><button class="login-btn" style="padding:4px 10px;font-size:0.6rem;width:auto;">VIEW_FILE</button></td></tr>
                    <tr><td>#HR-007</td><td>Prof. Arjun Singh</td><td>Asst. Professor</td><td>Commerce</td><td>City</td><td>G-5</td><td><span class="status-pill status-verified">ACTIVE</span></td><td><button class="login-btn" style="padding:4px 10px;font-size:0.6rem;width:auto;">VIEW_FILE</button></td></tr>
                </tbody>
            </table>
        </div>
    `,Payroll:`
        <div class="slide-up" style="background: rgba(100,255,218,0.05); padding: 40px; border-radius: 16px; border: 1px solid rgba(100,255,218,0.2); text-align: center;">
            <h4 style="font-size: 1rem; color: var(--gold); font-weight: 800;">Institutional Payroll Dispatch</h4>
            <p style="color: var(--slate); font-size: 0.8rem; margin-top: 10px;">Ready for Cycle: FEBRUARY 2026</p>
            <button class="login-btn action-trigger" data-action="payroll" style="margin-top: 25px; max-width: 300px; background: var(--gold); color: var(--navy-dark);">EXECUTE_GLOBAL_DISBURSEMENT</button>
            <button class="login-btn action-trigger" data-action="gen_payslip" style="margin-top: 15px; max-width: 300px;">⏬ EXPORT_PAYSLIP_BATCH</button>
        </div>
    `,Leave:`
        <div class="slide-up">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
                <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--white);">Leave Management Console</h3>
                <div style="display: flex; gap: 10px;">
                    <select class="login-input" style="margin:0;padding:8px 15px;font-size:0.75rem;"><option>All Departments</option><option>Engineering</option><option>Finance</option></select>
                    <button class="login-btn action-trigger" data-action="export_excel" style="width:auto;padding:8px 18px;font-size:0.7rem;">⏬ EXPORT</button>
                </div>
            </div>

            <!-- Leave Balance Cards -->
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-bottom: 25px;">
                <div class="kpi-card" style="padding: 18px;"><span class="kpi-label">Casual Leave</span><span class="kpi-val" style="font-size:1.8rem;">8</span><div style="font-size:0.6rem;color:#64ffda;">of 12 remaining</div></div>
                <div class="kpi-card" style="padding: 18px;"><span class="kpi-label">Sick Leave</span><span class="kpi-val" style="font-size:1.8rem;">10</span><div style="font-size:0.6rem;color:var(--gold);">of 12 remaining</div></div>
                <div class="kpi-card" style="padding: 18px;"><span class="kpi-label">Earned Leave</span><span class="kpi-val" style="font-size:1.8rem;">18</span><div style="font-size:0.6rem;color:#64ffda;">Accumulated</div></div>
                <div class="kpi-card" style="padding: 18px;"><span class="kpi-label">Pending Requests</span><span class="kpi-val" style="font-size:1.8rem;color:#ffab00;">6</span><div style="font-size:0.6rem;color:#ffab00;">Awaiting HOD</div></div>
            </div>

            <!-- Leave Requests Table -->
            <div style="background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
                <div style="padding: 18px 22px; border-bottom: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center;">
                    <h4 style="font-size: 0.85rem; font-weight: 700; color: var(--gold);">Pending Leave Requests</h4>
                    <span class="status-pill status-pending">6 AWAITING</span>
                </div>
                <table class="data-table" style="font-size: 0.75rem;">
                    <thead><tr><th>Employee</th><th>Department</th><th>Type</th><th>From</th><th>To</th><th>Days</th><th>Reason</th><th>Approve</th><th>Reject</th></tr></thead>
                    <tbody>
                        <tr>
                            <td>Dr. Meera Nair</td><td>CS Dept.</td><td>Sick</td><td>Feb 22</td><td>Feb 24</td><td>3</td><td>Medical</td>
                            <td><button class="login-btn action-trigger" data-action="leave_approve" style="padding:4px 10px;font-size:0.6rem;width:auto;background:rgba(100,255,218,0.1);color:#64ffda;border-color:rgba(100,255,218,0.3);">APPROVE</button></td>
                            <td><button class="login-btn action-trigger" data-action="leave_reject" style="padding:4px 10px;font-size:0.6rem;width:auto;background:rgba(255,77,77,0.1);color:#ff4d4d;border-color:rgba(255,77,77,0.3);">REJECT</button></td>
                        </tr>
                        <tr>
                            <td>Prof. Arjun Singh</td><td>MBA Dept.</td><td>Casual</td><td>Feb 25</td><td>Feb 25</td><td>1</td><td>Personal</td>
                            <td><button class="login-btn action-trigger" data-action="leave_approve" style="padding:4px 10px;font-size:0.6rem;width:auto;background:rgba(100,255,218,0.1);color:#64ffda;border-color:rgba(100,255,218,0.3);">APPROVE</button></td>
                            <td><button class="login-btn action-trigger" data-action="leave_reject" style="padding:4px 10px;font-size:0.6rem;width:auto;background:rgba(255,77,77,0.1);color:#ff4d4d;border-color:rgba(255,77,77,0.3);">REJECT</button></td>
                        </tr>
                        <tr>
                            <td>Mr. Zaid Ahmed</td><td>Finance</td><td>Earned</td><td>Mar 1</td><td>Mar 5</td><td>5</td><td>Family event</td>
                            <td><button class="login-btn action-trigger" data-action="leave_approve" style="padding:4px 10px;font-size:0.6rem;width:auto;background:rgba(100,255,218,0.1);color:#64ffda;border-color:rgba(100,255,218,0.3);">APPROVE</button></td>
                            <td><button class="login-btn action-trigger" data-action="leave_reject" style="padding:4px 10px;font-size:0.6rem;width:auto;background:rgba(255,77,77,0.1);color:#ff4d4d;border-color:rgba(255,77,77,0.3);">REJECT</button></td>
                        </tr>
                        <tr>
                            <td>Ms. Priya Nair</td><td>CS Dept.</td><td>Sick</td><td>Feb 21</td><td>Feb 21</td><td>1</td><td>Fever</td>
                            <td><button class="login-btn action-trigger" data-action="leave_approve" style="padding:4px 10px;font-size:0.6rem;width:auto;background:rgba(100,255,218,0.1);color:#64ffda;border-color:rgba(100,255,218,0.3);">APPROVE</button></td>
                            <td><button class="login-btn action-trigger" data-action="leave_reject" style="padding:4px 10px;font-size:0.6rem;width:auto;background:rgba(255,77,77,0.1);color:#ff4d4d;border-color:rgba(255,77,77,0.3);">REJECT</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `},v={Admissions:`
        <div class="slide-up">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 30px;">
                <div>
                    <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--white);">Admissions Conversion Analysis</h3>
                    <p style="color: var(--gold); font-size: 0.7rem; margin-top: 4px; font-weight: 700;">NODE_ID: RPT-ADM-99x | AY 2026-27</p>
                </div>
                <div style="display: flex; gap: 12px;">
                    <button class="login-btn action-trigger" data-action="export_csv" style="width: auto; padding: 10px 20px; font-size: 0.7rem;">CSV_SYNC</button>
                    <button class="login-btn action-trigger" data-action="export_pdf" style="width: auto; padding: 10px 20px; font-size: 0.7rem; background: var(--gold); color: var(--navy-dark);">GENERATE_MASTER_PDF</button>
                </div>
            </div>

            <div class="kpi-grid" style="grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 35px;">
                <div class="kpi-card" style="padding: 20px; background: rgba(100,255,218,0.03);">
                    <span class="kpi-label">Total Leads</span>
                    <span class="kpi-val" style="font-size: 1.5rem;">4,240</span>
                    <span style="font-size: 0.6rem; color: #64ffda;">↑ 18% month-over-month</span>
                </div>
                <div class="kpi-card" style="padding: 20px; background: rgba(255,171,0,0.03);">
                    <span class="kpi-label">Conversion Rate</span>
                    <span class="kpi-val" style="font-size: 1.5rem; color: var(--gold);">32.4%</span>
                    <span style="font-size: 0.6rem; color: var(--gold);">Target: 35.0%</span>
                </div>
                <div class="kpi-card" style="padding: 20px; background: rgba(255,255,255,0.03);">
                    <span class="kpi-label">Revenue Impact</span>
                    <span class="kpi-val" style="font-size: 1.5rem;">$1.2M</span>
                    <span style="font-size: 0.6rem; color: var(--slate);">Verified Deposits</span>
                </div>
            </div>

            <table class="data-table" style="font-size: 0.8rem;">
                <thead>
                    <tr><th>Lead Source</th><th>Inquiry Node</th><th>Verification</th><th>Conv. Rate</th><th>Performance</th></tr>
                </thead>
                <tbody>
                    <tr><td>Organic Web Search</td><td>1,250</td><td><span class="status-pill status-verified">92%</span></td><td style="color: var(--gold); font-weight: 800;">42%</td><td><div style="width: 100px; height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px;"><div style="width: 84%; height: 100%; background: #64ffda;"></div></div></td></tr>
                    <tr><td>Direct Referrals</td><td>850</td><td><span class="status-pill status-verified">98%</span></td><td style="color: var(--gold); font-weight: 800;">68%</td><td><div style="width: 100px; height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px;"><div style="width: 95%; height: 100%; background: #64ffda;"></div></div></td></tr>
                </tbody>
            </table>
        </div>
    `,Academics:`
        <div class="slide-up">
            <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--white); margin-bottom: 30px;">Academic Progression Registry</h3>
            <div class="kpi-grid" style="grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
                <div class="kpi-card"><span class="kpi-label">Avg CGPA</span><span class="kpi-val">8.42</span></div>
                <div class="kpi-card"><span class="kpi-label">Pass Rate</span><span class="kpi-val" style="color: #64ffda;">98.4%</span></div>
            </div>
            <table class="data-table">
                <thead><tr><th>Batch</th><th>Active Students</th><th>Credits Earned</th><th>Status</th></tr></thead>
                <tbody>
                    <tr><td>B.Tech CS 2023</td><td>124</td><td>15,400</td><td><span class="status-pill status-verified">OPTIMAL</span></td></tr>
                    <tr><td>BBA 2024</td><td>85</td><td>8,200</td><td><span class="status-pill status-verified">OPTIMAL</span></td></tr>
                </tbody>
            </table>
        </div>
    `,Revenue:`
        <div class="slide-up">
            <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--white); margin-bottom: 30px;">Revenue & Dues Telemetry</h3>
            <div class="kpi-grid" style="grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 30px;">
                <div class="kpi-card"><span class="kpi-label">Expected</span><span class="kpi-val">$5.4M</span></div>
                <div class="kpi-card"><span class="kpi-label">Collected</span><span class="kpi-val" style="color: var(--gold);">$4.1M</span></div>
                <div class="kpi-card"><span class="kpi-label">Outstanding</span><span class="kpi-val" style="color: #ff4d4d;">$1.3M</span></div>
            </div>
            <table class="data-table">
                <thead><tr><th>Fee Head</th><th>Total Target</th><th>Realized</th><th>Gap</th></tr></thead>
                <tbody>
                    <tr><td>Tuition Node</td><td>$4.2M</td><td>$3.5M</td><td>$0.7M</td></tr>
                    <tr><td>Hostel Node</td><td>$1.2M</td><td>$0.6M</td><td>$0.6M</td></tr>
                </tbody>
            </table>
        </div>
    `,Staff:`
        <div class="slide-up">
            <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--white); margin-bottom: 30px;">Staff Productivity & Load</h3>
            <div class="kpi-grid" style="grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
                <div class="kpi-card"><span class="kpi-label">Faculty Utilization</span><span class="kpi-val">82%</span></div>
                <div class="kpi-card"><span class="kpi-label">Resigned/Attrition</span><span class="kpi-val" style="color: #ff4d4d;">1.2%</span></div>
            </div>
            <table class="data-table">
                <thead><tr><th>Department</th><th>Resource Count</th><th>Avg Load (Hrs)</th><th>Health</th></tr></thead>
                <tbody>
                    <tr><td>Engineering</td><td>45</td><td>18/wk</td><td><span class="status-pill status-verified">STABLE</span></td></tr>
                    <tr><td>Management</td><td>22</td><td>14/wk</td><td><span class="status-pill status-verified">STABLE</span></td></tr>
                </tbody>
            </table>
        </div>
    `,Compliance:`
        <div class="slide-up">
            <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--white); margin-bottom: 30px;">Compliance & Regulatory Registry</h3>
            <div style="background: rgba(100,255,218,0.02); padding: 30px; border-radius: 16px; border: 1px dashed var(--glass-border); text-align: center; color: var(--slate);">
                <i style="font-size: 3rem; color: var(--gold); display: block; margin-bottom: 20px;">🏛️</i>
                <p style="font-size: 0.9rem; font-weight: 700;">INSTITUTIONAL_COMPLIANCE_NODE_ACTIVE</p>
                <p style="font-size: 0.7rem; margin-top: 10px;">All regulatory filings for FY 2025-26 are synchronized with the Central Gateway.</p>
                <button class="login-btn action-trigger" data-action="run_audit" style="margin-top: 25px; max-width: 250px;">GENERATE_COMPLIANCE_AUDIT</button>
            </div>
        </div>
    `},f={Security:`
        <div class="slide-up">
            <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--white); margin-bottom: 30px;">Security Control Center</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
                <div style="background: rgba(100,255,218,0.05); padding: 25px; border-radius: 12px; border: 1px solid rgba(100,255,218,0.2);">
                    <h4 style="font-size: 0.75rem; color: var(--gold); font-weight: 800; margin-bottom: 10px;">TWO_FACTOR_AUTH</h4>
                    <p style="font-size: 0.65rem; color: var(--slate); margin-bottom: 15px;">Biometric & Mobile OTP Gateway Active</p>
                    <span class="status-pill status-verified">SECURE_NODE</span>
                </div>
                <div style="background: rgba(255,255,255,0.02); padding: 25px; border-radius: 12px; border: 1px solid var(--glass-border);">
                    <h4 style="font-size: 0.75rem; color: var(--white); font-weight: 800; margin-bottom: 10px;">PASS_ROTATION_POLICY</h4>
                    <p style="font-size: 0.65rem; color: var(--slate); margin-bottom: 15px;">Next mandated change in 42 days</p>
                    <button class="login-btn action-trigger" data-action="rotate_pass" style="width: auto; padding: 8px 15px; font-size: 0.6rem;">ROTATE_NOW</button>
                </div>
            </div>
            <div style="background: var(--glass); padding: 25px; border-radius: 12px; border: 1px solid var(--glass-border);">
                <h4 style="font-size: 0.8rem; font-weight: 700; color: var(--gold); margin-bottom: 20px;">Active Login Sessions</h4>
                <table class="data-table" style="font-size: 0.75rem;">
                    <thead><tr><th>Device Node</th><th>Location</th><th>Last Activity</th><th>Action</th></tr></thead>
                    <tbody>
                        <tr>
                            <td>🖥️ Windows Desktop</td>
                            <td>New Delhi, IN</td>
                            <td><span class="status-pill status-verified">CURRENT</span></td>
                            <td style="color: var(--slate); font-size: 0.65rem;">Primary</td>
                        </tr>
                        <tr>
                            <td>📱 Mobile Gateway (iOS)</td>
                            <td>Mumbai, IN</td>
                            <td>2h 14m ago</td>
                            <td><button class="login-btn action-trigger" data-action="terminate_session" style="padding: 4px 12px; font-size: 0.55rem; width: auto; background: rgba(255,77,77,0.1); color: #ff4d4d; border-color: rgba(255,77,77,0.3);">TERMINATE</button></td>
                        </tr>
                        <tr>
                            <td>💻 MacBook Node</td>
                            <td>Bengaluru, IN</td>
                            <td>Yesterday 11:30 PM</td>
                            <td><button class="login-btn action-trigger" data-action="terminate_session" style="padding: 4px 12px; font-size: 0.55rem; width: auto; background: rgba(255,77,77,0.1); color: #ff4d4d; border-color: rgba(255,77,77,0.3);">TERMINATE</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `,Branding:`
        <div class="slide-up">
            <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--white); margin-bottom: 30px;">Institutional Identity Configuration</h3>
            <div style="display: grid; grid-template-columns: 280px 1fr; gap: 30px;">
                <div style="background: rgba(255,255,255,0.02); padding: 30px; border-radius: 16px; border: 1px dashed rgba(255,171,0,0.3); text-align: center;">
                    <div style="width: 120px; height: 120px; background: var(--navy-dark); border: 2px solid var(--gold); border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-weight: 900; font-size: 1.6rem; color: white;">C<span style="color: var(--gold);">N</span></div>
                    <p style="font-size: 0.6rem; color: var(--slate); margin-bottom: 15px;">INSTITUTIONAL_MARK_ALPHA</p>
                    <button class="login-btn action-trigger" data-action="upload_logo" style="font-size: 0.65rem;">UPLOAD_NEW_EMBLEM</button>
                </div>
                <div style="display: flex; flex-direction: column; gap: 20px;">
                    <div>
                        <label style="font-size: 0.65rem; color: var(--slate); display: block; margin-bottom: 8px; letter-spacing: 1px;">INSTITUTION_NAME_NODE</label>
                        <input type="text" class="login-input" value="CampusNexus Sovereign Institute" style="margin: 0;">
                    </div>
                    <div>
                        <label style="font-size: 0.65rem; color: var(--slate); display: block; margin-bottom: 8px;">ACCREDITATION_TAGLINE</label>
                        <input type="text" class="login-input" value="Sovereign Institutional ERP Node 1.0" style="margin: 0;">
                    </div>
                    <div>
                        <label style="font-size: 0.65rem; color: var(--slate); display: block; margin-bottom: 8px;">ACCENT_COLOR_NODE (HEX)</label>
                        <div style="display: flex; gap: 10px; align-items: center;">
                            <input type="text" class="login-input" value="#B8860B" style="margin: 0; width: 130px;">
                            <div style="width: 40px; height: 40px; background: var(--gold); border-radius: 8px; border: 1px solid var(--glass-border); flex-shrink: 0;"></div>
                        </div>
                    </div>
                    <button class="login-btn action-trigger" data-action="commit_branding" style="width: 250px; background: var(--gold); color: var(--navy-dark);">COMMIT_BRANDING_SYNC</button>
                </div>
            </div>
        </div>
    `,System:`
        <div class="slide-up">
            <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--white); margin-bottom: 30px;">System Global Parameters</h3>
            <div style="background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--glass-border); padding: 20px 25px;">
                    <div>
                        <h5 style="font-size: 0.8rem; color: var(--white); font-weight: 700;">Automatic Log Backup</h5>
                        <p style="font-size: 0.65rem; color: var(--slate); margin-top: 4px;">Sync system audit logs to cold storage node daily</p>
                    </div>
                    <button class="login-btn action-trigger" data-action="toggle_setting" style="width: 90px; padding: 8px; font-size: 0.65rem; background: rgba(100,255,218,0.15); color: #64ffda; border-color: rgba(100,255,218,0.3);">● ACTIVE</button>
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
                    <button class="login-btn action-trigger" data-action="toggle_setting" style="width: 90px; padding: 8px; font-size: 0.65rem; background: rgba(100,255,218,0.15); color: #64ffda; border-color: rgba(100,255,218,0.3);">● ACTIVE</button>
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
    `,Preferences:`
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
                        <option>Arabic (Al-Majaz Node)</option>
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
            <button class="login-btn action-trigger" data-action="save_prefs" style="width: 280px; background: var(--gold); color: var(--navy-dark);">COMMIT_PREFERENCE_SYNC</button>
        </div>
    `};class u{constructor(){this.ctx=null,this.particles=[],this.isLoggedIn=localStorage.getItem("isLoggedIn")==="true",this.userRole=localStorage.getItem("userRole")||"Management",this.activeCollege=localStorage.getItem("activeCollege")||"MAIN_CAMPUS",this.init()}init(){this.initParticles(),this.attachGlobalListeners(),this.checkInitialState(),this.render(),this.startPulse()}startPulse(){setInterval(()=>{document.querySelectorAll(".kpi-val").forEach(a=>{if(a.innerText.includes("%")||a.innerText.includes("$"))return;const e=parseInt(a.innerText);if(isNaN(e))return;const s=Math.random()>.5?1:-1;Math.random()>.8&&(a.innerText=e+s,a.style.color=s>0?"#64ffda":"#ff4d4d",setTimeout(()=>a.style.color="",1e3))})},5e3)}render(){this.isLoggedIn?this.renderShell():this.renderLogin()}renderLogin(){document.body.innerHTML=`
            <div id="login-screen" class="login-container">
                <canvas id="bg-canvas"></canvas>
                <div class="login-card slide-up">
                    <div class="logo">CAMPUS<span>NEXUS</span></div>
                    <div class="subtitle">Sovereign ERP Intelligence Hub 1.0</div>
                    <div style="margin-bottom: 25px; text-align: left;">
                        <label style="font-size: 0.6rem; color: var(--gold); letter-spacing: 2px; margin-bottom: 8px; display: block;">SELECT_PERSONA_NODE</label>
                        <select id="role-select" class="login-input">
                            <option value="Management">Management Viewer (Super)</option>
                            <option value="Admissions">Admissions Officer</option>
                            <option value="Exams">Exam Cell Controller</option>
                            <option value="Accounts">Accounts & Fees Admin</option>
                            <option value="HR">HR Administrator</option>
                            <option value="Finance">Finance Administrator</option>
                            <option value="Faculty">Faculty Member</option>
                            <option value="Student">Student Sovereign</option>
                        </select>
                        <input type="password" class="login-input" placeholder="ACCESS_KEY" value="********">
                    </div>
                    <button id="login-trigger" class="login-btn">INITIALIZE_SESSION</button>
                    <div style="margin-top: 25px; font-size: 0.6rem; color: var(--slate); letter-spacing: 1px;">
                        SYSTEM_ID: 0x4421-B | STATUS: OPTIMAL
                    </div>
                </div>
            </div>
        `,this.initParticles(),document.getElementById("login-trigger").addEventListener("click",()=>this.handleLogin())}renderShell(){document.body.innerHTML=`
            <div class="app-shell">
                <canvas id="bg-canvas"></canvas>

                <!-- Sidebar overlay backdrop (mobile) -->
                <div id="sidebar-overlay"></div>

                <aside class="sidebar slide-right">
                    <div class="logo" style="padding: 10px 0; margin-bottom: 15px;">CAMPUS<span>NEXUS</span></div>
                    <nav id="nav-container">
                        ${l[this.userRole]||l.Management}
                    </nav>
                    <div style="margin-top: auto; padding-top: 20px;">
                        <button id="logout-trigger" class="login-btn" style="background: rgba(255,77,77,0.1); color: #ff4d4d; border-color: rgba(255,77,77,0.2); font-size: 0.75rem;">TERMINATE_SESSION</button>
                    </div>
                </aside>

                <main class="main-content">
                    <header class="header slide-down">
                        <!-- Hamburger (mobile only) -->
                        <button id="menu-toggle" aria-label="Open menu">☰</button>

                        <div class="search-bar">
                            <i>🔍</i>
                            <input type="text" id="global-search" placeholder="Search records..." style="background: transparent; border: none; color: white; width: 100%; outline: none; font-size: 0.85rem;">
                        </div>

                        <div class="header-actions">
                            <select id="college-select" style="background: var(--glass); border: 1px solid var(--glass-border); color: var(--gold); padding: 6px 12px; border-radius: 6px; outline: none; font-size: 0.7rem; font-family: Inter, sans-serif;">
                                <option ${this.activeCollege==="MAIN_CAMPUS"?"selected":""}>MAIN_CAMPUS</option>
                                <option ${this.activeCollege==="CITY_CAMPUS"?"selected":""}>CITY_CAMPUS</option>
                                <option ${this.activeCollege==="NORTH_CAMPUS"?"selected":""}>NORTH_CAMPUS</option>
                            </select>
                            <div class="profile-chip">
                                <span style="font-size: 0.6rem; color: var(--gold); letter-spacing: 1px;">${this.userRole.toUpperCase()}_NODE</span>
                                <div style="width: 32px; height: 32px; background: linear-gradient(135deg, var(--gold), #00fa9a); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink:0;">👤</div>
                            </div>
                        </div>
                    </header>

                    <div id="view-container"></div>
                </main>
            </div>

            <!-- Mobile Bottom Navigation -->
            <nav id="mobile-bottom-nav">
                <div class="bottom-nav-grid">
                    <button class="bottom-nav-item nav-item active" data-view="Dashboard">
                        <i>📊</i><span>Home</span>
                    </button>
                    <button class="bottom-nav-item nav-item" data-view="SIS">
                        <i>👥</i><span>Students</span>
                    </button>
                    <button class="bottom-nav-item nav-item" data-view="Admissions">
                        <i>🤝</i><span>Admit</span>
                    </button>
                    <button class="bottom-nav-item nav-item" data-view="Fees">
                        <i>💰</i><span>Fees</span>
                    </button>
                    <button class="bottom-nav-item nav-item" data-view="Reports">
                        <i>📋</i><span>Reports</span>
                    </button>
                </div>
            </nav>

            <div id="toast-container" style="position: fixed; bottom: 90px; right: 16px; z-index: 9999; max-width: calc(100vw - 32px);"></div>
            <div id="modal-container"></div>
        `,this.initParticles(),this.renderView("Dashboard"),this.attachShellListeners(),this.attachMobileListeners()}renderView(t){console.log(`Switching view to: ${t}`);const a=document.getElementById("view-container");if(!a)return;const e=t==="Analytics"?"Reports":t;p[e]?(a.innerHTML=p[e](this.userRole),document.querySelectorAll(".nav-item").forEach(s=>{const i=s.dataset.view===e;s.classList.toggle("active",i)}),e==="Fees"&&this.renderSubSection("Fees","Dashboard"),e==="HRMS"&&this.renderSubSection("HRMS","Directory"),e==="Reports"&&this.renderSubSection("Reports","Admissions"),e==="Settings"&&this.renderSubSection("Settings","Security")):(console.error(`View not found: ${e}`),a.innerHTML=`<div style="padding: 40px; text-align: center; color: var(--slate);">Module [${e}] Node Under Maintenance or Unauthorized.</div>`)}renderSubSection(t,a){const e=`${t.toLowerCase()}-section-container`,s=document.getElementById(e);if(!s)return;const i={Finance:g,Fees:g,HRMS:b,Reports:v,Settings:f};i[t]&&i[t][a]&&(s.innerHTML=i[t][a],document.querySelectorAll(".inner-tab-trigger").forEach(o=>{const r=o.dataset.view===t&&o.dataset.sub===a;o.classList.toggle("active",r)}))}renderProfile(t){const a=document.getElementById("modal-container");a&&(a.innerHTML=`
            <div class="modal-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); backdrop-filter: blur(10px); z-index: 10000; display: flex; align-items: center; justify-content: center;">
                <div class="profile-modal slide-up">
                    <button class="close-hub">×</button>
                    <div style="display: flex; gap: 30px; margin-bottom: 30px; align-items: center;">
                        <div style="width: 100px; height: 100px; border-radius: 20px; background: linear-gradient(135deg, var(--gold), #00fa9a); border: 2px solid rgba(100, 255, 218, 0.3); display: flex; align-items: center; justify-content: center; font-size: 2rem;">👤</div>
                        <div>
                            <span class="breadcrumb" style="margin: 0; opacity: 0.6;">#SCHOLAR_NODE_${t}</span>
                            <h2 style="color: var(--white); margin: 5px 0; font-family: 'Playfair Display'; font-size: 2rem;">Aarav Malhotra</h2>
                            <p style="color: var(--gold); font-size: 0.8rem; font-weight: 600; letter-spacing: 1px;">B.Tech Computer Science | Semester 06</p>
                        </div>
                    </div>
                    <div class="inner-tabs">
                        <div class="inner-tab active profile-tab-trigger" data-tab="Overview">OVERVIEW</div>
                        <div class="inner-tab profile-tab-trigger" data-tab="Academics">ACADEMICS</div>
                        <div class="inner-tab profile-tab-trigger" data-tab="Attendance">ATTENDANCE</div>
                        <div class="inner-tab profile-tab-trigger" data-tab="Fees">FINANCIALS</div>
                    </div>
                    <div id="profile-tab-content" style="min-height: 250px;">
                        ${c.Overview}
                    </div>
                </div>
            </div>
        `,a.querySelector(".close-hub").onclick=()=>a.innerHTML="",a.querySelectorAll(".profile-tab-trigger").forEach(e=>{e.onclick=()=>{const s=e.dataset.tab;document.getElementById("profile-tab-content").innerHTML=c[s]||"Content Missing",a.querySelectorAll(".profile-tab-trigger").forEach(i=>i.classList.toggle("active",i===e))}}))}showToast(t,a="success"){const e=document.getElementById("toast-container");if(!e)return;const s=document.createElement("div");s.className=`toast slide-up ${a}`,s.style.cssText=`
            background: var(--glass);
            border-left: 4px solid ${a==="success"?"#64ffda":"var(--gold)"};
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            margin-top: 10px;
            font-size: 0.8rem;
            backdrop-filter: blur(10px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        `,s.innerHTML=`<strong>${a.toUpperCase()}:</strong> ${t}`,e.appendChild(s),setTimeout(()=>s.remove(),4e3)}handleLogin(){const t=document.getElementById("role-select").value;this.isLoggedIn=!0,this.userRole=t,localStorage.setItem("isLoggedIn","true"),localStorage.setItem("userRole",t),this.showToast(`SESSION_INITIALIZED: ${t}_NODE_CALIBRATED`),this.render()}handleLogout(){this.isLoggedIn=!1,localStorage.removeItem("isLoggedIn"),this.showToast("SESSION_TERMINATED","warning"),this.render()}attachGlobalListeners(){window.addEventListener("resize",()=>this.initParticles()),document.addEventListener("click",t=>{const a=t.target.closest(".nav-item");a&&this.renderView(a.dataset.view);const e=t.target.closest(".inner-tab-trigger");e&&this.renderSubSection(e.dataset.view,e.dataset.sub);const s=t.target.closest(".profile-trigger");s&&this.renderProfile(s.dataset.id);const i=t.target.closest(".action-trigger");i&&this.executeActionSequence(i.dataset.action),t.target.id==="logout-trigger"&&this.handleLogout()})}executeActionSequence(t){if(!t)return;const a={download_id:[{msg:"INITIALIZING_SECURE_EXTRACT...",type:"success",delay:0},{msg:"ENCRYPTING_ID_NODE_0xCC...",type:"success",delay:1500},{msg:"DOCUMENT_DISPATCHED_TO_LOCAL_NODE",type:"success",delay:3e3}],bonafide:[{msg:"VERIFYING_ACADEMIC_REGISTRY...",type:"success",delay:0},{msg:"GENERATING_INSTITUTIONAL_SEAL...",type:"success",delay:1200},{msg:"BONAFIDE_CERTIFICATE_READY_FOR_DISPATCH",type:"success",delay:2500}],parent_connect:[{msg:"ESTABLISHING_MOBILE_GATEWAY...",type:"success",delay:0},{msg:"SECURE_LINK_SENT_TO_REGISTERED_NODE",type:"success",delay:1e3}],reset_key:[{msg:"SECURITY_PROTOCOL_OVERRIDE_INIT...",type:"warning",delay:0},{msg:"REGENERATING_NEURAL_ACCESS_KEY...",type:"warning",delay:1500},{msg:"ACCESS_KEY_REFRESHED_SUCCESSFULLY",type:"success",delay:3e3}],fee_demand:[{msg:"COMPILING_PENDING_FEE_REGISTRY...",type:"success",delay:0},{msg:"DISPATCHING_GLOBAL_DEMANDS_TO_DEBTORS",type:"success",delay:2e3}],payroll:[{msg:"AUTHORIZING_INSTITUTIONAL_CORE...",type:"warning",delay:0},{msg:"EXECUTING_BATCH_CREDIT_SEQUENCE...",type:"success",delay:1800},{msg:"PAYROLL_DISPATCH_COMPLETE",type:"success",delay:3500}],rotate_pass:[{msg:"SECURITY_OVERRIDE_INITIATED...",type:"warning",delay:0},{msg:"GENERATING_NEW_CIPHER_KEY...",type:"warning",delay:1200},{msg:"PASS_ROTATION_COMPLETE: Notify sent to registered mobile",type:"success",delay:2800}],terminate_session:[{msg:"BROADCASTING_TERMINATE_SIGNAL...",type:"warning",delay:0},{msg:"SESSION_NODE_PURGED_SUCCESSFULLY",type:"success",delay:1500}],commit_branding:[{msg:"VALIDATING_INSTITUTIONAL_ASSETS...",type:"success",delay:0},{msg:"SYNCING_BRAND_NODE_TO_CLUSTER...",type:"success",delay:1500},{msg:"BRANDING_COMMIT_SUCCESSFUL",type:"success",delay:3e3}],toggle_setting:[{msg:"TOGGLING_SYSTEM_PARAMETER...",type:"warning",delay:0},{msg:"GLOBAL_PARAMETER_STATE_UPDATED",type:"success",delay:1200}],schedule_maint:[{msg:"QUERYING_MAINTENANCE_SCHEDULER...",type:"success",delay:0},{msg:"NEW_WINDOW_COMMITTED_TO_CLUSTER",type:"success",delay:1800}],save_prefs:[{msg:"BINDING_PREFERENCE_SNAPSHOT...",type:"success",delay:0},{msg:"WORKSPACE_CONFIGURATION_SYNCED",type:"success",delay:1500}],upload_logo:[{msg:"AWAITING_ASSET_NODE_UPLOAD...",type:"warning",delay:0},{msg:"EMBLEM_SUBMITTED_FOR_APPROVAL",type:"success",delay:1e3}],publish_results:[{msg:"VALIDATING_MARKS_REGISTRY...",type:"warning",delay:0},{msg:"GENERATING_GRADE_COMPUTATION_MATRIX...",type:"success",delay:1500},{msg:"RESULT_PUBLISHED: Students notified via portal",type:"success",delay:3e3}],gen_payslip:[{msg:"COMPILING_PAYROLL_REGISTER...",type:"warning",delay:0},{msg:"ENCRYPTING_PAYSLIP_NODES...",type:"success",delay:1500},{msg:"PAYSLIP_BATCH_EXPORTED: 1,250 records",type:"success",delay:3e3}],leave_approve:[{msg:"FETCHING_LEAVE_BALANCE...",type:"warning",delay:0},{msg:"LEAVE_SANCTIONED: Balance updated",type:"success",delay:1500}],leave_reject:[{msg:"LEAVE_REQUEST_DECLINED: Notify sent",type:"warning",delay:0}],fee_demand_gen:[{msg:"SCANNING_ELIGIBLE_ACCOUNTS...",type:"warning",delay:0},{msg:"GENERATING_DEMAND_NOTICES...",type:"success",delay:1800},{msg:"FEE_DEMAND_DISPATCHED: 10,245 notices sent",type:"success",delay:3500}],add_program:[{msg:"INITIALIZING_PROGRAM_NODE...",type:"success",delay:0},{msg:"PROGRAM_SCHEMA_COMMITTED: Pending HOD approval",type:"success",delay:1500}],add_course:[{msg:"COURSE_NODE_CREATED: Pending faculty assignment",type:"success",delay:0}],publish_course:[{msg:"VALIDATING_COURSE_METADATA...",type:"warning",delay:0},{msg:"COURSE_PUBLISHED: Visible in timetable",type:"success",delay:1500}],convert_applicant:[{msg:"VERIFYING_APPLICANT_RECORD...",type:"warning",delay:0},{msg:"CREATING_STUDENT_PROFILE_NODE...",type:"success",delay:1500},{msg:"ENROLMENT_COMPLETE: SIS Record #10246 created",type:"success",delay:3e3}],send_notice:[{msg:"DRAFTING_SHORTAGE_NOTICE...",type:"warning",delay:0},{msg:"NOTICE_DISPATCHED: Student & Parent node notified",type:"success",delay:1500}],mark_all_present:[{msg:"UPDATING_ATTENDANCE_REGISTER...",type:"success",delay:0},{msg:"ATTENDANCE_MARKED: All present — registry sealed",type:"success",delay:1200}],init_audit:[{msg:"SUBMITTING_AUDIT_REQUEST_TO_CONTROLLER...",type:"warning",delay:0},{msg:"INTERNAL_AUDIT_SCHEDULED: Confirmation sent",type:"success",delay:2e3}],payroll_run:[{msg:"VALIDATING_PAYROLL_ENTRIES...",type:"warning",delay:0},{msg:"PAYROLL_CYCLE_INITIATED: Batch processing...",type:"success",delay:1800},{msg:"PAYROLL_RUN_COMPLETE: FEB 2026 closed",type:"success",delay:3500}],doc_verify:[{msg:"FETCHING_DOCUMENT_BUNDLE...",type:"warning",delay:0},{msg:"OCR_SCAN_PROCESSING: 3 documents detected",type:"success",delay:1200},{msg:"VERIFICATION_COMPLETE: Applicant status → VERIFIED",type:"success",delay:2600}],seat_offer:[{msg:"CHECKING_SEAT_AVAILABILITY...",type:"warning",delay:0},{msg:"SEAT_ALLOCATED: Offer letter dispatched to applicant",type:"success",delay:1800}],run_audit:[{msg:"GENERATING_COMPLIANCE_AUDIT_REPORT...",type:"warning",delay:0},{msg:"SCANNING_REGULATORY_REGISTRY...",type:"success",delay:1500},{msg:"COMPLIANCE_AUDIT_COMPLETE: Report ready",type:"success",delay:3e3}]};if(t==="new_applicant"){this.renderApplicantForm();return}if(t==="hall_ticket"){this.showHallTicket();return}if(t&&t.startsWith("export_")){this.simulateExport(t);return}(a[t]||[{msg:`EXECUTING: ${t.toUpperCase()}`,type:"success",delay:0}]).forEach(s=>{setTimeout(()=>this.showToast(s.msg,s.type),s.delay)})}simulateExport(t){const e={export_pdf:"CampusNexus_Report.pdf",export_excel:"CampusNexus_Data.xlsx",export_csv:"CampusNexus_Data.csv",export_balance_sheet:"Finance_Summary.pdf",export_payroll:"Payroll_Register.xlsx",export_catalog:"Academic_Catalog.xlsx"}[t]||"CampusNexus_Export.pdf",s=`ID,Name,Amount,Status
#001,Sample Record,1000,Active
#002,Demo Entry,2500,Paid
#003,Test Node,800,Pending`,i=new Blob([s],{type:"text/csv"}),o=URL.createObjectURL(i),r=document.createElement("a");r.href=o,r.download=e,r.click(),URL.revokeObjectURL(o),this.showToast(`EXPORT_GENERATED: ${e} downloaded`,"success")}showHallTicket(){const t=document.getElementById("modal-container");t&&(t.innerHTML=`
            <div class="modal-overlay" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);backdrop-filter:blur(12px);z-index:10000;display:flex;align-items:center;justify-content:center;">
                <div class="slide-up" style="background:var(--navy-dark);border:1px solid var(--gold);border-radius:20px;width:700px;max-width:95vw;padding:40px;position:relative;">
                    <button class="close-hub" style="position:absolute;top:15px;right:20px;background:none;border:none;color:var(--white);font-size:1.5rem;cursor:pointer;">×</button>

                    <!-- Hall Ticket Header -->
                    <div style="text-align:center;border-bottom:2px dashed rgba(184,134,11,0.4);padding-bottom:25px;margin-bottom:25px;">
                        <div style="display:flex;align-items:center;justify-content:center;gap:15px;margin-bottom:10px;">
                            <div style="width:55px;height:55px;background:var(--navy-dark);border:2px solid var(--gold);border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display';font-weight:900;font-size:1.1rem;color:white;">C<span style="color:var(--gold);">N</span></div>
                            <div style="text-align:left;">
                                <p style="font-size:1rem;font-weight:900;color:var(--white);">CampusNexus Sovereign Institute</p>
                                <p style="font-size:0.65rem;color:var(--gold);letter-spacing:2px;">EXAMINATION HALL TICKET — 2026</p>
                            </div>
                        </div>
                        <span class="status-pill status-verified" style="font-size:0.7rem;">ADMIT CARD VERIFIED</span>
                    </div>

                    <!-- Student Info -->
                    <div style="display:grid;grid-template-columns:1fr auto;gap:20px;margin-bottom:25px;">
                        <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;">
                            <div><p style="font-size:0.6rem;color:var(--slate);">STUDENT NAME</p><p style="font-weight:700;font-size:0.85rem;">Aarav Malhotra</p></div>
                            <div><p style="font-size:0.6rem;color:var(--slate);">ROLL NUMBER</p><p style="font-weight:700;font-size:0.85rem;color:var(--gold);">CS2021-9822</p></div>
                            <div><p style="font-size:0.6rem;color:var(--slate);">PROGRAM</p><p style="font-weight:700;font-size:0.85rem;">B.Tech CS</p></div>
                            <div><p style="font-size:0.6rem;color:var(--slate);">SEMESTER</p><p style="font-weight:700;font-size:0.85rem;">VI (2026)</p></div>
                            <div><p style="font-size:0.6rem;color:var(--slate);">CAMPUS</p><p style="font-weight:700;font-size:0.85rem;">Main Campus</p></div>
                            <div><p style="font-size:0.6rem;color:var(--slate);">SECTION</p><p style="font-weight:700;font-size:0.85rem;">CS-6A</p></div>
                        </div>
                        <div style="width:90px;height:110px;background:var(--glass);border:1px solid var(--gold);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:2.5rem;">👤</div>
                    </div>

                    <!-- Exam Schedule -->
                    <table class="data-table" style="font-size:0.72rem;margin-bottom:20px;">
                        <thead><tr><th>Date</th><th>Day</th><th>Course</th><th>Time</th><th>Hall</th></tr></thead>
                        <tbody>
                            <tr><td>May 10, 2026</td><td>Monday</td><td>Design & Analysis of Algorithms</td><td>10:00 – 13:00</td><td>Hall-A (NL-402)</td></tr>
                            <tr><td>May 13, 2026</td><td>Thursday</td><td>Machine Learning</td><td>10:00 – 13:00</td><td>Lab-ML-1</td></tr>
                            <tr><td>May 16, 2026</td><td>Sunday</td><td>Computer Networks</td><td>10:00 – 13:00</td><td>Hall-B (NL-204)</td></tr>
                            <tr><td>May 19, 2026</td><td>Wednesday</td><td>Software Engineering</td><td>14:00 – 17:00</td><td>Hall-A (NL-402)</td></tr>
                            <tr><td>May 22, 2026</td><td>Saturday</td><td>Database Systems</td><td>10:00 – 13:00</td><td>Lab-DB</td></tr>
                        </tbody>
                    </table>

                    <div style="display:flex;gap:10px;border-top:1px dashed rgba(184,134,11,0.3);padding-top:20px;">
                        <button class="login-btn action-trigger" data-action="export_pdf" style="flex:1;font-size:0.7rem;background:var(--gold);color:var(--navy-dark);">⏬ DOWNLOAD_PDF</button>
                        <button class="login-btn close-hub" style="flex:1;font-size:0.7rem;">CLOSE</button>
                    </div>
                    <p style="font-size:0.55rem;color:var(--slate);text-align:center;margin-top:10px;">This hall ticket must be presented along with a valid photo ID. Generated: Feb 20, 2026.</p>
                </div>
            </div>
        `,t.querySelectorAll(".close-hub").forEach(a=>a.onclick=()=>t.innerHTML=""),t.querySelectorAll(".action-trigger").forEach(a=>a.onclick=e=>this.executeActionSequence(e.currentTarget.dataset.action)))}attachShellListeners(){const t=document.getElementById("college-select");t&&(t.onchange=e=>{this.activeCollege=e.target.value,this.showToast(`CAMPUS_SYNC: ${this.activeCollege}`),this.renderView("Dashboard")});const a=document.getElementById("global-search");a&&(a.onkeyup=e=>{if(e.key==="Enter"){const s=e.target.value.trim();s.includes("9822")||s.toLowerCase().includes("aarav")?(this.showToast("NEURAL_MATCH_FOUND: Loading Profile Hub"),this.renderProfile("9822")):this.showToast(`NEURAL_QUERY: ${s}`),e.target.value=""}})}attachMobileListeners(){const t=document.querySelector(".sidebar"),a=document.getElementById("sidebar-overlay"),e=document.getElementById("menu-toggle");if(!t||!a||!e)return;const s=()=>{t.classList.add("sidebar-open"),a.classList.add("active"),document.body.style.overflow="hidden"},i=()=>{t.classList.remove("sidebar-open"),a.classList.remove("active"),document.body.style.overflow=""};e.addEventListener("click",()=>{t.classList.contains("sidebar-open")?i():s()}),a.addEventListener("click",i),document.querySelectorAll("#nav-container .nav-item").forEach(o=>{o.addEventListener("click",()=>{window.innerWidth<=768&&i()})}),window.addEventListener("resize",()=>{window.innerWidth>768&&i()})}checkInitialState(){const t=localStorage.getItem("userRole");t&&(this.userRole=t)}initParticles(){const t=document.getElementById("bg-canvas");if(!t)return;this.ctx=t.getContext("2d"),t.width=window.innerWidth,t.height=window.innerHeight,this.particles=Array.from({length:50},()=>({x:Math.random()*t.width,y:Math.random()*t.height,size:Math.random()*2,speedX:(Math.random()-.5)*.5,speedY:(Math.random()-.5)*.5}));const a=()=>{this.ctx&&(this.ctx.clearRect(0,0,t.width,t.height),this.ctx.fillStyle="rgba(100, 255, 218, 0.1)",this.particles.forEach(e=>{e.x+=e.speedX,e.y+=e.speedY,e.x<0&&(e.x=t.width),e.x>t.width&&(e.x=0),e.y<0&&(e.y=t.height),e.y>t.height&&(e.y=0),this.ctx.beginPath(),this.ctx.arc(e.x,e.y,e.size,0,Math.PI*2),this.ctx.fill()}),requestAnimationFrame(a))};a()}renderApplicantForm(){const t=document.getElementById("modal-container");t&&(t.innerHTML=`
            <div class="modal-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); backdrop-filter: blur(10px); z-index: 10000; display: flex; align-items: center; justify-content: center;">
                <div class="profile-modal slide-up" style="width: 500px !important;">
                    <button class="close-hub">×</button>
                    <h2 style="color: var(--gold); margin-bottom: 30px; font-weight: 800; letter-spacing: 2px;">NEW_APPLICANT_REGISTRATION</h2>
                    <div style="display: flex; flex-direction: column; gap: 20px;">
                        <div class="form-group">
                            <label style="font-size: 0.6rem; color: var(--slate); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; display: block;">APPLICANT_NAME</label>
                            <input type="text" id="app-name" class="login-input" style="margin-bottom: 0;" placeholder="Enter full name...">
                        </div>
                        <div class="form-group">
                            <label style="font-size: 0.6rem; color: var(--slate); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; display: block;">ACADEMIC_PROGRAM</label>
                            <select id="app-program" class="login-input" style="margin-bottom: 0;">
                                <option>B.Tech Computer Science</option>
                                <option>M.Tech AI & Data Science</option>
                                <option>MBA Strategy</option>
                                <option>B.Com Hons</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label style="font-size: 0.6rem; color: var(--slate); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; display: block;">CAMPUS_NODE</label>
                            <select id="app-campus" class="login-input" style="margin-bottom: 0;">
                                <option>MAIN_CAMPUS</option>
                                <option>CITY_CAMPUS</option>
                                <option>NORTH_CAMPUS</option>
                            </select>
                        </div>
                        <div class="form-group" style="margin-bottom: 10px;">
                            <label style="font-size: 0.6rem; color: var(--slate); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; display: block;">MOBILE_ID</label>
                            <input type="text" id="app-phone" class="login-input" style="margin-bottom: 0;" placeholder="+91 XXXX-XXXXX">
                        </div>
                        <button id="submit-applicant" class="login-btn">AUTHORIZE_REGISTRATION</button>
                    </div>
                </div>
            </div>
        `,t.querySelector(".close-hub").onclick=()=>t.innerHTML="",document.getElementById("submit-applicant").onclick=()=>{const a=document.getElementById("app-name").value;if(!a){this.showToast("NAME_NODE_MISSING","warning");return}t.innerHTML="",this.showToast(`REGISTRATION_INITIATED: Validating ${a}...`),setTimeout(()=>{this.showToast("BIOMETRIC_CHECK_PASSED","success"),setTimeout(()=>{this.showToast("ADMISSIONS_GATEWAY_SUCCESS: Node Created","success")},1500)},1e3)})}}document.addEventListener("DOMContentLoaded",()=>{window.app=new u});
