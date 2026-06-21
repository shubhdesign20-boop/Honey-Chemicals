import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ChevronLeft, ChevronRight, Package, Table as TableIcon, Lightbulb, CheckCircle2, Diamond } from "lucide-react";

const PRODUCT_DATA: Record<string, any> = {
  calcite: {
    name: "Calcite Powder",
    id: "calcite",
    isPremium: true,
    description: "Calcite Powder is a naturally occurring form of calcium carbonate (CaCO3), extracted from the processing of premium calcite rocks. This fine, ultra-white powder is highly valued for its exceptional purity, brightness, and stable chemical properties, making it an indispensable material for high-end industrial manufacturing.",
    images: ["https://lh3.googleusercontent.com/d/1Dj9UxgEnULT--caQA85kMOexZqzHOS8C"],
    comparisonTable: {
      title: "Technical Data Sheet for Calcite Powder (Uncoated Series)",
      headers: ["Uncoated Calcite Powder", "HC-100", "HC-200", "HC-300", "HC-400", "HC-500"],
      sideLabel: "Chemical Analysis",
      rows: [
        { param: "CaCO3(%)", values: ["94 ± 1%", "95 ± 1%", "95 ± 1%", "96 ± 1%", "97 ± 1%"] },
        { param: "CaO(%)", values: ["52 ± 0.5%", "53 ± 0.5%", "53 ± 0.5%", "54 ± 0.5%", "55 ± 0.5%"] },
        { param: "MgCo3(%)", values: ["<1.50%", "<1.00%", "<1.00%", "<1.00%", "<1.00%"] },
        { param: "MgO(%)", values: ["<1.10%", "<0.80%", "<0.80%", "<0.80%", "<0.80%"] },
        { param: "SiO2(%)", values: ["<3.00%", "<2.50%", "<2.50%", "<2.50%", "<2.50%"] },
        { param: "Fe2O3(%)", values: ["<0.07%", "<0.07%", "<0.07%", "<0.07%", "<0.07%"] },
        { param: "Al2O3(%)", values: ["<0.08%", "<0.08%", "<0.08%", "<0.08%", "<0.08%"] },
        { param: "Hcl Insoluble", values: ["<0.05%", "<0.05%", "<0.05%", "<0.05%", "<0.05%"] },
        { param: "Whiteness", values: ["94", "95", "95", "96", "96"] },
        { param: "Brightness", values: ["96", "96.5", "96.5", "96.5", "96.5"] },
        { param: "pH value", values: ["8.5", "8.5", "8.5", "8.5", "8.5"] },
        { param: "Passing 200 Mesh", values: ["70±1%", "90±1%", "", "", ""] },
        { param: "Passing 325 Mesh", values: ["", "84±1%", "97±1%", "99±1%", "100±1%"] },
      ]
    },
    usesDescription: "Calcite Powder serves as a high-performance filler and additive across multiple industries, providing cost-effective structural reinforcement and visual enhancements:",
    features: [
      "Superior Brightness and Purity: Enhances the opacity and visual quality of end products, reducing the need for expensive pigments.",
      "Controlled Particle Size: Available in various mesh grades (300 to 1250 mesh), tailored for specific industrial formulations.",
      "Excellent Dispersibility: Features advanced flow properties that ensure a smooth, uniform blend with polymers and resins.",
      "Low Oil Absorption: Maximizes efficiency in paints, rubber, and polymer applications by maintaining optimal viscosity.",
      "Chemical Stability: Non-reactive and insoluble in water, making it safe for diverse industrial and agricultural environments."
    ],
    uses: [
      { area: "Plastics and Polymers", detail: "Acts as a primary filler to improve tensile strength, surface finish, and dimensional stability while significantly reducing manufacturing costs." },
      { area: "Paints & Coatings", detail: "Functions as a high-quality extender pigment, improving hiding power, weather resistance, and gloss retention." },
      { area: "Rubber Industry", detail: "Provides volume reinforcement and improves the physical processing properties of technical rubber products." },
      { area: "Paper Industry", detail: "Used as a coating pigment to improve paper whiteness, brightness, and ink receptivity for high-quality printing." },
      { area: "Agriculture", detail: "Acts as a natural soil conditioner to neutralize acidity and provide essential calcium for plant growth." }
    ],
    whyChoose: [
      { title: "Unmatched Mineral Purity", detail: "We process only the highest-grade raw materials to ensure consistent chemical composition across all batches." },
      { title: "Advanced Grinding Technology", detail: "Our state-of-the-art infrastructure produces ultrafine powders with precise top-cut control." },
      { title: "Global Export Standards", detail: "All products undergo rigorous lab testing to meet international quality and safety certifications." },
      { title: "Customized Formulations", detail: "We offer tailored mesh sizes and surface treatments to meet the unique technical demands of your production line." }
    ],
    packing: "Available in 25kgs, 50kgs, and 1 Ton Jumbo Bags"
  },
  dolomite: {
    name: "WHITE Dolomite Powder",
    id: "dolomite",
    description: "Honey Chemicals provides premium WHITE Dolomite Powder sourced from high-purity crystalline deposits. Highly valued for its optimal magnesium and calcium carbonate content, our dolomite is a fundamental raw material for industries demanding superior thermal stability and chemical resistance. We process this mineral with precision to ensure it meets the rigorous demands of global manufacturing standards.",
    images: ["https://lh3.googleusercontent.com/d/1i9kT8A62hrPNmS2Nf6UBFZTwBCugNQyN"],
    featuresTitle: "Key Technical Features of Our WHITE Dolomite Powder",
    featuresDescription: "Our WHITE Dolomite Powder is characterized by its high optical purity and balanced chemical composition, making it ideal for specialized industrial applications:",
    features: [
      "Balanced Magnesium Content: Naturally contains 18-22% MgO, providing superior thermal and chemical stability during high-temperature processing.",
      "High Optical Purity: Offers consistent whiteness and brightness, tailored for high-end ceramics and architectural paint extenders.",
      "Excellent Weathering Resistance: Its robust physical properties make it ideal for outdoor construction and heavy-duty coating applications.",
      "Low Impurity Profile: Minimal iron and silica content ensures maximum mineral purity, preventing product discoloration or equipment wear.",
      "Diverse Mesh Availability: Available in various fine mesh grades to suit specific formulation requirements in rubber and plastics."
    ],
    whyChooseTitle: "Why Partner with Honey Chemicals for WHITE Dolomite Powder?",
    whyChooseDescription: "As a leading supplier in India, Honey Chemicals ensures that every batch of WHITE Dolomite Powder delivers the reliability and technical excellence your production requires:",
    whyChoose: [
      { title: "Magnesium-Rich Sourcing", detail: "We extract our mineral from select quarries known for the highest MgO consistency and mineral integrity." },
      { title: "Precision Milling Technology", detail: "Our advanced processing units in Gujarat ensure a narrow particle size distribution for flawless industrial integration." },
      { title: "Rigorous Quality Assurance", detail: "Each lot undergoes comprehensive lab testing to verify CaCO3 and MgO percentages before delivery." },
      { title: "Timely Bulk Supply", detail: "Our robust logistics network guarantees consistent availability and prompt dispatch for high-volume requirements." }
    ],
    usesTitle: "Broad Applications of WHITE Dolomite Powder",
    usesDescription: "Due to its unique chemical properties and durability, our WHITE Dolomite Powder is an essential component in several critical industrial sectors:",
    uses: [
      { area: "Steel & Iron Industry", detail: "Acts as a critical fluxing agent to remove impurities and provide essential protection for furnace refractory linings." },
      { area: "Glass & Ceramics", detail: "Improves heat resistance, chemical durability, and surface gloss in glass manufacturing and ceramic glazes." },
      { area: "PVC & Rubber Industry", detail: "Serves as an effective reinforcing filler to enhance dimensional stability and thermal performance." },
      { area: "Construction & Infrastructure", detail: "A hard-wearing mineral used as a high-density filler in asphalt, high-strength concrete, and road works." },
      { area: "Agricultural Soil Treatment", detail: "Effectively balances soil pH while providing vital magnesium and calcium for healthier crop development." }
    ],
    packing: "Available in 50kg Bags, 1 Ton Jumbo Bags, and Bulk Loaders",
    comparisonTable: {
      title: "Technical Data Sheet for Dolomite Uncoated Calcium Carbonate (Made in India)",
      headers: ["Uncoated calcium carbonate", "HC-01", "HC-02", "HC-03", "HC-04", "HC-05", "HC-06", "HC-07"],
      sections: [
        {
          label: "Chemical Analysis",
          rows: [
            { param: "CaCO3(%)", values: ["55-56%", "55-56%", "55-56%", "55-56%", "55-56%", "55-56%", "55-56%"] },
            { param: "CaO(%)", values: ["31-31.5%", "31-31.5%", "31-31.5%", "31-31.5%", "31-31.5%", "31-31.5%", "31-31.5%"] },
            { param: "MgCo3(%)", values: ["<43%", "<43%", "<43%", "<43%", "<43%", "<43%", "<43%"] },
            { param: "MgO(%)", values: ["<22%", "<22%", "<22%", "<22%", "<22%", "<22%", "<22%"] },
            { param: "SiO2(%)", values: ["<2.00%", "<1.50%", "<1.50%", "<1.50%", "<1.50%", "<1.50%", "<1.50%"] },
            { param: "Fe2O3(%)", values: ["<0.04%", "<0.04%", "<0.04%", "<0.04%", "<0.04%", "<0.04%", "<0.04%"] },
            { param: "Al2O3(%)", values: ["<0.02%", "<0.02%", "<0.02%", "<0.02%", "<0.02%", "<0.02%", "<0.02%"] },
            { param: "Hcl Insoluble", values: ["<0.05%", "<0.05%", "<0.05%", "<0.05%", "<0.05%", "<0.05%", "<0.05%"] },
          ]
        },
        {
          label: "Physical Properties",
          rows: [
            { param: "Mean size D50", values: ["5.2 micron", "4.5 micron", "3.7 micron", "2.8 micron", "2 micron", "1.7 micron", "1.5 micron"] },
            { param: "Top cut size D97", values: ["20 micron", "15 micron", "12 micron", "10 micron", "8 micron", "6 micron", "5 micron"] },
            { param: "Mesh", values: ["750", "1000", "1250", "1500", "1875", "2500", "3000"] },
            { param: "Whiteness", values: ["96", "97", "97", "97", "97", "97", "97"] },
            { param: "Brightness", values: ["95", "95.5", "95.5", "95.5", "95.5", "95.5", "95.5"] },
            { param: "pH value", values: ["8.5", "8.5", "8.5", "8.5", "8.5", "8.5", "8.5"] },
            { param: "Residue on 325 Mesh", values: ["", "", "", "", "", "", ""] },
            { param: "Density kg/m3", values: ["970 kg/m3", "900 kg/m3", "870 kg/m3", "830 kg/m3", "780 kg/m3", "", ""] },
            { param: "hardness", values: ["3mohs", "3mohs", "3mohs", "3mohs", "3mohs", "3mohs", "3mohs"] }
          ]
        }
      ]
    }
  },
  limestone: {
    name: "Limestone Powder",
    id: "limestone",
    description: "Limestone, a naturally occurring sedimentary rock composed primarily of calcium carbonate (CaCO3), is a vital resource for numerous industries. By choosing Honey Chemicals as your limestone powder supplier, you can be assured of consistent quality, reliable supply, and technical expertise to meet your specific needs.",
    images: ["https://lh3.googleusercontent.com/d/1p8PEDBWWaw78kwiLaEClPDnPc2aZQJTO"],
    comparisonTable: {
      title: "Limestone Chemical Composition & Physical Specifications",
      headers: ["Specification", "Typical Value (%)"],
      sideLabel: "Technical Specs",
      sections: [
        {
          label: "Chemical Profile",
          rows: [
            { param: "Calcium Carbonate (CaCO3)", values: ["95.00 - 98.50%"] },
            { param: "Calcium Oxide (CaO)", values: ["53.00 - 56.00%"] },
            { param: "Silicon Dioxide (SiO2)", values: ["0.50 - 2.00%"] },
            { param: "Magnesium Oxide (MgO)", values: ["0.50 - 1.50%"] },
            { param: "Magnesium Carbonate (MgCO3)", values: ["0.70 - 1.50%"] },
            { param: "Aluminium Oxide (Al2O3)", values: ["0.02 - 0.10%"] },
            { param: "Iron Oxide (Fe2O3)", values: ["0.01 - 0.20%"] },
            { param: "Loss on Ignition (LoI)", values: ["42.00 - 45.00%"] }
          ]
        },
        {
          label: "Physical Properties",
          rows: [
            { param: "Whiteness", values: ["65.00% - 80.00%"] },
            { param: "Brightness", values: ["63.00% - 78.00%"] }
          ]
        }
      ]
    },
    features: [
      "Secured Geological Sources: Procured from pure calcitic sedimentary beds for natural, rich calcium structures.",
      "Excellent Process Integration: Easy dispersion across water-based wall putties, architectural coatings, and polymer masterbatches.",
      "Optimized Acid Neutralization: Perfect chemistry for pH balance, agricultural liming, and structural water treatment.",
      "Premium Calcium Feedstock: Ideal mineral grade providing pristine high-assay calcium nourishment in feeds."
    ],
    uses: [
      { area: "Wall Putty", detail: "Provides excellent bulk texture, white base, and exceptionally smooth application qualities." },
      { area: "Construction Materials", detail: "Essential ingredient in premium cement formulations, durable concrete, and high-strength masonry work." },
      { area: "Paints & Coatings", detail: "Serves as an effective filler and extender pigment, extending TiO2 and enhancing opacity." },
      { area: "Paper & Printing", detail: "Acts as a bright mineral filler and coating to enhance surface smoothness and printing ink affinity." },
      { area: "Agriculture", detail: "Acts as a prime soil conditioner to adjust soil pH, neutralize toxicity, and enrich crops with essential calcium." },
      { area: "Plastics", detail: "Operates as an economic filler and reinforcing agent to improve overall polymer rigidity and dimensions." },
      { area: "Glass & Ceramics", detail: "Acts as a high-purity fluxing agent and source of calcia, improving chemical durability." },
      { area: "Rubber & Adhesives", detail: "Imparts structural body, stiffness, and optimal curing characteristics in vulcanized matrices." },
      { area: "Water Treatment", detail: "Acts as a reliable acid-neutralizing and filtration agent in municipal and industrial treatment plants." },
      { area: "Livestock Feed", detail: "Serves as a critical, highly absorbable natural source of calcium supplementation for cattle and poultry diet." }
    ],
    whyChoose: [
      { title: "Consistent Quality", detail: "Our rigorous laboratory testing ensures that the CaCO3 content remains stable and consistent batch after batch." },
      { title: "Reliability of Supply", detail: "With secured mineral quarries and massive milling runs, we guarantee a continuous and timely supply chain." },
      { title: "Technical Expertise", detail: "Our engineering support helps pinpoint the physical mesh and chemistry that aligns perfectly with your production goal." }
    ],
    packing: "Available in 25kgs, 50kgs, 1000kgs (1 Ton) and 1250kgs Jumbo Bags"
  },
  "dolomite-uncoated": {
    name: "Dolomite Uncoated Calcium Carbonate",
    id: "dolomite-uncoated",
    description: "Honey Chemicals provides high-quality Dolomite Uncoated Calcium Carbonate, sourcing mineral with optimal calcium-magnesium balance. This crystalline mineral is processed into various mesh grades for standard industrial use, offering excellent chemical stability and thermal resistance for heavy-duty applications where surface coating is not required.",
    images: ["https://lh3.googleusercontent.com/d/1i9kT8A62hrPNmS2Nf6UBFZTwBCugNQyN"],
    featuresTitle: "Technical Features of Uncoated Dolomite:",
    featuresDescription: "Our uncoated dolomite series is engineered for maximum performance in high-temperature and chemically demanding environments:",
    features: [
      "Natural Crystalline Structure: Ensures high durability and resistance to chemical weathering.",
      "Balanced Magnesium Content: Provides essential thermal insulation properties for glass and steel sectors.",
      "Optimized Granulometry: Precision grinding ensures uniform mixing and dispersion in construction compounds.",
      "Acid-Neutralizing Capacity: Highly effective for soil pH adjustment and environmental buffering."
    ],
    whyChooseTitle: "Strategic Advantages of Honey Chemicals:",
    whyChooseDescription: "We bridge the gap between extraction and high-end industrial processing for reliable uncoated minerals:",
    whyChoose: [
      { title: "Standardized Purity", detail: "Maintains a strict 55-56% CaCO3 and 43% MgCO3 profile across all supply cycles." },
      { title: "Versatile Grading", detail: "Offered in specialized grades from IND-1 to IND-4 to support varied industrial textures." },
      { title: "Reliable Bulk Supply", detail: "Direct quarry-to-factory logistics ensure minimal supply chain interruptions." }
    ],
    comparisonTable: {
      title: "Technical Data Sheet for Dolomite Uncoated Calcium Carbonate (Made in India)",
      headers: ["Uncoated calcium carbonate", "HC-01", "HC-02", "HC-03", "HC-04", "HC-05", "HC-06", "HC-07"],
      sections: [
        {
          label: "Chemical Analysis",
          rows: [
            { param: "Calcium Carbonate (CaCO3)", values: ["55.00%", "55.00%", "55.00%", "55.00%", "55.00%", "55.00%", "55.00%"] },
            { param: "Calcium Oxide (CaO)", values: ["30.80%", "30.80%", "30.80%", "30.80%", "30.80%", "30.80%", "30.80%"] },
            { param: "Magnesium Carbonate (MgCO3)", values: ["43.46%", "43.46%", "43.46%", "43.46%", "43.46%", "43.46%", "43.46%"] },
            { param: "Magnesium Oxide (MgO)", values: ["21.51%", "21.51%", "21.51%", "21.51%", "21.51%", "21.51%", "21.51%"] },
            { param: "Silicon Di-Oxide (SiO2)", values: ["0.36%", "0.36%", "0.36%", "0.36%", "0.36%", "0.36%", "0.36%"] },
            { param: "Ferric Oxide (Fe2O3)", values: ["0.54%", "0.54%", "0.54%", "0.54%", "0.54%", "0.54%", "0.54%"] },
            { param: "Aluminium Oxide (Al2O3)", values: ["0.14%", "0.14%", "0.14%", "0.14%", "0.14%", "0.14%", "0.14%"] },
            { param: "Loss on Ignition (LOI)", values: ["46.15%", "46.15%", "46.15%", "46.15%", "46.15%", "46.15%", "46.15%"] },
          ]
        },
        {
          label: "Physical Properties",
          rows: [
            { param: "Mean size D50", values: ["5.2 micron", "4.5 micron", "3.7 micron", "2.8 micron", "2 micron", "1.7 micron", "1.5 micron"] },
            { param: "Top cut size D97", values: ["20 micron", "15 micron", "12 micron", "10 micron", "8 micron", "6 micron", "5 micron"] },
            { param: "Mesh", values: ["750", "1000", "1250", "1500", "1875", "2500", "3000"] },
            { param: "Whiteness (Pass In 300#)", values: ["96.80%", "96.80%", "96.80%", "96.80%", "96.80%", "96.80%", "96.80%"] },
            { param: "Brightness (Pass In 300#)", values: ["95.20%", "95.20%", "95.20%", "95.20%", "95.20%", "95.20%", "95.20%"] },
            { param: "pH value", values: ["8.5", "8.5", "8.5", "8.5", "8.5", "8.5", "8.5"] },
            { param: "Residue on 325 Mesh", values: ["", "", "", "", "", "", ""] },
            { param: "Density kg/m3", values: ["970 kg/m3", "900 kg/m3", "870 kg/m3", "830 kg/m3", "780 kg/m3", "", ""] },
            { param: "Hardness", values: ["3.5 - 4 Mohs", "3.5 - 4 Mohs", "3.5 - 4 Mohs", "3.5 - 4 Mohs", "3.5 - 4 Mohs", "3.5 - 4 Mohs", "3.5 - 4 Mohs"] }
          ]
        }
      ]
    },
    specifications: [],
    usesTitle: "Industry-Specific Applications:",
    usesDescription: "Uncoated dolomite is a versatile mineral used across heavy industrial and environmental sectors:",
    uses: [
      { area: "Steel Manufacturing", detail: "Used as a high-performance slag conditioner and flux in iron and steel furnaces." },
      { area: "Construction Fillers", detail: "Premium aggregate for high-strength concrete, tile adhesives, and flooring compounds." },
      { area: "Glass Production", detail: "Introduces MgO into glass batches to improve thermal durability and chemical resistance." },
      { area: "Agriculture", detail: "A natural soil conditioner that provides essential secondary nutrients to improve crop yields." }
    ],
    packing: "Available in 50kg HDPE Bags and Bulk"
  },
  "dolomite-coated": {
    name: "Dolomite Coated Calcium Carbonate",
    id: "dolomite-coated",
    description: "Honey Chemicals provides premium Dolomite Coated Calcium Carbonate, specifically engineered with advanced stearic acid surface treatment for optimal performance in polymer and rubber applications. This magnesium-rich mineral series features ultra-fine particle sizes and exceptional chemical purity, ensuring superior dispersion and reinforcement in industrial composites.",
    images: ["https://picsum.photos/seed/dolomite-c/800/800"],
    featuresTitle: "Performance Features of Coated Dolomite:",
    featuresDescription: "Surface treatment with specialized stearic acid provides a range of benefits for high-end polymer processing:",
    features: [
      "Superior Dispersion: Surface treatment reduces mineral-to-mineral attraction, ensuring a smooth blend in plastic masterbatches.",
      "Hydrophobic Properties: Repels moisture, making it ideal for high-voltage cable insulation and sensitive electronics.",
      "Enhanced Melt Flow: Reduces viscosity during extrusion, allowing for faster production speeds and lower energy consumption.",
      "Mechanical Reinforcement: Improves tensile strength and impact resistance in automotive and appliance components."
    ],
    whyChooseTitle: "The Honey Chemicals Advantage:",
    whyChooseDescription: "We combine precision micronizing with advanced coating technology to deliver technical superiority:",
    whyChoose: [
      { title: "Precision Coating Control", detail: "Maintains a perfect 1% stearic acid coverage to ensure consistent surface activity across all grades." },
      { title: "Advanced Micronizing", detail: "Features ultra-fine particle control with mean sizes down to 1.5 microns for high-gloss finishes." },
      { title: "Validated Performance", detail: "Tested for compatibility with diverse resin systems including HDPE, PP, and PVC." }
    ],
    comparisonTable: null,
    specifications: [],
    usesTitle: "Core Industrial Uses:",
    usesDescription: "Coated dolomite is a mission-critical ingredient in precision polymer engineering and specialized coatings:",
    uses: [
      { area: "Plastic Masterbatches", detail: "Provides excellent dispersion and compatibility in polyolefin and PVC masterbatches, enhancing surface finish." },
      { area: "Rubber Industry", detail: "Acts as a technical reinforcement filler in tire and automotive rubber components, improving heat resistance." },
      { area: "Wires & Cables", detail: "Used in high-voltage cable insulation to provide superior dielectric properties and thermal stability." },
      { area: "Specialty Coatings", detail: "Enhances the weatherability and moisture resistance of specialized industrial coatings." }
    ],
    packing: "50kg HDPE Export Quality Bags"
  },
  "indigenous-calcium-carbonate": {
    name: "Indigenous Uncoated Calcium Carbonate Export",
    id: "indigenous-calcium-carbonate",
    description: "Indigenous Uncoated Calcium Carbonate (UCCC) is a naturally sourced, finely ground mineral composed of high-purity calcium carbonate (CaCO3). Extracted from superior quality calcium carbonate deposits, this unmodified form is widely used across industries where surface treatment is unnecessary. At Honey Chemicals, we provide premium-grade uncoated calcium carbonate, known for its high brightness, controlled particle size, and excellent whiteness, making it a reliable raw material for a wide array of industrial applications.",
    images: ["https://lh3.googleusercontent.com/d/1DLtW_PB8HZHmlA8gtRv1vTMkaMTbQzg6"],
    featuresTitle: "Key Features of Our Indigenous Uncoated Calcium Carbonate",
    featuresDescription: "Honey Chemicals is committed to consistent quality and performance. Our Indigenous Uncoated Calcium Carbonate is manufactured with advanced milling processes and strict quality checks to meet diverse industrial specifications.",
    features: [
      "High Purity and Whiteness: Extracted from natural calcium carbonate with minimal impurities, ensuring brightness and chemical stability.",
      "Fine Particle Size Distribution: Available in a variety of mesh sizes for optimal performance across different applications.",
      "Cost-Effective Filler: Acts as an economical solution to improve bulk, reduce raw material costs, and maintain desired mechanical properties.",
      "Excellent Thermal Stability: Suitable for applications requiring high heat resistance without decomposition or discoloration.",
      "Environmentally Safe: Non-toxic and eco-friendly, making it suitable for agriculture and environmentally sensitive applications.",
      "Easy Process Integration: Compatible with most production processes without the need for specialized treatment or additives."
    ],
    whyChooseTitle: "Why Choose Honey Chemicals for Uncoated Calcium Carbonate?",
    whyChooseDescription: "Honey Chemicals has built a reputation for reliability, quality, and customer-centric solutions. Our Indigenous Uncoated Calcium Carbonate offers unmatched value, backed by technical expertise and robust infrastructure.",
    whyChoose: [
      { title: "Advanced Milling Technology", detail: "Ensures consistent particle size and minimal contamination." },
      { title: "High Volume Capacity", detail: "Capable of fulfilling both small and large-volume requirements with efficient turnaround." },
      { title: "Custom Mesh Sizes", detail: "Delivered in grades suited for your exact process needs." },
      { title: "Competitive Pricing", detail: "Optimal balance between quality and affordability." },
      { title: "Sustainable Operations", detail: "Our production is aligned with sustainable mining and eco-conscious practices." }
    ],
    comparisonTable: {
      title: "Technical Data Sheet for Indigenous Uncoated Calcium Carbonate (Made in India)",
      headers: ["Uncoated calcium carbonate", "HC-01", "HC-02", "HC-03", "HC-04", "HC-05", "HC-06", "HC-07"],
      sections: [
        {
          label: "Chemical Analysis",
          rows: [
            { param: "CaCO3(%)", values: ["94-95%", "95-96%", "95-96%", "96-97%", "97-98%", "97-98%", "97-98%"] },
            { param: "CaO(%)", values: ["52-53%", "53-54%", "53-54%", "54-55%", "55-56%", "55-56%", "55-56%"] },
            { param: "MgCo3(%)", values: ["<2.50%", "<2.00%", "<2.00%", "<2.00%", "<2.00%", "<2.00%", "<2.00%"] },
            { param: "MgO(%)", values: ["<1.80%", "<1.50%", "<1.50%", "<1.50%", "<1.50%", "<1.50%", "<1.50%"] },
            { param: "SiO2(%)", values: ["<2.00%", "<1.50%", "<1.50%", "<1.50%", "<1.50%", "<1.50%", "<1.50%"] },
            { param: "Fe2O3(%)", values: ["<0.07%", "<0.07%", "<0.07%", "<0.07%", "<0.07%", "<0.07%", "<0.07%"] },
            { param: "Al2O3(%)", values: ["<0.08%", "<0.08%", "<0.08%", "<0.08%", "<0.08%", "<0.08%", "<0.08%"] },
            { param: "Hcl Insoluble", values: ["<0.05%", "<0.05%", "<0.05%", "<0.05%", "<0.05%", "<0.05%", "<0.05%"] },
          ]
        },
        {
          label: "Physical Properties",
          rows: [
            { param: "Mean size D50", values: ["5.2 micron", "4.5 micron", "3.7 micron", "2.8 micron", "2 micron", "1.7 micron", "1.5 micron"] },
            { param: "Top cut size D97", values: ["20 micron", "15 micron", "12 micron", "10 micron", "8 micron", "6 micron", "5 micron"] },
            { param: "Mesh", values: ["750", "1000", "1250", "1500", "1875", "2500", "3000"] },
            { param: "Whiteness", values: ["97", "98", "98", "98", "98", "98", "98"] },
            { param: "Brightness", values: ["96", "96.5", "96.5", "96.5", "96.5", "96.5", "96.5"] },
            { param: "pH value", values: ["8.5", "8.5", "8.5", "8.5", "8.5", "8.5", "8.5"] },
            { param: "Residue on 325 Mesh", values: ["", "", "", "", "", "", ""] },
            { param: "Density kg/m3", values: ["970 kg/m3", "900 kg/m3", "870 kg/m3", "830 kg/m3", "780 kg/m3", "", ""] },
            { param: "Hardness", values: ["3mohs", "3mohs", "3mohs", "3mohs", "3mohs", "3mohs", "3mohs"] }
          ]
        }
      ]
    },
    usesTitle: "Applications of Indigenous Uncoated Calcium Carbonate",
    usesDescription: "Uncoated Calcium Carbonate is used as a primary or supplementary raw material in multiple industries due to its chemical stability, affordability, and versatility:",
    uses: [
      { area: "Paints & Distempers", detail: "Enhances opacity and brightness, acts as a spacing extender in cost-sensitive formulations." },
      { area: "Rubber Industry", detail: "Improves dimensional stability, stiffness, and surface smoothness." },
      { area: "PVC & Plastics", detail: "Used as a filler to improve volume and reduce costs without compromising basic strength." },
      { area: "Construction Materials", detail: "Adds durability and workability in cement, concrete, plaster, and tiles." },
      { area: "Ceramics", detail: "Functions as a flux and stabilizer during ceramic body formation and sintering." },
      { area: "Agriculture", detail: "Works as a pH balancer and soil conditioner for improved crop health." }
    ],
    packing: "Available in 25kg and 50kg Bags"
  },
  "indigenous-uncoated": {
    name: "Indigenous Uncoated Calcium Carbonate",
    id: "indigenous-uncoated",
    description: "High-purity natural uncoated calcium carbonate from local sources.",
    images: ["https://lh3.googleusercontent.com/d/1DLtW_PB8HZHmlA8gtRv1vTMkaMTbQzg6"],
    specifications: [{ param: "Type", value: "Natural Uncoated" }],
    uses: ["Paints", "Paper"],
    packing: "50kg bags"
  },
  "indigenous-coated": {
    name: "Indigenous Coated Calcium Carbonate",
    id: "indigenous-coated",
    description: "Surface treated indigenous calcium carbonate for superior architectural properties.",
    images: ["https://picsum.photos/seed/indig-c/800/800"],
    specifications: [{ param: "Type", value: "Treated Coated" }],
    uses: ["PVC Rigid", "Plastics"],
    packing: "50kg bags"
  },
  "vietnam-calcium-carbonate": {
    name: "Vietnam Calcium Carbonate",
    id: "vietnam-calcium-carbonate",
    isPremium: true,
    description: "Honey Chemicals is a prominent name in the importation of high-quality Vietnam Calcium Carbonate, serving a diverse range of industries across India. Renowned for its commitment to excellence, Honey Chemicals has built a solid reputation for providing top-tier products that ensure consistent quality and reliability.",
    images: ["https://lh3.googleusercontent.com/d/1Ge6d8OhjofOO4NL02ZcpTpO4c3GCwawB"],
    featuresTitle: "Expertise in Vietnam Calcium Carbonate Export:",
    featuresDescription: "Honey Chemicals excels in importing a variety of Vietnamese Calcium Carbonate grades, sourced from some of the most reputable international manufacturers. Their product range includes both coated and uncoated Vietnam Calcium Carbonate, designed to meet the needs of various applications across multiple industries.",
    features: [
      "Vietnam Coated Calcium Carbonate: Provides enhanced properties for specific applications, including improved dispersion and compatibility.",
      "Vietnam Uncoated Calcium Carbonate: Versatile and widely used across different sectors for its cost-effectiveness and performance.",
      "Global Purity Standards: Minimal trace elements and high CaCO3 content ensure the highest chemical reliability.",
      "Fine Top-Cut Control: Precision grinding produces a narrow particle size distribution for smooth, high-gloss finishes."
    ],
    whyChooseTitle: "Why Choose Honey Chemicals as Your Vietnam Calcium Carbonate Exporter?",
    whyChooseDescription: "Honey Chemicals distinguishes itself in the Vietnam Calcium Carbonate import industry through several key factors:",
    whyChoose: [
      { title: "Quality Assurance", detail: "Rigorous Testing: Honey Chemicals conducts thorough testing of each batch of Calcium Carbonate, evaluating factors such as purity, particle size, and chemical properties. Company's own office in Vietnam allows it to keep a regular check on the material." },
      { title: "Global Sourcing", detail: "Trusted Suppliers: The company imports Vietnam Calcium Carbonate from well-regarded companies, ensuring a steady supply of high-quality material. Their established relationships with international suppliers and own office in the country enable access to premium grades." },
      { title: "Customization", detail: "Tailored Solutions: Recognizing the diverse needs of different industries, Honey Chemicals offers customized Calcium Carbonate solutions for pharmaceuticals, paints, plastics, rubber, or construction." },
      { title: "Efficient Logistics", detail: "Timely Delivery: Honey Chemicals is known for its efficient logistics network, which ensures the prompt delivery of Calcium Carbonate across India, minimizing delays and supporting seamless production." }
    ],
    comparisonTable: {
      title: "Technical Data Sheet for Vietnam Uncoated Calcium Carbonate (High Pure Series)",
      headers: ["Vietnam Mineral Grade", "V-01", "V-02", "V-03", "V-04", "V-05"],
      sideLabel: "Physical & Chemical Analysis",
      rows: [
        { param: "CaCO3(%)", values: ["98.5 ± 0.5%", "98.5 ± 0.5%", "99 ± 0.3%", "99 ± 0.3%", "99.5 ± 0.2%"] },
        { param: "Brightness", values: ["96.5", "97.0", "97.5", "98.0", "98.5"] },
        { param: "Whiteness", values: ["95", "96", "97", "98", "98.5"] },
        { param: "pH value", values: ["8.5", "8.5", "8.5", "8.5", "8.5"] },
        { param: "Top Cut (d97)", values: ["20μm", "15μm", "10μm", "8μm", "5μm"] },
      ]
    },
    specifications: [],
    uses: [
      { area: "Premium Paints", detail: "Provides maximum opacity and brightness, allowing for superior 'hide' and color vibrancy in architectural coatings." },
      { area: "High-End Plastics", detail: "Used in luxury polymer products to achieve a flawless white finish and heat resistance." },
      { area: "Specialty Rubber", detail: "Enhances the physical properties and visual appeal of medical and high-performance rubber goods." }
    ],
    packing: "50kg HDPE Export Quality Bags"
  },
  "vietnam-uncoated": {
    name: "Vietnam Uncoated Calcium Carbonate",
    id: "vietnam-uncoated",
    description: "Honey Chemicals imports and supplies premium uncoated Vietnamese Calcium Carbonate, specifically processed for high whiteness and consistent particle size distribution. This versatile grade is ideal for traditional filler applications where surface treatment is not required.",
    images: ["https://lh3.googleusercontent.com/d/1Ge6d8OhjofOO4NL02ZcpTpO4c3GCwawB"],
    specifications: [{ param: "Brightness", value: "98%" }],
    uses: ["Paper Mill", "Premium Paint", "Standard Plastics"],
    packing: "50kg Export Quality HDPE Bags"
  },
  "vietnam-coated": {
    name: "Vietnam Coated Calcium Carbonate",
    id: "vietnam-coated",
    description: "Our Vietnam Coated Calcium Carbonate features advanced stearic acid surface treatment, provided by Honey Chemicals to ensure superior dispersion and processing efficiency. This premium grade is engineered for high-end masterbatches and sensitive polymer applications.",
    images: ["https://lh3.googleusercontent.com/d/1Ge6d8OhjofOO4NL02ZcpTpO4c3GCwawB"],
    specifications: [{ param: "Coating", value: "Stearic Acid" }],
    uses: ["Advanced Masterbatch", "Cables", "Automotive Components"],
    packing: "50kg Export Quality HDPE Bags"
  },
  "egypt-calcium-carbonate": {
    name: "Egypt Calcium Carbonate",
    id: "egypt-calcium-carbonate",
    description: "Egypt Calcium Carbonate is globally recognized for its exceptional whiteness and structural integrity, sourced directly from elitist quarries in Egypt. At Honey Chemicals, we supply both coated and uncoated varieties of this premium mineral, processed to meet the highest international standards for industrial filler applications. Our Egypt-origin calcium carbonate is a critical component for manufacturers seeking superior brightness and chemical purity in their production lines.",
    images: ["https://lh3.googleusercontent.com/d/1khS7AzSRLqgJCccXRlUaRinTkI-7GhOq"],
    comparisonTable: {
      title: "Technical Data Sheet for Egycal Coated Ground Calcium Carbonate (Made in Egypt)",
      headers: ["coated calcium carbonate", "HC-01VC", "HC-02VC", "HC-03VC", "HC-04VC", "HC-05VC", "HC-06VC", "HC-07VC"],
      sections: [
        {
          label: "Chemical Analysis",
          rows: [
            { param: "CaCO3(%)", values: ["98.5-98.9%", "98.5-98.9%", "98.5-98.9%", "98.5-98.9%", "98.5-98.9%", "98.5-98.9%", "98.5-98.9%"] },
            { param: "CaO(%)", values: ["<55.3%", "<55.3%", "<55.3%", "<55.3%", "<55.3%", "<55.3%", "<55.3%"] },
            { param: "MgCo3(%)", values: ["<0.5%", "<0.5%", "<0.5%", "<0.5%", "<0.5%", "<0.5%", "<0.5%"] },
            { param: "MgO(%)", values: ["<0.25%", "<0.25%", "<0.25%", "<0.25%", "<0.25%", "<0.25%", "<0.25%"] },
            { param: "SiO2(%)", values: ["<0.8%", "<0.8%", "<0.8%", "<0.8%", "<0.8%", "<0.8%", "<0.8%"] },
            { param: "Fe2O3(%)", values: ["", "", "", "", "", "", ""] },
            { param: "Al2O3(%)", values: ["", "", "", "", "", "", ""] },
            { param: "Hcl Insoluble", values: ["<0.05%", "<0.05%", "<0.05%", "<0.05%", "<0.05%", "<0.05%", "<0.05%"] },
          ]
        },
        {
          label: "Physical Properties",
          rows: [
            { param: "Mean size D50", values: ["5 micron", "4 micron", "3.4 micron", "2.5 micron", "2 micron", "1.5 micron", "1.2 micron"] },
            { param: "Top cut size D97", values: ["20 micron", "15 micron", "12 micron", "10 micron", "8 micron", "6 micron", "5 micron"] },
            { param: "Mesh", values: ["750", "1000", "1250", "1500", "1875", "2500", "3000"] },
            { param: "Whiteness", values: ["97.5", "98", "98", "98.5", "98.5", "98.5", "98.5"] },
            { param: "Brightness", values: ["96.5", "96.5", "96.5", "96.5", "96.5", "96.5", "96.5"] },
            { param: "pH value", values: ["8.5", "8.5", "8.5", "8.5", "8.5", "8.5", "8.5"] },
            { param: "Residue on 325 Mesh", values: ["", "", "", "", "", "", ""] },
            { param: "Density kg/m3", values: ["2.7", "2.7", "2.7", "2.7", "2.7", "2.7", "2.7"] },
            { param: "Hardness", values: ["3mohs", "3mohs", "3mohs", "3mohs", "3mohs", "3mohs", "3mohs"] },
            { param: "Stearic Acid Coating", values: ["1%", "1%", "1%", "1%", "1%", "1%", "1%"] }
          ]
        }
      ]
    },
    featuresTitle: "Key Features of Our Egypt Calcium Carbonate",
    featuresDescription: "Sourced from trusted Egyptian mines and processed with precision, our calcium carbonate is ideal for demanding industrial applications:",
    features: [
      "Ultra-High Purity and Brightness: Egyptian calcium carbonate is globally recognized for its exceptional whiteness and low impurity levels.",
      "Versatile Varieties: Available in both coated (stearic acid) and uncoated forms to suit diverse manufacturing needs.",
      "Excellent Dispersion: Ensures uniform distribution, reducing agglomeration and enhancing surface finish in end products.",
      "Low Moisture Content: Provides greater shelf stability and reduces the risk of degradation in moisture-sensitive applications.",
      "Enhanced Mechanical Properties: Improves impact strength, dimensional stability, and processing efficiency in polymers.",
      "Custom Particle Sizes: Available in a range of fine mesh grades (up to 3000 mesh) to suit specific industrial applications."
    ],
    whyChooseTitle: "Why Choose Honey Chemicals for Egypt Calcium Carbonate?",
    whyChooseDescription: "Honey Chemicals has partnered with top Egyptian manufacturers to ensure consistent supply and quality of this high-end mineral filler. Here's why businesses across industries rely on us:",
    whyChoose: [
      "Direct Import from Egypt: Authentic material sourced directly from Egypt's renowned calcium carbonate quarries.",
      "Global Quality Compliance: Meets international standards for whiteness, coating uniformity, and particle control.",
      "Strong Technical Support: Our team works closely with clients to recommend optimal grades based on application needs.",
      "Bulk Supply & Timely Delivery: Reliable logistics and inventory ensure we meet your volume and deadline requirements.",
      "Application Versatility: Our product is tested for performance across a wide variety of use cases."
    ],
    usesTitle: "Applications of Egypt Calcium Carbonate",
    usesDescription: "Egypt Calcium Carbonate is widely utilized in industries that demand top-tier mineral fillers for enhancing material properties and reducing formulation costs:",
    uses: [
      { area: "Plastics and Masterbatches", detail: "Acts as a reinforcing filler to improve rigidity, processability, and cost-efficiency." },
      { area: "Rubber Compounds", detail: "Enhances volume, durability, and elasticity while minimizing oil absorption." },
      { area: "Paints & Coatings", detail: "Provides superior whiteness, flow characteristics, and coverage, especially in solvent-based systems." },
      { area: "PVC Pipes & Profiles", detail: "Increases thermal stability and improves surface smoothness and impact resistance." },
      { area: "Cables and Wires", detail: "Boosts insulation properties and improves flame retardancy when used with appropriate additives." },
      { area: "Adhesives and Sealants", detail: "Maintains structural integrity and optimizes rheological performance." }
    ],
    packing: "Available in 25kg, 50kg Bags and 1 Ton Bulk Packaging"
  },
  "egypt-uncoated": {
    name: "Egypt Uncoated Calcium Carbonate",
    id: "egypt-uncoated",
    description: "Natural Egyptian calcium carbonate for versatile industrial applications.",
    images: ["https://lh3.googleusercontent.com/d/1khS7AzSRLqgJCccXRlUaRinTkI-7GhOq"],
    specifications: [{ param: "Purity", value: "99.1%" }],
    uses: ["Filler", "Paper"],
    packing: "25kg bags"
  },
  "egypt-coated": {
    name: "Egypt Coated Calcium Carbonate",
    id: "egypt-coated",
    description: "Egypt Coated Calcium Carbonate is a premium-quality mineral derived from some of the world's purest calcium carbonate reserves found in Egypt. Treated with a special surface coating (typically stearic acid), this form of calcium carbonate offers superior dispersion, hydrophobicity, and compatibility with polymers and non-polar systems. At Honey Chemicals, we bring to market high-performance Egypt-origin coated calcium carbonate that meets global industry standards, supporting advanced applications in plastics, rubber, masterbatches, and more.",
    images: ["https://lh3.googleusercontent.com/d/1khS7AzSRLqgJCccXRlUaRinTkI-7GhOq"],
    comparisonTable: {
      title: "Technical Data Sheet for Egycal Coated Ground Calcium Carbonate (Made in Egypt)",
      headers: ["coated calcium carbonate", "HC-01VC", "HC-02VC", "HC-03VC", "HC-04VC", "HC-05VC", "HC-06VC", "HC-07VC"],
      sections: [
        {
          label: "Chemical Analysis",
          rows: [
            { param: "CaCO3(%)", values: ["98.5-98.9%", "98.5-98.9%", "98.5-98.9%", "98.5-98.9%", "98.5-98.9%", "98.5-98.9%", "98.5-98.9%"] },
            { param: "CaO(%)", values: ["<55.3%", "<55.3%", "<55.3%", "<55.3%", "<55.3%", "<55.3%", "<55.3%"] },
            { param: "MgCo3(%)", values: ["<0.5%", "<0.5%", "<0.5%", "<0.5%", "<0.5%", "<0.5%", "<0.5%"] },
            { param: "MgO(%)", values: ["<0.25%", "<0.25%", "<0.25%", "<0.25%", "<0.25%", "<0.25%", "<0.25%"] },
            { param: "SiO2(%)", values: ["<0.8%", "<0.8%", "<0.8%", "<0.8%", "<0.8%", "<0.8%", "<0.8%"] },
            { param: "Fe2O3(%)", values: ["-", "-", "-", "-", "-", "-", "-"] },
            { param: "Al2O3(%)", values: ["-", "-", "-", "-", "-", "-", "-"] },
            { param: "Hcl Insoluble", values: ["<0.05%", "<0.05%", "<0.05%", "<0.05%", "<0.05%", "<0.05%", "<0.05%"] },
          ]
        },
        {
          label: "Physical Properties",
          rows: [
            { param: "Mean size D50", values: ["5 micron", "4 micron", "3.4 micron", "2.5 micron", "2 micron", "1.5 micron", "1.2 micron"] },
            { param: "Top cut size D97", values: ["20 micron", "15 micron", "12 micron", "10 micron", "8 micron", "6 micron", "5 micron"] },
            { param: "Mesh", values: ["750", "1000", "1250", "1500", "1875", "2500", "3000"] },
            { param: "Whiteness", values: ["97.5", "98", "98", "98.5", "98.5", "98.5", "98.5"] },
            { param: "Brightness", values: ["96.5", "96.5", "96.5", "96.5", "96.5", "96.5", "96.5"] },
            { param: "pH value", values: ["8.5", "8.5", "8.5", "8.5", "8.5", "8.5", "8.5"] },
            { param: "Residue on 325 Mesh", values: ["-", "-", "-", "-", "-", "-", "-"] },
            { param: "Density kg/m3", values: ["2.7", "2.7", "2.7", "2.7", "2.7", "2.7", "2.7"] },
            { param: "Hardness", values: ["3mohs", "3mohs", "3mohs", "3mohs", "3mohs", "3mohs", "3mohs"] },
            { param: "Stearic Acid Coating", values: ["1%", "1%", "1%", "1%", "1%", "1%", "1%"] }
          ]
        }
      ]
    },
    featuresTitle: "Key Features of Our Egypt Coated Calcium Carbonate",
    featuresDescription: "Sourced from trusted Egyptian mines and processed with precision surface modification, our coated calcium carbonate is ideal for demanding industrial applications:",
    features: [
      "Ultra-High Purity and Brightness: Egyptian calcium carbonate is globally recognized for its exceptional whiteness and low impurity levels.",
      "Stearic Acid Coated: Surface treatment improves compatibility with hydrophobic systems such as plastics, PVC, and rubber.",
      "Excellent Dispersion: Ensures uniform distribution, reducing agglomeration and enhancing surface finish in end products.",
      "Low Moisture Content: Provides greater shelf stability and reduces the risk of degradation in moisture-sensitive applications.",
      "Enhanced Mechanical Properties: Improves impact strength, dimensional stability, and processing efficiency in polymers.",
      "Custom Particle Sizes: Available in a range of fine mesh grades to suit specific industrial applications."
    ],
    whyChooseTitle: "Why Choose Honey Chemicals for Egypt Coated Calcium Carbonate?",
    whyChooseDescription: "Honey Chemicals has partnered with top Egyptian manufacturers to ensure consistent supply and quality of this high-end mineral filler. Here's why businesses across industries rely on us:",
    whyChoose: [
      "Direct Import from Egypt: Authentic material sourced directly from Egypt's renowned calcium carbonate quarries.",
      "Global Quality Compliance: Meets international standards for whiteness, coating uniformity, and particle control.",
      "Strong Technical Support: Our team works closely with clients to recommend optimal grades based on application needs.",
      "Bulk Supply & Timely Delivery: Reliable logistics and inventory ensure we meet your volume and deadline requirements.",
      "Application Versatility: Our product is tested for performance across a wide variety of use cases."
    ],
    usesTitle: "Applications of Egypt Coated Calcium Carbonate",
    usesDescription: "Egypt Coated Calcium Carbonate is widely utilized in industries that demand top-tier mineral fillers for enhancing material properties and reducing formulation costs:",
    uses: [
      { area: "Plastics and Masterbatches", detail: "Acts as a reinforcing filler to improve rigidity, processability, and cost-efficiency." },
      { area: "Rubber Compounds", detail: "Enhances volume, durability, and elasticity while minimizing oil absorption." },
      { area: "Paints & Coatings", detail: "Provides superior whiteness, flow characteristics, and coverage, especially in solvent-based systems." },
      { area: "PVC Pipes & Profiles", detail: "Increases thermal stability and improves surface smoothness and impact resistance." },
      { area: "Cables and Wires", detail: "Boosts insulation properties and improves flame retardancy when used with appropriate additives." },
      { area: "Adhesives and Sealants", detail: "Maintains structural integrity and optimizes rheological performance." }
    ],
    packing: "Available in 25kg Multi-wall Paper Bags and 1 Ton Jumbo Bags"
  },
  "malaysia-calcium-carbonate": {
    name: "Malaysia Calcium Carbonate",
    id: "malaysia-calcium-carbonate",
    description: "Malaysia Uncoated Calcium Carbonate is a naturally occurring mineral filler derived from the high-purity calcium carbonate reserves of Malaysia. Known for its exceptional whiteness, brightness, and low impurity content, this unmodified form of calcium carbonate is ideal for applications where surface treatment is not required. At Honey Chemicals, we import and supply superior-grade uncoated calcium carbonate from Malaysia that delivers consistent performance, excellent processability, and cost-effective advantages across diverse industries.",
    images: ["https://lh3.googleusercontent.com/d/1WzOpBpeCBfAbcFKyu-rMbPQJD3X66nge"],
    comparisonTable: {
      title: "Technical Data Sheet for Malaysia Uncoated Calcium Carbonate (Made in Malaysia)",
      headers: ["Uncoated calcium carbonate", "HC-01M", "HC-02M", "HC-03M", "HC-04M", "HC-05M", "HC-06M", "HC-07M"],
      sections: [
        {
          label: "Chemical Analysis",
          rows: [
            { param: "CaCO3(%)", values: ["98-98.5%", "98-98.5%", "98-98.5%", "98-98.5%", "98-98.5%", "98-98.5%", "98-98.5%"] },
            { param: "CaO(%)", values: ["", "", "", "", "", "", ""] },
            { param: "MgCo3(%)", values: ["<0.45%", "<0.45%", "<0.45%", "<0.45%", "<0.45%", "<0.45%", "<0.45%"] },
            { param: "MgO(%)", values: ["<0.38%", "<0.38%", "<0.38%", "<0.38%", "<0.38%", "<0.38%", "<0.38%"] },
            { param: "SiO2(%)", values: ["<0.5%", "<0.5%", "<0.5%", "<0.5%", "<0.5%", "<0.5%", "<0.5%"] },
            { param: "Fe2O3(%)", values: ["<0.2%", "<0.2%", "<0.2%", "<0.2%", "<0.2%", "<0.2%", "<0.2%"] },
            { param: "Al2O3(%)", values: ["<0.2%", "<0.2%", "<0.2%", "<0.2%", "<0.2%", "<0.2%", "<0.2%"] },
            { param: "Hcl Insoluble", values: ["<0.05%", "<0.05%", "<0.05%", "<0.05%", "<0.05%", "<0.05%", "<0.05%"] },
          ]
        },
        {
          label: "Physical Properties",
          rows: [
            { param: "Mean size D50", values: ["5 micron", "4 micron", "3.4 micron", "2.5 micron", "2 micron", "1.5 micron", "1.2 micron"] },
            { param: "Top cut size D97", values: ["20 micron", "15 micron", "12 micron", "10 micron", "8 micron", "6 micron", "5 micron"] },
            { param: "Mesh", values: ["750", "1000", "1250", "1500", "1875", "2500", "3000"] },
            { param: "Whiteness", values: ["98", "98", "98", "98.5", "98.5", "98.5", "98.5"] },
            { param: "Brightness", values: ["96.5", "96.5", "96.5", "96.5", "96.5", "96.5", "96.5"] },
            { param: "pH value", values: ["8.5", "8.5", "8.5", "8.5", "8.5", "8.5", "8.5"] },
            { param: "Residue on 325 Mesh", values: ["", "", "", "", "", "", ""] },
            { param: "Density g/cm3", values: ["2.7", "2.7", "2.7", "2.7", "2.7", "2.7", "2.7"] },
            { param: "Hardness", values: ["3mohs", "3mohs", "3mohs", "3mohs", "3mohs", "3mohs", "3mohs"] }
          ]
        }
      ]
    },
    features: [
      "High Brightness and Whiteness: Enhances appearance and opacity in final products, especially in paints, coatings, and paper.",
      "Natural Purity: Sourced from some of Malaysia's finest calcium carbonate reserves with low silica and iron content.",
      "Consistent Particle Size Distribution: Available in multiple micron grades for tailored performance across different processes.",
      "Excellent Thermal Stability: Ideal for use in heat-intensive applications like plastics and rubber.",
      "Non-Toxic and Eco-Friendly: Safe for agricultural, construction, and environmental applications.",
      "Cost-Effective Filler: Reduces overall raw material costs while maintaining strength and product integrity."
    ],
    whyChooseTitle: "Why Choose Honey Chemicals?",
    whyChooseDescription: "Honey Chemicals is your trusted partner for high-quality imported calcium carbonate. We bring reliability, transparency, and technical excellence to every supply:",
    whyChoose: [
      "Authentic Malaysian Origin: Directly imported from established Malaysian mines known for their high-quality calcium carbonate.",
      "Industry-Ready Grades: Supplied in mesh sizes suited for plastics, paints, ceramics, and rubber formulations.",
      "Strict Quality Control: Each batch undergoes quality testing for whiteness, particle size, and moisture content.",
      "Bulk Supply & Logistic Efficiency: Robust inventory management for bulk orders and timely delivery.",
      "Application-Specific Support: We guide clients on selecting the right grade for optimal product performance and cost savings."
    ],
    usesDescription: "Uncoated calcium carbonate from Malaysia is a versatile raw material used across industries to improve product performance and manufacturing efficiency:",
    uses: [
      { area: "Paints & Coatings", detail: "Enhances opacity, texture, and cost-efficiency in water-based and powder coatings." },
      { area: "Plastic Industry", detail: "Serves as a filler in PVC, PE, and PP applications to improve rigidity and reduce shrinkage." },
      { area: "Rubber Compounds", detail: "Adds bulk and improves dimensional stability while maintaining flexibility." },
      { area: "Ceramics & Glass", detail: "Acts as a flux in ceramics and a stabilizer in glass manufacturing processes." },
      { area: "Construction Materials", detail: "Reinforces cement, concrete, and plaster for better strength and surface finish." },
      { area: "Agricultural Use", detail: "Functions as a soil amendment to adjust pH and improve nutrient uptake." }
    ],
    packing: "Customized Packing Options for International Logistics"
  },
  "malaysia-uncoated": {
    name: "Malaysia Uncoated Calcium Carbonate",
    id: "malaysia-uncoated",
    description: "Premium uncoated mineral from Malaysia.",
    images: ["https://lh3.googleusercontent.com/d/1WzOpBpeCBfAbcFKyu-rMbPQJD3X66nge"],
    specifications: [{ param: "Origin", value: "Malaysia" }],
    uses: ["General Industrial Filler"],
    packing: "Custom"
  },
  "malaysia-coated": {
    name: "Malaysia Coated Calcium Carbonate",
    id: "malaysia-coated",
    description: "Surface treated Malaysian mineral for high-performance applications.",
    images: ["https://lh3.googleusercontent.com/d/1WzOpBpeCBfAbcFKyu-rMbPQJD3X66nge"],
    specifications: [{ param: "Coated", value: "Yes" }],
    uses: ["Automotive Rubber", "Technical Textiles"],
    packing: "Custom"
  },
  "marbles-lumps": {
    name: "Marbles Lumps",
    id: "marbles-lumps",
    description: "Marble lumps are natural stone fragments known for their rich texture, smooth surface, and distinct coloration. At Honey Chemicals, we offer premium marble lumps sourced from our exclusive mining assets, including Honey Chemicals Mine Chem. These mines are among the best in India, with reserves of 5,74,218 m³ of white calcium carbonate for marble slabs and 15,89,464 tons of white calcium carbonate for high-quality calcium carbonate stone powder. We use cutting-edge grinding technology to ensure every batch meets the highest quality standards.",
    images: ["https://lh3.googleusercontent.com/d/1zCtin3DKpPiI1GScGiqv5PyW1PswecnA"],
    comparisonTable: {
      title: "Chemical Composition and Physical Characteristics",
      headers: ["Specification", "Typical Value / Description"],
      sideLabel: "Technical Specs",
      sections: [
        {
          label: "Chemical Composition",
          rows: [
            { param: "Calcium Carbonate (CaCO3)", values: ["95–99%"] },
            { param: "Magnesium Carbonate (MgCO3)", values: ["<1%"] },
            { param: "Silica (SiO2)", values: ["<1%"] }
          ]
        },
        {
          label: "Physical Features",
          rows: [
            { param: "Appearance", values: ["White, off-white, or light grey with visible veins."] },
            { param: "Texture", values: ["Smooth, dense, and crystalline."] },
            { param: "Size", values: ["Customizable, ranging from small to large lumps."] }
          ]
        }
      ]
    },
    features: [
      "Naturally Sourced: Mined from exclusive high-purity quarries.",
      "High Reserve Capacity: Backed by massive reserves ensuring long-term supply stability for bulk exporters.",
      "Superior Purity: Consistent CaCO3 levels of 95-99% suitable for high-grade stone powder production.",
      "Processed Excellence: Carefully mined, processed, and sorted for consistency in size and chemical composition."
    ],
    usesDescription: "Our marble lumps are used across industries for making marble powder, granules, and other processed marble products. With advanced technologies and sustainable practices, we ensure top-tier quality for all our customers.",
    uses: [
      { area: "Marble Powder", detail: "Primary raw material for manufacturing ultra-fine and micronized marble powders." },
      { area: "Refined Granules", detail: "Processed into various mesh-sized granules for specialized surface coatings." },
      { area: "Industrial Filler", detail: "Serves as a high-purity filler in construction and chemical manufacturing." }
    ],
    whyChooseTitle: "Why Choose Honey Chemicals?",
    whyChooseDescription: "As a leading exporter, Honey Chemicals provides unmatched reliability and mineral quality:",
    whyChoose: [
      "Exclusive Mine Ownership: Direct control over quality from the source to delivery.",
      "Massive Volume Capacity: Capable of handling large-scale export orders with over 1.5 million tons of reserves.",
      "Technical Precision: Every batch is tested for consistent chemical and physical integrity."
    ],
    packing: "Available in Loose Bulk Loading or 1 Ton Jumbo Bags"
  },
  "marble-blocks": {
    name: "Marble Blocks",
    id: "marble-blocks",
    description: "Marble blocks are large, solid chunks of natural marble, sourced directly from quarries. These blocks are the initial form of marble, which is later cut, polished, and processed into various finished products such as tiles, slabs, and sculptures. At Honey Chemicals, we offer premium-quality marble blocks that meet the diverse needs of industries ranging from construction to art and interior design. Our marble blocks are known for their purity, strength, and aesthetic appeal, making them an essential raw material for high-end applications in various sectors.",
    images: ["https://lh3.googleusercontent.com/d/1DhacyVSJnmZ5LYyXzIQftOGHx8QZNqQ_"],
    comparisonTable: {
      title: "Chemical Composition and Physical Characteristics",
      headers: ["Specification", "Typical Value / Description"],
      whyChooseDescription: "Honey Chemicals ensures that every marble block we provide is of the highest quality, with the following chemical composition and physical features:",
      sections: [
        {
          label: "CHEMICAL COMPOSITION",
          rows: [
            { param: "Calcium Carbonate (CaCO3)", values: ["95-99%"] },
            { param: "Magnesium Carbonate (MgCo3)", values: ["<1%"] },
            { param: "Silica (SiO2)", values: ["<1%"] }
          ]
        },
        {
          label: "PHYSICAL FEATURES",
          rows: [
            { param: "Appearance", values: ["Predominantly white, cream, or subtle shades of light grey, with intricate veining patterns and natural designs."] },
            { param: "Texture", values: ["Smooth, dense, and crystalline in structure, providing a solid foundation for processing into tiles, slabs, and customized pieces."] },
            { param: "Size", values: ["Available in various block sizes, customizable according to client needs, ensuring the right fit for large-scale or precision projects."] }
          ]
        }
      ]
    },
    featuresTitle: "Key Features of Our Marble Blocks",
    featuresDescription: "At Honey Chemicals, we take immense pride in delivering premium marble blocks. Here are some of the key features that set our products apart:",
    features: [
      "High Purity and Durability: Our marble blocks are composed of high-grade calcium carbonate (CaCO3), which ensures exceptional durability, strength, and resistance to wear.",
      "Aesthetic Appeal: The natural veining patterns and subtle color variations make our marble blocks highly sought after for both functional and decorative purposes.",
      "Uniformity in Size and Texture: Every block undergoes strict quality checks to ensure that it meets the required size specifications and texture uniformity.",
      "Ease of Cutting and Shaping: Thanks to their crystalline structure, our marble blocks are easy to process, ensuring minimal wastage during cutting, shaping, and polishing.",
      "Eco-Friendly Sourcing: We employ sustainable mining practices, ensuring that our marble blocks are ethically sourced with minimal environmental impact."
    ],
    whyChooseTitle: "Why Choose Honey Chemicals for Marble Blocks?",
    whyChooseDescription: "Honey Chemicals is a leading supplier of high-quality marble blocks, trusted by clients across construction, art, landscaping, and interior design sectors. Here's why you should choose us:",
    whyChoose: [
      "Exclusive Mines: We own and operate premier marble mines—ensuring direct access to top-tier marble blocks with unmatched purity and quality.",
      "High-Quality Products: We offer marble blocks with superior purity, strength, and aesthetic appeal, perfect for a wide range of applications.",
      "Expertise and Experience: With years of experience in the marble industry, we deliver products that meet the exact needs of each client.",
      "Customization: We provide customized block sizes, shapes, and finishes to ensure your project is completed to the highest standards.",
      "Sustainable Practices: Our marble is sourced responsibly, ensuring minimal environmental impact and adherence to eco-friendly practices.",
      "On-Time Delivery: Our logistics ensure that large orders of marble blocks are delivered on schedule, so your projects proceed smoothly."
    ],
    assuranceTitle: "How Honey Chemicals Ensures the Best Marble Blocks",
    assuranceDescription: "At Honey Chemicals, we maintain a rigorous process to ensure that our marble blocks meet the highest quality standards. Here's how we guarantee top-quality marble blocks:",
    assurance: [
      "Sourcing Premium Marble: We hand-select marble stones directly from our certified mines—ensuring that only the finest blocks are extracted and processed.",
      "Advanced Processing Techniques: Our state-of-the-art machinery ensures that the marble blocks are processed with precision, delivering consistent size, uniform texture, and optimal yield with minimal waste.",
      "Stringent Quality Control: Each marble block undergoes thorough inspection to ensure it meets chemical composition, size specifications, color consistency, and strength requirements.",
      "Customized Sizing: We offer tailored block sizes to fit specific industrial, artistic, and architectural needs, whether it's large blocks for construction or smaller pieces for sculptures.",
      "Timely Delivery: We understand the importance of timely delivery. Our efficient logistics system ensures that marble blocks are delivered on schedule and in optimal condition."
    ],
    uses: [
      { area: "Architectural Slabs", detail: "Primary raw material for cutting premium tiles and massive slabs for luxury interiors." },
      { area: "Sculptural Art", detail: "Preferred by master artists for its crystalline structure and ability to hold intricate details." },
      { area: "Interior Design", detail: "Used for custom furniture, pillars, and bespoke natural stone features in prestige projects." }
    ],
    packing: "Securely Lash-on-Truck & Flatbed Trailers for Heavy-Duty Transport"
  },
  "marble-chips": {
    name: "Marble Chips",
    id: "marble-chips",
    description: "Premium Marble Chips of supreme whiteness and superior durability, sourced directly from certified quarries. Available in multiple pre-sorted size fractions, our white marble chips serve as a fundamental raw material for terrazzo flooring, modern interior design, landscaping, and high-end architectural exposed aggregates.",
    images: ["https://lh3.googleusercontent.com/d/1z2iHy-q20jeYskcwc_vatuTrUvaraTND"],
    comparisonTable: {
      title: "Chemical Composition and Physical Characteristics",
      headers: ["Specification", "Typical Value / Description"],
      sideLabel: "Technical Specs",
      sections: [
        {
          label: "Chemical Composition",
          rows: [
            { param: "Calcium Carbonate (CaCO3)", values: ["95–99%"] },
            { param: "Magnesium Carbonate (MgCO3)", values: ["<1%"] },
            { param: "Silica (SiO2)", values: ["<1%"] }
          ]
        },
        {
          label: "Physical Features",
          rows: [
            { param: "Appearance", values: ["Pure white, crystalline, sparkling granules."] },
            { param: "Hardness", values: ["3-4 Mohs Scale"] },
            { param: "Available Sizing (Sieve)", values: ["1-3mm, 3-6mm, 6-9mm, 9-12mm (Customizable)"] }
          ]
        }
      ]
    },
    featuresTitle: "Key Features of Our Premium Marble Chips",
    featuresDescription: "Honey Chemicals manufactures marble chips to meet absolute international decorative and construction standards:",
    features: [
      "Naturally Sparkling Crystalline: Reflective minerals that retain high whiteness over decades.",
      "Weather-Resistant Durability: Chemically inert, resisting UV fading, acid rain, and fungal disfigurement.",
      "Sieve Precision Calibration: Multi-stage mechanical sieve sorting delivers highly uniform size fractions.",
      "Eco-Friendly Natural Mineral: 100% natural, non-toxic stone product suitable for sustainable construction."
    ],
    whyChooseTitle: "Why Partner with Honey Chemicals for Marble Chips?",
    whyChooseDescription: "As the primary mining and processing partner in India, Honey Chemicals guarantees volume capacity and premium quality:",
    whyChoose: [
      "Direct Mining Ownership: We extract and crush from our premier mines, ensuring strict quality control and zero cross-contamination.",
      "Broad Custom Mesh: Customized grading and size fractions prepared precisely as per industrial specifications.",
      "High Export Volumes: We are equipped to handle bulk international export containers and large-scale localized shipments."
    ],
    usesTitle: "Broad Applications of Our Premium Marble Chips",
    usesDescription: "Due to their high structural integrity, unique aesthetic texture, and color consistency, our Marble Chips are preferred for:",
    uses: [
      { area: "Terrazzo & Resin Flooring", detail: "Provides a highly decorative, hard-wearing aggregate for seamless polymer terrazzo and polished tiles." },
      { area: "Modern Architectural Landscaping", detail: "Ideal for premium garden ground covers, garden paths, decorative planters, and water features." },
      { area: "Exposed Aggregate Concrete", detail: "Used as a premium facing stone for exposed panels, swimming pool surrounds, and wash-concrete walls." }
    ],
    packing: "Available in 25kgs, 50kgs standard bags and 1 Ton Jumbo Bags"
  },
  "grey-dolomite": {
    name: "Grey Dolomite Powder",
    id: "grey-dolomite",
    description: "Honey Chemicals provides premier industrial-grade Grey Dolomite Powder sourced from certified mineral quarries. Rich in optimal magnesium and calcium carbonate, our grey dolomite is specifically processed to deliver robust density, outstanding thermal stability, and maximum cost efficiency for heavy industries, including steel, glass, and agriculture.",
    images: ["https://lh3.googleusercontent.com/d/1M8__CnPpxU3CV2tKwE0wB3X8HlXvP7Vu"],
    comparisonTable: {
      title: "Chemical Composition and Physical Specifications",
      headers: ["Specification", "Typical Value / Description"],
      sideLabel: "Technical Specs",
      sections: [
        {
          label: "Chemical Analysis",
          rows: [
            { param: "Magnesium Oxide (MgO)", values: ["20.73%"] },
            { param: "Calcium Oxide (CaO)", values: ["30.81%"] },
            { param: "Silicon Dioxide (SiO2)", values: ["1.19%"] },
            { param: "Aluminium Oxide (Al2O3)", values: ["0.38%"] },
            { param: "Iron Oxide (Fe2O3)", values: ["0.08%"] },
            { param: "Titanium Dioxide (TiO2)", values: ["Trace"] },
            { param: "Potassium Oxide (K2O)", values: ["0.09%"] },
            { param: "Sodium Oxide (Na2O)", values: ["0.51%"] },
            { param: "Loss on Ignition (LOI)", values: ["45.87%"] }
          ]
        },
        {
          label: "Physical Properties",
          rows: [
            { param: "Whiteness", values: ["88.21%"] },
            { param: "L* (Brightness)", values: ["95.19"] },
            { param: "a*", values: ["-0.03"] },
            { param: "b*", values: ["4.87"] },
            { param: "Shrinkage", values: ["1.45%"] },
            { param: "Loss on Ignition (Physical)", values: ["46.86%"] },
            { param: "Residue (350 # mesh)", values: ["0.48%"] },
            { param: "Firing Temperature", values: ["1191°C - 1195°C"] },
            { param: "Firing Cycle", values: ["48 Min."] },
            { param: "Hardness", values: ["3.5 - 4 Mohs Scale"] },
            { param: "Specific Gravity", values: ["2.84"] }
          ]
        }
      ]
    },
    featuresTitle: "Key Features of Our Grey Dolomite Powder",
    featuresDescription: "Naturally optimized composition tailored specifically for heavy industrial applications:",
    features: [
      "Excellent Refractory Support: High MgO content enhances thermal resistance in high-temperature blast furnaces.",
      "Cost-Efficient Heavy Filler: Increases product density and mechanical strength at a reduced commodity price.",
      "High Acid-Neutralizing Capacity: Highly effective as a slow-release soil conditioner and chemical buffer.",
      "Consistent Sieve Fractions: Micronized with narrow top-cuts to ensure perfect dispersion during bulk batching."
    ],
    whyChooseTitle: "Why Partner with Honey Chemicals for Grey Dolomite Powder?",
    whyChooseDescription: "Honey Chemicals guarantees consistent supply channels, stringent quality testing, and robust logistic support:",
    whyChoose: [
      "Direct Quarry Access: Extracted and milled under strict operational control, guaranteeing zero external organic contamination.",
      "Highly Scalable Production: Our modern processing plants are designed to operate high-output campaigns for large-scale steel and metallurgy contracts.",
      "Global Container Dispatch: Seamless bulk sea and land shipments configured to match fast-paced industrial lead-times."
    ],
    usesTitle: "Broad Applications of Grey Dolomite Powder",
    usesDescription: "Because of its unique chemical composition and low brightness premium properties, our Grey Dolomite is ideal for:",
    uses: [
      { area: "Steel Refining & Fluxing", detail: "Acts as a fluxing agent to neutralize acidic slags, protecting dolomite-based refractory linings in ladles." },
      { area: "Agricultural Fertilisers", detail: "Provides secondary nutrients (Mg and Ca) to correct pH balances, improving crop yields and nutrient intake." },
      { area: "Glass & Coal Tar Asphalt", detail: "A vital stabilizer in building commercial container glass, and as a filler for structural asphalt roofing sheets." }
    ],
    packing: "Available in 25kgs, 50kgs bags and 1-1.2 Ton heavy jumbo bags"
  },
  "calcium-carbonate": {
    name: "Calcium Carbonate",
    id: "calcium-carbonate",
    description: "Honey Chemicals supplies premium industrial grade Calcium Carbonate of high mineral purity, sourced from selective high-purity crystalline calcitic quarries. It serves as a vital raw material for compound production, paper fillers, coatings, PVC formulations, rubber fabrication, and chemical synthesis. Our advanced milling operations guarantee consistent particle size distribution, outstanding geological whiteness, and optimal chemical reactivity.",
    images: ["https://lh3.googleusercontent.com/d/15cPGXC3BUAWXtBX7HjaF5PGm9HoZr7G_"],
    comparisonTable: {
      title: "Chemical Composition and Physical Specifications",
      headers: ["Specification", "Typical Value / Description"],
      sideLabel: "Technical Specs",
      sections: [
        {
          label: "Chemical Composition",
          rows: [
            { param: "Calcium Carbonate (CaCO3)", values: ["> 98.2%"] },
            { param: "Silica (SiO2)", values: ["< 0.15%"] },
            { param: "Magnesium Oxide (MgO)", values: ["< 0.40%"] },
            { param: "Iron Oxide (Fe2O3)", values: ["< 0.05%"] }
          ]
        },
        {
          label: "Physical Characteristics",
          rows: [
            { param: "Appearance", values: ["Super fine white crystalline dry powder."] },
            { param: "Whiteness / Index", values: ["96.5% - 98.0%"] },
            { param: "Hardness", values: ["3.0 Mohs Scale"] },
            { param: "Specific Gravity", values: ["2.71"] },
            { param: "Moisture Content", values: ["< 0.10%"] }
          ]
        }
      ]
    },
    featuresTitle: "Key Features of Calcium Carbonate",
    featuresDescription: "Engineered for excellence with high performance characteristics:",
    features: [
      "Ultra-High Purity CaCO3: Sourced directly from elite mineral structures for zero contamination.",
      "Exceptional Whiteness & Brightness: Offers natural pigment extension and pristine finish in coatings/polymers.",
      "Low Silica Content: Extends the life and lowers wear of processing machinery and extrusion screws.",
      "Controlled Micro-Fractions: Milled down to exact client sieve curves for premium dispersion properties."
    ],
    whyChooseTitle: "Why Partner with Honey Chemicals for Calcium Carbonate?",
    whyChooseDescription: "Our technical integration and supply excellence make us a leading global supplier:",
    whyChoose: [
      "Secured Quarry Deposits: Full quality assurance from excavation through automated refining streams.",
      "Unmatched Particle Control: Utilizing German-engineered air-classifiers to deliver pristine top-cuts.",
      "Flexible Packaging Formats: Available across multiple bag sizes with fast lead-times."
    ],
    usesTitle: "Broad Applications of Calcium Carbonate",
    usesDescription: "Because of its superb mineral composition and high whiteness, our Calcium Carbonate is ideal for:",
    uses: [
      { area: "PVC & Plastics compounding", detail: "Enhances impact resistance, tensile strength, and structural dimensional stability in rigid profiles and pipes." },
      { area: "Paints & Premium Coatings", detail: "Acts as a primary TiO2 pigment extender, improving opacity, dry hide, and coating durability." },
      { area: "Paper & Cardboard", detail: "Improves overall paper brightness, surface smoothness, and opacity while lowering raw material production costs." }
    ],
    packing: "Available in 25kgs, 50kgs standard bags and 1 Ton heavy duty jumbo packing"
  }
};

