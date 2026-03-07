import { globalStats } from './mockData.js';

export const hrViewTemplates = {
    "Dashboard": (role = "HR") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Human Capital Pulse</h1>
            <p style="color: var(--slate); font-size: 0.8rem; margin-top: 5px;">Institutional Workforce Telemetry &nbsp;|&nbsp; <span style="color: #10b981;">Resource Sync: 100%</span></p>
        </div>
        
        <div class="kpi-grid" style="margin-top: 30px;">
            <div class="kpi-card glass-card">
                <span class="kpi-label">Active Headcount</span>
                <span class="kpi-val">${globalStats.Faculty}</span>
                <div style="font-size: 0.65rem; color: #10b981; font-weight: 700;">↑ 2.4% vs Prev Quarter</div>
            </div>
            <div class="kpi-card glass-card">
                <span class="kpi-label">Open Requisitions</span>
                <span class="kpi-val" style="color: var(--gold);">14</span>
                <div style="font-size: 0.65rem; color: var(--slate); font-weight: 700;">8 High Priority Records</div>
            </div>
            <div class="kpi-card glass-card">
                <span class="kpi-label">Attrition Pulse</span>
                <span class="kpi-val" style="color: #10b981;">4.2%</span>
                <div style="font-size: 0.65rem; color: #10b981; font-weight: 700;">Below 5% Industry Avg</div>
            </div>
            <div class="kpi-card glass-card">
                <span class="kpi-label">Resource Utilization</span>
                <span class="kpi-val">96.8%</span>
                <div style="font-size: 0.65rem; color: #10b981; font-weight: 700;">Optimal Load Distribution</div>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 25px; margin-top: 25px;" class="slide-up">
            <div style="background: var(--glass); padding: 30px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
                    <h3 style="font-size: 0.9rem; font-weight: 700;">Recruitment Momentum</h3>
                    <div style="display: flex; gap: 15px;">
                        <span style="font-size: 0.7rem; color: var(--slate);"><i style="color: var(--gold); margin-right: 5px;">●</i>Applicants</span>
                        <span style="font-size: 0.7rem; color: var(--slate);"><i style="color: #10b981; margin-right: 5px;">●</i>Onboarded</span>
                    </div>
                </div>
                <div style="height: 250px; background: rgba(0,0,0,0.2); border-radius: 12px; border: 1px dashed var(--glass-border); position: relative; overflow: hidden; display: flex; align-items: flex-end;">
                    <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="none" style="position: absolute; bottom: 0; left: 0;">
                        <path d="M0,250 Q250,150 500,200 T1000,100 V300 H0 Z" fill="rgba(184,134,11,0.1)" stroke="var(--gold)" stroke-width="2" />
                        <path d="M0,270 Q250,230 500,260 T1000,240 V300 H0 Z" fill="rgba(16, 185, 129, 0.05)" stroke="#10b981" stroke-width="2" opacity="0.6" />
                    </svg>
                    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center;">
                        <div style="font-size: 3rem; font-weight: 900; color: var(--white); text-shadow: 0 0 30px rgba(184,134,11,0.4);">84%</div>
                        <div style="font-size: 0.65rem; color: var(--gold); letter-spacing: 3px; font-weight: 800;">ONBOARDING_VELOCITY</div>
                    </div>
                </div>
            </div>
            
            <div class="glass-card">
                <h3 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 20px; color: var(--gold);">HR Critical Actions</h3>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div class="action-card action-trigger" data-action="payroll_run" style="cursor:pointer; display:flex; align-items:center; gap:12px; padding:15px; background: rgba(99, 102, 241, 0.05); border-radius:12px; border:1px solid var(--glass-border);">
                        <i data-lucide="landmark" style="width:24px; height:24px; color:var(--gold);"></i>
                        <div>
                            <span style="font-size:0.75rem; font-weight:800; display:block; color: var(--white);">Execute Payroll Cycle</span>
                            <span style="font-size:0.6rem; color:var(--slate);">FEB 2026 Disbursement</span>
                        </div>
                    </div>
                    <div class="action-card action-trigger" data-action="gen_payslip" style="cursor:pointer; display:flex; align-items:center; gap:12px; padding:15px; background: rgba(99, 102, 241, 0.05); border-radius:12px; border:1px solid var(--glass-border);">
                        <i data-lucide="file-text" style="width:24px; height:24px; color:var(--gold);"></i>
                        <div>
                            <span style="font-size:0.75rem; font-weight:800; display:block; color: var(--white);">Export Payslip Batch</span>
                            <span style="font-size:0.6rem; color:var(--slate);">Encrypt and Dispatch Records</span>
                        </div>
                    </div>
                    <div class="action-card action-trigger" data-action="run_audit" style="cursor:pointer; display:flex; align-items:center; gap:12px; padding:15px; background: rgba(16, 185, 129, 0.05); border-radius:12px; border:1px solid rgba(16, 185, 129, 0.2);">
                        <i data-lucide="landmark" style="width:24px; height:24px; color:#10b981;"></i>
                        <div>
                            <span style="font-size:0.75rem; font-weight:800; display:block; color:#10b981;">Regulatory Compliance Pass</span>
                            <span style="font-size:0.6rem; color:var(--slate);">Verify Tenure & Accreditation</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    "Directory": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Resource Directory</h1>
            <div class="filters-bar" style="margin-top: 20px; background: var(--glass); padding: 20px; border-radius: 12px; display: flex; gap: 15px; border: 1px solid var(--glass-border);">
                <div style="position: relative; flex: 1;">
                    <i data-lucide="search" style="position: absolute; left: 12px; top: 10px; width:14px; height:14px; opacity: 0.5;"></i>
                    <input class="login-input" placeholder="Search by Name, Faculty ID or Department..." style="margin: 0; padding: 8px 15px 8px 35px; font-size: 0.75rem; width: 100%;">
                </div>
                <select class="login-input" style="margin: 0; padding: 8px 15px; font-size: 0.75rem; width: 180px;"><option>All Departments</option><option>Engineering</option><option>Management</option></select>
                <button class="login-btn action-trigger" data-action="export_excel" style="width: auto; padding: 8px 20px; font-size: 0.75rem; background: var(--gold); color: white;">EXPORT_DIRECTORY</button>
            </div>
        </div>

        <div class="slide-up" style="margin-top: 25px; background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
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
                        <td><span style="font-weight: 700; color: var(--gold);">G-8</span></td>
                        <td><span class="status-pill status-verified">ACTIVE</span></td>
                        <td>
                            <div style="display: flex; gap: 5px;">
                                <button class="login-btn" style="padding:4px 8px; font-size:0.6rem; width:auto;">PROFILE</button>
                                <button class="login-btn action-trigger" data-action="gen_payslip" style="padding:4px 8px; font-size:0.6rem; width:auto; background:rgba(184,134,11,0.1); color:var(--gold); border:1px solid var(--gold);">PAYSLIP</button>
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
                        <td><span style="font-weight: 700; color: var(--gold);">G-6</span></td>
                        <td><span class="status-pill status-pending" style="color:#ffab00; border-color:#ffab00;">RESTRICTED</span></td>
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
                        <td><span style="font-weight: 700; color: var(--gold);">G-9</span></td>
                        <td><span class="status-pill status-verified">ACTIVE</span></td>
                        <td><button class="login-btn" style="padding:4px 8px; font-size:0.6rem; width:auto;">PROFILE</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,

    "Leave": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Leave Control Hub</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Absence Management & Resource Balancing</p>
        </div>

        <div class="kpi-grid" style="margin-top: 25px;">
            <div class="kpi-card glass-card"><span class="kpi-label">On Leave Today</span><span class="kpi-val">12</span><div style="font-size:0.6rem; color:var(--slate);">0.9% of Total Workforce</div></div>
            <div class="kpi-card glass-card"><span class="kpi-label">Pending Approvals</span><span class="kpi-val" style="color: #ffab00;">8</span><div style="font-size:0.6rem; color: #ffab00;">Requires HR Clearance</div></div>
            <div class="kpi-card glass-card"><span class="kpi-label">Resource Health</span><span class="kpi-val" style="color: #10b981;">99.1%</span><div style="font-size:0.6rem; color: #10b981;">Sufficient Coverage</div></div>
        </div>

        <div class="slide-up" style="margin-top: 25px; background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
            <div style="padding: 18px 22px; border-bottom: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center;">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold);">Awaiting Sanction</h3>
                <span class="status-pill status-pending">8 PENDING_REQUESTS</span>
            </div>
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
                        <td><span style="color:#ffab00;">SICK_LEAVE</span></td>
                        <td>3 Days</td>
                        <td>Feb 22 - Feb 24</td>
                        <td>Medical Emergency</td>
                        <td>
                            <div style="display: flex; gap: 5px;">
                                <button class="login-btn action-trigger" data-action="leave_approve" style="padding:4px 10px; font-size:0.6rem; width:auto; background:rgba(16, 185, 129, 0.1); color:#10b981; border:1px solid #10b981;">APPROVE</button>
                                <button class="login-btn action-trigger" data-action="leave_reject" style="padding:4px 10px; font-size:0.6rem; width:auto; background:rgba(255,77,77,0.1); color:#ff4d4d; border:1px solid #ff4d4d;">REJECT</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div style="font-weight: 800;">Prof. Arjun Singh</div>
                            <div style="font-size: 0.6rem; color: var(--slate);">Management | Assoc. Prof</div>
                        </td>
                        <td><span style="color:var(--gold);">CASUAL_LEAVE</span></td>
                        <td>1 Day</td>
                        <td>Feb 25 - Feb 25</td>
                        <td>Personal Commitment</td>
                        <td>
                            <div style="display: flex; gap: 5px;">
                                <button class="login-btn action-trigger" data-action="leave_approve" style="padding:4px 10px; font-size:0.6rem; width:auto; background:rgba(16, 185, 129, 0.1); color:#10b981; border:1px solid #10b981;">APPROVE</button>
                                <button class="login-btn action-trigger" data-action="leave_reject" style="padding:4px 10px; font-size:0.6rem; width:auto; background:rgba(255,77,77,0.1); color:#ff4d4d; border:1px solid #ff4d4d;">REJECT</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,

    "Payroll": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Payroll Hub</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Sovereign Compensation Disbursal Engine</p>
        </div>

        <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 20px; margin-top: 30px;" class="slide-up">
            <div style="background: var(--glass); padding:30px; border-radius:16px; border:1px solid var(--glass-border); text-align:center;">
                <h4 style="font-size: 1.2rem; color: var(--white); font-weight: 900; margin-bottom: 10px;">FEB 2026 DISBURSEMENT</h4>
                <p style="color: var(--slate); font-size: 0.75rem; margin-bottom: 25px;">Institutional payroll cycle ready for global execution.</p>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 30px;">
                    <div style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; border: 1px solid var(--glass-border);">
                        <span style="font-size: 0.6rem; color: var(--gold); display: block; text-transform: uppercase;">Total Disbursal</span>
                        <span style="font-size: 1.6rem; font-weight: 800; color: var(--white);">$1.24M</span>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; border: 1px solid var(--glass-border);">
                        <span style="font-size: 0.6rem; color: #10b981; display: block; text-transform: uppercase;">Faculty Count</span>
                        <span style="font-size: 1.6rem; font-weight: 800; color: var(--white);">1,250</span>
                    </div>
                </div>

                <button class="login-btn action-trigger" data-action="payroll_run" style="width: 100%; height: 50px; font-size: 0.9rem; background: var(--gold); color: white; font-weight: 900; letter-spacing: 2px;">EXECUTE_GLOBAL_DISBURSEMENT_PASS</button>
                <button class="login-btn action-trigger" data-action="gen_payslip" style="margin-top: 15px; width: 100%; border-color: rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; gap:8px;"><i data-lucide="download" style="width:14px; height:14px;"></i> EXPORT_PAYSLIP_BATCH_FOR_LEDGER</button>
            </div>

            <div style="display:flex; flex-direction:column; gap:20px;">
                <div style="background: var(--glass); padding:25px; border-radius:16px; border:1px solid var(--glass-border);">
                    <h3 style="font-size: 0.85rem; font-weight: 700; color: var(--gold); margin-bottom: 15px;">Payroll Integrity Checks</h3>
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

                <div style="background: var(--glass); padding:25px; border-radius:16px; border:1px solid var(--glass-border);">
                    <h3 style="font-size: 0.85rem; font-weight: 700; color: var(--gold); margin-bottom: 15px;">Salary Composition</h3>
                    <div style="height: 120px; width: 100%; position: relative; display: flex; align-items: center; justify-content: center;">
                        <svg width="100" height="100" viewBox="0 0 42 42">
                            <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="rgba(255,255,255,0.05)" stroke-width="3"></circle>
                            <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="var(--gold)" stroke-width="3" stroke-dasharray="70 30" stroke-dashoffset="25"></circle>
                            <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#10b981" stroke-width="3" stroke-dasharray="20 80" stroke-dashoffset="55"></circle>
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
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">HR Analytics & Workforce Reports</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Institutional Human Capital Intelligence</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 25px;" class="slide-up">
            <div class="kpi-card glass-card">
                <span class="kpi-label">Retention Rate</span>
                <span class="kpi-val">95.8%</span>
                <div style="font-size: 0.6rem; color: #10b981;">Optimal Stability</div>
            </div>
            <div class="kpi-card glass-card">
                <span class="kpi-label">Avg Tenure</span>
                <span class="kpi-val">5.4 Yrs</span>
                <div style="font-size: 0.6rem; color: var(--gold);">Institutional Memory</div>
            </div>
            <div class="kpi-card glass-card">
                <span class="kpi-label">Hiring Velocity</span>
                <span class="kpi-val">12 Days</span>
                <div style="font-size: 0.6rem; color: #10b981;">Fast-track</div>
            </div>
            <div class="kpi-card glass-card">
                <span class="kpi-label">Compliance Rank</span>
                <span class="kpi-val">AAA</span>
                <div style="font-size: 0.6rem; color: #10b981;">Integrity: 100%</div>
            </div>
        </div>

        <div class="slide-up" style="margin-top: 25px; background: var(--glass); padding: 30px; border-radius: 16px; border: 1px solid var(--glass-border);">
            <h3 style="font-size: 1rem; font-weight: 800; color: var(--gold); margin-bottom: 25px;">Workforce Composition By Department</h3>
            <div style="display: flex; flex-direction: column; gap: 20px;">
                <div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.7rem; margin-bottom: 8px;">
                        <span>Engineering Faculty</span>
                        <span style="font-weight: 800;">450 Members (36%)</span>
                    </div>
                    <div style="height: 6px; background: rgba(255,255,255,0.05); border-radius: 3px; overflow: hidden;">
                        <div style="width: 36%; height: 100%; background: var(--gold);"></div>
                    </div>
                </div>
                <div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.7rem; margin-bottom: 8px;">
                        <span>Management & Humanities</span>
                        <span style="font-weight: 800;">320 Members (25%)</span>
                    </div>
                    <div style="height: 6px; background: rgba(255,255,255,0.05); border-radius: 3px; overflow: hidden;">
                        <div style="width: 25%; height: 100%; background: var(--gold);"></div>
                    </div>
                </div>
            </div>
            <div style="margin-top: 30px; display: flex; gap: 15px;">
                <button class="login-btn action-trigger" data-action="export_pdf" style="width: auto; padding: 10px 25px;">EXPORT_HEADCOUNT_MASTER</button>
                <button class="login-btn action-trigger" data-action="export_excel" style="width: auto; padding: 10px 25px; border-color: var(--glass-border);">COMPLIANCE_AUDIT_LOG</button>
            </div>
        </div>
    `
};
