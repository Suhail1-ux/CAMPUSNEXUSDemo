export const admissionsViewTemplates = {
    "Dashboard": (role = "Admissions") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.2rem; font-weight: 900; color: #000; font-family: var(--font-display);">Admissions Dashboard</h1>
            <div class="filters-bar" style="margin-top: 25px; background: #fff; padding: 12px 25px; border-radius: 15px; display: flex; gap: 12px; align-items: center; border: 1px solid var(--glass-border); box-shadow: 0 4px 15px rgba(0,0,0,0.02);">
                <select class="login-input" style="width: auto; background: #f8fafc; color: #1e293b; border: 1px solid var(--glass-border); padding: 8px; border-radius: 10px;"><option>Academic Year 2026-27</option></select>
                <input type="text" placeholder="Search applicant index..." class="login-input" style="margin: 0; padding: 8px 20px; font-size: 0.75rem; flex: 1; border-radius: 10px; background: #f8fafc; color: #000;" />
                <button class="login-btn action-trigger" data-action="new_applicant" style="width: auto; padding: 8px 25px; font-size: 0.7rem; background: var(--vibrant-violet); color: #000; font-weight: 900; border-radius: 10px;">+ New Admission</button>
            </div>
        </div>

        <!-- KPI Row -->
        <div class="kpi-grid grid-adaptive" style="margin-top: 25px;">
            <div class="kpi-card" style="padding: 15px; border-top: 3px solid var(--vibrant-violet); background: #fff;">
                <span class="kpi-label" style="color: #64748b;">Total Leads</span>
                <span class="kpi-val" style="font-size: 1.6rem; color: #000;">4,240</span>
                <div style="font-size: 0.6rem; color: var(--vibrant-violet); margin-top: 4px; font-weight: 800;">↑ 18% Growth</div>
            </div>
            <div class="kpi-card" style="padding: 15px; background: #fff;">
                <span class="kpi-label" style="color: #64748b;">Converted</span>
                <span class="kpi-val" style="font-size: 1.6rem; color: var(--vibrant-violet);">185</span>
                <div style="font-size: 0.6rem; color: #94a3b8; margin-top: 4px; font-weight: 700;">Conv. rate: 32.4%</div>
            </div>
            <div class="kpi-card" style="padding: 15px; background: rgba(0, 128, 128, 0.03); border-color: rgba(0, 128, 128, 0.1);">
                <span class="kpi-label" style="color: var(--vibrant-violet);">Revenue</span>
                <span class="kpi-val" style="font-size: 1.6rem; color: var(--vibrant-violet);">$1.2M</span>
                <div style="font-size: 0.6rem; color: var(--vibrant-violet); margin-top: 4px; font-weight: 800;">LIVE</div>
            </div>
        </div>

        <!-- Pipeline Funnel bar -->
        <div style="margin-top: 30px; background: linear-gradient(to right, #f8fafc, #ffffff); border-radius: 20px; border: 1px solid var(--glass-border); padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.02);" class="slide-up">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
                <h3 style="font-size: 0.8rem; font-weight: 900; color: var(--cyber-gold); letter-spacing: 2px;">Admissions Pipeline</h3>
                <span style="font-size: 0.65rem; color: #94a3b8; font-weight: 800;">AY 2026-27 · Live Status</span>
            </div>
            <div style="display: flex; align-items: center; gap: 5px;">
                <div style="flex: 4; background: rgba(14, 165, 233, 0.05); border: 1px solid rgba(14, 165, 233, 0.1); border-radius: 10px; padding: 15px; text-align: center;">
                    <p style="font-size: 0.6rem; color: var(--electric-cyan); font-weight: 900; letter-spacing: 1px;">LEADS</p><p style="font-size: 1.2rem; font-weight: 900; color: #1e293b;">4,240</p>
                </div>
                <div style="flex: 0.8; background: rgba(0, 128, 128, 0.05); border: 1px solid rgba(0, 128, 128, 0.1); border-radius: 10px; padding: 15px; text-align: center;">
                    <p style="font-size: 0.6rem; color: var(--cyber-gold); font-weight: 900; letter-spacing: 1px;">OFFERED</p><p style="font-size: 1.2rem; font-weight: 900; color: #1e293b;">310</p>
                </div>
                <div style="flex: 0.4; background: rgba(14, 165, 233, 0.08); border: 2px solid var(--electric-cyan); border-radius: 10px; padding: 15px; text-align: center; box-shadow: 0 4px 15px rgba(14, 165, 233, 0.1);">
                    <p style="font-size: 0.6rem; color: var(--electric-cyan); font-weight: 900; letter-spacing: 1px;">ENROLLED</p><p style="font-size: 1.2rem; font-weight: 900; color: var(--electric-cyan);">185</p>
                </div>
            </div>
        </div>

        <div class="slide-up" style="margin-top: 20px; background: #fff; border-radius: 12px; border: 1px solid var(--glass-border); overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                <div style="padding: 15px 22px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
                    <h3 style="font-size: 0.85rem; font-weight: 800; color: #1e293b; letter-spacing: 1px;">Recent Applicants</h3>
                    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                        <input type="text" placeholder="Filter applicants..." style="background: #f8fafc; border: 1px solid #e2e8f0; color: #334155; padding: 6px 12px; border-radius: 6px; font-size: 0.7rem; width: 180px;">
                        <button class="login-btn action-trigger" data-action="export_excel" style="width: auto; padding: 6px 12px; font-size: 0.65rem; background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1;">Export Data</button>
                    </div>
                </div>
                <div class="table-container">
                    <table class="data-table" style="font-size: 0.72rem; border-collapse: separate; border-spacing: 0;">
                    <thead style="background: #f8fafc;">
                        <tr>
                            <th style="border-bottom: 2px solid #e2e8f0; color: #475569; font-weight: 800;">App ID</th>
                            <th style="border-bottom: 2px solid #e2e8f0; color: #475569; font-weight: 800;">Applicant</th>
                            <th style="border-bottom: 2px solid #e2e8f0; color: #475569; font-weight: 800;">Program Applied</th>
                            <th style="border-bottom: 2px solid #e2e8f0; color: #475569; font-weight: 800;">Campus</th>
                            <th style="border-bottom: 2px solid #e2e8f0; color: #475569; font-weight: 800;">Stage</th>
                            <th style="border-bottom: 2px solid #e2e8f0; color: #475569; font-weight: 800;">Merit Score</th>
                            <th style="border-bottom: 2px solid #e2e8f0; color: #475569; font-weight: 800;">Counsellor</th>
                            <th style="border-bottom: 2px solid #e2e8f0; color: #475569; font-weight: 800;">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9844</td>
                            <td><strong style="color: #1e293b;">Sarah Jenkins</strong><br><span style="font-size:0.6rem;color:var(--slate);">sarah.j@gmail.com</span></td>
                            <td style="color: #334155;">B.Tech CS</td><td style="color: #334155;">Main</td>
                            <td><span class="status-pill status-pending" style="font-size:0.6rem;">In Review</span></td>
                            <td style="font-weight:800;color:var(--gold);">82.4</td>
                            <td style="color: #334155;">Ms. Priya</td>
                            <td style="display:flex;gap:5px;flex-wrap:wrap;"><button class="login-btn action-trigger" data-action="doc_verify" style="padding:3px 8px;font-size:0.58rem;width:auto;background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1;">Verify Docs</button></td>
                        </tr>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9845</td>
                            <td><strong style="color: #1e293b;">Rahul Desai</strong><br><span style="font-size:0.6rem;color:var(--slate);">rahul.d@yahoo.in</span></td>
                            <td style="color: #334155;">MBA Finance</td><td style="color: #334155;">City</td>
                            <td><span class="status-pill status-pending" style="font-size:0.6rem;">In Review</span></td>
                            <td style="font-weight:800;color:var(--gold);">78.1</td>
                            <td style="color: #334155;">Mr. Rajan</td>
                            <td><button class="login-btn action-trigger" data-action="doc_verify" style="padding:3px 8px;font-size:0.58rem;width:auto;background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1;">Verify Docs</button></td>
                        </tr>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9820</td>
                            <td><strong style="color: #1e293b;">Nadia Khan</strong><br><span style="font-size:0.6rem;color:var(--slate);">nadia.k@hotmail.com</span></td>
                            <td style="color: #334155;">B.Tech CS</td><td style="color: #334155;">Main</td>
                            <td><span class="status-pill status-verified" style="font-size:0.6rem;">Verified</span></td>
                            <td style="font-weight:800;color:#059669;">91.6</td>
                            <td style="color: #334155;">Ms. Priya</td>
                            <td><button class="login-btn action-trigger" data-action="seat_offer" style="padding:3px 8px;font-size:0.58rem;width:auto;background:rgba(16, 185, 129, 0.1);color:#059669;border-color:rgba(16, 185, 129, 0.2);">Offer Seat</button></td>
                        </tr>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9818</td>
                            <td><strong style="color: #1e293b;">Vikash Gupta</strong><br><span style="font-size:0.6rem;color:var(--slate);">vikash.g@gmail.com</span></td>
                            <td style="color: #334155;">B.Com</td><td style="color: #334155;">North</td>
                            <td><span class="status-pill status-verified" style="font-size:0.6rem;">Verified</span></td>
                            <td style="font-weight:800;color:#059669;">74.9</td>
                            <td style="color: #334155;">Mr. Rajan</td>
                            <td><button class="login-btn action-trigger" data-action="seat_offer" style="padding:3px 8px;font-size:0.58rem;width:auto;background:rgba(16, 185, 129, 0.1);color:#059669;border-color:rgba(16, 185, 129, 0.2);">Offer Seat</button></td>
                        </tr>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9801</td>
                            <td><strong style="color: #1e293b;">Divya Srinivas</strong><br><span style="font-size:0.6rem;color:var(--slate);">divya.s@outlook.com</span></td>
                            <td style="color: #334155;">MBA Finance</td><td style="color: #334155;">Main</td>
                            <td><span class="status-pill" style="font-size:0.6rem;background:rgba(0, 128, 128, 0.1);color:var(--vibrant-violet);border-color:rgba(0, 128, 128, 0.2);">Offered</span></td>
                            <td style="font-weight:800;color:var(--gold);">88.3</td>
                            <td style="color: #334155;">Dr. Sharma</td>
                            <td><button class="login-btn action-trigger" data-action="convert_applicant" style="padding:3px 8px;font-size:0.58rem;width:auto;background:var(--vibrant-violet);color:#fff;border-color:var(--vibrant-violet);">Enroll</button></td>
                        </tr>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9798</td>
                            <td><strong style="color: #1e293b;">Omar Farouk</strong><br><span style="font-size:0.6rem;color:var(--slate);">omar.f@gmail.com</span></td>
                            <td style="color: #334155;">B.Tech CS</td><td style="color: #334155;">City</td>
                            <td><span class="status-pill" style="font-size:0.6rem;background:rgba(0, 128, 128, 0.1);color:var(--vibrant-violet);">Offered</span></td>
                            <td style="font-weight:800;color:var(--gold);">85.7</td>
                            <td style="color: #334155;">Ms. Priya</td>
                            <td><button class="login-btn action-trigger" data-action="convert_applicant" style="padding:3px 8px;font-size:0.58rem;width:auto;background:var(--vibrant-violet);color:#fff;">Enroll</button></td>
                        </tr>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9791</td>
                            <td><strong style="color: #1e293b;">Preethi Nair</strong><br><span style="font-size:0.6rem;color:var(--slate);">preethi@gmail.com</span></td>
                            <td style="color: #334155;">Ph.D CS</td><td style="color: #334155;">Main</td>
                            <td><span class="status-pill status-pending" style="font-size:0.6rem;">In Review</span></td>
                            <td style="font-weight:800; color: #334155;">80.0</td>
                            <td style="color: #334155;">Dr. Sharma</td>
                            <td><button class="login-btn action-trigger" data-action="doc_verify" style="padding:3px 8px;font-size:0.58rem;width:auto;background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1;">Verify Docs</button></td>
                        </tr>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9785</td>
                            <td><strong style="color: #1e293b;">Aiden Cruz</strong><br><span style="font-size:0.6rem;color:var(--slate);">aiden.c@yahoo.com</span></td>
                            <td style="color: #334155;">B.Com</td><td style="color: #334155;">City</td>
                            <td><span class="status-pill status-verified" style="font-size:0.6rem;">Verified</span></td>
                            <td style="font-weight:800;color:#059669;">69.4</td>
                            <td style="color: #334155;">Mr. Rajan</td>
                            <td><button class="login-btn action-trigger" data-action="seat_offer" style="padding:3px 8px;font-size:0.58rem;width:auto;background:rgba(16, 185, 129, 0.1);color:#059669;">Seat Offer</button></td>
                        </tr>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9779</td>
                            <td><strong style="color: #1e293b;">Meena Pillai</strong><br><span style="font-size:0.6rem;color:var(--slate);">meena.p@gmail.com</span></td>
                            <td style="color: #334155;">MBA Finance</td><td style="color: #334155;">North</td>
                            <td><span class="status-pill" style="font-size:0.6rem;background:rgba(14, 165, 233, 0.1);color:var(--electric-cyan);">Enrolled</span></td>
                            <td style="font-weight:800;color:#059669;">92.1</td>
                            <td style="color: #334155;">Ms. Priya</td>
                            <td><button class="login-btn action-trigger" data-action="download_id" style="padding:3px 8px;font-size:0.58rem;width:auto;background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1;">Download ID</button></td>
                        </tr>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9770</td>
                            <td><strong style="color: #1e293b;">Harut Baghdasaryan</strong><br><span style="font-size:0.6rem;color:var(--slate);">harut.b@mail.am</span></td>
                            <td style="color: #334155;">B.Tech CS</td><td style="color: #334155;">Main</td>
                            <td><span class="status-pill status-pending" style="font-size:0.6rem;">In Review</span></td>
                            <td style="font-weight:800; color: #334155;">76.5</td>
                            <td style="color: #334155;">Dr. Sharma</td>
                            <td><button class="login-btn action-trigger" data-action="doc_verify" style="padding:3px 8px;font-size:0.58rem;width:auto;background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1;">Verify Docs</button></td>
                        </tr>
                    </tbody>
                </table>
                </div>
        </div>

        <div class="grid-2-col slide-up" style="margin-top: 20px;">
            <!-- Source-wise Conversion -->
            <div style="background: #fff; border-radius: 12px; border: 1px solid var(--glass-border); padding: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                <h4 style="font-size: 0.75rem; font-weight: 800; color: var(--vibrant-violet); margin-bottom: 12px; letter-spacing: 0.5px;">SOURCE CONVERSION</h4>
                <div style="display: flex; flex-direction: column; gap: 10px; font-size: 0.7rem;">
                    <div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;"><span style="color: #475569; font-weight: 600;">Organic Search</span><span style="color:var(--vibrant-violet);font-weight:800;">42%</span></div>
                        <div style="height: 4px; background: #f1f5f9; border-radius: 3px;"><div style="width:42%;height:100%;background:var(--vibrant-violet);border-radius:3px;box-shadow: 0 0 8px rgba(0, 128, 128, 0.2);"></div></div>
                    </div>
                    <div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;"><span style="color: #475569; font-weight: 600;">Direct Referrals</span><span style="color:#0ea5e9;font-weight:800;">68%</span></div>
                        <div style="height: 4px; background: #f1f5f9; border-radius: 3px;"><div style="width:68%;height:100%;background:#0ea5e9;border-radius:3px;box-shadow: 0 0 8px rgba(14, 165, 233, 0.2);"></div></div>
                    </div>
                    <div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;"><span style="color: #475569; font-weight: 600;">Social Media</span><span style="color:#f59e0b;font-weight:800;">29%</span></div>
                        <div style="height: 4px; background: #f1f5f9; border-radius: 3px;"><div style="width:29%;height:100%;background:#f59e0b;border-radius:3px;"></div></div>
                    </div>
                </div>
            </div>

            <!-- Seat Utilisation -->
            <div style="background: #fff; border-radius: 12px; border: 1px solid var(--glass-border); padding: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                <h4 style="font-size: 0.75rem; font-weight: 800; color: var(--vibrant-violet); margin-bottom: 12px;">SEAT UTILISATION</h4>
                <div style="display: flex; flex-direction: column; gap: 8px; font-size: 0.7rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: #f8fafc; border-radius: 8px; border-left: 3px solid var(--vibrant-violet);">
                        <span style="color: #1e293b; font-weight: 600;">B.Tech CS</span>
                        <div style="text-align: right;"><span style="font-weight:800;color:var(--vibrant-violet);">118</span><span style="color:#94a3b8;">/120</span></div>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: #f8fafc; border-radius: 8px; border-left: 3px solid #0ea5e9;">
                        <span style="color: #1e293b; font-weight: 600;">MBA Finance</span>
                        <div style="text-align: right;"><span style="font-weight:800;color:#0ea5e9;">54</span><span style="color:#94a3b8;">/60</span></div>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: #f8fafc; border-radius: 8px; border-left: 3px solid #10b981;">
                        <span style="color: #1e293b; font-weight: 600;">B.Com</span>
                        <div style="text-align: right;"><span style="font-weight:800;color:#10b981;">38</span><span style="color:#94a3b8;">/45</span></div>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: #f8fafc; border-radius: 8px; border-left: 3px solid #f59e0b;">
                        <span style="color: #1e293b; font-weight: 600;">Ph.D CS</span>
                        <div style="text-align: right;"><span style="font-weight:800;color:#f59e0b;">12</span><span style="color:#94a3b8;">/20</span></div>
                    </div>
                </div>
            </div>
        </div>
    `,

    "SIS": (role = "Admissions") => `
                    <thead style="background: #f8fafc;">
                        <tr>
                            <th style="border-bottom: 2px solid #e2e8f0; color: #475569; font-weight: 800;">App ID</th>
                            <th style="border-bottom: 2px solid #e2e8f0; color: #475569; font-weight: 800;">Applicant</th>
                            <th style="border-bottom: 2px solid #e2e8f0; color: #475569; font-weight: 800;">Program Applied</th>
                            <th style="border-bottom: 2px solid #e2e8f0; color: #475569; font-weight: 800;">Campus</th>
                            <th style="border-bottom: 2px solid #e2e8f0; color: #475569; font-weight: 800;">Stage</th>
                            <th style="border-bottom: 2px solid #e2e8f0; color: #475569; font-weight: 800;">Merit Score</th>
                            <th style="border-bottom: 2px solid #e2e8f0; color: #475569; font-weight: 800;">Counsellor</th>
                            <th style="border-bottom: 2px solid #e2e8f0; color: #475569; font-weight: 800;">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9844</td>
                            <td><strong style="color: #1e293b;">Sarah Jenkins</strong><br><span style="font-size:0.6rem;color:var(--slate);">sarah.j@gmail.com</span></td>
                            <td style="color: #334155;">B.Tech CS</td><td style="color: #334155;">Main</td>
                            <td><span class="status-pill status-pending" style="font-size:0.6rem;">In Review</span></td>
                            <td style="font-weight:800;color:var(--gold);">82.4</td>
                            <td style="color: #334155;">Ms. Priya</td>
                            <td style="display:flex;gap:5px;flex-wrap:wrap;"><button class="login-btn action-trigger" data-action="doc_verify" style="padding:3px 8px;font-size:0.58rem;width:auto;background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1;">Verify Docs</button></td>
                        </tr>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9845</td>
                            <td><strong style="color: #1e293b;">Rahul Desai</strong><br><span style="font-size:0.6rem;color:var(--slate);">rahul.d@yahoo.in</span></td>
                            <td style="color: #334155;">MBA Finance</td><td style="color: #334155;">City</td>
                            <td><span class="status-pill status-pending" style="font-size:0.6rem;">IN_REVIEW</span></td>
                            <td style="font-weight:800;color:var(--gold);">78.1</td>
                            <td style="color: #334155;">Mr. Rajan</td>
                            <td><button class="login-btn action-trigger" data-action="doc_verify" style="padding:3px 8px;font-size:0.58rem;width:auto;background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1;">DOC_VERIFY</button></td>
                        </tr>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9820</td>
                            <td><strong style="color: #1e293b;">Nadia Khan</strong><br><span style="font-size:0.6rem;color:var(--slate);">nadia.k@hotmail.com</span></td>
                            <td style="color: #334155;">B.Tech CS</td><td style="color: #334155;">Main</td>
                            <td><span class="status-pill status-verified" style="font-size:0.6rem;">Verified</span></td>
                            <td style="font-weight:800;color:#059669;">91.6</td>
                            <td style="color: #334155;">Ms. Priya</td>
                            <td><button class="login-btn action-trigger" data-action="seat_offer" style="padding:3px 8px;font-size:0.58rem;width:auto;background:rgba(16, 185, 129, 0.1);color:#059669;border-color:rgba(16, 185, 129, 0.2);">Offer Seat</button></td>
                        </tr>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9818</td>
                            <td><strong style="color: #1e293b;">Vikash Gupta</strong><br><span style="font-size:0.6rem;color:var(--slate);">vikash.g@gmail.com</span></td>
                            <td style="color: #334155;">B.Com</td><td style="color: #334155;">North</td>
                            <td><span class="status-pill status-verified" style="font-size:0.6rem;">Verified</span></td>
                            <td style="font-weight:800;color:#059669;">74.9</td>
                            <td style="color: #334155;">Mr. Rajan</td>
                            <td><button class="login-btn action-trigger" data-action="seat_offer" style="padding:3px 8px;font-size:0.58rem;width:auto;background:rgba(16, 185, 129, 0.1);color:#059669;border-color:rgba(16, 185, 129, 0.2);">Offer Seat</button></td>
                        </tr>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9801</td>
                            <td><strong style="color: #1e293b;">Divya Srinivas</strong><br><span style="font-size:0.6rem;color:var(--slate);">divya.s@outlook.com</span></td>
                            <td style="color: #334155;">MBA Finance</td><td style="color: #334155;">Main</td>
                            <td><span class="status-pill" style="font-size:0.6rem;background:rgba(0, 128, 128, 0.1);color:var(--vibrant-violet);border-color:rgba(0, 128, 128, 0.2);">Offered</span></td>
                            <td style="font-weight:800;color:var(--gold);">88.3</td>
                            <td style="color: #334155;">Dr. Sharma</td>
                            <td><button class="login-btn action-trigger" data-action="convert_applicant" style="padding:3px 8px;font-size:0.58rem;width:auto;background:var(--vibrant-violet);color:#fff;border-color:var(--vibrant-violet);">Enroll</button></td>
                        </tr>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9798</td>
                            <td><strong style="color: #1e293b;">Omar Farouk</strong><br><span style="font-size:0.6rem;color:var(--slate);">omar.f@gmail.com</span></td>
                            <td style="color: #334155;">B.Tech CS</td><td style="color: #334155;">City</td>
                            <td><span class="status-pill" style="font-size:0.6rem;background:rgba(0, 128, 128, 0.1);color:var(--vibrant-violet);border-color:rgba(0, 128, 128, 0.2);">OFFERED</span></td>
                            <td style="font-weight:800;color:var(--gold);">85.7</td>
                            <td style="color: #334155;">Ms. Priya</td>
                            <td><button class="login-btn action-trigger" data-action="convert_applicant" style="padding:3px 8px;font-size:0.58rem;width:auto;background:var(--vibrant-violet);color:#fff;border-color:var(--vibrant-violet);">ENROLL</button></td>
                        </tr>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9791</td>
                            <td><strong style="color: #1e293b;">Preethi Nair</strong><br><span style="font-size:0.6rem;color:var(--slate);">preethi@gmail.com</span></td>
                            <td style="color: #334155;">Ph.D CS</td><td style="color: #334155;">Main</td>
                            <td><span class="status-pill status-pending" style="font-size:0.6rem;">IN_REVIEW</span></td>
                            <td style="font-weight:800; color: #334155;">80.0</td>
                            <td style="color: #334155;">Dr. Sharma</td>
                            <td><button class="login-btn action-trigger" data-action="doc_verify" style="padding:3px 8px;font-size:0.58rem;width:auto;background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1;">DOC_VERIFY</button></td>
                        </tr>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9785</td>
                            <td><strong style="color: #1e293b;">Aiden Cruz</strong><br><span style="font-size:0.6rem;color:var(--slate);">aiden.c@yahoo.com</span></td>
                            <td style="color: #334155;">B.Com</td><td style="color: #334155;">City</td>
                            <td><span class="status-pill status-verified" style="font-size:0.6rem;">VERIFIED</span></td>
                            <td style="font-weight:800;color:#059669;">69.4</td>
                            <td style="color: #334155;">Mr. Rajan</td>
                            <td><button class="login-btn action-trigger" data-action="seat_offer" style="padding:3px 8px;font-size:0.58rem;width:auto;background:rgba(16, 185, 129, 0.1);color:#059669;border-color:rgba(16, 185, 129, 0.2);">SEAT_OFFER</button></td>
                        </tr>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9779</td>
                            <td><strong style="color: #1e293b;">Meena Pillai</strong><br><span style="font-size:0.6rem;color:var(--slate);">meena.p@gmail.com</span></td>
                            <td style="color: #334155;">MBA Finance</td><td style="color: #334155;">North</td>
                            <td><span class="status-pill" style="font-size:0.6rem;background:rgba(14, 165, 233, 0.1);color:var(--electric-cyan);border-color:rgba(14, 165, 233, 0.2);">Enrolled</span></td>
                            <td style="font-weight:800;color:#059669;">92.1</td>
                            <td style="color: #334155;">Ms. Priya</td>
                            <td><button class="login-btn action-trigger" data-action="download_id" style="padding:3px 8px;font-size:0.58rem;width:auto;background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1;">Download ID</button></td>
                        </tr>
                        <tr>
                            <td style="color: var(--gold); font-weight: 700;">#L-9770</td>
                            <td><strong style="color: #1e293b;">Harut Baghdasaryan</strong><br><span style="font-size:0.6rem;color:var(--slate);">harut.b@mail.am</span></td>
                            <td style="color: #334155;">B.Tech CS</td><td style="color: #334155;">Main</td>
                            <td><span class="status-pill status-pending" style="font-size:0.6rem;">IN_REVIEW</span></td>
                            <td style="font-weight:800; color: #334155;">76.5</td>
                            <td style="color: #334155;">Dr. Sharma</td>
                            <td><button class="login-btn action-trigger" data-action="doc_verify" style="padding:3px 8px;font-size:0.58rem;width:auto;background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1;">DOC_VERIFY</button></td>
                        </tr>
                    </tbody>
                </table>
                </div>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 20px;">
                <!-- Source-wise Conversion -->
                <div style="background: #fff; border-radius: 12px; border: 1px solid var(--glass-border); padding: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 0.75rem; font-weight: 800; color: var(--vibrant-violet); margin-bottom: 12px; letter-spacing: 0.5px;">SOURCE CONVERSION</h4>
                    <div style="display: flex; flex-direction: column; gap: 10px; font-size: 0.7rem;">
                        <div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;"><span style="color: #475569; font-weight: 600;">Organic Search</span><span style="color:var(--vibrant-violet);font-weight:800;">42%</span></div>
                            <div style="height: 4px; background: #f1f5f9; border-radius: 3px;"><div style="width:42%;height:100%;background:var(--vibrant-violet);border-radius:3px;box-shadow: 0 0 8px rgba(0, 128, 128, 0.2);"></div></div>
                        </div>
                        <div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;"><span style="color: #475569; font-weight: 600;">Direct Referrals</span><span style="color:#0ea5e9;font-weight:800;">68%</span></div>
                            <div style="height: 4px; background: #f1f5f9; border-radius: 3px;"><div style="width:68%;height:100%;background:#0ea5e9;border-radius:3px;box-shadow: 0 0 8px rgba(14, 165, 233, 0.2);"></div></div>
                        </div>
                    </div>
                </div>

                <!-- Seat Utilisation -->
                <div style="background: #fff; border-radius: 12px; border: 1px solid var(--glass-border); padding: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                    <h4 style="font-size: 0.75rem; font-weight: 800; color: var(--vibrant-violet); margin-bottom: 12px;">SEAT UTILISATION</h4>
                    <div style="display: flex; flex-direction: column; gap: 8px; font-size: 0.7rem;">
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: #f8fafc; border-radius: 8px; border-left: 3px solid var(--vibrant-violet);">
                            <span style="color: #1e293b; font-weight: 600;">B.Tech CS</span>
                            <div style="text-align: right;"><span style="font-weight:800;color:var(--vibrant-violet);">118</span><span style="color:#94a3b8;">/120</span></div>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: #f8fafc; border-radius: 8px; border-left: 3px solid #0ea5e9;">
                            <span style="color: #1e293b; font-weight: 600;">MBA Finance</span>
                            <div style="text-align: right;"><span style="font-weight:800;color:#0ea5e9;">54</span><span style="color:#94a3b8;">/60</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    "SIS": (role = "Admissions") => `
        <div class="view-header" style="display: flex; justify-content: space-between; align-items: center;">
            <div>
                <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800;">Admissions Hub</h1>
                <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Lead Management & Pipeline</p>
            </div>
            <button class="login-btn action-trigger" data-action="new_applicant" style="width: auto; padding: 10px 25px; background: var(--gold); color: white; font-weight: 800; border: none;">+ New Applicant</button>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 15px; margin-top: 25px;">
            <div class="kpi-card glass-card" style="padding: 15px;">
                <span class="kpi-label">Application Review</span>
                <span class="kpi-val" style="font-size: 1.5rem;">812</span>
            </div>
            <div class="kpi-card glass-card" style="padding: 15px;">
                <span class="kpi-label">Documents Pending</span>
                <span class="kpi-val" style="font-size: 1.5rem; color: #ffab00;">124</span>
            </div>
            <div class="kpi-card glass-card" style="padding: 15px;">
                <span class="kpi-label">Verified Leads</span>
                <span class="kpi-val" style="font-size: 1.5rem; color: #10b981;">450</span>
            </div>
            <div class="kpi-card glass-card" style="padding: 15px;">
                <span class="kpi-label">Waitlisted</span>
                <span class="kpi-val" style="font-size: 1.5rem;">210</span>
            </div>
        </div>

        <div class="slide-up" style="margin-top: 25px; background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
            <div style="padding: 18px 22px; border-bottom: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center;">
                <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold);">Active Admissions Pipeline</h3>
                <div style="display: flex; gap: 10px;">
                    <input type="text" placeholder="Filter applicants..." style="background: rgba(255,255,255,0.03); border: 1px solid var(--glass-border); color: white; padding: 6px 12px; border-radius: 6px; font-size: 0.7rem; width: 200px;">
                    <button class="login-btn action-trigger" data-action="export_excel" style="width: auto; padding: 6px 12px; font-size: 0.65rem;">Export Data</button>
                </div>
            </div>
            <div class="table-container">
                <table class="data-table" style="font-size: 0.72rem;">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Applicant Name</th>
                        <th>Program Applied</th>
                        <th>Merit Score</th>
                        <th>Status</th>
                        <th>Counsellor</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#9844</td>
                        <td><strong>Sarah Jenkins</strong></td>
                        <td>B.Tech CS</td>
                        <td style="font-weight:800;color:var(--white);">82.4</td>
                        <td><span class="status-pill warning">Review</span></td>
                        <td>Ms. Priya</td>
                        <td><button class="login-btn action-trigger" data-action="doc_verify" style="padding:4px 8px;font-size:0.58rem;width:auto;">Verify</button></td>
                    </tr>
                    <tr>
                        <td>#9820</td>
                        <td><strong>Nadia Khan</strong></td>
                        <td>B.Tech CS</td>
                        <td style="font-weight:800;color:var(--vibrant-violet);">91.6</td>
                        <td><span class="status-pill success">Verified</span></td>
                        <td>Mr. Rajan</td>
                        <td><button class="login-btn action-trigger" data-action="seat_offer" style="padding:4px 8px;font-size:0.58rem;width:auto;background:var(--vibrant-violet);color:#000;">Offer Seat</button></td>
                    </tr>
                    <tr>
                        <td>#9851</td>
                        <td><strong>Vikram Singh</strong></td>
                        <td>MBA Strategy</td>
                        <td style="font-weight:800;color:var(--white);">74.8</td>
                        <td><span class="status-pill warning">Pending</span></td>
                        <td>Ms. Priya</td>
                        <td><button class="login-btn" style="padding:4px 8px;font-size:0.58rem;width:auto;">Follow Up</button></td>
                    </tr>
                    <tr>
                        <td>#9860</td>
                        <td><strong>Ananya Rao</strong></td>
                        <td>M.Tech AI</td>
                        <td style="font-weight:800;color:var(--vibrant-violet);">88.2</td>
                        <td><span class="status-pill success">Verified</span></td>
                        <td>Mr. Arjun</td>
                        <td><button class="login-btn action-trigger" data-action="seat_offer" style="padding:4px 8px;font-size:0.58rem;width:auto;background:var(--vibrant-violet);color:#000;">Offer Seat</button></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    `,
    "Admissions": (role = "Admissions") => admissionsViewTemplates["SIS"](),
    "Reports": (role = "Admissions") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 2.22rem; font-weight: 900; color: var(--white); font-family: var(--font-display);">Intelligence</h1>
            <p style="color: #555; font-size: 0.75rem; margin-top: 5px; font-weight: 700; letter-spacing: 2px;">Daily Activity</p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1.5fr; gap: 20px; margin-top: 25px;" class="slide-up">
            <div style="background: var(--glass); padding: 22px; border-radius: 12px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.85rem; font-weight: 800; color: var(--vibrant-violet); margin-bottom: 20px; letter-spacing: 1px;">Exam Control</h3>
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <button class="login-btn action-trigger" data-action="view_bell_curve" style="text-align: left; padding: 12px; font-size: 0.7rem;">Analytics</button>
                    <button class="login-btn action-trigger" data-action="publish_results" style="text-align: left; padding: 12px; font-size: 0.7rem; background: var(--vibrant-violet); color: #000; font-weight: 800;">Publish Findings</button>
                </div>
            </div>
            <div style="background: var(--glass); border-radius: 12px; border: 1px solid var(--glass-border); overflow: hidden;">
                <div style="padding: 15px 22px; border-bottom: 1px solid var(--glass-border);">
                    <h3 style="font-size: 0.85rem; font-weight: 700; color: var(--white);">Activity</h3>
                </div>
                <div style="padding: 10px;">
                    <div style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <p style="font-size: 0.65rem; color: var(--vibrant-violet); font-weight: 700;">10:42 AM</p>
                        <p style="font-size: 0.7rem; color: var(--white); margin-top: 2px;">Sarah moved to VERIFIED.</p>
                    </div>
                </div>
            </div>
        </div>
    `
};
