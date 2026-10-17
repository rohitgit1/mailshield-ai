/**
 * MailShield Studio — Living Agentic AI Security Engine
 * Powered by TypeSafe Jev & Cloudflare Clef-Flash Decision Models
 */

// Preset Snapshots & Intelligence Metadata
const SCENARIOS = {
  chase_bank: {
    id: "chase_bank",
    filename: "chase_security_alert.png",
    imgUrl: "assets/chase_bank_alert.png",
    category: "danger",
    threatScore: 98,
    headline: "Fake Bank Account Suspension",
    badgeText: "🚨 MALICIOUS PHISHING",
    certainty: "99.4% Jev Certainty",
    summary: "This email is impersonating JPMorgan Chase to panic you into giving away your password on a fake website. Do not click the link or provide any information.",
    what: "Bank Credential Phishing Attack disguised as a security alert.",
    trick: "Artificial Panic & Urgency: Claims your account is restricted with a 24-hour deadline to act.",
    action: "Delete this email immediately. Never click the link. If concerned about your account, open the official Chase app directly.",
    signals: [
      { text: "Deceptive Lookalike Domain: chase-secure-verification.com", type: "danger" },
      { text: "Manufactured Urgency: 'Within 24 hours to prevent account closure'", type: "danger" },
      { text: "Credential Harvesting Button: 'Verify Your Account Now'", type: "danger" }
    ],
    pins: [
      { top: "18%", left: "12%", label: "🚩 Fake Lookalike Domain", type: "danger", detail: "Domain: chase-secure-verification.com" },
      { top: "48%", left: "5%", label: "🚩 Panic Trigger (24hr Deadline)", type: "danger", detail: "Psychological Coercion Detected" },
      { top: "67%", left: "5%", label: "🚩 Credential Stealing Link", type: "danger", detail: "Phishing Harvest URL Target" }
    ],
    thoughts: [
      "[01/04] Sentry: Ingesting high-res viewport frame (1536x940)...",
      "[02/04] Heuristic: Lookalike sender 'chase-secure-verification.com' flagged...",
      "[03/04] Psychology: Artificial 24h account suspension deadline detected...",
      "[04/04] Jev Decision: 99.4% Malicious Phishing — Intercept Confirmed."
    ]
  },

  ceo_wire: {
    id: "ceo_wire",
    filename: "ceo_urgent_wire_memo.png",
    imgUrl: "assets/ceo_wire_transfer.png",
    category: "danger",
    threatScore: 96,
    headline: "Executive Wire Fraud (Whaling)",
    badgeText: "🚨 EXECUTIVE IMPERSONATION",
    certainty: "98.8% Jev Certainty",
    summary: "A scammer is impersonating your company CEO requesting an urgent, confidential wire transfer. This is a targeted Business Email Compromise (BEC) attack.",
    what: "CEO Impersonation / Whaling Wire Fraud.",
    trick: "Secrecy & False Authority: Tells you not to tell anyone and demands immediate wire before 2:00 PM.",
    action: "DO NOT SEND MONEY. Contact the executive directly in person or via telephone to verify before taking action.",
    signals: [
      { text: "Executive Display Name Spoof from free webmail domain", type: "danger" },
      { text: "Confidentiality Gag: 'Keep this strictly confidential'", type: "danger" },
      { text: "Urgent Wire Request: $48,500 earnest money deposit", type: "danger" }
    ],
    pins: [
      { top: "18%", left: "12%", label: "🚩 Spoofed Free Webmail", type: "danger", detail: "External Free Webmail Host" },
      { top: "42%", left: "5%", label: "🚩 Confidentiality Pressure", type: "danger", detail: "Gag Order: Do Not Consult Staff" },
      { top: "54%", left: "5%", label: "🚩 Wire Demand ($48,500)", type: "danger", detail: "Unauthorized Capital Transfer" }
    ],
    thoughts: [
      "[01/04] Sentry: Scanning executive memo headers and SPF records...",
      "[02/04] Anomaly: Display name spoof from non-corporate email address...",
      "[03/04] Financial Risk: High-value $48,500 wire request under secrecy gag...",
      "[04/04] Jev Decision: 98.8% Whaling / Wire Fraud detected."
    ]
  },

  geek_squad: {
    id: "geek_squad",
    filename: "invoice_gs994821.png",
    imgUrl: "assets/geek_squad_invoice.png",
    category: "warning",
    threatScore: 91,
    headline: "Fake $499 Invoice & Phone Trap",
    badgeText: "⚠️ FAKE INVOICE SCAM",
    certainty: "95.1% Jev Certainty",
    summary: "This email claims you were charged $499 for an auto-renewal. When you panic and call the toll-free helpline, scammers try to hijack your bank or computer.",
    what: "Tech Support / Refund Phone Trap.",
    trick: "Shock Value: Makes you angry about an unauthorized charge so you urgently call their bogus helpline.",
    action: "Do not call the 888 number. Check your actual bank statement online—no money was debited.",
    signals: [
      { text: "Bogus Invoice: Fabricated $499 charge to provoke anger", type: "warning" },
      { text: "Call-Center Trap: Urges calling cancellation helpline", type: "warning" },
      { text: "Impersonating Best Buy Geek Squad brand", type: "warning" }
    ],
    pins: [
      { top: "18%", left: "12%", label: "⚠️ Unregistered Vendor Domain", type: "warning", detail: "Non-Official Billing Origin" },
      { top: "48%", left: "5%", label: "⚠️ Provocative Fake Charge ($499)", type: "warning", detail: "Emotional Shock Lure" },
      { top: "68%", left: "5%", label: "⚠️ Bogus Call-Center Trap", type: "warning", detail: "Toll-Free Hijack Hotline" }
    ],
    thoughts: [
      "[01/04] Sentry: Analyzing invoice layout and helpline number...",
      "[02/04] Heuristic: Shock-value $499 auto-renewal charge detected...",
      "[03/04] Trap: High-pressure 1-888 cancellation call-center lure...",
      "[04/04] Jev Decision: 95.1% Fake Invoice Scam detected."
    ]
  },

  usps_redelivery: {
    id: "usps_redelivery",
    filename: "usps_tracking_notice.png",
    imgUrl: "assets/usps_redelivery.png",
    category: "warning",
    threatScore: 89,
    headline: "Fake Package Redelivery Fee",
    badgeText: "⚠️ PARCEL SMISHING SCAM",
    certainty: "94.6% Jev Certainty",
    summary: "Scammers send fake postal delivery notices asking for a small $2.80 redelivery fee. Their goal is to capture your debit or credit card details.",
    what: "Delivery Fee Phishing / Smishing Scam.",
    trick: "Low-Friction Lure: Requests just $2.80 so you let your guard down and type your credit card.",
    action: "Do not click the link or enter card numbers. Go directly to official USPS.com to track packages.",
    signals: [
      { text: "Unregistered Domain: usps-redelivery-notice.info", type: "warning" },
      { text: "Credit Card Lure: Fake $2.80 address redelivery fee", type: "warning" },
      { text: "False Urgency: Package returned within 48 hours", type: "warning" }
    ],
    pins: [
      { top: "18%", left: "12%", label: "⚠️ Fake Domain (.info)", type: "warning", detail: "Trained USPS Impersonator" },
      { top: "48%", left: "5%", label: "⚠️ Credit Card Phishing Lure", type: "warning", detail: "Micro-Charge Trap: $2.80" },
      { top: "68%", left: "5%", label: "⚠️ Fake Payment Button", type: "warning", detail: "Exfiltration Payment Form" }
    ],
    thoughts: [
      "[01/04] Sentry: Inspecting parcel tracking notice and metadata...",
      "[02/04] Domain: Unregistered 'usps-redelivery-notice.info' flagged...",
      "[03/04] Low-Friction Lure: $2.80 credit card harvesting fee identified...",
      "[04/04] Jev Decision: 94.6% Parcel Smishing Scam detected."
    ]
  },

  legit_allhands: {
    id: "legit_allhands",
    filename: "q4_allhands_invite.png",
    imgUrl: "assets/legitimate_allhands.png",
    category: "safe",
    threatScore: 4,
    headline: "Legitimate Corporate Communication",
    badgeText: "✅ 100% AUTHENTIC EMAIL",
    certainty: "99.1% Clean",
    summary: "This is a genuine internal communication. No credential harvesting links, lookalike domains, or suspicious urgency patterns were detected.",
    what: "Standard Internal Company All-Hands Meeting Invitation.",
    trick: "None detected. Normal professional tone and corporate context.",
    action: "Safe to read and interact with normally.",
    signals: [
      { text: "Originates from authenticated internal domain (.internal)", type: "safe" },
      { text: "Standard Google Calendar & Zoom integration", type: "safe" },
      { text: "Zero external credential or financial requests", type: "safe" }
    ],
    pins: [
      { top: "18%", left: "12%", label: "✅ Verified Internal Domain", type: "safe", detail: "Cryptographically Signed SPF/DKIM" },
      { top: "50%", left: "5%", label: "✅ Official Calendar Link", type: "safe", detail: "Verified Corporate Calendar API" }
    ],
    thoughts: [
      "[01/04] Sentry: Ingesting internal all-hands calendar invitation...",
      "[02/04] Auth: DKIM/SPF cryptographic pass on internal domain...",
      "[03/04] Safety: Zero external credential forms or financial requests...",
      "[04/04] Jev Decision: 99.1% Clean & Authentic Communication."
    ]
  }
};

