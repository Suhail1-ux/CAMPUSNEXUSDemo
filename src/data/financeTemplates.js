import { globalStats } from './mockData.js';

export const financeViewTemplates = {
    "Dashboard": (role = "Finance") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Sovereign Fiscal Pulse</h1>
            <p style="color: var(--slate); font-size: 0.8rem; margin-top: 5px;">Institutional Liquidity & Budgetary Telemetry &nbsp;|&nbsp; <span style="color: #64ffda;">Sovereign Node Sync: ACTIVE</span></p>
        </div>
        
        <div class="kpi-grid" style="margin-top: 30px;">
            <div class="kpi-card">
                <span class="kpi-label">Institutional Reserves</span>
                <span class="kpi-val">$12.4M</span>
                <div style="font-size: 0.65rem; color: #64ffda; font-weight: 700;">↑ 4.2% Quarter-over-Quarter</div>
            </div>
            <div class="kpi-card">
                <span class="kpi-label">Monthly Burn Rate</span>
                <span class="kpi-val" style="color: #ff4d4d;">$840K</span>
                <div style="font-size: 0.65rem; color: var(--slate); font-weight: 700;">Projected OpEx Variance: -2%</div>
            </div>
            <div class="kpi-card">
                <span class="kpi-label">Node Integrity Index</span>
                <span class="kpi-val" style="color: #64ffda;">99.99%</span>
                <div style="font-size: 0.65rem; color: #64ffda; font-weight: 700;">Standard Deviation: 0.01</div>
            </div>
            <div class="kpi-card">
                <span class="kpi-label">Fiscal Runway</span>
                <span class="kpi-val" style="color: var(--gold);">14.8 Mo</span>
                <div style="font-size: 0.65rem; color: var(--gold); font-weight: 700;">Safe Threshold: >12 Mo</div>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 25px; margin-top: 25px;" class="slide-up">
            <div style="background: var(--glass); padding: 30px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
                    <h3 style="font-size: 0.9rem; font-weight: 700;">Budgetary Velocity Matrix</h3>
                    <div style="display: flex; gap: 15px;">
                        <span style="font-size: 0.7rem; color: var(--slate);"><i style="color: var(--gold); margin-right: 5px;">●</i>Revenue Node</span>
                        <span style="font-size: 0.7rem; color: var(--slate);"><i style="color: #ff4d4d; margin-right: 5px;">●</i>Expense Node</span>
                    </div>
                </div>
                <div style="height: 250px; background: rgba(0,0,0,0.2); border-radius: 12px; border: 1px dashed var(--glass-border); position: relative; overflow: hidden; display: flex; align-items: flex-end;">
                    <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="none" style="position: absolute; bottom: 0; left: 0;">
                        <!-- Revenue Path -->
                        <path d="M0,200 Q200,100 400,150 T800,50 T1000,80 V300 H0 Z" fill="rgba(184,134,11,0.1)" stroke="var(--gold)" stroke-width="3" />
                        <!-- Expense Path -->
                        <path d="M0,250 Q200,200 400,220 T800,180 T1000,200 V300 H0 Z" fill="rgba(255,77,77,0.05)" stroke="#ff4d4d" stroke-width="2" stroke-dasharray="5,5" />
                    </svg>
                    <div style="position: absolute; top: 20px; right: 20px; text-align: right;">
                        <div style="font-size: 1.2rem; font-weight: 900; color: #64ffda;">+$3.8M</div>
                        <div style="font-size: 0.6rem; color: var(--slate); letter-spacing: 1px;">NET_FISCAL_SURPLUS</div>
                    </div>
                </div>
            </div>
            
            <div style="background: var(--glass); padding: 30px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 20px;">Sovereign Fiscal Triggers</h3>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div class="action-card action-trigger" data-action="reconcile_selected" style="cursor:pointer; display:flex; align-items:center; gap:12px; padding:15px; background:rgba(255,255,255,0.03); border-radius:10px; border:1px solid var(--glass-border);">
                        <i style="font-size:1.5rem; color:var(--gold);">⛓️</i>
                        <div>
                            <span style="font-size:0.75rem; font-weight:800; display:block;">Execute Global Recon</span>
                            <span style="font-size:0.6rem; color:var(--slate);">Audit Node synchronization pass</span>
                        </div>
                    </div>
                    <div class="action-card action-trigger" data-action="run_audit" style="cursor:pointer; display:flex; align-items:center; gap:12px; padding:15px; background:rgba(255,255,255,0.03); border-radius:10px; border:1px solid var(--glass-border);">
                        <i style="font-size:1.5rem; color:var(--gold);">🔍</i>
                        <div>
                            <span style="font-size:0.75rem; font-weight:800; display:block;">Sovereign Compliance Pass</span>
                            <span style="font-size:0.6rem; color:var(--slate);">Regulatory ledger verification</span>
                        </div>
                    </div>
                     <div class="action-card action-trigger" data-action="export_master_ledger" style="cursor:pointer; display:flex; align-items:center; gap:12px; padding:15px; background:rgba(100,255,218,0.05); border-radius:10px; border:1px solid rgba(100,255,218,0.2);">
                        <i style="font-size:1.5rem; color:var(--gold);">📊</i>
                        <div>
                            <span style="font-size:0.75rem; font-weight:800; display:block; color:var(--gold);">Export Master Ledger</span>
                            <span style="font-size:0.6rem; color:var(--slate);">Comprehensive 0xFF Sync Report</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    "Ledger": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Global Sovereign Ledger</h1>
            <div class="filters-bar" style="margin-top: 20px; background: var(--glass); padding: 20px; border-radius: 12px; display: flex; gap: 15px; border: 1px solid var(--glass-border);">
                <div style="position: relative; flex: 1;">
                    <i style="position: absolute; left: 12px; top: 10px; font-size: 0.8rem; opacity: 0.5;">🔍</i>
                    <input class="login-input" placeholder="Search Transaction Hash, Entity or Node ID..." style="margin: 0; padding: 8px 15px 8px 35px; font-size: 0.75rem; width: 100%;">
                </div>
                <button class="login-btn action-trigger" data-action="reconcile_selected" style="width: auto; padding: 8px 25px; font-size: 0.75rem; background: var(--gold); color: var(--navy-dark);">RUN_INTEGRITY_SYNC</button>
            </div>
        </div>

        <div class="slide-up" style="margin-top: 25px; background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
            <table class="data-table" style="font-size: 0.75rem;">
                <thead>
                    <tr><th>Tx Hash</th><th>Origin Node</th><th>Classification</th><th>Amount</th><th>Timestamp</th><th>Integrity</th><th>Actions</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code style="color:var(--gold);">0x88A2...FE01</code></td>
                        <td>Fee Gateway Alfa</td><td>Revenue Credit</td>
                        <td style="font-weight: 800; color: #64ffda;">+$84,200</td>
                        <td>Today, 14:20:11</td>
                        <td><span class="status-pill status-verified">SYNCHRONIZED</span></td>
                        <td><button class="login-btn" style="padding:4px 8px; font-size:0.6rem; width:auto;">VOUCHER</button></td>
                    </tr>
                    <tr>
                        <td><code style="color:var(--gold);">0x88B3...CF12</code></td>
                        <td>Payroll Node Std</td><td>Operational Debit</td>
                        <td style="font-weight: 800; color: #ff4d4d;">-$124,000</td>
                        <td>Today, 11:45:00</td>
                        <td><span class="status-pill status-verified">SYNCHRONIZED</span></td>
                        <td><button class="login-btn" style="padding:4px 8px; font-size:0.6rem; width:auto;">VOUCHER</button></td>
                    </tr>
                    <tr>
                        <td><code style="color:var(--gold);">0x88C4...AA90</code></td>
                        <td>Vendor Node Beta</td><td>Procurement Debit</td>
                        <td style="font-weight: 800; color: #ff4d4d;">-$12,450</td>
                        <td>Yesterday</td>
                        <td><span class="status-pill status-pending" style="color:#ffab00; border-color:#ffab00;">VERIFYING</span></td>
                        <td><button class="login-btn action-trigger" data-action="run_audit" style="padding:4px 8px; font-size:0.6rem; width:auto;">AUDIT</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,

    "Assets": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Institutional Asset Matrix</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Comprehensive Net Worth Valuation | Sovereign Audit Grade: AAA</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 30px;" class="slide-up">
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border); text-align: center;">
                <h3 style="font-size: 0.8rem; font-weight: 700; color: var(--gold); margin-bottom: 20px;">Reserve Liquidity</h3>
                <div style="font-size: 2.2rem; font-weight: 900; color: var(--white);">$4.82M</div>
                <div style="font-size: 0.6rem; color: #64ffda; margin-top: 10px;">AVAILABLE_CASH_NODES</div>
            </div>
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border); text-align: center;">
                <h3 style="font-size: 0.8rem; font-weight: 700; color: var(--gold); margin-bottom: 20px;">Fixed Infrastructure</h3>
                <div style="font-size: 2.2rem; font-weight: 900; color: var(--white);">$18.44M</div>
                <div style="font-size: 0.6rem; color: var(--slate); margin-top: 10px;">LAND_BUILDINGS_EQUIPMENT</div>
            </div>
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border); text-align: center;">
                <h3 style="font-size: 0.8rem; font-weight: 700; color: var(--gold); margin-bottom: 20px;">Endowment Nodes</h3>
                <div style="font-size: 2.2rem; font-weight: 900; color: var(--white);">$3.15M</div>
                <div style="font-size: 0.6rem; color: #ffab00; margin-top: 10px;">LOCKED_TRUST_ASSETS</div>
            </div>
        </div>

        <div class="slide-up" style="margin-top: 25px; background: var(--glass); padding: 30px; border-radius: 16px; border: 1px solid var(--glass-border);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
                <h3 style="font-size: 1rem; font-weight: 800; color: var(--gold);">Departmental Fiscal Utilization</h3>
                <span style="font-size: 0.65rem; color: var(--slate);">FY 2026-27 Allocation Tracking</span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 20px;">
                <div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.7rem; margin-bottom: 8px;">
                        <span>Academic Excellence Council</span>
                        <span style="font-weight: 800;">$2.4M / $3.2M (75%)</span>
                    </div>
                    <div style="height: 8px; background: rgba(255,255,255,0.05); border-radius: 4px; overflow: hidden;">
                        <div style="width: 75%; height: 100%; background: var(--gold);"></div>
                    </div>
                </div>
                <div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.7rem; margin-bottom: 8px;">
                        <span>Infrastructure Expansion Node</span>
                        <span style="font-weight: 800;">$1.2M / $10.4M (11%)</span>
                    </div>
                    <div style="height: 8px; background: rgba(255,255,255,0.05); border-radius: 4px; overflow: hidden;">
                        <div style="width: 11%; height: 100%; background: #64ffda;"></div>
                    </div>
                </div>
                <div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.7rem; margin-bottom: 8px;">
                        <span>General Operating OpEx</span>
                        <span style="font-weight: 800;">$4.8M / $5.2M (92%)</span>
                    </div>
                    <div style="height: 8px; background: rgba(255,255,255,0.05); border-radius: 4px; overflow: hidden;">
                        <div style="width: 92%; height: 100%; background: #ff4d4d;"></div>
                    </div>
                </div>
            </div>
        </div>
    `,

    "Reports": () => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Finance Analytics & P&L</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Institutional Reporting Hub | Academic Year 2026 Sovereign Data</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 30px;" class="slide-up">
            <div class="kpi-card action-trigger" data-action="export_pdf" style="cursor:pointer; border: 1px solid var(--glass-border);">
                <i style="font-size: 2rem; display: block; margin-bottom: 15px;">📜</i>
                <h4 style="font-size:0.8rem; color:var(--gold); margin-bottom:8px;">Balance Sheet</h4>
                <p style="font-size:0.65rem; color:var(--slate);">Institutional net worth and liability pulse.</p>
                <div style="margin-top:10px; font-size:0.6rem; color:var(--white);">SYNC_TIMESTAMP: 10m ago</div>
            </div>
            <div class="kpi-card action-trigger" data-action="export_excel" style="cursor:pointer; border: 1px solid var(--glass-border);">
                <i style="font-size: 2rem; display: block; margin-bottom: 15px;">📊</i>
                <h4 style="font-size:0.8rem; color:var(--gold); margin-bottom:8px;">P&L Statement</h4>
                <p style="font-size:0.65rem; color:var(--slate);">Operational profit and loss matrix per node.</p>
                <div style="margin-top:10px; font-size:0.6rem; color:var(--white);">LAST_CALC: 2h ago</div>
            </div>
            <div class="kpi-card action-trigger" data-action="export_pdf" style="cursor:pointer; border: 1px solid var(--glass-border);">
                <i style="font-size: 2rem; display: block; margin-bottom: 15px;">🏚️</i>
                <h4 style="font-size:0.8rem; color:var(--gold); margin-bottom:8px;">Asset Valuation</h4>
                <p style="font-size:0.65rem; color:var(--slate);">Infrastructure and equipment depreciation audit.</p>
                <div style="margin-top:10px; font-size:0.6rem; color:#64ffda;">GRADE: AAA</div>
            </div>
            <div class="kpi-card action-trigger" data-action="export_master_ledger" style="cursor:pointer; border: 1px solid var(--glass-border);">
                <i style="font-size: 2rem; display: block; margin-bottom: 15px;">📑</i>
                <h4 style="font-size:0.8rem; color:var(--gold); margin-bottom:8px;">Sovereign Audit</h4>
                <p style="font-size:0.65rem; color:var(--slate);">Full transaction trail for external compliance.</p>
                <div style="margin-top:10px; font-size:0.6rem; color:#64ffda;">COMPLIANT: 100%</div>
            </div>
        </div>

        <div style="margin-top: 30px; background: rgba(184,134,11,0.05); padding: 30px; border-radius: 16px; border: 1px dashed var(--gold);">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h3 style="font-size: 1.1rem; font-weight: 900; color: var(--gold);">Global Fiscal Reconciliation 2026</h3>
                    <p style="font-size: 0.8rem; color: var(--slate); margin-top: 5px;">Synchronize all multi-campus transaction logs with the central budgetary node.</p>
                </div>
                <button class="login-btn action-trigger" data-action="reconcile_selected" style="width: auto; padding: 12px 30px; background: var(--gold); color: var(--navy-dark); font-weight: 900;">INITIALIZE_GLOBAL_SYNC</button>
            </div>
        </div>
    `
};
