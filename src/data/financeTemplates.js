import { globalStats } from './mockData.js';

export const financeViewTemplates = {
    "Dashboard": (role = "Finance") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Finance Dashboard</h1>
            <p style="color: #555; font-size: 0.75rem; margin-top: 5px; font-weight: 700; letter-spacing: 2px;">Live Updates: <span style="color: var(--vibrant-violet);">Active</span> &nbsp;|&nbsp; Status: <span style="color: var(--vibrant-violet);">Verified</span></p>
        </div>
        
        <div class="kpi-grid" style="margin-top: 25px;">
            <div class="kpi-card" style="border-top: 3px solid var(--vibrant-violet); padding: 15px 22px;">
                <span class="kpi-label" style="color: var(--vibrant-violet); font-weight: 900;">Reserves</span>
                <span class="kpi-val">$12.4M</span>
            </div>
            <div class="kpi-card" style="border-top: 3px solid #ef4444; padding: 15px 22px;">
                <span class="kpi-label" style="color: #ef4444; font-weight: 900;">Monthly Burn</span>
                <span class="kpi-val">$840K</span>
            </div>
            <div class="kpi-card" style="border-top: 3px solid var(--white); padding: 15px 22px;">
                <span class="kpi-label" style="color: var(--white); font-weight: 900;">Runway</span>
                <span class="kpi-val">14.8 Months</span>
            </div>
        </div>

        <div class="grid-2-col slide-up" style="margin-top: 25px;">
            <div style="background: var(--glass); padding: 22px; border-radius: 12px; border: 1px solid var(--glass-border); min-width: 0;">

                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--white);">Velocity Matrix</h3>
                    <div style="display: flex; gap: 15px;">
                        <span style="font-size: 0.7rem; color: #555;"><i style="color: var(--vibrant-violet); margin-right: 5px;">●</i>Revenue</span>
                        <span style="font-size: 0.7rem; color: #555;"><i style="color: #ff4d4d; margin-right: 5px;">●</i>Expense</span>
                    </div>
                </div>
                <div style="height: 180px; background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; position: relative; overflow: hidden; display: flex; align-items: flex-end;">
                    <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="none" style="position: absolute; bottom: 0; left: 0;">
                        <path class="wave-path master-wave" d="M0,200 Q200,100 400,150 T800,50 T1000,80 V300 H0 Z" fill="rgba(0, 128, 128, 0.1)" stroke="var(--vibrant-violet)" stroke-width="3" />
                        <path d="M0,250 Q200,200 400,220 T800,180 T1000,200 V300 H0 Z" fill="rgba(239, 68, 68, 0.05)" stroke="#ef4444" stroke-width="2" stroke-dasharray="8,8" />
                    </svg>
                    <div style="position: absolute; top: 20px; right: 20px; text-align: right;">
                        <div style="font-size: 1.8rem; font-weight: 900; color: var(--vibrant-violet); font-family: var(--font-display);">+$3.8M</div>
                        <div style="font-size: 0.6rem; color: var(--vibrant-violet); letter-spacing: 2px; font-weight: 900;">Budget Surplus</div>
                    </div>
                </div>
            </div>
            
            <div style="background: var(--glass); padding: 22px; border-radius: 12px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.85rem; font-weight: 700; margin-bottom: 15px; color: var(--vibrant-violet);">Actions</h3>
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <div class="action-card action-trigger" data-action="reconcile_selected" style="cursor:pointer; display:flex; align-items:center; gap:12px; padding:12px; background:rgba(255,255,255,0.03); border-radius:10px; border:1px solid var(--glass-border);">
                        <i data-lucide="refresh-cw" style="width:20px; height:20px; color:var(--vibrant-violet);"></i>
                        <div>
                            <span style="font-size:0.75rem; font-weight:800; display:block;">Account Reconciliation</span>
                        </div>
                    </div>
                    <div class="action-card action-trigger" data-action="run_audit" style="cursor:pointer; display:flex; align-items:center; gap:12px; padding:12px; background:rgba(255,255,255,0.03); border-radius:10px; border:1px solid var(--glass-border);">
                        <i data-lucide="search" style="width:20px; height:20px; color:var(--vibrant-violet);"></i>
                        <div>
                            <span style="font-size:0.75rem; font-weight:800; display:block;">Compliance Check</span>
                        </div>
                    </div>
                     <div class="action-card action-trigger" data-action="export_master_ledger" style="cursor:pointer; display:flex; align-items:center; gap:12px; padding:12px; background: rgba(0, 128, 128, 0.05); border-radius:10px; border: 1px solid var(--vibrant-violet);">
                        <i data-lucide="bar-chart-3" style="width:20px; height:20px; color:var(--white);"></i>
                        <div>
                            <span style="font-size:0.75rem; font-weight:800; display:block; color:var(--white);">Export Ledger</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    "Ledger": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Main Ledger</h1>
            <div class="filters-bar" style="margin-top: 20px; background: var(--glass-white); padding: 15px 25px; border-radius: 12px; display: flex; gap: 15px; border: 1px solid var(--glass-border); align-items: center;">
                <div style="position: relative; flex: 1;">
                    <i data-lucide="search" style="position: absolute; left: 15px; top: 10px; width:16px; height:16px; color: var(--vibrant-violet);"></i>
                    <input class="login-input" placeholder="Search hash..." style="margin: 0; padding: 10px 15px 10px 45px; font-size: 0.75rem; width: 100%; background: rgba(255,255,255,0.03); border: 1px solid var(--glass-border); color: var(--slate);">
                </div>
                <button class="login-btn action-trigger" data-action="reconcile_selected" style="width: auto; padding: 10px 25px; font-size: 0.75rem; background: var(--vibrant-violet); color: #000; font-weight: 900; border-radius: 8px;">Sync Now</button>
            </div>
        </div>

        <div class="slide-up" style="margin-top: 25px; background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
            <table class="data-table" style="font-size: 0.75rem;">
                <thead>
                    <tr><th>Transaction ID</th><th>Origin</th><th>Classification</th><th>Amount</th><th>Timestamp</th><th>Status</th><th>Actions</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code style="color:var(--gold);">0x88A2...FE01</code></td>
                        <td>Fee Gateway Alfa</td><td>Revenue Credit</td>
                        <td style="font-weight: 800; color: #10b981;">+$84,200</td>
                        <td>Today, 14:20:11</td>
                        <td><span class="status-pill status-verified">Synced</span></td>
                        <td><button class="login-btn" style="padding:4px 8px; font-size:0.6rem; width:auto;">VOUCHER</button></td>
                    </tr>
                    <tr>
                        <td><code style="color:var(--gold);">0x88B3...CF12</code></td>
                        <td>Payroll Standard</td><td>Operational Debit</td>
                        <td style="font-weight: 800; color: #ff4d4d;">-$124,000</td>
                        <td>Today, 11:45:00</td>
                        <td><span class="status-pill status-verified">SYNCHRONIZED</span></td>
                        <td><button class="login-btn" style="padding:4px 8px; font-size:0.6rem; width:auto;">VOUCHER</button></td>
                    </tr>
                    <tr>
                        <td><code style="color:var(--vibrant-violet);">0x88C4...AA90</code></td>
                        <td>Vendor Beta</td><td>Procurement Debit</td>
                        <td style="font-weight: 800; color: #ff4d4d;">-$12,450</td>
                        <td>Yesterday</td>
                        <td><span class="status-pill warning">Verifying</span></td>
                        <td><button class="login-btn action-trigger" data-action="run_audit" style="padding:4px 8px; font-size:0.6rem; width:auto;">Audit TX</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,

    "Assets": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Assets Management</h1>
            <p style="color: #555; font-size: 0.75rem; margin-top: 5px; font-weight: 700; letter-spacing: 2px;">Valuation Status: <span style="color: var(--vibrant-violet);">Premium Grade</span></p>
        </div>

        <div class="grid-adaptive slide-up" style="margin-top: 25px;">
            <div style="background: var(--glass); padding: 18px; border-radius: 12px; border: 1px solid var(--glass-border); text-align: center;">
                <h3 style="font-size: 0.7rem; font-weight: 700; color: var(--vibrant-violet); margin-bottom: 12px;">Liquidity</h3>
                <div style="font-size: 1.8rem; font-weight: 900; color: var(--white);">$4.82M</div>
            </div>
            <div style="background: var(--glass); padding: 18px; border-radius: 12px; border: 1px solid var(--glass-border); text-align: center;">
                <h3 style="font-size: 0.7rem; font-weight: 700; color: var(--vibrant-violet); margin-bottom: 12px;">Infrastructure</h3>
                <div style="font-size: 1.8rem; font-weight: 900; color: var(--white);">$18.44M</div>
            </div>
            <div style="background: var(--glass); padding: 18px; border-radius: 12px; border: 1px solid var(--glass-border); text-align: center;">
                <h3 style="font-size: 0.7rem; font-weight: 700; color: var(--vibrant-violet); margin-bottom: 12px;">Endowments</h3>
                <div style="font-size: 1.8rem; font-weight: 900; color: var(--white);">$3.15M</div>
            </div>
        </div>

        <div class="slide-up" style="margin-top: 25px; background: var(--glass); padding: 22px; border-radius: 12px; border: 1px solid var(--glass-border);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h3 style="font-size: 0.9rem; font-weight: 800; color: var(--vibrant-violet);">Fiscal Utilization</h3>
            </div>
            <div style="display: flex; flex-direction: column; gap: 15px;">
                <div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.7rem; margin-bottom: 8px;">
                        <span>Academic Excellence</span>
                        <span style="font-weight: 800;">75%</span>
                    </div>
                    <div style="height: 4px; background: rgba(255,255,255,0.05); border-radius: 2px; overflow: hidden;">
                        <div style="width: 75%; height: 100%; background: var(--vibrant-violet);"></div>
                    </div>
                </div>
                <div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.7rem; margin-bottom: 8px;">
                        <span>Infrastructure</span>
                        <span style="font-weight: 800;">11%</span>
                    </div>
                    <div style="height: 4px; background: rgba(255,255,255,0.05); border-radius: 2px; overflow: hidden;">
                        <div style="width: 11%; height: 100%; background: var(--white);"></div>
                    </div>
                </div>
                <div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.7rem; margin-bottom: 8px;">
                        <span>General OpEx</span>
                        <span style="font-weight: 800;">92%</span>
                    </div>
                    <div style="height: 4px; background: rgba(255,255,255,0.05); border-radius: 2px; overflow: hidden;">
                        <div style="width: 92%; height: 100%; background: var(--vibrant-violet);"></div>
                    </div>
                </div>
            </div>
        </div>
    `,

    "Reports": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Fiscal Reports</h1>
            <p style="color: #555; font-size: 0.75rem; margin-top: 5px; font-weight: 700; letter-spacing: 2px;">Report Generation Hub</p>
        </div>

        <div class="grid-adaptive slide-up" style="margin-top: 25px;">
            <div class="kpi-card action-trigger" data-action="export_pdf" style="cursor:pointer; padding: 15px 22px;">
                <i data-lucide="scroll" style="width:24px; height:24px; color:var(--vibrant-violet); margin-bottom:12px;"></i>
                <h4 style="font-size:0.75rem; color:var(--white); margin-bottom:5px;">Balance Sheet</h4>
            </div>
            <div class="kpi-card action-trigger" data-action="export_excel" style="cursor:pointer; padding: 15px 22px;">
                <i data-lucide="bar-chart-3" style="width:24px; height:24px; color:var(--vibrant-violet); margin-bottom:12px;"></i>
                <h4 style="font-size:0.75rem; color:var(--white); margin-bottom:5px;">P&L Statement</h4>
            </div>
            <div class="kpi-card action-trigger" data-action="export_pdf" style="cursor:pointer; padding: 15px 22px;">
                <i data-lucide="home" style="width:24px; height:24px; color:var(--vibrant-violet); margin-bottom:12px;"></i>
                <h4 style="font-size:0.75rem; color:var(--white); margin-bottom:5px;">Asset Valuation</h4>
            </div>
            <div class="kpi-card action-trigger" data-action="export_master_ledger" style="cursor:pointer; padding: 15px 22px;">
                <i data-lucide="file-text" style="width:24px; height:24px; color:var(--vibrant-violet); margin-bottom:12px;"></i>
                <h4 style="font-size:0.75rem; color:var(--white); margin-bottom:5px;">Audit Trail</h4>
            </div>
        </div>

        <div style="margin-top: 25px; background: rgba(0, 128, 128, 0.05); padding: 22px; border-radius: 12px; border: 1px dashed var(--vibrant-violet);">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h3 style="font-size: 1rem; font-weight: 900; color: var(--white);">Reconciliation 2026</h3>
                    <p style="font-size: 0.7rem; color: #555; margin-top: 5px;">Synchronize campus logs with central control.</p>
                </div>
                <button class="login-btn action-trigger" data-action="reconcile_selected" style="width: auto; padding: 10px 25px; background: var(--vibrant-violet); color: #000; font-weight: 900;">Sync Now</button>
            </div>
        </div>
    `
};
