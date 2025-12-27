// TIER 1 CAREERS - Part 3 (Remaining T1: Industrial, Restoration)

const T1_CAREERS_PART3 = {
    "automation-robotics-integration": {
        name: "Automation & Robotics Integration",
        tier: 1, category: "Technology", onet: "17-2199.00",
        description: "Design, program, and integrate industrial robots and automated systems for manufacturing, packaging, and material handling applications.",
        dayInLife: "Work involves robot programming, safety system integration, PLC interfacing, vision system setup, and production line commissioning.",
        salary: { entry: 55000, median: 80000, p75: 105000, top10: 140000 },
        growth: 12, timeToOwn: "6-12 months",
        education: { min: "Associate degree or trade school", preferred: "Robotics/automation certification", apprenticeship: "None required", ce: "Manufacturer training" },
        licensing: { body: "None typically", background: "Often required", bonding: "$25,000", insurance: "$2M GL" },
        pros: ["High demand/labor shortage", "Premium rates $100-200/hr", "Industrial 4.0 growth", "Technical innovation", "Manufacturing reshoring"],
        cons: ["Steep learning curve", "Multiple platforms", "Travel to plants", "Production pressure", "Safety critical"],
        physical: ["Working around machinery", "Programming/teaching robots", "Light physical", "Safety equipment required"],
        certifications: [{ name: "FANUC/ABB/Kuka Certified", bonus: "+30% on integration projects" }],
        business: { startupMin: 40000, startupTypical: 100000, year1Revenue: 450000, breakeven: "8 months" }
    },

    "conveyor-material-handling": {
        name: "Conveyor & Material Handling",
        tier: 1, category: "Commercial", onet: "49-9041.00",
        description: "Install, maintain, and repair conveyor systems, sortation equipment, and material handling solutions for warehouses and distribution centers.",
        dayInLife: "Work involves belt/roller conveyor installation, motor/drive replacement, PLC troubleshooting, preventive maintenance, and system modifications.",
        salary: { entry: 42000, median: 62000, p75: 82000, top10: 108000 },
        growth: 8, timeToOwn: "3-6 months",
        education: { min: "High School / GED", preferred: "Mechanical/electrical experience", apprenticeship: "None required", ce: "Manufacturer training" },
        licensing: { body: "Some states electrical", background: "Often required", bonding: "$15,000", insurance: "$1M GL" },
        pros: ["E-commerce/warehouse growth", "Recurring maintenance contracts", "Emergency service premium", "24/7 uptime critical", "Technical expertise valued"],
        cons: ["Night/weekend maintenance", "Production pressure", "Heavy equipment", "Travel to facilities", "Dirty environments"],
        physical: ["Heavy lifting", "Working around moving equipment", "Climbing/crawling", "Industrial safety"],
        certifications: [{ name: "Hytrol/Interroll Certified", bonus: "+15% on system installs" }],
        business: { startupMin: 25000, startupTypical: 65000, year1Revenue: 320000, breakeven: "6 months" }
    },

    "environmental-remediation": {
        name: "Environmental Remediation",
        tier: 1, category: "Specialty", onet: "47-4041.00",
        description: "Clean up contaminated sites including soil remediation, groundwater treatment, underground storage tank removal, and hazardous waste handling.",
        dayInLife: "Work involves site assessment, excavation of contaminated soil, monitoring well installation, vapor mitigation, and regulatory compliance documentation.",
        salary: { entry: 42000, median: 62000, p75: 82000, top10: 110000 },
        growth: 6, timeToOwn: "6-12 months",
        education: { min: "High School / GED", preferred: "40-hour HAZWOPER", apprenticeship: "None required", ce: "8-hour HAZWOPER annual" },
        licensing: { body: "EPA/state environmental", background: "Required", bonding: "$50,000+", insurance: "$2M GL + pollution" },
        pros: ["Regulatory-driven demand", "Government contracts", "Specialized = less competition", "Real estate transaction trigger", "High-value projects"],
        cons: ["HAZWOPER training required", "High insurance costs", "Regulatory complexity", "Liability exposure", "Heavy equipment needed"],
        physical: ["Operating excavation equipment", "Working in PPE", "Confined space entry", "Outdoor conditions"],
        certifications: [{ name: "40-hour HAZWOPER", bonus: "Required" }, { name: "LSP/PE coordination", bonus: "+20% on complex sites" }],
        business: { startupMin: 50000, startupTypical: 150000, year1Revenue: 500000, breakeven: "8 months" }
    },

    "tank-installation-repair": {
        name: "Tank Installation & Repair",
        tier: 1, category: "Specialty", onet: "47-2152.00",
        description: "Install, repair, and test underground and aboveground storage tanks for fuel, oil, and chemical storage including leak detection systems.",
        dayInLife: "Work involves tank excavation/installation, piping connections, leak detector installation, tank testing, and removal of old tanks.",
        salary: { entry: 45000, median: 65000, p75: 85000, top10: 115000 },
        growth: 5, timeToOwn: "6-12 months",
        education: { min: "High School / GED", preferred: "STI certification", apprenticeship: "None required", ce: "EPA/state tank technician" },
        licensing: { body: "State tank installer license", background: "Required", bonding: "$50,000+", insurance: "$2M GL + pollution" },
        pros: ["State license = barrier to entry", "Regulatory compliance demand", "Gas station upgrades", "High-value projects", "Less competition"],
        cons: ["State licensing required", "Pollution liability", "Heavy equipment", "Regulatory complexity", "Environmental risk"],
        physical: ["Excavation work", "Heavy tank handling", "Working in excavations", "Pipe fitting"],
        certifications: [{ name: "State tank installer license", bonus: "Required" }, { name: "STI SP001", bonus: "+15% on tank inspections" }],
        business: { startupMin: 60000, startupTypical: 175000, year1Revenue: 550000, breakeven: "10 months" }
    },

    "commercial-signage-installation": {
        name: "Commercial Signage Installation",
        tier: 1, category: "Commercial", onet: "47-2211.00",
        description: "Install and service illuminated signs, channel letters, monument signs, and digital displays for commercial and retail clients.",
        dayInLife: "Work involves crane/bucket truck operation, electrical connections, LED conversions, sign repair, and coordinating with landlords/permitting.",
        salary: { entry: 38000, median: 55000, p75: 72000, top10: 95000 },
        growth: 5, timeToOwn: "2-3 months",
        education: { min: "High School / GED", preferred: "Electrical/sign experience", apprenticeship: "None required", ce: "UL sign service" },
        licensing: { body: "Electrical license required in many areas", background: "Often required", bonding: "$15,000", insurance: "$1M GL" },
        pros: ["Commercial recurring maintenance", "New business openings", "LED retrofit demand", "National account potential", "Equipment = barrier"],
        cons: ["Bucket truck investment", "Electrical license often needed", "Weather dependent", "Height work", "Night installations"],
        physical: ["Working at heights", "Electrical work", "Heavy sign handling", "Bucket truck operation"],
        certifications: [{ name: "ISA Certified", bonus: "+15% on bids" }, { name: "UL Listed installer", bonus: "+12% credibility" }],
        business: { startupMin: 40000, startupTypical: 120000, year1Revenue: 350000, breakeven: "6 months" }
    },

    "water-damage-mitigation": {
        name: "Water Damage Mitigation",
        tier: 1, category: "Restoration", onet: "47-4071.00",
        description: "Respond to water damage emergencies, extract water, install drying equipment, monitor moisture levels, and prevent secondary damage.",
        dayInLife: "Work involves emergency response, water extraction, removing wet materials, setting up dehumidifiers/air movers, and daily moisture monitoring.",
        salary: { entry: 38000, median: 55000, p75: 75000, top10: 100000 },
        growth: 7, timeToOwn: "1-2 months",
        education: { min: "High School / GED", preferred: "IICRC WRT", apprenticeship: "None required", ce: "IICRC renewal" },
        licensing: { body: "Local jurisdiction", background: "Required", bonding: "$25,000", insurance: "$1M GL" },
        pros: ["24/7 emergency = premium rates", "Insurance pays well", "Leads to rebuild work", "Always in demand", "Scalable"],
        cons: ["24/7 availability expected", "Physical demands", "Unpredictable schedule", "Equipment investment", "Insurance billing complexity"],
        physical: ["Water extraction", "Equipment carrying", "Demolition work", "Working in wet conditions"],
        certifications: [{ name: "IICRC WRT", bonus: "+15% insurance acceptance" }, { name: "IICRC AMRT", bonus: "+20% mold add-on" }],
        business: { startupMin: 25000, startupTypical: 65000, year1Revenue: 350000, breakeven: "4 months" }
    },

    "fire-smoke-restoration": {
        name: "Fire & Smoke Restoration",
        tier: 1, category: "Restoration", onet: "47-4071.00",
        description: "Restore properties after fire and smoke damage including cleaning, deodorization, content restoration, and structural repairs.",
        dayInLife: "Work involves damage assessment, smoke and soot cleaning, ozone/hydroxyl treatment, content cleaning, and reconstruction coordination.",
        salary: { entry: 40000, median: 58000, p75: 78000, top10: 105000 },
        growth: 5, timeToOwn: "2-3 months",
        education: { min: "High School / GED", preferred: "IICRC FSRT", apprenticeship: "None required", ce: "IICRC renewal" },
        licensing: { body: "Contractor license often", background: "Required", bonding: "$25,000", insurance: "$1M GL" },
        pros: ["High-value restoration projects", "Insurance pays for quality", "Full-service potential", "Less competition than water", "Rebuild add-on"],
        cons: ["Specialized cleaning required", "Odor control challenging", "Toxic exposure risk", "Insurance documentation", "Seasonal (winter peaks)"],
        physical: ["Cleaning at heights", "Demolition work", "Chemical handling", "PPE required"],
        certifications: [{ name: "IICRC FSRT", bonus: "+20% on fire claims" }, { name: "IICRC OCT", bonus: "+15% on odor work" }],
        business: { startupMin: 30000, startupTypical: 75000, year1Revenue: 380000, breakeven: "5 months" }
    },

    "biohazard-cleanup": {
        name: "Biohazard Cleanup",
        tier: 1, category: "Restoration", onet: "47-4071.00",
        description: "Clean and remediate crime scenes, trauma scenes, hoarding situations, and other biohazard conditions following OSHA bloodborne pathogen standards.",
        dayInLife: "Work involves hazardous material assessment, PPE donning, biological waste removal, surface disinfection, and proper waste disposal.",
        salary: { entry: 42000, median: 62000, p75: 82000, top10: 110000 },
        growth: 6, timeToOwn: "1-2 months",
        education: { min: "High School / GED", preferred: "OSHA bloodborne pathogen", apprenticeship: "None required", ce: "Annual BBP training" },
        licensing: { body: "State varies, EPA hazmat", background: "Required (often fingerprints)", bonding: "$25,000", insurance: "$2M GL" },
        pros: ["Premium pricing $500-2000+/hr", "Less competition", "24/7 emergency income", "Repeat from property managers", "Quick turnaround"],
        cons: ["Emotionally difficult", "Health hazards", "PPE intensive", "Background checks strict", "Marketing challenging"],
        physical: ["Full PPE work", "Removal of materials", "Cleaning/disinfecting", "Waste handling"],
        certifications: [{ name: "OSHA Bloodborne Pathogen", bonus: "Required" }, { name: "ABRA Certified", bonus: "+15% credibility" }],
        business: { startupMin: 15000, startupTypical: 40000, year1Revenue: 280000, breakeven: "3 months" }
    },

    "leak-detection-services": {
        name: "Leak Detection Services",
        tier: 1, category: "Specialty", onet: "47-4099.00",
        description: "Locate hidden water leaks using electronic detection, thermal imaging, acoustic equipment, and tracer gas in residential and commercial buildings.",
        dayInLife: "Work involves interviewing clients, deploying detection equipment, tracing water sources, documenting findings, and recommending repairs.",
        salary: { entry: 45000, median: 65000, p75: 85000, top10: 115000 },
        growth: 7, timeToOwn: "1-2 months",
        education: { min: "High School / GED", preferred: "Plumbing/restoration background", apprenticeship: "None required", ce: "Equipment training" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$10,000", insurance: "$1M GL + E&O" },
        pros: ["Specialized = premium rates $300+/visit", "Quick visits", "Referrals from plumbers/restorers", "Diagnostic expertise valued", "Low overhead"],
        cons: ["Equipment investment $20k+", "False negatives liability", "Competition from plumbers", "Travel time between jobs", "Seasonal (winter peaks)"],
        physical: ["Carrying equipment", "Crawling to access", "Operating detection gear", "Light physical"],
        certifications: [{ name: "LeakTronics Certified", bonus: "+15% customer trust" }],
        business: { startupMin: 20000, startupTypical: 50000, year1Revenue: 200000, breakeven: "4 months" }
    },

    "asbestos-lead-abatement": {
        name: "Asbestos & Lead Abatement",
        tier: 1, category: "Specialty", onet: "47-4041.00",
        description: "Safely remove asbestos-containing materials and lead-based paint from residential and commercial buildings following EPA and OSHA regulations.",
        dayInLife: "Work involves containment setup, negative air pressure, wet removal techniques, waste bagging, air monitoring, and proper disposal.",
        salary: { entry: 45000, median: 65000, p75: 85000, top10: 115000 },
        growth: 4, timeToOwn: "3-6 months",
        education: { min: "High School / GED", preferred: "State abatement license", apprenticeship: "State-required training hours", ce: "Annual refreshers" },
        licensing: { body: "State/EPA asbestos license", background: "Required", bonding: "$50,000+", insurance: "$2M GL + pollution" },
        pros: ["Regulatory-required work", "Pre-renovation demand", "High rates for licensed work", "Commercial opportunities", "State license = barrier"],
        cons: ["Strict licensing requirements", "High insurance costs", "Health hazards", "Disposal costs", "Medical monitoring required"],
        physical: ["Working in full Tyvek/respirators", "Demolition work", "Bag handling", "Hot containments"],
        certifications: [{ name: "State asbestos supervisor", bonus: "Required" }, { name: "EPA RRP Certified", bonus: "+15% on lead work" }],
        business: { startupMin: 40000, startupTypical: 120000, year1Revenue: 450000, breakeven: "8 months" }
    }
};

window.T1_CAREERS_PART3 = T1_CAREERS_PART3;
Object.assign(window.CAREERS_DATA || {}, T1_CAREERS_PART3);
