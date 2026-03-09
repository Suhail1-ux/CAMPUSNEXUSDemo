import { globalStats } from './mockData.js';

export const hrViewTemplates = {
    "Dashboard": (role = "HR") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">HR Dashboard</h1>
            <p style="color: #555; font-size: 0.75rem; margin-top: 5px; font-weight: 700; letter-spacing: 2px;">Personnel Sync: <span style="color: var(--vibrant-violet);">Active</span> &nbsp;|&nbsp; Status: <span style="color: var(--vibrant-violet);">Live</span></p>
        </div>
        
        <div class="kpi-grid" style="margin-top: 25px;">
            <div class="kpi-card" style="border-top: 3px solid var(--vibrant-violet); padding: 15px 22px;">
                <span class="kpi-label" style="color: var(--vibrant-violet); font-weight: 900;">Total Faculty</span>
                <span class="kpi-val">${globalStats.Faculty}</span>
            </div>
            <div class="kpi-card" style="border-top: 3px solid var(--white); padding: 15px 22px;">
                <span class="kpi-label" style="color: var(--white); font-weight: 900;">Open Positions</span>
                <span class="kpi-val">14</span>
            </div>
            <div class="kpi-card" style="padding: 15px 22px;">
                <span class="kpi-label">Attrition Rate</span>
                <span class="kpi-val" style="color: var(--vibrant-violet);">4.2%</span>
            </div>
            <div class="kpi-card" style="padding: 15px 22px;">
                <span class="kpi-label">Staff Utilization</span>
                <span class="kpi-val">96.8%</span>
            </div>
        </div>

        <div class="grid-2-col slide-up" style="margin-top: 25px;">
            <div style="background: var(--glass); padding: 22px; border-radius: 12px; border: 1px solid var(--glass-border); min-width: 0;">

                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--white);">Hiring Momentum</h3>
                    <div style="display: flex; gap: 15px;">
                        <span style="font-size: 0.7rem; color: #555;"><i style="color: var(--vibrant-violet); margin-right: 5px;">●</i>Applicants</span>
                        <span style="font-size: 0.7rem; color: #555;"><i style="color: var(--white); margin-right: 5px;">●</i>Onboarded</span>
                    </div>
                </div>
                <div style="height: 180px; background: #f8fafc; border-radius: 12px; border: 1px dashed #e2e8f0; position: relative; overflow: hidden; display: flex; align-items: flex-end;">
                    <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="none" style="position: absolute; bottom: 0; left: 0;">
                        <path d="M0,250 Q250,150 500,200 T1000,100 V300 H0 Z" fill="rgba(0, 128, 128, 0.1)" stroke="var(--vibrant-violet)" stroke-width="2" />
                    </svg>
                    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center;">
                        <div style="font-size: 3rem; font-weight: 900; color: var(--white);">84%</div>
                        <div style="font-size: 0.6rem; color: var(--vibrant-violet); letter-spacing: 2px; font-weight: 800;">ONBOARDING STATUS</div>
                    </div>
                </div>
            </div>
            
            <div class="glass-card" style="padding: 22px;">
                <h3 style="font-size: 0.85rem; font-weight: 700; margin-bottom: 15px; color: var(--vibrant-violet);">Critical Actions</h3>
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <div class="action-card action-trigger" data-action="payroll_run" style="cursor:pointer; display:flex; align-items:center; gap:12px; padding:12px; background: rgba(0, 128, 128, 0.05); border-radius:10px; border:1px solid var(--glass-border);">
                        <i data-lucide="landmark" style="width:20px; height:20px; color:var(--white);"></i>
                        <div>
                            <span style="font-size:0.75rem; font-weight:800; display:block; color: var(--white);">Execute Payroll</span>
                        </div>
                    </div>
                    <div class="action-card action-trigger" data-action="gen_payslip" style="cursor:pointer; display:flex; align-items:center; gap:12px; padding:12px; background: rgba(0, 128, 128, 0.05); border-radius:10px; border:1px solid var(--glass-border);">
                        <i data-lucide="file-text" style="width:20px; height:20px; color:var(--white);"></i>
                        <div>
                            <span style="font-size:0.75rem; font-weight:800; display:block; color: var(--white);">Export Payslips</span>
                        </div>
                    </div>
                    <div class="action-card action-trigger" data-action="run_audit" style="cursor:pointer; display:flex; align-items:center; gap:12px; padding:12px; background: rgba(0, 128, 128, 0.05); border-radius:10px; border:1px solid var(--glass-border);">
                        <i data-lucide="landmark" style="width:20px; height:20px; color:var(--white);"></i>
                        <div>
                            <span style="font-size:0.75rem; font-weight:800; display:block; color: var(--white);">Compliance Audit</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    "Directory": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Directory</h1>
            <div class="filters-bar" style="margin-top: 20px; background: var(--glass); padding: 15px; border-radius: 12px; display: flex; gap: 15px; border: 1px solid var(--glass-border);">
                <div style="position: relative; flex: 1;">
                    <i data-lucide="search" style="position: absolute; left: 12px; top: 10px; width:14px; height:14px; opacity: 0.5;"></i>
                    <input class="login-input" placeholder="Search resources..." style="margin: 0; padding: 10px 15px 10px 35px; font-size: 0.7rem; width: 100%;">
                </div>
                <button class="login-btn action-trigger" data-action="export_excel" style="width: auto; padding: 10px 20px; font-size: 0.7rem; background: var(--vibrant-violet); color: #000;">Download CSV</button>
            </div>
        </div>

        <div class="slide-up" style="margin-top: 25px; background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
            <div class="table-container">
                <table class="data-table" style="font-size: 0.75rem;">
                <thead>
                    <tr><th>Resource</th><th>Designation</th><th>Department</th><th>Tenure Sync</th><th>Salary Grade</th><th>Status</th><th>Actions</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram" style="width:32px; height:32px; border-radius:6px; background:var(--navy-dark);">
                                <div>
                                    <span style="font-weight: 800; display: block;">Dr. Vikram Seth</span>
                                    <span style="font-size: 0.6rem; color: var(--slate);">ID: #HR-001</span>
                                </div>
                            </div>
                        </td>
                        <td>Professor</td><td>Engineering</td><td>8.4 Years</td>
                        <td><span style="font-weight: 700; color: var(--white);">G-8</span></td>
                        <td><span class="status-pill success">ACTIVE</span></td>
                        <td>
                            <div style="display: flex; gap: 5px;">
                                <button class="login-btn" style="padding:4px 8px; font-size:0.6rem; width:auto;">Profile</button>
                                <button class="login-btn action-trigger" data-action="gen_payslip" style="padding:4px 8px; font-size:0.6rem; width:auto; background:var(--vibrant-violet); color:#000;">Payslip</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Anita" style="width:32px; height:32px; border-radius:6px; background:var(--navy-dark);">
                                <div>
                                    <span style="font-weight: 800; display: block;">Prof. Anita Roy</span>
                                    <span style="font-size: 0.6rem; color: var(--slate);">ID: #HR-002</span>
                                </div>
                            </div>
                        </td>
                        <td>Assoc. Professor</td><td>Management</td><td>4.2 Years</td>
                        <td><span style="font-weight: 700; color: var(--white);">G-6</span></td>
                        <td><span class="status-pill warning">Restricted</span></td>
                        <td><button class="login-btn" style="padding:4px 8px; font-size:0.6rem; width:auto;">PROFILE</button></td>
                    </tr>
                    <tr>
                        <td>
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ravi" style="width:32px; height:32px; border-radius:6px; background:var(--navy-dark);">
                                <div>
                                    <span style="font-weight: 800; display: block;">Dr. Ravi Kumar</span>
                                    <span style="font-size: 0.6rem; color: var(--slate);">ID: #HR-003</span>
                                </div>
                            </div>
                        </td>
                        <td>HOD - CS</td><td>Engineering</td><td>12.1 Years</td>
                        <td><span style="font-weight: 700; color: var(--white);">G-9</span></td>
                        <td><span class="status-pill success">ACTIVE</span></td>
                        <td><button class="login-btn" style="padding:4px 8px; font-size:0.6rem; width:auto;">PROFILE</button></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    `,

    "Leave": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Leave Hub</h1>
            <p style="color: #555; font-size: 0.75rem; margin-top: 5px; font-weight: 700; letter-spacing: 2px;">Leave & Absence Sync</p>
        </div>

        <div class="kpi-grid" style="margin-top: 25px;">
            <div class="kpi-card" style="padding: 15px 22px;"><span class="kpi-label">On Leave</span><span class="kpi-val">12</span></div>
            <div class="kpi-card" style="padding: 15px 22px;"><span class="kpi-label">Pending</span><span class="kpi-val" style="color: var(--vibrant-violet);">8</span></div>
            <div class="kpi-card" style="padding: 15px 22px;"><span class="kpi-label">Health</span><span class="kpi-val">99.1%</span></div>
        </div>

        <div class="slide-up" style="margin-top: 25px; background: var(--glass); border-radius: 12px; border: 1px solid var(--glass-border); overflow: hidden;">
            <div style="padding: 15px 22px; border-bottom: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center;">
                <h3 style="font-size: 0.85rem; font-weight: 700; color: var(--white);">Pending</h3>
            </div>
            <div class="table-container">
                <table class="data-table" style="font-size: 0.75rem;">
                <thead>
                    <tr><th>Resource</th><th>Type</th><th>Duration</th><th>Period</th><th>Reason</th><th>Actions</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div style="font-weight: 800;">Dr. Meera Nair</div>
                            <div style="font-size: 0.6rem; color: var(--slate);">Engineering | Asst. Prof</div>
                        </td>
                        <td><span style="color:var(--vibrant-violet);">Sick Leave</span></td>
                        <td>3 Days</td>
                        <td>Feb 22 - Feb 24</td>
                        <td>Medical</td>
                        <td>
                            <div style="display: flex; gap: 5px;">
                                <button class="login-btn action-trigger" data-action="leave_approve" style="padding:4px 10px; font-size:0.6rem; width:auto; background:var(--vibrant-violet); color:#000;">APP</button>
                                <button class="login-btn action-trigger" data-action="leave_reject" style="padding:4px 10px; font-size:0.6rem; width:auto;">REJ</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div style="font-weight: 800;">Prof. Arjun Singh</div>
                            <div style="font-size: 0.6rem; color: var(--slate);">Management</div>
                        </td>
                        <td><span style="color:var(--white);">Casual Leave</span></td>
                        <td>1 Day</td>
                        <td>Feb 25</td>
                        <td>Personal</td>
                        <td>
                            <div style="display: flex; gap: 5px;">
                                <button class="login-btn action-trigger" data-action="leave_approve" style="padding:4px 10px; font-size:0.6rem; width:auto; background:var(--vibrant-violet); color:#000;">APP</button>
                                <button class="login-btn action-trigger" data-action="leave_reject" style="padding:4px 10px; font-size:0.6rem; width:auto;">REJ</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    `,

    "Payroll": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Payroll</h1>
            <p style="color: #555; font-size: 0.75rem; margin-top: 5px; font-weight: 700; letter-spacing: 2px;">DISBURSAL_ENGINE</p>
        </div>

        <div class="grid-2-col slide-up" style="margin-top: 25px;">
            <div style="background: var(--glass); padding:22px; border-radius:12px; border:1px solid var(--glass-border); text-align:center; min-width: 0;">

                <h4 style="font-size: 1rem; color: var(--white); font-weight: 900; margin-bottom: 8px;">FEB 2026 CYCLE</h4>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 25px;">
                    <div style="background: rgba(255,255,255,0.03); padding: 15px; border-radius: 10px; border: 1px solid var(--glass-border);">
                        <span style="font-size: 0.6rem; color: var(--vibrant-violet); display: block; text-transform: uppercase;">Total</span>
                        <span style="font-size: 1.6rem; font-weight: 800; color: var(--white);">$1.24M</span>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 15px; border-radius: 10px; border: 1px solid var(--glass-border);">
                        <span style="font-size: 0.6rem; color: var(--white); display: block; text-transform: uppercase;">Count</span>
                        <span style="font-size: 1.6rem; font-weight: 800; color: var(--white);">1,250</span>
                    </div>
                </div>

                <button class="login-btn action-trigger" data-action="payroll_run" style="width: 100%; height: 45px; font-size: 0.8rem; background: var(--vibrant-violet); color: #000; font-weight: 900;">EXECUTE_PASS</button>
            </div>

            <div style="display:flex; flex-direction:column; gap:20px;">
                <div style="background: var(--glass); padding:18px; border-radius:12px; border:1px solid var(--glass-border);">
                    <h3 style="font-size: 0.8rem; font-weight: 700; color: var(--vibrant-violet); margin-bottom: 12px;">Integrity Checks</h3>
                    <div style="display:flex; flex-direction:column; gap:12px;">
                        <div style="font-size:0.65rem; display:flex; align-items:center; gap:10px;">
                            <i data-lucide="check" style="width:12px; height:12px; color:#10b981;"></i>
                            <span>All attendance records synchronized</span>
                        </div>
                        <div style="font-size:0.65rem; display:flex; align-items:center; gap:10px;">
                            <i data-lucide="check" style="width:12px; height:12px; color:#10b981;"></i>
                            <span>TDS logic updated for FY 2026</span>
                        </div>
                        <div style="font-size:0.65rem; display:flex; align-items:center; gap:10px;">
                            <i data-lucide="check" style="width:12px; height:12px; color:#10b981;"></i>
                            <span>Bank API gateway heartbeat detected</span>
                        </div>
                    </div>
                </div>

                <div style="background: var(--glass); padding:18px; border-radius:12px; border:1px solid var(--glass-border);">
                    <h3 style="font-size: 0.8rem; font-weight: 700; color: var(--vibrant-violet); margin-bottom: 12px;">Composition</h3>
                    <div style="height: 120px; width: 100%; position: relative; display: flex; align-items: center; justify-content: center;">
                        <svg width="100" height="100" viewBox="0 0 42 42">
                            <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="rgba(255,255,255,0.05)" stroke-width="3"></circle>
                            <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="var(--vibrant-violet)" stroke-width="3" stroke-dasharray="70 30" stroke-dashoffset="25"></circle>
                            <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="var(--white)" stroke-width="3" stroke-dasharray="20 80" stroke-dashoffset="55"></circle>
                        </svg>
                        <div style="position: absolute; text-align: center;">
                            <div style="font-size: 1.1rem; color: white; font-weight: 900;">70%</div>
                            <div style="font-size: 0.45rem; color: var(--slate);">BASE_SALARY</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    "Reports": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Workforce Analytics</h1>
            <p style="color: #555; font-size: 0.75rem; margin-top: 5px; font-weight: 700; letter-spacing: 2px;">REPORTS_HUB</p>
        </div>

        <div class="grid-adaptive slide-up" style="margin-top: 25px;">
            <div class="kpi-card" style="padding: 15px 22px;">
                <span class="kpi-label">Retention</span>
                <span class="kpi-val">95.8%</span>
            </div>
            <div class="kpi-card" style="padding: 15px 22px;">
                <span class="kpi-label">Tenure</span>
                <span class="kpi-val" style="color: var(--vibrant-violet);">5.4</span>
            </div>
            <div class="kpi-card" style="padding: 15px 22px;">
                <span class="kpi-label">Hiring</span>
                <span class="kpi-val">12d</span>
            </div>
            <div class="kpi-card" style="padding: 15px 22px;">
                <span class="kpi-label">Compliance</span>
                <span class="kpi-val">AAA</span>
            </div>
        </div>

        <div class="slide-up" style="margin-top: 25px; background: var(--glass); padding: 22px; border-radius: 12px; border: 1px solid var(--glass-border);">
            <h3 style="font-size: 0.9rem; font-weight: 800; color: var(--vibrant-violet); margin-bottom: 20px;">Composition</h3>
            <div style="display: flex; flex-direction: column; gap: 15px;">
                <div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.7rem; margin-bottom: 8px;">
                        <span>Engineering</span>
                        <span style="font-weight: 800;">36%</span>
                    </div>
                    <div style="height: 4px; background: rgba(255,255,255,0.05); border-radius: 2px; overflow: hidden;">
                        <div style="width: 36%; height: 100%; background: var(--vibrant-violet);"></div>
                    </div>
                </div>
                <div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.7rem; margin-bottom: 8px;">
                        <span>Management</span>
                        <span style="font-weight: 800;">25%</span>
                    </div>
                    <div style="height: 4px; background: rgba(255,255,255,0.05); border-radius: 2px; overflow: hidden;">
                        <div style="width: 25%; height: 100%; background: var(--white);"></div>
                    </div>
                </div>
            </div>
            <div style="margin-top: 20px; display: flex; gap: 10px;">
                <button class="login-btn action-trigger" data-action="export_pdf" style="width: auto; padding: 10px 25px; background: var(--vibrant-violet); color: #000;">EXPORT_MASTER</button>
            </div>
        </div>
    `
};