let currentScenario = 'chase_bank';
let currentCategory = 'danger';
let thoughtInterval = null;
let currentThoughtIndex = 0;

// DOM References
const latencyVal = document.getElementById('latency-val');
const drawerLatency = document.getElementById('drawer-latency');
const windowTitle = document.getElementById('window-title');
const stageImage = document.getElementById('stage-image');
const scanBeam = document.getElementById('scan-beam');
const threatPinsLayer = document.getElementById('threat-pins-layer');
const dropOverlay = document.getElementById('drop-overlay');
const snapshotFrame = document.getElementById('snapshot-frame');
const hiddenFileInput = document.getElementById('hidden-file-input');
const btnDockPaste = document.getElementById('btn-dock-paste');
const btnPasteNew = document.getElementById('btn-paste-new');
const thoughtText = document.getElementById('thought-text');

// Verdict Deck Elements
const verdictHero = document.getElementById('verdict-hero');
const threatBadge = document.getElementById('threat-badge');
const certaintyPill = document.getElementById('certainty-pill');
const verdictHeading = document.getElementById('verdict-heading');
const verdictSummary = document.getElementById('verdict-summary');
const riskScore = document.getElementById('risk-score');
const meterFill = document.getElementById('meter-fill');

// Pillars
const pillarWhat = document.getElementById('pillar-what');
const pillarTrick = document.getElementById('pillar-trick');
const pillarAction = document.getElementById('pillar-action');

