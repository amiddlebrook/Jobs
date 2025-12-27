// TIER 1 CAREERS - Part 2 (Technology & Commercial)

const T1_CAREERS_PART2 = {
    "building-automation-controls": {
        name: "Building Automation & Controls",
        tier: 1, category: "Technology", onet: "49-2094.00",
        description: "Install, program, and service building management systems (BMS) that control HVAC, lighting, and energy management in commercial buildings.",
        dayInLife: "Work involves installing sensors/controllers, wiring to BMS panels, programming sequences, commissioning systems, and remote troubleshooting.",
        salary: { entry: 48000, median: 70000, p75: 90000, top10: 115000 },
        growth: 10, timeToOwn: "3-6 months",
        education: { min: "High School / GED", preferred: "Manufacturer certifications", apprenticeship: "None required", ce: "Platform-specific training" },
        licensing: { body: "Low-voltage license in some states", background: "Often required", bonding: "$15,000", insurance: "$1M GL" },
        pros: ["High demand", "Recurring service contracts", "Energy efficiency focus", "Technical challenge", "Growing IoT integration"],
        cons: ["Complex programming", "Multiple platforms to learn", "Commercial hours", "Travel often required", "Cybersecurity concerns"],
        physical: ["Light physical work", "Panel wiring", "Control device installation", "Ladder work"],
        certifications: [{ name: "Tridium Niagara AX", bonus: "+25% on integration projects" }, { name: "Johnson Controls Certified", bonus: "+20% manufacturer support" }],
        business: { startupMin: 20000, startupTypical: 55000, year1Revenue: 280000, breakeven: "5 months" }
    },

    "testing-adjusting-balancing": {
        name: "Testing, Adjusting & Balancing",
        tier: 1, category: "Mechanical", onet: "49-9021.00",
        description: "Test and balance HVAC air and water systems in commercial buildings to ensure proper flow rates, temperatures, and system performance.",
        dayInLife: "Work involves measuring airflow at diffusers, adjusting dampers, testing water flow, balancing fan speeds, and generating detailed reports.",
        salary: { entry: 45000, median: 65000, p75: 85000, top10: 110000 },
        growth: 6, timeToOwn: "3-6 months after certification",
        education: { min: "High School / GED", preferred: "AABC/NEBB certification", apprenticeship: "None required", ce: "Recertification required" },
        licensing: { body: "AABC/NEBB/TABB", background: "Varies", bonding: "$15,000", insurance: "$1M GL + E&O" },
        pros: ["Required for commissioning", "Specialized skill = premium", "Commercial relationships", "Technical expertise valued", "Clean indoor work"],
        cons: ["Certification investment", "Expensive instruments", "Report documentation heavy", "Commercial hours", "Travel often"],
        physical: ["Ladder work", "Carrying test instruments", "Crawling to access points", "Working at heights"],
        certifications: [{ name: "AABC/NEBB Certified", bonus: "+25% on spec work" }],
        business: { startupMin: 25000, startupTypical: 65000, year1Revenue: 250000, breakeven: "6 months" }
    },

    "backflow-testing": {
        name: "Backflow Testing",
        tier: 1, category: "Mechanical", onet: "47-2152.00",
        description: "Test, certify, and repair backflow prevention devices required on commercial and residential water systems to protect public water supply.",
        dayInLife: "Work involves annual testing of backflow preventers using gauge assemblies, documenting results, submitting certifications, and performing repairs/rebuilds.",
        salary: { entry: 40000, median: 58000, p75: 75000, top10: 95000 },
        growth: 4, timeToOwn: "1-2 months after certification",
        education: { min: "High School / GED", preferred: "State/ABPA certification", apprenticeship: "None required", ce: "Annual recertification" },
        licensing: { body: "State/water authority", background: "Required", bonding: "$5,000", insurance: "$500K GL" },
        pros: ["Required annual testing = recurring", "Quick tests $50-150 each", "Route-based efficiency", "Add-on to plumbing", "Low overhead"],
        cons: ["Seasonal (spring deadline often)", "Certification required", "Record keeping required", "Competition from plumbers", "Low per-test revenue"],
        physical: ["Kneeling for devices", "Carrying test kit", "Outdoor weather exposure", "Light physical"],
        certifications: [{ name: "State Backflow Certification", bonus: "Required" }, { name: "ABPA Certified", bonus: "+10% professional credibility" }],
        business: { startupMin: 5000, startupTypical: 15000, year1Revenue: 120000, breakeven: "2 months" }
    },

    "fire-alarm-installation": {
        name: "Fire Alarm Installation",
        tier: 1, category: "Technology", onet: "49-2098.00",
        description: "Install, program, and maintain fire alarm and detection systems in residential, commercial, and industrial buildings per NFPA codes.",
        dayInLife: "Work involves installing detection devices, pulling wire, programming panels, conducting acceptance testing, and coordinating with fire marshals.",
        salary: { entry: 42000, median: 62000, p75: 82000, top10: 105000 },
        growth: 7, timeToOwn: "3-6 months",
        education: { min: "High School / GED", preferred: "NICET certification", apprenticeship: "None required", ce: "NICET renewal" },
        licensing: { body: "State fire marshal/low voltage", background: "Required", bonding: "$25,000", insurance: "$1M GL" },
        pros: ["Code-required systems", "Recurring inspection revenue", "Monitoring contracts", "Essential service", "Commercial demand"],
        cons: ["NICET certification path", "AHJ coordination", "Code complexity", "Liability exposure", "Commercial hours"],
        physical: ["Wire pulling", "Ceiling work", "Ladder work", "Panel termination"],
        certifications: [{ name: "NICET Level II+", bonus: "+20% on commercial bids" }, { name: "Manufacturer certified (Edwards, Simplex)", bonus: "+15% support" }],
        business: { startupMin: 20000, startupTypical: 55000, year1Revenue: 280000, breakeven: "5 months" }
    },

    "security-systems-access-control": {
        name: "Security Systems & Access Control",
        tier: 1, category: "Technology", onet: "49-2098.00",
        description: "Design, install, and service electronic security systems including burglar alarms, access control, CCTV, and integrated security platforms.",
        dayInLife: "Work involves system design, device installation, cable runs, controller programming, camera positioning, and customer training.",
        salary: { entry: 40000, median: 58000, p75: 78000, top10: 102000 },
        growth: 8, timeToOwn: "2-3 months",
        education: { min: "High School / GED", preferred: "Manufacturer certifications", apprenticeship: "None required", ce: "Ongoing platform training" },
        licensing: { body: "State security/alarm license", background: "Required (fingerprints)", bonding: "$15,000", insurance: "$1M GL" },
        pros: ["Recurring monitoring revenue", "Commercial contracts", "Integration complexity = value", "Technology growth", "Essential service"],
        cons: ["False alarm liability", "24/7 monitoring coordination", "State licensing required", "Price competition", "Technology changes"],
        physical: ["Cable pulling", "Mounting devices", "Ladder work", "Light physical"],
        certifications: [{ name: "State Alarm License", bonus: "Required" }, { name: "Axis Certified", bonus: "+15% on IP camera projects" }],
        business: { startupMin: 15000, startupTypical: 45000, year1Revenue: 240000, breakeven: "4 months" }
    },

    "commercial-audiovisual-systems": {
        name: "Commercial Audiovisual Systems",
        tier: 1, category: "Technology", onet: "49-2097.00",
        description: "Design, install, and service commercial AV systems including conference rooms, digital signage, presentation systems, and large venue audio.",
        dayInLife: "Work involves system design, structured cabling, equipment rack building, display mounting, DSP programming, and system commissioning.",
        salary: { entry: 45000, median: 68000, p75: 92000, top10: 120000 },
        growth: 8, timeToOwn: "3-6 months",
        education: { min: "High School / GED", preferred: "CTS certification", apprenticeship: "None required", ce: "Manufacturer training" },
        licensing: { body: "Low-voltage license in some states", background: "Often required", bonding: "$15,000", insurance: "$1M GL" },
        pros: ["Corporate budgets", "Recurring service contracts", "Technology evolution", "High-value projects", "Professional environment"],
        cons: ["CTS certification investment", "Project complexity", "Coordination with IT/construction", "Travel often", "After-hours installations"],
        physical: ["Cable pulling", "Rack building", "Display mounting", "Ceiling work"],
        certifications: [{ name: "CTS/CTS-D/CTS-I", bonus: "+25% on design-build projects" }, { name: "Crestron Certified", bonus: "+20% programming value" }],
        business: { startupMin: 25000, startupTypical: 70000, year1Revenue: 350000, breakeven: "6 months" }
    },

    "structured-cabling-fiber": {
        name: "Structured Cabling & Fiber",
        tier: 1, category: "Technology", onet: "49-2022.00",
        description: "Design and install network infrastructure including copper and fiber optic cabling, patch panels, and data center connectivity.",
        dayInLife: "Work involves cable pathway installation, pulling copper/fiber cables, terminating connectors, testing/certifying links, and labeling/documenting.",
        salary: { entry: 40000, median: 60000, p75: 80000, top10: 105000 },
        growth: 9, timeToOwn: "2-3 months",
        education: { min: "High School / GED", preferred: "BICSI certification", apprenticeship: "None required", ce: "BICSI renewal" },
        licensing: { body: "Low-voltage license in some states", background: "Often required", bonding: "$15,000", insurance: "$1M GL" },
        pros: ["5G/fiber expansion", "Data center growth", "Certification testing revenue", "Commercial demand", "Scalable with crews"],
        cons: ["Physical labor", "Commercial hours", "Fiber splicing precision", "Testing equipment cost", "Competition"],
        physical: ["Cable pulling", "Ladder/lift work", "Terminating connectors", "Repetitive work"],
        certifications: [{ name: "BICSI RCDD/Technician", bonus: "+20% on design work" }, { name: "Fluke DTX Certified", bonus: "+15% testing credibility" }],
        business: { startupMin: 20000, startupTypical: 55000, year1Revenue: 280000, breakeven: "5 months" }
    },

    "it-closet-buildouts": {
        name: "IT Closet Buildouts",
        tier: 1, category: "Technology", onet: "49-2022.00",
        description: "Design and build server rooms and IT closets including racks, power distribution, cooling, cable management, and environmental monitoring.",
        dayInLife: "Work involves room prep, rack installation, PDU/UPS installation, cable management, cooling solutions, and network equipment mounting.",
        salary: { entry: 45000, median: 68000, p75: 90000, top10: 115000 },
        growth: 8, timeToOwn: "3-6 months",
        education: { min: "High School / GED", preferred: "Data center certifications", apprenticeship: "None required", ce: "Ongoing technical training" },
        licensing: { body: "Low-voltage/electrical license in some states", background: "Often required", bonding: "$15,000", insurance: "$1M GL" },
        pros: ["High-value projects $20k-$200k", "Critical infrastructure", "Corporate clients", "Recurring maintenance", "Technical expertise valued"],
        cons: ["Coordination complexity", "Electrical/HVAC knowledge needed", "Project timelines tight", "After-hours work often", "Equipment heavy"],
        physical: ["Rack assembly", "Equipment mounting", "Cable management", "Working in confined spaces"],
        certifications: [{ name: "APC/Schneider Certified", bonus: "+18% on UPS projects" }],
        business: { startupMin: 25000, startupTypical: 65000, year1Revenue: 320000, breakeven: "5 months" }
    },

    "overhead-doors-dock-equipment": {
        name: "Overhead Doors & Dock Equipment",
        tier: 1, category: "Commercial", onet: "49-9099.00",
        description: "Install and service commercial overhead doors, loading dock equipment, dock levelers, door seals, and truck restraints.",
        dayInLife: "Work involves installing overhead doors/operators, dock leveler installation, preventive maintenance, emergency repairs, and safety inspections.",
        salary: { entry: 42000, median: 62000, p75: 82000, top10: 105000 },
        growth: 5, timeToOwn: "2-3 months",
        education: { min: "High School / GED", preferred: "Manufacturer training", apprenticeship: "None required", ce: "Safety certifications" },
        licensing: { body: "Local jurisdiction", background: "Often required", bonding: "$15,000", insurance: "$1M GL" },
        pros: ["Commercial recurring maintenance", "Emergency service premium", "Less competition than residential", "Equipment heavy = barrier", "Distribution/warehouse growth"],
        cons: ["Heavy equipment", "Dangerous spring work", "Commercial hours", "Travel to sites", "Inventory investment"],
        physical: ["Heavy lifting", "Working at heights", "Spring tension work", "Equipment operation"],
        certifications: [{ name: "DASMA Certified", bonus: "+15% on safety audits" }],
        business: { startupMin: 25000, startupTypical: 65000, year1Revenue: 300000, breakeven: "5 months" }
    },

    "commercial-kitchen-equipment-service": {
        name: "Commercial Kitchen Equipment Service",
        tier: 1, category: "Commercial", onet: "49-9031.00",
        description: "Install, repair, and maintain commercial cooking equipment, refrigeration, dishwashers, and ventilation for restaurants and food service facilities.",
        dayInLife: "Work involves diagnosing equipment failures, replacing parts, preventive maintenance on cooking and refrigeration, and emergency repairs.",
        salary: { entry: 42000, median: 62000, p75: 82000, top10: 108000 },
        growth: 6, timeToOwn: "2-3 months",
        education: { min: "High School / GED", preferred: "EPA 608 + manufacturer training", apprenticeship: "None required", ce: "Manufacturer certifications" },
        licensing: { body: "EPA 608 required, state varies", background: "Often required", bonding: "$15,000", insurance: "$1M GL" },
        pros: ["Emergency repairs = premium rates", "Restaurant can't wait", "Multiple equipment types", "Recurring PM contracts", "Specialized knowledge valued"],
        cons: ["Hot kitchen environments", "Grease and cleaning", "Emergency calls nights/weekends", "Travel between sites", "Diverse equipment knowledge"],
        physical: ["Working in hot environments", "Heavy equipment moving", "Crawling under equipment", "Grease exposure"],
        certifications: [{ name: "CFESA Master Certified", bonus: "+20% on service rates" }, { name: "EPA 608 Universal", bonus: "Required for refrigeration" }],
        business: { startupMin: 20000, startupTypical: 55000, year1Revenue: 280000, breakeven: "5 months" }
    },

    "instrumentation-controls": {
        name: "Instrumentation & Controls",
        tier: 1, category: "Technology", onet: "49-9062.00",
        description: "Install, calibrate, and maintain industrial instrumentation including pressure, flow, temperature, and level sensors and control systems.",
        dayInLife: "Work involves sensor installation, control loop tuning, PLC programming, calibration verification, and troubleshooting process issues.",
        salary: { entry: 50000, median: 72000, p75: 95000, top10: 125000 },
        growth: 7, timeToOwn: "6-12 months",
        education: { min: "Associate degree or trade school", preferred: "ISA certification", apprenticeship: "None required", ce: "ISA training" },
        licensing: { body: "ISA, some states electrical", background: "Often required", bonding: "$25,000", insurance: "$2M GL" },
        pros: ["High hourly rates $75-150", "Industrial demand", "Specialized expertise", "Critical systems work", "Process improvement value"],
        cons: ["Technical complexity", "Industrial environments", "Travel to facilities", "Night/shutdown work", "Education investment"],
        physical: ["Working around process equipment", "Climbing/confined spaces", "Fine motor calibration", "Industrial safety required"],
        certifications: [{ name: "ISA CCST", bonus: "+25% on industrial contracts" }],
        business: { startupMin: 30000, startupTypical: 75000, year1Revenue: 350000, breakeven: "6 months" }
    },

    "scada-integration": {
        name: "SCADA Integration",
        tier: 1, category: "Technology", onet: "15-1244.00",
        description: "Design, program, and maintain SCADA (Supervisory Control and Data Acquisition) systems for utilities, water/wastewater, and industrial facilities.",
        dayInLife: "Work involves HMI development, PLC programming, network configuration, historian setup, and remote monitoring system implementation.",
        salary: { entry: 55000, median: 78000, p75: 100000, top10: 130000 },
        growth: 9, timeToOwn: "6-12 months",
        education: { min: "Associate degree or equivalent", preferred: "Engineering technology", apprenticeship: "None required", ce: "Platform certifications" },
        licensing: { body: "Some states require engineering", background: "Often required", bonding: "$25,000", insurance: "$2M GL + cyber" },
        pros: ["High rates $100-200/hr", "Critical infrastructure", "Utility contracts", "Remote support possible", "Specialized demand"],
        cons: ["Cybersecurity requirements", "Complex systems", "24/7 uptime expectations", "Travel to remote sites", "High responsibility"],
        physical: ["Office/control room work", "Site visits", "Panel work", "Light physical"],
        certifications: [{ name: "Wonderware/Ignition Certified", bonus: "+25% on projects" }, { name: "ISA/ICS Security", bonus: "+20% utility contracts" }],
        business: { startupMin: 35000, startupTypical: 85000, year1Revenue: 400000, breakeven: "6 months" }
    }
};

window.T1_CAREERS_PART2 = T1_CAREERS_PART2;
Object.assign(window.CAREERS_DATA || {}, T1_CAREERS_PART2);
