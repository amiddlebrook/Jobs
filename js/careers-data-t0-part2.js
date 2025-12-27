// TIER 0 CAREERS - Part 2 (Interior Trades)
// Full detailed profiles

const T0_CAREERS_PART2 = {
    "kitchen-remodeling-sales": {
        name: "Kitchen Remodeling Sales",
        tier: 0, category: "Interior", onet: "41-9022.00",
        description: "Design, sell, and coordinate kitchen renovations including cabinets, countertops, appliances, and fixtures using subcontractors for installation.",
        dayInLife: "Work involves in-home consultations, design presentations, material selection, project coordination, and managing subcontractor schedules.",
        salary: { entry: 40000, median: 65000, p75: 95000, top10: 150000 },
        growth: 5, timeToOwn: "Immediate",
        education: { min: "High School / GED", preferred: "Design/sales experience", apprenticeship: "None required", ce: "Design software training" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$25,000", insurance: "$1M GL" },
        pros: ["High commission potential", "No trade skills needed", "Premium market", "Creative work", "Scalable with subs"],
        cons: ["Long sales cycles", "High customer expectations", "Sub coordination stress", "Warranty management", "Competition from big box"],
        physical: ["Minimal - sales/design focus", "Showroom presentations", "In-home measurements", "Site visits"],
        certifications: [{ name: "NKBA Certified", bonus: "+15% credibility" }, { name: "2020 Design Certified", bonus: "+10% efficiency" }],
        business: { startupMin: 5000, startupTypical: 20000, year1Revenue: 300000, breakeven: "2 months" }
    },

    "bathroom-remodeling-sales": {
        name: "Bathroom Remodeling Sales",
        tier: 0, category: "Interior", onet: "41-9022.00",
        description: "Design, sell, and coordinate bathroom renovations including fixtures, tile, vanities, and accessibility modifications using subcontractors.",
        dayInLife: "Work involves consultations, measuring spaces, presenting designs, selecting materials, and coordinating plumbing, tile, and fixture subcontractors.",
        salary: { entry: 38000, median: 60000, p75: 85000, top10: 130000 },
        growth: 6, timeToOwn: "Immediate",
        education: { min: "High School / GED", preferred: "Design/sales experience", apprenticeship: "None required", ce: "Accessibility training" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$20,000", insurance: "$1M GL" },
        pros: ["Faster turnaround than kitchens", "Aging-in-place demand", "Good margins", "Repeat customers", "Add-on sales"],
        cons: ["Plumbing coordination", "Tile installation quality", "Mold/moisture issues", "High expectations", "Subcontractor reliability"],
        physical: ["Minimal physical work", "Measurements", "Site supervision", "Customer meetings"],
        certifications: [{ name: "CAPS Certified", bonus: "+20% on aging-in-place" }],
        business: { startupMin: 5000, startupTypical: 18000, year1Revenue: 250000, breakeven: "2 months" }
    },

    "tile-stone-installation": {
        name: "Tile & Stone Installation",
        tier: 0, category: "Interior", onet: "47-2044.00",
        description: "Install ceramic, porcelain, natural stone, and mosaic tile on floors, walls, backsplashes, and showers in residential and commercial settings.",
        dayInLife: "Work involves substrate preparation, layout planning, cutting tiles, setting with thinset, grouting, and sealing. Projects range from small backsplashes to entire floors.",
        salary: { entry: 32000, median: 50000, p75: 68000, top10: 90000 },
        growth: 5, timeToOwn: "1-2 months",
        education: { min: "High School / GED", preferred: "Apprenticing with tile setter", apprenticeship: "None required", ce: "CTEF courses recommended" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$5,000", insurance: "$500K GL" },
        pros: ["Artistic expression", "High-end market growth", "Specialized skill premium", "Steady demand", "Indoor work"],
        cons: ["Hard on knees and back", "Precise work required", "Material waste", "Callbacks for cracks", "Dust and mess"],
        physical: ["Constant kneeling", "Lifting stone slabs", "Cutting with wet saws", "Repetitive motions"],
        certifications: [{ name: "CTEF ACT Certified", bonus: "+15% on commercial bids" }],
        business: { startupMin: 8000, startupTypical: 22000, year1Revenue: 120000, breakeven: "3 months" }
    },

    "countertop-fabrication-install": {
        name: "Countertop Fabrication & Install",
        tier: 0, category: "Interior", onet: "47-2161.00",
        description: "Fabricate and install granite, quartz, marble, and solid surface countertops for residential and commercial kitchens and bathrooms.",
        dayInLife: "Work involves template creation, slab fabrication with CNC/manual cutting, edge profiling, and on-site installation with seaming and polishing.",
        salary: { entry: 35000, median: 52000, p75: 72000, top10: 95000 },
        growth: 5, timeToOwn: "3-6 months",
        education: { min: "High School / GED", preferred: "Fabrication experience", apprenticeship: "None required", ce: "CNC and CAM training" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$10,000", insurance: "$1M GL" },
        pros: ["High-ticket sales $3k-$15k", "Premium material markup", "CNC automation potential", "Builder relationships", "Steady demand"],
        cons: ["Heavy slab handling", "Equipment investment", "Silica dust hazards", "Breakage liability", "Shop space needed"],
        physical: ["Lifting heavy slabs", "Operating machinery", "Precision cutting", "Installation maneuvering"],
        certifications: [{ name: "Cambria Certified", bonus: "+12% on premium quartz" }, { name: "ISFA Member", bonus: "+8% industry credibility" }],
        business: { startupMin: 30000, startupTypical: 100000, year1Revenue: 350000, breakeven: "6 months" }
    },

    "cabinet-refacing-cabinetry": {
        name: "Cabinet Refacing & Cabinetry",
        tier: 0, category: "Interior", onet: "51-7011.00",
        description: "Reface existing cabinets with new doors, drawers, and veneers, or install new cabinet systems in kitchens, bathrooms, and storage areas.",
        dayInLife: "Refacing involves measuring, removing doors, applying veneers, installing new doors and hardware. Custom cabinetry requires shop fabrication and field installation.",
        salary: { entry: 34000, median: 50000, p75: 68000, top10: 90000 },
        growth: 4, timeToOwn: "1-2 months",
        education: { min: "High School / GED", preferred: "Woodworking experience", apprenticeship: "None required", ce: "Product training" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$10,000", insurance: "$500K GL" },
        pros: ["Faster than full remodel", "Lower cost sells well", "Eco-friendly appeal", "Good margins 40%+", "Repeat from realtors"],
        cons: ["Precise measurements critical", "Color matching challenges", "Competition from big box", "Physical installation", "Material lead times"],
        physical: ["Working at heights", "Precision assembly", "Carrying cabinet boxes", "Power tool operation"],
        certifications: [{ name: "Kitchen Solvers Franchise", bonus: "Established system" }],
        business: { startupMin: 10000, startupTypical: 35000, year1Revenue: 150000, breakeven: "4 months" }
    },

    "drywall-texture-services": {
        name: "Drywall & Texture Services",
        tier: 0, category: "Interior", onet: "47-2081.00",
        description: "Install, finish, and texture drywall for new construction, remodels, and repairs including hanging, taping, mudding, and various texture applications.",
        dayInLife: "Work involves hanging drywall sheets, taping joints, applying multiple mud coats, sanding, and applying texture patterns like knockdown, orange peel, or smooth.",
        salary: { entry: 32000, median: 48000, p75: 62000, top10: 82000 },
        growth: 4, timeToOwn: "Immediate",
        education: { min: "None", preferred: "Experience hanging/finishing", apprenticeship: "None required", ce: "None required" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$5,000", insurance: "$500K GL" },
        pros: ["Constant construction demand", "Quick skill development", "Low startup cost", "Builder relationships", "Scalable with crews"],
        cons: ["Very dusty work", "Physical demands", "Competitive pricing", "Repetitive work", "Low per-square-foot rates"],
        physical: ["Lifting drywall sheets", "Overhead work", "Sanding all day", "Stilts for ceilings"],
        certifications: [{ name: "OSHA 10", bonus: "Required for many job sites" }],
        business: { startupMin: 5000, startupTypical: 15000, year1Revenue: 100000, breakeven: "2 months" }
    },

    "finish-carpentry-built-ins": {
        name: "Finish Carpentry & Built-ins",
        tier: 0, category: "Interior", onet: "47-2031.00",
        description: "Install trim, moldings, built-in shelving, entertainment centers, and custom millwork for high-end residential and commercial interiors.",
        dayInLife: "Work involves precise measurements, cutting complex angles, installing crown molding, baseboards, wainscoting, and custom storage solutions.",
        salary: { entry: 36000, median: 55000, p75: 75000, top10: 100000 },
        growth: 4, timeToOwn: "1-2 months",
        education: { min: "High School / GED", preferred: "Carpentry experience", apprenticeship: "None required", ce: "None required" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$10,000", insurance: "$500K GL" },
        pros: ["Premium pricing for skill", "Less competition than framing", "Indoor work", "Artistic satisfaction", "High-end clients"],
        cons: ["Perfection expected", "Complex measuring", "Material waste costly", "Slow detailed work", "Tool investment"],
        physical: ["Precision cutting", "Working on ladders", "Kneeling for baseboards", "Lifting materials"],
        certifications: [{ name: "AWI Certified", bonus: "+15% on commercial" }],
        business: { startupMin: 10000, startupTypical: 28000, year1Revenue: 140000, breakeven: "3 months" }
    },

    "closet-systems": {
        name: "Closet Systems",
        tier: 0, category: "Interior", onet: "47-2031.00",
        description: "Design and install custom closet organization systems including shelving, rods, drawers, and accessories for residential clients.",
        dayInLife: "Work involves in-home consultations, closet measurement, design presentation, system fabrication or ordering, and installation typically in one day.",
        salary: { entry: 32000, median: 48000, p75: 65000, top10: 85000 },
        growth: 5, timeToOwn: "Immediate",
        education: { min: "High School / GED", preferred: "Sales/installation experience", apprenticeship: "None required", ce: "Design software" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$5,000", insurance: "$500K GL" },
        pros: ["Quick installations", "Growing organization trend", "Good margins 45%+", "Upsell accessories", "Referral-driven business"],
        cons: ["Competitive market", "Design time unpaid", "Material lead times", "Installation precision", "Franchise competition"],
        physical: ["Moderate lifting", "Drilling and mounting", "Ladder work", "Customer interaction"],
        certifications: [{ name: "ClosetMaid Pro", bonus: "+10% dealer pricing" }, { name: "California Closets Franchise", bonus: "Established brand" }],
        business: { startupMin: 5000, startupTypical: 20000, year1Revenue: 110000, breakeven: "2 months" }
    },

    "window-coverings": {
        name: "Window Coverings",
        tier: 0, category: "Interior", onet: "49-9099.00",
        description: "Measure, sell, and install blinds, shades, shutters, and draperies for residential and commercial properties.",
        dayInLife: "Work involves in-home consultations, precise window measurements, product selection, ordering, and installation. Mix of sales and installation.",
        salary: { entry: 30000, median: 48000, p75: 68000, top10: 95000 },
        growth: 4, timeToOwn: "Immediate",
        education: { min: "High School / GED", preferred: "Sales experience", apprenticeship: "None required", ce: "Product training" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$5,000", insurance: "$500K GL" },
        pros: ["Low startup cost", "High markup potential", "Quick installations", "Design integration", "Referral business"],
        cons: ["Measurement errors costly", "Product lead times", "Competitive market", "Commission-based income", "Big box competition"],
        physical: ["Ladder work", "Light drilling", "Carrying samples", "Customer-facing"],
        certifications: [{ name: "Hunter Douglas Dealer", bonus: "+20% premium brand margin" }, { name: "Budget Blinds Franchise", bonus: "Established system" }],
        business: { startupMin: 3000, startupTypical: 12000, year1Revenue: 100000, breakeven: "2 months" }
    },

    "home-organization-systems": {
        name: "Home Organization Systems",
        tier: 0, category: "Interior", onet: "47-2031.00",
        description: "Design and install custom organization solutions for garages, pantries, mudrooms, and home offices including shelving, cabinets, and storage accessories.",
        dayInLife: "Work involves consultations, space assessment, design presentations, system ordering or fabrication, and installation across various room types.",
        salary: { entry: 32000, median: 50000, p75: 70000, top10: 95000 },
        growth: 6, timeToOwn: "Immediate",
        education: { min: "High School / GED", preferred: "Sales/installation experience", apprenticeship: "None required", ce: "Design training" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$5,000", insurance: "$500K GL" },
        pros: ["Growing trend", "Multiple room types", "Good margins", "Design freedom", "Referral-friendly"],
        cons: ["Competitive market", "Custom design time", "Installation precision", "Client expectations", "Material costs"],
        physical: ["Moderate lifting", "Drilling and mounting", "Ladder work", "Assembly work"],
        certifications: [{ name: "NAPO Member", bonus: "+10% professional credibility" }],
        business: { startupMin: 5000, startupTypical: 18000, year1Revenue: 120000, breakeven: "2 months" }
    },

    "epoxy-garage-floor-coatings": {
        name: "Epoxy Garage Floor Coatings",
        tier: 0, category: "Interior", onet: "47-2141.00",
        description: "Apply professional epoxy, polyurea, and polyaspartic floor coatings to residential garage floors and commercial/industrial surfaces.",
        dayInLife: "Work involves floor grinding/prep, crack repair, primer application, epoxy/polyurea coating, and decorative flake or metallic finishing in 1-2 days.",
        salary: { entry: 35000, median: 55000, p75: 75000, top10: 100000 },
        growth: 7, timeToOwn: "1-2 months",
        education: { min: "High School / GED", preferred: "Coating experience", apprenticeship: "None required", ce: "Product training" },
        licensing: { body: "Local jurisdiction", background: "Varies", bonding: "$10,000", insurance: "$500K GL" },
        pros: ["High-ticket $2k-$8k per garage", "Quick turnaround 1-2 days", "Dramatic transformation", "Commercial expansion", "Growing demand"],
        cons: ["Weather/temperature sensitive", "Floor prep intensive", "Product failures possible", "Equipment investment", "Competition increasing"],
        physical: ["Floor grinding", "Kneeling for application", "Chemical exposure", "Time-sensitive work"],
        certifications: [{ name: "Penntek Certified", bonus: "+12% premium pricing" }, { name: "GarageFloorCoating.com", bonus: "+15% training system" }],
        business: { startupMin: 12000, startupTypical: 35000, year1Revenue: 180000, breakeven: "3 months" }
    }
};

window.T0_CAREERS_PART2 = T0_CAREERS_PART2;
Object.assign(window.CAREERS_DATA || {}, T0_CAREERS_PART2);
