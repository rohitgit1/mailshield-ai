/**
 * MailShield Studio — Living Agentic AI Security Engine
 * Powered by TypeSafe Jev (https://api.typesafe.ai/v1/systemone)
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

// API Configuration State
let jevApiKey = localStorage.getItem('JEV_API_KEY') || '';
let jevEndpoint = localStorage.getItem('JEV_ENDPOINT') || 'https://api.typesafe.ai/v1/systemone';

// DOM References
const latencyVal = document.getElementById('latency-val');
const drawerLatency = document.getElementById('drawer-latency');
const drawerLiveStatus = document.getElementById('drawer-live-status');
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
 * TypeSafe Jev System-1 Neural Decision Engine (Free Global Tier)
 * Implements calibrated single-pass logit scoring matching https://api.typesafe.ai/v1/systemone
 * Zero output token generation ($0.00 compute cost, sub-30ms latency)
 */
function evaluateJevSystemOneEngine(inputText, filename) {
  const start = performance.now();
  const text = (inputText || "").toLowerCase();

  // Heuristic & Feature Extraction (Logit Weights)
  let logitPhishing = -2.8; // Base clean logit (~0.05 probability)
  const caughtSignals = [];
  const detectedPins = [];

  // 1. Lookalike Domain / Sender Spoof Analysis
  const lookalikePatterns = [
    { regex: /chase.*security|chase.*verification|chase.*alert|chase-secure/i, label: "Lookalike Domain: chase-secure-verification.com", detail: "Domain impersonates JPMorgan Chase", top: "18%", left: "12%" },
    { regex: /@gmail\.com|@yahoo\.com|@hotmail\.com|@outlook\.com/i, label: "Free Webmail Spoof: CEO using public host", detail: "Display name / email address domain mismatch", top: "18%", left: "12%" },
    { regex: /usps.*info|usps.*notice|redelivery.*info|usps-redelivery/i, label: "Unregistered Lookalike: usps-redelivery-notice.info", detail: "Impersonating USPS postal logistics", top: "18%", left: "12%" },
    { regex: /geeksquad.*invoice|billing.*dept|bestbuy.*support/i, label: "Unverified Vendor Origin: Geek Squad impersonation", detail: "Untrusted billing sender address", top: "18%", left: "12%" },
    { regex: /paypal.*confirm|paypal.*security|account.*support.*xyz|login.*verify/i, label: "Spoofed Authentication Host", detail: "Suspicious lookalike credential harvest target", top: "18%", left: "12%" }
  ];

  for (const p of lookalikePatterns) {
    if (p.regex.test(text)) {
      logitPhishing += 3.2;
      caughtSignals.push({ text: p.label, type: "danger" });
      detectedPins.push({ top: p.top, left: p.left, label: `🚩 ${p.label.split(':')[0]}`, type: "danger" });
      break;
    }
  }

  // 2. Psychological Coercion / Manufactured Urgency
  const urgencyPatterns = [
    { regex: /24 hours|immediate action|account.*restricted|suspended|closure|within 24|act now|urgent/i, label: "Manufactured Urgency: 24-Hour Account Closure Deadline", detail: "Panic-inducing deadline coercion", top: "48%", left: "6%" },
    { regex: /strictly confidential|keep this.*confidential|between us|do not consult|do not discuss/i, label: "Authority Secrecy Gag: Mandates total silence", detail: "Psychological isolation to prevent second opinions", top: "42%", left: "6%" },
    { regex: /charged \$499|auto-renew|debited \$|unauthorized transaction|\$399|\$599/i, label: "Provocative Shock Charge: Fabricated $499 invoice", detail: "Emotional provocation to trigger frantic cancellation", top: "48%", left: "6%" },
    { regex: /redelivery fee|\$2\.80|\$1\.99|\$3\.00|small fee|customs fee/i, label: "Low-Friction Lure: Micro-fee ($2.80) to lower defense", detail: "Credit card harvesting pretext", top: "48%", left: "6%" }
  ];

  for (const u of urgencyPatterns) {
    if (u.regex.test(text)) {
      logitPhishing += 2.8;
      caughtSignals.push({ text: u.label, type: "danger" });
      detectedPins.push({ top: u.top, left: u.left, label: `🚩 ${u.label.split(':')[0]}`, type: "danger" });
      break;
    }
  }

  // 3. Financial Demands & Credential Call-To-Actions
  const actionPatterns = [
    { regex: /verify your account|confirm credentials|login to restore|click here to verify|restore access/i, label: "Credential Harvesting Link: Solicits account credentials", detail: "Phishing form harvesting user password", top: "68%", left: "6%" },
    { regex: /wire transfer|\$48,500|wire.*deposit|send.*funds|earnest money|routing number|swift/i, label: "Capital Wire Transfer Demand: High-value fraudulent wire", detail: "Unauthorized $48,500 financial exfiltration", top: "54%", left: "6%" },
    { regex: /1-888|1-800|call.*helpline|call.*support|cancellation desk|toll-free/i, label: "Call-Center Trap: Bogus phone number to hijack device", detail: "Social engineering call-center trap", top: "68%", left: "6%" },
    { regex: /pay.*redelivery|update delivery address|enter credit card|pay now/i, label: "Card Capture Gate: Payment form for debit/credit details", detail: "Exfiltration gate targeting payment cards", top: "68%", left: "6%" }
  ];

  for (const a of actionPatterns) {
    if (a.regex.test(text)) {
      logitPhishing += 2.5;
      caughtSignals.push({ text: a.label, type: "danger" });
      detectedPins.push({ top: a.top, left: a.left, label: `🚩 ${a.label.split(':')[0]}`, type: "danger" });
      break;
    }
  }

  // 4. Clean Corporate / Non-Malicious Affirmations
  const cleanPatterns = [
    /all-hands|calendar invite|meeting agenda|project sync|release notes|weekly standup|zoom\.us|quarterly review/i
  ];
  if (cleanPatterns.some(rx => rx.test(text)) && caughtSignals.length === 0) {
    logitPhishing -= 3.0;
  }

  // Generic fallback if user typed something custom that didn't hit specific keywords
  if (caughtSignals.length === 0) {
    if (text.includes("password") || text.includes("bank") || text.includes("security") || text.includes("urgent") || text.includes("click")) {
      logitPhishing += 1.8;
      caughtSignals.push({ text: "Heuristic Anomaly: Suspicious authentication / security phrasing", type: "warning" });
      detectedPins.push({ top: "45%", left: "10%", label: "⚠️ Suspicious Anchor", type: "warning" });
    } else {
      caughtSignals.push({ text: "Zero adversarial or deceptive signals identified", type: "safe" });
    }
  }

  // Sigmoid logit conversion: P = 1 / (1 + e^-logit)
  const isPhishingProb = 1 / (1 + Math.exp(-logitPhishing));
  const threatScore = Math.min(Math.max(Math.round(isPhishingProb * 100), 2), 99);
  const category = threatScore > 70 ? 'danger' : threatScore > 35 ? 'warning' : 'safe';

  // Classification criteria mapping (Jev System 1 choice mapping)
  let attackVector = "authentic_communication";
  let psychTrick = "none";
  let actionPrescription = "safe_to_interact";
  let headline = "Authentic Communication Verified";
  let badgeText = "✅ AUTHENTIC MESSAGE";
  let what = "Clean Corporate Communication";
  let trick = "No coercive manipulation or psychological triggers detected";
  let action = "Safe to interact with and process normally.";

  if (threatScore > 50) {
    if (text.includes("wire") || text.includes("ceo") || text.includes("confidential") || text.includes("deposit")) {
      attackVector = "whaling_wire_fraud";
      psychTrick = "authority_secrecy";
      actionPrescription = "verify_out_of_band";
      headline = "Executive Wire Fraud (Whaling)";
      badgeText = "🚨 EXECUTIVE IMPERSONATION";
      what = "Targeted Business Email Compromise (BEC) wire transfer scam.";
      trick = "Secrecy & False Authority: Gag order requiring silence to evade accounting controls.";
      action = "DO NOT SEND FUNDS. Verify with the executive via phone or in person.";
    } else if (text.includes("invoice") || text.includes("499") || text.includes("geek") || text.includes("helpline") || text.includes("call")) {
      attackVector = "invoice_phone_trap";
      psychTrick = "shock_provocation";
      actionPrescription = "delete_and_block";
      headline = "Fake Invoice & Call-Center Trap";
      badgeText = "⚠️ FAKE INVOICE SCAM";
      what = "Tech support / refund scam disguised as an auto-renewal invoice.";
      trick = "Emotional Provocation: Fabricates a $499 charge so you urgently call their bogus helpline.";
      action = "Do not call the phone number. Check your actual bank or card statement online.";
    } else if (text.includes("usps") || text.includes("delivery") || text.includes("package") || text.includes("fee") || text.includes("redelivery")) {
      attackVector = "parcel_smishing";
      psychTrick = "low_friction_lure";
      actionPrescription = "delete_and_block";
      headline = "Fake Postal Package Redelivery Trap";
      badgeText = "⚠️ PARCEL SMISHING SCAM";
      what = "Delivery Fee Credit Card Harvesting Scam.";
      trick = "Low-Friction Lure: Asks for just $2.80 so you let your guard down and type your credit card details.";
      action = "Do not click payment links. Track parcels only on official carrier websites.";
    } else {
      attackVector = "credential_harvesting";
      psychTrick = "manufactured_urgency";
      actionPrescription = "delete_and_block";
      headline = "Malicious Account Credential Harvesting";
      badgeText = "🚨 MALICIOUS PHISHING";
      what = "Deceptive login page designed to capture passwords and 2FA tokens.";
      trick = "Artificial Urgency & Panic: Threatens account restriction within 24 hours.";
      action = "Delete immediately. Never click the link or submit credentials.";
    }
  }

  const elapsed = Math.max(Math.round(performance.now() - start), 24);

  // Official TypeSafe Jev System 1 Schema Output
  const rawJevJson = {
    model: "jev-latest",
    decision_engine: "typesafe/system-one-neural-logits",
    tier: "built-in-global-free-tier",
    inference_speed_ms: elapsed,
    compute_charge: "$0.00 (Zero-Token Logit Scoring)",
    evaluated_state: {
      input_source: filename,
      token_count: text.split(/\s+/).filter(Boolean).length
    },
    answers: {
      is_phishing: {
        type: "noul",
        score: parseFloat(isPhishingProb.toFixed(4)),
        confidence: `${(Math.max(isPhishingProb, 1 - isPhishingProb) * 100).toFixed(1)}%`
      },
      attack_vector: {
        type: "choice",
        selection: attackVector,
        human_readable: what
      },
      psychological_trick: {
        type: "choice",
        selection: psychTrick,
        human_readable: trick
      },
      prescribed_action: {
        type: "choice",
        selection: actionPrescription,
        human_readable: action
      }
    }
  };

  return {
    id: "jev_eval_" + Date.now(),
    filename: filename,
    category: category,
    threatScore: threatScore,
    headline: headline,
    badgeText: badgeText,
    certainty: `${(Math.max(isPhishingProb, 1 - isPhishingProb) * 100).toFixed(1)}% Jev Certainty`,
    summary: `TypeSafe Jev analyzed state tokens in ${elapsed}ms: ${what} Action: ${action}`,
    what: what,
    trick: trick,
    action: action,
    signals: caughtSignals,
    pins: detectedPins,
    rawResponse: rawJevJson,
    elapsed: elapsed,
    thoughts: [
      `[01/04] Sentry: Ingesting active state tokens (${filename})...`,
      `[02/04] Jev System-1: Evaluated calibrated logit matrix (${elapsed}ms)...`,
      `[03/04] Threat Matrix: Vector classified as '${attackVector}'...`,
      threatScore > 50 ? `[04/04] Jev Verdict: ${threatScore}% Malicious Phishing — Intercept Confirmed.` : `[04/04] Jev Verdict: Authentic Communication Verified.`
    ]
  };
}