const REMOVED_PRODUCTS = new Set([
  "indigenous-calcium-carbonate",
  "vietnam-calcium-carbonate",
  "malaysia-calcium-carbonate",
  "egypt-calcium-carbonate",
  "marble-blocks",
  "indigenous-uncoated",
  "indigenous-coated",
  "vietnam-uncoated",
  "vietnam-coated",
  "malaysia-uncoated",
  "malaysia-coated",
  "egypt-uncoated",
  "egypt-coated",
  "dolomite-uncoated"
]);

const SUB_PRODUCT_REDIRECTS: Record<string, string> = {
  "dolomite-coated": "dolomite"
};

const ProductDetail = () => {
  const { id } = useParams();

  if (id && REMOVED_PRODUCTS.has(id)) {
    return <Navigate to="/" replace />;
  }

  if (id && SUB_PRODUCT_REDIRECTS[id]) {
    return <Navigate to={`/product/${SUB_PRODUCT_REDIRECTS[id]}`} replace />;
  }

  const product = PRODUCT_DATA[id || ""] || PRODUCT_DATA.calcite;

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="bg-slate-900 py-12 mb-12">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/#products" className="inline-flex items-center text-red-600 hover:text-red-500 font-bold mb-8 transition-colors uppercase text-xs tracking-widest">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
          </Link>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center mb-6"
          >
            <span className="text-slate-400 font-bold uppercase tracking-[0.5em] text-[10px]">Product</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-white uppercase italic leading-none text-center"
          >
            EXPLORE OUR <span className="text-red-600">{product.name}</span>
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <p className="text-slate-600 leading-relaxed text-lg font-medium">
            {product.description}
          </p>
        </motion.div>

        {(product.comparisonTable || product.comparisonTables) ? (
          <div className="mb-24">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Product Image Column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-full lg:w-[35%] shrink-0 sticky top-32"
              >
                <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white aspect-[4/5] lg:aspect-auto">
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    className="w-full h-full object-cover lg:max-h-[600px]" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                </div>
              </motion.div>

              {/* Datasheet Column */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-full lg:grow space-y-12"
              >
                {(product.comparisonTable || product.comparisonTables) && (
                  <div className="space-y-8">
                    {(() => {
                      const tables = product.comparisonTables || [product.comparisonTable];
                      return tables.map((table: any, tableIdx: number) => (
                        <div key={tableIdx}>
                          {table.title && (
                            <div className="mb-6">
                              <h2 className="text-xl md:text-2xl font-black text-slate-800 uppercase italic leading-none border-l-4 border-red-600 pl-4">
                                {table.title}
                              </h2>
                            </div>
                          )}
                          
                          <div className="overflow-x-auto rounded-xl border border-slate-300 shadow-2xl bg-white">
                            <table className="w-full text-center border-collapse">
                              <thead>
                                <tr className="bg-[#BC2E3D] text-white border-b border-white/20">
                                  {table.headers.map((header: string, i: number) => (
                                    <th 
                                      key={i} 
                                      colSpan={i === 0 && (table.sections || table.sideLabel) ? 2 : 1}
                                      className={`py-4 px-4 font-bold border-r border-white/20 last:border-r-0 text-xs md:text-base uppercase tracking-tight leading-tight ${i === 0 ? 'text-left pl-6' : 'text-center'}`}
                                    >
                                      {header}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="relative">
                                {(table.sections ? table.sections : [{ label: table.sideLabel, rows: table.rows }]).map((section: any, sectionIdx: number) => (
                                  <React.Fragment key={sectionIdx}>
                                    {section.rows.map((row: any, idx: number) => (
                                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-red-50/20"}>
                                        {idx === 0 && section.label && (
                                          <td 
                                            rowSpan={section.rows.length} 
                                            className="w-16 bg-white border-r border-slate-300 p-0 relative min-w-[4.5rem]"
                                          >
                                            <div className="absolute inset-0 flex items-center justify-center min-h-[220px]">
                                              <span className="rotate-90 whitespace-nowrap font-bold text-slate-400 text-[11px] md:text-xs uppercase tracking-[0.1em] block origin-center">
                                                {section.label}
                                              </span>
                                            </div>
                                          </td>
                                        )}
                                        
                                        <td className="py-4 px-4 font-bold text-slate-800 border-r border-slate-300 text-right text-xs md:text-base bg-white align-top">
                                          {row.param}
                                        </td>
                                        {row.values.map((val: string, i: number) => (
                                          <td key={i} className={`py-4 px-3 text-slate-700 border-r border-slate-300 last:border-r-0 font-medium text-xs md:text-base ${val === "" ? "bg-slate-50" : ""}`}>
                                            {val}
                                          </td>
                                        ))}
                                      </tr>
                                    ))}
                                  </React.Fragment>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      ));
                    })()}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        ) : (
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row gap-6 items-center justify-center relative"
            >
              {product.images.map((img: string, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full md:w-1/3 aspect-square relative overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white"
                >
                  <img src={img} alt={`Product ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Left Column: Headings & Content */}
          <div className={`space-y-16 ${(product.specifications && product.specifications.length > 0) ? "" : "lg:col-span-2"}`}>
            {product.specifications && product.specifications.length > 0 && (
              <div>
                <div className="flex items-center mb-6">
                  <h2 className="text-xl font-black text-red-700 uppercase border-b-2 border-slate-900 pb-1">Specifications of {product.name}</h2>
                </div>
              </div>
            )}

            {product.uses && product.uses.length > 0 && (
              <div>
                <div className="flex items-center mb-6">
                  <h2 className="text-xl font-black text-red-700 uppercase border-b-2 border-slate-900 pb-1">
                    {product.usesTitle || `Applications of ${product.name}`}
                  </h2>
                </div>
                {product.usesDescription && (
                  <p className="text-xs font-bold text-slate-500 uppercase italic mb-6 leading-relaxed">
                    {product.usesDescription}
                  </p>
                )}
                <ul className="space-y-4">
                  {product.uses.map((use: any, i: number) => (
                    <li key={i} className="flex items-start group">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 mr-4 shrink-0 shadow-[0_0_8px_rgba(220,38,38,0.5)]"></div>
                      <div className="space-y-1">
                        {typeof use === 'string' ? (
                          <p className="text-[11px] font-bold leading-tight uppercase text-slate-800 tracking-tight">
                            {use}
                          </p>
                        ) : (
                          <>
                            <span className="text-sm font-black uppercase text-slate-900 block tracking-tight">
                              {use.area}:
                            </span>
                            <p className="text-base font-medium text-slate-600 leading-relaxed">
                              {use.detail}
                            </p>
                          </>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.whyChoose && (
              <div className="bg-slate-900 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-3xl rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <h2 className="text-xl font-black text-white uppercase border-b-2 border-red-600 pb-1">
                      {product.whyChooseTitle || "Why Choose Honey Chemicals?"}
                    </h2>
                  </div>
                  {product.whyChooseDescription && (
                    <p className="text-[12px] text-slate-300 font-bold mb-8 leading-relaxed italic">
                      {product.whyChooseDescription}
                    </p>
                  )}
                  <div className="space-y-6">
                    {product.whyChoose.map((item: any, i: number) => {
                      if (typeof item === 'string') {
                        const [title, ...detailArr] = item.split(':');
                        const detail = detailArr.join(':');
                        return (
                          <div key={i} className="space-y-1">
                            <h4 className="text-[12px] font-black text-red-500 uppercase tracking-wider mb-1">{title}</h4>
                            {detail && (
                              <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                                {detail.trim()}
                              </p>
                            )}
                          </div>
                        );
                      }
                      return (
                        <div key={i} className="space-y-1">
                          <h4 className="text-[12px] font-black text-red-500 uppercase tracking-wider mb-1">{item.title}</h4>
                          <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                            {item.detail}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {product.features && (
              <div>
                <div className="flex items-center mb-6">
                  <h2 className="text-xl font-black text-red-700 uppercase border-b-2 border-slate-900 pb-1">
                    {product.featuresTitle || `Key Features of ${product.name}`}
                  </h2>
                </div>
                {product.featuresDescription && (
                  <p className="text-[11px] font-bold text-slate-500 uppercase italic mb-6 leading-relaxed">
                    {product.featuresDescription}
                  </p>
                )}
                <ul className="grid grid-cols-1 gap-4">
                  {product.features.map((feature: string, i: number) => {
                    const [title, ...detailArr] = feature.split(':');
                    const detail = detailArr.join(':');
                    return (
                      <li key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start group hover:border-red-600 hover:shadow-md transition-all duration-300">
                        <div className="w-8 h-8 rounded-full bg-red-50 text-red-700 flex items-center justify-center mr-4 mt-0.5 shrink-0 group-hover:bg-red-700 group-hover:text-white transition-colors">
                          <Lightbulb className="w-4 h-4" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-[12px] font-black text-slate-900 uppercase tracking-tight leading-none group-hover:text-red-700 transition-colors">
                            {title}
                          </p>
                          {detail && (
                            <p className="text-[11px] font-medium text-slate-500 leading-relaxed uppercase">
                              {detail.trim()}
                            </p>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {product.assurance && (
              <div>
                <div className="flex items-center mb-6">
                  <h2 className="text-xl font-black text-red-700 uppercase border-b-2 border-slate-900 pb-1">
                    {product.assuranceTitle || `Quality Assurance of ${product.name}`}
                  </h2>
                </div>
                {product.assuranceDescription && (
                  <p className="text-[11px] font-bold text-slate-500 uppercase italic mb-6 leading-relaxed">
                    {product.assuranceDescription}
                  </p>
                )}
                <ul className="grid grid-cols-1 gap-4">
                  {product.assurance.map((item: string, i: number) => {
                    const [title, ...detailArr] = item.split(':');
                    const detail = detailArr.join(':');
                    return (
                      <li key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start group hover:border-red-600 hover:shadow-md transition-all duration-300">
                        <div className="w-8 h-8 rounded-full bg-red-50 text-red-700 flex items-center justify-center mr-4 mt-0.5 shrink-0 group-hover:bg-red-700 group-hover:text-white transition-colors">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-[12px] font-black text-slate-900 uppercase tracking-tight leading-none group-hover:text-red-700 transition-colors">
                            {title}
                          </p>
                          {detail && (
                            <p className="text-[11px] font-medium text-slate-500 leading-relaxed uppercase">
                              {detail.trim()}
                            </p>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            <div>
              <div className="flex items-center mb-6">
                <h2 className="text-xl font-black text-red-700 uppercase border-b-2 border-slate-900 pb-1">Packing of {product.name}</h2>
              </div>
              <p className="text-slate-900 font-bold text-xs uppercase italic">
                {product.packing}
              </p>
            </div>
          </div>

          {/* Right Column: Table */}
          {product.specifications && product.specifications.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-2xl bg-white">
                <table className="w-full text-left">
                  <tbody>
                    {product.specifications.map((spec: any, idx: number) => (
                      <tr key={spec.param} className={idx % 2 === 0 ? "bg-slate-50/30" : "bg-white"}>
                        <td className="py-2 px-6 font-black text-slate-900 border-b border-slate-100 uppercase italic text-[10px] md:text-xs">{spec.param}</td>
                        <td className="py-2 px-6 text-slate-500 border-b border-slate-100 font-bold text-[10px] md:text-xs">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
