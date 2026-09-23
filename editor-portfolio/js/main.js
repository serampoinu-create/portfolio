// Main Interactive App Logic
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  renderProfileData();
  renderSkills();
  initModalEvents();
  initCopyEmail();
  initMobileDropdown();
});

/* -------------------------------------------------------------------------- */
/* Theme Switcher                                                             */
/* -------------------------------------------------------------------------- */
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('editor_portfolio_theme') || 'dark';
  
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('editor_portfolio_theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (toggleBtn) {
    toggleBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
  }
}

/* -------------------------------------------------------------------------- */
/* Profile & Hero Data Hydration                                             */
/* -------------------------------------------------------------------------- */
function renderProfileData() {
  const p = PORTFOLIO_DATA.profile;
  
  document.getElementById('heroName').textContent = p.name;
  document.getElementById('heroRole').textContent = p.role;
  document.getElementById('heroHeadline').innerHTML = `Transforming raw media into <span>compelling stories</span>.`;
  document.getElementById('heroBio').textContent = p.bio;

  // Render Metrics Bar
  const metricsContainer = document.getElementById('metricsBar');
  if (metricsContainer) {
    metricsContainer.innerHTML = p.metrics.map(m => `
      <div class="metric-item">
        <div class="metric-val">${m.value}</div>
        <div class="metric-label">${m.label}</div>
      </div>
    `).join('');
  }
}

/* -------------------------------------------------------------------------- */
/* Projects Gallery & Filtering                                              */
/* -------------------------------------------------------------------------- */
function renderProjects(category) {
  const container = document.getElementById('projectsGrid');
  if (!container) return;

  const filtered = category === 'all' 
    ? PORTFOLIO_DATA.projects 
    : PORTFOLIO_DATA.projects.filter(proj => proj.category === category);

  container.innerHTML = filtered.map(proj => `
    <article class="project-card" onclick="openCaseStudy('${proj.id}')">
      <div class="project-thumb">
        <img src="${proj.image}" alt="${proj.title}" class="project-img" loading="lazy" />
        <span class="project-overlay-badge">${proj.subcategory}</span>
        <span class="project-metric-badge">${proj.metric}</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-summary">${proj.summary}</p>
        <div class="project-tags">
          ${proj.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
        </div>
        <div class="project-footer">
          <span>${proj.duration} • ${proj.views}</span>
          <span>View Case Study →</span>
        </div>
      </div>
    </article>
  `).join('');
}

function initFilterButtons() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      buttons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const cat = e.target.dataset.filter;
      renderProjects(cat);
    });
  });
}

/* -------------------------------------------------------------------------- */
/* Interactive Before & After Slider & Switcher                               */
/* -------------------------------------------------------------------------- */
function initBeforeAfterSlider() {
  const sliderWrapper = document.getElementById('baSliderWrapper');
  const afterImgBox = document.getElementById('baAfterBox');
  const sliderHandle = document.getElementById('baHandle');

  if (!sliderWrapper || !afterImgBox || !sliderHandle) return;

  let isDragging = false;

  const setPosition = (clientX) => {
    const rect = sliderWrapper.getBoundingClientRect();
    let x = clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;

    const percentage = (x / rect.width) * 100;
    afterImgBox.style.width = `${percentage}%`;
    sliderHandle.style.left = `${percentage}%`;
  };

  sliderWrapper.addEventListener('mousedown', (e) => {
    isDragging = true;
    setPosition(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    setPosition(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch Support for Mobile / Tablet
  sliderWrapper.addEventListener('touchstart', (e) => {
    isDragging = true;
    setPosition(e.touches[0].clientX);
  });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    setPosition(e.touches[0].clientX);
  });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });
}

function initBeforeAfterTabs() {
  const tabs = document.querySelectorAll('.ba-tab-btn');
  const videoView = document.getElementById('baVideoView');
  const copyView = document.getElementById('baCopyView');
  const insightsBox = document.getElementById('baInsightsBox');

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      
      const type = e.target.dataset.batype;
      const caseData = PORTFOLIO_DATA.beforeAfterCases.find(c => c.type === type);

      if (type === 'video') {
        videoView.style.display = 'block';
        copyView.style.display = 'none';
      } else {
        videoView.style.display = 'none';
        copyView.style.display = 'grid';
      }

      if (caseData && insightsBox) {
        insightsBox.innerHTML = caseData.details.map(d => `
          <div class="insight-card">
            <strong>Checkmark Polish:</strong> ${d}
          </div>
        `).join('');
      }
    });
  });
}