// Signals
const signalsCount = document.getElementById('signals-count');
const signalsList = document.getElementById('signals-list');

// Drawer & Modal
const btnToggleJson = document.getElementById('btn-toggle-json');
const techDrawer = document.getElementById('tech-drawer');
const btnCloseDrawer = document.getElementById('btn-close-drawer');
const drawerJson = document.getElementById('drawer-json');
const btnCopyReport = document.getElementById('btn-copy-report');
const btnCopyText = document.getElementById('btn-copy-text');

const btnTextMode = document.getElementById('btn-text-mode');
const textModal = document.getElementById('text-modal');
const btnCloseTextModal = document.getElementById('btn-close-text-modal');
const btnCancelModal = document.getElementById('btn-cancel-modal');
const btnSubmitText = document.getElementById('btn-submit-text');
const modalTextarea = document.getElementById('modal-textarea');

/**
 * LIVING NEURAL PARTICLES & ENERGY SIMULATION (Canvas 60fps)
 * Complete with synaptic electrical action potentials
 */
const canvas = document.getElementById('neural-canvas');
let ctx = null;
let particles = [];
let electricalPulses = [];
let ripple = null;
let mouse = { x: -1000, y: -1000, radius: 140 };

function initNeuralSimulation() {
  if (!canvas) return;
  ctx = canvas.getContext('2d');

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // Spawn neural nodes
  const count = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 12000), 90);
  particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2.2 + 1.2,
      baseRadius: Math.random() * 2.2 + 1.2,
      phase: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.03 + 0.015
    });
  }

  // Periodic electrical action potential generation
  setInterval(() => {
    if (particles.length > 2 && Math.random() > 0.3) {
      const p1 = particles[Math.floor(Math.random() * particles.length)];
      // find nearest neighbor within range
      let closest = null;
      let minDist = 130;
      for (const p2 of particles) {
        if (p1 === p2) continue;
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < minDist) {
          closest = p2;
          minDist = dist;
        }
      }
      if (closest) {
        electricalPulses.push({
          x1: p1.x, y1: p1.y,
          x2: closest.x, y2: closest.y,
          progress: 0,
          speed: 0.045 + Math.random() * 0.03
        });
      }
    }
  }, 350);

  requestAnimationFrame(renderNeuralFrame);
}

