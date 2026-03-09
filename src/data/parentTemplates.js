export const parentViewTemplates = {
    "Dashboard": (role = "Parent") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Ward</h1>
            <p style="color: #555; font-size: 0.75rem; margin-top: 5px; font-weight: 700; letter-spacing: 2px;">SYNC: <span style="color: var(--vibrant-violet);">ACTIVE</span></p>
        </div>
        
        <div class="kpi-grid" style="margin-top: 25px;">
            <div class="kpi-card" style="border-top: 3px solid var(--vibrant-violet); padding: 15px 22px;">
                <span class="kpi-label" style="color: var(--vibrant-violet); font-weight: 900;">GPA</span>
                <span class="kpi-val">9.42</span>
            </div>
            <div class="kpi-card" style="border-top: 3px solid var(--white); padding: 15px 22px;">
                <span class="kpi-label" style="color: var(--white); font-weight: 900;">ATTENDANCE</span>
                <span class="kpi-val">98.5%</span>
            </div>
            <div class="kpi-card" style="padding: 15px 22px;">
                <span class="kpi-label">LIABILITY</span>
                <span class="kpi-val" style="color: var(--vibrant-violet);">$1,250</span>
            </div>
            <div class="kpi-card" style="padding: 15px 22px;">
                <span class="kpi-label">RANK</span>
                <span class="kpi-val" style="color: var(--white);">#02</span>
            </div>
        </div>

        <div class="grid-2-col slide-up" style="margin-top: 20px;">
            <div class="glass-card" style="padding: 22px; min-width: 0;">

                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                    <h3 style="font-size: 0.85rem; font-weight: 800; color: var(--vibrant-violet); letter-spacing: 1px;">MOMENTUM</h3>
                </div>
                <div style="height: 140px; background: rgba(0, 128, 128, 0.02); border-radius: 8px; border: 1px dashed var(--glass-border); position: relative; overflow: hidden; display: flex; align-items: flex-end; padding: 0 10px;">
                    <svg width="100%" height="80%" viewBox="0 0 1000 200" preserveAspectRatio="none">
                        <path d="M0,180 Q100,160 200,170 T400,130 T600,90 T800,70 T1000,40" fill="none" stroke="var(--vibrant-violet)" stroke-width="3" />
                        <path d="M0,180 Q100,160 200,170 T400,130 T600,90 T800,70 T1000,40 V200 H0 Z" fill="rgba(0, 128, 128, 0.05)" />
                    </svg>
                    <div style="position: absolute; top: 15px; left: 15px;">
                        <div style="font-size: 1.2rem; font-weight: 900; color: var(--white);">9.42</div>
                    </div>
                </div>
            </div>
            
            <div style="display: flex; flex-direction: column; gap: 15px;">
                <div style="background: var(--glass); padding: 22px; border-radius: 12px; border: 1px solid var(--glass-border);">
                    <h3 style="font-size: 0.85rem; font-weight: 700; color: var(--white); margin-bottom: 15px;">MENTOR</h3>
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px;">
                        <div>
                            <span style="font-size: 0.75rem; font-weight: 800; display: block;">Dr. Rohan Verma</span>
                        </div>
                    </div>
                    <button class="login-btn action-trigger" data-action="parent_connect" style="width: 100%; font-size: 0.7rem; background: var(--vibrant-violet); color: #000; font-weight: 800; border: none;">CONNECT</button>
                </div>

                <div class="glass-card" style="padding: 22px; border-left: 3px solid var(--vibrant-violet);">
                    <h3 style="font-size: 0.85rem; font-weight: 700; color: var(--vibrant-violet); margin-bottom: 10px;">ACTION_REQUIRED</h3>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-size: 1.1rem; font-weight: 900; color: var(--white);">$1,250</span>
                        <button class="login-btn action-trigger" data-action="pay_fees" style="width: auto; padding: 6px 15px; font-size: 0.65rem; background: var(--vibrant-violet); color: #000; font-weight: 800; border: none;">PAY</button>
                    </div>
                </div>
            </div>
        </div>
    `,

    "Attendance": (role = "Parent") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Attendance</h1>
            <p style="color: #555; font-size: 0.75rem; margin-top: 5px; font-weight: 700; letter-spacing: 2px;">PRESENCE_LEDGER</p>
        </div>

        <div class="kpi-grid" style="margin-top: 25px;">
            <div class="kpi-card" style="padding: 15px 22px;">
                <span class="kpi-label">PRESENT</span>
                <span class="kpi-val" style="color: var(--vibrant-violet);">242</span>
            </div>
            <div class="kpi-card" style="padding: 15px 22px;">
                <span class="kpi-label">ABSENT</span>
                <span class="kpi-val" style="color: var(--white);">04</span>
            </div>
            <div class="kpi-card" style="padding: 15px 22px;">
                <span class="kpi-label">CONSISTENCY</span>
                <span class="kpi-val">98.5%</span>
            </div>
        </div>

        <div class="slide-up" style="margin-top: 20px; background: var(--glass); border-radius: 12px; border: 1px solid var(--glass-border); overflow: hidden;">
            <div class="table-container">
                <table class="data-table" style="font-size: 0.72rem;">

                <thead>
                    <tr><th>Subject</th><th>Required</th><th>Current</th><th>Status</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="font-weight: 800;">Algorithms</td>
                        <td>75%</td>
                        <td style="color: var(--vibrant-violet); font-weight: 900;">100%</td>
                        <td><span class="status-pill success">DONE</span></td>
                    </tr>
                    <tr>
                        <td style="font-weight: 800;">ML</td>
                        <td>75%</td>
                        <td style="color: var(--white); font-weight: 900;">92%</td>
                        <td><span class="status-pill success">SAFE</span></td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    `,

    "Exams": (role = "Parent") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Grades</h1>
            <p style="color: #555; font-size: 0.75rem; margin-top: 5px; font-weight: 700; letter-spacing: 2px;">ACADEMIC_PROGRESSION</p>
        </div>

        <div class="grid-2-col slide-up" style="margin-top: 25px;">
            <div style="background: var(--glass); border-radius: 12px; border: 1px solid var(--glass-border); overflow: hidden; min-width: 0;">

                <div style="padding: 15px; border-bottom: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center;">
                    <h3 style="font-size: 0.85rem; font-weight: 800; color: var(--white);">History</h3>
                </div>
                <table class="data-table" style="font-size: 0.7rem;">
                    <thead><tr><th>Term</th><th>SGPA</th><th>CGPA</th><th>Status</th></tr></thead>
                    <tbody>
                        <tr><td>Sem 05</td><td>9.50</td><td>9.42</td><td><span class="status-pill success">DONE</span></td></tr>
                        <tr><td>Sem 04</td><td>9.33</td><td>9.30</td><td><span class="status-pill success">DONE</span></td></tr>
                    </tbody>
                </table>
            </div>

            <div style="display: flex; flex-direction: column; gap: 20px;">
                <div style="background: var(--glass); padding: 22px; border-radius: 12px; border: 1px solid var(--glass-border);">
                    <h3 style="font-size: 0.85rem; font-weight: 800; color: var(--vibrant-violet); margin-bottom: 15px;">UPCOMING</h3>
                    <div style="padding: 15px; background: rgba(255,255,255,0.03); border-radius: 8px; border-left: 3px solid var(--vibrant-violet);">
                        <h4 style="font-size: 0.9rem; margin-top: 5px; color: var(--white);">Sem 06 Final</h4>
                        <button class="login-btn action-trigger" data-action="hall_ticket" style="margin-top: 10px; width: 100%; background: var(--vibrant-violet); color: #000; font-weight: 800; border: none;">ACCESS</button>
                    </div>
                </div>
                
                <div class="glass-card" style="padding: 22px; text-align: center;">
                    <div style="font-size: 2.2rem; font-weight: 900; color: var(--white);">68%</div>
                    <div style="height: 4px; background: rgba(255,255,255,0.05); margin-top: 10px; border-radius: 2px;">
                        <div style="width: 68%; height: 100%; background: var(--vibrant-violet);"></div>
                    </div>
                </div>
            </div>
        </div>
    `,

    "Fees": (role = "Parent") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Finance</h1>
            <p style="color: #555; font-size: 0.75rem; margin-top: 5px; font-weight: 700; letter-spacing: 2px;">PORTAL_SYNC</p>
        </div>

        <div class="kpi-grid" style="margin-top: 25px;">
            <div class="kpi-card" style="padding: 15px 22px;">
                <span class="kpi-label">PAID</span>
                <span class="kpi-val" style="color: var(--vibrant-violet);">$7,250</span>
            </div>
            <div class="kpi-card" style="padding: 15px 22px; border-top: 3px solid var(--vibrant-violet);">
                <span class="kpi-label" style="color: var(--vibrant-violet); font-weight: 800;">DUE</span>
                <span class="kpi-val" style="color: var(--white);">$1,250</span>
            </div>
            <div class="kpi-card" style="padding: 15px 22px;">
                <span class="kpi-label">SCHOLARSHIP</span>
                <span class="kpi-val" style="color: var(--white);">-$2,125</span>
            </div>
        </div>

        <div class="grid-2-col slide-up" style="margin-top: 25px;">
            <div style="background: var(--glass); border-radius: 12px; border: 1px solid var(--glass-border); overflow: hidden; min-width: 0;">

                <div style="padding: 15px; border-bottom: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center;">
                    <h3 style="font-size: 0.85rem; font-weight: 800; color: var(--white);">Ledger</h3>
                </div>
                <table class="data-table" style="font-size: 0.72rem;">
                    <thead><tr><th>Reference</th><th>Nature</th><th>Amount</th><th>Status</th></tr></thead>
                    <tbody>
                        <tr><td>#PX-0442</td><td>Tuition</td><td>$4,500</td><td><span class="status-pill success">DONE</span></td></tr>
                        <tr><td>#PX-0443</td><td>Hostel</td><td>$2,750</td><td><span class="status-pill success">DONE</span></td></tr>
                    </tbody>
                </table>
            </div>

            <div style="background: var(--glass); padding: 22px; border-radius: 12px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.85rem; font-weight: 800; color: var(--white); margin-bottom: 20px; letter-spacing: 1px;">PAYMENT</h3>
                <div style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 8px; border: 1px solid var(--glass-border); margin-bottom: 20px;">
                    <div style="font-size: 2rem; font-weight: 900; color: var(--white);">$1,250</div>
                </div>
                <button class="login-btn action-trigger" data-action="pay_fees" style="width: 100%; height: 50px; font-size: 0.9rem; background: var(--vibrant-violet); color: #000; font-weight: 900; border: none;">PAY_NOW</button>
            </div>
        </div>
    `,

    "Reports": (role = "Parent") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Intelligence</h1>
            <p style="color: #555; font-size: 0.75rem; margin-top: 5px; font-weight: 700; letter-spacing: 2px;">BROADCAST_HUB</p>
        </div>

        <div class="slide-up" style="margin-top: 25px; display: flex; flex-direction: column; gap: 15px;">
            <div style="background: var(--glass); padding: 22px; border-radius: 12px; border: 1px solid var(--glass-border); border-left: 5px solid var(--vibrant-violet);">
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <div>
                        <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--white);">Annual Nexus 2026</h3>
                        <p style="font-size: 0.8rem; color: #555; margin-top: 8px; line-height: 1.6;">Interactive session with the Dean. Schedule: March 15.</p>
                        <div style="display: flex; gap: 10px; margin-top: 15px;">
                            <button class="login-btn action-trigger" data-action="rsvp" style="width: auto; padding: 10px 25px; font-size: 0.75rem; background: var(--vibrant-violet); color: #000; font-weight: 800; border: none;">RSVP</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
};
