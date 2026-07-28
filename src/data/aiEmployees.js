export const AI_EMPLOYEES = [
  {
    id: "ai-receptionist",
    title: "AI Receptionist",
    tagline: "24/7 Voice & Multi-Channel Inquiry Handler",
    category: "Communication",
    badge: "Most Hired",
    status: "Working",
    avatar: "AR",
    metrics: "23 Conversations Today • 0 Missed Calls",
    responsibilities: [
      "Answers inbound phone calls within 2 seconds with natural human voice tone",
      "Qualifies caller intent, collects project details, and screens spam calls",
      "Schedules meetings directly into team Google / Outlook calendars",
      "Sends instant SMS / WhatsApp booking confirmations to callers"
    ],
    capabilities: [
      "Natural Speech Synthesis & Recognition",
      "Call Transfer & Emergency Routing",
      "Multi-Line Handling (Unlimited Concurrent Calls)",
      "Instant CRM Data Logging"
    ],
    outcomes: [
      "100% Inquiry Capture (Day, Night & Weekends)",
      "Zero Hold Times for Inbound Clients",
      "Eliminates 15+ Hours/Week of Office Phone Interruption"
    ],
    integrations: ["Twilio Voice", "WhatsApp Business", "Google Calendar", "Outlook", "HubSpot", "Salesforce"],
    demoConversation: {
      channel: "Inbound Phone Call Simulator",
      caller: "Marcus Vance (Architectural Client)",
      agentName: "AI Receptionist (MivizHub)",
      messages: [
        { sender: "caller", text: "Hi there, I'm looking to get a consultation for a 4,500 sq ft residential build in North Hills. Are you open for new projects?" },
        { sender: "agent", text: "Hello Marcus! Yes, we are currently scheduling new architectural consultations for Q3. I can take down your project specs right now and book a 30-minute discovery call with our Lead Architect." },
        { sender: "caller", text: "That would be great. Do you have anything available Thursday afternoon?" },
        { sender: "agent", text: "I have an opening this Thursday at 2:30 PM EST or Friday at 10:00 AM EST. Which works better for your schedule?" },
        { sender: "caller", text: "Thursday at 2:30 PM works perfectly." },
        { sender: "agent", text: "Confirmed! I've scheduled Thursday at 2:30 PM EST and sent a calendar invite to your email along with a SMS reminder. Is there anything else I can assist with today?" }
      ]
    }
  },
  {
    id: "ai-sales-agent",
    title: "AI Sales Representative",
    tagline: "Autonomous Lead Qualifier & Pipeline Accelerator",
    category: "Revenue",
    badge: "High ROI",
    status: "Active",
    avatar: "AS",
    metrics: "12 Leads Qualified Today • 94% Conversion Rate",
    responsibilities: [
      "Engages new web leads, form submissions, and inbound emails in <10 seconds",
      "Evaluates project budget, decision timeframe, and scope requirements",
      "Executes persistent multi-channel follow-ups (SMS, Email, WhatsApp)",
      "Pushes structured deal data directly into CRM with automated lead scoring"
    ],
    capabilities: [
      "B2B Lead Qualification Frameworks (BANT)",
      "Automated Quote Follow-ups & Objection Handling",
      "CRM Deal Creation & Field Sync",
      "Omnichannel Messaging Synchronization"
    ],
    outcomes: [
      "10x Faster First Response Time",
      "38% Higher Lead-to-Meeting Conversion Rate",
      "Prevents Lead Decay from Delayed Follow-ups"
    ],
    integrations: ["HubSpot", "Salesforce", "Zoho CRM", "Pipedrive", "Gmail", "WhatsApp"],
    demoConversation: {
      channel: "WhatsApp Business Stream",
      caller: "David Miller (Commercial Equipment Dealer)",
      agentName: "AI Sales Representative (MivizHub)",
      messages: [
        { sender: "caller", text: "Interested in your 250 kVA Industrial DG Set rental rates for a 3-month construction project." },
        { sender: "agent", text: "Hi David! Thanks for reaching out. Our 250 kVA silent diesel generators are available for immediate mobilization. What is the approximate start date for your site?" },
        { sender: "caller", text: "Starting next Monday. We need continuous 24/7 power with an onsite AMC technician option." },
        { sender: "agent", text: "Understood. For a 3-month term with 24/7 primary rating + full AMC coverage, estimated rate is $4,200/month including bi-weekly maintenance. Would you like me to generate a formal quote PDF and route it to your procurement team now?" },
        { sender: "caller", text: "Yes please, send to david.m@apexconstruct.com." },
        { sender: "agent", text: "Drafting quote #DG-8920 now and dispatching to david.m@apexconstruct.com. I've also assigned senior account executive Robert to conduct site delivery coordination." }
      ]
    }
  },
  {
    id: "ai-estimator",
    title: "AI Estimator",
    tagline: "Automated Scope Extraction & Proposal Generator",
    category: "Operations",
    badge: "Time Saver",
    status: "Processing",
    avatar: "AE",
    metrics: "8 Estimates Drafted Today • 100% Accuracy",
    responsibilities: [
      "Extracts project requirements from client intake forms, PDFs, and emails",
      "Calculates material quantities, labor hours, and baseline cost structures",
      "Generates branded PDF estimates with line-item breakdowns",
      "Triggers automatic review alerts to senior estimators for approval"
    ],
    capabilities: [
      "Document Parsing & Blueprint Scope Analysis",
      "Rate Card & Inventory Pricing Rules Engine",
      "Automated Proposal PDF Generation",
      "Integration with ERP & Estimating Tools"
    ],
    outcomes: [
      "Reduces Estimate Turnaround from 48 Hours to 15 Minutes",
      "Standardizes Margin & Material Pricing Formulas",
      "Frees Senior Estimators to Focus on Complex Bids"
    ],
    integrations: ["Procore", "Buildertrend", "ServiceTitan", "Sage", "Excel/Google Sheets", "Gmail"],
    demoConversation: {
      channel: "Inquire & Quote Engine",
      caller: "Elena Rostova (Interior Design Director)",
      agentName: "AI Estimator (MivizHub)",
      messages: [
        { sender: "caller", text: "I uploaded the floorplan for the 3-bedroom penthouse renovation. Need a rough estimate for custom cabinetry and HVAC duct replacement." },
        { sender: "agent", text: "Floorplan received, Elena! Parsing 12 pages of CAD specs... Architectural wood trim detected: 420 lin ft. HVAC ductwork: 180 sq ft replacement." },
        { sender: "agent", text: "Initial estimate calculation complete: Premium Walnut Cabinetry: $42,500 | High-Efficiency HVAC & Ducting: $16,800. Estimated Total: $59,300 (+/- 5%)." },
        { sender: "caller", text: "Impressive turnaround! Can you email me the line-item breakdown?" },
        { sender: "agent", text: "Detailed Proposal PDF #EST-4409 generated and emailed to elena@rostovadesign.com. Your Account Lead, Mark, has been notified to review the final line items." }
      ]
    }
  },
  {
    id: "ai-customer-support",
    title: "AI Customer Support Agent",
    tagline: "Instant FAQ Resolution & Smart Escalation Manager",
    category: "Support",
    badge: "24/7 Active",
    status: "Online",
    avatar: "AS",
    metrics: "64 Tickets Resolved Today • <15s Avg Response",
    responsibilities: [
      "Answers routine client inquiries regarding job status, invoices, and schedules",
      "Processes maintenance requests, warranty claims, and ticket updates",
      "Escalates high-priority urgent issues directly to human field managers",
      "Maintains complete audit trails of all client interactions"
    ],
    capabilities: [
      "Autonomous Knowledge Base Learning",
      "Intelligent Issue Classification & Priority Tagging",
      "Multi-Language Support",
      "Service Manager Escalation Routing"
    ],
    outcomes: [
      "Resolves 70%+ of Inbound Inquiries Without Human Intervention",
      "Sub-15 Second Response Time Guaranteed 24/7",
      "Improves Customer Satisfaction (CSAT) Scores by 35%"
    ],
    integrations: ["Zendesk", "Intercom", "Freshdesk", "WhatsApp", "Slack", "ServiceTitan"],
    demoConversation: {
      channel: "Client Support Portal",
      caller: "James Miller (Building Facility Manager)",
      agentName: "AI Support Agent (MivizHub)",
      messages: [
        { sender: "caller", text: "Generator Unit #3 on site B-12 just triggered a low-coolant warning during automated self-test." },
        { sender: "agent", text: "Warning acknowledged, James. Accessing Unit #3 telematics log... Confirmed fault code E-204 (Coolant Sensor). System is currently on standby." },
        { sender: "agent", text: "I have logged Emergency Ticket #TK-8812 and dispatched certified technician Frank Rogers (ETA 45 minutes). An SMS update with tracking has been sent to your phone." },
        { sender: "caller", text: "Thank you for the fast response!" }
      ]
    }
  },
  {
    id: "ai-project-coordinator",
    title: "AI Project Coordinator",
    tagline: "Site Schedule Synchronizer & Milestone Monitor",
    category: "Operations",
    badge: "Precision",
    status: "Managing",
    avatar: "PC",
    metrics: "Managing 8 Active Projects • 0 Delay Flags",
    responsibilities: [
      "Sends automated daily schedule updates to sub-contractors and site leads",
      "Tracks delivery dates for major materials and equipment rentals",
      "Requests site progress photos and compiles end-of-day summary reports",
      "Flags schedule bottlenecks before they cause costly project delays"
    ],
    capabilities: [
      "Gantt Chart & Milestone Tracking Integration",
      "Subcontractor SMS Verification Workflows",
      "Automated Weather Delay Risk Alerts",
      "Daily Operational Log Consolidation"
    ],
    outcomes: [
      "Keeps Subcontractors 100% Aligned on Daily Site Goals",
      "Reduces Equipment Idle Time by 25%",
      "Provides Executive Visibility Across All Active Work Sites"
    ],
    integrations: ["Procore", "Buildertrend", "Asana", "ClickUp", "WhatsApp", "Google Drive"],
    demoConversation: {
      channel: "Field Operations Channel",
      caller: "Tom Harris (General Contractor)",
      agentName: "AI Project Coordinator (MivizHub)",
      messages: [
        { sender: "agent", text: "Daily Alert: Concrete pour scheduled for Site 4 at 7:30 AM tomorrow. Concrete supplier Apex Mix confirmed delivery." },
        { sender: "caller", text: "What about the plumbing inspection for Site 2?" },
        { sender: "agent", text: "City Inspector requested reschedule to Wednesday 10:00 AM due to rain delay. Subcontractor Premier Plumbing has been notified and updated on Procore." }
      ]
    }
  },
  {
    id: "ai-followup-assistant",
    title: "AI Follow-Up Assistant",
    tagline: "Cold Lead Nurturer & Quote Reviver",
    category: "Revenue",
    badge: "Pipeline Re-activator",
    status: "Working",
    avatar: "FA",
    metrics: "19 Quotes Followed Up • $140k Pipeline Re-engaged",
    responsibilities: [
      "Monitors outstanding quotes and unclosed proposals in your CRM",
      "Executes polite, personalized follow-ups across email and SMS",
      "Identifies client hesitation triggers and offers updated terms or calls",
      "Re-engages dormant past clients for annual maintenance renewals (AMC)"
    ],
    capabilities: [
      "Dormant Lead Re-engagement Sequences",
      "Contextual Personalization Engine",
      "CRM Opportunity Status Tracking",
      "Automated Meeting Re-booking"
    ],
    outcomes: [
      "Recovers 15-25% of Stalled Proposals Otherwise Lost",
      "Automates AMC Renewal Reminders Without Staff Effort",
      "Maintains Continuous Professional Touchpoints"
    ],
    integrations: ["HubSpot", "Salesforce", "Gmail", "Outlook", "WhatsApp", "Zoho"],
    demoConversation: {
      channel: "Automated Email Sequence",
      caller: "Sarah Jenkins (Commercial Renovations Lead)",
      agentName: "AI Follow-Up Assistant (MivizHub)",
      messages: [
        { sender: "agent", text: "Hi Sarah, following up on proposal #REN-902 for the office lobby redesign sent last Tuesday. Did you have a chance to review the material options?" },
        { sender: "caller", text: "Sorry for the delay! We liked the layout but our board wanted to confirm if phase 1 could be finished before September 15th." },
        { sender: "agent", text: "Great news, Sarah! Our project coordinator verified our timeline—Phase 1 can be completed by September 8th. I can update section 4 of the agreement and send for e-signature today." }
      ]
    }
  }
];