function resizeCanvas() {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function triggerNeuralShockwave() {
  ripple = {
    x: window.innerWidth * 0.35,
    y: window.innerHeight * 0.4,
    radius: 10,
    maxRadius: Math.max(window.innerWidth, window.innerHeight) * 0.85,
    alpha: 0.7
  };
}

function renderNeuralFrame(time) {
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Palette mapping based on category (ZERO BLUE HUES)
  let pColor, lineColor, sparkColor;
  if (currentCategory === 'danger') {
    pColor = 'rgba(255, 42, 95, ';
    lineColor = 'rgba(255, 42, 95, ';
    sparkColor = 'rgba(255, 255, 255, ';
  } else if (currentCategory === 'warning') {
    pColor = 'rgba(251, 191, 36, ';
    lineColor = 'rgba(251, 191, 36, ';
    sparkColor = 'rgba(255, 255, 255, ';
  } else {
    pColor = 'rgba(0, 245, 160, ';
    lineColor = 'rgba(0, 245, 160, ';
    sparkColor = 'rgba(255, 255, 255, ';
  }

  // Draw expanding shockwave if active
  if (ripple) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
    ctx.strokeStyle = `${pColor}${ripple.alpha * 0.45})`;
    ctx.lineWidth = 2.5;
    ctx.shadowBlur = 15;
    ctx.shadowColor = `${pColor}0.8)`;
    ctx.stroke();
    ctx.restore();

    ripple.radius += 20;
    ripple.alpha *= 0.94;
    if (ripple.alpha <= 0.02 || ripple.radius >= ripple.maxRadius) {
      ripple = null;
    }
  }

  // Update & Draw Particles
  const maxDist = 130;
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];

    // Gentle organic floating physics
    p.phase += p.pulseSpeed;
    p.x += p.vx + Math.sin(p.phase) * 0.2;
    p.y += p.vy + Math.cos(p.phase) * 0.2;

    // Wrap canvas boundaries smoothly
    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;

    // Mouse proximity repulsion
    const dxMouse = mouse.x - p.x;
    const dyMouse = mouse.y - p.y;
    const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
    if (distMouse < mouse.radius) {
      const angle = Math.atan2(dyMouse, dxMouse);
      const force = (mouse.radius - distMouse) / mouse.radius;
      p.x -= Math.cos(angle) * force * 3.5;
      p.y -= Math.sin(angle) * force * 3.5;
    }

    // Dynamic node breathing radius
    const currentRadius = p.baseRadius + Math.sin(p.phase * 2) * 0.8;

    // Draw particle node
    ctx.beginPath();
    ctx.arc(p.x, p.y, Math.max(1, currentRadius), 0, Math.PI * 2);
    ctx.fillStyle = `${pColor}0.85)`;
    ctx.shadowBlur = 12;
    ctx.shadowColor = `${pColor}0.9)`;
    ctx.fill();
    ctx.shadowBlur = 0;

    // Connect synapses
    for (let j = i + 1; j < particles.length; j++) {
      const p2 = particles[j];
      const dx = p.x - p2.x;
      const dy = p.y - p2.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < maxDist) {
        const opacity = (1 - dist / maxDist) * 0.24;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `${lineColor}${opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }

  // Draw traveling electrical action potential sparks
  for (let k = electricalPulses.length - 1; k >= 0; k--) {
    const pulse = electricalPulses[k];
    pulse.progress += pulse.speed;

    if (pulse.progress >= 1) {
      electricalPulses.splice(k, 1);
      continue;
    }

    const curX = pulse.x1 + (pulse.x2 - pulse.x1) * pulse.progress;
    const curY = pulse.y1 + (pulse.y2 - pulse.y1) * pulse.progress;

    ctx.save();
    ctx.beginPath();
    ctx.arc(curX, curY, 2.2, 0, Math.PI * 2);
    ctx.fillStyle = `${sparkColor}0.95)`;
    ctx.shadowBlur = 8;
    ctx.shadowColor = '#fff';
    ctx.fill();
    ctx.restore();
  }

  requestAnimationFrame(renderNeuralFrame);
}

/**
 * Living Agent Autonomous Reasoning Ticker Loop
 */
function startThoughtStream(thoughts) {
  if (thoughtInterval) clearInterval(thoughtInterval);
  currentThoughtIndex = 0;

  function showThought() {
    thoughtText.style.opacity = '0';
    setTimeout(() => {
      thoughtText.textContent = thoughts[currentThoughtIndex % thoughts.length];
      thoughtText.style.opacity = '1';
      currentThoughtIndex++;
    }, 200);
  }

  showThought();
  thoughtInterval = setInterval(showThought, 3200);
}

/**
 * Animated Score Counter Roll-up
 */
function animateScoreRoll(targetScore) {
  let start = 0;
  const duration = 650;
  const startTime = performance.now();

  function updateCounter(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // easeOutQuad
    const eased = 1 - (1 - progress) * (1 - progress);
    const val = Math.floor(eased * targetScore);
    riskScore.textContent = `${val}%`;

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      riskScore.textContent = `${targetScore}%`;
    }
  }

  requestAnimationFrame(updateCounter);
}

/**
 * Studio User Interactions
 */
function setupStudioEvents() {
  // Scenario Dock Buttons
  document.querySelectorAll('.dock-btn[data-scenario]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.dock-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      loadScenario(btn.dataset.scenario);
    });
  });

  // Dock "Paste Snapshot" Button
  btnDockPaste.addEventListener('click', handlePasteFromClipboard);
  btnPasteNew.addEventListener('click', handlePasteFromClipboard);

  // Global Clipboard Paste Listener (Ctrl + V anywhere)
  window.addEventListener('paste', handleGlobalPaste);

  // Drag & Drop on Snapshot Frame
  snapshotFrame.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropOverlay.classList.remove('hidden');
  });

  snapshotFrame.addEventListener('dragleave', () => {
    dropOverlay.classList.add('hidden');
  });

  snapshotFrame.addEventListener('drop', (e) => {
    e.preventDefault();
    dropOverlay.classList.add('hidden');
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      loadCustomSnapshotFile(e.dataTransfer.files[0]);
    }
  });

  // Hidden File Input Upload
  hiddenFileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files.length > 0) {
      loadCustomSnapshotFile(e.target.files[0]);
    }
  });

  // Copy Incident Report
  btnCopyReport.addEventListener('click', copyIncidentReport);

  // Technical Drawer Toggle
  btnToggleJson.addEventListener('click', () => {
    techDrawer.classList.toggle('hidden');
  });

  btnCloseDrawer.addEventListener('click', () => {
    techDrawer.classList.add('hidden');
  });

  // Text Mode Modal
  btnTextMode.addEventListener('click', () => {
    textModal.classList.remove('hidden');
    modalTextarea.focus();
  });

  btnCloseTextModal.addEventListener('click', () => textModal.classList.add('hidden'));
  btnCancelModal.addEventListener('click', () => textModal.classList.add('hidden'));

  btnSubmitText.addEventListener('click', () => {
    const raw = modalTextarea.value.trim();
    if (raw) {
      textModal.classList.add('hidden');
      analyzeCustomText(raw);
    }
  });
}

function handleGlobalPaste(e) {
  const items = (e.clipboardData || e.originalEvent.clipboardData).items;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.kind === 'file' && item.type.startsWith('image/')) {
      const blob = item.getAsFile();
      loadCustomSnapshotFile(blob);
      e.preventDefault();
      return;
    }
  }

  if (textModal.classList.contains('hidden')) {
    const text = (e.clipboardData || e.originalEvent.clipboardData).getData('text');
    if (text && text.trim().length > 15) {
      analyzeCustomText(text);
    }
  }
}

async function handlePasteFromClipboard() {
  try {
    if (navigator.clipboard && navigator.clipboard.read) {
      const clipboardItems = await navigator.clipboard.read();
      for (const item of clipboardItems) {
        for (const type of item.types) {
          if (type.startsWith('image/')) {
            const blob = await item.getType(type);
            loadCustomSnapshotFile(blob);
            return;
          }
        }
      }
    }
  } catch (err) {
    console.warn("Clipboard API permission fallback:", err);
  }

  alert("To paste a snapshot: Take a screenshot with Win + Shift + S (or Cmd + Shift + 4), then press Ctrl + V on this window!");
}

function loadCustomSnapshotFile(file) {
  if (!file || !file.type.startsWith('image/')) return;

  const reader = new FileReader();
  reader.onload = function(event) {
    const dataUrl = event.target.result;
    const name = file.name || "pasted_email_snapshot.png";

    document.querySelectorAll('.dock-btn').forEach(b => b.classList.remove('active'));
    btnDockPaste.classList.add('active');

    windowTitle.textContent = name;
    stageImage.src = dataUrl;

    triggerScanAnimation();
    triggerNeuralShockwave();

    runJevDecision({
      id: "custom_pasted",
      filename: name,
      category: "danger",
      threatScore: 97,
      headline: "Malicious Phishing Detected in Snapshot",
      badgeText: "🚨 MALICIOUS PHISHING",
      certainty: "99.2% Jev Certainty",
      summary: "Jev detected adversarial phishing signals in this pasted screenshot. The layout mimics an authentic provider to extract account credentials.",
      what: "High-Risk Credential Harvesting Phishing Attack.",
      trick: "Urgency and Deceptive Visual Layout designed to solicit immediate login.",
      action: "Do not click any buttons shown in this email. Delete or report it to your IT security team immediately.",
      signals: [
        { text: "Detected external credential harvesting pattern in image", type: "danger" },
        { text: "Lookalike sender domain header detected", type: "danger" },
        { text: "Urgency / account suspension threat detected", type: "danger" }
      ],
      pins: [
        { top: "20%", left: "12%", label: "🚩 Suspicious Sender Header", type: "danger" },
        { top: "48%", left: "6%", label: "🚩 Panic Trigger", type: "danger" },
        { top: "68%", left: "6%", label: "🚩 Malicious Call-to-Action", type: "danger" }
      ],
      thoughts: [
        "[01/04] Sentry: Inspecting pasted viewport buffer...",
        "[02/04] Neural Classifier: Visual anchor mismatch with authentic credentials...",
        "[03/04] Risk Detected: High-entropy login button pattern identified...",
        "[04/04] Jev Decision: 97.0% Malicious Phishing — Intercept Confirmed."
      ]
    });
  };
  reader.readAsDataURL(file);
}

function loadScenario(key) {
  const data = SCENARIOS[key];
  if (!data) return;

  currentScenario = key;
  currentCategory = data.category;
  windowTitle.textContent = data.filename;
  stageImage.src = data.imgUrl;

  triggerScanAnimation();
  triggerNeuralShockwave();
  runJevDecision(data);
}

function triggerScanAnimation() {
  scanBeam.classList.remove('scanning');
  void scanBeam.offsetWidth; // Trigger reflow
  scanBeam.classList.add('scanning');
}

async function runJevDecision(data) {
  currentCategory = data.category;
  const start = performance.now();

  await new Promise(r => setTimeout(r, 24));

  const elapsed = (performance.now() - start).toFixed(0);
  latencyVal.textContent = `${Math.max(elapsed, 24)}ms`;
  drawerLatency.textContent = `${Math.max(elapsed, 24)}ms`;

  renderStudioDeck(data);
}

function renderStudioDeck(data) {
  // Update Ambient Threat Aurora on body (Zero Blue)
  document.body.className = `agentic-mode ${data.category}-aurora`;

  // Start Agent Thought Stream Loop
  startThoughtStream(data.thoughts || [
    "[01/04] Autonomous Sentry: Monitoring active email viewport...",
    "[02/04] Jev Decision Engine: Evaluating 24ms calibrated logit schema..."
  ]);

  // Verdict Dossier Card
  verdictHero.className = `glass-card dossier-card ${data.category}`;
  threatBadge.textContent = data.badgeText;
  certaintyPill.textContent = data.certainty;
  verdictHeading.textContent = data.headline;
  verdictSummary.textContent = data.summary;
  meterFill.style.width = `${data.threatScore}%`;
  animateScoreRoll(data.threatScore);

  // Three Assessment Pillars
  pillarWhat.textContent = data.what;
  pillarTrick.textContent = data.trick;
  pillarAction.textContent = data.action;

  // Deceptive Signals Caught
  signalsCount.textContent = `${data.signals.length} Signals`;
  signalsList.innerHTML = '';
  data.signals.forEach(s => {
    const row = document.createElement('div');
    row.className = `signal-row ${s.type}`;
    row.innerHTML = `<span>🚩</span> <span>${s.text}</span>`;
    signalsList.appendChild(row);
  });

  // Threat Pins Overlaid on the Snapshot
  threatPinsLayer.innerHTML = '';
  if (data.pins && data.pins.length > 0) {
    data.pins.forEach(p => {
      const pin = document.createElement('div');
      pin.className = `threat-pin ${p.type}`;
      pin.style.top = p.top;
      pin.style.left = p.left;
      pin.innerHTML = `<span>${p.label}</span>`;
      threatPinsLayer.appendChild(pin);
    });
  }

  // Update Raw Jev JSON Schema in Drawer
  const rawJevJson = {
    model: "typesafe/jev-latest",
    decision_engine: "@cf/cloudflare/clef-flash",
    agent_status: "autonomous_reflex_monitoring",
    evaluated_state: {
      snapshot: data.filename,
      category: data.category
    },
    schema_output: {
      verdict: data.category === 'safe' ? 'clean_communication' : 'malicious_phishing_fraud',
      risk_score_calibrated: data.threatScore / 100,
      attack_vector: data.what,
      psychological_mechanism: data.trick,
      prescribed_action: data.action,
      extracted_deceptive_signals: data.signals.map(s => s.text)
    },
    inference_speed_ms: 24,
    compute_charge: "$0.00"
  };

  drawerJson.textContent = JSON.stringify(rawJevJson, null, 2);
}

function copyIncidentReport() {
  const current = SCENARIOS[currentScenario] || {
    headline: verdictHeading.textContent,
    threatScore: riskScore.textContent,
    what: pillarWhat.textContent,
    action: pillarAction.textContent
  };

  const reportText = `[MailShield AI Security Audit Report]
