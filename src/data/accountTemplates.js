import { globalStats } from './mockData.js';

export const accountViewTemplates = {
    "Dashboard": (role = "Accounts") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Fiscal Oversight Dashboard</h1>
            <p style="color: var(--slate); font-size: 0.8rem; margin-top: 5px;">Institutional Financial Telemetry &nbsp;|&nbsp; <span style="color: #10b981;">Ledger Sync: 100%</span></p>
        </div>
        
        <div class="kpi-grid" style="margin-top: 30px;">
            <div class="kpi-card glass-card">
                <span class="kpi-label">Month-to-Date Collection</span>
                <span class="kpi-val" style="color: var(--white);">$942.5K</span>
                <div style="font-size: 0.65rem; color: var(--gold); font-weight: 700;">↑ 16.2% vs Multi-Year Avg</div>
            </div>
            <div class="kpi-card glass-card">
                <span class="kpi-label">Aging Receivables (>90d)</span>
                <span class="kpi-val" style="color: #ef4444;">$102.4K</span>
                <div class="status-pill warning" style="margin-top: 5px;">Velocity: MODERATE</div>
            </div>
            <div class="kpi-card glass-card">
                <span class="kpi-label">Institutional Liquidity</span>
                <span class="kpi-val" style="color: var(--gold);">$4.8M</span>
                <div style="font-size: 0.65rem; color: var(--slate); font-weight: 700;">4.2x Monthly OpEx Threshold</div>
            </div>
            <div class="kpi-card glass-card">
                <span class="kpi-label">Reconciliation Pulse</span>
                <span class="kpi-val" style="color: var(--white);">99.9%</span>
                <div class="status-pill success" style="margin-top: 5px;">Optimal Integrity</div>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 25px; margin-top: 25px;" class="slide-up">
            <div style="background: var(--glass); padding: 30px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
                    <h3 style="font-size: 0.9rem; font-weight: 700;">Real-time Revenue Velocity</h3>
                    <div style="display: flex; gap: 15px;">
                        <span style="font-size: 0.7rem; color: var(--slate);"><i style="color: var(--gold); margin-right: 5px;">●</i>Actual</span>
                        <span style="font-size: 0.7rem; color: var(--slate);"><i style="color: rgba(255,255,255,0.1); margin-right: 5px;">●</i>Projection</span>
                    </div>
                </div>
                <div style="height: 220px; background: rgba(99, 102, 241, 0.05); border-radius: 12px; border: 1px dashed var(--glass-border); position: relative; overflow: hidden; display: flex; align-items: flex-end; padding: 0 10px;">
                    <svg width="100%" height="80%" viewBox="0 0 1000 200" preserveAspectRatio="none">
                        <path d="M0,180 Q100,160 200,170 T400,130 T600,90 T800,70 T1000,40" fill="none" stroke="var(--gold)" stroke-width="3" stroke-linecap="round" />
                        <path d="M0,180 Q100,160 200,170 T400,130 T600,90 T800,70 T1000,40 V200 H0 Z" fill="rgba(99, 102, 241, 0.08)" />
                        <line x1="0" y1="180" x2="1000" y2="40" stroke="rgba(15, 23, 42, 0.1)" stroke-dasharray="5,5" />
                    </svg>
                    <div style="position: absolute; top: 20px; right: 20px; text-align: right;">
                        <div style="font-size: 1.2rem; font-weight: 900; color: var(--gold);">$1.2M</div>
                        <div style="font-size: 0.6rem; color: var(--slate); text-transform: uppercase; letter-spacing: 1px;">Projected Q1 Surplus</div>
                    </div>
                </div>
                
                <div style="margin-top: 25px;">
                    <h4 style="font-size: 0.75rem; font-weight: 700; color: var(--gold); margin-bottom: 15px;">Daily Collection Heatmap (30-Day Pulse)</h4>
                    <div style="display: grid; grid-template-columns: repeat(15, 1fr); gap: 6px;">
                        ${Array(30).fill(0).map((_, i) => `
                            <div style="aspect-ratio: 1; border-radius: 2px; background: rgba(99, 102, 241, ${0.1 + (Math.random() * 0.8)}); cursor: help;" title="Day ${i + 1}: $${(Math.random() * 40).toFixed(1)}K"></div>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            <div style="background: var(--glass); padding: 30px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 20px;">Institutional Hard-Links</h3>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div class="action-card action-trigger" data-action="fee_demand_gen" style="cursor:pointer; display:flex; align-items:center; gap:12px; padding:12px; background:rgba(184,134,11,0.05); border-radius:10px; border:1px solid var(--gold);">
                        <i data-lucide="mail" style="width:18px; height:18px; color:var(--gold);"></i>
                        <div>
                            <span style="font-size:0.7rem; font-weight:800; display:block;">Broadcast Fee Demand</span>
                            <span style="font-size:0.6rem; color:var(--slate);">Notify 4,200 Scholars</span>
                        </div>
                    </div>
                    <div class="action-card action-trigger" data-action="payroll_run" style="cursor:pointer; display:flex; align-items:center; gap:12px; padding:12px; background:rgba(255,255,255,0.03); border-radius:10px; border:1px solid var(--glass-border);">
                        <i data-lucide="landmark" style="width:18px; height:18px; color:var(--gold);"></i>
                        <div>
                            <span style="font-size:0.7rem; font-weight:800; display:block;">Initialize Payroll Sync</span>
                            <span style="font-size:0.6rem; color:var(--slate);">Faculty & Staff Disbursement</span>
                        </div>
                    </div>
                    <div class="action-card action-trigger" data-action="export_master_ledger" style="cursor:pointer; display:flex; align-items:center; gap:12px; padding:12px; background:rgba(16, 185, 129, 0.05); border-radius:10px; border:1px solid #10b981;">
                        <i data-lucide="landmark" style="width:18px; height:18px; color:var(--gold);"></i>
                        <div>
                            <span style="font-size:0.7rem; font-weight:800; display:block; color:var(--gold);">Financial Integrity Audit</span>
                            <span style="font-size:0.6rem; color:var(--slate);">Sovereign Compliance</span>
                        </div>
                    </div>
                </div>

                <div style="margin-top: 30px; border-top: 1px solid var(--glass-border); padding-top: 20px;">
                    <h4 style="font-size: 0.75rem; font-weight: 700; margin-bottom: 12px;">Fiscal Reminders</h4>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <div style="font-size: 0.65rem; display: flex; align-items: center; gap: 8px;">
                            <i data-lucide="alert-triangle" style="width:12px; height:12px; color:#ff4d4d;"></i>
                            <span>12 Vouchers Pending Approval</span>
                        </div>
                        <div style="font-size: 0.65rem; display: flex; align-items: center; gap: 8px;">
                            <i data-lucide="clock" style="width:12px; height:12px; color:#ffab00;"></i>
                            <span>TDS Filing Due in 3 Days</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    "Fees": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Fee Control Hub</h1>
            <div class="filters-bar" style="margin-top: 20px; background: var(--glass); padding: 20px; border-radius: 12px; display: flex; gap: 15px; border: 1px solid var(--glass-border);">
                <div style="position: relative; flex: 1;">
                    <i data-lucide="search" style="position: absolute; left: 12px; top: 10px; width:14px; height:14px; opacity: 0.5;"></i>
                    <input class="login-input" placeholder="Search Scholar, Roll No, or Transaction ID..." style="margin: 0; padding: 8px 15px 8px 35px; font-size: 0.75rem; width: 100%;">
                </div>
                <select class="login-input" style="margin: 0; padding: 8px 15px; font-size: 0.75rem; width: 180px;"><option>All Programs</option><option>B.Tech CS</option><option>MBA Finance</option></select>
                <select class="login-input" style="margin: 0; padding: 8px 15px; font-size: 0.75rem; width: 150px;"><option>Status: All</option><option>Unpaid</option><option>Cleared</option></select>
                <button class="login-btn action-trigger" data-action="fee_demand_gen" style="width: auto; padding: 8px 20px; font-size: 0.75rem; background: var(--gold); color: white;">BULK_BILLING_RUN</button>
            </div>
        </div>

        <div style="display: flex; gap: 10px; margin-top: 20px;">
            <button class="login-btn" style="width: auto; padding: 5px 15px; font-size: 0.6rem; background: rgba(16, 185, 129, 0.1); border: 1px solid #10b981;">RECONCILE_SELECTED</button>
            <button class="login-btn" style="width: auto; padding: 5px 15px; font-size: 0.6rem; background: rgba(255,171,0,0.1); border: 1px solid #ffab00;">TRIGGER_REMINDERS</button>
            <button class="login-btn" style="width: auto; padding: 5px 15px; font-size: 0.6rem; background: rgba(255,77,77,0.1); border: 1px solid #ff4d4d;">HALT_ADMIT_CARDS</button>
        </div>

        <div class="slide-up" style="margin-top: 15px; background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
            <div style="padding: 18px 22px; border-bottom: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center;">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold);">Receivable Ledger</h3>
                <div style="display: flex; gap: 20px;">
                    <div style="text-align: right;">
                        <span style="font-size: 0.55rem; color: var(--slate); display: block;">TOTAL_RECEIVABLE</span>
                        <span style="font-size: 0.9rem; font-weight: 900; color: #ff4d4d;">$1.24M</span>
                    </div>
                </div>
            </div>
            <table class="data-table" style="font-size: 0.75rem;">
                <thead>
                    <tr>
                        <th style="width: 40px;"><input type="checkbox"></th>
                        <th>Scholar</th>
                        <th>Scholar ID</th>
                        <th>Current Head</th>
                        <th>Due Amount</th>
                        <th>Paid Amount</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox"></td>
                        <td>
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav" style="width:24px; height:24px; border-radius:4px;">
                                <div>
                                    <span style="font-weight: 800; display: block;">Aarav Malhotra</span>
                                    <span style="font-size: 0.6rem; color: var(--slate);">B.Tech CS • Sem 6</span>
                                </div>
                            </div>
                        </td>
                        <td>#CN-9822</td>
                        <td>Tuition</td>
                        <td>$4,500</td>
                        <td style="color:#10b981;">$3,250</td>
                        <td><span class="status-pill status-pending">PARTIAL</span></td>
                        <td>
                            <div style="display: flex; gap: 5px;">
                                <button class="login-btn action-trigger" data-action="view_ledger" style="padding:2px 6px; font-size:0.55rem; width:auto;">LEDGER</button>
                                <button class="login-btn action-trigger" data-action="send_notice" style="padding:2px 6px; font-size:0.55rem; width:auto; background:rgba(255,171,0,0.1); color:#ffab00; border:1px solid #ffab00;">REMIND</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"></td>
                        <td>
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Isha" style="width:24px; height:24px; border-radius:4px;">
                                <div>
                                    <span style="font-weight: 800; display: block;">Isha Kapur</span>
                                    <span style="font-size: 0.6rem; color: var(--slate);">MBA Finance • Sem 2</span>
                                </div>
                            </div>
                        </td>
                        <td>#CN-9841</td>
                        <td>Hostel + Tuition</td>
                        <td>$6,200</td>
                        <td style="color:#10b981;">$6,200</td>
                        <td><span class="status-pill status-verified">CLEARED</span></td>
                        <td><button class="login-btn" style="padding:2px 6px; font-size:0.55rem; width:auto;">RECEIPT</button></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"></td>
                        <td>
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Zaid" style="width:24px; height:24px; border-radius:4px;">
                                <div>
                                    <span style="font-weight: 800; display: block;">Zaid Ahmed</span>
                                    <span style="font-size: 0.6rem; color: var(--slate);">B.Tech CS • Sem 4</span>
                                </div>
                            </div>
                        </td>
                        <td>#CN-9856</td>
                        <td>Exam Fees</td>
                        <td>$800</td>
                        <td style="color:#ff4d4d;">$0</td>
                        <td><span class="status-pill status-pending" style="color:#ff4d4d; border-color:#ff4d4d;">UNPAID</span></td>
                        <td><button class="login-btn action-trigger" data-action="send_notice" style="padding:2px 6px; font-size:0.55rem; width:auto; background:rgba(255,77,77,0.1); color:#ff4d4d; border:1px solid #ff4d4d;">DEMAND</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,

    "Finance": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Institutional Assets & Ledger</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Synchronized Monetary Matrix AY 2026-27</p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 30px;" class="slide-up">
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold); margin-bottom: 20px;">Departmental Expenditure Pulse</h3>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; text-align: center;">
                    <div>
                        <svg width="80" height="80" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="8" />
                            <circle cx="50" cy="50" r="40" fill="none" stroke="var(--gold)" stroke-width="8" stroke-dasharray="180, 251" stroke-linecap="round" />
                            <text x="50" y="55" font-size="12" fill="white" font-weight="900" text-anchor="middle">72%</text>
                        </svg>
                        <span style="display: block; font-size: 0.6rem; color: var(--slate); margin-top: 8px;">Academic Depts</span>
                    </div>
                    <div>
                        <svg width="80" height="80" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="8" />
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" stroke-width="8" stroke-dasharray="110, 251" stroke-linecap="round" />
                            <text x="50" y="55" font-size="12" fill="white" font-weight="900" text-anchor="middle">44%</text>
                        </svg>
                        <span style="display: block; font-size: 0.6rem; color: var(--slate); margin-top: 8px;">Infrastructure</span>
                    </div>
                    <div>
                        <svg width="80" height="80" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="8" />
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#ffab00" stroke-width="8" stroke-dasharray="230, 251" stroke-linecap="round" />
                            <text x="50" y="55" font-size="12" fill="white" font-weight="900" text-anchor="middle">92%</text>
                        </svg>
                        <span style="display: block; font-size: 0.6rem; color: var(--slate); margin-top: 8px;">Operating OpEx</span>
                    </div>
                </div>
            </div>

            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold); margin-bottom: 20px;">Institutional Net Assets</h3>
                <div style="display: flex; flex-direction: column; gap: 15px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;">
                        <span style="font-size: 0.7rem;">Liquid Cash Reserves</span>
                        <span style="font-size: 0.8rem; font-weight: 900; color: #10b981;">$4.82M</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;">
                        <span style="font-size: 0.7rem;">Fixed Assets (Infra)</span>
                        <span style="font-size: 0.8rem; font-weight: 900; color: var(--gold);">$18.4M</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;">
                        <span style="font-size: 0.7rem;">Endowment Funds</span>
                        <span style="font-size: 0.8rem; font-weight: 900; color: var(--white);">$3.15M</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="slide-up" style="margin-top: 25px; background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
            <div style="padding: 18px 22px; border-bottom: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center;">
                 <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold);">Global Expense Ledger</h3>
                 <button class="login-btn action-trigger" data-action="export_master_ledger" style="width:auto; padding:5px 15px; font-size:0.6rem;">DOWNLOAD_XLS_REPORTS</button>
            </div>
            <table class="data-table" style="font-size: 0.75rem;">
                <thead>
                    <tr><th>Tx Hash</th><th>Category</th><th>Beneficiary</th><th>Amount</th><th>Timestamp</th><th>Status</th></tr>
                </thead>
                <tbody>
                    <tr><td>0x88A1...F21</td><td>Academic Payroll</td><td>Faculty Disbursement</td><td>$840,000</td><td>Today, 10:45 AM</td><td><span class="status-pill status-verified">SETTLED</span></td></tr>
                    <tr><td>0x88B2...E42</td><td>Infra / AWS</td><td>Cloud Logistics</td><td>$12,400</td><td>Yesterday</td><td><span class="status-pill status-verified">SETTLED</span></td></tr>
                    <tr><td>0x88C3...A98</td><td>Marketing</td><td>Google Ad Engine</td><td>$4,500</td><td>Feb 20, 2026</td><td><span class="status-pill status-pending">IN_TRANSIT</span></td></tr>
                </tbody>
            </table>
        </div>
    `,

    "Reports": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Fiscal Intelligence Reports</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Institutional ReportsHub | Sovereign Financial Data</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 30px;" class="slide-up">
            <div class="kpi-card action-trigger" data-action="export_pdf" style="cursor:pointer; border: 1px solid var(--glass-border);">
                <i data-lucide="bar-chart-3" style="width:24px; height:24px; display: block; margin-bottom: 15px; color:var(--gold);"></i>
                <h4 style="font-size:0.75rem; color:var(--gold); margin-bottom:8px;">Revenue Projection</h4>
                <p style="font-size:0.6rem; color:var(--slate);">Predictive cashflow models for Q2 & Q3.</p>
                <div style="margin-top:10px; font-size:0.55rem; color:var(--gold);">RECORDS: 1,244 Sync</div>
            </div>
            <div class="kpi-card action-trigger" data-action="export_excel" style="cursor:pointer; border: 1px solid var(--glass-border);">
                <i data-lucide="search" style="width:24px; height:24px; display: block; margin-bottom: 15px; color:var(--gold);"></i>
                <h4 style="font-size:0.75rem; color:var(--gold); margin-bottom:8px;">Defaulter Matrix</h4>
                <p style="font-size:0.6rem; color:var(--slate);">Detailed breakdown of pending student dues.</p>
                <div style="margin-top:10px; font-size:0.55rem; color:#ff4d4d;">CRITICAL: 104 Records</div>
            </div>
            <div class="kpi-card action-trigger" data-action="export_pdf" style="cursor:pointer; border: 1px solid var(--glass-border);">
                <i data-lucide="landmark" style="width:24px; height:24px; display: block; margin-bottom: 15px; color:var(--gold);"></i>
                <h4 style="font-size:0.75rem; color:var(--gold); margin-bottom:8px;">Balance Sheet</h4>
                <p style="font-size:0.6rem; color:var(--slate);">Institutional net worth and liability pulse.</p>
                <div style="margin-top:10px; font-size:0.55rem; color:var(--white);">SYNC: 10m ago</div>
            </div>
            <div class="kpi-card action-trigger" data-action="export_master_ledger" style="cursor:pointer; border: 1px solid var(--glass-border);">
                <i data-lucide="file-text" style="width:24px; height:24px; display: block; margin-bottom: 15px; color:var(--gold);"></i>
                <h4 style="font-size:0.75rem; color:var(--gold); margin-bottom:8px;">Audit Trail</h4>
                <p style="font-size:0.6rem; color:var(--slate);">Comprehensive fiscal transaction history.</p>
                <div style="margin-top:10px; font-size:0.55rem; color:#10b981;">COMPLIANT: 100%</div>
            </div>
        </div>

        <div style="margin-top: 30px; background: rgba(100,255,218,0.05); padding: 25px; border-radius: 16px; border: 1px dashed rgba(100,255,218,0.3);">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h3 style="font-size: 1rem; font-weight: 900; color: #10b981;">Fiscal Integrity Report 2026</h3>
                    <p style="font-size: 0.75rem; color: var(--slate); margin-top: 5px;">Automated verification of all institutional financial transactions.</p>
                </div>
                <button class="login-btn action-trigger" data-action="run_audit" style="width: auto; padding: 10px 25px;">RUN_GLOBAL_CHECKSUM</button>
            </div>
        </div>
    `
};
