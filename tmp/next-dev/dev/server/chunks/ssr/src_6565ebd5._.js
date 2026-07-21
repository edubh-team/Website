module.exports = [
"[project]/src/data/brochures.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "brochuresByCourseId",
    ()=>brochuresByCourseId
]);
const item = (title, file)=>({
        title,
        file
    });
const lpuAll = item("LPU Online All Programs Prospectus 2025", "/brochures/lpu/all-programs-prospectus-2025.pdf");
const arkaAll = item("ARKA JAIN Online Programs Prospectus", "/brochures/arka-jain/all-programs-prospectus.pdf");
const dpuAll = item("DPU Online All Programs Prospectus", "/brochures/dpu/all-programs-prospectus.pdf");
const smuAll = item("Sikkim Manipal Combined Brochure", "/brochures/manipal/smu-combined-brochure.pdf");
const shooliniAll = item("Shoolini Online Brand & Programs Brochure 2026", "/brochures/shoolini/brand-programs-brochure-2026.pdf");
const arkaCourseIds = [
    "aju-bba",
    "aju-bca",
    "aju-bcom",
    "aju-mba",
    "aju-mca"
];
const dpuCourseIds = [
    "dpu-bba",
    "dpu-bba-marketing",
    "dpu-bba-finance",
    "dpu-bba-retail",
    "dpu-bba-ecommerce",
    "dpu-bba-logistics",
    "dpu-bba-hr",
    "dpu-bba-it",
    "dpu-bba-international-business",
    "dpu-bba-bfsi",
    "dpu-mba",
    "dpu-mba-marketing",
    "dpu-mba-fintech",
    "dpu-mba-operations",
    "dpu-mba-agribusiness",
    "dpu-mba-blockchain",
    "dpu-mba-project",
    "dpu-mba-finance",
    "dpu-mba-hr",
    "dpu-mba-it",
    "dpu-mba-business-analytics",
    "dpu-mba-international-business",
    "dpu-mba-ai-ml",
    "dpu-mba-digital-marketing",
    "dpu-mba-logistics",
    "dpu-mba-healthcare",
    "dpu-mca",
    "dpu-mca-ai-ml",
    "dpu-mca-blockchain",
    "dpu-mca-business-analytics",
    "dpu-mca-digital-marketing",
    "dpu-mca-fintech",
    "dpu-cert-digital-marketing",
    "dpu-cert-healthcare"
];
const shooliniCourseIds = [
    "shoolini-bba",
    "shoolini-bca",
    "shoolini-bcom-hons",
    "shoolini-ba-distance",
    "shoolini-mba",
    "shoolini-mba-premium",
    "shoolini-mca",
    "shoolini-msc-data-science",
    "shoolini-ma-english-literature",
    "shoolini-ma-journalism-mass-communication"
];
const brochuresByCourseId = {
    ...Object.fromEntries(arkaCourseIds.map((id)=>[
            id,
            [
                arkaAll
            ]
        ])),
    ...Object.fromEntries(dpuCourseIds.map((id)=>[
            id,
            [
                dpuAll
            ]
        ])),
    ...Object.fromEntries(shooliniCourseIds.map((id)=>[
            id,
            [
                shooliniAll
            ]
        ])),
    "lpu-bba": [
        item("BBA Program Brochure", "/brochures/lpu/bba.pdf"),
        lpuAll
    ],
    "lpu-bca": [
        item("BCA Program Brochure", "/brochures/lpu/bca.pdf"),
        lpuAll
    ],
    "lpu-dca": [
        item("DCA Program Brochure", "/brochures/lpu/dca.pdf"),
        lpuAll
    ],
    "lpu-ma": [
        item("MA Program Brochure", "/brochures/lpu/ma.pdf"),
        lpuAll
    ],
    "lpu-ma-history": [
        item("MA History Program Brochure", "/brochures/lpu/ma-history.pdf")
    ],
    "lpu-ma-sociology": [
        item("MA Sociology Program Brochure", "/brochures/lpu/ma-sociology.pdf")
    ],
    "lpu-ma-political-science": [
        item("MA Political Science Program Brochure", "/brochures/lpu/ma-political-science.pdf")
    ],
    "lpu-msc-economics": [
        item("MSc Economics Program Brochure", "/brochures/lpu/msc-economics.pdf")
    ],
    "lpu-msc-mathematics": [
        item("MSc Mathematics Program Brochure", "/brochures/lpu/msc-mathematics.pdf")
    ],
    "lpu-mba": [
        item("MBA Program Brochure", "/brochures/lpu/mba.pdf"),
        lpuAll
    ],
    "lpu-mba-hr": [
        item("MBA Human Resource Management Brochure", "/brochures/lpu/mba-human-resource-management.pdf")
    ],
    "lpu-mba-finance": [
        item("MBA Finance Brochure", "/brochures/lpu/mba-finance.pdf")
    ],
    "lpu-mba-marketing": [
        item("MBA Marketing Brochure", "/brochures/lpu/mba-marketing.pdf")
    ],
    "lpu-mba-operations": [
        item("MBA Operations Management Brochure", "/brochures/lpu/mba-operations-management.pdf")
    ],
    "lpu-mba-business-analytics": [
        item("MBA Program Brochure", "/brochures/lpu/mba.pdf"),
        lpuAll
    ],
    "lpu-mba-digital-marketing": [
        item("MBA Digital Marketing Brochure", "/brochures/lpu/mba-digital-marketing.pdf")
    ],
    "lpu-mba-data-science": [
        item("MBA Data Science Brochure", "/brochures/lpu/mba-data-science.pdf")
    ],
    "lpu-mba-information-technology": [
        item("MBA Information Technology Brochure", "/brochures/lpu/mba-information-technology.pdf")
    ],
    "lpu-mba-international-business": [
        item("MBA International Business Brochure", "/brochures/lpu/mba-international-business.pdf")
    ],
    "lpu-mba-healthcare": [
        item("MBA Hospital and Healthcare Management Brochure", "/brochures/lpu/mba-hospital-healthcare.pdf")
    ],
    "lpu-mba-logistics": [
        item("MBA Logistics and Supply Chain Brochure", "/brochures/lpu/mba-logistics-supply-chain.pdf")
    ],
    "lpu-mba-banking": [
        item("MBA Banking and Financial Services Brochure", "/brochures/lpu/mba-banking-financial-services.pdf")
    ],
    "lpu-mca": [
        lpuAll
    ],
    "lpu-mca-ml-ai": [
        item("MCA Machine Learning and AI Brochure", "/brochures/lpu/mca-machine-learning-ai.pdf")
    ],
    "lpu-mca-data-science": [
        lpuAll
    ],
    "lpu-mca-cyber-security": [
        item("MCA Cyber Security Brochure", "/brochures/lpu/mca-cyber-security.pdf")
    ],
    "lpu-mca-full-stack": [
        item("MCA Full Stack Development Brochure", "/brochures/lpu/mca-full-stack-development.pdf")
    ],
    "lpu-mca-ar-vr": [
        item("MCA AR/VR Game Development Brochure", "/brochures/lpu/mca-ar-vr.pdf")
    ],
    "muj-bca": [
        item("MUJ BCA Program Brochure", "/brochures/manipal/muj-bca.pdf")
    ],
    "muj-bcom": [
        item("MUJ BCom Program Brochure", "/brochures/manipal/muj-bcom.pdf")
    ],
    "muj-ma-economics": [
        item("MUJ MA Economics Program Brochure", "/brochures/manipal/muj-ma-economics.pdf")
    ],
    "muj-majmc": [
        item("MUJ MA Journalism and Mass Communication Brochure", "/brochures/manipal/muj-majmc.pdf")
    ],
    "muj-mba": [
        item("MUJ MBA Program Brochure", "/brochures/manipal/muj-mba.pdf")
    ],
    "muj-mca": [
        item("MUJ MCA Program Brochure", "/brochures/manipal/muj-mca.pdf")
    ],
    "muj-mcom": [
        item("MUJ MCom Program Brochure", "/brochures/manipal/muj-mcom.pdf")
    ],
    "muj-msc-mathematics": [
        item("MUJ MSc Mathematics Program Brochure", "/brochures/manipal/muj-msc-mathematics.pdf")
    ],
    "smu-ba": [
        item("SMU BA Program Brochure", "/brochures/manipal/smu-ba.pdf"),
        item("SMU BA Program Brochure - Copy", "/brochures/manipal/smu-ba-copy.pdf"),
        smuAll
    ],
    "smu-bcom": [
        item("SMU BCom Program Brochure", "/brochures/manipal/smu-bcom.pdf"),
        smuAll
    ],
    "smu-ma": [
        item("SMU MA Program Brochure", "/brochures/manipal/smu-ma.pdf"),
        item("SMU MA Program Brochure - Copy", "/brochures/manipal/smu-ma-copy.pdf"),
        smuAll
    ],
    "smu-ma-english": [
        item("SMU MA English Program Brochure", "/brochures/manipal/smu-ma-english.pdf"),
        smuAll
    ],
    "smu-ma-political-science": [
        item("SMU MA Political Science Brochure", "/brochures/manipal/smu-ma-political-science.pdf"),
        item("SMU MA Political Science Brochure - Copy", "/brochures/manipal/smu-ma-political-science-copy.pdf"),
        smuAll
    ],
    "smu-ma-sociology": [
        item("SMU MA Sociology Program Brochure", "/brochures/manipal/smu-ma-sociology.pdf"),
        item("SMU MA Sociology Program Brochure - Copy", "/brochures/manipal/smu-ma-sociology-copy.pdf"),
        smuAll
    ],
    "smu-mba": [
        item("SMU MBA Program Brochure", "/brochures/manipal/smu-mba.pdf"),
        smuAll
    ],
    "smu-mca": [
        item("SMU MCA Program Brochure", "/brochures/manipal/smu-mca.pdf"),
        item("SMU MCA Program Brochure - Copy", "/brochures/manipal/smu-mca-copy.pdf"),
        smuAll
    ],
    "smu-mcom": [
        item("SMU MCom Program Brochure", "/brochures/manipal/smu-mcom.pdf"),
        item("SMU MCom Program Brochure - Copy", "/brochures/manipal/smu-mcom-copy.pdf"),
        smuAll
    ],
    "mca-manipal": [
        item("MUJ MCA Program Brochure", "/brochures/manipal/muj-mca.pdf")
    ],
    "manipal-pg-mba-gen": [
        item("MUJ MBA Program Brochure", "/brochures/manipal/muj-mba.pdf")
    ],
    "manipal-ug-bca-gen": [
        item("MUJ BCA Program Brochure", "/brochures/manipal/muj-bca.pdf")
    ],
    "manipal-pg-mca-gen": [
        item("MUJ MCA Program Brochure", "/brochures/manipal/muj-mca.pdf")
    ],
    "manipal-ug-bcom-gen": [
        item("MUJ BCom Program Brochure", "/brochures/manipal/muj-bcom.pdf")
    ],
    "manipal-pg-ma-economics": [
        item("MUJ MA Economics Program Brochure", "/brochures/manipal/muj-ma-economics.pdf")
    ],
    "manipal-pg-mcom-gen": [
        item("MUJ MCom Program Brochure", "/brochures/manipal/muj-mcom.pdf")
    ],
    "manipal-pg-ma-journalism": [
        item("MUJ MA Journalism and Mass Communication Brochure", "/brochures/manipal/muj-majmc.pdf")
    ],
    "manipal-pg-ma-english": [
        item("SMU MA English Program Brochure", "/brochures/manipal/smu-ma-english.pdf")
    ],
    "manipal-pg-ma-political-science": [
        item("SMU MA Political Science Brochure", "/brochures/manipal/smu-ma-political-science.pdf")
    ],
    "manipal-pg-ma-sociology": [
        item("SMU MA Sociology Program Brochure", "/brochures/manipal/smu-ma-sociology.pdf")
    ]
};
}),
"[project]/src/data/courses.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "courses",
    ()=>courses,
    "universityNames",
    ()=>universityNames
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$brochures$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/brochures.ts [app-ssr] (ecmascript)");
;
const universityNames = [
    "Lovely Professional University Online",
    "Manipal University",
    "ARKA JAIN University Online",
    "Dr. D. Y. Patil Vidyapeeth Online",
    "Amity University",
    "Jain University",
    "Sharda University Online",
    "Shoolini University Online"
];
const make = (university, programs)=>programs.map((program)=>({
            ...program,
            university,
            description: `${program.title} is a flexible online program from ${university}, designed to build practical, career-relevant knowledge while allowing learners to study from anywhere.`,
            brochures: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$brochures$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brochuresByCourseId"][program.id] ?? []
        }));
