// TIER 0 CAREERS - Part 1 (Exterior & Construction)
// Full detailed profiles for all T0 careers

const T0_CAREERS_PART1 = {
    "exterior-door-replacement": {
        name: "Exterior Door Replacement",
        tier: 0, category: "Construction", onet: "47-2031.00",
        description: "Remove and install exterior entry doors, patio doors, and storm doors for residential and commercial properties, including frame modifications and weatherproofing.",
        dayInLife: "Work involves measuring door openings, removing old doors/frames, installing new pre-hung or custom doors, shimming, insulating, and finishing with trim and hardware.",
        salary: { entry: 34000, median: 50000, p75: 65000, top10: 85000 },
        growth: 5, timeToOwn: "1-2 months",
        education: { min: "High School / GED", preferred: "Carpentry experience", apprenticeship: "None required", ce: "Manufacturer training" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$10,000", insurance: "$500K GL" },
        pros: ["Quick installations", "High markup on doors", "Year-round work", "Upsell opportunities", "Low competition in niche"],
        cons: ["Heavy lifting", "Custom work challenging", "Material damage risk", "Weather exposure", "Seasonal slowdowns"],
        physical: ["Lifting heavy doors 100+ lbs", "Precise measurements", "Power tool operation", "Standing/kneeling"],
        certifications: [{ name: "Therma-Tru Certified", bonus: "+10% on premium doors" }],
        business: { startupMin: 8000, startupTypical: 25000, year1Revenue: 140000, breakeven: "3 months" }
    },

    "garage-door-installation-service": {
        name: "Garage Door Installation & Service",
        tier: 0, category: "Construction", onet: "49-9099.00",
        description: "Install, repair, and maintain residential and commercial garage doors, openers, and related hardware including springs, cables, and safety systems.",
        dayInLife: "Days include new door installations, spring replacements, opener installs, and emergency service calls. Mix of scheduled work and same-day repairs.",
        salary: { entry: 35000, median: 52000, p75: 70000, top10: 95000 },
        growth: 6, timeToOwn: "1-2 months",
        education: { min: "High School / GED", preferred: "Mechanical aptitude", apprenticeship: "None required", ce: "Safety training" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$10,000", insurance: "$1M GL" },
        pros: ["Emergency calls = premium rates", "Recurring maintenance", "Quick service jobs", "High-demand service", "Low seasonal variation"],
        cons: ["Dangerous spring work", "Heavy lifting", "On-call expectations", "Competition from franchises", "Inventory management"],
        physical: ["Heavy lifting", "Working at heights", "Spring tension danger", "Repetitive motions"],
        certifications: [{ name: "IDA Certified", bonus: "+8% on commercial" }, { name: "LiftMaster Pro", bonus: "+10% dealer support" }],
        business: { startupMin: 10000, startupTypical: 35000, year1Revenue: 180000, breakeven: "3 months" }
    },

    "skylight-installation": {
        name: "Skylight Installation",
        tier: 0, category: "Construction", onet: "47-2181.00",
        description: "Install, replace, and repair skylights and tubular daylighting devices in residential and commercial roofs, including flashing and weatherproofing.",
        dayInLife: "Work involves cutting roof openings, framing, installing skylights with proper flashing, and finishing interior trim. Jobs are typically 1-2 days each.",
        salary: { entry: 36000, median: 55000, p75: 72000, top10: 95000 },
        growth: 5, timeToOwn: "2-3 months",
        education: { min: "High School / GED", preferred: "Roofing experience", apprenticeship: "None required", ce: "Manufacturer training" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$15,000", insurance: "$1M GL" },
        pros: ["High-ticket jobs $2k-$8k", "Energy efficiency trend", "Specialized niche", "Add-on to roofing", "Good margins 40%+"],
        cons: ["Rooftop hazards", "Leak liability", "Weather dependent", "Seasonal in cold climates", "Limited market size"],
        physical: ["Rooftop work", "Heavy lifting", "Precision cutting", "Working at heights"],
        certifications: [{ name: "VELUX Certified", bonus: "+15% manufacturer warranty" }, { name: "Solatube Dealer", bonus: "+12% on tubular" }],
        business: { startupMin: 12000, startupTypical: 35000, year1Revenue: 160000, breakeven: "4 months" }
    },

    "insulation-installation": {
        name: "Insulation Installation",
        tier: 0, category: "Construction", onet: "47-2131.00",
        description: "Install fiberglass, cellulose, and blown-in insulation in residential and commercial buildings for energy efficiency and soundproofing.",
        dayInLife: "Work involves attic access, wall cavity filling, and crawlspace insulation. Requires protective equipment. Jobs range from small retrofits to new construction.",
        salary: { entry: 30000, median: 42000, p75: 55000, top10: 72000 },
        growth: 7, timeToOwn: "Immediate",
        education: { min: "None", preferred: "Construction experience", apprenticeship: "None required", ce: "Safety training" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$5,000", insurance: "$500K GL" },
        pros: ["Energy rebate programs", "Quick job completion", "Year-round work", "New construction demand", "Utility partnerships"],
        cons: ["Uncomfortable conditions", "PPE required constantly", "Itchy material", "Confined spaces", "Physical demands"],
        physical: ["Crawling in tight spaces", "Overhead work", "Heat exposure in attics", "Carrying batt rolls"],
        certifications: [{ name: "BPI Certified", bonus: "+10% on energy audits" }, { name: "Owens Corning Certified", bonus: "+5% rebates" }],
        business: { startupMin: 8000, startupTypical: 25000, year1Revenue: 110000, breakeven: "2 months" }
    },

    "attic-restoration": {
        name: "Attic Restoration",
        tier: 0, category: "Specialty", onet: "47-4071.00",
        description: "Clean, sanitize, and restore attic spaces after animal infestations, removing contaminated insulation and installing new, often combined with pest exclusion.",
        dayInLife: "Work involves animal waste removal, contaminated insulation extraction, sanitizing, deodorizing, and installing replacement insulation. Full PPE required.",
        salary: { entry: 32000, median: 48000, p75: 65000, top10: 85000 },
        growth: 6, timeToOwn: "1-2 months",
        education: { min: "High School / GED", preferred: "Pest/restoration experience", apprenticeship: "None required", ce: "OSHA safety" },
        licensing: { body: "Local jurisdiction", background: "Required", bonding: "$10,000", insurance: "$1M GL" },
        pros: ["High urgency = premium prices", "Insurance often pays", "Less competition", "Recurring from pest companies", "Year-round demand"],
        cons: ["Unpleasant conditions", "Health hazards", "PPE intensive", "Physical demands", "Odor exposure"],
        physical: ["Crawling in attics", "Removing heavy insulation", "Heat exposure", "Confined space work"],
        certifications: [{ name: "IICRC Certified", bonus: "+10% on insurance jobs" }],
        business: { startupMin: 10000, startupTypical: 30000, year1Revenue: 140000, breakeven: "3 months" }
    },

    "crawlspace-encapsulation": {
        name: "Crawlspace Encapsulation",
        tier: 0, category: "Specialty", onet: "47-4071.00",
        description: "Seal and condition crawlspaces with vapor barriers, insulation, dehumidifiers, and drainage systems to prevent moisture damage and improve indoor air quality.",
        dayInLife: "Work involves moisture assessment, debris removal, installing vapor barriers on floors and walls, sealing vents, and adding dehumidification systems.",
        salary: { entry: 35000, median: 52000, p75: 70000, top10: 95000 },
        growth: 8, timeToOwn: "1-2 months",
        education: { min: "High School / GED", preferred: "Construction experience", apprenticeship: "None required", ce: "Moisture control training" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$10,000", insurance: "$1M GL" },
        pros: ["High-ticket jobs $5k-$15k", "Growing awareness", "Less competition", "Add-ons increase value", "Year-round work"],
        cons: ["Crawling in tight spaces", "Physical demands", "Moisture/mold exposure", "Complex diagnosis", "Material costs"],
        physical: ["Crawling constantly", "Working in confined spaces", "Knee and back strain", "Carrying materials"],
        certifications: [{ name: "Basement Health Association", bonus: "+12% credibility" }],
        business: { startupMin: 8000, startupTypical: 25000, year1Revenue: 160000, breakeven: "3 months" }
    },

    "basement-waterproofing": {
        name: "Basement Waterproofing",
        tier: 0, category: "Specialty", onet: "47-4071.00",
        description: "Install interior and exterior drainage systems, sump pumps, and waterproofing membranes to prevent water intrusion in residential and commercial basements.",
        dayInLife: "Work involves breaking concrete for drain tile installation, sump pump systems, crack injection, and exterior excavation for membrane application.",
        salary: { entry: 36000, median: 55000, p75: 75000, top10: 100000 },
        growth: 6, timeToOwn: "2-3 months",
        education: { min: "High School / GED", preferred: "Construction experience", apprenticeship: "None required", ce: "Product training" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$15,000-$25,000", insurance: "$1M GL" },
        pros: ["High-ticket sales $8k-$25k", "Urgent problem = fast close", "Warranty revenue", "Year-round demand", "Financing available"],
        cons: ["Heavy labor", "Concrete breaking", "Excavation work", "Warranty liability", "High competition"],
        physical: ["Jackhammer operation", "Moving concrete debris", "Digging", "Working in wet conditions"],
        certifications: [{ name: "Basement Systems Dealer", bonus: "+15% leads and support" }],
        business: { startupMin: 15000, startupTypical: 45000, year1Revenue: 250000, breakeven: "4 months" }
    },

    "foundation-repair": {
        name: "Foundation Repair",
        tier: 0, category: "Construction", onet: "47-2061.00",
        description: "Repair and stabilize residential and commercial foundations using piers, wall anchors, carbon fiber, and other structural solutions.",
        dayInLife: "Work involves structural assessment, installing helical or push piers, wall stabilization, crack repair, and coordinating with engineers when required.",
        salary: { entry: 38000, median: 58000, p75: 78000, top10: 105000 },
        growth: 5, timeToOwn: "2-3 months",
        education: { min: "High School / GED", preferred: "Construction/engineering basics", apprenticeship: "None required", ce: "Manufacturer training" },
        licensing: { body: "Local jurisdiction", background: "Required", bonding: "$25,000", insurance: "$2M GL" },
        pros: ["Very high ticket $10k-$50k+", "Urgent problem = motivated buyers", "Transferable warranty value", "Engineer referrals", "Less seasonal"],
        cons: ["Heavy equipment", "Liability exposure", "Engineering complexity", "High startup cost", "Competitive market"],
        physical: ["Operating machinery", "Digging and excavating", "Heavy lifting", "Crawlspace work"],
        certifications: [{ name: "Ram Jack Dealer", bonus: "+20% support and leads" }, { name: "Foundation Supportworks", bonus: "+15% training" }],
        business: { startupMin: 25000, startupTypical: 75000, year1Revenue: 400000, breakeven: "5 months" }
    },

    "water-treatment-systems": {
        name: "Water Treatment Systems",
        tier: 0, category: "Specialty", onet: "47-2152.00",
        description: "Install and service residential and commercial water softeners, filtration systems, reverse osmosis, and whole-house treatment solutions.",
        dayInLife: "Work involves water testing, recommending solutions, installing equipment, connecting plumbing, and scheduling maintenance visits.",
        salary: { entry: 32000, median: 48000, p75: 65000, top10: 88000 },
        growth: 7, timeToOwn: "1-2 months",
        education: { min: "High School / GED", preferred: "Plumbing basics", apprenticeship: "None required", ce: "WQA certification recommended" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$5,000", insurance: "$500K GL" },
        pros: ["Recurring salt/filter revenue", "Growing health awareness", "Upsell opportunities", "Quick installations", "Year-round demand"],
        cons: ["Sales-driven income", "Competition from big box", "Inventory costs", "Service call volume", "Price sensitivity"],
        physical: ["Moderate lifting", "Plumbing connections", "Basement installations", "Repetitive tasks"],
        certifications: [{ name: "WQA Certified", bonus: "+12% customer trust" }, { name: "Kinetico Dealer", bonus: "+15% premium brand" }],
        business: { startupMin: 8000, startupTypical: 25000, year1Revenue: 130000, breakeven: "3 months" }
    },

    "drain-cleaning-jetting": {
        name: "Drain Cleaning & Jetting",
        tier: 0, category: "Mechanical", onet: "47-2152.00",
        description: "Clear clogged drains using cable machines, hydro-jetting equipment, and camera inspections for residential and commercial properties.",
        dayInLife: "Work involves responding to clog calls, running cable machines, hydro-jetting severe blockages, camera inspections, and recommending repairs.",
        salary: { entry: 35000, median: 52000, p75: 70000, top10: 95000 },
        growth: 6, timeToOwn: "1-2 months",
        education: { min: "High School / GED", preferred: "Plumbing experience", apprenticeship: "None required", ce: "Equipment training" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$10,000", insurance: "$1M GL" },
        pros: ["Emergency rates premium", "Quick job turnaround", "Upsell to repairs", "Always in demand", "Low material costs"],
        cons: ["Unpleasant work", "24/7 availability expected", "Equipment maintenance", "Physical demands", "Competition"],
        physical: ["Handling cable machines", "Crawling under sinks", "Lifting equipment", "Exposure to sewage"],
        certifications: [{ name: "NASSCO PACP", bonus: "+15% on camera inspections" }],
        business: { startupMin: 15000, startupTypical: 40000, year1Revenue: 180000, breakeven: "3 months" }
    }
};

window.T0_CAREERS_PART1 = T0_CAREERS_PART1;
Object.assign(window.CAREERS_DATA || {}, T0_CAREERS_PART1);
