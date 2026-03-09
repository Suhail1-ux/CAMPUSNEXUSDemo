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
                
                <div class="login-card slide-up" style="max-width: 440px; width: 90%; padding: 50px; border: 1px solid rgba(124, 58, 237, 0.1); background: rgba(255, 255, 255, 0.95); box-shadow: 0 20px 60px rgba(0,0,0,0.05);">
                    <div class="logo" style="margin-bottom: 40px; justify-content: center; display: flex; align-items: center; gap: 15px;">
                        <span style="color: #000; font-family: var(--font-display); font-weight: 900; font-size: 3rem; letter-spacing: -2px;">CAMPUS</span>
                        <span style="color: #008080; font-family: 'Outfit'; font-weight: 900; font-size: 1.2rem; letter-spacing: 5px; border-left: 2px solid rgba(0,0,0,0.05); padding-left: 20px; margin-left: 5px;">NEXUS</span>
                    </div>
                    
                    <div style="margin-bottom: 35px;">
                        <label style="font-size: 0.65rem; color: var(--vibrant-violet); letter-spacing: 4px; margin-bottom: 18px; display: block; font-weight: 900; text-align: center; opacity: 0.8;">IDENTITY VERIFICATION</label>
                        
                        <div class="custom-dropdown" id="role-dropdown">
                            <div class="dropdown-toggle" id="role-toggle">
                                <span id="selected-role-label">Management</span>
                                <i data-lucide="chevron-down" style="width: 16px; height: 16px; color: var(--vibrant-violet);"></i>
                            </div>
                            <div class="dropdown-menu" id="role-menu">
                                <div class="dropdown-item selected" data-value="Management">Central Governance (Super)</div>
                                <div class="dropdown-item" data-value="Admissions">Admissions Registrar</div>
                                <div class="dropdown-item" data-value="Exams">Controller of Examinations</div>
                                <div class="dropdown-item" data-value="Accounts">Fiscal Controller</div>
                                <div class="dropdown-item" data-value="HR">Human Capital Admin</div>
                                <div class="dropdown-item" data-value="Finance">Treasury Head</div>
                                <div class="dropdown-item" data-value="Faculty">Academic Faculty</div>
                                <div class="dropdown-item" data-value="Student">Student Sovereign</div>
                                <div class="dropdown-item" data-value="Parent">Legal Guardian</div>
                            </div>
                            <input type="hidden" id="role-select" value="Management">
                        </div>

                        <input type="password" class="login-input" placeholder="Enter Password" value="********" style="background: rgba(0,0,0,0.02); border: 1px solid var(--glass-border); color: #000; padding: 20px; border-radius: 16px; width: 100%; outline:none; text-align: center; font-size: 0.95rem; letter-spacing: 6px; margin-top: 10px;">
                    </div>

                    <button id="login-trigger" class="login-btn" style="background: var(--vibrant-violet); color: #fff; border-radius: 18px; font-size: 1.1rem; font-weight: 900; height: 65px; width: 100%; box-shadow: 0 15px 35px rgba(0, 128, 128, 0.2); border: none; cursor: pointer; transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1); letter-spacing: 2px;">LOGIN</button>
                    
                    <div style="margin-top: 40px; font-size: 0.6rem; color: #94a3b8; letter-spacing: 3px; font-weight: 800; text-align: center;">
                        Instance: <span style="color: #64748b;">Cloud Node 1A</span> &nbsp;|&nbsp; Status: <span style="color: #10b981;">Online</span>
                    </div>
                </div>
            </div>
        `;
        this.initParticles();

        // Custom Dropdown Logic
        const dropdown = document.getElementById('role-dropdown');
        const toggle = document.getElementById('role-toggle');
        const menu = document.getElementById('role-menu');
        const label = document.getElementById('selected-role-label');
        const hiddenInput = document.getElementById('role-select');

        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            menu.classList.toggle('show');
            toggle.classList.toggle('active');
        });

        document.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', () => {
                const val = item.dataset.value;
                const text = item.innerText;
                hiddenInput.value = val;
                label.innerText = text.split(' (')[0]; // Shorten label if needed

                document.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('selected'));
                item.classList.add('selected');

                menu.classList.remove('show');
                toggle.classList.remove('active');
            });
        });

        document.addEventListener('click', () => {
            menu.classList.remove('show');
            toggle.classList.remove('active');
        });

        document.getElementById('login-trigger').addEventListener('click', () => this.handleLogin());
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }

    renderShell() {
        document.body.innerHTML = `
            <div class="app-shell">
                <canvas id="bg-canvas"></canvas>

                <!-- Sidebar overlay backdrop (mobile) -->
                <div id="sidebar-overlay"></div>

                <aside class="sidebar slide-right">
                    <div class="logo" style="padding: 5px 0; margin-bottom: 15px;">CAMPUS<span style="color: #008080;">NEXUS</span></div>
                    <nav id="nav-container">
                        ${sidebarTemplates[this.userRole] || sidebarTemplates['Management']}
                    </nav>
                    <div style="margin-top: auto; padding-top: 20px;">
                        <button id="logout-trigger" class="nav-item" style="background: rgba(239, 68, 68, 0.08) !important; color: #ef4444 !important; border: 1px solid rgba(239, 68, 68, 0.15) !important; font-size: 0.8rem; justify-content: center; font-weight: 700;">
                            <i data-lucide="log-out" style="width:16px; height:16px;"></i> Logout
                        </button>
                    </div>
                </aside>

                <main class="main-content">
                    <header class="header slide-down">
                        <!-- Sidebar Toggle (All Devices) -->
                        <button id="menu-toggle" aria-label="Toggle Sidebar">
                            <i data-lucide="menu" style="width: 20px; height: 20px;"></i>
                        </button>

                        <div class="search-bar">
                            <i data-lucide="search" style="color: var(--gold);"></i>
                            <input type="text" id="global-search" placeholder="Search records..." style="background: transparent; border: none; color: var(--white); width: 100%; outline: none; font-size: 0.85rem;">
                        </div>

                        <div class="header-actions">
                            <div class="custom-dropdown" id="college-dropdown" style="margin:0; width:180px;">
                                <div class="dropdown-toggle" id="college-toggle" style="padding: 8px 15px; border-radius: 10px; font-size: 0.75rem;">
                                    <span id="selected-college-label">${this.activeCollege}</span>
                                    <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: var(--vibrant-violet);"></i>
                                </div>
                                <div class="dropdown-menu" id="college-menu" style="border-radius: 10px;">
                                    <div class="dropdown-item ${this.activeCollege === 'MAIN_CAMPUS' ? 'selected' : ''}" data-value="MAIN_CAMPUS">Main Campus</div>
                                    <div class="dropdown-item ${this.activeCollege === 'CITY_CAMPUS' ? 'selected' : ''}" data-value="CITY_CAMPUS">City Campus</div>
                                    <div class="dropdown-item ${this.activeCollege === 'NORTH_CAMPUS' ? 'selected' : ''}" data-value="NORTH_CAMPUS">North Campus</div>
                                </div>
                                <input type="hidden" id="college-select" value="${this.activeCollege}">
                            </div>
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
        this.attachCustomDropdowns();
    }

    attachCustomDropdowns() {
        // College Dropdown
        const collegeDropdown = document.getElementById('college-dropdown');
        if (collegeDropdown) {
            const toggle = document.getElementById('college-toggle');
            const menu = document.getElementById('college-menu');
            const label = document.getElementById('selected-college-label');
            const hiddenInput = document.getElementById('college-select');

            toggle.onclick = (e) => {
                e.stopPropagation();
                document.querySelectorAll('.dropdown-menu').forEach(m => {
                    if (m !== menu) m.classList.remove('show');
                });
                menu.classList.toggle('show');
                toggle.classList.toggle('active');
            };

            collegeDropdown.querySelectorAll('.dropdown-item').forEach(item => {
                item.onclick = () => {
                    const val = item.dataset.value;
                    this.activeCollege = val;
                    label.innerText = val;
                    hiddenInput.value = val;

                    collegeDropdown.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('selected'));
                    item.classList.add('selected');

                    menu.classList.remove('show');
                    toggle.classList.remove('active');
                    this.showToast(`CAMPUS_SWITCH: Active Node -> ${val}`);
                };
            });
        }

        document.addEventListener('click', () => {
            document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
            document.querySelectorAll('.dropdown-toggle').forEach(t => t.classList.remove('active'));
        });
    }

    renderView(viewName) {
        console.log(`Switching view to: ${viewName}`);
        const container = document.getElementById('view-container');
        if (!container) return;

        // Sync with renamed Analytics -> Reports and the sidebar's ReportsHub
        const finalViewName = (viewName === 'Analytics' || viewName === 'ReportsHub') ? 'Reports' : viewName;

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
            background: #ffffff;
            border: 1px solid var(--glass-border);
            border-left: 4px solid ${type === 'success' ? '#10b981' : 'var(--gold)'};
            color: #1e293b;
            padding: 15px 25px;
            border-radius: 12px;
            margin-top: 10px;
            font-size: 0.8rem;
            font-weight: 600;
            box-shadow: 0 10px 40px rgba(0,0,0,0.05);
            display: flex;
            align-items: center;
            gap: 12px;
            z-index: 10001;
        `;
        toast.innerHTML = `<i data-lucide="${type === 'success' ? 'check-circle' : 'alert-circle'}" style="width:18px; height:18px; color:${type === 'success' ? '#10b981' : 'var(--gold)'};"></i> ${message}`;
        container.appendChild(toast);
        lucide.createIcons();
        setTimeout(() => toast.remove(), 4000);
    }

    // --- Handlers ---
    handleLogin() {
        const role = document.getElementById('role-select').value;
        const btn = document.getElementById('login-trigger');

        // Visual feedback on button
        btn.innerHTML = 'VALIDATING...';
        btn.style.opacity = '0.7';
        btn.style.pointerEvents = 'none';

        setTimeout(() => {
            this.isLoggedIn = true;
            this.userRole = role;
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userRole', role);
            this.render();
            this.showToast(`Welcome back, ${role}`);
        }, 1200);
    }

    handleLogout() {
        this.isLoggedIn = false;
        localStorage.removeItem('isLoggedIn');
        this.showToast('Logged out successfully', 'warning');
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
                { msg: 'Preparing ID card...', type: 'success', delay: 0 },
                { msg: 'Encrypting files...', type: 'success', delay: 1500 },
                { msg: 'ID card downloaded successfully', type: 'success', delay: 3000 }
            ],
            'bonafide': [
                { msg: 'Verifying academic records...', type: 'success', delay: 0 },
                { msg: 'Generating certificate seal...', type: 'success', delay: 1200 },
                { msg: 'Bonafide certificate ready for download', type: 'success', delay: 2500 }
            ],
            'parent_connect': [
                { msg: 'Connecting to mobile gateway...', type: 'success', delay: 0 },
                { msg: 'Message sent to student mentor', type: 'success', delay: 1000 }
            ],
            'pay_fees': [
                { msg: 'Redirecting to payment gateway...', type: 'warning', delay: 0 },
                { msg: 'Authorizing transaction...', type: 'success', delay: 1500 },
                { msg: 'Payment successful: Transaction confirmed', type: 'success', delay: 3000 }
            ],
            'rsvp': [
                { msg: 'Processing admission RSVP...', type: 'success', delay: 0 },
                { msg: 'Seat secured: Confirmation sent to mobile', type: 'success', delay: 1200 }
            ],
            'reset_key': [
                { msg: 'Initialising security reset...', type: 'warning', delay: 0 },
                { msg: 'Regenerating access key...', type: 'warning', delay: 1500 },
                { msg: 'Password reset successful', type: 'success', delay: 3000 }
            ],
            'fee_demand': [
                { msg: 'Compiling fee registry...', type: 'success', delay: 0 },
                { msg: 'Fee demands sent to registered students', type: 'success', delay: 2000 }
            ],
            'payroll': [
                { msg: 'Authorizing payroll process...', type: 'warning', delay: 0 },
                { msg: 'Processing batch payments...', type: 'success', delay: 1800 },
                { msg: 'Payroll process complete', type: 'success', delay: 3500 }
            ],
            'rotate_pass': [
                { msg: 'Security rotation initiated...', type: 'warning', delay: 0 },
                { msg: 'Generating new passkeys...', type: 'warning', delay: 1200 },
                { msg: 'Passwords updated; notifications sent', type: 'success', delay: 2800 }
            ],
            'logout': [
                { msg: 'Logging out of session...', type: 'warning', delay: 0 },
                { msg: 'Logged out successfully', type: 'success', delay: 1500 }
            ],
            'commit_branding': [
                { msg: 'Validating branding assets...', type: 'success', delay: 0 },
                { msg: 'Syncing assets to core...', type: 'success', delay: 1500 },
                { msg: 'Branding updated successfully', type: 'success', delay: 3000 }
            ],
            'toggle_setting': [
                { msg: 'Updating system preference...', type: 'warning', delay: 0 },
                { msg: 'Preference saved successfully', type: 'success', delay: 1200 }
            ],
            'schedule_maint': [
                { msg: 'Checking maintenance schedule...', type: 'success', delay: 0 },
                { msg: 'Maintenance window scheduled', type: 'success', delay: 1800 }
            ],
            'save_prefs': [
                { msg: 'Saving layout preferences...', type: 'success', delay: 0 },
                { msg: 'Workspace settings synced', type: 'success', delay: 1500 }
            ],
            'upload_logo': [
                { msg: 'Uploading school emblem...', type: 'warning', delay: 0 },
                { msg: 'Emblem submitted for approval', type: 'success', delay: 1000 }
            ],
            'publish_results': [
                { msg: 'Validating marks registry...', type: 'warning', delay: 0 },
                { msg: 'Generating grade sheets...', type: 'success', delay: 1500 },
                { msg: 'Exam results published; students notified', type: 'success', delay: 3000 }
            ],
            'gen_payslip': [
                { msg: 'Compiling payroll data...', type: 'warning', delay: 0 },
                { msg: 'Encrypting payslips...', type: 'success', delay: 1500 },
                { msg: 'Payslips exported; 1,250 records ready', type: 'success', delay: 3000 }
            ],
            'leave_approve': [
                { msg: 'Checking leave balance...', type: 'warning', delay: 0 },
                { msg: 'Leave approved; balance updated', type: 'success', delay: 1500 }
            ],
            'leave_reject': [
                { msg: 'Leave request declined; notification sent', type: 'warning', delay: 0 }
            ],
            'fee_demand_gen': [
                { msg: 'Scanning student accounts...', type: 'warning', delay: 0 },
                { msg: 'Generating demand notices...', type: 'success', delay: 1800 },
                { msg: 'Fee notices sent to 10,245 students', type: 'success', delay: 3500 }
            ],
            'add_program': [
                { msg: 'Initialising new program...', type: 'success', delay: 0 },
                { msg: 'Program created; pending HOD approval', type: 'success', delay: 1500 }
            ],
            'add_course': [
                { msg: 'Course created; pending faculty assignment', type: 'success', delay: 0 }
            ],
            'publish_course': [
                { msg: 'Validating course details...', type: 'warning', delay: 0 },
                { msg: 'Course published; now visible in timetable', type: 'success', delay: 1500 }
            ],
            'convert_applicant': [
                { msg: 'Verifying applicant profile...', type: 'warning', delay: 0 },
                { msg: 'Creating student record...', type: 'success', delay: 1500 },
                { msg: 'Enrollment complete: Student ID #10246 created', type: 'success', delay: 3000 }
            ],
            'send_notice': [
                { msg: 'Drafting attendance notice...', type: 'warning', delay: 0 },
                { msg: 'Notice sent to student and parent', type: 'success', delay: 1500 }
            ],
            'mark_all_present': [
                { msg: 'Updating attendance register...', type: 'success', delay: 0 },
                { msg: 'Attendance marked: All students present', type: 'success', delay: 1200 }
            ],
            'init_audit': [
                { msg: 'Submitting audit request...', type: 'warning', delay: 0 },
                { msg: 'Internal audit scheduled successfully', type: 'success', delay: 2000 }
            ],
            'payroll_run': [
                { msg: 'Validating payroll entries...', type: 'warning', delay: 0 },
                { msg: 'Payroll cycle started; processing...', type: 'success', delay: 1800 },
                { msg: 'Payroll run complete: February 2026 closed', type: 'success', delay: 3500 }
            ],
            'doc_verify': [
                { msg: 'Processing documents...', type: 'warning', delay: 0 },
                { msg: 'Scanning files for verification...', type: 'success', delay: 1200 },
                { msg: 'Verification complete: Status updated to Verified', type: 'success', delay: 2600 }
            ],
            'seat_offer': [
                { msg: 'Checking seat availability...', type: 'warning', delay: 0 },
                { msg: 'Seat allocated; offer letter sent', type: 'success', delay: 1800 }
            ],
            'run_audit': [
                { msg: 'Generating compliance audit...', type: 'warning', delay: 0 },
                { msg: 'Scanning regulatory records...', type: 'success', delay: 1500 },
                { msg: 'Compliance audit complete; report ready', type: 'success', delay: 3000 }
            ],
            'view_ledger': [
                { msg: 'Fetching student financial ledger...', type: 'success', delay: 0 },
                { msg: 'Ledger synchronized successfully', type: 'success', delay: 1500 }
            ],
            'trigger_reminders': [
                { msg: 'Compiling defaulter list...', type: 'warning', delay: 0 },
                { msg: 'Payment reminders sent to students', type: 'success', delay: 2000 }
            ],
            'halt_admit_cards': [
                { msg: 'Suspending admit card downloads...', type: 'warning', delay: 0 },
                { msg: 'Downloads halted for target records', type: 'success', delay: 1500 }
            ],
            'reconcile_selected': [
                { msg: 'Starting bulk reconciliation...', type: 'warning', delay: 0 },
                { msg: 'Synchronizing transactions...', type: 'success', delay: 1800 },
                { msg: 'Bulk reconciliation complete', type: 'success', delay: 3500 }
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
            if (window.innerWidth > 768) {
                document.querySelector('.app-shell').classList.toggle('sidebar-hidden');
            } else {
                sidebar.classList.contains('sidebar-open') ? closeSidebar() : openSidebar();
            }
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
