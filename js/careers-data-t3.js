// TIER 3 CAREERS (9 careers)
// Master/Contractor licensed trades - 5-7+ years experience

const T3_CAREERS = {
    "hvac-contractor-master": {
        name: "HVAC Contractor (Master)",
        tier: 3, category: "Mechanical", onet: "49-9021.01",
        description: "Operate an HVAC contracting business with full design-build capability for residential and commercial projects, holding master HVAC license.",
        dayInLife: "Work involves project estimation, crew management, system design, permit coordination, subcontractor oversight, and business operations.",
        salary: { entry: 65000, median: 95000, p75: 130000, top10: 200000 },
        growth: 6, timeToOwn: "5-7 years (master license)",
        education: { min: "High School / GED + journeyman", preferred: "Trade school + master license", apprenticeship: "5-7 years / 10,000+ hours", ce: "16 hours annually" },
        licensing: { body: "State contractor board", background: "Required", bonding: "$25,000-$100,000", insurance: "$2M GL + WC" },
        pros: ["Highest income in HVAC", "Business ownership", "Design-build premium", "Hiring capability", "Commercial/residential flexibility"],
        cons: ["Full business liability", "Employee management", "Working capital required", "License maintenance", "Competitive market"],
        physical: ["Primarily management", "Site supervision", "Technical oversight", "Customer meetings"],
        certifications: [{ name: "Master HVAC license", bonus: "Required for contractor" }, { name: "EPA 608 Universal", bonus: "Required" }],
        business: { startupMin: 50000, startupTypical: 150000, year1Revenue: 800000, breakeven: "8 months" }
    },

    "electrical-contractor-master": {
        name: "Electrical Contractor (Master)",
        tier: 3, category: "Electrical", onet: "47-2111.02",
        description: "Operate an electrical contracting business with full permit-pulling capability for residential and commercial projects, holding master electrician license.",
        dayInLife: "Work involves project bidding, crew supervision, code compliance, permit management, job costing, and business development.",
        salary: { entry: 70000, median: 105000, p75: 145000, top10: 220000 },
        growth: 6, timeToOwn: "5-7 years (master license)",
        education: { min: "High School / GED + journeyman", preferred: "Trade school + master license", apprenticeship: "5-7 years / 10,000+ hours", ce: "24 hours annually" },
        licensing: { body: "State electrical board/contractor", background: "Required", bonding: "$25,000-$100,000", insurance: "$2M GL + WC" },
        pros: ["Highest electrical income", "Business ownership", "Commercial opportunities", "Hiring capability", "Design-build projects"],
        cons: ["Full liability", "Code expertise required", "Employee management", "Inspection coordination", "Material pricing fluctuations"],
        physical: ["Primarily management", "Technical oversight", "Site supervision", "Business development"],
        certifications: [{ name: "Master electrician license", bonus: "Required for contractor" }],
        business: { startupMin: 55000, startupTypical: 175000, year1Revenue: 900000, breakeven: "9 months" }
    },

    "plumbing-contractor-master": {
        name: "Plumbing Contractor (Master)",
        tier: 3, category: "Mechanical", onet: "47-2152.02",
        description: "Operate a plumbing contracting business with full design and permit capability for residential and commercial projects, holding master plumber license.",
        dayInLife: "Work involves project estimation, crew management, new construction coordination, inspection management, and business operations.",
        salary: { entry: 68000, median: 100000, p75: 140000, top10: 210000 },
        growth: 5, timeToOwn: "5-7 years (master license)",
        education: { min: "High School / GED + journeyman", preferred: "Trade school + master license", apprenticeship: "5-7 years / 10,000+ hours", ce: "12 hours annually" },
        licensing: { body: "State plumbing board/contractor", background: "Required", bonding: "$25,000-$100,000", insurance: "$2M GL + WC" },
        pros: ["Highest plumbing income", "Business ownership", "New construction demand", "Commercial opportunities", "Hiring capability"],
        cons: ["Full liability", "Code compliance critical", "Employee management", "Underground work risk", "Material logistics"],
        physical: ["Primarily management", "Technical oversight", "Site supervision", "Customer relations"],
        certifications: [{ name: "Master plumber license", bonus: "Required for contractor" }],
        business: { startupMin: 55000, startupTypical: 170000, year1Revenue: 850000, breakeven: "9 months" }
    },

    "fire-protection-contractor": {
        name: "Fire Protection Contractor",
        tier: 3, category: "Mechanical", onet: "47-2152.02",
        description: "Design, install, and maintain fire sprinkler and suppression systems for commercial, industrial, and residential properties.",
        dayInLife: "Work involves hydraulic design, system installation supervision, inspection coordination, service work, and fire marshal relationships.",
        salary: { entry: 65000, median: 95000, p75: 130000, top10: 180000 },
        growth: 7, timeToOwn: "5-7 years (fire sprinkler license)",
        education: { min: "High School / GED + journeyman", preferred: "NICET certification + contractor license", apprenticeship: "4-5 years", ce: "NICET renewal + state CE" },
        licensing: { body: "State fire marshal/contractor board", background: "Required", bonding: "$50,000+", insurance: "$2M GL + WC" },
        pros: ["Code-required systems", "Commercial demand", "Inspection revenue recurring", "Less seasonal variation", "Life-safety premium"],
        cons: ["Complex licensing", "Hydraulic calculations", "Long project cycles", "Insurance requirements high", "Inspection failures costly"],
        physical: ["Primarily supervision", "Some installation work", "Inspection attendance", "Customer meetings"],
        certifications: [{ name: "NICET Level III/IV", bonus: "+25% on design-build" }, { name: "State fire sprinkler license", bonus: "Required" }],
        business: { startupMin: 75000, startupTypical: 200000, year1Revenue: 1000000, breakeven: "10 months" }
    },

    "refrigeration-systems": {
        name: "Refrigeration Systems",
        tier: 3, category: "Mechanical", onet: "49-9021.00",
        description: "Design, install, and service commercial and industrial refrigeration systems including walk-ins, reach-ins, and industrial process cooling.",
        dayInLife: "Work involves system design, installation supervision, troubleshooting complex systems, and managing preventive maintenance programs.",
        salary: { entry: 60000, median: 88000, p75: 115000, top10: 155000 },
        growth: 6, timeToOwn: "5-7 years (master refrigeration)",
        education: { min: "High School / GED + journeyman", preferred: "Trade school + master license", apprenticeship: "5+ years", ce: "16 hours annually" },
        licensing: { body: "State mechanical board + EPA", background: "Required", bonding: "$25,000", insurance: "$2M GL" },
        pros: ["Restaurant/supermarket demand", "Recurring maintenance", "Emergency rates premium", "Specialized skill", "24/7 critical need"],
        cons: ["Emergency calls common", "Cold chain liability", "Product loss liability", "Complex systems", "Physical demands"],
        physical: ["Some heavy work", "Cold environments", "Technical diagnosis", "Supervision role"],
        certifications: [{ name: "EPA 608 Universal", bonus: "Required" }, { name: "Master refrigeration", bonus: "Required for contractor" }],
        business: { startupMin: 50000, startupTypical: 140000, year1Revenue: 700000, breakeven: "8 months" }
    },

    "boiler-systems": {
        name: "Boiler Systems",
        tier: 3, category: "Mechanical", onet: "51-8021.00",
        description: "Design, install, and service steam and hot water boiler systems for commercial and industrial heating applications.",
        dayInLife: "Work involves boiler installation, combustion tuning, preventive maintenance, safety inspections, and managing heating system operations.",
        salary: { entry: 62000, median: 92000, p75: 120000, top10: 160000 },
        growth: 4, timeToOwn: "5-7 years (boiler license)",
        education: { min: "High School / GED + journeyman", preferred: "Boiler technician training + license", apprenticeship: "5+ years", ce: "Annual boiler CE" },
        licensing: { body: "State boiler board", background: "Required", bonding: "$25,000", insurance: "$2M GL" },
        pros: ["Specialized = premium rates", "Commercial/industrial demand", "Licensing barrier to entry", "Recurring maintenance", "Critical system priority"],
        cons: ["High liability (explosions)", "State licensing complex", "Seasonal demand peaks", "Physical demands", "Code expertise required"],
        physical: ["Heavy equipment", "Hot environments", "Mechanical work", "Transitioning to supervision"],
        certifications: [{ name: "State boiler technician/operator", bonus: "Required" }, { name: "Combustion efficiency certification", bonus: "+15% on efficiency work" }],
        business: { startupMin: 55000, startupTypical: 150000, year1Revenue: 750000, breakeven: "9 months" }
    },

    "solar-installation-contractor": {
        name: "Solar Installation Contractor",
        tier: 3, category: "Electrical", onet: "47-2231.00",
        description: "Design and install residential and commercial solar photovoltaic systems including grid-tie, battery backup, and off-grid solutions.",
        dayInLife: "Work involves system design, crew management, utility interconnection, permit coordination, and managing installation operations.",
        salary: { entry: 60000, median: 88000, p75: 120000, top10: 175000 },
        growth: 52, timeToOwn: "4-5 years (electrical + NABCEP)",
        education: { min: "High School / GED + electrical", preferred: "NABCEP certification + contractor license", apprenticeship: "4 years electrical + solar training", ce: "NABCEP renewal" },
        licensing: { body: "State electrical/contractor board", background: "Required", bonding: "$25,000", insurance: "$2M GL" },
        pros: ["Explosive market growth", "Tax credit incentives", "Climate policy support", "Technical innovation", "Commercial rooftop demand"],
        cons: ["Policy uncertainty", "Utility interconnection complexity", "Competition increasing", "Module price volatility", "Roof work hazards"],
        physical: ["Primarily management", "Some installation", "Roof work", "Customer meetings"],
        certifications: [{ name: "Electrical license", bonus: "Required" }, { name: "NABCEP PV Installation Professional", bonus: "+25% credibility" }],
        business: { startupMin: 60000, startupTypical: 175000, year1Revenue: 1200000, breakeven: "8 months" }
    },

    "medical-gas-systems": {
        name: "Medical Gas Systems",
        tier: 3, category: "Mechanical", onet: "47-2152.00",
        description: "Design, install, and service medical gas piping systems including oxygen, nitrous oxide, nitrogen, and vacuum for healthcare facilities.",
        dayInLife: "Work involves system design, pipe installation, brazing, testing/certification, and coordinating with healthcare facility management.",
        salary: { entry: 65000, median: 95000, p75: 125000, top10: 165000 },
        growth: 6, timeToOwn: "5+ years (medical gas certification)",
        education: { min: "High School / GED + plumbing/pipefitting", preferred: "ASSE 6010/6020 certification", apprenticeship: "4 years + medical gas training", ce: "Bi-annual recertification" },
        licensing: { body: "ASSE + state plumbing", background: "Required", bonding: "$50,000", insurance: "$2M GL" },
        pros: ["Healthcare demand", "Specialized = less competition", "High rates $100+/hr", "Certification barrier", "Critical system premium"],
        cons: ["Strict certification requirements", "Hospital work complexity", "Testing precision critical", "Liability exposure", "After-hours work often"],
        physical: ["Moderate physical", "Precision brazing", "Clean environments", "Testing procedures"],
        certifications: [{ name: "ASSE 6010 Medical Gas Installer", bonus: "Required" }, { name: "ASSE 6020 Verifier", bonus: "+20% testing revenue" }],
        business: { startupMin: 55000, startupTypical: 150000, year1Revenue: 800000, breakeven: "9 months" }
    },

    "clean-room-hvac": {
        name: "Clean Room HVAC",
        tier: 3, category: "Mechanical", onet: "49-9021.00",
        description: "Design, install, and service HVAC and air filtration systems for pharmaceutical, semiconductor, and research cleanroom environments.",
        dayInLife: "Work involves HEPA filtration systems, pressurization balancing, particle monitoring, and maintaining cleanroom classifications.",
        salary: { entry: 68000, median: 100000, p75: 135000, top10: 180000 },
        growth: 8, timeToOwn: "5-7 years (specialized training)",
        education: { min: "High School / GED + HVAC journeyman", preferred: "Cleanroom certification + experience", apprenticeship: "4 years + cleanroom training", ce: "Ongoing certification" },
        licensing: { body: "State mechanical board", background: "Required", bonding: "$50,000", insurance: "$2M GL" },
        pros: ["Premium rates", "Semiconductor/pharma growth", "Technical specialization", "Mission-critical systems", "Less price competition"],
        cons: ["Strict protocols", "Gowning/cleanliness requirements", "Validation complexity", "Documentation intensive", "Specialized tools/equipment"],
        physical: ["Cleanroom work", "Filter handling", "Precision balancing", "Testing procedures"],
        certifications: [{ name: "HVAC journeyman/master", bonus: "Required" }, { name: "Cleanroom certification", bonus: "+25% specialized work" }],
        business: { startupMin: 65000, startupTypical: 175000, year1Revenue: 900000, breakeven: "10 months" }
    }
};

window.T3_CAREERS = T3_CAREERS;
Object.assign(window.CAREERS_DATA || {}, T3_CAREERS);