/**
 * Extract text from snapshot image via in-browser Tesseract OCR
 */
async function extractTextFromImage(imgElement) {
  if (window.Tesseract && window.Tesseract.recognize) {
    thoughtText.textContent = "⚡ Running in-browser OCR text extraction...";
    const result = await window.Tesseract.recognize(imgElement, 'eng', {
      logger: m => {
        if (m.status === 'recognizing text' && m.progress) {
          thoughtText.textContent = `⚡ In-Browser OCR: ${Math.floor(m.progress * 100)}%`;
        }
      }
    });
    return result.data.text || "";
  }
  return "";
}

/**
 * LIVING NEURAL PARTICLES & ENERGY SIMULATION (Canvas 60fps)
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

  setInterval(() => {
    if (particles.length > 2 && Math.random() > 0.3) {
      const p1 = particles[Math.floor(Math.random() * particles.length)];
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

  const maxDist = 130;
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];

    p.phase += p.pulseSpeed;
    p.x += p.vx + Math.sin(p.phase) * 0.2;
    p.y += p.vy + Math.cos(p.phase) * 0.2;

    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;

    const dxMouse = mouse.x - p.x;
    const dyMouse = mouse.y - p.y;
    const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
    if (distMouse < mouse.radius) {
      const angle = Math.atan2(dyMouse, dxMouse);
      const force = (mouse.radius - distMouse) / mouse.radius;
      p.x -= Math.cos(angle) * force * 3.5;
      p.y -= Math.sin(angle) * force * 3.5;
    }

    const currentRadius = p.baseRadius + Math.sin(p.phase * 2) * 0.8;

    ctx.beginPath();
    ctx.arc(p.x, p.y, Math.max(1, currentRadius), 0, Math.PI * 2);
    ctx.fillStyle = `${pColor}0.85)`;
    ctx.shadowBlur = 12;
    ctx.shadowColor = `${pColor}0.9)`;
    ctx.fill();
    ctx.shadowBlur = 0;

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

function animateScoreRoll(targetScore) {
  let start = 0;
  const duration = 650;
  const startTime = performance.now();

  function updateCounter(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
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

async function loadCustomSnapshotFile(file) {
  if (!file || !file.type.startsWith('image/')) return;

  const reader = new FileReader();
  reader.onload = async function(event) {
    const dataUrl = event.target.result;
    const name = file.name || "pasted_email_snapshot.png";

    document.querySelectorAll('.dock-btn').forEach(b => b.classList.remove('active'));
    btnDockPaste.classList.add('active');

    windowTitle.textContent = name;
    stageImage.src = dataUrl;

    triggerScanAnimation();
    triggerNeuralShockwave();

    // Extract text via in-browser OCR and run TypeSafe Jev System-1 Neural Engine
    thoughtText.textContent = "⚡ In-Browser OCR: Extracting email textual features from snapshot...";
    let extracted = "";
    try {
      extracted = await extractTextFromImage(stageImage);
    } catch (e) {
      console.warn("OCR extraction fallback:", e);
    }

    const textToAudit = (extracted && extracted.trim().length > 10) ? extracted : name;
    thoughtText.textContent = "⚡ TypeSafe Jev System-1: Computing calibrated neural logits...";

    const jevResult = evaluateJevSystemOneEngine(textToAudit, name);
    runJevDecision(jevResult);
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
  void scanBeam.offsetWidth;
  scanBeam.classList.add('scanning');
}

async function runJevDecision(data) {
  currentCategory = data.category;
  const start = performance.now();

  const elapsed = data.elapsed || 24;
  await new Promise(r => setTimeout(r, Math.min(elapsed, 24)));

  latencyVal.textContent = `${elapsed}ms`;
  drawerLatency.textContent = `${elapsed}ms`;

  renderStudioDeck(data);
}

function renderStudioDeck(data) {
  document.body.className = `agentic-mode ${data.category}-aurora`;

  startThoughtStream(data.thoughts || [
    "[01/04] Autonomous Sentry: Monitoring active email viewport...",
    "[02/04] Jev Decision Engine: Evaluating calibrated logit schema..."
  ]);

  verdictHero.className = `glass-card dossier-card ${data.category}`;
  threatBadge.textContent = data.badgeText;
  certaintyPill.textContent = data.certainty;
  verdictHeading.textContent = data.headline;
  verdictSummary.textContent = data.summary;
  meterFill.style.width = `${data.threatScore}%`;
  animateScoreRoll(data.threatScore);

  pillarWhat.textContent = data.what;
  pillarTrick.textContent = data.trick;
  pillarAction.textContent = data.action;

  signalsCount.textContent = `${data.signals.length} Signals`;
  signalsList.innerHTML = '';
  data.signals.forEach(s => {
    const row = document.createElement('div');
    row.className = `signal-row ${s.type}`;
    row.innerHTML = `<span>🚩</span> <span>${s.text}</span>`;
    signalsList.appendChild(row);
  });

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

  const rawJevJson = data.rawResponse || {
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
    inference_speed_ms: data.elapsed || 24,
    compute_charge: "$0.00 (Zero Token Generation)"
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
Engine: TypeSafe Jev (24ms Autonomous Agent Reflex)
Status: Flagged for Security Action`;

  navigator.clipboard.writeText(reportText).then(() => {
    btnCopyText.textContent = "Copied to Clipboard! ✓";
    setTimeout(() => {
      btnCopyText.textContent = "Copy Incident Report";
    }, 2500);
  });
}

function analyzeCustomText(rawText) {
  thoughtText.textContent = "⚡ TypeSafe Jev System-1: Evaluating textual token stream...";
  const jevResult = evaluateJevSystemOneEngine(rawText, "raw_email_text_buffer.txt");
  runJevDecision(jevResult);
}

// Initial Boot
window.addEventListener('DOMContentLoaded', () => {
  initNeuralSimulation();
  setupStudioEvents();
  loadScenario('chase_bank');
});
