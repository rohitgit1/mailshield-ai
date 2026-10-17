import os
from PIL import Image, ImageDraw, ImageFont

os.makedirs('assets', exist_ok=True)

def create_email_snapshot(filename, header_bg, sender, email_addr, subject, body_lines, cta_text=None, cta_color=None, is_danger=True):
    width = 900
    height = 540
    
    # Create high-res canvas
    img = Image.new('RGB', (width, height), color='#ffffff')
    draw = ImageDraw.Draw(img)
    
    # 1. Email Client Window Header (macOS / Modern Web style)
    draw.rectangle([0, 0, width, 50], fill='#0f172a')
    # Window control dots
    draw.ellipse([20, 18, 34, 32], fill='#ef4444')
    draw.ellipse([42, 18, 56, 32], fill='#f59e0b')
    draw.ellipse([64, 18, 78, 32], fill='#10b981')
    
    # Window Title
    draw.text((width // 2 - 70, 16), "Inbox — Message", fill='#94a3b8')
    
    # 2. Email Metadata Header Bar
    draw.rectangle([0, 50, width, 160], fill=header_bg)
    draw.line([(0, 160), (width, 160)], fill='#e2e8f0', width=1)
    
    # Sender Avatar Circle
    avatar_color = '#dc2626' if is_danger else '#2563eb'
    draw.ellipse([30, 75, 80, 125], fill=avatar_color)
    initials = sender[:2].upper()
    draw.text((45, 90), initials, fill='#ffffff')
    
    # Sender Name & Address
    draw.text((100, 72), sender, fill='#0f172a')
    draw.text((100, 96), f"From: <{email_addr}>", fill='#64748b')
    draw.text((100, 122), f"Subject: {subject}", fill='#0f172a')
    
    # Date / Time
    draw.text((width - 150, 75), "Today, 10:42 AM", fill='#94a3b8')
    
    # 3. Email Body
    y = 190
    for line in body_lines:
        if line.startswith("## "):
            draw.text((35, y), line[3:], fill='#dc2626' if is_danger else '#0f172a')
            y += 32
        elif line.startswith(">> "):
            # Highlight box
            draw.rectangle([35, y - 4, width - 35, y + 28], fill='#fef2f2' if is_danger else '#eff6ff', outline='#fca5a5' if is_danger else '#bfdbfe')
            draw.text((50, y), line[3:], fill='#b91c1c' if is_danger else '#1d4ed8')
            y += 42
        else:
            draw.text((35, y), line, fill='#334155')
            y += 24
            
    # 4. Call to Action Button
    if cta_text:
        btn_y = y + 15
        btn_color = cta_color or ('#dc2626' if is_danger else '#2563eb')
        draw.rounded_rectangle([35, btn_y, 320, btn_y + 44], radius=6, fill=btn_color)
        draw.text((55, btn_y + 12), cta_text, fill='#ffffff')
        y = btn_y + 60
        
    # Security Warning Footer
    draw.rectangle([0, height - 40, width, height], fill='#f8fafc')
    draw.line([(0, height - 40), (width, height - 40)], fill='#e2e8f0', width=1)
    draw.text((35, height - 26), "🔒 Verified Encryption: TLS 1.3 • Message ID #9981249", fill='#94a3b8')
    
    img.save(os.path.join('assets', filename), quality=95)
    print(f"Generated {filename}")

# Generate 5 realistic email snapshots
create_email_snapshot(
    'chase_bank_alert.png',
    '#f8fafc',
    'Chase Security Alert',
    'security-alerts@chase-secure-verification.com',
    'URGENT: Online Access Restricted',
    [
        "Dear JPMorgan Chase Customer,",
        "",
        "We detected an unrecognized login attempt to your account from Moscow, Russia.",
        "Your checking and savings accounts have been temporarily suspended.",
        "",
        ">> ACTION REQUIRED: You must verify identity within 24 hours to prevent account closure.",
        "",
        "Please confirm your account credentials immediately below:"
    ],
    cta_text="Verify Your Account Now ➔",
    cta_color="#dc2626",
    is_danger=True
)

create_email_snapshot(
    'ceo_wire_transfer.png',
    '#fff7ed',
    'Michael Bloomberg (CEO)',
    'michael.bloomberg.ceo@gmail-workspace-exec.com',
    'STRICTLY CONFIDENTIAL: Immediate Wire Payment Needed',
    [
        "Hi Team,",
        "",
        "I am currently in an all-day closed board meeting and cannot take voice calls.",
        ">> STRICTLY CONFIDENTIAL: We are finalizing an urgent M&A transaction today.",
        "",
        "I need an earnest money deposit of $48,500 wired to the escrow account before 2:00 PM.",
        "Keep this strictly between us until the official press release.",
        "Please reply with the wire transfer confirmation receipt immediately."
    ],
    cta_text="Review Escrow Wire Details ➔",
    cta_color="#c2410c",
    is_danger=True
)

create_email_snapshot(
    'geek_squad_invoice.png',
    '#f8fafc',
    'Best Buy Geek Squad',
    'billing@geeksquad-customer-invoice.net',
    'Invoice #GS-994821: Auto-Renewal Successful ($499.00)',
    [
        "Dear Valued Customer,",
        "",
        "Thank you for renewing your Total Device Protection & Cloud Backup 2026-2027.",
        "Amount Charged: $499.00 USD (Automatically debited from your card/checking account).",
        "",
        ">> DID NOT AUTHORIZE THIS CHARGE? Call our 24/7 Cancellation Helpline: +1 (888) 555-0194",
        "",
        "If you wish to dispute this transaction and claim a full instant refund, call immediately."
    ],
    cta_text="Call 24/7 Helpline: 1-888-555-0194",
    cta_color="#b45309",
    is_danger=True
)

create_email_snapshot(
    'usps_redelivery.png',
    '#f8fafc',
    'USPS Tracking Service',
    'tracking-delivery@usps-redelivery-notice.info',
    'Package Delivery Pending: Incomplete Street Address',
    [
        "United States Postal Service Notification:",
        "",
        "Parcel Tracking Number: #US9400111899223847291",
        "Your shipment could not be dispatched due to an incomplete delivery address.",
        "",
        ">> A redelivery processing fee of $2.80 is required to confirm your revised address.",
        "",
        "Packages unclaimed within 48 hours will be permanently returned to the sender."
    ],
    cta_text="Pay $2.80 & Update Address ➔",
    cta_color="#0284c7",
    is_danger=True
)

create_email_snapshot(
    'legitimate_allhands.png',
    '#f0fdf4',
    'People & Culture Team',
    'hr-communications@company.internal',
    'Invitation: Q4 Company All-Hands & Product Roadmap',
    [
        "Hi Everyone,",
        "",
        "Please join us for our upcoming Q4 All-Hands meeting this Thursday at 10:00 AM PT.",
        "Agenda: Executive update, Q3 financial milestones, and 2027 product preview.",
        "",
        ">> Meeting Link: Hosted on internal Zoom (available directly on your Google Calendar).",
        "",
        "Looking forward to seeing everyone there!"
    ],
    cta_text="Add to Google Calendar ➔",
    cta_color="#15803d",
    is_danger=False
)
