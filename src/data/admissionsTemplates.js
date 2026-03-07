export const admissionsViewTemplates = {
    "Dashboard": (role = "Admissions") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800; color: var(--gold);">Admissions Command Center</h1>
            <p style="color: var(--slate); font-size: 0.8rem; margin-top: 5px;">Institutional Intake Intelligence &bull; Session 2026-27 &nbsp;|&nbsp; <span style="color: #10b981;">Quantum Sync Active</span></p>
        </div>
        
        <div class="kpi-grid" style="margin-top: 30px; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
            <div class="kpi-card glass-card">
                <span class="kpi-label">Overall Conversion</span>
                <span class="kpi-val" style="color: #10b981;">32.4%</span>
                <div class="status-pill success" style="margin-top: 5px;">↑ 5.2% Momentum</div>
            </div>
            <div class="kpi-card glass-card">
                <span class="kpi-label">Active Leads</span>
                <span class="kpi-val" style="color: var(--gold);">4,240</span>
                <div style="font-size: 0.65rem; color: var(--gold); font-weight: 700;">+142 New Today</div>
            </div>
            <div class="kpi-card glass-card">
                <span class="kpi-label">Verification Queue</span>
                <span class="kpi-val" style="color: #f59e0b;">86</span>
                <div class="status-pill warning" style="margin-top: 5px;">SLA: 1.2 hrs remaining</div>
            </div>
            <div class="kpi-card glass-card">
                <span class="kpi-label">App. Fee Revenue</span>
                <span class="kpi-val" style="color: var(--white);">$124.5K</span>
                <div style="font-size: 0.65rem; color: var(--gold); font-weight: 700;">102% of projection</div>
            </div>
            <div class="kpi-card glass-card">
                <span class="kpi-label">Enrolment Velocity</span>
                <span class="kpi-val" style="color: var(--white);">12.4 <span style="font-size: 0.8rem; opacity: 0.5;">/ day</span></span>
                <div class="status-pill success" style="margin-top: 5px;">Steady Progression</div>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px;" class="slide-up">
            <!-- Lead Funnel -->
            <div class="glass-card">
                <h3 style="font-size: 0.9rem; font-weight: 800; color: var(--gold); margin-bottom: 20px; letter-spacing: 1px;">ADMISSION FUNNEL ANALYTICS</h3>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                    <div style="background: rgba(99, 102, 241, 0.05); padding: 12px; border-radius: 8px; border-left: 4px solid var(--gold); display: flex; justify-content: space-between; align-items: center;">
                        <div><span style="font-size: 0.65rem; color: var(--gold); font-weight: 700;">INQUIRIES</span><div style="font-size: 1.2rem; font-weight: 900; color: var(--white);">4,240</div></div>
                        <div style="text-align: right; font-size: 0.7rem; color: var(--slate);">100% Base</div>
                    </div>
                    <div style="text-align: center; color: var(--slate); font-size: 0.8rem; line-height: 1;">▼</div>
                    <div style="background: rgba(99, 102, 241, 0.1); padding: 12px; border-radius: 8px; border-left: 4px solid var(--gold); display: flex; justify-content: space-between; align-items: center; width: 90%; margin: 0 auto;">
                        <div><span style="font-size: 0.65rem; color: var(--gold); font-weight: 700;">APPLICATIONS</span><div style="font-size: 1.2rem; font-weight: 900; color: var(--white);">1,842</div></div>
                        <div style="text-align: right; font-size: 0.7rem; color: var(--gold);">43.4% Yield</div>
                    </div>
                    <div style="text-align: center; color: var(--slate); font-size: 0.8rem; line-height: 1;">▼</div>
                    <div style="background: rgba(16, 185, 129, 0.05); padding: 12px; border-radius: 8px; border-left: 4px solid #10b981; display: flex; justify-content: space-between; align-items: center; width: 80%; margin: 0 auto;">
                        <div><span style="font-size: 0.65rem; color: #10b981; font-weight: 700;">VERIFIED</span><div style="font-size: 1.2rem; font-weight: 900; color: var(--white);">812</div></div>
                        <div style="text-align: right; font-size: 0.7rem; color: #10b981;">44.1% Review</div>
                    </div>
                    <div style="text-align: center; color: var(--slate); font-size: 0.8rem; line-height: 1;">▼</div>
                    <div style="background: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 8px; border-left: 4px solid #10b981; display: flex; justify-content: space-between; align-items: center; width: 70%; margin: 0 auto;">
                        <div><span style="font-size: 0.65rem; color: #10b981; font-weight: 700;">ENROLLED</span><div style="font-size: 1.2rem; font-weight: 900; color: #10b981;">540</div></div>
                        <div style="text-align: right; font-size: 0.7rem; color: #10b981;">66.5% Close</div>
                    </div>
                </div>
            </div>

            <!-- Program Distribution -->
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 800; color: var(--gold); margin-bottom: 20px; letter-spacing: 1px;">PROGRAM-WISE CAPACITY</h3>
                <div style="display: flex; flex-direction: column; gap: 15px;">
                    <div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.7rem; margin-bottom: 5px;">
                            <span style="font-weight: 700;">B.Tech Computer Science</span><span style="color: var(--gold); font-weight: 800;">782/1000</span>
                        </div>
                        <div style="height: 10px; background: rgba(255,255,255,0.05); border-radius: 5px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
                            <div style="width: 78.2%; height: 100%; background: linear-gradient(90deg, var(--gold), #ffab00); box-shadow: 0 0 10px rgba(184,134,11,0.5);"></div>
                        </div>
                    </div>
                    <div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.7rem; margin-bottom: 5px;">
                            <span style="font-weight: 700;">MBA Strategy & Finance</span><span style="color: #10b981; font-weight: 800;">310/500</span>
                        </div>
                        <div style="height: 10px; background: rgba(255,255,255,0.05); border-radius: 5px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
                            <div style="width: 62%; height: 100%; background: linear-gradient(90deg, #10b981, #059669); box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);"></div>
                        </div>
                    </div>
                    <div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.7rem; margin-bottom: 5px;">
                            <span style="font-weight: 700;">M.Tech Artificial Intelligence</span><span style="color: var(--gold); font-weight: 800;">112/250</span>
                        </div>
                        <div style="height: 10px; background: rgba(255,255,255,0.05); border-radius: 5px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
                            <div style="width: 44.8%; height: 100%; background: linear-gradient(90deg, var(--gold), #ffab00); box-shadow: 0 0 10px rgba(184,134,11,0.3);"></div>
                        </div>
                    </div>
                    <div style="margin-top: 10px; padding: 15px; background: rgba(16, 185, 129, 0.03); border-radius: 10px; border: 1px dashed rgba(16, 185, 129, 0.2);">
                        <p style="font-size: 0.65rem; color: var(--slate); line-height: 1.4;"><strong>AUTO_ALERT:</strong> B.Tech CS is approaching critical capacity. Suggesting waitlist activation for North Campus cluster.</p>
                    </div>
                </div>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 20px; margin-top: 20px;" class="slide-up">
            <!-- Counsellor Performance -->
            <div style="background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
                <div style="padding: 18px 22px; border-bottom: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center;">
                    <h3 style="font-size: 0.9rem; font-weight: 800; color: var(--gold); letter-spacing: 1px;">COUNSELLOR PERFORMANCE</h3>
                    <button class="login-btn action-trigger" data-action="run_audit" style="width: auto; padding: 6px 14px; font-size: 0.6rem;">FULL_RANKING</button>
                </div>
                <table class="data-table" style="font-size: 0.7rem;">
                    <thead>
                        <tr><th>Officer</th><th>Leads</th><th>Converted</th><th>Ratio</th><th>Revenue</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Ms. Priya Sharma</strong></td><td>450</td><td>120</td><td style="color:#64ffda; font-weight:800;">26.6%</td><td style="font-weight:700;">$240K</td></tr>
                        <tr><td><strong>Mr. Rajan Mehta</strong></td><td>380</td><td>85</td><td>22.3%</td><td style="font-weight:700;">$185K</td></tr>
                        <tr><td><strong>Ms. Anjali Rao</strong></td><td>410</td><td>98</td><td style="color:#64ffda; font-weight:800;">23.9%</td><td style="font-weight:700;">$210K</td></tr>
                        <tr><td><strong>Mr. Arjun Singh</strong></td><td>340</td><td>72</td><td>21.1%</td><td style="font-weight:700;">$155K</td></tr>
                    </tbody>
                </table>
            </div>

            <!-- Acquisition Channels -->
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 800; color: var(--gold); margin-bottom: 20px; letter-spacing: 1px;">SOURCE ATTRIBUTION</h3>
                <div style="position: relative; height: 180px; display: flex; align-items: center; justify-content: center;">
                    <!-- Simple CSS Donut representation -->
                    <div style="width: 150px; height: 150px; border-radius: 50%; background: conic-gradient(var(--gold) 0% 45%, #64ffda 45% 75%, #ffab00 75% 90%, var(--slate) 90% 100%); position: relative;">
                        <div style="position: absolute; top: 15px; left: 15px; right: 15px; bottom: 15px; background: var(--navy-dark); border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 1px solid var(--glass-border);">
                            <span style="font-size: 1.2rem; font-weight: 900; color: white;">4,240</span>
                            <span style="font-size: 0.55rem; color: var(--slate);">TOTAL_LEADS</span>
                        </div>
                    </div>
                </div>
                <div style="margin-top: 15px; display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div style="display: flex; align-items: center; gap: 8px; font-size: 0.6rem;"><div style="width: 8px; height: 8px; background: var(--gold); border-radius: 2px;"></div> Digital Ads (45%)</div>
                    <div style="display: flex; align-items: center; gap: 8px; font-size: 0.6rem;"><div style="width: 8px; height: 8px; background: #64ffda; border-radius: 2px;"></div> Organic Search (30%)</div>
                    <div style="display: flex; align-items: center; gap: 8px; font-size: 0.6rem;"><div style="width: 8px; height: 8px; background: #ffab00; border-radius: 2px;"></div> Referrals (15%)</div>
                    <div style="display: flex; align-items: center; gap: 8px; font-size: 0.6rem;"><div style="width: 8px; height: 8px; background: var(--slate); border-radius: 2px;"></div> Direct/Other (10%)</div>
                </div>
            </div>
        </div>
    `,
    "SIS": (role = "Admissions") => `
        <div class="view-header" style="display: flex; justify-content: space-between; align-items: center;">
            <div>
                <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800;">Admissions Hub</h1>
                <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Sovereign Lead Management & Enrolment Pipeline</p>
            </div>
            <button class="login-btn action-trigger" data-action="new_applicant" style="width: auto; padding: 10px 25px; background: var(--gold); color: white; font-weight: 800; border: none;">+ NEW_APPLICANT</button>
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
                <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--gold);">Active Lead Pipeline</h3>
                <div style="display: flex; gap: 10px;">
                    <input type="text" placeholder="Filter applicants..." style="background: rgba(255,255,255,0.03); border: 1px solid var(--glass-border); color: white; padding: 6px 12px; border-radius: 6px; font-size: 0.7rem; width: 200px;">
                    <button class="login-btn action-trigger" data-action="export_excel" style="width: auto; padding: 6px 12px; font-size: 0.65rem;">EXPORT_PIPELINE</button>
                </div>
            </div>
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
                        <td>#L-9844</td>
                        <td><strong>Sarah Jenkins</strong><br><span style="font-size:0.6rem;color:var(--slate);">sarah.j@gmail.com</span></td>
                        <td>B.Tech CS</td>
                        <td style="font-weight:800;color:var(--gold);">82.4</td>
                        <td><span class="status-pill status-pending">IN_REVIEW</span></td>
                        <td>Ms. Priya</td>
                        <td><button class="login-btn action-trigger" data-action="doc_verify" style="padding:4px 8px;font-size:0.58rem;width:auto;">VERIFY</button></td>
                    </tr>
                    <tr>
                        <td>#L-9820</td>
                        <td><strong>Nadia Khan</strong><br><span style="font-size:0.6rem;color:var(--slate);">nadia.k@hotmail.com</span></td>
                        <td>B.Tech CS</td>
                        <td style="font-weight:800;color:#10b981;">91.6</td>
                        <td><span class="status-pill status-verified">VERIFIED</span></td>
                        <td>Mr. Rajan</td>
                        <td><button class="login-btn action-trigger" data-action="seat_offer" style="padding:4px 8px;font-size:0.58rem;width:auto;background:var(--gold);color:white;">OFFER_SEAT</button></td>
                    </tr>
                    <tr>
                        <td>#L-9851</td>
                        <td><strong>Vikram Singh</strong><br><span style="font-size:0.6rem;color:var(--slate);">vikram.s@outlook.com</span></td>
                        <td>MBA Strategy</td>
                        <td style="font-weight:800;color:#ffab00;">74.8</td>
                        <td><span class="status-pill status-pending" style="color:#ffab00; border-color:#ffab00; background:rgba(255,171,0,0.1);">DOC_PENDING</span></td>
                        <td>Ms. Priya</td>
                        <td><button class="login-btn" style="padding:4px 8px;font-size:0.58rem;width:auto;">FOLLOW_UP</button></td>
                    </tr>
                    <tr>
                        <td>#L-9860</td>
                        <td><strong>Ananya Rao</strong><br><span style="font-size:0.6rem;color:var(--slate);">ananya.r@gmail.com</span></td>
                        <td>M.Tech AI</td>
                        <td style="font-weight:800;color:#10b981;">88.2</td>
                        <td><span class="status-pill status-verified">VERIFIED</span></td>
                        <td>Mr. Arjun</td>
                        <td><button class="login-btn action-trigger" data-action="seat_offer" style="padding:4px 8px;font-size:0.58rem;width:auto;background:var(--gold);color:white;">OFFER_SEAT</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    "Admissions": (role = "Admissions") => admissionsViewTemplates["SIS"](),
    "Reports": (role = "Admissions") => `
        <div class="view-header">
            <h1 class="page-title" style="font-size: 1.8rem; font-weight: 800;">Admissions Intelligence</h1>
            <p style="color: var(--slate); font-size: 0.85rem; margin-top: 5px;">Daily Activity Log & Analytical Reports</p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1.5fr; gap: 25px; margin-top: 25px;" class="slide-up">
            <div style="background: var(--glass); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border);">
                <h3 style="font-size: 0.9rem; font-weight: 800; color: var(--gold); margin-bottom: 20px; letter-spacing: 1px;">MODERATION GATEWAY</h3>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <button class="login-btn action-trigger" data-action="view_bell_curve" style="text-align: left; padding: 15px; font-size: 0.75rem;"><i data-lucide="trending-up" style="width:14px; height:14px; margin-right:8px; vertical-align:middle;"></i> Generate Bell Curve Analytics</button>
                    <button class="login-btn action-trigger" data-action="export_pdf" style="text-align: left; padding: 15px; font-size: 0.75rem;"><i data-lucide="download" style="width:14px; height:14px; margin-right:8px; vertical-align:middle;"></i> Merit List Publication (Top 100)</button>
                    <button class="login-btn action-trigger" data-action="publish_results" style="text-align: left; padding: 15px; font-size: 0.75rem; background: var(--gold); color: white; font-weight: 800;"><i data-lucide="rocket" style="width:14px; height:14px; margin-right:8px; vertical-align:middle;"></i> PUBLISH SEMESTER RESULTS</button>
                </div>
            </div>
            <div style="background: var(--glass); border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden;">
                <div style="padding: 20px; border-bottom: 1px solid var(--glass-border);">
                    <h3 style="font-size: 0.9rem; font-weight: 700;">Recent Admissions Activity</h3>
                </div>
                <div style="padding: 15px;">
                    <div style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <p style="font-size: 0.7rem; color: var(--gold); font-weight: 700;">10:42 AM</p>
                        <p style="font-size: 0.75rem; color: var(--white); margin-top: 4px;"><strong>Sarah Jenkins</strong> moved to VERIFIED stage.</p>
                    </div>
                    <div style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <p style="font-size: 0.7rem; color: var(--gold); font-weight: 700;">09:15 AM</p>
                        <p style="font-size: 0.75rem; color: var(--white); margin-top: 4px;">Seat offer accepted for <strong>Rahul Desai</strong> (#L-9845).</p>
                    </div>
                    <div style="padding: 12px;">
                        <p style="font-size: 0.7rem; color: var(--gold); font-weight: 700;">Yesterday</p>
                        <p style="font-size: 0.75rem; color: var(--white); margin-top: 4px;">New application batch imported (42 records).</p>
                    </div>
                </div>
            </div>
            <div style="margin-top: 20px; padding: 15px; background: rgba(184,134,11,0.03); border-radius: 12px; border: 1px dashed rgba(184,134,11,0.2); display: flex; gap: 15px; align-items: center;">
                    <i data-lucide="alert-circle" style="width:24px; height:24px; color:var(--gold);"></i>
                    <div>
                        <p style="font-size: 0.7rem; color: var(--gold); font-weight: 800;">CRITICAL DELAY ALERT</p>
                        <p style="font-size: 0.65rem; color: var(--slate); line-height: 1.4;">Mechanical Dept. evaluation is behind SLA by 48 hours. Notifying HOD and lead moderators automatically.</p>
                    </div>
                </div>
        </div>
    `
};
