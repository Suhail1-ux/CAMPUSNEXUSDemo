import { globalStats } from './mockData.js';

export const facultyViewTemplates = {
    "Dashboard": (role = "Faculty") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Instructional Control Center</h1>
            <p style="color: var(--slate); font-size: 0.8rem; margin-top: 5px;">Academic Session 2026-27 &nbsp;|&nbsp; <span style="color: #10b981;">Curriculum: Synchronized</span></p>
        </div>
        
        <div class="kpi-grid" style="margin-top: 30px;">
            <div class="kpi-card glass-card">
                <span class="kpi-label">Active Classes</span>
                <span class="kpi-val">04</span>
                <div style="font-size: 0.65rem; color: var(--gold); font-weight: 700;">Next: B.Tech CS (10:00 AM)</div>
            </div>
            <div class="kpi-card glass-card">
                <span class="kpi-label">Total Students</span>
                <span class="kpi-val">185</span>
                <div style="font-size: 0.65rem; color: var(--slate); font-weight: 700;">Across 3 Departments</div>
            </div>
            <div class="kpi-card glass-card">
                <span class="kpi-label">Avg Attendance</span>
                <span class="kpi-val" style="color: #10b981;">96.2%</span>
                <div style="font-size: 0.65rem; color: #10b981; font-weight: 700;">↑ 2.1% vs Prev Month</div>
            </div>
            <div class="kpi-card glass-card">
                <span class="kpi-label">Assignment Velocity</span>
                <span class="kpi-val" style="color: var(--gold);">88%</span>
                <div style="font-size: 0.65rem; color: #ffab00; font-weight: 700;">12 Pending Reviews</div>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 25px; margin-top: 25px;" class="slide-up">
            <div style="background: var(--glass); padding: 30px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
                    <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold);">Student Engagement Pulse</h3>
                    <div style="display: flex; gap: 15px;">
                        <span style="font-size: 0.7rem; color: var(--slate);"><i style="color: var(--gold); margin-right: 5px;">●</i>Participation</span>
                        <span style="font-size: 0.7rem; color: var(--slate);"><i style="color: #10b981; margin-right: 5px;">●</i>Assessment</span>
                    </div>
                </div>
                <div style="height: 250px; background: rgba(99, 102, 241, 0.05); border-radius: 12px; border: 1px dashed var(--glass-border); position: relative; overflow: hidden; display: flex; align-items: flex-end;">
                    <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="none" style="position: absolute; bottom: 0; left: 0;">
                        <path d="M0,200 Q200,50 400,180 T800,100 T1000,150 V300 H0 Z" fill="rgba(99,102,241,0.08)" stroke="var(--gold)" stroke-width="2" />
                        <path d="M0,240 Q200,210 400,230 T800,190 T1000,210 V300 H0 Z" fill="rgba(16, 185, 129, 0.05)" stroke="#10b981" stroke-width="2" opacity="0.6" />
                    </svg>
                    <div style="position: absolute; top: 15px; left: 15px;">
                        <div style="font-size: 0.65rem; color: var(--gold); letter-spacing: 2px;">INSTRUCTIONAL_EFFICIENCY_IDX</div>
                        <div style="font-size: 1.5rem; font-weight: 900; color: var(--white); margin-top: 5px;">94.8%</div>
                    </div>
                </div>
            </div>
            
            <div class="glass-card">
                <h3 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 20px; color: var(--gold);">Faculty Quick Links</h3>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div class="action-card action-trigger" data-action="mark_attendance" style="cursor:pointer; display:flex; align-items:center; gap:12px; padding:15px; background: rgba(99, 102, 241, 0.05); border-radius:12px; border:1px solid var(--glass-border);">
                        <i data-lucide="clipboard-list" style="width:24px; height:24px; color:var(--gold);"></i>
                        <div>
                            <span style="font-size:0.75rem; font-weight:800; display:block; color: var(--white);">Quick Attendance Scan</span>
                            <span style="font-size:0.6rem; color:var(--slate);">Select Class & Sync Records</span>
                        </div>
                    </div>
                    <div class="action-card action-trigger" data-action="upload_resource" style="cursor:pointer; display:flex; align-items:center; gap:12px; padding:15px; background: rgba(99, 102, 241, 0.05); border-radius:12px; border:1px solid var(--glass-border);">
                        <i data-lucide="upload" style="width:24px; height:24px; color:var(--gold);"></i>
                        <div>
                            <span style="font-size:0.75rem; font-weight:800; display:block; color: var(--white);">Push Lesson Plan</span>
                            <span style="font-size:0.6rem; color:var(--slate);">Upload to SIS Resource Hub</span>
                        </div>
                    </div>
                    <div class="action-card action-trigger" data-action="publish_results" style="cursor:pointer; display:flex; align-items:center; gap:12px; padding:15px; background: rgba(16, 185, 129, 0.05); border-radius:12px; border:1px solid rgba(16, 185, 129, 0.2);">
                        <i data-lucide="rocket" style="width:24px; height:24px; color:#10b981;"></i>
                        <div>
                            <span style="font-size:0.75rem; font-weight:800; display:block; color:#10b981;">Release Marks Registry</span>
                            <span style="font-size:0.6rem; color:var(--slate);">Finalize Internal Assessment</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    "Academics": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Academic Matrix</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Course Management & Instructional Flow</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 25px;" class="slide-up">
            <div style="background: var(--glass); padding: 25px; border-radius: 12px; border: 1px solid var(--glass-border);">
                <span style="font-size: 0.6rem; color: var(--gold); letter-spacing: 2px;">COURSE_ID: CS-601</span>
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
                <button class="login-btn action-trigger" data-action="view_course" style="margin-top: 20px; font-size: 0.7rem; width: 100%;">ACCESS_COURSE_FORUM</button>
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
                        <div style="width: 42%; height: 100%; background: var(--gold);"></div>
                    </div>
                </div>
                <button class="login-btn action-trigger" data-action="view_course" style="margin-top: 20px; font-size: 0.7rem; width: 100%;">ACCESS_COURSE_FORUM</button>
            </div>

            <div style="background: var(--glass); padding: 25px; border-radius: 12px; border: 1px solid var(--glass-border); display: flex; align-items: center; justify-content: center; border: 2px dashed var(--glass-border);">
                <div style="text-align: center;">
                    <i data-lucide="plus" style="width:24px; height:24px; color:var(--gold);"></i>
                    <div style="font-size: 0.7rem; color: var(--slate); margin-top: 10px;">INITIALIZE_NEW_ELECTIVE</div>
                </div>
            </div>
        </div>
    `,

    "Attendance": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Instructional Attendance</h1>
            <div class="filters-bar" style="margin-top: 20px; background: var(--glass); padding: 20px; border-radius: 12px; display: flex; gap: 15px; border: 1px solid var(--glass-border);">
                <select class="login-input" style="margin: 0; padding: 8px 15px; font-size: 0.75rem; width: 220px;"><option>B.Tech CS - Sem 6 (A)</option><option>MBA Finance - Sem 2</option></select>
                <input type="date" class="login-input" value="${new Date().toISOString().split('T')[0]}" style="margin: 0; padding: 8px 15px; font-size: 0.75rem; width: 180px;">
                <button class="login-btn action-trigger" data-action="sync_attendance" style="width: auto; padding: 8px 25px; font-size: 0.75rem; background: var(--gold); color: white;">COMMIT_TO_LEDGER</button>
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
                                <div style="width:30px; height:30px; border-radius:50%; background:var(--gold); display:flex; align-items:center; justify-content:center; font-size:0.6rem; color:var(--navy-dark); font-weight:900;">AM</div>
                                <span style="font-weight: 800;">Aarav Malhotra</span>
                            </div>
                        </td>
                        <td>#ST-8812</td><td>B.Tech CS</td>
                        <td><span class="status-pill status-verified" style="background:#10b981; color:white;">PRESENT</span></td>
                        <td><button class="login-btn" style="padding:4px 10px; font-size:0.55rem; width:auto; border-color:var(--glass-border);">ABSENT</button></td>
                    </tr>
                    <tr>
                        <td>
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <div style="width:30px; height:30px; border-radius:50%; background:var(--gold); display:flex; align-items:center; justify-content:center; font-size:0.6rem; color:var(--navy-dark); font-weight:900;">IK</div>
                                <span style="font-weight: 800;">Isha Kapur</span>
                            </div>
                        </td>
                        <td>#ST-8813</td><td>B.Tech CS</td>
                        <td><span class="status-pill status-pending" style="background:#ff4d4d; color:white;">ABSENT</span></td>
                        <td><button class="login-btn" style="padding:4px 10px; font-size:0.55rem; width:auto; background:rgba(184, 134, 11, 0.1); color:var(--gold); border-color:var(--gold);">PRESENT</button></td>
                    </tr>
                    <tr>
                        <td>
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <div style="width:30px; height:30px; border-radius:50%; background:var(--gold); display:flex; align-items:center; justify-content:center; font-size:0.6rem; color:var(--navy-dark); font-weight:900;">RV</div>
                                <span style="font-weight: 800;">Rohan Varma</span>
                            </div>
                        </td>
                        <td>#ST-8814</td><td>B.Tech CS</td>
                        <td><span class="status-pill status-verified" style="background:#64ffda; color:var(--navy-dark);">PRESENT</span></td>
                        <td><button class="login-btn" style="padding:4px 10px; font-size:0.55rem; width:auto; border-color:var(--glass-border);">ABSENT</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,

    "Reports": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Academic Pulse & Analytics</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Internal Instructional Performance Telemetry</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 25px;" class="slide-up">
            <div class="kpi-card glass-card">
                <span class="kpi-label">Syllabus Coverage</span>
                <span class="kpi-val">82.4%</span>
                <div style="font-size: 0.65rem; color: #10b981; font-weight: 700;">↑ 5.2% vs Target</div>
            </div>
            <div class="kpi-card glass-card">
                <span class="kpi-label">Student Success</span>
                <span class="kpi-val">76.8%</span>
                <div style="font-size: 0.65rem; color: var(--gold); font-weight: 700;">Above Department Avg</div>
            </div>
            <div class="kpi-card glass-card">
                <span class="kpi-label">Instructional Hours</span>
                <span class="kpi-val">142 hr</span>
                <div style="font-size: 0.65rem; color: var(--slate); font-weight: 700;">Total Contact Time YTD</div>
            </div>
        </div>

        <div class="slide-up" style="margin-top: 25px; background: var(--glass); padding: 30px; border-radius: 16px; border: 1px solid var(--glass-border);">
            <h3 style="font-size: 1rem; font-weight: 800; color: var(--gold); margin-bottom: 25px;">Class-wise Performance Matrix</h3>
            <div style="display: flex; flex-direction: column; gap: 20px;">
                <div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.7rem; margin-bottom: 8px;">
                        <span>Advanced Algorithms (CS-601)</span>
                        <span style="font-weight: 800;">Grade Point: 8.8/10</span>
                    </div>
                    <div style="height: 6px; background: rgba(255,255,255,0.05); border-radius: 3px; overflow: hidden;">
                        <div style="width: 88%; height: 100%; background: var(--gold);"></div>
                    </div>
                </div>
                <div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.7rem; margin-bottom: 8px;">
                        <span>Machine Learning (CS-605)</span>
                        <span style="font-weight: 800;">Grade Point: 7.2/10</span>
                    </div>
                    <div style="height: 6px; background: rgba(255,255,255,0.05); border-radius: 3px; overflow: hidden;">
                        <div style="width: 72%; height: 100%; background: var(--gold);"></div>
                    </div>
                </div>
            </div>
            <button class="login-btn action-trigger" data-action="export_excel" style="margin-top: 25px; width: auto; padding: 10px 25px; font-size: 0.75rem;">GENERATE_FULL_ACADEMIC_REPORT</button>
        </div>
    `
};