/* -------------------------------------------------------------------------- */
/* Skills & Testimonials Renderers                                           */
/* -------------------------------------------------------------------------- */
function renderSkills() {
  const container = document.getElementById('skillsGrid');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.skills.map(s => `
    <div class="skill-card">
      <div class="skill-icon">${s.icon}</div>
      <div class="skill-info">
        <h4>${s.name}</h4>
        <p>${s.category} • <strong>${s.level}</strong></p>
      </div>
    </div>
  `).join('');
}

function renderTestimonials() {
  const container = document.getElementById('testimonialsGrid');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.testimonials.map(t => `
    <div class="testimonial-card">
      <p class="testimonial-quote">"${t.quote}"</p>
      <div>
        <div class="testimonial-author">${t.author}</div>
        <div class="testimonial-role">${t.role}</div>
      </div>
    </div>
  `).join('');
}

/* -------------------------------------------------------------------------- */
/* Case Study Detail Modal                                                    */
/* -------------------------------------------------------------------------- */
function openCaseStudy(projectId) {
  const proj = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!proj) return;

  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalBody = document.getElementById('modalBody');

  modalBody.innerHTML = `
    <span class="project-overlay-badge" style="position:static; display:inline-block; margin-bottom:1rem;">${proj.subcategory}</span>
    <h2 style="font-size: 2rem; margin-bottom:0.5rem;">${proj.title}</h2>
    <p style="color:var(--accent-amber); font-weight:600; margin-bottom:1.5rem;">Client: ${proj.client} | Impact: ${proj.metric}</p>
    
    <img src="${proj.image}" alt="${proj.title}" style="width:100%; height:360px; object-fit:cover; border-radius:var(--radius-md); margin-bottom:1.5rem;" />
    
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1.5rem; margin-bottom:1.5rem;">
      <div style="background:var(--bg-surface); padding:1.2rem; border-radius:var(--radius-sm);">
        <h4 style="color:var(--accent-amber); margin-bottom:0.4rem;">The Challenge</h4>
        <p style="font-size:0.9rem; color:var(--text-secondary);">${proj.challenge}</p>
      </div>
      <div style="background:var(--bg-surface); padding:1.2rem; border-radius:var(--radius-sm);">
        <h4 style="color:var(--accent-emerald); margin-bottom:0.4rem;">Creative Direction</h4>
        <p style="font-size:0.9rem; color:var(--text-secondary);">${proj.creativeApproach}</p>
      </div>
    </div>

    <h3 style="font-size:1.2rem; margin-bottom:0.75rem;">Tools & Software Stack</h3>
    <div class="project-tags" style="margin-bottom:1.5rem;">
      ${proj.tools.map(t => `<span class="tag-pill" style="background:var(--bg-surface); font-size:0.85rem; padding:0.4rem 0.8rem; color:var(--text-primary);">${t}</span>`).join('')}
    </div>

    <h3 style="font-size:1.2rem; margin-bottom:0.75rem;">Deliverables Included</h3>
    <ul style="list-style: square; padding-left:1.2rem; color:var(--text-secondary); line-height:1.8;">
      ${proj.deliverables.map(d => `<li>${d}</li>`).join('')}
    </ul>
  `;

  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function initModalEvents() {
  const modalBackdrop = document.getElementById('modalBackdrop');
  const closeBtn = document.getElementById('modalCloseBtn');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function closeModal() {
  const modalBackdrop = document.getElementById('modalBackdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

/* -------------------------------------------------------------------------- */
/* Direct Copy Email Functionality                                            */
/* -------------------------------------------------------------------------- */
function initCopyEmail() {
  const copyBtn = document.getElementById('copyEmailBtn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = PORTFOLIO_DATA.profile.email;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
    }
  });
}

/* -------------------------------------------------------------------------- */
/* Mobile Dropdown Menu Logic                                                 */
/* -------------------------------------------------------------------------- */
function initMobileDropdown() {
  const dropdownBtn = document.getElementById('mobileDropdownBtn');
  const dropdownMenu = document.getElementById('mobileDropdownMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (!dropdownBtn || !dropdownMenu) return;

  dropdownBtn.onclick = function(e) {
    e.preventDefault();
    e.stopPropagation();
    dropdownBtn.classList.toggle('active');
    dropdownMenu.classList.toggle('active');
  };

  mobileNavLinks.forEach(link => {
    link.onclick = function() {
      dropdownBtn.classList.remove('active');
      dropdownMenu.classList.remove('active');
    };
  });

  document.onclick = function(e) {
    if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownBtn.classList.remove('active');
      dropdownMenu.classList.remove('active');
    }
  };
}
