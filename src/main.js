import './style.css';
import './responsive.css';
import { sidebarTemplates } from './data/mockData.js';
import { viewTemplates } from './data/templates.js';
import { studentViewTemplates } from './data/studentTemplates.js';
import { parentViewTemplates } from './data/parentTemplates.js';
import { admissionsViewTemplates } from './data/admissionsTemplates.js';
import { examViewTemplates } from './data/examTemplates.js';
import { accountViewTemplates } from './data/accountTemplates.js';
import { hrViewTemplates } from './data/hrTemplates.js';
import { financeViewTemplates } from './data/financeTemplates.js';
import { facultyViewTemplates } from './data/facultyTemplates.js';
import { profileTabTemplates, financeSectionTemplates, hrmsSectionTemplates, reportSectionTemplates, settingSectionTemplates } from './data/subTemplates.js';

class CampusNexusApp {
    constructor() {
        this.ctx = null;
        this.particles = [];
        this.isLoggedIn = false;
        this.userRole = 'Management';
        this.activeCollege = 'MAIN_CAMPUS';

        this.init();
    }

    init() {
        this.initParticles();
        this.attachGlobalListeners();
        this.checkInitialState();
        this.render();
        this.startPulse();
    }

    startPulse() {
        setInterval(() => {
            const kpis = document.querySelectorAll('.kpi-val');
            kpis.forEach(kpi => {
                if (kpi.innerText.includes('%') || kpi.innerText.includes('$')) return;
                const current = parseInt(kpi.innerText);
                if (isNaN(current)) return;

                // Subly pulse numeric values (+/- 1-2)
                const change = Math.random() > 0.5 ? 1 : -1;
                if (Math.random() > 0.8) {
                    kpi.innerText = current + change;
                    kpi.style.color = change > 0 ? 'var(--gold)' : '#ef4444';
                    setTimeout(() => kpi.style.color = '', 1000);
                }
            });
        }, 5000);
    }

    // --- Core Rendering ---
    render() {
        if (!this.isLoggedIn) {
            this.renderLogin();
        } else {
            this.renderShell();
        }
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }

    renderLogin() {
        document.body.innerHTML = `
            <div id="login-screen" class="login-container">
                <canvas id="bg-canvas"></canvas>
                <div class="login-card slide-up">
                    <div class="logo">CAMPUS<span>NEXUS</span></div>
                    <div class="subtitle">Sovereign ERP Intelligence Hub 1.0</div>
                    <div style="margin-bottom: 25px; text-align: left;">
                        <label style="font-size: 0.6rem; color: var(--gold); letter-spacing: 2px; margin-bottom: 8px; display: block;">SELECT_PERSONA</label>
                        <select id="role-select" class="login-input">
                            <option value="Management">Management Viewer (Super)</option>
                            <option value="Admissions">Admissions Officer</option>
                            <option value="Exams">Exam Cell Controller</option>
                            <option value="Accounts">Accounts & Fees Admin</option>
                            <option value="HR">HR Administrator</option>
                            <option value="Finance">Finance Administrator</option>
                            <option value="Faculty">Faculty Member</option>
                            <option value="Student">Student Sovereign</option>
                            <option value="Parent">Parent / Guardian</option>
                        </select>
                        <input type="password" class="login-input" placeholder="ACCESS_KEY" value="********">
                    </div>
                    <button id="login-trigger" class="login-btn">LOGIN</button>
                    <div style="margin-top: 25px; font-size: 0.6rem; color: var(--slate); letter-spacing: 1px;">
                        SYSTEM_ID: 0x4421-B | STATUS: OPTIMAL
                    </div>
                </div>
            </div>
        `;
        this.initParticles();
        document.getElementById('login-trigger').addEventListener('click', () => this.handleLogin());
    }