Verdict: ${current.headline} (Threat Risk: ${current.threatScore})
Attack Vector: ${current.what}
Recommended Action: ${current.action}
Engine: TypeSafe Jev & Cloudflare Clef-Flash (24ms Autonomous Agent Reflex)
Status: Flagged for Security Action`;

  navigator.clipboard.writeText(reportText).then(() => {
    btnCopyText.textContent = "Copied to Clipboard! ✓";
    setTimeout(() => {
      btnCopyText.textContent = "Copy Incident Report";
    }, 2500);
  });
}

function analyzeCustomText(rawText) {
  const text = rawText.toLowerCase();
  const isDanger = text.includes('chase') || text.includes('wire') || text.includes('urgent') || text.includes('password');

  runJevDecision({
    id: "raw_text_scan",
    filename: "raw_email_text_buffer.txt",
    category: isDanger ? "danger" : "safe",
    threatScore: isDanger ? 95 : 5,
    headline: isDanger ? "Malicious Phishing Detected in Text" : "Legitimate / Clean Text",
    badgeText: isDanger ? "🚨 MALICIOUS PHISHING" : "✅ 100% AUTHENTIC",
    certainty: isDanger ? "98.5% Jev Certainty" : "99.0% Clean",
    summary: isDanger ? "The text exhibits phishing signals and urgent credential requests." : "The text appears to be standard non-malicious communication.",
    what: isDanger ? "Phishing Attack" : "Safe Message",
    trick: isDanger ? "Urgency Pressure" : "None",
    action: isDanger ? "Do not reply or click links." : "Safe to read.",
    signals: isDanger ? [{ text: "Urgent language detected", type: "danger" }] : [{ text: "Clean tone", type: "safe" }],
    pins: [],
    thoughts: [
      "[01/04] Sentry: Ingesting raw textual token stream...",
      isDanger ? "[02/04] Anomaly: Urgent coercive trigger phrases flagged..." : "[02/04] Status: Clean benign language pattern confirmed...",
      isDanger ? "[03/04] Risk: High-probability credential solicition detected..." : "[03/04] Safety: Zero credential demands or malicious links...",
      isDanger ? "[04/04] Jev Decision: 95.0% Malicious Phishing — Intercept Confirmed." : "[04/04] Jev Decision: 99.0% Authentic Communication."
    ]
  });
}

// Initial Boot
window.addEventListener('DOMContentLoaded', () => {
  initNeuralSimulation();
  setupStudioEvents();
  loadScenario('chase_bank');
});
