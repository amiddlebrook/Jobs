// TIER 4 CAREERS (8 careers)
// Advanced Specialization - 7-10+ years specialized experience

const T4_CAREERS = {
    "commercial-refrigeration-systems": {
        name: "Commercial Refrigeration Systems",
        tier: 4, category: "Mechanical", onet: "49-9021.00",
        description: "Design, install, and service large-scale commercial refrigeration for supermarkets, cold storage, food processing, and industrial applications.",
        dayInLife: "Work involves system design, rack system installation, CO2/ammonia systems, building automation integration, and energy optimization.",
        salary: { entry: 75000, median: 110000, p75: 145000, top10: 195000 },
        growth: 6, timeToOwn: "7-10 years specialized",
        education: { min: "Journeyman + master", preferred: "EPA 608 + RETA certification", apprenticeship: "7+ years specialized", ce: "Ongoing refrigerant training" },
        licensing: { body: "State mechanical board + EPA", background: "Required", bonding: "$50,000", insurance: "$2M GL" },
        pros: ["Premium rates $120+/hr", "Critical cold chain", "Supermarket/industrial demand", "Energy management focus", "Specialized barrier to entry"],
        cons: ["Product loss liability", "24/7 emergency response", "Complex systems", "Environmental regulations", "Travel required"],
        physical: ["Transitioning to oversight", "Technical troubleshooting", "Some heavy work", "Management role"],
        certifications: [{ name: "EPA 608 Universal", bonus: "Required" }, { name: "RETA CARO/CM", bonus: "+25% industrial credibility" }],
        business: { startupMin: 80000, startupTypical: 225000, year1Revenue: 1200000, breakeven: "10 months" }
    },

    "industrial-hvac-process-cooling": {
        name: "Industrial HVAC & Process Cooling",
        tier: 4, category: "Mechanical", onet: "49-9021.00",
        description: "Design and maintain large-scale industrial HVAC and process cooling systems for manufacturing, pharmaceutical, and data center applications.",
        dayInLife: "Work involves chiller plant management, cooling tower service, process cooling design, and facility mechanical system optimization.",
        salary: { entry: 78000, median: 115000, p75: 150000, top10: 200000 },
        growth: 8, timeToOwn: "8-10 years specialized",
        education: { min: "Journeyman + master", preferred: "PE or extensive industrial experience", apprenticeship: "8+ years specialized", ce: "Ongoing technical training" },
        licensing: { body: "State mechanical board", background: "Required", bonding: "$100,000", insurance: "$5M GL" },
        pros: ["Highest rates in HVAC", "Industrial plant relationships", "Data center demand", "System optimization premium", "Consulting potential"],
        cons: ["Complex industrial systems", "Travel to facilities", "Production pressure", "Environmental compliance", "Capital equipment focus"],
        physical: ["Management/consulting", "Technical oversight", "Some plant work", "Professional role"],
        certifications: [{ name: "Master HVAC", bonus: "Required" }, { name: "CHC (Certified Healthcare Constructor)", bonus: "+20% healthcare" }],
        business: { startupMin: 100000, startupTypical: 300000, year1Revenue: 1500000, breakeven: "12 months" }
    },

    "medium-voltage-electrical": {
        name: "Medium Voltage Electrical",
        tier: 4, category: "Electrical", onet: "49-2095.00",
        description: "Install, test, and maintain medium voltage electrical systems (5kV-35kV) including switchgear, transformers, and utility interconnections.",
        dayInLife: "Work involves switchgear installation/testing, transformer commissioning, relay protection, and coordinating with utilities on interconnections.",
        salary: { entry: 85000, median: 125000, p75: 165000, top10: 220000 },
        growth: 7, timeToOwn: "8-10 years specialized",
        education: { min: "Journeyman electrician + specialized training", preferred: "NETA certification", apprenticeship: "8+ years including MV specialization", ce: "NETA renewal + OSHA" },
        licensing: { body: "State electrical board", background: "Required", bonding: "$100,000", insurance: "$5M GL" },
        pros: ["Premium rates $150+/hr", "Critical infrastructure", "Utility relationships", "Less competition", "Industrial/commercial demand"],
        cons: ["Arc flash hazard", "NFPA 70E compliance", "Specialized equipment cost", "Travel required", "High liability"],
        physical: ["Testing and commissioning", "Supervision role", "Safety-critical work", "Equipment setup"],
        certifications: [{ name: "Master electrician", bonus: "Required" }, { name: "NETA Level III/IV", bonus: "+30% acceptance testing" }],
        business: { startupMin: 125000, startupTypical: 350000, year1Revenue: 1800000, breakeven: "12 months" }
    },

    "high-voltage-testing": {
        name: "High Voltage Testing",
        tier: 4, category: "Electrical", onet: "49-2095.00",
        description: "Perform acceptance and maintenance testing on high voltage electrical equipment including transformers, cables, switchgear, and protective relays.",
        dayInLife: "Work involves power factor testing, oil analysis, relay testing, cable testing, and commissioning new electrical installations.",
        salary: { entry: 88000, median: 130000, p75: 175000, top10: 235000 },
        growth: 7, timeToOwn: "8-10 years specialized",
        education: { min: "Journeyman electrician + NETA training", preferred: "NETA Level III+", apprenticeship: "8+ years testing specialization", ce: "NETA renewal" },
        licensing: { body: "State electrical board", background: "Required", bonding: "$100,000", insurance: "$5M GL + professional liability" },
        pros: ["Highest rates in electrical", "Critical infrastructure", "Testing equipment = barrier", "Utility/industrial demand", "Consulting potential"],
        cons: ["Extreme hazard work", "Testing equipment investment", "Travel extensive", "Documentation intensive", "Certification requirements"],
        physical: ["Testing procedures", "Equipment setup", "Safety-critical focus", "Professional role"],
        certifications: [{ name: "NETA Level III/IV", bonus: "Required for credibility" }],
        business: { startupMin: 150000, startupTypical: 400000, year1Revenue: 2000000, breakeven: "14 months" }
    },

    "industrial-electrical-systems": {
        name: "Industrial Electrical Systems",
        tier: 4, category: "Electrical", onet: "47-2111.00",
        description: "Design, install, and maintain complex industrial electrical systems including motor control, power distribution, and automation for manufacturing facilities.",
        dayInLife: "Work involves MCC installation, VFD systems, motor control design, PLC integration, and managing plant electrical infrastructure.",
        salary: { entry: 80000, median: 120000, p75: 160000, top10: 215000 },
        growth: 6, timeToOwn: "8-10 years industrial",
        education: { min: "Journeyman + master electrician", preferred: "Industrial electrical certification", apprenticeship: "8+ years industrial", ce: "Ongoing technical training" },
        licensing: { body: "State electrical board", background: "Required", bonding: "$100,000", insurance: "$5M GL" },
        pros: ["Plant electrical contracts", "High rates", "Critical infrastructure", "Automation integration", "Consulting potential"],
        cons: ["Production downtime pressure", "Complex systems", "Travel to plants", "Multi-trade coordination", "Safety-critical"],
        physical: ["Management/supervision", "Technical oversight", "Some installation work", "Plant environments"],
        certifications: [{ name: "Master electrician", bonus: "Required" }, { name: "Industrial electrical certification", bonus: "+20% plant contracts" }],
        business: { startupMin: 100000, startupTypical: 300000, year1Revenue: 1600000, breakeven: "12 months" }
    },

    "building-commissioning": {
        name: "Building Commissioning",
        tier: 4, category: "Specialty", onet: "47-4011.00",
        description: "Verify the design, installation, and performance of building systems through systematic testing and documentation for new construction and existing buildings.",
        dayInLife: "Work involves specification review, equipment testing, functional performance testing, TAB coordination, and commissioning report preparation.",
        salary: { entry: 75000, median: 110000, p75: 145000, top10: 190000 },
        growth: 9, timeToOwn: "7-10 years + certification",
        education: { min: "Technical degree + experience", preferred: "BCxP or CCP certification", apprenticeship: "7-10 years multi-trade", ce: "Certification renewal" },
        licensing: { body: "ACG/ASHRAE certification", background: "Varies", bonding: "$50,000", insurance: "$2M GL + E&O" },
        pros: ["Growing LEED requirements", "Third-party objectivity", "Consulting rates", "Energy efficiency focus", "Building analytics growth"],
        cons: ["Multi-trade knowledge required", "Documentation intensive", "Travel to projects", "Long project timelines", "Owner expectations high"],
        physical: ["Site visits", "Testing procedures", "Professional role", "Meeting attendance"],
        certifications: [{ name: "BCxP (Building Commissioning Professional)", bonus: "+25% acceptance" }, { name: "CCP (Certified Commissioning Professional)", bonus: "+25% enterprise work" }],
        business: { startupMin: 50000, startupTypical: 125000, year1Revenue: 800000, breakeven: "8 months" }
    },

    "central-plant-management": {
        name: "Central Plant Management",
        tier: 4, category: "Mechanical", onet: "49-9021.01",
        description: "Operate and maintain central utility plants including chillers, boilers, cooling towers, and distribution systems for campuses and large facilities.",
        dayInLife: "Work involves chiller/boiler operations, system optimization, maintenance scheduling, energy management, and plant staff supervision.",
        salary: { entry: 72000, median: 105000, p75: 138000, top10: 180000 },
        growth: 5, timeToOwn: "7-10 years plant experience",
        education: { min: "Journeyman + plant operations", preferred: "Plant engineering certification", apprenticeship: "7+ years central plant", ce: "Boiler/chiller certifications" },
        licensing: { body: "State mechanical/boiler board", background: "Required", bonding: "$50,000", insurance: "$2M GL" },
        pros: ["Stable facility roles", "Campus/healthcare demand", "Technical leadership", "Energy management consulting", "Critical role"],
        cons: ["24/7 plant responsibility", "Water treatment complexity", "Staffing management", "Capital budgeting", "Regulatory compliance"],
        physical: ["Plant rounds", "Supervision role", "Vendor coordination", "Technical analysis"],
        certifications: [{ name: "Boiler operator license", bonus: "Often required" }, { name: "CEM (Certified Energy Manager)", bonus: "+20% consulting" }],
        business: { startupMin: 75000, startupTypical: 200000, year1Revenue: 1000000, breakeven: "10 months" }
    },

    "laboratory-controls": {
        name: "Laboratory Controls",
        tier: 4, category: "Technology", onet: "49-2094.00",
        description: "Design, install, and maintain laboratory airflow and environmental control systems for research, pharmaceutical, and healthcare facilities.",
        dayInLife: "Work involves fume hood airflow control, lab pressurization, BMS programming for labs, and maintaining critical environment systems.",
        salary: { entry: 78000, median: 115000, p75: 150000, top10: 195000 },
        growth: 8, timeToOwn: "8-10 years specialized",
        education: { min: "HVAC/controls experience + lab specialization", preferred: "BACnet/Niagara + lab training", apprenticeship: "8+ years specialized", ce: "Platform certifications" },
        licensing: { body: "State mechanical/low voltage", background: "Often required", bonding: "$50,000", insurance: "$2M GL" },
        pros: ["Premium rates", "Pharmaceutical/research growth", "Specialized barrier", "Safety-critical premium", "Technical complexity valued"],
        cons: ["Complex containment requirements", "Validation documentation", "Pharma audit pressure", "Travel to facilities", "Strict protocols"],
        physical: ["Controls programming", "Commissioning work", "Clean environments", "Professional role"],
        certifications: [{ name: "Lab airflow certification", bonus: "+20% specialized demand" }, { name: "BACnet certification", bonus: "+15% integration work" }],
        business: { startupMin: 80000, startupTypical: 225000, year1Revenue: 1100000, breakeven: "11 months" }
    }
};

window.T4_CAREERS = T4_CAREERS;
Object.assign(window.CAREERS_DATA || {}, T4_CAREERS);