    renderShell() {
        document.body.innerHTML = `
            <div class="app-shell">
                <canvas id="bg-canvas"></canvas>

                <!-- Sidebar overlay backdrop (mobile) -->
                <div id="sidebar-overlay"></div>

                <aside class="sidebar slide-right">
                    <div class="logo" style="padding: 10px 0; margin-bottom: 25px;">CAMPUS<span>NEXUS</span></div>
                    <nav id="nav-container">
                        ${sidebarTemplates[this.userRole] || sidebarTemplates['Management']}
                    </nav>
                    <div style="margin-top: auto; padding-top: 20px;">
                        <button id="logout-trigger" class="nav-item" style="background: rgba(239, 68, 68, 0.08) !important; color: #ef4444 !important; border: 1px solid rgba(239, 68, 68, 0.15) !important; font-size: 0.8rem; justify-content: center; font-weight: 700;">
                            <i data-lucide="log-out" style="width:16px; height:16px;"></i> LOGOUT
                        </button>
                    </div>
                </aside>

                <main class="main-content">
                    <header class="header slide-down">
                        <!-- Hamburger (mobile only) -->
                        <button id="menu-toggle" aria-label="Open menu">☰</button>

                        <div class="search-bar">
                            <i data-lucide="search" style="color: var(--gold);"></i>
                            <input type="text" id="global-search" placeholder="Search records..." style="background: transparent; border: none; color: var(--white); width: 100%; outline: none; font-size: 0.85rem;">
                        </div>

                        <div class="header-actions">
                            <select id="college-select" class="login-input" style="margin:0; width:auto; padding:8px 15px; font-size:0.7rem;">
                                <option ${this.activeCollege === 'MAIN_CAMPUS' ? 'selected' : ''}>MAIN_CAMPUS</option>
                                <option ${this.activeCollege === 'CITY_CAMPUS' ? 'selected' : ''}>CITY_CAMPUS</option>
                                <option ${this.activeCollege === 'NORTH_CAMPUS' ? 'selected' : ''}>NORTH_CAMPUS</option>
                            </select>
                            <div class="profile-chip">
                                <span style="font-size: 0.6rem; color: var(--gold); letter-spacing: 1px; font-weight: 700;">${this.userRole.toUpperCase()}</span>
                                <div style="width: 32px; height: 32px; background: var(--gold); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink:0;"><i data-lucide="user" style="width: 18px; height: 18px; color:white;"></i></div>
                            </div>
                        </div>
                    </header>

                    <div id="view-container"></div>
                </main>
            </div>

            <!-- Mobile Bottom Navigation -->
            <nav id="mobile-bottom-nav">
                <div class="bottom-nav-grid">
                    <button class="bottom-nav-item nav-item active" data-view="Dashboard">
                        <i data-lucide="layout-dashboard"></i><span>Home</span>
                    </button>
                    <button class="bottom-nav-item nav-item" data-view="SIS">
                        <i data-lucide="users"></i><span>Students</span>
                    </button>
                    <button class="bottom-nav-item nav-item" data-view="Admissions">
                        <i data-lucide="user-plus"></i><span>Admit</span>
                    </button>
                    <button class="bottom-nav-item nav-item" data-view="Fees">
                        <i data-lucide="dollar-sign"></i><span>Fees</span>
                    </button>
                    <button class="bottom-nav-item nav-item" data-view="Reports">
                        <i data-lucide="file-text"></i><span>Reports</span>
                    </button>
                </div>
            </nav>

            <div id="toast-container" style="position: fixed; bottom: 90px; right: 16px; z-index: 9999; max-width: calc(100vw - 32px);"></div>
            <div id="modal-container"></div>
        `;
        this.initParticles();
        this.renderView('Dashboard');
        this.attachShellListeners();
        this.attachMobileListeners();
    }

    renderView(viewName) {
        console.log(`Switching view to: ${viewName}`);
        const container = document.getElementById('view-container');
        if (!container) return;

        // Sync with renamed Analytics -> Reports
        const finalViewName = viewName === 'Analytics' ? 'Reports' : viewName;

        let templates;
        if (this.userRole === 'Student') {
            templates = studentViewTemplates;
        } else if (this.userRole === 'Parent') {
            templates = parentViewTemplates;
        } else if (this.userRole === 'Admissions') {
            templates = admissionsViewTemplates;
        } else if (this.userRole === 'Exams') {
            templates = examViewTemplates;
        } else if (this.userRole === 'Accounts') {
            templates = accountViewTemplates;
        } else if (this.userRole === 'HR') {
            templates = hrViewTemplates;
        } else if (this.userRole === 'Finance') {
            templates = financeViewTemplates;
        } else if (this.userRole === 'Faculty') {
            templates = facultyViewTemplates;
        } else {
            templates = viewTemplates;
        }

        if (templates[finalViewName]) {
            container.innerHTML = templates[finalViewName](this.userRole);

            // Mark sidebar active
            document.querySelectorAll('.nav-item').forEach(item => {
                // The nav item's data-view should match the *actual* view name (e.g., 'Reports' not 'Analytics')
                // So we compare against finalViewName for highlighting
                const isActive = item.dataset.view === finalViewName;
                item.classList.toggle('active', isActive);
            });

            // Specific sub-section logic
            if (finalViewName === 'Fees') this.renderSubSection('Fees', 'Dashboard');
            if (finalViewName === 'HRMS') this.renderSubSection('HRMS', 'Directory');
            if (finalViewName === 'Reports') this.renderSubSection('Reports', 'Admissions');
            if (finalViewName === 'Settings') this.renderSubSection('Settings', 'Security');

            if (typeof lucide !== 'undefined') lucide.createIcons();
        } else {
            console.error(`View not found: ${finalViewName}`);
            container.innerHTML = `<div style="padding: 40px; text-align: center; color: var(--slate);">Module [${finalViewName}] Under Maintenance or Unauthorized.</div>`;
        }
    }

