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
"[project]/src/components/ui/course-category-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CourseCategorySection",
    ()=>CourseCategorySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
"use client";
;
;
;
;
const PAGE_SIZE = 8;
const universityLogos = {
    "Lovely Professional University Online": "/universities/lpu-online.svg",
    "Dr. D. Y. Patil Vidyapeeth Online": "/universities/dy-patil-online.png",
    "ARKA JAIN University Online": "/universities/arka-jain-online-v2.png",
    "Amity University": "/universities/amity-online.png",
    "Manipal University": "/manipal.png",
    "Jain University": "/jain.png",
    "Sharda University Online": "/sharda.png",
    "Shoolini University Online": "/universities/shoolini-online.png"
};
function CourseCategorySection({ title, courses, onSelect }) {
    const [visibleCount, setVisibleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(PAGE_SIZE);
    const visibleCourses = courses.slice(0, visibleCount);
    const remaining = courses.length - visibleCourses.length;
    if (!courses.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-end justify-between gap-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold tracking-tight text-[var(--foreground)]",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/course-category-section.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-sm text-[var(--muted)]",
                            children: [
                                courses.length,
                                " program",
                                courses.length > 1 ? "s" : ""
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/course-category-section.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/course-category-section.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/course-category-section.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 lg:grid-cols-2",
                children: visibleCourses.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "group relative overflow-hidden rounded-[1.8rem] border border-white/70 bg-white/94 p-5 shadow-[0_18px_34px_rgba(16,32,58,0.08)] transition-transform duration-300 hover:-translate-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-[linear-gradient(145deg,rgba(22,93,245,0.1),transparent_55%,rgba(31,199,182,0.12))] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/course-category-section.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex h-full flex-col justify-between gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0 space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "inline-flex max-w-full rounded-full border border-[rgba(109,132,170,0.16)] bg-[rgba(22,93,245,0.08)] px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]",
                                                        children: course.university
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/course-category-section.tsx",
                                                        lineNumber: 43,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-xl font-semibold tracking-tight text-[var(--foreground)]",
                                                                children: course.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ui/course-category-section.tsx",
                                                                lineNumber: 45,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-3 line-clamp-3 text-sm leading-7 text-[var(--muted)]",
                                                                children: course.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ui/course-category-section.tsx",
                                                                lineNumber: 46,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ui/course-category-section.tsx",
                                                        lineNumber: 44,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ui/course-category-section.tsx",
                                                lineNumber: 42,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-16 w-28 shrink-0 items-center justify-center rounded-[1.35rem] bg-white/90 p-2 shadow-[0_8px_20px_rgba(16,32,58,0.08)]",
                                                children: universityLogos[course.university] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: universityLogos[course.university],
                                                    alt: course.university,
                                                    width: 112,
                                                    height: 64,
                                                    unoptimized: true,
                                                    className: "h-full w-full object-contain"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/course-category-section.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 58
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/course-category-section.tsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/course-category-section.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex flex-wrap items-center justify-between gap-3 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full bg-[#eef3fa] px-3 py-1.5 text-[var(--foreground)]",
                                                        children: course.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/course-category-section.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full bg-[#f6f8fc] px-3 py-1.5 text-[var(--muted)]",
                                                        children: course.duration
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/course-category-section.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ui/course-category-section.tsx",
                                                lineNumber: 54,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-center gap-2",
                                                children: [
                                                    course.brochures[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: course.brochures[0].file,
                                                        download: true,
                                                        className: "button-ghost inline-flex items-center gap-2 text-sm",
                                                        "aria-label": `Download ${course.brochures[0].title}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ui/course-category-section.tsx",
                                                                lineNumber: 59,
                                                                columnNumber: 204
                                                            }, this),
                                                            "Brochure"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ui/course-category-section.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 43
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>onSelect?.(course),
                                                        className: "button-ghost text-sm",
                                                        children: "View details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/course-category-section.tsx",
                                                        lineNumber: 60,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ui/course-category-section.tsx",
                                                lineNumber: 58,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/course-category-section.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/course-category-section.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        ]
                    }, course.id, true, {
                        fileName: "[project]/src/components/ui/course-category-section.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/course-category-section.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            courses.length > PAGE_SIZE && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-center gap-3 pt-2",
                children: [
                    remaining > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setVisibleCount((count)=>count + PAGE_SIZE),
                        className: "button-secondary text-sm",
                        children: [
                            "Show ",
                            Math.min(PAGE_SIZE, remaining),
                            " more"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/course-category-section.tsx",
                        lineNumber: 69,
                        columnNumber: 29
                    }, this),
                    visibleCount > PAGE_SIZE && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setVisibleCount(PAGE_SIZE),
                        className: "button-ghost text-sm",
                        children: "Show less"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/course-category-section.tsx",
                        lineNumber: 70,
                        columnNumber: 40
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/course-category-section.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/course-category-section.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/course-details-modal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CourseDetailsModal",
    ()=>CourseDetailsModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function CourseDetailsModal({ course, onClose }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!course) {
            return;
        }
        const handleKeyDown = (event)=>{
            if (event.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return ()=>{
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [
        course,
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: course && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-[rgba(7,17,31,0.44)] px-4 py-6 backdrop-blur-xl",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.18
            },
            onClick: onClose,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.95,
                    y: 8
                },
                animate: {
                    opacity: 1,
                    scale: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    scale: 0.95,
                    y: 8
                },
                transition: {
                    type: "spring",
                    stiffness: 140,
                    damping: 18
                },
                className: "surface-card-strong relative w-full max-w-2xl p-6 text-sm text-[var(--foreground)] sm:p-7",
                onClick: (event)=>event.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "mb-5 flex items-start justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]",
                                        children: course.university
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/course-details-modal.tsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "max-w-xl text-2xl font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-3xl",
                                        children: course.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/course-details-modal.tsx",
                                        lineNumber: 56,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/course-details-modal.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                "aria-label": "Close",
                                className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(109,132,170,0.18)] bg-white text-[var(--muted)] shadow-[0_10px_24px_rgba(16,32,58,0.08)] transition-colors hover:text-[var(--foreground)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/course-details-modal.tsx",
                                    lineNumber: 66,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/course-details-modal.tsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/course-details-modal.tsx",
                        lineNumber: 51,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-5 flex flex-wrap items-center gap-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full bg-[#eef3fa] px-3 py-1.5 text-[var(--foreground)]",
                                children: course.category
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/course-details-modal.tsx",
                                lineNumber: 71,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1 rounded-full bg-[#eef3fa] px-3 py-1.5 text-[var(--foreground)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/course-details-modal.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: course.duration
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/course-details-modal.tsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/course-details-modal.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/course-details-modal.tsx",
                        lineNumber: 70,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-h-[50vh] space-y-4 overflow-y-auto pr-1 text-sm leading-7 text-[var(--muted)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: course.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/course-details-modal.tsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-[1.4rem] border border-white/70 bg-[linear-gradient(180deg,rgba(22,93,245,0.08),rgba(255,255,255,0.9))] px-4 py-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 font-semibold text-[var(--foreground)]",
                                        children: "What to expect"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/course-details-modal.tsx",
                                        lineNumber: 83,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Rigorous academics paired with mentor-led guidance, portfolio-ready work, and personalised support from the EduBh counselling team."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/course-details-modal.tsx",
                                        lineNumber: 84,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/course-details-modal.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, this),
                            course.brochures.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-[1.4rem] border border-[rgba(109,132,170,0.16)] bg-white/90 px-4 py-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-3 font-semibold text-[var(--foreground)]",
                                        children: "Course brochures"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/course-details-modal.tsx",
                                        lineNumber: 91,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: course.brochures.map((brochure)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-3 rounded-[1rem] bg-[#f6f8fc] px-3 py-3 sm:flex-row sm:items-center sm:justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-[var(--foreground)]",
                                                        children: brochure.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/course-details-modal.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex shrink-0 flex-wrap gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: brochure.file,
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                className: "button-ghost inline-flex items-center gap-2 text-xs",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                        className: "h-3.5 w-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ui/course-details-modal.tsx",
                                                                        lineNumber: 98,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    " View"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ui/course-details-modal.tsx",
                                                                lineNumber: 97,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: brochure.file,
                                                                download: true,
                                                                className: "button-ghost inline-flex items-center gap-2 text-xs",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                        className: "h-3.5 w-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ui/course-details-modal.tsx",
                                                                        lineNumber: 101,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    " Download"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ui/course-details-modal.tsx",
                                                                lineNumber: 100,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ui/course-details-modal.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, brochure.file, true, {
                                                fileName: "[project]/src/components/ui/course-details-modal.tsx",
                                                lineNumber: 94,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/course-details-modal.tsx",
                                        lineNumber: 92,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/course-details-modal.tsx",
                                lineNumber: 90,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/course-details-modal.tsx",
                        lineNumber: 80,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "mt-6 flex flex-col gap-4 border-t border-[rgba(109,132,170,0.14)] pt-5 sm:flex-row sm:items-center sm:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "max-w-md text-sm leading-7 text-[var(--muted)]",
                                children: "Secure your seat with a guided application through EduBh."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/course-details-modal.tsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/apply",
                                className: "button-primary text-sm",
                                children: "Apply now"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/course-details-modal.tsx",
                                lineNumber: 115,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/course-details-modal.tsx",
                        lineNumber: 111,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/course-details-modal.tsx",
                lineNumber: 43,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/course-details-modal.tsx",
            lineNumber: 35,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/course-details-modal.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/courses/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CoursesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/courses.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$course$2d$category$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/course-category-section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$course$2d$details$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/course-details-modal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const levelOptions = [
    {
        key: "all",
        label: "All"
    },
    {
        key: "ug",
        label: "Undergraduate"
    },
    {
        key: "pg",
        label: "Postgraduate"
    },
    {
        key: "integrated",
        label: "Integrated"
    }
];
const universityOptions = [
    {
        key: "all",
        label: "All partners"
    },
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["universityNames"].map((name)=>({
            key: name,
            label: name
        }))
];
function CoursesPageContent() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        const param = searchParams.get("level");
        return param === "ug" || param === "pg" || param === "integrated" || param === "all" ? param : "all";
    });
    const [university, setUniversity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["courses"].filter((course)=>{
            const matchesLevel = level === "all" ? true : level === "ug" ? course.category === "Undergraduate" : level === "pg" ? course.category === "Postgraduate" : level === "integrated" ? course.category === "Integrated" : course.category === "Certification";
            const matchesUniversity = university === "all" || course.university === university;
            return matchesLevel && matchesUniversity;
        });
    }, [
        level,
        university
    ]);
    const grouped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return {
            ug: filtered.filter((course)=>course.category === "Undergraduate"),
            pg: filtered.filter((course)=>course.category === "Postgraduate"),
            integrated: filtered.filter((course)=>course.category === "Integrated"),
            certification: filtered.filter((course)=>course.category === "Certification")
        };
    }, [
        filtered
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section, {
                initial: {
                    y: 24,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 18
                },
                className: "surface-card-strong overflow-hidden px-6 py-8 sm:px-8 sm:py-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "eyebrow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-2 w-2 rounded-full bg-emerald-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/courses/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Programs"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/courses/page.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/courses/page.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "section-title text-balance",
                                    children: "Explore programs"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/courses/page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "max-w-3xl text-base leading-8 text-[var(--muted)]",
                                    children: "Explore online degree and certificate programs from our university partners, with one guided application process."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/courses/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/courses/page.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 sm:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "trust-pill",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["universityNames"].length
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/courses/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "University partners"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/courses/page.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/courses/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "trust-pill",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: filtered.length
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/courses/page.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Programs matched"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/courses/page.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/courses/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "trust-pill",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/courses/page.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Unified application"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/courses/page.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/courses/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/courses/page.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/courses/page.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/courses/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section, {
                initial: {
                    y: 28,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    delay: 0.06,
                    type: "spring",
                    stiffness: 120,
                    damping: 18
                },
                className: "surface-card px-5 py-5 sm:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]",
                                    children: "Level"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/courses/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: levelOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setLevel(option.key),
                                            className: `rounded-full px-4 py-2 text-sm font-semibold transition ${level === option.key ? "bg-[linear-gradient(135deg,#165df5,#0d47c4)] text-white shadow-[0_12px_28px_rgba(22,93,245,0.22)]" : "bg-white text-[var(--foreground)] shadow-[0_8px_18px_rgba(16,32,58,0.06)] hover:bg-[#eef3fa]"}`,
                                            children: option.label
                                        }, option.key, false, {
                                            fileName: "[project]/src/app/courses/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/courses/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/courses/page.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]",
                                    children: "University"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/courses/page.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: universityOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setUniversity(option.key),
                                            className: `rounded-full px-4 py-2 text-sm font-semibold transition ${university === option.key ? "bg-[linear-gradient(135deg,#165df5,#0d47c4)] text-white shadow-[0_12px_28px_rgba(22,93,245,0.22)]" : "bg-white text-[var(--foreground)] shadow-[0_8px_18px_rgba(16,32,58,0.06)] hover:bg-[#eef3fa]"}`,
                                            children: option.label
                                        }, option.key, false, {
                                            fileName: "[project]/src/app/courses/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/courses/page.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/courses/page.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/courses/page.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/courses/page.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 24
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: 0.12,
                    type: "spring",
                    stiffness: 120,
                    damping: 20
                },
                className: "space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$course$2d$category$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CourseCategorySection"], {
                        title: "Undergraduate (UG)",
                        courses: grouped.ug,
                        onSelect: setSelected
                    }, `ug-${level}-${university}`, false, {
                        fileName: "[project]/src/app/courses/page.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$course$2d$category$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CourseCategorySection"], {
                        title: "Postgraduate (PG)",
                        courses: grouped.pg,
                        onSelect: setSelected
                    }, `pg-${level}-${university}`, false, {
                        fileName: "[project]/src/app/courses/page.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$course$2d$category$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CourseCategorySection"], {
                        title: "Integrated Programs",
                        courses: grouped.integrated,
                        onSelect: setSelected
                    }, `integrated-${level}-${university}`, false, {
                        fileName: "[project]/src/app/courses/page.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$course$2d$category$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CourseCategorySection"], {
                        title: "Certificate & Diploma Programs",
                        courses: grouped.certification,
                        onSelect: setSelected
                    }, `certification-${level}-${university}`, false, {
                        fileName: "[project]/src/app/courses/page.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/courses/page.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$course$2d$details$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CourseDetailsModal"], {
                course: selected,
                onClose: ()=>setSelected(null)
            }, void 0, false, {
                fileName: "[project]/src/app/courses/page.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/courses/page.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
function CoursesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-6 w-40 rounded-full bg-slate-100"
                }, void 0, false, {
                    fileName: "[project]/src/app/courses/page.tsx",
                    lineNumber: 197,
                    columnNumber: 11
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-24 rounded-3xl bg-slate-100"
                }, void 0, false, {
                    fileName: "[project]/src/app/courses/page.tsx",
                    lineNumber: 198,
                    columnNumber: 11
                }, void 0)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/courses/page.tsx",
            lineNumber: 196,
            columnNumber: 9
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CoursesPageContent, {}, void 0, false, {
            fileName: "[project]/src/app/courses/page.tsx",
            lineNumber: 202,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/courses/page.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Download
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 15V3",
            key: "m9g1x1"
        }
    ],
    [
        "path",
        {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }
    ],
    [
        "path",
        {
            d: "m7 10 5 5 5-5",
            key: "brsn70"
        }
    ]
];
const Download = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("download", __iconNode);
;
 //# sourceMappingURL=download.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Download",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Clock
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 6v6l4 2",
            key: "mmk7yg"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
];
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("clock", __iconNode);
;
 //# sourceMappingURL=clock.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ExternalLink
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M15 3h6v6",
            key: "1q9fwt"
        }
    ],
    [
        "path",
        {
            d: "M10 14 21 3",
            key: "gplh6r"
        }
    ],
    [
        "path",
        {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp"
        }
    ]
];
const ExternalLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("external-link", __iconNode);
;
 //# sourceMappingURL=external-link.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExternalLink",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_e34de1b3._.js.map