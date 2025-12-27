// TIER 2 CAREERS - Journeyman Path (22 careers)
// Requires 4-year apprenticeship or equivalent for licensing

const T2_CAREERS = {
    "residential-hvac-replacement": {
        name: "Residential HVAC Replacement",
        tier: 2, category: "Mechanical", onet: "49-9021.00",
        description: "Install and replace residential heating and cooling systems including furnaces, air conditioners, heat pumps, and ductwork modifications.",
        dayInLife: "Work involves equipment removal, new installation, refrigerant charging, electrical connections, duct modifications, and system startup.",
        salary: { entry: 38000, median: 58000, p75: 78000, top10: 100000 },
        growth: 6, timeToOwn: "4 years (journeyman license)",
        education: { min: "High School / GED", preferred: "Trade school + apprenticeship", apprenticeship: "4 years / 8000 hours", ce: "16 hours annually" },
        licensing: { body: "State mechanical board", background: "Required", bonding: "$25,000", insurance: "$1M GL" },
        pros: ["High demand year-round", "Replacement cycle ongoing", "Efficiency upgrade incentives", "Manufacturer programs", "Clear career path"],
        cons: ["4-year apprenticeship", "Physical demands", "Extreme temperature work", "On-call expectations", "Seasonal peaks"],
        physical: ["Heavy equipment lifting", "Attic/crawlspace work", "Heat/cold exposure", "Ladder work"],
        certifications: [{ name: "EPA 608 Universal", bonus: "Required" }, { name: "NATE Certified", bonus: "+8% on wages" }],
        business: { startupMin: 25000, startupTypical: 75000, year1Revenue: 400000, breakeven: "6 months" }
    },

    "residential-hvac-service": {
        name: "Residential HVAC Service",
        tier: 2, category: "Mechanical", onet: "49-9021.00",
        description: "Diagnose, repair, and maintain residential HVAC systems including troubleshooting, component replacement, and preventive maintenance.",
        dayInLife: "Work involves responding to service calls, diagnosing issues, repairing/replacing components, performing tune-ups, and selling maintenance agreements.",
        salary: { entry: 40000, median: 62000, p75: 82000, top10: 105000 },
        growth: 6, timeToOwn: "4 years (journeyman license)",
        education: { min: "High School / GED", preferred: "Trade school + apprenticeship", apprenticeship: "4 years / 8000 hours", ce: "16 hours annually" },
        licensing: { body: "State mechanical board", background: "Required", bonding: "$25,000", insurance: "$1M GL" },
        pros: ["Year-round demand", "Premium emergency rates", "Maintenance agreement recurring", "Technical challenge variety", "High conversion to replacement"],
        cons: ["On-call 24/7 common", "Extreme conditions", "Physical demands", "Customer pressure", "Diagnostic complexity"],
        physical: ["Working in tight spaces", "Heat/cold exposure", "Lifting equipment", "Outdoor equipment work"],
        certifications: [{ name: "EPA 608 Universal", bonus: "Required" }, { name: "NATE Certified", bonus: "+12% productivity/rates" }],
        business: { startupMin: 20000, startupTypical: 55000, year1Revenue: 350000, breakeven: "5 months" }
    },

    "ductwork-zoning-air-balancing": {
        name: "Ductwork, Zoning & Air Balancing",
        tier: 2, category: "Mechanical", onet: "49-9021.00",
        description: "Design, install, and modify ductwork systems, install zoning controls, and balance airflow for optimal comfort and efficiency.",
        dayInLife: "Work involves measuring/sizing ducts, fabricating sheet metal, installing duct runs, balancing airflow, and installing zone dampers and controls.",
        salary: { entry: 38000, median: 58000, p75: 75000, top10: 95000 },
        growth: 5, timeToOwn: "4 years (journeyman license)",
        education: { min: "High School / GED", preferred: "Sheet metal/HVAC training", apprenticeship: "4 years / 8000 hours", ce: "16 hours annually" },
        licensing: { body: "State mechanical board", background: "Required", bonding: "$20,000", insurance: "$1M GL" },
        pros: ["Energy efficiency demand", "New construction demand", "Retrofit opportunities", "Less emergency-driven", "Technical skill valued"],
        cons: ["Metal fabrication skill needed", "Attic/crawlspace work", "Physical demands", "Blueprint reading required", "Less glamorous"],
        physical: ["Attic/crawlspace work", "Carrying duct materials", "Crawling and bending", "Hot environments"],
        certifications: [{ name: "Sheet metal journeyman", bonus: "+10% on commercial" }],
        business: { startupMin: 25000, startupTypical: 65000, year1Revenue: 280000, breakeven: "6 months" }
    },

    "radiant-floor-heating": {
        name: "Radiant Floor Heating",
        tier: 2, category: "Mechanical", onet: "47-2152.00",
        description: "Design and install hydronic and electric radiant floor heating systems for residential and commercial buildings.",
        dayInLife: "Work involves system design, tubing layout, manifold installation, boiler integration, controls programming, and system commissioning.",
        salary: { entry: 42000, median: 65000, p75: 85000, top10: 110000 },
        growth: 7, timeToOwn: "4 years (journeyman license)",
        education: { min: "High School / GED", preferred: "HVAC/plumbing apprenticeship", apprenticeship: "4 years / 8000 hours", ce: "12 hours annually" },
        licensing: { body: "State plumbing/mechanical board", background: "Required", bonding: "$25,000", insurance: "$1M GL" },
        pros: ["Premium pricing", "Growing luxury market", "Energy efficiency appeal", "Specialized = less competition", "New construction demand"],
        cons: ["Design complexity", "Installation precision", "Long installation time", "Callbacks for cold spots", "Seasonal demand"],
        physical: ["Crawling for tubing", "Concrete pour coordination", "Manifold installation", "Testing systems"],
        certifications: [{ name: "RPA Certified", bonus: "+15% specialist credibility" }],
        business: { startupMin: 30000, startupTypical: 80000, year1Revenue: 350000, breakeven: "7 months" }
    },

    "mini-split-multi-zone-hvac": {
        name: "Mini-split & Multi-zone HVAC",
        tier: 2, category: "Mechanical", onet: "49-9021.00",
        description: "Install and service ductless mini-split and multi-zone HVAC systems for residential and light commercial applications.",
        dayInLife: "Work involves mounting indoor units, running refrigerant lines, installing outdoor condensers, electrical connections, and system commissioning.",
        salary: { entry: 42000, median: 62000, p75: 80000, top10: 102000 },
        growth: 10, timeToOwn: "4 years (journeyman license)",
        education: { min: "High School / GED", preferred: "HVAC apprenticeship", apprenticeship: "4 years / 8000 hours", ce: "16 hours annually" },
        licensing: { body: "State mechanical board", background: "Required", bonding: "$25,000", insurance: "$1M GL" },
        pros: ["Rapid market growth", "Energy efficiency rebates", "Room additions/retrofits", "Less ductwork = faster install", "Technical differentiation"],
        cons: ["VRF systems complex", "Manufacturer-specific training", "Multi-zone balancing", "Aesthetic concerns", "Higher product cost"],
        physical: ["Wall mounting", "Line set routing", "Outdoor unit placement", "Moderate physical"],
        certifications: [{ name: "EPA 608 Universal", bonus: "Required" }, { name: "Mitsubishi Diamond Contractor", bonus: "+15% warranty and leads" }],
        business: { startupMin: 25000, startupTypical: 65000, year1Revenue: 320000, breakeven: "5 months" }
    },

    "whole-home-dehumidification": {
        name: "Whole-home Dehumidification",
        tier: 2, category: "Mechanical", onet: "49-9021.00",
        description: "Install and service whole-home dehumidification systems, humidity control, and indoor air quality equipment integrated with HVAC systems.",
        dayInLife: "Work involves IAQ assessment, equipment sizing, installation in HVAC systems, duct integration, and control setup.",
        salary: { entry: 40000, median: 60000, p75: 78000, top10: 98000 },
        growth: 8, timeToOwn: "4 years (journeyman license)",
        education: { min: "High School / GED", preferred: "HVAC training + IAQ specialty", apprenticeship: "4 years / 8000 hours", ce: "12 hours annually" },
        licensing: { body: "State mechanical board", background: "Required", bonding: "$20,000", insurance: "$1M GL" },
        pros: ["Growing IAQ awareness", "Premium add-on sales", "Health-driven demand", "Year-round need (humid climates)", "Less competition"],
        cons: ["Regional demand varies", "System integration complexity", "Customer education needed", "Niche market", "Specialized products"],
        physical: ["HVAC system work", "Ducting modifications", "Equipment installation", "Light to moderate"],
        certifications: [{ name: "AprilAire/Honeywell trained", bonus: "+12% IAQ product success" }],
        business: { startupMin: 20000, startupTypical: 55000, year1Revenue: 250000, breakeven: "5 months" }
    },

    "water-heater-tankless-install": {
        name: "Water Heater & Tankless Install",
        tier: 2, category: "Mechanical", onet: "47-2152.00",
        description: "Install and service traditional and tankless water heaters for residential and commercial applications including gas and electric.",
        dayInLife: "Work involves old unit removal, new installation, gas/water/electrical connections, venting, and system optimization.",
        salary: { entry: 40000, median: 60000, p75: 78000, top10: 98000 },
        growth: 5, timeToOwn: "4 years (plumbing license)",
        education: { min: "High School / GED", preferred: "Plumbing apprenticeship", apprenticeship: "4 years / 8000 hours", ce: "12 hours annually" },
        licensing: { body: "State plumbing board", background: "Required", bonding: "$25,000", insurance: "$1M GL" },
        pros: ["High conversion rate", "Quick installations", "Emergency replacements premium", "Tankless upsell opportunity", "Always needed"],
        cons: ["Plumber license required", "Gas work training", "Competition from big box", "Tank disposal logistics", "Price competition"],
        physical: ["Heavy tank handling", "Tight space work", "Water/gas connections", "Moderate physical"],
        certifications: [{ name: "Plumbing journeyman", bonus: "Required" }, { name: "Navien/Rinnai certified", bonus: "+15% tankless work" }],
        business: { startupMin: 20000, startupTypical: 55000, year1Revenue: 300000, breakeven: "5 months" }
    },

    "electrical-panel-upgrades": {
        name: "Electrical Panel Upgrades",
        tier: 2, category: "Electrical", onet: "47-2111.00",
        description: "Upgrade residential electrical panels from older fuse boxes or lower amperage to modern 200A+ circuit breaker panels.",
        dayInLife: "Work involves utility coordination, old panel removal, new panel installation, circuit reconnection, and inspection scheduling.",
        salary: { entry: 45000, median: 68000, p75: 88000, top10: 115000 },
        growth: 6, timeToOwn: "4 years (electrician license)",
        education: { min: "High School / GED", preferred: "Electrical apprenticeship", apprenticeship: "4 years / 8000 hours", ce: "24 hours annually" },
        licensing: { body: "State electrical board", background: "Required", bonding: "$25,000", insurance: "$1M GL" },
        pros: ["Growing demand (EV, solar, renovations)", "High-value project $2-5k", "Real estate transactions", "Code-required upgrades", "Clear path work"],
        cons: ["Electrician license required", "Utility coordination", "Permit/inspection required", "Older homes complex", "Liability for electrical fires"],
        physical: ["Working in panels", "Wire handling", "Ladder work", "Moderate physical"],
        certifications: [{ name: "Journeyman electrician", bonus: "Required" }],
        business: { startupMin: 20000, startupTypical: 50000, year1Revenue: 320000, breakeven: "5 months" }
    },

    "whole-home-electrical-rewiring": {
        name: "Whole-home Electrical Rewiring",
        tier: 2, category: "Electrical", onet: "47-2111.00",
        description: "Complete electrical rewiring of older homes including new circuits, outlets, lighting, and panel upgrades to modern code requirements.",
        dayInLife: "Work involves removing old wiring, running new circuits, installing devices, panel work, and coordinating inspections.",
        salary: { entry: 48000, median: 72000, p75: 92000, top10: 120000 },
        growth: 5, timeToOwn: "4 years (electrician license)",
        education: { min: "High School / GED", preferred: "Electrical apprenticeship", apprenticeship: "4 years / 8000 hours", ce: "24 hours annually" },
        licensing: { body: "State electrical board", background: "Required", bonding: "$25,000", insurance: "$1M GL" },
        pros: ["High-value projects $10-30k", "Older housing stock demand", "Full renovation partner", "Premium pricing", "Multi-day projects"],
        cons: ["Complex older homes", "Permit/inspection intensive", "Drywall repair coordination", "Multi-trade coordination", "Long project durations"],
        physical: ["Attic/crawlspace work", "Pulling wire", "Working in walls", "Physical demands"],
        certifications: [{ name: "Journeyman electrician", bonus: "Required" }],
        business: { startupMin: 25000, startupTypical: 65000, year1Revenue: 400000, breakeven: "6 months" }
    },

    "ev-charger-installation": {
        name: "EV Charger Installation",
        tier: 2, category: "Electrical", onet: "47-2111.00",
        description: "Install Level 2 and DC fast charging stations for residential and commercial electric vehicle charging.",
        dayInLife: "Work involves site assessment, panel evaluation, running circuits, charger mounting, and commissioning networked charging systems.",
        salary: { entry: 48000, median: 72000, p75: 92000, top10: 118000 },
        growth: 25, timeToOwn: "4 years (electrician license)",
        education: { min: "High School / GED", preferred: "Electrical apprenticeship", apprenticeship: "4 years / 8000 hours", ce: "24 hours annually" },
        licensing: { body: "State electrical board", background: "Required", bonding: "$25,000", insurance: "$1M GL" },
        pros: ["Explosive EV market growth", "Utility rebate programs", "Quick installations", "Commercial fleet demand", "California mandate 2035"],
        cons: ["Panel upgrades often needed", "Price competition growing", "Product changes rapidly", "Utility coordination", "Networked systems complex"],
        physical: ["Panel work", "Conduit installation", "Charger mounting", "Moderate physical"],
        certifications: [{ name: "Journeyman electrician", bonus: "Required" }, { name: "EVITP Certified", bonus: "+15% on commercial" }],
        business: { startupMin: 20000, startupTypical: 55000, year1Revenue: 380000, breakeven: "4 months" }
    },

    "commercial-hvac-service-sales": {
        name: "Commercial HVAC Service Sales",
        tier: 2, category: "Mechanical", onet: "49-9021.00",
        description: "Sell and coordinate commercial HVAC service, maintenance agreements, and equipment replacement for businesses and property management.",
        dayInLife: "Work involves building relationships, quoting service work, selling maintenance agreements, and coordinating service delivery.",
        salary: { entry: 50000, median: 75000, p75: 100000, top10: 140000 },
        growth: 6, timeToOwn: "4 years + sales experience",
        education: { min: "High School / GED", preferred: "HVAC journeyman + sales", apprenticeship: "4 years / 8000 hours", ce: "Ongoing sales training" },
        licensing: { body: "State mechanical board", background: "Required", bonding: "$25,000", insurance: "$1M GL" },
        pros: ["Commission income potential", "Recurring maintenance revenue", "Portfolio building", "Technical credibility", "Less physical work"],
        cons: ["Sales pressure", "Competitive bidding", "Technical knowledge required", "Customer expectations", "Revenue pressure"],
        physical: ["Customer meetings", "Site visits", "Light physical", "Travel between sites"],
        certifications: [{ name: "EPA 608 Universal", bonus: "Required" }, { name: "HVAC journeyman", bonus: "+25% technical credibility" }],
        business: { startupMin: 30000, startupTypical: 80000, year1Revenue: 500000, breakeven: "6 months" }
    },

    "commercial-plumbing-service": {
        name: "Commercial Plumbing Service",
        tier: 2, category: "Mechanical", onet: "47-2152.00",
        description: "Provide plumbing installation, repair, and maintenance for commercial and industrial facilities including restaurants, hospitals, and manufacturing.",
        dayInLife: "Work involves responding to commercial service calls, preventive maintenance, fixture replacement, and coordinating with facility managers.",
        salary: { entry: 48000, median: 72000, p75: 92000, top10: 118000 },
        growth: 5, timeToOwn: "4 years (plumber license)",
        education: { min: "High School / GED", preferred: "Plumbing apprenticeship", apprenticeship: "4 years / 8000 hours", ce: "12 hours annually" },
        licensing: { body: "State plumbing board", background: "Required", bonding: "$25,000", insurance: "$1M GL" },
        pros: ["Commercial hourly rates", "Maintenance contracts", "Professional environments", "Day shift typically", "Less residential competition"],
        cons: ["Commercial access hours", "Building manager relationships", "Larger scope work", "Travel to facilities", "Competition from national chains"],
        physical: ["Moderate physical work", "Fixture installation", "Access to mechanical rooms", "Commercial environments"],
        certifications: [{ name: "Plumbing journeyman", bonus: "Required" }, { name: "Backflow certification", bonus: "+10% on testing revenue" }],
        business: { startupMin: 25000, startupTypical: 65000, year1Revenue: 400000, breakeven: "5 months" }
    },

    "lighting-retrofit-projects": {
        name: "Lighting Retrofit Projects",
        tier: 2, category: "Electrical", onet: "47-2111.00",
        description: "Design and install energy-efficient LED lighting retrofits for commercial and industrial facilities including controls and utility rebate coordination.",
        dayInLife: "Work involves lighting audits, design proposals, replacing fixtures, installing controls, and documenting for utility rebates.",
        salary: { entry: 48000, median: 70000, p75: 90000, top10: 115000 },
        growth: 8, timeToOwn: "4 years (electrician license)",
        education: { min: "High School / GED", preferred: "Electrical apprenticeship", apprenticeship: "4 years / 8000 hours", ce: "24 hours annually" },
        licensing: { body: "State electrical board", background: "Required", bonding: "$25,000", insurance: "$1M GL" },
        pros: ["Utility rebate programs", "Commercial contract value", "Energy savings sell", "Quick project turnaround", "Repeat customers"],
        cons: ["Competitive bidding", "After-hours work often", "Utility program changes", "Design time investment", "Electrical license required"],
        physical: ["Ladder/lift work", "Fixture handling", "High bay access", "Moderate physical"],
        certifications: [{ name: "Journeyman electrician", bonus: "Required" }, { name: "Lighting certified (LC)", bonus: "+15% design credibility" }],
        business: { startupMin: 25000, startupTypical: 65000, year1Revenue: 420000, breakeven: "5 months" }
    },

    "compressed-air-systems": {
        name: "Compressed Air Systems",
        tier: 2, category: "Mechanical", onet: "49-9041.00",
        description: "Install, service, and optimize industrial compressed air systems including compressors, dryers, piping, and control systems.",
        dayInLife: "Work involves compressor maintenance, air dryer service, piping modifications, leak detection, and energy efficiency improvements.",
        salary: { entry: 48000, median: 70000, p75: 90000, top10: 115000 },
        growth: 5, timeToOwn: "4 years + specialized training",
        education: { min: "High School / GED", preferred: "Industrial maintenance/HVAC", apprenticeship: "4 years / 8000 hours", ce: "Manufacturer training" },
        licensing: { body: "Industrial license in some states", background: "Often required", bonding: "$25,000", insurance: "$2M GL" },
        pros: ["Industrial recurring maintenance", "Critical system = priority service", "Energy efficiency consulting", "Specialized = premium rates", "Plant relationships"],
        cons: ["Industrial environments", "Oil and noise", "Travel to plants", "Production pressure", "Technical complexity"],
        physical: ["Industrial environments", "Heavy equipment", "Oil/lubricant handling", "Access challenges"],
        certifications: [{ name: "Atlas Copco/Ingersoll Rand trained", bonus: "+20% OEM partnerships" }],
        business: { startupMin: 30000, startupTypical: 80000, year1Revenue: 400000, breakeven: "6 months" }
    },

    "water-wastewater-systems": {
        name: "Water & Wastewater Systems",
        tier: 2, category: "Mechanical", onet: "51-8031.00",
        description: "Install, maintain, and repair water treatment and wastewater systems for commercial and industrial facilities.",
        dayInLife: "Work involves equipment maintenance, chemical treatment monitoring, pump service, control system troubleshooting, and regulatory sampling.",
        salary: { entry: 45000, median: 68000, p75: 88000, top10: 112000 },
        growth: 6, timeToOwn: "4 years + water operator license",
        education: { min: "High School / GED", preferred: "Water treatment training", apprenticeship: "State-specific requirements", ce: "CEU for license renewal" },
        licensing: { body: "State water/wastewater operator", background: "Required", bonding: "$25,000", insurance: "$2M GL" },
        pros: ["Critical infrastructure", "Municipal/industrial contracts", "Regulatory-driven maintenance", "Specialized expertise valued", "Steady demand"],
        cons: ["Operator licensing required", "Regulatory complexity", "24/7 system expectations", "Chemical handling", "Outdoor/wet conditions"],
        physical: ["Working around water/chemicals", "Pump handling", "Sampling and testing", "Outdoor conditions"],
        certifications: [{ name: "State water operator license", bonus: "Required" }],
        business: { startupMin: 35000, startupTypical: 90000, year1Revenue: 450000, breakeven: "7 months" }
    },

    "pump-systems-lift-stations": {
        name: "Pump Systems & Lift Stations",
        tier: 2, category: "Mechanical", onet: "49-9041.00",
        description: "Install, repair, and maintain pump systems and sewage lift stations for commercial, industrial, and municipal applications.",
        dayInLife: "Work involves pump replacement, variable frequency drive service, control panel troubleshooting, wet well maintenance, and emergency repairs.",
        salary: { entry: 45000, median: 68000, p75: 88000, top10: 115000 },
        growth: 5, timeToOwn: "4 years + specialized training",
        education: { min: "High School / GED", preferred: "Mechanical/electrical experience", apprenticeship: "4 years / 8000 hours", ce: "Manufacturer training" },
        licensing: { body: "State electrical/mechanical", background: "Required", bonding: "$25,000", insurance: "$2M GL" },
        pros: ["Critical system = priority", "Municipal recurring contracts", "Specialized equipment knowledge", "Emergency service premium", "Less competition"],
        cons: ["Sanitary conditions", "Confined space entry", "24/7 emergency calls", "Heavy equipment", "Wet/dirty environments"],
        physical: ["Lifting pumps", "Confined space work", "Working in wet conditions", "Rigging and hoisting"],
        certifications: [{ name: "Confined space certification", bonus: "Required" }, { name: "VFD training", bonus: "+15% on controls" }],
        business: { startupMin: 35000, startupTypical: 95000, year1Revenue: 480000, breakeven: "7 months" }
    },

    "power-quality-ups-systems": {
        name: "Power Quality & UPS Systems",
        tier: 2, category: "Electrical", onet: "49-2094.00",
        description: "Install, maintain, and service uninterruptible power supplies (UPS), power conditioners, and power quality equipment for critical facilities.",
        dayInLife: "Work involves UPS installation, battery replacement, preventive maintenance, power quality analysis, and emergency response for critical loads.",
        salary: { entry: 52000, median: 75000, p75: 98000, top10: 128000 },
        growth: 7, timeToOwn: "4 years + specialized training",
        education: { min: "High School / GED", preferred: "Electrical + manufacturer training", apprenticeship: "4 years / 8000 hours", ce: "Manufacturer certifications" },
        licensing: { body: "State electrical board", background: "Required", bonding: "$25,000", insurance: "$2M GL" },
        pros: ["Critical infrastructure demand", "Data center growth", "High rates for expertise", "Emergency service premium", "Recurring maintenance"],
        cons: ["High training investment", "Battery hazards", "Mission-critical pressure", "Travel to facilities", "After-hours maintenance"],
        physical: ["Heavy battery handling", "Panel/rack work", "Testing equipment", "Moderate physical"],
        certifications: [{ name: "Journeyman electrician", bonus: "Required" }, { name: "Eaton/Schneider certified", bonus: "+25% warranty work" }],
        business: { startupMin: 35000, startupTypical: 90000, year1Revenue: 500000, breakeven: "6 months" }
    },

    "critical-power-distribution": {
        name: "Critical Power Distribution",
        tier: 2, category: "Electrical", onet: "47-2111.00",
        description: "Install and maintain power distribution systems for data centers and critical facilities including PDUs, switchgear, and busway.",
        dayInLife: "Work involves PDU installation, power circuit connections, maintenance on switchgear, thermal scanning, and documentation.",
        salary: { entry: 55000, median: 80000, p75: 105000, top10: 135000 },
        growth: 9, timeToOwn: "4 years + specialized training",
        education: { min: "High School / GED", preferred: "Electrical + data center training", apprenticeship: "4 years / 8000 hours", ce: "DC-specific certifications" },
        licensing: { body: "State electrical board", background: "Required", bonding: "$50,000", insurance: "$2M GL" },
        pros: ["Data center boom", "Premium rates $100+/hr", "Critical infrastructure", "Specialized demand", "Less residential competition"],
        cons: ["High training bar", "Mission-critical pressure", "Working on live equipment", "Travel often required", "Strict protocols"],
        physical: ["Working around electrical", "Heavy equipment handling", "Precision connections", "Controlled environments"],
        certifications: [{ name: "Journeyman electrician", bonus: "Required" }, { name: "Starline/Schneider trained", bonus: "+20% manufacturer support" }],
        business: { startupMin: 40000, startupTypical: 100000, year1Revenue: 600000, breakeven: "7 months" }
    },

    "data-center-mechanical": {
        name: "Data Center Mechanical",
        tier: 2, category: "Mechanical", onet: "49-9021.00",
        description: "Install and maintain mechanical cooling systems for data centers including CRAC/CRAH units, chillers, and cooling distribution.",
        dayInLife: "Work involves HVAC maintenance, chiller service, hot/cold aisle optimization, monitoring, and emergency response for cooling failures.",
        salary: { entry: 55000, median: 78000, p75: 100000, top10: 130000 },
        growth: 10, timeToOwn: "4 years + specialized training",
        education: { min: "High School / GED", preferred: "HVAC + data center training", apprenticeship: "4 years / 8000 hours", ce: "DC-specific certifications" },
        licensing: { body: "State mechanical board + EPA 608", background: "Required", bonding: "$50,000", insurance: "$2M GL" },
        pros: ["Data center demand exploding", "Premium rates", "24/7 uptime = critical", "Clean environments", "Technical specialization valued"],
        cons: ["High training bar", "Mission-critical pressure", "On-call 24/7", "Rapid response required", "Strict change management"],
        physical: ["Working around large equipment", "Moderate physical", "Controlled environments", "Precision work"],
        certifications: [{ name: "EPA 608 Universal", bonus: "Required" }, { name: "Data Center Certified", bonus: "+20% rate premium" }],
        business: { startupMin: 40000, startupTypical: 100000, year1Revenue: 580000, breakeven: "7 months" }
    },

    "data-center-electrical": {
        name: "Data Center Electrical",
        tier: 2, category: "Electrical", onet: "47-2111.00",
        description: "Install and maintain electrical power systems for data centers including generators, ATS, switchgear, PDUs, and branch circuits.",
        dayInLife: "Work involves electrical maintenance, generator testing, ATS service, thermal scanning, and emergency response for power issues.",
        salary: { entry: 58000, median: 82000, p75: 108000, top10: 140000 },
        growth: 12, timeToOwn: "4 years + specialized training",
        education: { min: "High School / GED", preferred: "Electrical + data center training", apprenticeship: "4 years / 8000 hours", ce: "DC-specific certifications" },
        licensing: { body: "State electrical board", background: "Required", bonding: "$50,000", insurance: "$2M GL" },
        pros: ["Highest demand in electrical", "Premium rates $100+/hr", "Critical infrastructure", "New construction growth", "Technical specialization valued"],
        cons: ["High training bar", "Mission-critical pressure", "On-call expectations", "Work on live circuits", "Strict protocols"],
        physical: ["Panel and switchgear work", "Generator testing", "Precision measurements", "Moderate physical"],
        certifications: [{ name: "Journeyman electrician", bonus: "Required" }, { name: "DC Pro/Uptime certified", bonus: "+25% rate premium" }],
        business: { startupMin: 45000, startupTypical: 110000, year1Revenue: 650000, breakeven: "7 months" }
    },

    "generator-plants": {
        name: "Generator Plants",
        tier: 2, category: "Electrical", onet: "49-2095.00",
        description: "Install, startup, and maintain standby generator systems for commercial, industrial, and critical facility applications.",
        dayInLife: "Work involves generator installation, automatic transfer switch connections, load bank testing, preventive maintenance, and fuel system service.",
        salary: { entry: 50000, median: 72000, p75: 95000, top10: 125000 },
        growth: 7, timeToOwn: "4 years + specialized training",
        education: { min: "High School / GED", preferred: "Electrical + diesel/gas engine", apprenticeship: "4 years / 8000 hours", ce: "Manufacturer certifications" },
        licensing: { body: "State electrical board", background: "Required", bonding: "$25,000", insurance: "$2M GL" },
        pros: ["Critical power demand", "High-value equipment sales", "Recurring maintenance contracts", "Storm damage opportunites", "Data center growth"],
        cons: ["Heavy equipment", "Fuel system knowledge needed", "Emergency response expected", "Multi-trade skills required", "Seasonal demand spikes"],
        physical: ["Heavy equipment installation", "Mechanical engine work", "Electrical connections", "Testing under load"],
        certifications: [{ name: "Journeyman electrician", bonus: "Required" }, { name: "Generac/Kohler/Caterpillar trained", bonus: "+20% OEM support" }],
        business: { startupMin: 40000, startupTypical: 100000, year1Revenue: 550000, breakeven: "7 months" }
    },

    "industrial-ventilation-dust-collection": {
        name: "Industrial Ventilation & Dust Collection",
        tier: 2, category: "Mechanical", onet: "49-9021.00",
        description: "Design, install, and maintain industrial ventilation and dust collection systems for manufacturing and processing facilities.",
        dayInLife: "Work involves system design, ductwork fabrication, baghouse service, fan balancing, explosion vent inspection, and OSHA compliance support.",
        salary: { entry: 48000, median: 70000, p75: 90000, top10: 118000 },
        growth: 5, timeToOwn: "4 years + industrial experience",
        education: { min: "High School / GED", preferred: "Sheet metal/HVAC + industrial", apprenticeship: "4 years / 8000 hours", ce: "Industrial ventilation training" },
        licensing: { body: "State mechanical board", background: "Required", bonding: "$25,000", insurance: "$2M GL" },
        pros: ["OSHA compliance required", "Industrial recurring contracts", "Specialized = less competition", "Fire/explosion prevention critical", "Technical expertise valued"],
        cons: ["Industrial environments", "Dirty conditions", "Complex systems", "Travel to plants", "Sheet metal skills needed"],
        physical: ["Working at heights", "Heavy duct handling", "Industrial environments", "Access challenges"],
        certifications: [{ name: "ACGIH Industrial Ventilation", bonus: "+15% design credibility" }],
        business: { startupMin: 35000, startupTypical: 90000, year1Revenue: 450000, breakeven: "7 months" }
    }
};

window.T2_CAREERS = T2_CAREERS;
Object.assign(window.CAREERS_DATA || {}, T2_CAREERS);
