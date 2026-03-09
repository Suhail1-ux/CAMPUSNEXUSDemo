import { globalStats } from './mockData.js';

export const accountViewTemplates = {
    "Dashboard": (role = "Accounts") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Fiscal</h1>
            <p style="color: #555; font-size: 0.75rem; margin-top: 5px; font-weight: 700; letter-spacing: 2px;">LEDGER_SYNC: <span style="color: var(--vibrant-violet);">ACTIVE</span></p>
        </div>
        
        <div class="kpi-grid" style="margin-top: 25px;">
            <div class="kpi-card" style="border-top: 3px solid var(--vibrant-violet); padding: 15px 22px;">
                <span class="kpi-label" style="color: var(--vibrant-violet); font-weight: 900;">COLLECTION</span>
                <span class="kpi-val">$942.5K</span>
            </div>
            <div class="kpi-card" style="border-top: 3px solid var(--white); padding: 15px 22px;">
                <span class="kpi-label" style="color: var(--white); font-weight: 900;">RECEIVABLES</span>
                <span class="kpi-val">$102.4K</span>
            </div>
            <div class="kpi-card" style="padding: 15px 22px;">
                <span class="kpi-label">LIQUIDITY</span>
                <span class="kpi-val" style="color: var(--vibrant-violet);">$4.8M</span>
            </div>
            <div class="kpi-card" style="padding: 15px 22px;">
                <span class="kpi-label">INTEGRITY</span>
                <span class="kpi-val" style="color: var(--white);">99.9%</span>
            </div>
        </div>

        <div class="grid-2-col slide-up" style="margin-top: 20px;">
            <div class="glass-card" style="padding: 22px; min-width: 0;">

                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                    <h3 style="font-size: 0.85rem; font-weight: 800; color: var(--vibrant-violet); letter-spacing: 1px;">REVENUE_VELOCITY</h3>
                </div>
                <div style="height: 140px; background: rgba(0, 128, 128, 0.02); border-radius: 8px; border: 1px dashed var(--glass-border); position: relative; overflow: hidden; display: flex; align-items: flex-end; padding: 0 10px;">
                    <svg width="100%" height="80%" viewBox="0 0 1000 200" preserveAspectRatio="none">
                        <path d="M0,180 Q100,160 200,170 T400,130 T600,90 T800,70 T1000,40" fill="none" stroke="var(--vibrant-violet)" stroke-width="3" />
                        <path d="M0,180 Q100,160 200,170 T400,130 T600,90 T800,70 T1000,40 V200 H0 Z" fill="rgba(0, 128, 128, 0.05)" />
                    </svg>
                </div>
                
                <div style="margin-top: 15px;">
                    <h4 style="font-size: 0.65rem; font-weight: 700; color: var(--white); margin-bottom: 8px; letter-spacing: 1px;">COLLECTION_HEATMAP</h4>
                    <div style="display: grid; grid-template-columns: repeat(15, 1fr); gap: 4px;">
                        ${Array(30).fill(0).map(() => `
                            <div style="aspect-ratio: 1; border-radius: 1px; background: rgba(0, 128, 128, ${0.1 + (Math.random() * 0.8)});"></div>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            <div style="background: var(--glass); padding: 22px; border-radius: 12px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.85rem; font-weight: 700; margin-bottom: 15px; color: var(--white);">LINKS</h3>
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <div class="action-card action-trigger" data-action="fee_demand_gen" style="cursor:pointer; display:flex; align-items:center; gap:10px; padding:10px; background:rgba(255,255,255,0.03); border-radius:8px; border:1px solid var(--vibrant-violet);">
                        <div><span style="font-size:0.7rem; font-weight:800; display:block; color:var(--vibrant-violet);">Demand</span></div>
                    </div>
                    <div class="action-card action-trigger" data-action="payroll_run" style="cursor:pointer; display:flex; align-items:center; gap:10px; padding:10px; background:rgba(255,255,255,0.03); border-radius:8px; border:1px solid var(--white);">
                        <div><span style="font-size:0.7rem; font-weight:800; display:block; color:var(--white);">Payroll</span></div>
                    </div>
                </div>

                <div style="margin-top: 20px; border-top: 1px solid var(--glass-border); padding-top: 15px;">
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <div style="font-size: 0.6rem; color: #555;">PENDING_VOUCHERS: <span style="color:var(--vibrant-violet);">12</span></div>
                    </div>
                </div>
            </div>
        </div>
    `,

    "Fees": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Fees</h1>
            <div class="filters-bar" style="margin-top: 20px; background: var(--glass); padding: 15px; border-radius: 12px; display: flex; gap: 10px; border: 1px solid var(--glass-border);">
                <input class="login-input" placeholder="Search..." style="margin: 0; padding: 10px 15px; font-size: 0.75rem; flex: 1; border: 1px solid var(--glass-border);">
                <button class="login-btn action-trigger" data-action="fee_demand_gen" style="width: auto; padding: 10px 25px; font-size: 0.75rem; background: var(--vibrant-violet); color: #000; font-weight: 800; border: none;">BILLING_RUN</button>
            </div>
        </div>

        <div style="display: flex; gap: 10px; margin-top: 20px;">
            <button class="login-btn" style="width: auto; padding: 5px 15px; font-size: 0.6rem; background: rgba(16, 185, 129, 0.1); border: 1px solid #10b981;">RECONCILE_SELECTED</button>
            <button class="login-btn" style="width: auto; padding: 5px 15px; font-size: 0.6rem; background: rgba(255,171,0,0.1); border: 1px solid #ffab00;">TRIGGER_REMINDERS</button>
            <button class="login-btn" style="width: auto; padding: 5px 15px; font-size: 0.6rem; background: rgba(255,77,77,0.1); border: 1px solid #ff4d4d;">HALT_ADMIT_CARDS</button>
        </div>

        <div class="slide-up" style="margin-top: 15px; background: var(--glass); border-radius: 12px; border: 1px solid var(--glass-border); overflow: hidden;">
            <div style="padding: 15px 22px; border-bottom: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center;">
                <h3 style="font-size: 0.85rem; font-weight: 700; color: var(--white);">Ledger</h3>
            </div>
            <div class="table-container">
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
                        <td style="padding:12px;"><input type="checkbox"></td>
                        <td><strong>Aarav Malhotra</strong></td>
                        <td>#CN-9822</td>
                        <td>Tuition</td>
                        <td>$4,500</td>
                        <td style="color:var(--vibrant-violet); font-weight:800;">$3,250</td>
                        <td><span class="status-pill warning">PARTIAL</span></td>
                        <td>
                            <button class="login-btn" style="padding:4px 8px; font-size:0.55rem; width:auto;">VIEW</button>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:12px;"><input type="checkbox"></td>
                        <td><strong>Isha Kapur</strong></td>
                        <td>#CN-9841</td>
                        <td>Hostel</td>
                        <td>$6,200</td>
                        <td style="color:var(--white); font-weight:800;">$6,200</td>
                        <td><span class="status-pill success">CLEARED</span></td>
                        <td><button class="login-btn" style="padding:4px 8px; font-size:0.55rem; width:auto;">VIEW</button></td>
                    </tr>
                    <tr>
                        <td style="padding:12px;"><input type="checkbox"></td>
                        <td><strong>Zaid Ahmed</strong></td>
                        <td>#CN-9856</td>
                        <td>Exam</td>
                        <td>$800</td>
                        <td style="color:#555;">$0</td>
                        <td><span class="status-pill error">UNPAID</span></td>
                        <td><button class="login-btn" style="padding:4px 8px; font-size:0.55rem; width:auto;">VIEW</button></td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    `,

    "Finance": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Finance</h1>
            <p style="color: #555; font-size: 0.75rem; margin-top: 5px; font-weight: 700; letter-spacing: 2px;">MONETARY_MATRIX</p>
        </div>

        <div class="grid-2-col slide-up" style="margin-top: 20px;">
            <div style="background: var(--glass); padding: 22px; border-radius: 12px; border: 1px solid var(--glass-border); min-width: 0;">

                <h3 style="font-size: 0.85rem; font-weight: 800; color: var(--vibrant-violet); margin-bottom: 20px; letter-spacing: 1px;">EXPENDITURE</h3>
                <div class="grid-adaptive" style="text-align: center;">
                    <div>
                        <svg width="60" height="60" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="8" />
                            <circle cx="50" cy="50" r="40" fill="none" stroke="var(--vibrant-violet)" stroke-width="8" stroke-dasharray="180, 251" />
                        </svg>
                        <span style="display: block; font-size: 0.55rem; color: #555; margin-top: 5px;">Academic</span>
                    </div>
                </div>
            </div>

            <div style="background: var(--glass); padding: 22px; border-radius: 12px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.85rem; font-weight: 800; color: var(--white); margin-bottom: 20px; letter-spacing: 1px;">NET_ASSETS</h3>
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--glass-border); padding-bottom: 5px;">
                        <span style="font-size: 0.65rem;">Liquid Reserves</span>
                        <span style="font-size: 0.75rem; font-weight: 900; color: var(--vibrant-violet);">$4.82M</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--glass-border); padding-bottom: 5px;">
                        <span style="font-size: 0.65rem;">Fixed Assets</span>
                        <span style="font-size: 0.75rem; font-weight: 900; color: var(--white);">$18.4M</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="slide-up" style="margin-top: 20px; background: var(--glass); border-radius: 12px; border: 1px solid var(--glass-border); overflow: hidden;">
            <div style="padding: 15px 22px; border-bottom: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center;">
                 <h3 style="font-size: 0.85rem; font-weight: 700; color: var(--white);">Ledger</h3>
            </div>
            <div class="table-container">
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
        </div>
    `,

    "Reports": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Intelligence</h1>
            <p style="color: #555; font-size: 0.75rem; margin-top: 5px; font-weight: 700; letter-spacing: 2px;">FISCAL_INTELLIGENCE</p>
        </div>

        <div class="grid-adaptive slide-up" style="margin-top: 20px;">
            <div class="kpi-card action-trigger" data-action="export_pdf" style="cursor:pointer; border: 1px solid var(--glass-border); padding: 15px;">
                <h4 style="font-size:0.7rem; color:var(--vibrant-violet); margin-bottom:5px;">Revenue</h4>
                <p style="font-size:0.55rem; color:#555;">Predictive cashflow models.</p>
            </div>
            <div class="kpi-card action-trigger" data-action="export_excel" style="cursor:pointer; border: 1px solid var(--glass-border); padding: 15px;">
                <h4 style="font-size:0.7rem; color:var(--white); margin-bottom:5px;">Defaulters</h4>
                <p style="font-size:0.55rem; color:#555;">Detailed pending dues.</p>
            </div>
            <div class="kpi-card action-trigger" data-action="export_pdf" style="cursor:pointer; border: 1px solid var(--glass-border); padding: 15px;">
                <h4 style="font-size:0.7rem; color:var(--vibrant-violet); margin-bottom:5px;">Balance</h4>
                <p style="font-size:0.55rem; color:#555;">Net worth pulse.</p>
            </div>
            <div class="kpi-card action-trigger" data-action="export_master_ledger" style="cursor:pointer; border: 1px solid var(--glass-border); padding: 15px;">
                <h4 style="font-size:0.7rem; color:var(--white); margin-bottom:5px;">Audit</h4>
                <p style="font-size:0.55rem; color:#555;">Transaction history.</p>
            </div>
        </div>

        <div style="margin-top: 30px; background: rgba(0, 128, 128, 0.05); padding: 25px; border-radius: 12px; border: 1px dashed var(--vibrant-violet);">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h3 style="font-size: 1rem; font-weight: 900; color: var(--vibrant-violet);">Integrity</h3>
                    <p style="font-size: 0.7rem; color: #555; margin-top: 5px;">Automated verification of institutional transactions.</p>
                </div>
                <button class="login-btn action-trigger" data-action="run_audit" style="width: auto; padding: 10px 25px; background: var(--vibrant-violet); color: #000; font-weight: 800; border: none;">AUDIT</button>
            </div>
        </div>
    `
};
