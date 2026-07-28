export const INDUSTRIES_DATA = [
  {
    id: "construction",
    name: "Construction & Built Environment",
    tagline: "Architects, Builders, Real Estate & General Contractors",
    subSectors: [
      "Architects",
      "Interior Designers",
      "Builders & Developers",
      "Real Estate Agencies",
      "General Contractors",
      "Civil Engineers",
      "Home Renovation",
      "Kitchen Designers",
      "Landscape Designers",
      "Commercial Construction"
    ],
    icon: "Building2",
    painPoints: [
      { title: "Missed Site Inquiries", desc: "Phone calls missed while project managers & superintendents are on active job sites." },
      { title: "Slow Proposal Turnaround", desc: "Estimates take 48-72 hours to compile manually, allowing competitors to win the bid." },
      { title: "Un-followed Up Quotes", desc: "35% of qualified design proposals stall because office staff lacks time for persistent follow-ups." },
      { title: "Subcontractor Misalignment", desc: "Daily schedule shifts lead to trade conflicts, idle labor, and costly project delay penalties." }
    ],
    aiEmployeesRoster: [
      { role: "AI Receptionist", task: "Captures 100% of site calls & schedules design discovery meetings 24/7." },
      { role: "AI Estimator", task: "Parses CAD blueprints & generates preliminary line-item PDF quotes in 15 mins." },
      { role: "AI Sales Representative", task: "Qualifies developer budgets & keeps prospective homebuyers engaged via WhatsApp." },
      { role: "AI Project Coordinator", task: "Dispatches site schedules to trade sub-contractors & tracks milestone approvals." }
    ],
    workflowSteps: [
      { step: "01", title: "Inbound Inquiry", detail: "Client submits web request or calls while you're on a job site." },
      { step: "02", title: "AI Employee Qualification", detail: "AI Receptionist/Sales Rep answers in 2s, extracts square footage & budget." },
      { step: "03", title: "Instant Estimate", detail: "AI Estimator drafts initial scope & books discovery call with Lead Architect." },
      { step: "04", title: "Site Sync & Execution", detail: "AI Project Coordinator keeps subcontractors aligned with zero scheduling overlap." }
    ],
    metrics: {
      responseSpeed: "5 Seconds",
      missedCallRate: "0%",
      avgHoursSaved: "22 Hrs/Wk",
      revenueImpact: "+$140,000 / Mo in recovered proposals"
    }
  },
  {
    id: "generator",
    name: "Generator & Power Backup Systems",
    tagline: "DG Set Dealers, Rental Fleets, AMC Providers & Equipment Suppliers",
    subSectors: [
      "DG Set Dealers",
      "Generator Rental Companies",
      "AMC Service Providers",
      "Industrial Equipment Suppliers",
      "Power Backup Solution Companies",
      "Electrical Turnkey Contractors"
    ],
    icon: "Zap",
    painPoints: [
      { title: "After-Hours Power Breakdown Calls", desc: "Clients experiencing emergency power failures call at 11 PM and get voicemail." },
      { title: "Expired AMC Contract Leakage", desc: "Annual Maintenance Contracts (AMCs) slip through the cracks without automated renewal tracking." },
      { title: "Rental Availability Bottlenecks", desc: "Slow response to equipment rental requests causes industrial clients to hire rival dealers." },
      { title: "Manual Service Dispatching", desc: "Dispatchers spend hours calling technicians to route emergency breakdown calls." }
    ],
    aiEmployeesRoster: [
      { role: "AI Receptionist", task: "Answers 24/7 breakdown calls, logs kVA specs, and dispatches on-call technicians." },
      { role: "AI Follow-Up Assistant", task: "Tracks expiring AMC contracts 60 days in advance and secures automated renewals." },
      { role: "AI Sales Representative", task: "Instantly sends rental pricing tables for 15 kVA - 1250 kVA generator inquiries." },
      { role: "AI Customer Support", task: "Diagnoses telematics fault codes over WhatsApp and updates maintenance logs." }
    ],
    workflowSteps: [
      { step: "01", title: "Emergency Call Received", detail: "Industrial client experiences outage at 2:00 AM." },
      { step: "02", title: "AI Fault Triage", detail: "AI Receptionist verifies machine kVA rating, location, and severity level." },
      { step: "03", title: "Automated Dispatch", detail: "AI dispatches nearest certified technician and sends real-time SMS ETA." },
      { step: "04", title: "AMC Contract Renewal", detail: "System logs breakdown service history and updates customer AMC records." }
    ],
    metrics: {
      responseSpeed: "2 Seconds",
      missedCallRate: "0%",
      avgHoursSaved: "30 Hrs/Wk",
      revenueImpact: "+$95,000 / Mo in AMC renewals & rental bookings"
    }
  },
  {
    id: "expansion_future",
    name: "Future Expansion Vertical (Framework Ready)",
    tagline: "Scalable Modular Architecture for Upcoming Industries",
    subSectors: [
      "Commercial HVAC & Mechanical",
      "Industrial Machinery & Rental",
      "Enterprise Logistics & Freight",
      "Legal & Corporate Compliance",
      "Automotive Dealership Fleets",
      "Specialty Medical & Healthcare Facilities"
    ],
    icon: "Layers",
    painPoints: [
      { title: "Repetitive Intake Administration", desc: "High headcount cost tied up handling routine client intake and basic documentation." },
      { title: "Delayed Lead SLA", desc: "Leads cold-start after 30 minutes, drastically cutting deal closing probability." }
    ],
    aiEmployeesRoster: [
      { role: "AI Operations Assistant", task: "Audits operational throughput and enforces SLA timelines." },
      { role: "AI Lead Qualification Agent", task: "Evaluates prospective client intent prior to executive escalation." }
    ],
    workflowSteps: [
      { step: "01", title: "Custom Knowledge Injection", detail: "Import industry SOPs & regulatory compliance rules." },
      { step: "02", title: "AI Employee Deployment", detail: "Deploy custom digital workforce across communication channels." }
    ],
    metrics: {
      responseSpeed: "< 5 Seconds",
      missedCallRate: "0%",
      avgHoursSaved: "25+ Hrs/Wk",
      revenueImpact: "Instant Scalable Capacity"
    }
  }
];