    renderSubSection(viewName, subName) {
        const containerId = `${viewName.toLowerCase()}-section-container`;
        const container = document.getElementById(containerId);
        if (!container) return;

        const templates = {
            'Finance': financeSectionTemplates,
            'Fees': financeSectionTemplates,
            'HRMS': hrmsSectionTemplates,
            'Reports': reportSectionTemplates,
            'Settings': settingSectionTemplates
        };

        if (templates[viewName] && templates[viewName][subName]) {
            container.innerHTML = templates[viewName][subName];

            // Mark inner tab active
            document.querySelectorAll('.inner-tab-trigger').forEach(tab => {
                const isActive = tab.dataset.view === viewName && tab.dataset.sub === subName;
                tab.classList.toggle('active', isActive);
            });
            if (typeof lucide !== 'undefined') lucide.createIcons();
        }
    }

    renderProfile(studentId) {
        const modal = document.getElementById('modal-container');
        if (!modal) return;

        modal.innerHTML = `
            <div class="modal-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15, 23, 42, 0.4); backdrop-filter: blur(10px); z-index: 10000; display: flex; align-items: center; justify-content: center;">
                <div class="profile-modal slide-up">
                    <button class="close-hub">×</button>
                    <div style="display: flex; gap: 30px; margin-bottom: 30px; align-items: center;">
                        <div style="width: 100px; height: 100px; border-radius: 20px; background: linear-gradient(135deg, var(--gold), var(--gold-bright)); border: 2px solid rgba(99, 102, 241, 0.2); display: flex; align-items: center; justify-content: center; font-size: 2rem;"><i data-lucide="user" style="width: 48px; height: 48px; color:white;"></i></div>
                        <div>
                            <span class="breadcrumb" style="margin: 0; opacity: 0.6;">#SCHOLAR_${studentId}</span>
                            <h2 style="color: var(--white); margin: 5px 0; font-family: 'Playfair Display'; font-size: 2rem;">Aarav Malhotra</h2>
                            <p style="color: var(--gold); font-size: 0.8rem; font-weight: 600; letter-spacing: 1px;">B.Tech Computer Science | Semester 06</p>
                        </div>
                    </div>
                    <div class="inner-tabs">
                        <div class="inner-tab active profile-tab-trigger" data-tab="Overview">OVERVIEW</div>
                        <div class="inner-tab profile-tab-trigger" data-tab="Academics">ACADEMICS</div>
                        <div class="inner-tab profile-tab-trigger" data-tab="Attendance">ATTENDANCE</div>
                        <div class="inner-tab profile-tab-trigger" data-tab="Fees">FINANCIALS</div>
                    </div>
                    <div id="profile-tab-content" style="min-height: 250px;">
                        ${profileTabTemplates['Overview']}
                    </div>
                </div>
            </div>
        `;

        modal.querySelector('.close-hub').onclick = () => modal.innerHTML = '';
        modal.querySelectorAll('.profile-tab-trigger').forEach(tab => {
            tab.onclick = () => {
                const sub = tab.dataset.tab;
                document.getElementById('profile-tab-content').innerHTML = profileTabTemplates[sub] || 'Content Missing';
                modal.querySelectorAll('.profile-tab-trigger').forEach(t => t.classList.toggle('active', t === tab));
                if (typeof lucide !== 'undefined') lucide.createIcons();
            };
        });
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }

