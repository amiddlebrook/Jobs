// TIER 5 CAREERS (19 careers)
// Expert Level - 10+ years, PE license, and/or specialty certifications

const T5_CAREERS = {
    "hvac-system-design-engineer": {
        name: "HVAC System Design Engineer",
        tier: 5, category: "Engineering", onet: "17-2141.00",
        description: "Design complete HVAC systems for commercial and industrial buildings including load calculations, equipment selection, and ductwork layout.",
        dayInLife: "Work involves performing load calculations, equipment selection, CAD drafting, specification writing, and coordinating with architects and contractors.",
        salary: { entry: 75000, median: 105000, p75: 135000, top10: 175000 },
        growth: 6, timeToOwn: "10+ years or PE license",
        education: { min: "Bachelor's Mechanical Engineering", preferred: "PE license", apprenticeship: "4 years under PE for licensure", ce: "PE renewal requirements" },
        licensing: { body: "State PE board", background: "Required", bonding: "N/A (E&O insurance)", insurance: "$1M E&O" },
        pros: ["Professional engineering status", "Design authority", "High base salaries", "Consulting potential", "Less physical work"],
        cons: ["PE licensure process 4+ years", "Stamp liability", "Design errors costly", "Tight deadlines", "Project coordination complex"],
        physical: ["Office-based", "Site visits", "Professional role", "Mental demands"],
        certifications: [{ name: "PE (Professional Engineer)", bonus: "Required for stamping" }, { name: "ASHRAE Member", bonus: "+10% industry credibility" }],
        business: { startupMin: 40000, startupTypical: 100000, year1Revenue: 500000, breakeven: "6 months" }
    },

    "electrical-power-systems-engineer": {
        name: "Electrical Power Systems Engineer",
        tier: 5, category: "Engineering", onet: "17-2071.00",
        description: "Design electrical power distribution systems for commercial and industrial facilities including short circuit analysis, coordination studies, and arc flash assessments.",
        dayInLife: "Work involves power system modeling, protection coordination, arc flash studies, specification writing, and construction support.",
        salary: { entry: 82000, median: 115000, p75: 150000, top10: 195000 },
        growth: 7, timeToOwn: "10+ years or PE license",
        education: { min: "Bachelor's Electrical Engineering", preferred: "PE license", apprenticeship: "4 years under PE for licensure", ce: "PE renewal requirements" },
        licensing: { body: "State PE board", background: "Required", bonding: "N/A (E&O insurance)", insurance: "$2M E&O" },
        pros: ["Highest engineering rates", "Critical infrastructure", "Data center demand", "Arc flash expertise premium", "Consulting flexibility"],
        cons: ["PE licensure required", "Liability exposure", "Complex calculations", "Code expertise demands", "Software costs"],
        physical: ["Office-based", "Site visits", "Professional role", "Analytical work"],
        certifications: [{ name: "PE (Professional Engineer)", bonus: "Required for stamping" }, { name: "SKM/ETAP certified", bonus: "+15% on analysis" }],
        business: { startupMin: 50000, startupTypical: 125000, year1Revenue: 650000, breakeven: "7 months" }
    },

    "fire-protection-engineer": {
        name: "Fire Protection Engineer",
        tier: 5, category: "Engineering", onet: "17-2111.02",
        description: "Design fire protection systems and develop fire safety strategies for buildings including sprinkler design, fire alarm specification, and life safety analysis.",
        dayInLife: "Work involves hydraulic calculations, fire alarm design, code analysis, life safety evaluations, and coordinating with AHJs.",
        salary: { entry: 78000, median: 110000, p75: 145000, top10: 185000 },
        growth: 7, timeToOwn: "10+ years or PE license",
        education: { min: "Bachelor's Fire Protection/Mechanical Engineering", preferred: "PE license + SFPE member", apprenticeship: "4 years under PE", ce: "PE renewal + SFPE" },
        licensing: { body: "State PE board", background: "Required", bonding: "N/A (E&O insurance)", insurance: "$2M E&O" },
        pros: ["Growing code complexity", "Code-required for projects", "Specialized demand", "Life safety premium", "Less competition"],
        cons: ["PE in fire protection", "Insurance high", "AHJ relationships critical", "Liability for safety", "Complex analysis"],
        physical: ["Office-based", "Site inspections", "Professional role", "AHJ meetings"],
        certifications: [{ name: "PE (Professional Engineer)", bonus: "Required for stamping" }, { name: "SFPE Member", bonus: "+15% industry credibility" }],
        business: { startupMin: 50000, startupTypical: 125000, year1Revenue: 600000, breakeven: "7 months" }
    },

    "plumbing-design-engineer": {
        name: "Plumbing Design Engineer",
        tier: 5, category: "Engineering", onet: "17-2141.02",
        description: "Design plumbing and sanitary systems for commercial and institutional buildings including water supply, drainage, and specialty systems.",
        dayInLife: "Work involves fixture count calculations, pipe sizing, isometric drawings, specification writing, and coordinating with architects.",
        salary: { entry: 72000, median: 100000, p75: 130000, top10: 165000 },
        growth: 5, timeToOwn: "10+ years or PE license",
        education: { min: "Bachelor's Mechanical Engineering", preferred: "PE license", apprenticeship: "4 years under PE", ce: "PE renewal requirements" },
        licensing: { body: "State PE board", background: "Required", bonding: "N/A (E&O insurance)", insurance: "$1M E&O" },
        pros: ["Essential building systems", "Healthcare/lab specialty", "Design authority", "Stable demand", "Consulting potential"],
        cons: ["PE licensure time", "Code complexity", "Medical gas specialization", "Multi-code coordination", "Less glamorous"],
        physical: ["Office-based", "Site visits", "Professional role", "Technical work"],
        certifications: [{ name: "PE (Professional Engineer)", bonus: "Required for stamping" }, { name: "ASPE Member", bonus: "+10% plumbing credibility" }],
        business: { startupMin: 40000, startupTypical: 100000, year1Revenue: 500000, breakeven: "6 months" }
    },

    "controls-systems-engineer": {
        name: "Controls Systems Engineer",
        tier: 5, category: "Engineering", onet: "17-2199.00",
        description: "Design and integrate building automation and control systems including sequence of operations, points lists, and system architecture.",
        dayInLife: "Work involves developing control sequences, BMS architecture design, integration specifications, and commissioning support.",
        salary: { entry: 80000, median: 112000, p75: 145000, top10: 185000 },
        growth: 10, timeToOwn: "10+ years specialized",
        education: { min: "Bachelor's Mechanical/Electrical/Controls Engineering", preferred: "Specialized controls experience", apprenticeship: "Extensive platform experience", ce: "BACnet certification" },
        licensing: { body: "Some states electrical/PE", background: "Varies", bonding: "N/A", insurance: "$1M E&O" },
        pros: ["Growing smart building demand", "IoT integration", "High rates", "Consulting flexibility", "Technical leadership"],
        cons: ["Multi-platform expertise", "Rapid technology change", "Integration complexity", "Commissioning challenges", "Documentation intensive"],
        physical: ["Office-based", "Site commissioning", "Professional role", "Technical work"],
        certifications: [{ name: "BACnet certification", bonus: "+15% integration" }, { name: "Tridium Niagara", bonus: "+20% analytics platform" }],
        business: { startupMin: 45000, startupTypical: 110000, year1Revenue: 550000, breakeven: "6 months" }
    },

    "energy-management-consultant": {
        name: "Energy Management Consultant",
        tier: 5, category: "Specialty", onet: "13-1199.00",
        description: "Provide energy auditing, benchmarking, and optimization consulting for commercial and industrial facilities to reduce utility costs and carbon footprint.",
        dayInLife: "Work involves utility bill analysis, building energy modeling, audit reports, incentive program coordination, and implementation oversight.",
        salary: { entry: 70000, median: 100000, p75: 135000, top10: 175000 },
        growth: 10, timeToOwn: "10+ years + CEM",
        education: { min: "Bachelor's Engineering/Science", preferred: "CEM certification", apprenticeship: "10+ years building systems", ce: "CEM renewal" },
        licensing: { body: "AEE certification", background: "Varies", bonding: "N/A", insurance: "$1M E&O" },
        pros: ["Climate policy driving demand", "Consulting rates $150-300/hr", "Energy savings shared potential", "Utility program relationships", "Growing market"],
        cons: ["Performance guarantees risky", "Policy changes", "Measurement & verification", "Client ROI expectations", "Multiple building types"],
        physical: ["Office-based", "Site audits", "Professional role", "Analytical work"],
        certifications: [{ name: "CEM (Certified Energy Manager)", bonus: "Required for credibility" }, { name: "LEED AP", bonus: "+15% green building" }],
        business: { startupMin: 35000, startupTypical: 85000, year1Revenue: 500000, breakeven: "5 months" }
    },

    "construction-management-mep": {
        name: "Construction Management (MEP)",
        tier: 5, category: "Management", onet: "11-9021.00",
        description: "Manage mechanical, electrical, and plumbing construction projects from bidding through closeout for commercial and industrial facilities.",
        dayInLife: "Work involves bid evaluation, subcontractor management, schedule coordination, change order negotiation, and project closeout documentation.",
        salary: { entry: 78000, median: 115000, p75: 155000, top10: 210000 },
        growth: 6, timeToOwn: "10+ years + certifications",
        education: { min: "Bachelor's Construction/Engineering", preferred: "PMP or CCM certification", apprenticeship: "10+ years field + management", ce: "Certification renewal" },
        licensing: { body: "Various certifications", background: "Required", bonding: "Project-specific", insurance: "$2M GL + professional" },
        pros: ["High base + bonuses", "Project leadership", "Owner relationships", "Career advancement", "Industry respect"],
        cons: ["Project pressure/deadlines", "Subcontractor issues", "Schedule coordination", "Budget responsibility", "Travel common"],
        physical: ["Office and site", "Walk-throughs", "Professional role", "Meeting-intensive"],
        certifications: [{ name: "PMP", bonus: "+15% credibility" }, { name: "CCM", bonus: "+20% owner-side work" }],
        business: { startupMin: 60000, startupTypical: 150000, year1Revenue: 800000, breakeven: "8 months" }
    },

    "facility-director": {
        name: "Facility Director",
        tier: 5, category: "Management", onet: "11-3013.00",
        description: "Direct all facility operations including maintenance, capital projects, sustainability, and vendor management for large commercial or institutional campuses.",
        dayInLife: "Work involves budget management, staff supervision, capital planning, vendor contract negotiation, and stakeholder communication.",
        salary: { entry: 85000, median: 125000, p75: 165000, top10: 220000 },
        growth: 5, timeToOwn: "10-15+ years progressive",
        education: { min: "Bachelor's Engineering/Facilities Management", preferred: "CFM or FMP certification", apprenticeship: "Progressive facility management", ce: "Certification renewal" },
        licensing: { body: "IFMA certifications", background: "Required", bonding: "N/A", insurance: "Employer-provided" },
        pros: ["Executive-level position", "Strategic leadership", "Campus responsibility", "Six-figure salaries", "Professional recognition"],
        cons: ["24/7 responsibility", "Budget pressures", "Staff management", "Emergency response", "Multiple stakeholders"],
        physical: ["Office-based", "Campus walk-throughs", "Executive meetings", "Professional role"],
        certifications: [{ name: "CFM (Certified Facility Manager)", bonus: "+20% executive credibility" }, { name: "SFP (Sustainability Facility Professional)", bonus: "+15% sustainability" }],
        business: { startupMin: 50000, startupTypical: 125000, year1Revenue: 600000, breakeven: "7 months" }
    },

    "energy-services-company-esco": {
        name: "Energy Services Company (ESCO)",
        tier: 5, category: "Specialty", onet: "13-1199.00",
        description: "Provide comprehensive energy efficiency solutions including auditing, design, financing, installation, and measurement & verification with performance guarantees.",
        dayInLife: "Work involves energy audits, investment-grade analysis, performance contracting, project development, and M&V reporting.",
        salary: { entry: 80000, median: 120000, p75: 165000, top10: 250000 },
        growth: 9, timeToOwn: "10+ years + ESCO experience",
        education: { min: "Bachelor's Engineering", preferred: "CEM + PE preferred", apprenticeship: "ESCO industry experience", ce: "Multiple certifications" },
        licensing: { body: "Some states require registration", background: "Required", bonding: "Performance bonds", insurance: "$5M GL + professional" },
        pros: ["Shared savings potential", "Government/institutional market", "Long-term contracts", "Climate policy tailwind", "High deal value"],
        cons: ["Performance guarantee risk", "Long sales cycle", "Capital intensive", "M&V complexity", "Project execution risk"],
        physical: ["Office-based", "Site audits", "Executive meetings", "Professional role"],
        certifications: [{ name: "CEM", bonus: "Expected" }, { name: "CMVP", bonus: "+25% M&V credibility" }],
        business: { startupMin: 100000, startupTypical: 500000, year1Revenue: 2000000, breakeven: "18 months" }
    },

    "forensic-mep-consultant": {
        name: "Forensic MEP Consultant",
        tier: 5, category: "Specialty", onet: "17-2199.00",
        description: "Investigate failures and disputes related to mechanical, electrical, and plumbing systems for litigation support, insurance claims, and dispute resolution.",
        dayInLife: "Work involves site investigations, document review, root cause analysis, expert report writing, and providing deposition and trial testimony.",
        salary: { entry: 90000, median: 140000, p75: 190000, top10: 275000 },
        growth: 5, timeToOwn: "15+ years technical + legal",
        education: { min: "Bachelor's Engineering + PE", preferred: "PE + expert witness experience", apprenticeship: "Extensive field experience", ce: "PE renewal" },
        licensing: { body: "State PE board", background: "Required", bonding: "N/A", insurance: "$2M E&O" },
        pros: ["Premium hourly rates $300-600", "Interesting cases", "Expert recognition", "Litigation support steady", "Technical problem-solving"],
        cons: ["Deposition pressure", "Attorney schedules", "Report writing intensive", "Objectivity critical", "Liability for opinions"],
        physical: ["Site investigations", "Document review", "Testimony", "Professional role"],
        certifications: [{ name: "PE (Professional Engineer)", bonus: "Required for credibility" }],
        business: { startupMin: 50000, startupTypical: 125000, year1Revenue: 700000, breakeven: "6 months" }
    },

    "mep-commissioning-authority": {
        name: "MEP Commissioning Authority",
        tier: 5, category: "Specialty", onet: "17-2199.00",
        description: "Serve as third-party commissioning authority for major construction projects, verifying system performance and ensuring owner requirements are met.",
        dayInLife: "Work involves developing commissioning plans, coordinating testing, witnessing performance verification, and preparing comprehensive reports.",
        salary: { entry: 85000, median: 125000, p75: 165000, top10: 215000 },
        growth: 9, timeToOwn: "10+ years + CxA certification",
        education: { min: "Bachelor's Engineering", preferred: "BCxP or CCP certification", apprenticeship: "Multi-trade field experience", ce: "Certification renewal" },
        licensing: { body: "ACG/BCxP certification", background: "Varies", bonding: "N/A", insurance: "$2M E&O" },
        pros: ["Third-party objectivity", "LEED requirements", "Healthcare/data center demand", "Professional rates", "Project variety"],
        cons: ["Documentation intensive", "Multiple system expertise", "Contractor relationships", "Travel extensive", "Owner expectations"],
        physical: ["Site work", "Testing procedures", "Professional role", "Technical analysis"],
        certifications: [{ name: "BCxP or CCP", bonus: "Required for credibility" }],
        business: { startupMin: 45000, startupTypical: 115000, year1Revenue: 650000, breakeven: "7 months" }
    },

    "building-enclosure-consultant": {
        name: "Building Enclosure Consultant",
        tier: 5, category: "Specialty", onet: "17-2199.00",
        description: "Provide consulting on building envelope design, waterproofing, air barriers, and moisture management including forensic investigation of failures.",
        dayInLife: "Work involves envelope design review, moisture modeling, site inspections, failure investigation, and developing remediation strategies.",
        salary: { entry: 75000, median: 108000, p75: 142000, top10: 185000 },
        growth: 6, timeToOwn: "10+ years + certifications",
        education: { min: "Bachelor's Architecture/Engineering", preferred: "RRC or BECA certification", apprenticeship: "Extensive envelope experience", ce: "Certification renewal" },
        licensing: { body: "RCI/BECA certifications", background: "Varies", bonding: "N/A", insurance: "$2M E&O" },
        pros: ["Growing energy code focus", "Forensic investigation demand", "Specialized expertise", "Professional rates", "Litigation support"],
        cons: ["Liability for failures", "Complex building science", "Travel for projects", "Documentation intensive", "Multi-trade knowledge"],
        physical: ["Site inspections", "Testing procedures", "Professional role", "Problem-solving"],
        certifications: [{ name: "RRC (Registered Roof Consultant)", bonus: "+20% roof forensics" }, { name: "BECA (Building Enclosure Commissioning)", bonus: "+25% new construction" }],
        business: { startupMin: 50000, startupTypical: 125000, year1Revenue: 600000, breakeven: "7 months" }
    },

    "acoustical-consultant": {
        name: "Acoustical Consultant",
        tier: 5, category: "Specialty", onet: "17-2199.00",
        description: "Provide acoustical design and noise control consulting for buildings including HVAC noise mitigation, room acoustics, and sound isolation.",
        dayInLife: "Work involves noise measurements, acoustic modeling, specification writing, and coordinating with architects and MEP engineers.",
        salary: { entry: 70000, median: 100000, p75: 135000, top10: 175000 },
        growth: 5, timeToOwn: "10+ years + specialized training",
        education: { min: "Bachelor's Engineering/Physics", preferred: "INCE Board Certification", apprenticeship: "Acoustical firm experience", ce: "INCE renewal" },
        licensing: { body: "INCE certification", background: "Varies", bonding: "N/A", insurance: "$1M E&O" },
        pros: ["Specialized niche", "High-end projects", "Studios/theaters premium", "Healthcare acoustics growth", "Less competition"],
        cons: ["Small market", "Specialized equipment", "Subjective evaluations", "HVAC coordination", "Remediation costly"],
        physical: ["Site measurements", "Testing", "Professional role", "Technical analysis"],
        certifications: [{ name: "INCE Board Certification", bonus: "Expected for credibility" }],
        business: { startupMin: 40000, startupTypical: 100000, year1Revenue: 450000, breakeven: "6 months" }
    },

    "lighting-design-consultant": {
        name: "Lighting Design Consultant",
        tier: 5, category: "Specialty", onet: "27-1027.00",
        description: "Design architectural and theatrical lighting for commercial, hospitality, and cultural projects including daylighting integration and controls.",
        dayInLife: "Work involves lighting calculations, fixture selection, visualization renderings, specification writing, and coordinating with architects and electrical engineers.",
        salary: { entry: 65000, median: 95000, p75: 128000, top10: 165000 },
        growth: 5, timeToOwn: "10+ years + LC certification",
        education: { min: "Bachelor's Architecture/Interior Design/Engineering", preferred: "LC certification + portfolio", apprenticeship: "Lighting design firm experience", ce: "LC renewal" },
        licensing: { body: "LC certification (NCQLP)", background: "Varies", bonding: "N/A", insurance: "$1M E&O" },
        pros: ["Creative professional work", "High-end projects", "Hospitality demand", "Daylighting expertise valued", "Portfolio recognition"],
        cons: ["Artistic subjectivity", "Coordination with multiple trades", "Visualization time", "Energy code compliance", "Control system complexity"],
        physical: ["Office-based design", "Site visits", "Professional role", "Creative work"],
        certifications: [{ name: "LC (Lighting Certified)", bonus: "+15% credibility" }, { name: "LEED AP", bonus: "+10% sustainable projects" }],
        business: { startupMin: 35000, startupTypical: 90000, year1Revenue: 400000, breakeven: "6 months" }
    },

    "vertical-transportation-consultant": {
        name: "Vertical Transportation Consultant",
        tier: 5, category: "Specialty", onet: "17-2199.00",
        description: "Provide consulting on elevators, escalators, and other vertical transportation systems including traffic analysis, specification, and modernization planning.",
        dayInLife: "Work involves traffic studies, equipment specification, bid evaluation, construction observation, and maintenance contract review.",
        salary: { entry: 80000, median: 115000, p75: 152000, top10: 195000 },
        growth: 5, timeToOwn: "10-15 years specialized",
        education: { min: "Bachelor's Engineering", preferred: "Elevator industry experience", apprenticeship: "VT consulting experience", ce: "Code training" },
        licensing: { body: "State varies", background: "Varies", bonding: "N/A", insurance: "$2M E&O" },
        pros: ["Specialized niche", "New construction + modernization", "Ongoing maintenance consulting", "High rates", "Less competition"],
        cons: ["Very specialized market", "Elevator vendor relationships", "Long project cycles", "Code complexity", "Small industry"],
        physical: ["Site inspections", "Equipment review", "Professional role", "Technical analysis"],
        certifications: [{ name: "ASME A17 code expertise", bonus: "+20% specification credibility" }],
        business: { startupMin: 45000, startupTypical: 110000, year1Revenue: 550000, breakeven: "7 months" }
    },

    "healthcare-facilities-consultant": {
        name: "Healthcare Facilities Consultant",
        tier: 5, category: "Specialty", onet: "17-2199.00",
        description: "Provide specialized MEP consulting for healthcare facilities including infection control, code compliance, and medical equipment coordination.",
        dayInLife: "Work involves FGI Guidelines compliance, ICRA planning, medical gas design coordination, and equipment infrastructure planning.",
        salary: { entry: 85000, median: 125000, p75: 165000, top10: 215000 },
        growth: 7, timeToOwn: "10+ years healthcare",
        education: { min: "Bachelor's Engineering", preferred: "CHC certification + PE", apprenticeship: "Healthcare project experience", ce: "Multiple certifications" },
        licensing: { body: "ASHE/CHC certification", background: "Required", bonding: "N/A", insurance: "$2M E&O" },
        pros: ["Growing healthcare construction", "Specialized expertise valued", "Infection control focus", "High rates", "Repeat clients"],
        cons: ["FGI Guidelines complexity", "Accreditation pressure", "24/7 facility operations", "Multi-stakeholder coordination", "Regulatory changes"],
        physical: ["Site visits", "Professional meetings", "Office-based", "Technical analysis"],
        certifications: [{ name: "CHC (Certified Healthcare Constructor)", bonus: "+25% healthcare credibility" }, { name: "PE", bonus: "+15% design authority" }],
        business: { startupMin: 55000, startupTypical: 140000, year1Revenue: 750000, breakeven: "8 months" }
    },

    "mission-critical-facilities-consultant": {
        name: "Mission Critical Facilities Consultant",
        tier: 5, category: "Specialty", onet: "17-2199.00",
        description: "Provide consulting for data centers, trading floors, and other mission-critical facilities on power, cooling, and infrastructure design.",
        dayInLife: "Work involves tier classification analysis, redundancy design, capacity planning, and commissioning oversight for critical facilities.",
        salary: { entry: 95000, median: 140000, p75: 185000, top10: 250000 },
        growth: 15, timeToOwn: "10+ years data center/critical",
        education: { min: "Bachelor's Engineering", preferred: "ATD/Uptime Institute certification", apprenticeship: "Data center experience", ce: "Multiple certifications" },
        licensing: { body: "Uptime Institute/ATD", background: "Required", bonding: "N/A", insurance: "$5M E&O" },
        pros: ["Highest demand growth", "Premium rates $250-500/hr", "Data center expansion", "AI/cloud driving growth", "Expert status"],
        cons: ["High stakes pressure", "Certification investment", "Travel extensive", "24/7 availability expectations", "Liability for uptime"],
        physical: ["Site visits", "Testing procedures", "Professional role", "Technical leadership"],
        certifications: [{ name: "ATD (Accredited Tier Designer)", bonus: "+30% Uptime Institute credibility" }],
        business: { startupMin: 75000, startupTypical: 200000, year1Revenue: 1200000, breakeven: "10 months" }
    },

    "sustainability-leed-consultant": {
        name: "Sustainability & LEED Consultant",
        tier: 5, category: "Specialty", onet: "13-1199.00",
        description: "Guide projects through LEED certification and other green building standards, providing sustainability analysis and documentation.",
        dayInLife: "Work involves credit analysis, energy modeling coordination, documentation management, and certification submission review.",
        salary: { entry: 68000, median: 98000, p75: 130000, top10: 170000 },
        growth: 10, timeToOwn: "8-10 years + LEED AP",
        education: { min: "Bachelor's Architecture/Engineering/Environmental", preferred: "LEED AP BD+C", apprenticeship: "LEED project experience", ce: "LEED credential renewal" },
        licensing: { body: "GBCI certification", background: "Varies", bonding: "N/A", insurance: "$1M E&O" },
        pros: ["ESG driving demand", "Growing code requirements", "Multiple certification systems", "Corporate sustainability goals", "Policy tailwind"],
        cons: ["Credit interpretation", "Documentation burden", "Energy modeling coordination", "Certification cost to clients", "Market fluctuation with policy"],
        physical: ["Office-based", "Site visits", "Professional role", "Analytical work"],
        certifications: [{ name: "LEED AP BD+C", bonus: "Required for credibility" }, { name: "WELL AP", bonus: "+15% wellness projects" }],
        business: { startupMin: 35000, startupTypical: 85000, year1Revenue: 450000, breakeven: "5 months" }
    },

    "building-analytics-platform": {
        name: "Building Analytics Platform",
        tier: 5, category: "Technology", onet: "15-1299.00",
        description: "Deploy and manage fault detection, diagnostics, and building analytics platforms to optimize building performance and energy efficiency.",
        dayInLife: "Work involves platform deployment, rule configuration, data analysis, fault prioritization, and presenting optimization recommendations.",
        salary: { entry: 85000, median: 125000, p75: 168000, top10: 220000 },
        growth: 18, timeToOwn: "8-10 years + specialized",
        education: { min: "Bachelor's Engineering/CS", preferred: "Analytics platform certifications", apprenticeship: "BMS + analytics experience", ce: "Platform certifications" },
        licensing: { body: "Platform certifications", background: "Varies", bonding: "N/A", insurance: "$1M E&O" },
        pros: ["Explosive market growth", "SaaS revenue potential", "Energy/carbon focus", "Technology innovation", "Data-driven insights valued"],
        cons: ["Platform proliferation", "Data quality challenges", "BMS integration complexity", "Customer training", "Cybersecurity concerns"],
        physical: ["Office-based", "Site deployments", "Professional role", "Technical/analytical"],
        certifications: [{ name: "SkySpark/DENT certified", bonus: "+25% analytics platform" }, { name: "BMS platform expertise", bonus: "+20% integration" }],
        business: { startupMin: 50000, startupTypical: 125000, year1Revenue: 700000, breakeven: "8 months" }
    }
};

window.T5_CAREERS = T5_CAREERS;
Object.assign(window.CAREERS_DATA || {}, T5_CAREERS);
