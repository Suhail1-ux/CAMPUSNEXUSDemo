import { globalStats } from './mockData.js';

export const facultyViewTemplates = {
    "Dashboard": (role = "Faculty") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Faculty Dashboard</h1>
            <p style="color: #555; font-size: 0.75rem; margin-top: 5px; font-weight: 700; letter-spacing: 2px;">Session: <span style="color: var(--vibrant-violet);">2026-27</span> &nbsp;|&nbsp; Status: <span style="color: var(--vibrant-violet);">Live</span></p>
        </div>
        
        <div class="kpi-grid" style="margin-top: 25px;">
            <div class="kpi-card" style="border-top: 3px solid var(--vibrant-violet); padding: 15px 22px;">
                <span class="kpi-label" style="color: var(--vibrant-violet); font-weight: 900;">Classes</span>
                <span class="kpi-val">04</span>
            </div>
            <div class="kpi-card" style="border-top: 3px solid var(--white); padding: 15px 22px;">
                <span class="kpi-label" style="color: var(--white); font-weight: 900;">Students</span>
                <span class="kpi-val">185</span>
            </div>
            <div class="kpi-card" style="padding: 15px 22px;">
                <span class="kpi-label">Attendance</span>
                <span class="kpi-val" style="color: var(--vibrant-violet);">96.2%</span>
            </div>
        </div>

        <div class="grid-2-col slide-up" style="margin-top: 25px;">
            <div style="background: var(--glass); padding: 22px; border-radius: 12px; border: 1px solid var(--glass-border); min-width: 0;">

                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--white);">Engagement Pulse</h3>
                    <div style="display: flex; gap: 15px;">
                        <span style="font-size: 0.7rem; color: #555;"><i style="color: var(--vibrant-violet); margin-right: 5px;">●</i>Participation</span>
                        <span style="font-size: 0.7rem; color: #555;"><i style="color: var(--white); margin-right: 5px;">●</i>Assessment</span>
                    </div>
                </div>
                <div style="height: 180px; background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; position: relative; overflow: hidden; display: flex; align-items: flex-end;">
                    <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="none" style="position: absolute; bottom: 0; left: 0;">
                        <path class="wave-path undergrad-wave" d="M0,200 Q200,50 400,180 T800,100 T1000,150 V300 H0 Z" fill="rgba(0, 128, 128, 0.1)" stroke="var(--vibrant-violet)" stroke-width="2" />
                    </svg>
                    <div style="position: absolute; top: 25%; left: 50%; transform: translateX(-50%); text-align: center;">
                        <div style="font-size: 0.6rem; color: var(--vibrant-violet); letter-spacing: 2px; font-weight: 900;">Class Efficiency</div>
                        <div style="font-size: 3rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">94.8%</div>
                    </div>
                </div>
            </div>
            
            <div class="glass-card" style="padding: 22px;">
                <h3 style="font-size: 0.85rem; font-weight: 900; margin-bottom: 15px; color: var(--vibrant-violet); letter-spacing: 2px;">QUICK ACTIONS</h3>
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <div class="action-card action-trigger" data-action="mark_attendance" style="cursor:pointer; display:flex; align-items:center; gap:12px; padding:12px; background: rgba(0, 128, 128, 0.05); border-radius:10px; border:1px solid var(--glass-border);">
                        <i data-lucide="clipboard-list" style="width:20px; height:20px; color:var(--white);"></i>
                        <div>
                            <span style="font-size:0.75rem; font-weight:800; display:block; color: var(--white);">Attendance Scan</span>
                        </div>
                    </div>
                    <div class="action-card action-trigger" data-action="upload_resource" style="cursor:pointer; display:flex; align-items:center; gap:12px; padding:12px; background: rgba(0, 128, 128, 0.05); border-radius:10px; border:1px solid var(--glass-border);">
                        <i data-lucide="upload" style="width:20px; height:20px; color:var(--white);"></i>
                        <div>
                            <span style="font-size:0.75rem; font-weight:800; display:block; color: var(--white);">Upload Lesson Plan</span>
                        </div>
                    </div>
                    <div class="action-card action-trigger" data-action="publish_results" style="cursor:pointer; display:flex; align-items:center; gap:12px; padding:15px; background: rgba(16, 185, 129, 0.05); border-radius:12px; border:1px solid rgba(16, 185, 129, 0.2);">
                        <i data-lucide="rocket" style="width:24px; height:24px; color:#10b981;"></i>
                        <div>
                            <span style="font-size:0.75rem; font-weight:800; display:block; color:#10b981;">Publish Results</span>
                            <span style="font-size:0.6rem; color:var(--slate);">Finalize Internal Assessment</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    "Academics": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--vibrant-violet); text-shadow: 0 0 20px rgba(0, 128, 128, 0.3); font-family: var(--font-display);">Academic Matrix</h1>
            <p style="color: #555; font-size: 0.85rem; margin-top: 5px; font-weight: 700; letter-spacing: 2px;">Course Status: <span style="color: var(--vibrant-violet);">Active</span></p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 25px;" class="slide-up">
            <div style="background: var(--glass); padding: 18px; border-radius: 12px; border: 1px solid var(--glass-border);">
                <span style="font-size: 0.6rem; color: var(--vibrant-violet); letter-spacing: 2px;">CS-601</span>
                <h3 style="font-size: 1.1rem; margin-top: 5px;">Advanced Algorithms</h3>
                <div style="margin-top: 15px; font-size: 0.75rem; color: var(--slate);">
                    <div>Semester: VI | Credits: 04</div>
                    <div style="margin-top: 5px;">Next Lecture: Mon, 10:00 AM</div>
                </div>
                <div style="margin-top: 20px;">
                    <div style="display: flex; justify-content: space-between; font-size: 0.6rem; margin-bottom: 5px;">
                        <span>Syllabus Compliance</span>
                        <span>74%</span>
                    </div>
                    <div style="height: 4px; background: rgba(255,255,255,0.05); border-radius: 2px; overflow: hidden;">
                        <div style="width: 74%; height: 100%; background: var(--gold);"></div>
                    </div>
                </div>
                <button class="login-btn action-trigger" data-action="view_course" style="margin-top: 20px; font-size: 0.7rem; width: 100%;">View Course Forum</button>
            </div>
            
            <div style="background: var(--glass); padding: 25px; border-radius: 12px; border: 1px solid var(--glass-border);">
                <span style="font-size: 0.6rem; color: var(--gold); letter-spacing: 2px;">COURSE_ID: CS-605</span>
                <h3 style="font-size: 1.1rem; margin-top: 5px;">Machine Learning</h3>
                <div style="margin-top: 15px; font-size: 0.75rem; color: var(--slate);">
                    <div>Semester: VI | Credits: 04</div>
                    <div style="margin-top: 5px;">Next Lecture: Tue, 02:00 PM</div>
                </div>
                <div style="margin-top: 20px;">
                    <div style="display: flex; justify-content: space-between; font-size: 0.6rem; margin-bottom: 5px;">
                        <span>Syllabus Compliance</span>
                        <span>42%</span>
                    </div>
                    <div style="height: 4px; background: rgba(255,255,255,0.05); border-radius: 2px; overflow: hidden;">
                        <div style="width: 42%; height: 100%; background: var(--vibrant-violet);"></div>
                    </div>
                </div>
                <button class="login-btn action-trigger" data-action="view_course" style="margin-top: 15px; font-size: 0.65rem; width: 100%; background: var(--vibrant-violet); color: #000;">Open Forum</button>
            </div>

            <div style="background: var(--glass); padding: 18px; border-radius: 12px; border: 1px solid var(--glass-border); display: flex; align-items: center; justify-content: center; border: 2px dashed var(--vibrant-violet);">
                <div style="text-align: center;">
                    <i data-lucide="plus" style="width:20px; height:20px; color:var(--vibrant-violet);"></i>
                    <div style="font-size: 0.65rem; color: #555; margin-top: 8px;">New Elective</div>
                </div>
            </div>
        </div>
    `,

    "Attendance": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Attendance Hub</h1>
            <div class="filters-bar" style="margin-top: 20px; background: var(--glass); padding: 15px; border-radius: 12px; display: flex; gap: 15px; border: 1px solid var(--glass-border);">
                <select class="login-input" style="margin: 0; padding: 8px 15px; font-size: 0.7rem; width: 220px;"><option>B.Tech CS - Sem 6 (A)</option></select>
                <input type="date" class="login-input" value="${new Date().toISOString().split('T')[0]}" style="margin: 0; padding: 8px 15px; font-size: 0.7rem; width: 180px;">
                <button class="login-btn action-trigger" data-action="sync_attendance" style="width: auto; padding: 8px 25px; font-size: 0.7rem; background: var(--vibrant-violet); color: #000;">Submit</button>
            </div>
        </div>

        <div class="slide-up" style="margin-top: 25px; background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
            <table class="data-table" style="font-size: 0.75rem;">
                <thead>
                    <tr><th>Scholar</th><th>ID</th><th>Program</th><th>Status</th><th>Override Logic</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <div style="width:28px; height:28px; border-radius:50%; background:var(--vibrant-violet); display:flex; align-items:center; justify-content:center; font-size:0.6rem; color:#000; font-weight:900;">AM</div>
                                <span style="font-weight: 800;">Aarav Malhotra</span>
                            </div>
                        </td>
                        <td>#ST-8812</td><td>B.Tech CS</td>
                        <td><span class="status-pill success">PRESENT</span></td>
                        <td><button class="login-btn" style="padding:4px 10px; font-size:0.55rem; width:auto;">ABSENT</button></td>
                    </tr>
                    <tr>
                        <td>
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <div style="width:28px; height:28px; border-radius:50%; background:var(--white); display:flex; align-items:center; justify-content:center; font-size:0.6rem; color:#000; font-weight:900;">IK</div>
                                <span style="font-weight: 800;">Isha Kapur</span>
                            </div>
                        </td>
                        <td>#ST-8813</td><td>B.Tech CS</td>
                        <td><span class="status-pill error">Absent</span></td>
                        <td><button class="login-btn" style="padding:4px 10px; font-size:0.55rem; width:auto; background:var(--vibrant-violet); color:#000;">Present</button></td>
                    </tr>
                    <tr>
                        <td>
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <div style="width:28px; height:28px; border-radius:50%; background:var(--vibrant-violet); display:flex; align-items:center; justify-content:center; font-size:0.6rem; color:#000; font-weight:900;">RV</div>
                                <span style="font-weight: 800;">Rohan Varma</span>
                            </div>
                        </td>
                        <td>#ST-8814</td><td>B.Tech CS</td>
                        <td><span class="status-pill success">PRESENT</span></td>
                        <td><button class="login-btn" style="padding:4px 10px; font-size:0.55rem; width:auto;">ABSENT</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,

    "Reports": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Analytics</h1>
            <p style="color: #555; font-size: 0.8rem; margin-top: 5px; font-weight: 700; letter-spacing: 2px;">Faculty Metrics</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 25px;" class="slide-up">
            <div class="kpi-card glass-card" style="padding: 15px 22px;">
                <span class="kpi-label">Coverage</span>
                <span class="kpi-val" style="color: var(--vibrant-violet);">82.4%</span>
            </div>
            <div class="kpi-card glass-card" style="padding: 15px 22px;">
                <span class="kpi-label">Success</span>
                <span class="kpi-val" style="color: var(--white);">76.8%</span>
            </div>
            <div class="kpi-card glass-card" style="padding: 15px 22px;">
                <span class="kpi-label">Hours</span>
                <span class="kpi-val">142</span>
            </div>
        </div>

        <div class="slide-up" style="margin-top: 25px; background: var(--glass); padding: 22px; border-radius: 12px; border: 1px solid var(--glass-border);">
            <h3 style="font-size: 0.9rem; font-weight: 800; color: var(--vibrant-violet); margin-bottom: 20px;">Performance Matrix</h3>
            <div style="display: flex; flex-direction: column; gap: 15px;">
                <div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.7rem; margin-bottom: 8px;">
                        <span>Algorithms (CS-601)</span>
                        <span style="font-weight: 800;">8.8/10</span>
                    </div>
                    <div style="height: 4px; background: rgba(255,255,255,0.05); border-radius: 2px; overflow: hidden;">
                        <div style="width: 88%; height: 100%; background: var(--vibrant-violet);"></div>
                    </div>
                </div>
                <div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.7rem; margin-bottom: 8px;">
                        <span>Machine Learning (CS-605)</span>
                        <span style="font-weight: 800;">7.2/10</span>
                    </div>
                    <div style="height: 4px; background: rgba(255,255,255,0.05); border-radius: 2px; overflow: hidden;">
                        <div style="width: 72%; height: 100%; background: var(--vibrant-violet);"></div>
                    </div>
                </div>
            </div>
            <button class="login-btn action-trigger" data-action="export_excel" style="margin-top: 20px; width: auto; padding: 10px 25px; font-size: 0.7rem; background: var(--vibrant-violet); color: #000;">GENERATE_REPORT</button>
        </div>
    `
};