    showToast(message, type = 'success') {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast slide-up ${type}`;
        toast.style.cssText = `
            background: var(--navy-dark);
            border: 1px solid var(--glass-border);
            border-left: 4px solid ${type === 'success' ? '#10b981' : 'var(--gold)'};
            color: var(--white);
            padding: 15px 25px;
            border-radius: 12px;
            margin-top: 10px;
            font-size: 0.8rem;
            font-weight: 600;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
            display: flex;
            align-items: center;
            gap: 12px;
            z-index: 10001;
        `;
        toast.innerHTML = `<i data-lucide="${type === 'success' ? 'check-circle' : 'alert-circle'}" style="width:18px; height:18px;"></i> ${message}`;
        container.appendChild(toast);
        lucide.createIcons();
        setTimeout(() => toast.remove(), 4000);
    }

    // --- Handlers ---
    handleLogin() {
        const role = document.getElementById('role-select').value;
        this.isLoggedIn = true;
        this.userRole = role;
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userRole', role);
        this.showToast(`LOGIN_SUCCESSFUL: ${role}_CALIBRATED`);
        this.render();
    }

    handleLogout() {
        this.isLoggedIn = false;
        localStorage.removeItem('isLoggedIn');
        this.showToast('SESSION_LOGOUT', 'warning');
        this.render();
    }

    // --- Event Listeners ---
    attachGlobalListeners() {
        window.addEventListener('resize', () => this.initParticles());
        document.addEventListener('click', (e) => {
            const navItem = e.target.closest('.nav-item');
            if (navItem) this.renderView(navItem.dataset.view);

            const innerTab = e.target.closest('.inner-tab-trigger');
            if (innerTab) this.renderSubSection(innerTab.dataset.view, innerTab.dataset.sub);

            const profileTrigger = e.target.closest('.profile-trigger');
            if (profileTrigger) this.renderProfile(profileTrigger.dataset.id);

            const actionTrigger = e.target.closest('.action-trigger');
            if (actionTrigger) {
                this.executeActionSequence(actionTrigger.dataset.action);
            }

            if (e.target.closest('#logout-trigger')) this.handleLogout();
        });
    }

    executeActionSequence(action) {
        if (!action) return;

        const sequences = {
            'download_id': [
                { msg: 'INITIALIZING_SECURE_EXTRACT...', type: 'success', delay: 0 },
                { msg: 'ENCRYPTING_ID_0xCC...', type: 'success', delay: 1500 },
                { msg: 'DOCUMENT_DISPATCHED', type: 'success', delay: 3000 }
            ],
            'bonafide': [
                { msg: 'VERIFYING_ACADEMIC_REGISTRY...', type: 'success', delay: 0 },
                { msg: 'GENERATING_INSTITUTIONAL_SEAL...', type: 'success', delay: 1200 },
                { msg: 'BONAFIDE_CERTIFICATE_READY_FOR_DISPATCH', type: 'success', delay: 2500 }
            ],
            'parent_connect': [
                { msg: 'ESTABLISHING_MOBILE_GATEWAY...', type: 'success', delay: 0 },
                { msg: 'SECURE_CHANNEL_READY: Message sent to Mentor', type: 'success', delay: 1000 }
            ],
            'pay_fees': [
                { msg: 'REDIRECTING_TO_SECURE_GATEWAY...', type: 'warning', delay: 0 },
                { msg: 'AUTHORIZING_NET_BANKING...', type: 'success', delay: 1500 },
                { msg: 'PAYMENT_SUCCESS: Transaction #PX-0444 committed', type: 'success', delay: 3000 }
            ],
            'rsvp': [
                { msg: 'PROCESSING_NEXUS_RSVP...', type: 'success', delay: 0 },
                { msg: 'SLOT_SECURED: Admission code sent to ward mobile', type: 'success', delay: 1200 }
            ],
            'reset_key': [
                { msg: 'SECURITY_PROTOCOL_OVERRIDE_INIT...', type: 'warning', delay: 0 },
                { msg: 'REGENERATING_NEURAL_ACCESS_KEY...', type: 'warning', delay: 1500 },
                { msg: 'ACCESS_KEY_REFRESHED_SUCCESSFULLY', type: 'success', delay: 3000 }
            ],
            'fee_demand': [
                { msg: 'COMPILING_PENDING_FEE_REGISTRY...', type: 'success', delay: 0 },
                { msg: 'DISPATCHING_GLOBAL_DEMANDS_TO_DEBTORS', type: 'success', delay: 2000 }
            ],
            'payroll': [
                { msg: 'AUTHORIZING_INSTITUTIONAL_CORE...', type: 'warning', delay: 0 },
                { msg: 'EXECUTING_BATCH_CREDIT_SEQUENCE...', type: 'success', delay: 1800 },
                { msg: 'PAYROLL_DISPATCH_COMPLETE', type: 'success', delay: 3500 }
            ],
            'rotate_pass': [
                { msg: 'SECURITY_OVERRIDE_INITIATED...', type: 'warning', delay: 0 },
                { msg: 'GENERATING_NEW_CIPHER_KEY...', type: 'warning', delay: 1200 },
                { msg: 'PASS_ROTATION_COMPLETE: Notify sent to registered mobile', type: 'success', delay: 2800 }
            ],
            'logout': [
                { msg: 'BROADCASTING_LOGOUT_SIGNAL...', type: 'warning', delay: 0 },
                { msg: 'LOGOUT_SUCCESSFUL', type: 'success', delay: 1500 }
            ],
            'commit_branding': [
                { msg: 'VALIDATING_INSTITUTIONAL_ASSETS...', type: 'success', delay: 0 },
                { msg: 'SYNCING_BRAND_ASSETS_TO_CORE...', type: 'success', delay: 1500 },
                { msg: 'BRANDING_COMMIT_SUCCESSFUL', type: 'success', delay: 3000 }
            ],
            'toggle_setting': [
                { msg: 'TOGGLING_SYSTEM_PARAMETER...', type: 'warning', delay: 0 },
                { msg: 'GLOBAL_PARAMETER_STATE_UPDATED', type: 'success', delay: 1200 }
            ],
            'schedule_maint': [
                { msg: 'QUERYING_MAINTENANCE_SCHEDULER...', type: 'success', delay: 0 },
                { msg: 'NEW_WINDOW_COMMITTED_TO_CLUSTER', type: 'success', delay: 1800 }
            ],
            'save_prefs': [
                { msg: 'BINDING_PREFERENCE_SNAPSHOT...', type: 'success', delay: 0 },
                { msg: 'WORKSPACE_CONFIGURATION_SYNCED', type: 'success', delay: 1500 }
            ],
            'upload_logo': [
                { msg: 'AWAITING_ASSET_UPLOAD...', type: 'warning', delay: 0 },
                { msg: 'EMBLEM_SUBMITTED_FOR_APPROVAL', type: 'success', delay: 1000 }
            ],
            'publish_results': [
                { msg: 'VALIDATING_MARKS_REGISTRY...', type: 'warning', delay: 0 },
                { msg: 'GENERATING_GRADE_COMPUTATION_MATRIX...', type: 'success', delay: 1500 },
                { msg: 'RESULT_PUBLISHED: Students notified via portal', type: 'success', delay: 3000 }
            ],
            'gen_payslip': [
                { msg: 'COMPILING_PAYROLL_REGISTER...', type: 'warning', delay: 0 },
                { msg: 'ENCRYPTING_PAYSLIPS...', type: 'success', delay: 1500 },
                { msg: 'PAYSLIP_BATCH_EXPORTED: 1,250 records', type: 'success', delay: 3000 }
            ],
            'leave_approve': [
                { msg: 'FETCHING_LEAVE_BALANCE...', type: 'warning', delay: 0 },
                { msg: 'LEAVE_SANCTIONED: Balance updated', type: 'success', delay: 1500 }
            ],
            'leave_reject': [
                { msg: 'LEAVE_REQUEST_DECLINED: Notify sent', type: 'warning', delay: 0 }
            ],
            'fee_demand_gen': [
                { msg: 'SCANNING_ELIGIBLE_ACCOUNTS...', type: 'warning', delay: 0 },
                { msg: 'GENERATING_DEMAND_NOTICES...', type: 'success', delay: 1800 },
                { msg: 'FEE_DEMAND_DISPATCHED: 10,245 notices sent', type: 'success', delay: 3500 }
            ],
            'add_program': [
                { msg: 'INITIALIZING_PROGRAM...', type: 'success', delay: 0 },
                { msg: 'PROGRAM_SCHEMA_COMMITTED: Pending HOD approval', type: 'success', delay: 1500 }
            ],
            'add_course': [
                { msg: 'COURSE_CREATED: Pending faculty assignment', type: 'success', delay: 0 }
            ],
            'publish_course': [
                { msg: 'VALIDATING_COURSE_METADATA...', type: 'warning', delay: 0 },
                { msg: 'COURSE_PUBLISHED: Visible in timetable', type: 'success', delay: 1500 }
            ],
            'convert_applicant': [
                { msg: 'VERIFYING_APPLICANT_RECORD...', type: 'warning', delay: 0 },
                { msg: 'CREATING_STUDENT_PROFILE...', type: 'success', delay: 1500 },
                { msg: 'ENROLMENT_COMPLETE: SIS Record #10246 created', type: 'success', delay: 3000 }
            ],
            'send_notice': [
                { msg: 'DRAFTING_SHORTAGE_NOTICE...', type: 'warning', delay: 0 },
                { msg: 'NOTICE_DISPATCHED: Student & Parent notified', type: 'success', delay: 1500 }
            ],
            'mark_all_present': [
                { msg: 'UPDATING_ATTENDANCE_REGISTER...', type: 'success', delay: 0 },
                { msg: 'ATTENDANCE_MARKED: All present — registry sealed', type: 'success', delay: 1200 }
            ],
            'init_audit': [
                { msg: 'SUBMITTING_AUDIT_REQUEST_TO_CONTROLLER...', type: 'warning', delay: 0 },
                { msg: 'INTERNAL_AUDIT_SCHEDULED: Confirmation sent', type: 'success', delay: 2000 }
            ],
            'payroll_run': [
                { msg: 'VALIDATING_PAYROLL_ENTRIES...', type: 'warning', delay: 0 },
                { msg: 'PAYROLL_CYCLE_INITIATED: Batch processing...', type: 'success', delay: 1800 },
                { msg: 'PAYROLL_RUN_COMPLETE: FEB 2026 closed', type: 'success', delay: 3500 }
            ],
            'doc_verify': [
                { msg: 'FETCHING_DOCUMENT_BUNDLE...', type: 'warning', delay: 0 },
                { msg: 'OCR_SCAN_PROCESSING: 3 documents detected', type: 'success', delay: 1200 },
                { msg: 'VERIFICATION_COMPLETE: Applicant status → VERIFIED', type: 'success', delay: 2600 }
            ],
            'seat_offer': [
                { msg: 'CHECKING_SEAT_AVAILABILITY...', type: 'warning', delay: 0 },
                { msg: 'SEAT_ALLOCATED: Offer letter dispatched to applicant', type: 'success', delay: 1800 }
            ],
            'run_audit': [
                { msg: 'GENERATING_COMPLIANCE_AUDIT_REPORT...', type: 'warning', delay: 0 },
                { msg: 'SCANNING_REGULATORY_REGISTRY...', type: 'success', delay: 1500 },
                { msg: 'COMPLIANCE_AUDIT_COMPLETE: Report ready', type: 'success', delay: 3000 }
            ],
            'view_ledger': [
                { msg: 'FETCHING_STUDENT_FISCAL_LEDGER...', type: 'success', delay: 0 },
                { msg: 'LEDGER_SYNCHRONIZED', type: 'success', delay: 1500 }
            ],
            'trigger_reminders': [
                { msg: 'COMPILING_DEFAULTER_LIST...', type: 'warning', delay: 0 },
                { msg: 'NOTICES_DISPATCHED_VIA_GATEWAY', type: 'success', delay: 2000 }
            ],
            'halt_admit_cards': [
                { msg: 'APPLYING_FISCAL_BLOCK_ON_EXAM...', type: 'warning', delay: 0 },
                { msg: 'ADMIT_CARDS_HALTED_FOR_TARGET_DEBTORS', type: 'success', delay: 1500 }
            ],
            'reconcile_selected': [
                { msg: 'INITIALIZING_BULK_RECONCILIATION...', type: 'warning', delay: 0 },
                { msg: 'SYNCING_TRANSACTIONS...', type: 'success', delay: 1800 },
                { msg: 'BULK_RECONCILIATION_COMPLETE', type: 'success', delay: 3500 }
            ]
        };

        if (action === 'new_applicant') {
            this.renderApplicantForm();
            return;
        }

        if (action === 'hall_ticket') {
            this.showHallTicket();
            return;
        }

        if (action && action.startsWith('export_')) {
            this.simulateExport(action);
            return;
        }

        const sequence = sequences[action] || [{ msg: `EXECUTING: ${action.toUpperCase()}`, type: 'success', delay: 0 }];

        sequence.forEach(step => {
            setTimeout(() => this.showToast(step.msg, step.type), step.delay);
        });
    }

    simulateExport(action) {
        const labels = {
            'export_pdf': 'CampusNexus_Report.pdf',
            'export_excel': 'CampusNexus_Data.xlsx',
            'export_csv': 'CampusNexus_Data.csv',
            'export_balance_sheet': 'Finance_Summary.pdf',
            'export_payroll': 'Payroll_Register.xlsx',
            'export_catalog': 'Academic_Catalog.xlsx',
            'export_master_ledger': 'Finance_Master_Ledger.xlsx'
        };
        const filename = labels[action] || 'CampusNexus_Export.pdf';
        const csv = 'ID,Name,Amount,Status\n#001,Sample Record,1000,Active\n#002,Demo Entry,2500,Paid\n#003,Test Record,800,Pending';
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
        this.showToast(`EXPORT_GENERATED: ${filename} downloaded`, 'success');
    }

    showHallTicket() {
        const modal = document.getElementById('modal-container');
        if (!modal) return;
        modal.innerHTML = `
            <div class="modal-overlay" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(15, 23, 42, 0.4);backdrop-filter:blur(8px);z-index:10000;display:flex;align-items:flex-start;justify-content:center;padding-top:20px;">
                <div class="slide-up" style="background:var(--navy-dark);border:1px solid var(--gold);border-radius:6px;width:440px;max-width:98vw;padding:4px 8px;position:relative;box-shadow:0 0 30px rgba(0,0,0,0.8);">
                    <button class="close-hub" style="position:absolute;top:2px;right:4px;background:none;border:none;color:rgba(255,255,255,0.5);font-size:0.7rem;cursor:pointer;z-index:10;">×</button>

                    <!-- Row 1: Flat Header -->
                    <div style="display:flex;align-items:center;gap:6px;border-bottom:1px solid rgba(100,255,218,0.1);padding-bottom:2px;margin-bottom:3px;">
                        <span style="font-family:'Playfair Display';font-weight:900;font-size:0.5rem;color:var(--gold);">CN</span>
                        <h2 style="font-size:0.55rem;font-weight:900;color:var(--white);margin:0;letter-spacing:0.5px;text-transform:uppercase;">Hall Ticket 2026</h2>
                        <span style="margin-left:auto;font-size:0.38rem;padding:0px 3px;border:1px solid #64ffda;color:#64ffda;border-radius:1px;font-weight:800;">VERIFIED</span>
                    </div>

                    <!-- Row 2: Dense Info -->
                    <div style="display:flex;justify-content:space-between;align-items:center;background:rgba(255,255,255,0.02);padding:2px 4px;border-radius:2px;margin-bottom:3px;font-size:0.45rem;">
                        <div style="display:flex;gap:6px;">
                            <span style="color:var(--slate);">NAME: <b style="color:var(--white);">AARAV MALHOTRA</b></span>
                            <span style="color:var(--slate);">ROLL: <b style="color:var(--white);">#9822-X</b></span>
                        </div>
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav" style="width:16px;height:16px;border-radius:2px;border:1px solid var(--gold);">
                    </div>

                    <!-- Row 3: Micro Schedule Table -->
                    <table style="width:100%;border-collapse:collapse;font-size:0.42rem;color:var(--white);line-height:1;">
                        <thead style="background:rgba(100,255,218,0.05);">
                            <tr>
                                <th style="text-align:left;padding:2px 4px;color:var(--gold);border:1px solid rgba(100,255,218,0.1);">SUBJECT_CODE</th>
                                <th style="text-align:left;padding:2px 4px;color:var(--gold);border:1px solid rgba(100,255,218,0.1);">DATE/TIME</th>
                                <th style="text-align:left;padding:2px 4px;color:var(--gold);border:1px solid rgba(100,255,218,0.1);">LOCATION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding:2px 4px;border:1px solid rgba(100,255,218,0.1);">CS-601 (Algo)</td>
                                <td style="padding:2px 4px;border:1px solid rgba(100,255,218,0.1);">MAR 12 | 09:00 AM</td>
                                <td style="padding:2px 4px;border:1px solid rgba(100,255,218,0.1);">HALL-A (NL-402)</td>
                            </tr>
                            <tr>
                                <td style="padding:2px 4px;border:1px solid rgba(100,255,218,0.1);">MAR 15 | 02:00 PM</td>
                                <td style="padding:2px 4px;border:1px solid rgba(100,255,218,0.1);">LAB-DB (SL-08)</td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- Row 4: Action Strip -->
                    <div style="display:flex;gap:4px;margin-top:3px;padding-top:3px;border-top:1px solid rgba(100,255,218,0.05);">
                        <button class="login-btn action-trigger" data-action="download_id" style="flex:1;height:18px;font-size:0.45rem;background:var(--gold);color:var(--navy-dark);border:none;border-radius:2px;font-weight:900;cursor:pointer;">PRINT_ADMIT_CARD</button>
                        <button class="login-btn" style="width:40px;height:18px;font-size:0.45rem;background:rgba(255,255,255,0.05);color:var(--slate);border:1px solid var(--glass-border);border-radius:2px;cursor:pointer;">CLOSE</button>
                    </div>
                </div>
            </div>
        `;
        modal.querySelector('.close-hub').onclick = () => modal.innerHTML = '';
        modal.querySelector('.login-btn:not(.action-trigger)').onclick = () => modal.innerHTML = '';
        modal.querySelectorAll('.action-trigger').forEach(b => b.onclick = (e) => this.executeActionSequence(e.currentTarget.dataset.action));
    }

    attachShellListeners() {
        const collegeSelect = document.getElementById('college-select');
        if (collegeSelect) {
            collegeSelect.onchange = (e) => {
                this.activeCollege = e.target.value;
                localStorage.setItem('activeCollege', this.activeCollege);
                this.showToast(`CAMPUS_SYNC: ${this.activeCollege}`);
                this.renderView('Dashboard');
            };
        }

        const globalSearch = document.getElementById('global-search');
        if (globalSearch) {
            globalSearch.onkeyup = (e) => {
                if (e.key === 'Enter') {
                    const query = e.target.value.trim();
                    if (query.includes('9822') || query.toLowerCase().includes('aarav')) {
                        this.showToast('NEURAL_MATCH_FOUND: Loading Profile Hub');
                        this.renderProfile('9822');
                    } else {
                        this.showToast(`NEURAL_QUERY: ${query}`);
                    }
                    e.target.value = '';
                }
            };
        }
    }

    attachMobileListeners() {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        const toggle = document.getElementById('menu-toggle');

        if (!sidebar || !overlay || !toggle) return;

        const openSidebar = () => {
            sidebar.classList.add('sidebar-open');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        const closeSidebar = () => {
            sidebar.classList.remove('sidebar-open');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        };

        // Remove existing listener to prevent duplication
        const newToggle = toggle.cloneNode(true);
        toggle.parentNode.replaceChild(newToggle, toggle);

        newToggle.addEventListener('click', () => {
            sidebar.classList.contains('sidebar-open') ? closeSidebar() : openSidebar();
        });

        const newOverlay = overlay.cloneNode(true);
        overlay.parentNode.replaceChild(newOverlay, overlay);

        newOverlay.addEventListener('click', closeSidebar);

        // Auto-close sidebar when a nav-item is tapped on mobile
        document.querySelectorAll('#nav-container .nav-item').forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth <= 768) closeSidebar();
            });
        });

        // Close on resize to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) closeSidebar();
        });
    }

    checkInitialState() {
        this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        this.userRole = localStorage.getItem('userRole') || 'Management';
        this.activeCollege = localStorage.getItem('activeCollege') || 'MAIN_CAMPUS';
    }

    // --- Background Animation ---
    initParticles() {
        const canvas = document.getElementById('bg-canvas');
        if (!canvas) return;
        this.ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        this.particles = Array.from({ length: 50 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5
        }));

        const animate = () => {
            if (!this.ctx) return;
            this.ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.ctx.fillStyle = 'rgba(100, 255, 218, 0.1)';
            this.particles.forEach(p => {
                p.x += p.speedX;
                p.y += p.speedY;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                this.ctx.fill();
            });
            requestAnimationFrame(animate);
        };
        animate();
    }

    renderApplicantForm() {
        const modal = document.getElementById('modal-container');
        if (!modal) return;

        modal.innerHTML = `
            <div class="modal-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); backdrop-filter: blur(10px); z-index: 10000; display: flex; align-items: center; justify-content: center;">
                <div class="profile-modal slide-up" style="width: 500px !important;">
                    <button class="close-hub">×</button>
                    <h2 style="color: var(--gold); margin-bottom: 30px; font-weight: 800; letter-spacing: 2px;">NEW_APPLICANT_REGISTRATION</h2>
                    <div style="display: flex; flex-direction: column; gap: 20px;">
                        <div class="form-group">
                            <label style="font-size: 0.6rem; color: var(--slate); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; display: block;">APPLICANT_NAME</label>
                            <input type="text" id="app-name" class="login-input" style="margin-bottom: 0;" placeholder="Enter full name...">
                        </div>
                        <div class="form-group">
                            <label style="font-size: 0.6rem; color: var(--slate); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; display: block;">ACADEMIC_PROGRAM</label>
                            <select id="app-program" class="login-input" style="margin-bottom: 0;">
                                <option>B.Tech Computer Science</option>
                                <option>M.Tech AI & Data Science</option>
                                <option>MBA Strategy</option>
                                <option>B.Com Hons</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label style="font-size: 0.6rem; color: var(--slate); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; display: block;">CAMPUS</label>
                            <select id="app-campus" class="login-input" style="margin-bottom: 0;">
                                <option>MAIN_CAMPUS</option>
                                <option>CITY_CAMPUS</option>
                                <option>NORTH_CAMPUS</option>
                            </select>
                        </div>
                        <div class="form-group" style="margin-bottom: 10px;">
                            <label style="font-size: 0.6rem; color: var(--slate); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; display: block;">MOBILE_ID</label>
                            <input type="text" id="app-phone" class="login-input" style="margin-bottom: 0;" placeholder="+91 XXXX-XXXXX">
                        </div>
                        <button id="submit-applicant" class="login-btn">AUTHORIZE_REGISTRATION</button>
                    </div>
                </div>
            </div>
        `;

        modal.querySelector('.close-hub').onclick = () => modal.innerHTML = '';

        document.getElementById('submit-applicant').onclick = () => {
            const name = document.getElementById('app-name').value;
            if (!name) {
                this.showToast('NAME_FIELD_MISSING', 'warning');
                return;
            }

            modal.innerHTML = '';
            this.showToast(`REGISTRATION_INITIATED: Validating ${name}...`);
            setTimeout(() => {
                this.showToast('BIOMETRIC_CHECK_PASSED', 'success');
                setTimeout(() => {
                    this.showToast('ADMISSIONS_GATEWAY_SUCCESS: Profile Created', 'success');
                }, 1500);
            }, 1000);
        };
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.app = new CampusNexusApp();
});