const ug = (id, title, duration = "3 Years • Online")=>({
        id,
        title,
        category: "Undergraduate",
        duration
    });
const pg = (id, title, duration = "2 Years • Online")=>({
        id,
        title,
        category: "Postgraduate",
        duration
    });
const cert = (id, title, duration)=>({
        id,
        title,
        category: "Certification",
        duration
    });
const integrated = (id, title, duration)=>({
        id,
        title,
        category: "Integrated",
        duration
    });
const lpu = [
    ug("lpu-bba", "Bachelor of Business Administration (BBA)"),
    ug("lpu-bca", "Bachelor of Computer Applications (BCA)"),
    cert("lpu-dca", "Diploma in Computer Applications (DCA)", "1 Year • Online"),
    pg("lpu-ma", "Master of Arts (MA)"),
    pg("lpu-ma-history", "Master of Arts in History"),
    pg("lpu-ma-sociology", "Master of Arts in Sociology"),
    pg("lpu-ma-political-science", "Master of Arts in Political Science"),
    pg("lpu-msc-economics", "Master of Science in Economics"),
    pg("lpu-msc-mathematics", "Master of Science in Mathematics"),
    pg("lpu-mba", "Master of Business Administration (MBA)"),
    pg("lpu-mba-hr", "MBA in Human Resource Management"),
    pg("lpu-mba-finance", "MBA in Finance"),
    pg("lpu-mba-marketing", "MBA in Marketing"),
    pg("lpu-mba-operations", "MBA in Operations Management"),
    pg("lpu-mba-business-analytics", "MBA in Business Analytics"),
    pg("lpu-mba-digital-marketing", "MBA in Digital Marketing"),
    pg("lpu-mba-data-science", "MBA in Data Science"),
    pg("lpu-mba-information-technology", "MBA in Information Technology"),
    pg("lpu-mba-international-business", "MBA in International Business"),
    pg("lpu-mba-healthcare", "MBA in Hospital & Healthcare Management"),
    pg("lpu-mba-logistics", "MBA in Logistics & Supply Chain Management"),
    pg("lpu-mba-banking", "MBA in Banking & Financial Services"),
    pg("lpu-mca", "Master of Computer Applications (MCA)"),
    pg("lpu-mca-ml-ai", "MCA in Machine Learning & Artificial Intelligence"),
    pg("lpu-mca-data-science", "MCA in Data Science"),
    pg("lpu-mca-cyber-security", "MCA in Cyber Security"),
    pg("lpu-mca-full-stack", "MCA in Full Stack Web Development"),
    pg("lpu-mca-ar-vr", "MCA in AR/VR (Game Development)")
];
const muj = [
    ug("muj-bca", "Bachelor of Computer Applications (BCA)"),
    ug("muj-bcom", "Bachelor of Commerce (BCom)"),
    pg("muj-ma-economics", "Master of Arts in Economics"),
    pg("muj-majmc", "Master of Arts in Journalism & Mass Communication"),
    pg("muj-mba", "Master of Business Administration (MBA)"),
    pg("muj-mca", "Master of Computer Applications (MCA)"),
    pg("muj-mcom", "Master of Commerce (MCom)"),
    pg("muj-msc-mathematics", "Master of Science in Mathematics")
];
const smu = [
    ug("smu-ba", "Bachelor of Arts (BA)"),
    ug("smu-bcom", "Bachelor of Commerce (BCom)"),
    pg("smu-ma", "Master of Arts (MA)"),
    pg("smu-ma-english", "Master of Arts in English"),
    pg("smu-ma-political-science", "Master of Arts in Political Science"),
    pg("smu-ma-sociology", "Master of Arts in Sociology"),
    pg("smu-mba", "MBA with Dual Specialization"),
    pg("smu-mca", "Master of Computer Applications (MCA)"),
    pg("smu-mcom", "Master of Commerce (MCom)")
];
const aju = [
    ug("aju-bba", "Bachelor of Business Administration (BBA)"),
    ug("aju-bca", "Bachelor of Computer Applications (BCA)"),
    ug("aju-bcom", "Bachelor of Commerce (BCom)"),
    pg("aju-mba", "Master of Business Administration (MBA)"),
    pg("aju-mca", "Master of Computer Applications (MCA)")
];
const dpu = [
    ug("dpu-bba", "Bachelor of Business Administration (BBA)"),
    ug("dpu-bba-marketing", "BBA in Marketing Management"),
    ug("dpu-bba-finance", "BBA in Finance Management"),
    ug("dpu-bba-retail", "BBA in Retail Management"),
    ug("dpu-bba-ecommerce", "BBA in E-Commerce Management"),
    ug("dpu-bba-logistics", "BBA in Shipping & Logistics Management"),
    ug("dpu-bba-hr", "BBA in Human Resource Management"),
    ug("dpu-bba-it", "BBA in IT & Systems Management"),
    ug("dpu-bba-international-business", "BBA in International Business Management"),
    ug("dpu-bba-bfsi", "BBA in Banking, Financial Services & Insurance Management"),
    pg("dpu-mba", "Master of Business Administration (MBA)"),
    pg("dpu-mba-marketing", "MBA in Marketing Management"),
    pg("dpu-mba-fintech", "MBA in FinTech Management"),
    pg("dpu-mba-operations", "MBA in Operations Management"),
    pg("dpu-mba-agribusiness", "MBA in Agribusiness Management"),
    pg("dpu-mba-blockchain", "MBA in Blockchain Management"),
    pg("dpu-mba-project", "MBA in Project Management"),
    pg("dpu-mba-finance", "MBA in Finance Management"),
    pg("dpu-mba-hr", "MBA in Human Resource Management"),
    pg("dpu-mba-it", "MBA in IT Management"),
    pg("dpu-mba-business-analytics", "MBA in Business Analytics Management"),
    pg("dpu-mba-international-business", "MBA in International Business Management"),
    pg("dpu-mba-ai-ml", "MBA in Artificial Intelligence & Machine Learning"),
    pg("dpu-mba-digital-marketing", "MBA in Digital Marketing Management"),
    pg("dpu-mba-logistics", "MBA in Logistics, Materials & Supply Chain Management"),
    pg("dpu-mba-healthcare", "MBA in Hospital & Healthcare Administration"),
    pg("dpu-mca", "Master of Computer Applications (MCA)"),
    pg("dpu-mca-ai-ml", "MCA in Artificial Intelligence & Machine Learning"),
    pg("dpu-mca-blockchain", "MCA in Blockchain Technology"),
    pg("dpu-mca-business-analytics", "MCA in Business Analytics"),
    pg("dpu-mca-digital-marketing", "MCA in Digital Marketing"),
    pg("dpu-mca-fintech", "MCA in FinTech"),
    cert("dpu-cert-digital-marketing", "Certificate in Digital Marketing", "6 Months • Online"),
    cert("dpu-cert-healthcare", "Certificate in Hospital & Healthcare Management", "6 Months • Online")
];
const amity = [
    pg("mba-amity", "MBA - Amity University", "2 Years • Full-time • Hybrid"),
    integrated("integrated-mba-amity", "Integrated BBA+MBA - Amity University", "5 Years • Full-time • Hybrid")
];
const jain = [
    pg("mba-jain", "MBA - Digital Business & Strategy", "2 Years • Full-time • Hybrid"),
    cert("cert-product-jain", "Certification in Product Management", "6 Months • Part-time • Online")
];
const sharda = [
    ug("bba-sharda-online", "BBA - Online Business Administration", "3 Years • Online • Flexible")
];
const shoolini = [
    ug("shoolini-bba", "Bachelor of Business Administration (BBA)"),
    ug("shoolini-bca", "Bachelor of Computer Applications (BCA)"),
    ug("shoolini-bcom-hons", "Bachelor of Commerce (Honours)"),
    ug("shoolini-ba-distance", "Bachelor of Arts (BA)", "3 Years • Distance"),
    pg("shoolini-mba", "Master of Business Administration (MBA)"),
    pg("shoolini-mba-premium", "Master of Business Administration Premium"),
    pg("shoolini-mca", "Master of Computer Applications (MCA)"),
    pg("shoolini-msc-data-science", "Master of Science in Data Science"),
    pg("shoolini-ma-english-literature", "Master of Arts in English Literature"),
    pg("shoolini-ma-journalism-mass-communication", "Master of Arts in Journalism & Mass Communication")
];
const manipalLegacy = [
    ug("btech-manipal", "B.Tech - Computer Science & Engineering", "4 Years • Full-time • On-campus"),
    pg("mca-manipal", "MCA - Advanced Software Systems", "2 Years • Full-time • Hybrid"),
    integrated("integrated-tech-management-manipal", "Integrated B.Tech + MBA in Technology Management", "5 Years • Full-time • On-campus"),
    cert("cert-ai-manipal", "Certification in Applied AI & ML", "9 Months • Part-time • Online"),
    pg("manipal-pg-mba-gen", "Master of Business Administration"),
    ug("manipal-ug-bba-gen", "Bachelor of Business Administration"),
    ug("manipal-ug-bca-gen", "Bachelor of Computer Application"),
    pg("manipal-pg-mca-gen", "Master of Computer Application"),
    ug("manipal-ug-bcom-gen", "Bachelor of Commerce"),
    pg("manipal-pg-ma-economics", "Master of Arts in Economics"),
    pg("manipal-pg-mcom-gen", "Master of Commerce"),
    pg("manipal-pg-ma-journalism", "Master of Arts in Journalism and Mass Communication"),
    pg("manipal-pg-ma-english", "Master of Arts in English"),
    pg("manipal-pg-ma-political-science", "Master of Arts in Political Science"),
    pg("manipal-pg-ma-sociology", "Master of Arts in Sociology")
];
const courses = [
    ...make("Lovely Professional University Online", lpu),
    ...make("Manipal University", muj),
    ...make("Manipal University", smu),
    ...make("ARKA JAIN University Online", aju),
    ...make("Dr. D. Y. Patil Vidyapeeth Online", dpu),
    ...make("Amity University", amity),
    ...make("Jain University", jain),
    ...make("Sharda University Online", sharda),
    ...make("Shoolini University Online", shoolini),
    ...make("Manipal University", manipalLegacy)
];
}),
"[project]/src/components/ui/application-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApplicationForm",
    ()=>ApplicationForm,
    "leadSourceOptions",
    ()=>leadSourceOptions,
    "programOptions",
    ()=>programOptions,
    "stateOptions",
    ()=>stateOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/courses.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const leadSourceOptions = [
    "Apply Now",
    "Book a Free Call"
];
const applicationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    fullName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Enter your full name"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("Enter a valid email address"),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, "Enter a valid phone number").max(16, "Phone number is too long"),
    state: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Select your state"),
    program: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Select a program of interest"),
    qualification: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Enter your current qualification")
});
const programOptions = [
    {
        value: "",
        label: "Select a program"
    },
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["courses"].slice().sort((left, right)=>{
        const byUniversity = left.university.localeCompare(right.university);
        if (byUniversity !== 0) {
            return byUniversity;
        }
        return left.title.localeCompare(right.title);
    }).map((course)=>({
            value: course.id,
            label: `${course.title} - ${course.university}`
        }))
];
const stateOptions = [
    {
        value: "",
        label: "Select your state"
    },
    {
        value: "Andhra Pradesh",
        label: "Andhra Pradesh"
    },
    {
        value: "Arunachal Pradesh",
        label: "Arunachal Pradesh"
    },
    {
        value: "Assam",
        label: "Assam"
    },
    {
        value: "Bihar",
        label: "Bihar"
    },
    {
        value: "Chhattisgarh",
        label: "Chhattisgarh"
    },
    {
        value: "Goa",
        label: "Goa"
    },
    {
        value: "Gujarat",
        label: "Gujarat"
    },
    {
        value: "Haryana",
        label: "Haryana"
    },
    {
        value: "Himachal Pradesh",
        label: "Himachal Pradesh"
    },
    {
        value: "Jharkhand",
        label: "Jharkhand"
    },
    {
        value: "Karnataka",
        label: "Karnataka"
    },
    {
        value: "Kerala",
        label: "Kerala"
    },
    {
        value: "Madhya Pradesh",
        label: "Madhya Pradesh"
    },
    {
        value: "Maharashtra",
        label: "Maharashtra"
    },
    {
        value: "Manipur",
        label: "Manipur"
    },
    {
        value: "Meghalaya",
        label: "Meghalaya"
    },
    {
        value: "Mizoram",
        label: "Mizoram"
    },
    {
        value: "Nagaland",
        label: "Nagaland"
    },
    {
        value: "Odisha",
        label: "Odisha"
    },
    {
        value: "Punjab",
        label: "Punjab"
    },
    {
        value: "Rajasthan",
        label: "Rajasthan"
    },
    {
        value: "Sikkim",
        label: "Sikkim"
    },
    {
        value: "Tamil Nadu",
        label: "Tamil Nadu"
    },
    {
        value: "Telangana",
        label: "Telangana"
    },
    {
        value: "Tripura",
        label: "Tripura"
    },
    {
        value: "Uttar Pradesh",
        label: "Uttar Pradesh"
    },
    {
        value: "Uttarakhand",
        label: "Uttarakhand"
    },
    {
        value: "West Bengal",
        label: "West Bengal"
    },
    {
        value: "Andaman and Nicobar Islands",
        label: "Andaman and Nicobar Islands"
    },
    {
        value: "Chandigarh",
        label: "Chandigarh"
    },
    {
        value: "Dadra and Nagar Haveli and Daman and Diu",
        label: "Dadra and Nagar Haveli and Daman and Diu"
    },
    {
        value: "Delhi",
        label: "Delhi"
    },
    {
        value: "Jammu and Kashmir",
        label: "Jammu and Kashmir"
    },
    {
        value: "Ladakh",
        label: "Ladakh"
    },
    {
        value: "Lakshadweep",
        label: "Lakshadweep"
    },
    {
        value: "Puducherry",
        label: "Puducherry"
    }
];
const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    state: "",
    program: "",
    qualification: ""
};
function ApplicationForm({ className, leadSource, onSuccess, resetSignal = 0 }) {
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialValues);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [requestError, setRequestError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const firstFieldRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setForm(initialValues);
        setErrors({});
        setStatus("idle");
        setIsSubmitting(false);
        setRequestError(null);
        window.setTimeout(()=>firstFieldRef.current?.focus(), 80);
    }, [
        leadSource,
        resetSignal
    ]);
    const successMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>"Application submitted successfully. An EduBh advisor will reach out within 24 hours.", []);
    function handleChange(key, value) {
        setForm((prev)=>({
                ...prev,
                [key]: value
            }));
        setErrors((prev)=>({
                ...prev,
                [key]: undefined
            }));
        setRequestError(null);
        if (status !== "idle") {
            setStatus("idle");
        }
    }
    async function handleSubmit(event) {
        event.preventDefault();
        const result = applicationSchema.safeParse(form);
        if (!result.success) {
            const fieldErrors = {};
            for (const issue of result.error.issues){
                const key = issue.path[0];
                if (!fieldErrors[key]) {
                    fieldErrors[key] = issue.message;
                }
            }
            setErrors(fieldErrors);
            setRequestError(null);
            setStatus("error");
            return;
        }
        setIsSubmitting(true);
        setRequestError(null);
        try {
            const response = await fetch("/api/applications", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...result.data,
                    leadSource
                })
            });
            const payload = await response.json();
            if (!response.ok || !payload.success) {
                setStatus("error");
                setRequestError(payload.error ?? "Please fix the highlighted fields before submitting again.");
                return;
            }
            setStatus("success");
            onSuccess?.();
        } catch  {
            setStatus("error");
            setRequestError("Please fix the highlighted fields before submitting again.");
        } finally{
            setIsSubmitting(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                initial: false,
                children: status === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 10,
                        scale: 0.98
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: -8,
                        scale: 0.98
                    },
                    className: "mb-4 rounded-[1.3rem] border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700",
                    children: successMessage
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/application-form.tsx",
                    lineNumber: 202,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/application-form.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                initial: false,
                children: status === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 10,
                        scale: 0.98
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: -8,
                        scale: 0.98
                    },
                    className: "mb-4 rounded-[1.3rem] border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm text-red-700",
                    children: requestError ?? "Please fix the highlighted fields before submitting again."
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/application-form.tsx",
                    lineNumber: 215,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/application-form.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].form, {
                onSubmit: handleSubmit,
                initial: {
                    opacity: 0,
                    y: 18
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 18
                },
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "hidden",
                        name: "leadSource",
                        value: leadSource
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/application-form.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "floating-field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: firstFieldRef,
                                        id: "fullName",
                                        type: "text",
                                        value: form.fullName,
                                        onChange: (event)=>handleChange("fullName", event.target.value),
                                        className: "floating-input",
                                        placeholder: "Full Name",
                                        disabled: isSubmitting
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/application-form.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "fullName",
                                        className: "floating-label",
                                        children: "Full Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/application-form.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this),
                                    errors.fullName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "field-message text-red-600",
                                        children: errors.fullName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/application-form.tsx",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/application-form.tsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "floating-field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "email",
                                        type: "email",
                                        value: form.email,
                                        onChange: (event)=>handleChange("email", event.target.value),
                                        className: "floating-input",
                                        placeholder: "Email",
                                        disabled: isSubmitting
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/application-form.tsx",
                                        lineNumber: 256,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "email",
                                        className: "floating-label",
                                        children: "Email"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/application-form.tsx",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, this),
                                    errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "field-message text-red-600",
                                        children: errors.email
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/application-form.tsx",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/application-form.tsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/application-form.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "floating-field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "phone",
                                        type: "tel",
                                        value: form.phone,
                                        onChange: (event)=>handleChange("phone", event.target.value),
                                        className: "floating-input",
                                        placeholder: "Phone",
                                        disabled: isSubmitting
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/application-form.tsx",
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "phone",
                                        className: "floating-label",
                                        children: "Phone"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/application-form.tsx",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, this),
                                    errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "field-message text-red-600",
                                        children: errors.phone
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/application-form.tsx",
                                        lineNumber: 289,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/application-form.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "floating-field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        id: "state",
                                        value: form.state,
                                        onChange: (event)=>handleChange("state", event.target.value),
                                        className: "floating-input",
                                        disabled: isSubmitting,
                                        children: stateOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: option.value,
                                                children: option.label
                                            }, option.value || "state-placeholder", false, {
                                                fileName: "[project]/src/components/ui/application-form.tsx",
                                                lineNumber: 302,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/application-form.tsx",
                                        lineNumber: 294,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "state",
                                        className: "floating-label",
                                        children: "State"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/application-form.tsx",
                                        lineNumber: 307,
                                        columnNumber: 13
                                    }, this),
                                    errors.state && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "field-message text-red-600",
                                        children: errors.state
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/application-form.tsx",
                                        lineNumber: 311,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/application-form.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/application-form.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "floating-field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        id: "program",
                                        value: form.program,
                                        onChange: (event)=>handleChange("program", event.target.value),
                                        className: "floating-input",
                                        disabled: isSubmitting,
                                        children: programOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: option.value,
                                                children: option.label
                                            }, option.value || "placeholder", false, {
                                                fileName: "[project]/src/components/ui/application-form.tsx",
                                                lineNumber: 326,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/application-form.tsx",
                                        lineNumber: 318,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "program",
                                        className: "floating-label",
                                        children: "Program Interest"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/application-form.tsx",
                                        lineNumber: 331,
                                        columnNumber: 13
                                    }, this),
                                    errors.program && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "field-message text-red-600",
                                        children: errors.program
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/application-form.tsx",
                                        lineNumber: 335,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/application-form.tsx",
                                lineNumber: 317,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "floating-field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "qualification",
                                        type: "text",
                                        value: form.qualification,
                                        onChange: (event)=>handleChange("qualification", event.target.value),
                                        className: "floating-input",
                                        placeholder: "Current Qualification",
                                        disabled: isSubmitting
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/application-form.tsx",
                                        lineNumber: 340,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "qualification",
                                        className: "floating-label",
                                        children: "Current Qualification"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/application-form.tsx",
                                        lineNumber: 349,
                                        columnNumber: 13
                                    }, this),
                                    errors.qualification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "field-message text-red-600",
                                        children: errors.qualification
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/application-form.tsx",
                                        lineNumber: 353,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/application-form.tsx",
                                lineNumber: 339,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/application-form.tsx",
                        lineNumber: 316,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: isSubmitting,
                                className: "button-primary w-full text-sm sm:text-base disabled:cursor-not-allowed disabled:opacity-80",
                                children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-4 w-4 animate-spin rounded-full border-2 border-white/35 border-t-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/application-form.tsx",
                                            lineNumber: 366,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Submitting..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/application-form.tsx",
                                            lineNumber: 367,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : "Submit application"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/application-form.tsx",
                                lineNumber: 359,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-xs leading-6 text-[var(--muted)]",
                                children: "By continuing, you agree to be contacted by EduBh advisors regarding your application."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/application-form.tsx",
                                lineNumber: 373,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/application-form.tsx",
                        lineNumber: 358,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/application-form.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/application-form.tsx",
        lineNumber: 199,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/application-experience.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApplicationExperience",
    ()=>ApplicationExperience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$application$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/application-form.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function ApplicationExperience({ leadSource, resetSignal = 0, containerClassName, formWrapperClassName = "surface-card-strong p-6 sm:p-8 lg:p-10" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: containerClassName,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mx-auto w-full max-w-5xl space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-5 px-1 sm:px-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "eyebrow",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-2 w-2 rounded-full bg-emerald-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/application-experience.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Apply"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/application-experience.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/application-experience.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "display-title max-w-4xl text-balance text-[var(--foreground)]",
                                    children: [
                                        "One application.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/ui/application-experience.tsx",
                                            lineNumber: 29,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gradient",
                                            children: "Endless possibilities."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/application-experience.tsx",
                                            lineNumber: 30,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/application-experience.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg",
                                    children: "Tell us about your aspirations. Our EduBh advisors will curate the perfect academic path for you across our eight partner universities."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/application-experience.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/application-experience.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 sm:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "trust-pill",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/application-experience.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Unified application"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/application-experience.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/application-experience.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "trust-pill",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "8"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/application-experience.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Partner universities"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/application-experience.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/application-experience.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "trust-pill",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "24h"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/application-experience.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Advisor response window"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/application-experience.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/application-experience.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/application-experience.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/application-experience.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: formWrapperClassName,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-4xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$application$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApplicationForm"], {
                            leadSource: leadSource,
                            resetSignal: resetSignal
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/application-experience.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/application-experience.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/application-experience.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/application-experience.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/application-experience.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/apply/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ApplyPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$application$2d$experience$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/application-experience.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function ApplyPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$application$2d$experience$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApplicationExperience"], {
        leadSource: "Apply Now",
        containerClassName: "py-2"
    }, void 0, false, {
        fileName: "[project]/src/app/apply/page.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=src_6565ebd5._.js.map