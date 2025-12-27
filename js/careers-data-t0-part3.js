// TIER 0 CAREERS - Part 3 (Exterior, Commercial, Specialty)
// Full detailed profiles

const T0_CAREERS_PART3 = {
    "hardscape-installation": {
        name: "Hardscape Installation",
        tier: 0, category: "Exterior", onet: "47-2022.00",
        description: "Design and install patios, walkways, retaining walls, and outdoor living spaces using pavers, natural stone, and concrete products.",
        dayInLife: "Work involves excavation, base preparation, paver/stone laying, polymeric sand application, and edging. Projects range from small patios to large outdoor spaces.",
        salary: { entry: 34000, median: 52000, p75: 70000, top10: 95000 },
        growth: 6, timeToOwn: "1-2 months",
        education: { min: "High School / GED", preferred: "Landscape/construction experience", apprenticeship: "None required", ce: "ICPI certification recommended" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$10,000", insurance: "$1M GL" },
        pros: ["High-ticket projects $5k-$50k", "Outdoor living trend", "Creative work", "Good margins 35-45%", "Upsell lighting/water features"],
        cons: ["Weather dependent", "Heavy physical labor", "Equipment intensive", "Seasonal in cold climates", "Sub-base critical"],
        physical: ["Heavy lifting (stones, pavers)", "Operating equipment", "Digging/grading", "Kneeling for installation"],
        certifications: [{ name: "ICPI Certified", bonus: "+15% on bids" }, { name: "Belgard Authorized", bonus: "+12% manufacturer support" }],
        business: { startupMin: 15000, startupTypical: 45000, year1Revenue: 200000, breakeven: "4 months" }
    },

    "fencing-gates": {
        name: "Fencing & Gates",
        tier: 0, category: "Exterior", onet: "47-2031.00",
        description: "Install residential and commercial fencing including wood, vinyl, chain-link, ornamental metal, and automated gate systems.",
        dayInLife: "Work involves layout, post hole digging, setting posts in concrete, attaching fence panels/rails, and installing gates with hardware.",
        salary: { entry: 32000, median: 48000, p75: 65000, top10: 88000 },
        growth: 5, timeToOwn: "1-2 months",
        education: { min: "High School / GED", preferred: "Construction experience", apprenticeship: "None required", ce: "Gate automation training" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$10,000", insurance: "$500K GL" },
        pros: ["Quick job completion", "Variety of materials", "Gate automation upsell", "Steady demand", "Low material waste"],
        cons: ["Weather dependent", "Digging is hard labor", "Property line disputes", "Material costs fluctuate", "Competition"],
        physical: ["Post hole digging", "Handling heavy posts", "Power auger operation", "Outdoor weather exposure"],
        certifications: [{ name: "AFA Certified", bonus: "+10% industry credibility" }],
        business: { startupMin: 8000, startupTypical: 25000, year1Revenue: 130000, breakeven: "3 months" }
    },

    "asphalt-paving-sealcoating": {
        name: "Asphalt Paving & Sealcoating",
        tier: 0, category: "Exterior", onet: "47-2071.00",
        description: "Install and maintain asphalt driveways and parking lots including paving, sealcoating, crack filling, and line striping.",
        dayInLife: "Work involves surface preparation, hot asphalt laying and compaction for paving, or cleaning and applying sealcoat for maintenance. Commercial work often at night.",
        salary: { entry: 35000, median: 55000, p75: 75000, top10: 100000 },
        growth: 4, timeToOwn: "2-3 months",
        education: { min: "High School / GED", preferred: "Paving experience", apprenticeship: "None required", ce: "None required" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$15,000", insurance: "$1M GL" },
        pros: ["Sealcoating = recurring revenue", "Commercial contracts", "Good margins", "Quick sealcoat jobs", "Always needed"],
        cons: ["Very seasonal (warm only)", "Equipment intensive", "Hot material hazards", "Night work for commercial", "Price competition"],
        physical: ["Operating paving equipment", "Shoveling hot asphalt", "Heat exposure", "Physical stamina required"],
        certifications: [{ name: "Sealmaster Certified", bonus: "+10% product pricing" }],
        business: { startupMin: 20000, startupTypical: 60000, year1Revenue: 180000, breakeven: "4 months" }
    },

    "snow-removal-services": {
        name: "Snow Removal Services",
        tier: 0, category: "Exterior", onet: "37-3011.00",
        description: "Provide residential and commercial snow plowing, shoveling, salting, and ice management services during winter months.",
        dayInLife: "Work is weather-driven, often starting at 3-4 AM during storms. Involves plowing routes, sidewalk clearing, and salt/sand application. Often paired with landscaping.",
        salary: { entry: 25000, median: 45000, p75: 70000, top10: 100000 },
        growth: 3, timeToOwn: "Immediate",
        education: { min: "None", preferred: "None", apprenticeship: "None required", ce: "None required" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$5,000", insurance: "$1M GL (seasonal)" },
        pros: ["Seasonal contracts = guaranteed income", "Commercial contracts lucrative", "Complements landscaping", "Low overhead", "High demand in storms"],
        cons: ["Extremely unpredictable hours", "Equipment maintenance", "Liability for slips/falls", "Regional/seasonal only", "Physical demands"],
        physical: ["Operating plow equipment", "Shoveling", "Working in extreme cold", "Sleep deprivation during storms"],
        certifications: [{ name: "SIMA Certified", bonus: "+15% on commercial contracts" }],
        business: { startupMin: 10000, startupTypical: 35000, year1Revenue: 80000, breakeven: "First storm event" }
    },

    "shade-systems-awnings": {
        name: "Shade Systems & Awnings",
        tier: 0, category: "Exterior", onet: "47-2031.00",
        description: "Design, sell, and install retractable awnings, shade sails, pergola covers, and exterior shading systems for residential and commercial properties.",
        dayInLife: "Work involves site measurements, design consultations, ordering custom products, and installation requiring structural mounting and sometimes electrical.",
        salary: { entry: 35000, median: 52000, p75: 70000, top10: 92000 },
        growth: 6, timeToOwn: "1-2 months",
        education: { min: "High School / GED", preferred: "Construction experience", apprenticeship: "None required", ce: "Product training" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$10,000", insurance: "$500K GL" },
        pros: ["Growing outdoor living trend", "High margins 40%+", "Motorized = premium pricing", "Commercial expansion", "Quick installations"],
        cons: ["Seasonal demand", "Custom product lead times", "Structural requirements", "Wind damage liability", "Limited market"],
        physical: ["Ladder and scaffold work", "Heavy fabric handling", "Drilling into structures", "Working at heights"],
        certifications: [{ name: "SunSetter Dealer", bonus: "+12% dealer support" }],
        business: { startupMin: 8000, startupTypical: 25000, year1Revenue: 140000, breakeven: "3 months" }
    },

    "patio-enclosures": {
        name: "Patio Enclosures",
        tier: 0, category: "Exterior", onet: "47-2031.00",
        description: "Design and install sunrooms, screen rooms, three-season rooms, and patio enclosures to extend outdoor living spaces.",
        dayInLife: "Work involves site assessment, design presentation, foundation/footer work if needed, framing, and installing glass/screen panels and roofing.",
        salary: { entry: 38000, median: 58000, p75: 78000, top10: 105000 },
        growth: 5, timeToOwn: "2-3 months",
        education: { min: "High School / GED", preferred: "Construction experience", apprenticeship: "None required", ce: "Manufacturer training" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$15,000", insurance: "$1M GL" },
        pros: ["High-ticket $15k-$80k", "Growing market", "Dealer systems available", "Year-round use extends life", "Premium clients"],
        cons: ["Permitting required", "Foundation complexity", "Seasonal installation", "Long sales cycle", "Competition from sunroom companies"],
        physical: ["Heavy panel handling", "Roofing work", "Framing", "Foundation work"],
        certifications: [{ name: "Patio Enclosures Dealer", bonus: "+15% established system" }, { name: "Sunspace Certified", bonus: "+12% product training" }],
        business: { startupMin: 15000, startupTypical: 45000, year1Revenue: 280000, breakeven: "4 months" }
    },

    "commercial-roofing": {
        name: "Commercial Roofing",
        tier: 0, category: "Construction", onet: "47-2181.00",
        description: "Install and repair flat and low-slope commercial roofing systems including TPO, EPDM, PVC, modified bitumen, and built-up roofing.",
        dayInLife: "Work involves large-scale projects lasting days to weeks. Tasks include deck preparation, insulation, membrane installation, and flashing/penetration sealing.",
        salary: { entry: 38000, median: 58000, p75: 78000, top10: 105000 },
        growth: 5, timeToOwn: "3-6 months",
        education: { min: "High School / GED", preferred: "Roofing experience", apprenticeship: "None required", ce: "Manufacturer certifications" },
        licensing: { body: "State/local jurisdiction", background: "Required", bonding: "$25,000-$50,000", insurance: "$2M GL" },
        pros: ["Large contract values $50k-$500k+", "Recurring maintenance", "Less residential competition", "Commercial relationships", "Manufacturer programs"],
        cons: ["Equipment intensive", "Union territories", "Bonding requirements", "Longer sales cycles", "Weather windows critical"],
        physical: ["Heavy material handling", "Torch work", "Operating equipment", "Roof safety"],
        certifications: [{ name: "Carlisle Authorized", bonus: "+20% manufacturer warranty" }, { name: "Firestone Certified", bonus: "+18% commercial credibility" }],
        business: { startupMin: 40000, startupTypical: 120000, year1Revenue: 500000, breakeven: "6 months" }
    },

    "facility-maintenance": {
        name: "Facility Maintenance",
        tier: 0, category: "Commercial", onet: "49-9071.00",
        description: "Provide general maintenance and repair services for commercial buildings including minor plumbing, electrical, HVAC, and general repairs.",
        dayInLife: "Work involves responding to work orders, performing preventive maintenance, minor repairs across trades, and coordinating specialty contractors when needed.",
        salary: { entry: 32000, median: 48000, p75: 62000, top10: 80000 },
        growth: 6, timeToOwn: "Immediate",
        education: { min: "High School / GED", preferred: "Multi-trade experience", apprenticeship: "None required", ce: "EPA 608 recommended" },
        licensing: { body: "Local jurisdiction", background: "Usually required", bonding: "$10,000", insurance: "$1M GL" },
        pros: ["Contract-based recurring revenue", "Variety of work", "Day shift typically", "Commercial relationships", "Scalable with employees"],
        cons: ["Jack of all trades", "Emergency calls", "Low per-hour rates", "Building managers demanding", "Equipment/van investment"],
        physical: ["Varied physical demands", "Ladder work", "Light plumbing/electrical", "Walking/standing all day"],
        certifications: [{ name: "EPA 608 Universal", bonus: "Required for HVAC work" }, { name: "OSHA 10", bonus: "Required for many buildings" }],
        business: { startupMin: 8000, startupTypical: 25000, year1Revenue: 120000, breakeven: "3 months" }
    },

    "specialty-coatings-industrial-epoxy": {
        name: "Specialty Coatings & Industrial Epoxy",
        tier: 0, category: "Specialty", onet: "47-2141.00",
        description: "Apply industrial-grade floor coatings, tank linings, and specialty protective coatings for commercial and industrial facilities.",
        dayInLife: "Work involves extensive surface prep (grinding, shot blasting), primer application, multi-layer coating systems, and curing coordination for warehouses, plants, and facilities.",
        salary: { entry: 38000, median: 58000, p75: 78000, top10: 105000 },
        growth: 6, timeToOwn: "2-3 months",
        education: { min: "High School / GED", preferred: "Industrial coating experience", apprenticeship: "None required", ce: "NACE/SSPC training recommended" },
        licensing: { body: "State/local jurisdiction", background: "Required", bonding: "$25,000", insurance: "$2M GL" },
        pros: ["High-value commercial contracts", "Specialized = less competition", "Industrial relationships", "Recurring maintenance", "Technical expertise valued"],
        cons: ["Large equipment investment", "Chemical exposure", "Facility downtime coordination", "Long cure times", "Surface prep intensive"],
        physical: ["Operating prep equipment", "Chemical handling", "Large floor areas", "Industrial environments"],
        certifications: [{ name: "NACE CIP Level 1", bonus: "+20% on industrial bids" }, { name: "SSPC-QP 1", bonus: "+15% commercial credibility" }],
        business: { startupMin: 30000, startupTypical: 80000, year1Revenue: 350000, breakeven: "5 months" }
    },

    "welding-fabrication-shops": {
        name: "Welding & Fabrication Shops",
        tier: 0, category: "Specialty", onet: "51-4121.00",
        description: "Provide custom metal fabrication, welding, and repair services for residential, commercial, and industrial clients including gates, railings, and structural work.",
        dayInLife: "Work involves reading drawings, cutting/shaping metal, welding (MIG, TIG, stick), finishing, and installation. Mix of shop and field work.",
        salary: { entry: 35000, median: 52000, p75: 70000, top10: 95000 },
        growth: 4, timeToOwn: "2-3 months",
        education: { min: "High School / GED", preferred: "Trade school welding", apprenticeship: "None required (recommended)", ce: "AWS certifications" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$10,000", insurance: "$1M GL" },
        pros: ["Diverse project types", "Custom work = high margins", "Industrial opportunities", "Essential skill", "Artistic potential"],
        cons: ["Shop space needed", "Equipment investment", "Safety hazards", "Price competition", "Physical demands"],
        physical: ["Heavy lifting", "Welding postures", "Hot metal handling", "PPE required constantly"],
        certifications: [{ name: "AWS Certified", bonus: "+15% on structural" }, { name: "CWI Inspector", bonus: "+25% for inspection services" }],
        business: { startupMin: 20000, startupTypical: 60000, year1Revenue: 180000, breakeven: "5 months" }
    },

    "utility-locating-hydro-excavation": {
        name: "Utility Locating & Hydro-excavation",
        tier: 0, category: "Specialty", onet: "47-4061.00",
        description: "Locate underground utilities using GPR and electromagnetic equipment, and perform hydro-excavation for safe utility exposure.",
        dayInLife: "Work involves operating locating equipment, marking utility locations, and using high-pressure water/vacuum systems to safely expose buried utilities.",
        salary: { entry: 38000, median: 58000, p75: 75000, top10: 98000 },
        growth: 7, timeToOwn: "3-6 months",
        education: { min: "High School / GED", preferred: "Utility/construction experience", apprenticeship: "None required", ce: "Equipment training" },
        licensing: { body: "State/local jurisdiction", background: "Required", bonding: "$25,000", insurance: "$2M GL" },
        pros: ["Growing demand (underground congestion)", "High day rates $800+", "Specialized equipment", "Excavation contracts", "Less competition"],
        cons: ["High equipment cost", "CDL often required", "Utility damage liability", "Weather dependent", "Physical demands"],
        physical: ["Operating heavy equipment", "Handling high-pressure hoses", "Manual digging", "Traffic exposure"],
        certifications: [{ name: "NULCA Certified", bonus: "+15% utility contracts" }],
        business: { startupMin: 75000, startupTypical: 200000, year1Revenue: 400000, breakeven: "8 months" }
    },

    "trenching-directional-boring": {
        name: "Trenching & Directional Boring",
        tier: 0, category: "Specialty", onet: "47-2073.00",
        description: "Install underground utilities using open-cut trenching and horizontal directional drilling (HDD) for residential, commercial, and utility projects.",
        dayInLife: "Work involves operating trenchers, directional drills, and excavators to install conduit, pipe, and cable. Projects range from residential services to major utility runs.",
        salary: { entry: 40000, median: 60000, p75: 80000, top10: 110000 },
        growth: 6, timeToOwn: "3-6 months",
        education: { min: "High School / GED", preferred: "Equipment operation experience", apprenticeship: "None required", ce: "HDD training" },
        licensing: { body: "State/local jurisdiction", background: "Required", bonding: "$50,000", insurance: "$2M GL" },
        pros: ["Utility demand growing", "Fiber optic expansion", "High equipment rates", "Long-term contracts", "Less labor intensive"],
        cons: ["Major equipment investment", "Utility damage liability", "CDL required", "Locating critical", "Weather dependent"],
        physical: ["Operating heavy equipment", "Site setup", "Pipe handling", "Traffic control"],
        certifications: [{ name: "Ditch Witch Certified", bonus: "+10% equipment support" }],
        business: { startupMin: 100000, startupTypical: 300000, year1Revenue: 600000, breakeven: "10 months" }
    },

    "traffic-control-striping": {
        name: "Traffic Control & Striping",
        tier: 0, category: "Specialty", onet: "47-4051.00",
        description: "Provide traffic control services and parking lot/road striping for construction projects, municipalities, and commercial properties.",
        dayInLife: "Work involves setting up traffic control devices (cones, signs, barricades) for work zones, and striping parking lots and roadways with paint or thermoplastic.",
        salary: { entry: 32000, median: 48000, p75: 62000, top10: 82000 },
        growth: 5, timeToOwn: "1-2 months",
        education: { min: "High School / GED", preferred: "Flagging certification", apprenticeship: "None required", ce: "ATSSA training" },
        licensing: { body: "State/local jurisdiction", background: "Required", bonding: "$10,000", insurance: "$1M GL" },
        pros: ["Recurring municipal contracts", "Low skill barrier", "Night work premium", "Commercial parking lots", "Quick striping jobs"],
        cons: ["Night/weekend work often", "Traffic exposure danger", "Weather dependent", "Equipment investment", "Seasonal in cold climates"],
        physical: ["Standing for hours", "Traffic exposure", "Operating striping equipment", "Cone/sign placement"],
        certifications: [{ name: "ATSSA Certified", bonus: "+15% municipal contracts" }],
        business: { startupMin: 15000, startupTypical: 45000, year1Revenue: 140000, breakeven: "4 months" }
    },

    "contents-pack-out-storage": {
        name: "Contents Pack-out & Storage",
        tier: 0, category: "Restoration", onet: "53-7062.00",
        description: "Inventory, pack, clean, and store personal property during restoration projects following water, fire, or other property damage.",
        dayInLife: "Work involves detailed inventorying, careful packing, transporting to warehouse, cleaning/restoration of contents, and returning items post-restoration.",
        salary: { entry: 30000, median: 45000, p75: 58000, top10: 75000 },
        growth: 5, timeToOwn: "1-2 months",
        education: { min: "High School / GED", preferred: "Moving/restoration experience", apprenticeship: "None required", ce: "IICRC contents" },
        licensing: { body: "Local jurisdiction", background: "Required", bonding: "$25,000", insurance: "$1M GL" },
        pros: ["Insurance pays well", "Recurring from restorers", "Warehouse revenue", "Cleaning adds value", "Less physical than demo"],
        cons: ["Emotional situations", "Inventory tedious", "Storage space needed", "Vehicle investment", "Breakage liability"],
        physical: ["Lifting boxes", "Packing carefully", "Loading trucks", "Warehouse organization"],
        certifications: [{ name: "IICRC TCST", bonus: "+12% on insurance claims" }],
        business: { startupMin: 15000, startupTypical: 45000, year1Revenue: 150000, breakeven: "4 months" }
    },

    "emergency-board-up-tarping": {
        name: "Emergency Board-up & Tarping",
        tier: 0, category: "Restoration", onet: "47-2031.00",
        description: "Provide 24/7 emergency property securing services including window and door board-up, roof tarping, and temporary structural support after damage.",
        dayInLife: "Work is on-call driven. Involves rapid response to damage sites, measuring/cutting plywood, securing openings, and installing temporary roof tarps.",
        salary: { entry: 35000, median: 52000, p75: 70000, top10: 95000 },
        growth: 5, timeToOwn: "Immediate",
        education: { min: "High School / GED", preferred: "Construction experience", apprenticeship: "None required", ce: "None required" },
        licensing: { body: "Local jurisdiction", background: "Required", bonding: "$10,000", insurance: "$1M GL" },
        pros: ["Emergency rates premium", "Insurance covered", "Leads to restoration work", "Low material cost", "Quick jobs"],
        cons: ["24/7 availability", "Dangerous conditions", "Weather exposure", "Unpredictable schedule", "After-hours work"],
        physical: ["Ladder/roof work", "Cutting plywood", "Working in weather", "Quick physical response"],
        certifications: [{ name: "IICRC WRT", bonus: "+10% restoration referrals" }],
        business: { startupMin: 8000, startupTypical: 20000, year1Revenue: 120000, breakeven: "2 months" }
    },

    "commercial-drying-equipment-rental": {
        name: "Commercial Drying Equipment Rental",
        tier: 0, category: "Restoration", onet: "53-7062.00",
        description: "Rent and deploy commercial dehumidifiers, air movers, and drying equipment for water damage mitigation projects.",
        dayInLife: "Work involves equipment delivery, placement for optimal drying, monitoring with moisture meters, retrieval, and equipment maintenance between rentals.",
        salary: { entry: 35000, median: 55000, p75: 75000, top10: 100000 },
        growth: 6, timeToOwn: "2-4 months",
        education: { min: "High School / GED", preferred: "Restoration knowledge", apprenticeship: "None required", ce: "IICRC drying" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$10,000", insurance: "$1M GL" },
        pros: ["Equipment works for you", "Daily rental rates $50-$200/unit", "Minimal labor", "Scalable with inventory", "Insurance relationships"],
        cons: ["Equipment investment $2k-$5k each", "Maintenance required", "Damage/loss risk", "Competition from restorers", "Delivery logistics"],
        physical: ["Loading equipment", "Truck driving", "Equipment setup", "Moderate lifting"],
        certifications: [{ name: "IICRC WRT", bonus: "+15% restorer trust" }],
        business: { startupMin: 25000, startupTypical: 75000, year1Revenue: 180000, breakeven: "6 months" }
    }
};

window.T0_CAREERS_PART3 = T0_CAREERS_PART3;
Object.assign(window.CAREERS_DATA || {}, T0_CAREERS_PART3);
