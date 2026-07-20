module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/data/brochures.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/data/courses.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "courses",
    ()=>courses,
    "universityNames",
    ()=>universityNames
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$brochures$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/brochures.ts [app-rsc] (ecmascript)");
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
            brochures: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$brochures$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["brochuresByCourseId"][program.id] ?? []
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
"[project]/src/app/courses/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CourseDetail,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-rsc] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-rsc] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/courses.ts [app-rsc] (ecmascript)");
;
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["courses"].map((course)=>({
            id: course.id
        }));
}
async function generateMetadata({ params }) {
    const { id } = await params;
    const course = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["courses"].find((entry)=>entry.id === id);
    if (!course) {
        return {
            title: "Course not found - EduBh"
        };
    }
    return {
        title: `${course.title} at ${course.university} - EduBh`,
        description: course.description
    };
}
async function CourseDetail({ params }) {
    const { id } = await params;
    const course = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["courses"].find((entry)=>entry.id === id);
    if (!course) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "surface-card-strong px-6 py-8 sm:px-8 sm:py-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "eyebrow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-2 w-2 rounded-full bg-emerald-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/courses/[id]/page.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: course.university
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/courses/[id]/page.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/courses/[id]/page.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "section-title max-w-4xl text-balance",
                                    children: course.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/courses/[id]/page.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "max-w-3xl text-base leading-8 text-[var(--muted)]",
                                    children: course.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/courses/[id]/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/courses/[id]/page.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/apply",
                            className: "button-primary w-fit text-sm sm:text-base",
                            children: "Apply Now"
                        }, void 0, false, {
                            fileName: "[project]/src/app/courses/[id]/page.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/courses/[id]/page.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/courses/[id]/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(0,0.85fr)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "surface-card px-6 py-6 sm:px-7",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]",
                                children: "Program overview"
                            }, void 0, false, {
                                fileName: "[project]/src/app/courses/[id]/page.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base leading-8 text-[var(--foreground)]",
                                        children: course.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/courses/[id]/page.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 md:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(22,93,245,0.08),rgba(255,255,255,0.92))] p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[0.72rem] uppercase tracking-[0.2em] text-[var(--muted)]",
                                                        children: "Duration"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-lg font-semibold text-[var(--foreground)]",
                                                        children: course.duration
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                lineNumber: 70,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(31,199,182,0.08),rgba(255,255,255,0.92))] p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[0.72rem] uppercase tracking-[0.2em] text-[var(--muted)]",
                                                        children: "Category"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-lg font-semibold text-[var(--foreground)]",
                                                        children: course.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                lineNumber: 78,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/courses/[id]/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-[1.55rem] border border-white/70 bg-white/88 px-5 py-5 shadow-[0_16px_32px_rgba(16,32,58,0.06)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-2 text-base font-semibold text-[var(--foreground)]",
                                                children: "Eligibility"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm leading-7 text-[var(--muted)]",
                                                children: "Undergraduate programs typically require 10+2 with a strong academic profile. Postgraduate programs require a relevant undergraduate degree. Final eligibility is confirmed by the university admissions team."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                lineNumber: 91,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/courses/[id]/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    course.brochures.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-[1.55rem] border border-[rgba(109,132,170,0.16)] bg-white/92 px-5 py-5 shadow-[0_16px_32px_rgba(16,32,58,0.06)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-1 text-base font-semibold text-[var(--foreground)]",
                                                children: "Course brochures"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-4 text-sm leading-7 text-[var(--muted)]",
                                                children: "View the complete program details online or download the PDF for later."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: course.brochures.map((brochure)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-3 rounded-[1.2rem] bg-[#f6f8fc] px-4 py-3 sm:flex-row sm:items-center sm:justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium text-[var(--foreground)]",
                                                                children: brochure.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                                lineNumber: 107,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex shrink-0 flex-wrap gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: brochure.file,
                                                                        target: "_blank",
                                                                        rel: "noreferrer",
                                                                        className: "button-ghost inline-flex items-center gap-2 text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                                className: "h-4 w-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                                                lineNumber: 110,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            " View PDF"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                                        lineNumber: 109,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: brochure.file,
                                                                        download: true,
                                                                        className: "button-primary inline-flex items-center gap-2 text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                                className: "h-4 w-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                                                lineNumber: 113,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            " Download"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                                        lineNumber: 112,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                                lineNumber: 108,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, brochure.file, true, {
                                                        fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/courses/[id]/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/courses/[id]/page.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/courses/[id]/page.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "surface-card-dark p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#93a8cc]",
                                        children: "Program snapshot"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/courses/[id]/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                        className: "mt-5 space-y-4 text-sm text-[#c6d2e8]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between gap-4 border-b border-white/10 pb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        children: "University"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        className: "text-right font-semibold text-white",
                                                        children: course.university
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                lineNumber: 130,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between gap-4 border-b border-white/10 pb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        children: "Category"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        className: "text-right font-semibold text-white",
                                                        children: course.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                lineNumber: 134,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between gap-4 border-b border-white/10 pb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        children: "Duration"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        className: "text-right font-semibold text-white",
                                                        children: course.duration
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                lineNumber: 138,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        children: "Fees"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        className: "text-right font-semibold text-white",
                                                        children: "Shared during counselling"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                lineNumber: 142,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/courses/[id]/page.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/apply",
                                        className: "mt-6 button-primary w-full text-sm",
                                        children: "Start application"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/courses/[id]/page.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/courses/[id]/page.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "surface-card px-5 py-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 text-base font-semibold text-[var(--foreground)]",
                                        children: "How EduBh supports you"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/courses/[id]/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 text-sm leading-7 text-[var(--muted)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Profile evaluation and course fitment"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                lineNumber: 159,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Application review and essay guidance"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                lineNumber: 160,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Scholarship and financial planning support"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/courses/[id]/page.tsx",
                                                lineNumber: 161,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/courses/[id]/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/courses/[id]/page.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/courses/[id]/page.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/courses/[id]/page.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/courses/[id]/page.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/courses/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/courses/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__39b3fd88._.js.map