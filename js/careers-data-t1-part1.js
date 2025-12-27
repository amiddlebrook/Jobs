// TIER 1 CAREERS - Part 1 (Specialty & Restoration)
// Certification-based entry, no trade license required

const T1_CAREERS_PART1 = {
    "spray-foam-insulation": {
        name: "Spray Foam Insulation",
        tier: 1, category: "Specialty", onet: "47-2131.00",
        description: "Apply open and closed-cell spray polyurethane foam insulation in residential and commercial buildings for superior thermal and air barrier performance.",
        dayInLife: "Work involves surface preparation, equipment setup, foam application in multiple passes, monitoring thickness, and cleanup. Full PPE including respirators required.",
        salary: { entry: 36000, median: 49000, p75: 62000, top10: 77000 },
        growth: 4, timeToOwn: "2-3 months after training",
        education: { min: "No formal ed required (HS preferred)", preferred: "Manufacturer training", apprenticeship: "4-5 years for mechanical insulation", ce: "OSHA safety training" },
        licensing: { body: "State/local jurisdiction", background: "Varies", bonding: "$15,000", insurance: "$1M GL + pollution" },
        pros: ["Premium pricing over traditional", "Energy efficiency demand", "Specialized = less competition", "Builder relationships", "High margins 45%+"],
        cons: ["Equipment cost $30k+", "Chemical exposure risks", "Weather/temp sensitive", "Certification required", "Equipment maintenance"],
        physical: ["Wearing full PPE constantly", "Hot enclosed spaces", "Spray application technique", "Equipment handling"],
        certifications: [{ name: "SPFA Professional Certification", bonus: "+15% customer trust" }, { name: "Demilec Certified", bonus: "+12% manufacturer support" }],
        business: { startupMin: 35000, startupTypical: 85000, year1Revenue: 280000, breakeven: "6 months" }
    },

    "air-sealing-energy-retrofit": {
        name: "Air Sealing & Energy Retrofit",
        tier: 1, category: "Specialty", onet: "47-4099.00",
        description: "Perform comprehensive building energy audits and implement air sealing, weatherization, and efficiency improvements for enhanced building performance.",
        dayInLife: "Work involves blower door testing, thermal imaging, identifying air leaks, sealing penetrations, installing weatherstripping, and documenting improvements.",
        salary: { entry: 38000, median: 55000, p75: 72000, top10: 95000 },
        growth: 10, timeToOwn: "2-3 months",
        education: { min: "High School / GED", preferred: "BPI certification", apprenticeship: "None required", ce: "Annual BPI recertification" },
        licensing: { body: "BPI/RESNET", background: "Varies", bonding: "$10,000", insurance: "$500K GL" },
        pros: ["Utility rebate programs", "Growing climate focus", "Government incentives", "Certified expertise valued", "Year-round work"],
        cons: ["Certification investment", "Testing equipment cost", "Program complexity", "Documentation heavy", "Utility program changes"],
        physical: ["Crawling in tight spaces", "Attic work in heat", "Equipment operation", "Sealing work"],
        certifications: [{ name: "BPI Building Analyst", bonus: "+20% utility program access" }, { name: "RESNET HERS Rater", bonus: "+25% new construction" }],
        business: { startupMin: 15000, startupTypical: 40000, year1Revenue: 160000, breakeven: "4 months" }
    },

    "mold-remediation": {
        name: "Mold Remediation",
        tier: 1, category: "Restoration", onet: "47-4071.00",
        description: "Assess, contain, remove, and remediate mold-contaminated materials in residential and commercial properties following IICRC and EPA protocols.",
        dayInLife: "Work involves assessment, containment setup with plastic barriers, HEPA air filtration, removal of affected materials, treatment, and clearance testing.",
        salary: { entry: 38000, median: 58000, p75: 78000, top10: 105000 },
        growth: 7, timeToOwn: "2-3 months",
        education: { min: "High School / GED", preferred: "IICRC/ACAC certification", apprenticeship: "None required", ce: "Annual recertification" },
        licensing: { body: "State varies (some require mold license)", background: "Required", bonding: "$25,000", insurance: "$1M GL + E&O recommended" },
        pros: ["Urgent problem = premium pricing", "Insurance often pays", "Recurring from restorers", "Health concerns drive demand", "Year-round work"],
        cons: ["Health hazard exposure", "PPE intensive", "Liability concerns", "Protocol strict adherence", "Testing costs"],
        physical: ["Working in containment suits", "Demolition work", "Equipment handling", "Confined spaces"],
        certifications: [{ name: "IICRC AMRT", bonus: "+15% insurance acceptance" }, { name: "ACAC CMR", bonus: "+20% professional credibility" }],
        business: { startupMin: 20000, startupTypical: 55000, year1Revenue: 220000, breakeven: "5 months" }
    },

    "radon-mitigation": {
        name: "Radon Mitigation",
        tier: 1, category: "Specialty", onet: "47-4099.00",
        description: "Install radon mitigation systems in residential and commercial buildings to reduce dangerous radon gas levels, including sub-slab depressurization and sealing.",
        dayInLife: "Work involves testing, system design, drilling through slabs, installing PVC piping and fans, sealing penetrations, and post-mitigation testing.",
        salary: { entry: 40000, median: 60000, p75: 78000, top10: 100000 },
        growth: 6, timeToOwn: "1-2 months after certification",
        education: { min: "High School / GED", preferred: "State/NRPP certification", apprenticeship: "None required", ce: "Biennial recertification" },
        licensing: { body: "State (most require radon license)", background: "Required", bonding: "$10,000", insurance: "$1M GL" },
        pros: ["Real estate transaction demand", "Quick installations 1/2 day", "Licensing = barrier to entry", "Health urgency", "Recurring testing revenue"],
        cons: ["State licensing required", "Seasonal in cold climates", "Competition from testing companies", "Liability for readings", "Rural demand variable"],
        physical: ["Drilling concrete", "Working in basements/crawlspaces", "Installing piping", "Moderate physical demands"],
        certifications: [{ name: "NRPP Certified", bonus: "+20% real estate referrals" }, { name: "State Radon License", bonus: "Required in most states" }],
        business: { startupMin: 12000, startupTypical: 30000, year1Revenue: 180000, breakeven: "3 months" }
    },

    "chimney-services": {
        name: "Chimney Services",
        tier: 1, category: "Specialty", onet: "47-2181.00",
        description: "Inspect, clean, repair, and reline chimneys for residential properties including masonry repair, cap installation, and safety certifications.",
        dayInLife: "Work involves inspections with cameras, creosote cleaning, crown and cap repairs, flashing repair, relining with stainless steel, and providing safety reports.",
        salary: { entry: 30000, median: 39000, p75: 52000, top10: 70000 },
        growth: 4, timeToOwn: "1-2 months",
        education: { min: "High School / GED", preferred: "CSIA certification", apprenticeship: "None required", ce: "Annual recertification" },
        licensing: { body: "CSIA/state", background: "Varies", bonding: "$10,000", insurance: "$1M GL" },
        pros: ["Seasonal peak fall/spring", "Repeat annual cleanings", "Real estate inspections", "Upsell repairs", "Certification differentiates"],
        cons: ["Very dirty work", "Rooftop hazards", "Seasonal revenue", "Physical demands", "Soot exposure"],
        physical: ["Rooftop work", "Climbing/descending", "Brushing and cleaning", "Dirty conditions"],
        certifications: [{ name: "CSIA Certified", bonus: "+20% customer trust" }, { name: "NFI Certified", bonus: "+15% on fireplace work" }],
        business: { startupMin: 10000, startupTypical: 28000, year1Revenue: 140000, breakeven: "3 months" }
    },

    "home-theater-residential-av": {
        name: "Home Theater & Residential AV",
        tier: 1, category: "Technology", onet: "49-2097.00",
        description: "Design and install home theater systems, whole-house audio, and residential AV solutions including projection, surround sound, and media rooms.",
        dayInLife: "Work involves client consultations, system design, running cables, mounting displays, installing speakers, programming control systems, and calibrating audio/video.",
        salary: { entry: 34000, median: 57000, p75: 80000, top10: 105000 },
        growth: 1, timeToOwn: "1-2 months",
        education: { min: "High School / GED", preferred: "CEDIA/CTS certification", apprenticeship: "None required", ce: "Manufacturer training" },
        licensing: { body: "Low-voltage license in some states", background: "Varies", bonding: "$10,000", insurance: "$500K GL" },
        pros: ["High-ticket systems $10k-$100k+", "Luxury market growth", "Recurring service revenue", "Technology passion", "Custom work premium"],
        cons: ["Rapid technology changes", "High client expectations", "Complex programming", "Premium equipment costs", "Competition from big box"],
        physical: ["Cable pulling", "Mounting heavy displays", "Crawling for wiring", "Ladder work"],
        certifications: [{ name: "CEDIA Professional", bonus: "+18% luxury market access" }, { name: "THX Certified", bonus: "+15% on premium installs" }],
        business: { startupMin: 15000, startupTypical: 45000, year1Revenue: 250000, breakeven: "4 months" }
    },

    "smart-home-automation": {
        name: "Smart Home Automation",
        tier: 1, category: "Technology", onet: "49-2097.00",
        description: "Design, install, and program smart home systems including lighting control, motorized shades, HVAC integration, security, and voice control platforms.",
        dayInLife: "Work involves system design, installing smart devices, configuring networks, programming scenes/automation, and training homeowners on system use.",
        salary: { entry: 35000, median: 57000, p75: 78000, top10: 105000 },
        growth: 7, timeToOwn: "1-2 months",
        education: { min: "High School / GED", preferred: "CEDIA/manufacturer certifications", apprenticeship: "None required", ce: "Ongoing platform training" },
        licensing: { body: "Low-voltage license in some states", background: "Varies", bonding: "$10,000", insurance: "$500K GL" },
        pros: ["Explosive market growth", "High margins on programming", "Recurring monitoring revenue", "Builder partnerships", "Technology innovation"],
        cons: ["Constant learning required", "Platform fragmentation", "Complex troubleshooting", "Client support demands", "DIY competition growing"],
        physical: ["Light physical work", "Programming/configuring", "Device installation", "Customer training"],
        certifications: [{ name: "Control4 Certified", bonus: "+20% on Control4 projects" }, { name: "Lutron Certified", bonus: "+18% on lighting control" }],
        business: { startupMin: 12000, startupTypical: 35000, year1Revenue: 220000, breakeven: "3 months" }
    },

    "irrigation-systems": {
        name: "Irrigation Systems",
        tier: 1, category: "Exterior", onet: "47-2152.00",
        description: "Design, install, and maintain residential and commercial irrigation systems including sprinklers, drip irrigation, and smart controllers.",
        dayInLife: "Work involves site layout, trenching, pipe installation, head placement, controller programming, and seasonal startup/winterization services.",
        salary: { entry: 35000, median: 52000, p75: 68000, top10: 90000 },
        growth: 6, timeToOwn: "1-2 months",
        education: { min: "High School / GED", preferred: "IA certification", apprenticeship: "None required", ce: "Backflow certification often required" },
        licensing: { body: "State varies (backflow license often required)", background: "Varies", bonding: "$10,000", insurance: "$500K GL" },
        pros: ["Seasonal recurring (startup/winterize)", "Smart controller upgrades", "Water conservation focus", "HOA/commercial contracts", "Expansion with landscaping"],
        cons: ["Very seasonal (warm months)", "Trenching labor intensive", "Competition from landscapers", "Water regulation changes", "Freeze damage liability"],
        physical: ["Trenching", "Pipe handling", "Kneeling for heads", "Outdoor heat exposure"],
        certifications: [{ name: "IA Certified", bonus: "+12% professional credibility" }, { name: "Backflow Tester", bonus: "+$50-100/test revenue" }],
        business: { startupMin: 12000, startupTypical: 35000, year1Revenue: 160000, breakeven: "4 months" }
    },

    "tree-service-operations": {
        name: "Tree Service Operations",
        tier: 1, category: "Exterior", onet: "37-3013.00",
        description: "Provide tree trimming, removal, stump grinding, and arboricultural services for residential and commercial properties.",
        dayInLife: "Work involves climbing trees, operating chainsaws, rigging branches, operating bucket trucks, chipping brush, and stump grinding. High-risk work requiring skill.",
        salary: { entry: 32000, median: 55000, p75: 72000, top10: 100000 },
        growth: 5, timeToOwn: "2-3 months",
        education: { min: "High School / GED", preferred: "ISA certification", apprenticeship: "None required (climbing training recommended)", ce: "TCIA safety training" },
        licensing: { body: "Local jurisdiction", background: "Often required", bonding: "$25,000", insurance: "$2M GL + WC required" },
        pros: ["High-ticket removals $1k-$10k+", "Storm work premium", "Emergency services", "Always in demand", "Disposal revenue"],
        cons: ["Extremely dangerous work", "Equipment intensive", "Workers' comp expensive", "Physical demands", "Liability exposure"],
        physical: ["Climbing trees", "Operating chainsaws", "Heavy lifting", "Working at heights"],
        certifications: [{ name: "ISA Certified Arborist", bonus: "+20% professional rates" }, { name: "TCIA Accredited", bonus: "+15% on municipal contracts" }],
        business: { startupMin: 30000, startupTypical: 85000, year1Revenue: 280000, breakeven: "6 months" }
    },

    "pest-control-services": {
        name: "Pest Control Services",
        tier: 1, category: "Specialty", onet: "37-2021.00",
        description: "Provide residential and commercial pest control, termite treatment, bed bug remediation, and wildlife exclusion services.",
        dayInLife: "Work involves inspecting properties, identifying pest issues, applying treatments, setting up exclusion barriers, and scheduling follow-up services.",
        salary: { entry: 32000, median: 45000, p75: 54000, top10: 61000 },
        growth: 5, timeToOwn: "1-2 months after license",
        education: { min: "High School / GED", preferred: "State pest control license", apprenticeship: "<3 months OJT (moderate-term)", ce: "Annual CEU requirements" },
        licensing: { body: "State agriculture/EPA", background: "Required", bonding: "$10,000", insurance: "$500K GL" },
        pros: ["Monthly recurring customers", "Termite = high ticket", "Year-round demand", "Licensing = barrier", "Route efficiency"],
        cons: ["Chemical exposure", "State licensing required", "Competition from nationals", "Physical demands", "Customer service intensive"],
        physical: ["Crawling in tight spaces", "Spraying equipment", "Ladder work for wasps", "Walking routes"],
        certifications: [{ name: "State Pest License", bonus: "Required" }, { name: "QualityPro Certified", bonus: "+12% customer trust" }],
        business: { startupMin: 10000, startupTypical: 30000, year1Revenue: 180000, breakeven: "4 months" }
    }
};

window.T1_CAREERS_PART1 = T1_CAREERS_PART1;
Object.assign(window.CAREERS_DATA || {}, T1_CAREERS_PART1);
