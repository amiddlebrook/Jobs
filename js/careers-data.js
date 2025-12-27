// Comprehensive Career Data for all 139 trades
// Organized by tier with realistic salary, licensing, education, and business data

const CAREERS_DATA = {
    // ============ TIER 0 - OWNER NOW (No trade license required) ============
    "roofing-retail-": {
        name: "Roofing (retail)",
        tier: 0,
        category: "Construction",
        onet: "47-2181.00",
        description: "Install, repair, and replace roofs on residential and commercial buildings using various materials including asphalt shingles, metal, tile, and flat roofing systems.",
        dayInLife: "Typical day involves meeting with homeowners for estimates, coordinating crew logistics, managing material deliveries, and overseeing installations. Peak season runs spring through fall with storm damage creating year-round opportunities.",
        salary: { entry: 37000, median: 51000, p75: 72000, top10: 81000 },
        growth: 6,
        timeToOwn: "1-2 months",
        education: { min: "High School / GED (49% of workers)", preferred: "On-the-job training", apprenticeship: "3 years optional (DOL registered)", ce: "Safety training (OSHA 10)" },
        licensing: { body: "Local jurisdiction", background: "Varies by city", bonding: "$10,000-$25,000", insurance: "$1M GL" },
        licenses: [
            { name: "Business License", level: "Local", required: true, cost: 150, passRate: 100, time: "1-2 weeks", renewal: "Annual / $75" },
            { name: "Contractor Registration", level: "State", required: true, cost: 200, passRate: 100, time: "2-4 weeks", renewal: "2 years / $100" }
        ],
        timeline: [
            { month: 0, title: "Start Business", desc: "Register LLC, obtain insurance" },
            { month: 1, title: "First Jobs", desc: "Begin taking residential projects" },
            { month: 6, title: "Crew Expansion", desc: "Hire first employees" },
            { month: 24, title: "Full Operation", desc: "Multiple crews, commercial work" }
        ],
        pros: ["Low barrier to entry", "High demand year-round", "Storm damage creates urgency", "Strong profit margins 35-50%", "Scalable to large operation"],
        cons: ["Weather dependent", "Physically demanding", "Liability exposure", "Seasonal fluctuations", "Competitive market"],
        physical: ["Rooftop work at heights", "Lifting 50+ lbs materials", "Extreme weather exposure", "Climbing ladders constantly"],
        certifications: [
            { name: "GAF Certified", bonus: "+10% on labor rates" },
            { name: "Owens Corning Preferred", bonus: "+15% manufacturer rebates" }
        ],
        business: { startupMin: 8000, startupTypical: 25000, year1Revenue: 180000, breakeven: "3 months" }
    },

    "storm-insurance-restoration-roofing": {
        name: "Storm & Insurance Restoration Roofing",
        tier: 0,
        category: "Construction",
        onet: "47-2181.00",
        description: "Specialize in roof repairs and replacements covered by insurance claims, working directly with adjusters and homeowners on storm damage restoration.",
        dayInLife: "Days involve canvassing storm-affected neighborhoods, meeting with homeowners, documenting damage, coordinating with insurance adjusters, and managing restoration crews.",
        salary: { entry: 40000, median: 75000, p75: 120000, top10: 200000 },
        growth: 6,
        timeToOwn: "1-2 months",
        education: { min: "High School / GED", preferred: "Sales training + roofing knowledge", apprenticeship: "None required", ce: "Xactimate certification recommended" },
        licensing: { body: "State Insurance Dept + Local", background: "Required", bonding: "$25,000", insurance: "$2M GL" },
        licenses: [
            { name: "Public Adjuster License", level: "State", required: false, cost: 500, passRate: 70, time: "2-4 weeks", renewal: "Annual / $200" },
            { name: "Contractor Registration", level: "State", required: true, cost: 200, passRate: 100, time: "2-4 weeks", renewal: "2 years / $100" }
        ],
        timeline: [
            { month: 0, title: "Start Business", desc: "Register, get insurance, learn Xactimate" },
            { month: 1, title: "Storm Chasing", desc: "Follow weather patterns to affected areas" },
            { month: 6, title: "Build Network", desc: "Develop adjuster relationships" },
            { month: 12, title: "Consistent Revenue", desc: "Recurring storm season income" }
        ],
        pros: ["Extremely high margins 50%+", "Insurance pays retail prices", "Recurring storm seasons", "Scalable with sales teams", "Year-round if you travel"],
        cons: ["Requires sales skills", "Travel often required", "Reputation-sensitive industry", "Cash flow timing with insurance", "High competition after storms"],
        physical: ["Rooftop inspections", "Ladder climbing", "Documenting damage", "Moderate physical demand"],
        certifications: [
            { name: "Xactimate Certified", bonus: "+20% claim approval rate" },
            { name: "HAAG Certified Inspector", bonus: "+25% credibility with adjusters" }
        ],
        business: { startupMin: 5000, startupTypical: 15000, year1Revenue: 350000, breakeven: "2 months" }
    },

    "gutters-leaf-guard-systems": {
        name: "Gutters & Leaf-guard Systems",
        tier: 0,
        category: "Exterior",
        onet: "47-2152.00",
        description: "Install, repair, and maintain gutter systems including seamless gutters, downspouts, and leaf protection systems for residential and commercial properties.",
        dayInLife: "Days include measuring homes, fabricating seamless gutters on-site with a gutter machine, installation, and selling add-ons like leaf guards and downspout extensions.",
        salary: { entry: 32000, median: 48000, p75: 65000, top10: 85000 },
        growth: 5,
        timeToOwn: "Immediate",
        education: { min: "High School / GED", preferred: "On-the-job training", apprenticeship: "None required", ce: "None required" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$5,000-$10,000", insurance: "$500K GL" },
        licenses: [
            { name: "Business License", level: "Local", required: true, cost: 100, passRate: 100, time: "1 week", renewal: "Annual / $50" }
        ],
        timeline: [
            { month: 0, title: "Equipment Purchase", desc: "Gutter machine, van, tools" },
            { month: 1, title: "First Customers", desc: "Begin residential installs" },
            { month: 6, title: "Leaf Guard Upsells", desc: "Add premium products" },
            { month: 12, title: "Route Established", desc: "Maintenance contracts" }
        ],
        pros: ["Low startup cost", "Repeat maintenance revenue", "Quick installations", "High-margin add-ons", "Year-round in mild climates"],
        cons: ["Ladder work daily", "Weather dependent", "Seasonal in cold climates", "Competitive pricing", "Low per-job revenue"],
        physical: ["Ladder work constantly", "Carrying materials", "Working at heights", "Bending and reaching"],
        certifications: [
            { name: "LeafGuard Dealer Certification", bonus: "+15% on premium products" }
        ],
        business: { startupMin: 15000, startupTypical: 35000, year1Revenue: 120000, breakeven: "3 months" }
    },

    "siding-installation": {
        name: "Siding Installation",
        tier: 0,
        category: "Exterior",
        onet: "47-2031.00",
        description: "Install vinyl, fiber cement, wood, and metal siding on residential and commercial buildings, including trim work and weatherproofing.",
        dayInLife: "Work involves removing old siding, installing house wrap, cutting and fitting new siding panels, and finishing with trim and caulking. Projects typically last 2-5 days.",
        salary: { entry: 34000, median: 52000, p75: 68000, top10: 88000 },
        growth: 4,
        timeToOwn: "1-2 months",
        education: { min: "High School / GED", preferred: "Carpentry experience", apprenticeship: "None required", ce: "Manufacturer training" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$10,000", insurance: "$1M GL" },
        licenses: [
            { name: "Contractor Registration", level: "State", required: true, cost: 200, passRate: 100, time: "2-4 weeks", renewal: "2 years / $100" }
        ],
        timeline: [
            { month: 0, title: "Start Business", desc: "Register, get tools and insurance" },
            { month: 2, title: "First Projects", desc: "Residential siding jobs" },
            { month: 6, title: "Crew Building", desc: "Hire helpers for larger jobs" },
            { month: 18, title: "Full Operation", desc: "Commercial and multi-family" }
        ],
        pros: ["Good profit margins 30-40%", "Year-round in most climates", "Pairs well with roofing", "Multiple material options", "Lower physical demand than roofing"],
        cons: ["Detailed finish work", "Material damage liability", "Competitive market", "Project duration varies", "Weather dependent"],
        physical: ["Scaffold/ladder work", "Cutting heavy materials", "Repetitive motions", "Working at heights"],
        certifications: [
            { name: "James Hardie Certified", bonus: "+10% on fiber cement" },
            { name: "CertainTeed Certified", bonus: "+5% manufacturer support" }
        ],
        business: { startupMin: 10000, startupTypical: 30000, year1Revenue: 150000, breakeven: "4 months" }
    },

    "stucco-eifs-work": {
        name: "Stucco & EIFS Work",
        tier: 0,
        category: "Exterior",
        onet: "47-2161.00",
        description: "Apply stucco, EIFS (Exterior Insulation and Finish Systems), and decorative exterior coatings to residential and commercial buildings.",
        dayInLife: "Work involves surface preparation, applying base coats, scratch coats, and finish textures. EIFS requires foam board installation and mesh embedding before finish.",
        salary: { entry: 36000, median: 55000, p75: 72000, top10: 95000 },
        growth: 3,
        timeToOwn: "2-3 months",
        education: { min: "High School / GED", preferred: "Trade training or apprenticing", apprenticeship: "None required (recommended)", ce: "EIFS manufacturer training" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$10,000-$25,000", insurance: "$1M GL" },
        licenses: [
            { name: "Contractor Registration", level: "State", required: true, cost: 200, passRate: 100, time: "2-4 weeks", renewal: "2 years / $100" }
        ],
        timeline: [
            { month: 0, title: "Skill Development", desc: "Practice techniques, get certified" },
            { month: 2, title: "First Projects", desc: "Residential stucco repairs" },
            { month: 8, title: "New Construction", desc: "Partner with builders" },
            { month: 18, title: "EIFS Specialty", desc: "Commercial energy projects" }
        ],
        pros: ["Specialized skill = less competition", "Good margins 35-45%", "Commercial opportunities", "Energy efficiency demand", "Artistic expression possible"],
        cons: ["Skill-intensive craft", "Weather sensitive", "Material mixing precision", "Regional market variations", "EIFS liability history"],
        physical: ["Overhead arm work", "Troweling all day", "Scaffold work", "Mixing heavy materials"],
        certifications: [
            { name: "EIFS Industry Members Assoc", bonus: "+15% on commercial bids" },
            { name: "Dryvit Certified Applicator", bonus: "+10% manufacturer warranty" }
        ],
        business: { startupMin: 8000, startupTypical: 25000, year1Revenue: 140000, breakeven: "4 months" }
    },

    "window-replacement": {
        name: "Window Replacement",
        tier: 0,
        category: "Construction",
        onet: "47-2031.00",
        description: "Remove old windows and install new replacement windows in residential and commercial buildings, including proper sealing and trim finishing.",
        dayInLife: "Days involve measuring, ordering windows, removing old units, installing new windows with proper flashing and insulation, and finishing with interior/exterior trim.",
        salary: { entry: 35000, median: 55000, p75: 75000, top10: 100000 },
        growth: 5,
        timeToOwn: "1-2 months",
        education: { min: "High School / GED", preferred: "Carpentry experience", apprenticeship: "None required", ce: "Manufacturer installation training" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$10,000-$25,000", insurance: "$1M GL" },
        licenses: [
            { name: "Contractor Registration", level: "State", required: true, cost: 200, passRate: 100, time: "2-4 weeks", renewal: "2 years / $100" },
            { name: "Home Improvement License", level: "Local", required: false, cost: 150, passRate: 100, time: "2 weeks", renewal: "Annual / $75" }
        ],
        timeline: [
            { month: 0, title: "Training & Setup", desc: "Learn installation, get certified" },
            { month: 1, title: "First Installs", desc: "Residential replacements" },
            { month: 6, title: "Dealer Status", desc: "Manufacturer partnerships" },
            { month: 12, title: "Volume Operations", desc: "Multiple daily installs" }
        ],
        pros: ["High-ticket sales $5k-$25k per job", "Energy efficiency incentives", "Year-round work", "Lead generation services available", "Recurring every 20-30 years"],
        cons: ["High product cost", "Customer financing often needed", "Installation precision required", "Warranty callbacks", "Competitive market"],
        physical: ["Lifting heavy windows", "Precision cutting", "Ladder work", "Caulking and sealing"],
        certifications: [
            { name: "Andersen Certified", bonus: "+12% on premium products" },
            { name: "Pella Certified", bonus: "+10% dealer support" }
        ],
        business: { startupMin: 10000, startupTypical: 35000, year1Revenue: 200000, breakeven: "3 months" }
    },

    "flooring-installation": {
        name: "Flooring Installation",
        tier: 0,
        category: "Interior",
        onet: "47-2042.00",
        description: "Install various flooring materials including hardwood, laminate, LVP, tile, and carpet in residential and commercial properties.",
        dayInLife: "Days involve subfloor preparation, measuring and cutting materials, installation with proper transitions, and cleanup. Jobs range from single rooms to entire buildings.",
        salary: { entry: 36000, median: 52000, p75: 68000, top10: 86000 },
        growth: 6,
        timeToOwn: "Immediate",
        education: { min: "No formal education required", preferred: "Trade training", apprenticeship: "2-4 years optional", ce: "CTI certification optional" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$5,000", insurance: "$500K GL" },
        licenses: [
            { name: "Business License", level: "Local", required: true, cost: 100, passRate: 100, time: "1 week", renewal: "Annual / $50" }
        ],
        timeline: [
            { month: 0, title: "Tool Investment", desc: "Get flooring tools and van" },
            { month: 1, title: "First Jobs", desc: "Residential installations" },
            { month: 6, title: "Commercial Work", desc: "Office and retail projects" },
            { month: 12, title: "Crew Expansion", desc: "Multiple simultaneous jobs" }
        ],
        pros: ["Low barrier to entry", "Steady indoor work", "Material variety", "Quick turnaround jobs", "Commercial contracts available"],
        cons: ["Hard on knees and back", "Material waste liability", "Price competition from big box stores", "Subfloor issues", "Dust and debris"],
        physical: ["Constant kneeling", "Lifting materials", "Cutting repetitively", "Carrying rolls of carpet"],
        certifications: [
            { name: "CFI Certified", bonus: "+8% on commercial bids" },
            { name: "Mohawk FloorTech", bonus: "+5% manufacturer support" }
        ],
        business: { startupMin: 5000, startupTypical: 20000, year1Revenue: 110000, breakeven: "2 months" }
    },

    "painting-services": {
        name: "Painting Services",
        tier: 0,
        category: "Interior",
        onet: "47-2141.00",
        description: "Provide interior and exterior painting services for residential and commercial properties including surface preparation, priming, and finish coating.",
        dayInLife: "Work involves prep (taping, covering, patching), priming, and applying 2+ coats of paint. Jobs range from single rooms to entire building exteriors.",
        salary: { entry: 37000, median: 49000, p75: 62000, top10: 77000 },
        growth: 4,
        timeToOwn: "Immediate",
        education: { min: "High School / GED", preferred: "On-the-job training", apprenticeship: "None required", ce: "EPA RRP if working on pre-1978 homes" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$5,000", insurance: "$500K GL" },
        licenses: [
            { name: "Business License", level: "Local", required: true, cost: 100, passRate: 100, time: "1 week", renewal: "Annual / $50" },
            { name: "EPA Lead-Safe Certification", level: "Federal", required: true, cost: 300, passRate: 90, time: "1 day course", renewal: "5 years / $0" }
        ],
        timeline: [
            { month: 0, title: "Equipment Purchase", desc: "Sprayers, ladders, drop cloths" },
            { month: 1, title: "First Clients", desc: "Residential interiors" },
            { month: 6, title: "Exterior Work", desc: "Add exterior capabilities" },
            { month: 12, title: "Commercial Contracts", desc: "Property managers, HOAs" }
        ],
        pros: ["Very low startup cost", "Repeat customers", "Year-round interiors", "Quick job completion", "Easy to find labor"],
        cons: ["Physical demands (ladders, bending)", "Price competition", "Fume exposure", "Weather limits exteriors", "Customer pickiness"],
        physical: ["Ladder work", "Overhead painting", "Constant bending", "Carrying equipment"],
        certifications: [
            { name: "EPA RRP Certified", bonus: "Required for pre-1978 homes" },
            { name: "PDCA Certified", bonus: "+5% on commercial bids" }
        ],
        business: { startupMin: 2000, startupTypical: 10000, year1Revenue: 90000, breakeven: "1 month" }
    },

    "landscaping-construction": {
        name: "Landscaping Construction",
        tier: 0,
        category: "Exterior",
        onet: "37-3011.00",
        description: "Design and install landscaping features including plants, trees, mulch beds, grading, and decorative elements for residential and commercial properties.",
        dayInLife: "Days involve site preparation, grading, installing plants and trees, mulching, and creating garden beds. May include basic irrigation and lighting coordination.",
        salary: { entry: 28000, median: 38500, p75: 48000, top10: 57000 },
        growth: 5,
        timeToOwn: "Immediate",
        education: { min: "No formal education required (65%)", preferred: "Horticulture knowledge", apprenticeship: "None required", ce: "Pesticide applicator license (some states)" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$5,000", insurance: "$500K GL" },
        licenses: [
            { name: "Business License", level: "Local", required: true, cost: 100, passRate: 100, time: "1 week", renewal: "Annual / $50" },
            { name: "Pesticide Applicator", level: "State", required: false, cost: 50, passRate: 85, time: "2 days", renewal: "Annual / $25" }
        ],
        timeline: [
            { month: 0, title: "Equipment Purchase", desc: "Trailer, mowers, hand tools" },
            { month: 1, title: "First Clients", desc: "Residential landscaping" },
            { month: 6, title: "Maintenance Contracts", desc: "Recurring revenue" },
            { month: 18, title: "Commercial Work", desc: "HOAs, commercial properties" }
        ],
        pros: ["Low barrier to entry", "Maintenance = recurring revenue", "Creative outlet", "Scalable with crews", "Year-round in mild climates"],
        cons: ["Seasonal in cold climates", "Physical outdoor work", "Equipment intensive", "Weather dependent", "Labor management challenges"],
        physical: ["Digging and lifting", "Operating equipment", "Bending constantly", "Outdoor heat/cold exposure"],
        certifications: [
            { name: "NALP Certified", bonus: "+8% on commercial bids" },
            { name: "ISA Arborist", bonus: "+15% on tree work" }
        ],
        business: { startupMin: 5000, startupTypical: 25000, year1Revenue: 100000, breakeven: "3 months" }
    },

    "deck-pergola-construction": {
        name: "Deck & Pergola Construction",
        tier: 0,
        category: "Exterior",
        onet: "47-2031.00",
        description: "Design and build outdoor living structures including wood and composite decks, pergolas, gazebos, and covered patios.",
        dayInLife: "Work involves site layout, post hole digging, framing, decking installation, and railing systems. Projects typically last 3-7 days for residential.",
        salary: { entry: 39000, median: 59000, p75: 78000, top10: 98000 },
        growth: 4,
        timeToOwn: "1-2 months",
        education: { min: "High School / GED", preferred: "Carpentry experience", apprenticeship: "3-4 years optional", ce: "None required" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$10,000", insurance: "$1M GL" },
        licenses: [
            { name: "Contractor Registration", level: "State", required: true, cost: 200, passRate: 100, time: "2-4 weeks", renewal: "2 years / $100" }
        ],
        timeline: [
            { month: 0, title: "Tool Investment", desc: "Carpentry equipment, trailer" },
            { month: 1, title: "First Decks", desc: "Residential projects" },
            { month: 6, title: "Pergola Upsells", desc: "Higher-margin add-ons" },
            { month: 12, title: "Commercial Work", desc: "Restaurants, apartment complexes" }
        ],
        pros: ["High ticket prices $10k-$50k", "Outdoor living trend", "Composite materials = repeat business", "Creative design element", "Good profit margins 35-45%"],
        cons: ["Seasonal in cold climates", "Heavy material handling", "Code compliance varies", "Competition from large franchises", "Weather dependent"],
        physical: ["Heavy lifting", "Post hole digging", "Repetitive cutting", "Working outdoors"],
        certifications: [
            { name: "Trex Pro", bonus: "+10% on composite" },
            { name: "TimberTech Certified", bonus: "+8% manufacturer support" }
        ],
        business: { startupMin: 10000, startupTypical: 35000, year1Revenue: 170000, breakeven: "3 months" }
    },

    "concrete-flatwork": {
        name: "Concrete Flatwork",
        tier: 0,
        category: "Construction",
        onet: "47-2051.00",
        description: "Pour and finish concrete driveways, patios, sidewalks, garage floors, and other horizontal surfaces for residential and commercial projects.",
        dayInLife: "Work involves forming, pouring, screeding, floating, and finishing concrete. Early mornings are common due to curing requirements. Jobs are physically intense all day.",
        salary: { entry: 39000, median: 55000, p75: 72000, top10: 90000 },
        growth: 2,
        timeToOwn: "2-3 months",
        education: { min: "High School / GED", preferred: "Mason experience", apprenticeship: "OJT or formal apprenticeship", ce: "ACI certification optional" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$10,000-$25,000", insurance: "$1M GL" },
        licenses: [
            { name: "Contractor Registration", level: "State", required: true, cost: 200, passRate: 100, time: "2-4 weeks", renewal: "2 years / $100" }
        ],
        timeline: [
            { month: 0, title: "Skill Development", desc: "Practice finishing techniques" },
            { month: 2, title: "First Slabs", desc: "Residential driveways" },
            { month: 8, title: "Decorative Concrete", desc: "Stamped, colored finishes" },
            { month: 18, title: "Commercial Work", desc: "Parking lots, foundations" }
        ],
        pros: ["High demand always", "Good margins 30-40%", "Decorative = premium pricing", "Skilled labor scarce", "Multiple job types"],
        cons: ["Very physically demanding", "Time-sensitive work", "Weather critical", "Early morning starts", "Back-breaking labor"],
        physical: ["Heavy lifting", "Kneeling/bending all day", "Fast-paced finishing", "Outdoor weather exposure"],
        certifications: [
            { name: "ACI Flatwork Finisher", bonus: "+10% on commercial" },
            { name: "Bomanite Certified", bonus: "+20% decorative premium" }
        ],
        business: { startupMin: 15000, startupTypical: 45000, year1Revenue: 160000, breakeven: "4 months" }
    },

    "janitorial-services": {
        name: "Janitorial Services",
        tier: 0,
        category: "Commercial",
        onet: "37-2011.00",
        description: "Provide commercial cleaning services for offices, retail spaces, medical facilities, and other commercial properties on a recurring contract basis.",
        dayInLife: "Evening/night work is common. Tasks include vacuuming, mopping, trash removal, restroom cleaning, and surface sanitizing. Route-based work visiting multiple locations.",
        salary: { entry: 28000, median: 36000, p75: 45000, top10: 49000 },
        growth: 2,
        timeToOwn: "Immediate",
        education: { min: "No formal education required", preferred: "HS diploma preferred", apprenticeship: "Short-term OJT", ce: "ISSA/IEHA certifications optional" },
        licensing: { body: "Local jurisdiction", background: "Often required", bonding: "$5,000-$10,000", insurance: "$1M GL" },
        licenses: [
            { name: "Business License", level: "Local", required: true, cost: 100, passRate: 100, time: "1 week", renewal: "Annual / $50" }
        ],
        timeline: [
            { month: 0, title: "First Contract", desc: "Land one commercial client" },
            { month: 3, title: "Route Building", desc: "Add multiple locations" },
            { month: 6, title: "Employee Hire", desc: "Scale with workers" },
            { month: 12, title: "Manager Role", desc: "Oversee crews, bid contracts" }
        ],
        pros: ["Very low startup cost", "Recurring monthly contracts", "Night work = day freedom", "Scalable with employees", "Recession resistant"],
        cons: ["Night/weekend hours", "High employee turnover", "Thin margins", "Physical work", "Client expectations vary"],
        physical: ["Constant walking", "Bending and reaching", "Lifting trash bags", "Mopping/vacuuming"],
        certifications: [
            { name: "ISSA Certified", bonus: "+5% on bids" },
            { name: "Green Cleaning Certified", bonus: "+10% for eco-clients" }
        ],
        business: { startupMin: 1000, startupTypical: 5000, year1Revenue: 80000, breakeven: "1 month" }
    }
};

// Generate remaining T0 careers with tier-appropriate defaults
const T0_DEFAULTS = {
    tier: 0,
    growth: 4,
    timeToOwn: "Immediate to 2 months",
    education: { min: "High School / GED", preferred: "On-the-job training", apprenticeship: "None required", ce: "Varies" },
    licensing: { body: "Local jurisdiction", background: "May be required", bonding: "$5,000-$25,000", insurance: "$500K-$1M GL" },
    licenses: [
        { name: "Business License", level: "Local", required: true, cost: 100, passRate: 100, time: "1-2 weeks", renewal: "Annual / $50-$100" }
    ],
    pros: ["Low barrier to entry", "Quick startup", "Flexible schedule", "Scalable business", "Direct customer relationships"],
    cons: ["Weather dependent", "Physical demands", "Competitive market", "Self-employment taxes", "Equipment investment needed"],
    physical: ["Lifting materials", "Working outdoors", "Repetitive motions", "Standing/walking all day"],
    timeline: [
        { month: 0, title: "Start Business", desc: "Register and get equipped" },
        { month: 1, title: "First Customers", desc: "Begin taking jobs" },
        { month: 6, title: "Growth", desc: "Expand operations" },
        { month: 12, title: "Established", desc: "Consistent revenue" }
    ],
    business: { startupMin: 5000, startupTypical: 20000, year1Revenue: 100000, breakeven: "2-4 months" }
};

// T1 career defaults
const T1_DEFAULTS = {
    tier: 1,
    growth: 6,
    timeToOwn: "1-4 months (after certification)",
    education: { min: "High School / GED", preferred: "Trade certification", apprenticeship: "None required", ce: "Certification maintenance" },
    licensing: { body: "State or Industry Body", background: "Usually required", bonding: "$10,000-$25,000", insurance: "$1M GL" },
    licenses: [
        { name: "Trade-specific Certification", level: "State/Industry", required: true, cost: 300, passRate: 80, time: "1-3 months", renewal: "2-3 years / $100-$200" }
    ],
    pros: ["Certification creates barrier", "Higher rates than unlicensed", "Specialized expertise", "Recurring service revenue", "Professional credibility"],
    cons: ["Certification cost/time", "Continuing education required", "Liability for certified work", "Competition from larger companies", "Technology changes"],
    physical: ["Varies by trade", "Technical precision required", "Customer interaction", "Tool operation"],
    timeline: [
        { month: 0, title: "Certification Training", desc: "Study and prepare for exam" },
        { month: 2, title: "Pass Certification", desc: "Obtain required credentials" },
        { month: 3, title: "Start Business", desc: "Register and begin work" },
        { month: 12, title: "Established", desc: "Build reputation and clientele" }
    ],
    business: { startupMin: 10000, startupTypical: 35000, year1Revenue: 120000, breakeven: "3-5 months" }
};

// T2 career defaults
const T2_DEFAULTS = {
    tier: 2,
    growth: 5,
    timeToOwn: "4 years (journeyman path)",
    education: { min: "High School / GED", preferred: "Trade school + Apprenticeship", apprenticeship: "4 years / 8000 hours typical", ce: "16+ hours annually" },
    licensing: { body: "State Licensing Board", background: "Required", bonding: "$25,000+", insurance: "$1M GL" },
    licenses: [
        { name: "Journeyman License", level: "State", required: true, cost: 150, passRate: 72, time: "4 years apprenticeship", renewal: "2-3 years / $75-$150" }
    ],
    pros: ["High wages as employee", "Clear career progression", "Union options", "Essential skills always needed", "Path to master/ownership"],
    cons: ["4-year commitment", "Exam difficulty", "Physical demands", "Ongoing education required", "Market saturation in some areas"],
    physical: ["Heavy lifting", "Confined spaces possible", "Precision hand work", "Working at heights"],
    timeline: [
        { month: 0, title: "Begin Apprenticeship", desc: "Enter trade program" },
        { month: 24, title: "Midpoint", desc: "Skill development continues" },
        { month: 48, title: "Journeyman Exam", desc: "Pass licensing exam" },
        { month: 72, title: "Master/Owner Eligible", desc: "Can qualify own business" }
    ],
    salary: { entry: 38000, median: 58000, p75: 75000, top10: 95000 },
    business: { startupMin: 20000, startupTypical: 50000, year1Revenue: 150000, breakeven: "6-12 months" }
};

// T3 career defaults
const T3_DEFAULTS = {
    tier: 3,
    growth: 5,
    timeToOwn: "6-8 years (master path)",
    education: { min: "Journeyman License", preferred: "Master License", apprenticeship: "Journeyman + 2-4 years experience", ce: "24+ hours annually" },
    licensing: { body: "State Licensing Board", background: "Required", bonding: "$50,000+", insurance: "$2M GL" },
    licenses: [
        { name: "Master License", level: "State", required: true, cost: 300, passRate: 65, time: "2-4 years post-journeyman", renewal: "2-3 years / $150-$250" }
    ],
    pros: ["Qualify own business", "Pull permits independently", "Highest wages in trade", "Supervise other tradespeople", "Business ownership ready"],
    cons: ["6-8 year journey", "Difficult exam", "Ongoing education", "Full liability", "Business management skills needed"],
    physical: ["Less physical (more supervisory)", "Site inspections", "Code compliance", "Customer relations"],
    timeline: [
        { month: 0, title: "Journeyman Complete", desc: "Already have journeyman license" },
        { month: 24, title: "Experience Accumulation", desc: "Work toward master eligibility" },
        { month: 48, title: "Master Exam", desc: "Pass master license exam" },
        { month: 60, title: "Business Launch", desc: "Open qualifying business" }
    ],
    salary: { entry: 55000, median: 75000, p75: 95000, top10: 120000 },
    business: { startupMin: 30000, startupTypical: 75000, year1Revenue: 250000, breakeven: "6-12 months" }
};

// T4 career defaults
const T4_DEFAULTS = {
    tier: 4,
    growth: 4,
    timeToOwn: "8+ years (supervisor path)",
    education: { min: "Journeyman + Specialized Training", preferred: "Supervisor License", apprenticeship: "Journeyman + specialized experience", ce: "24+ hours annually" },
    licensing: { body: "State Licensing Board", background: "Required", bonding: "$50,000+", insurance: "$2M GL" },
    licenses: [
        { name: "Supervisor/Qualifier License", level: "State", required: true, cost: 400, passRate: 60, time: "4-6 years post-journeyman", renewal: "2-3 years / $200-$300" }
    ],
    pros: ["Highest certification level", "Can supervise major projects", "Commercial contract eligibility", "Top industry wages", "Qualifier/owner role"],
    cons: ["8+ year journey", "Very specialized", "Ongoing intensive education", "Full scope liability", "Limited job mobility"],
    physical: ["Supervisory role", "Complex system troubleshooting", "Code and safety compliance", "Project management"],
    timeline: [
        { month: 0, title: "Journeyman Complete", desc: "Already have journeyman license" },
        { month: 48, title: "Supervisor Training", desc: "Specialized coursework" },
        { month: 72, title: "Supervisor Exam", desc: "Pass supervisor exam" },
        { month: 96, title: "Full Qualifier", desc: "Can qualify major projects" }
    ],
    salary: { entry: 65000, median: 85000, p75: 105000, top10: 130000 },
    business: { startupMin: 50000, startupTypical: 100000, year1Revenue: 400000, breakeven: "12-18 months" }
};

// T5 career defaults
const T5_DEFAULTS = {
    tier: 5,
    growth: 5,
    timeToOwn: "Immediate (via licensed subs)",
    education: { min: "Business knowledge", preferred: "Industry experience", apprenticeship: "None for ownership", ce: "Business management" },
    licensing: { body: "Local + GC license often", background: "Required", bonding: "$25,000-$100,000", insurance: "$2M+ GL" },
    licenses: [
        { name: "General Contractor License", level: "State", required: false, cost: 500, passRate: 70, time: "Varies", renewal: "2 years / $200" }
    ],
    pros: ["Immediate business ownership", "Use licensed subcontractors", "Sales/management focus", "Scalable model", "No trade time required"],
    cons: ["Dependent on good subs", "Lower margins than self-perform", "Sub availability issues", "Quality control challenges", "Still need industry knowledge"],
    physical: ["Minimal physical work", "Sales and management focus", "Site supervision", "Customer relations"],
    timeline: [
        { month: 0, title: "Business Setup", desc: "Form company, get insured" },
        { month: 1, title: "Sub Relationships", desc: "Build licensed contractor network" },
        { month: 3, title: "First Projects", desc: "Manage projects with subs" },
        { month: 12, title: "Established", desc: "Reliable sub network, consistent work" }
    ],
    salary: { entry: 50000, median: 80000, p75: 120000, top10: 200000 },
    business: { startupMin: 15000, startupTypical: 50000, year1Revenue: 300000, breakeven: "3-6 months" }
};

// Function to get career data with fallbacks
function getCareerData(careerId) {
    // First check if we have specific data
    if (CAREERS_DATA[careerId]) {
        return CAREERS_DATA[careerId];
    }

    // Otherwise, look up in allCareers and use tier defaults
    const career = window.allCareers?.find(c => {
        const slug = c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return slug === careerId || careerId.includes(slug.substring(0, 10));
    });

    if (!career) return null;

    const defaults = [T0_DEFAULTS, T1_DEFAULTS, T2_DEFAULTS, T3_DEFAULTS, T4_DEFAULTS, T5_DEFAULTS][career.tier] || T0_DEFAULTS;

    // Generate tier-appropriate salary based on tier
    const salaryMultiplier = 1 + (career.tier * 0.15);
    const baseSalary = 40000;

    return {
        name: career.name,
        tier: career.tier,
        category: career.cat,
        onet: "See O*NET database",
        description: `Professional services in ${career.name.toLowerCase()} for residential and commercial clients. ${career.tier <= 1 ? 'Low barrier to entry allows quick business startup.' : career.tier <= 3 ? 'Requires trade licensing through apprenticeship pathway.' : 'Advanced certification or management model.'}`,
        dayInLife: `Work involves specialized tasks related to ${career.name.toLowerCase()}. Daily activities vary based on project requirements and client needs.`,
        salary: {
            entry: Math.round(baseSalary * salaryMultiplier * 0.7),
            median: Math.round(baseSalary * salaryMultiplier),
            p75: Math.round(baseSalary * salaryMultiplier * 1.3),
            top10: Math.round(baseSalary * salaryMultiplier * 1.7)
        },
        ...defaults,
        business: {
            startupMin: defaults.business.startupMin,
            startupTypical: defaults.business.startupTypical,
            year1Revenue: defaults.business.year1Revenue,
            breakeven: defaults.business.breakeven
        }
    };
}

// Export for use
window.CAREERS_DATA = CAREERS_DATA;
window.getCareerData = getCareerData;
