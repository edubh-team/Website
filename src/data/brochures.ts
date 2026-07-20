export type CourseBrochure = {
  title: string;
  file: string;
};

const item = (title: string, file: string): CourseBrochure => ({ title, file });
const lpuAll = item("LPU Online All Programs Prospectus 2025", "/brochures/lpu/all-programs-prospectus-2025.pdf");
const arkaAll = item("ARKA JAIN Online Programs Prospectus", "/brochures/arka-jain/all-programs-prospectus.pdf");
const dpuAll = item("DPU Online All Programs Prospectus", "/brochures/dpu/all-programs-prospectus.pdf");
const smuAll = item("Sikkim Manipal Combined Brochure", "/brochures/manipal/smu-combined-brochure.pdf");
const shooliniAll = item("Shoolini Online Brand & Programs Brochure 2026", "/brochures/shoolini/brand-programs-brochure-2026.pdf");

const arkaCourseIds = ["aju-bba", "aju-bca", "aju-bcom", "aju-mba", "aju-mca"];
const dpuCourseIds = [
  "dpu-bba", "dpu-bba-marketing", "dpu-bba-finance", "dpu-bba-retail", "dpu-bba-ecommerce",
  "dpu-bba-logistics", "dpu-bba-hr", "dpu-bba-it", "dpu-bba-international-business", "dpu-bba-bfsi",
  "dpu-mba", "dpu-mba-marketing", "dpu-mba-fintech", "dpu-mba-operations", "dpu-mba-agribusiness",
  "dpu-mba-blockchain", "dpu-mba-project", "dpu-mba-finance", "dpu-mba-hr", "dpu-mba-it",
  "dpu-mba-business-analytics", "dpu-mba-international-business", "dpu-mba-ai-ml", "dpu-mba-digital-marketing",
  "dpu-mba-logistics", "dpu-mba-healthcare", "dpu-mca", "dpu-mca-ai-ml", "dpu-mca-blockchain",
  "dpu-mca-business-analytics", "dpu-mca-digital-marketing", "dpu-mca-fintech", "dpu-cert-digital-marketing",
  "dpu-cert-healthcare",
];

const shooliniCourseIds = [
  "shoolini-bba", "shoolini-bca", "shoolini-bcom-hons", "shoolini-ba-distance",
  "shoolini-mba", "shoolini-mba-premium", "shoolini-mca", "shoolini-msc-data-science",
  "shoolini-ma-english-literature", "shoolini-ma-journalism-mass-communication",
];

export const brochuresByCourseId: Record<string, CourseBrochure[]> = {
  ...Object.fromEntries(arkaCourseIds.map((id) => [id, [arkaAll]])),
  ...Object.fromEntries(dpuCourseIds.map((id) => [id, [dpuAll]])),
  ...Object.fromEntries(shooliniCourseIds.map((id) => [id, [shooliniAll]])),

  "lpu-bba": [item("BBA Program Brochure", "/brochures/lpu/bba.pdf"), lpuAll],
  "lpu-bca": [item("BCA Program Brochure", "/brochures/lpu/bca.pdf"), lpuAll],
  "lpu-dca": [item("DCA Program Brochure", "/brochures/lpu/dca.pdf"), lpuAll],
  "lpu-ma": [item("MA Program Brochure", "/brochures/lpu/ma.pdf"), lpuAll],
  "lpu-ma-history": [item("MA History Program Brochure", "/brochures/lpu/ma-history.pdf")],
  "lpu-ma-sociology": [item("MA Sociology Program Brochure", "/brochures/lpu/ma-sociology.pdf")],
  "lpu-ma-political-science": [item("MA Political Science Program Brochure", "/brochures/lpu/ma-political-science.pdf")],
  "lpu-msc-economics": [item("MSc Economics Program Brochure", "/brochures/lpu/msc-economics.pdf")],
  "lpu-msc-mathematics": [item("MSc Mathematics Program Brochure", "/brochures/lpu/msc-mathematics.pdf")],
  "lpu-mba": [item("MBA Program Brochure", "/brochures/lpu/mba.pdf"), lpuAll],
  "lpu-mba-hr": [item("MBA Human Resource Management Brochure", "/brochures/lpu/mba-human-resource-management.pdf")],
  "lpu-mba-finance": [item("MBA Finance Brochure", "/brochures/lpu/mba-finance.pdf")],
  "lpu-mba-marketing": [item("MBA Marketing Brochure", "/brochures/lpu/mba-marketing.pdf")],
  "lpu-mba-operations": [item("MBA Operations Management Brochure", "/brochures/lpu/mba-operations-management.pdf")],
  "lpu-mba-business-analytics": [item("MBA Program Brochure", "/brochures/lpu/mba.pdf"), lpuAll],
  "lpu-mba-digital-marketing": [item("MBA Digital Marketing Brochure", "/brochures/lpu/mba-digital-marketing.pdf")],
  "lpu-mba-data-science": [item("MBA Data Science Brochure", "/brochures/lpu/mba-data-science.pdf")],
  "lpu-mba-information-technology": [item("MBA Information Technology Brochure", "/brochures/lpu/mba-information-technology.pdf")],
  "lpu-mba-international-business": [item("MBA International Business Brochure", "/brochures/lpu/mba-international-business.pdf")],
  "lpu-mba-healthcare": [item("MBA Hospital and Healthcare Management Brochure", "/brochures/lpu/mba-hospital-healthcare.pdf")],
  "lpu-mba-logistics": [item("MBA Logistics and Supply Chain Brochure", "/brochures/lpu/mba-logistics-supply-chain.pdf")],
  "lpu-mba-banking": [item("MBA Banking and Financial Services Brochure", "/brochures/lpu/mba-banking-financial-services.pdf")],
  "lpu-mca": [lpuAll],
  "lpu-mca-ml-ai": [item("MCA Machine Learning and AI Brochure", "/brochures/lpu/mca-machine-learning-ai.pdf")],
  "lpu-mca-data-science": [lpuAll],
  "lpu-mca-cyber-security": [item("MCA Cyber Security Brochure", "/brochures/lpu/mca-cyber-security.pdf")],
  "lpu-mca-full-stack": [item("MCA Full Stack Development Brochure", "/brochures/lpu/mca-full-stack-development.pdf")],
  "lpu-mca-ar-vr": [item("MCA AR/VR Game Development Brochure", "/brochures/lpu/mca-ar-vr.pdf")],

  "muj-bca": [item("MUJ BCA Program Brochure", "/brochures/manipal/muj-bca.pdf")],
  "muj-bcom": [item("MUJ BCom Program Brochure", "/brochures/manipal/muj-bcom.pdf")],
  "muj-ma-economics": [item("MUJ MA Economics Program Brochure", "/brochures/manipal/muj-ma-economics.pdf")],
  "muj-majmc": [item("MUJ MA Journalism and Mass Communication Brochure", "/brochures/manipal/muj-majmc.pdf")],
  "muj-mba": [item("MUJ MBA Program Brochure", "/brochures/manipal/muj-mba.pdf")],
  "muj-mca": [item("MUJ MCA Program Brochure", "/brochures/manipal/muj-mca.pdf")],
  "muj-mcom": [item("MUJ MCom Program Brochure", "/brochures/manipal/muj-mcom.pdf")],
  "muj-msc-mathematics": [item("MUJ MSc Mathematics Program Brochure", "/brochures/manipal/muj-msc-mathematics.pdf")],

  "smu-ba": [item("SMU BA Program Brochure", "/brochures/manipal/smu-ba.pdf"), item("SMU BA Program Brochure - Copy", "/brochures/manipal/smu-ba-copy.pdf"), smuAll],
  "smu-bcom": [item("SMU BCom Program Brochure", "/brochures/manipal/smu-bcom.pdf"), smuAll],
  "smu-ma": [item("SMU MA Program Brochure", "/brochures/manipal/smu-ma.pdf"), item("SMU MA Program Brochure - Copy", "/brochures/manipal/smu-ma-copy.pdf"), smuAll],
  "smu-ma-english": [item("SMU MA English Program Brochure", "/brochures/manipal/smu-ma-english.pdf"), smuAll],
  "smu-ma-political-science": [item("SMU MA Political Science Brochure", "/brochures/manipal/smu-ma-political-science.pdf"), item("SMU MA Political Science Brochure - Copy", "/brochures/manipal/smu-ma-political-science-copy.pdf"), smuAll],
  "smu-ma-sociology": [item("SMU MA Sociology Program Brochure", "/brochures/manipal/smu-ma-sociology.pdf"), item("SMU MA Sociology Program Brochure - Copy", "/brochures/manipal/smu-ma-sociology-copy.pdf"), smuAll],
  "smu-mba": [item("SMU MBA Program Brochure", "/brochures/manipal/smu-mba.pdf"), smuAll],
  "smu-mca": [item("SMU MCA Program Brochure", "/brochures/manipal/smu-mca.pdf"), item("SMU MCA Program Brochure - Copy", "/brochures/manipal/smu-mca-copy.pdf"), smuAll],
  "smu-mcom": [item("SMU MCom Program Brochure", "/brochures/manipal/smu-mcom.pdf"), item("SMU MCom Program Brochure - Copy", "/brochures/manipal/smu-mcom-copy.pdf"), smuAll],

  "mca-manipal": [item("MUJ MCA Program Brochure", "/brochures/manipal/muj-mca.pdf")],
  "manipal-pg-mba-gen": [item("MUJ MBA Program Brochure", "/brochures/manipal/muj-mba.pdf")],
  "manipal-ug-bca-gen": [item("MUJ BCA Program Brochure", "/brochures/manipal/muj-bca.pdf")],
  "manipal-pg-mca-gen": [item("MUJ MCA Program Brochure", "/brochures/manipal/muj-mca.pdf")],
  "manipal-ug-bcom-gen": [item("MUJ BCom Program Brochure", "/brochures/manipal/muj-bcom.pdf")],
  "manipal-pg-ma-economics": [item("MUJ MA Economics Program Brochure", "/brochures/manipal/muj-ma-economics.pdf")],
  "manipal-pg-mcom-gen": [item("MUJ MCom Program Brochure", "/brochures/manipal/muj-mcom.pdf")],
  "manipal-pg-ma-journalism": [item("MUJ MA Journalism and Mass Communication Brochure", "/brochures/manipal/muj-majmc.pdf")],
  "manipal-pg-ma-english": [item("SMU MA English Program Brochure", "/brochures/manipal/smu-ma-english.pdf")],
  "manipal-pg-ma-political-science": [item("SMU MA Political Science Brochure", "/brochures/manipal/smu-ma-political-science.pdf")],
  "manipal-pg-ma-sociology": [item("SMU MA Sociology Program Brochure", "/brochures/manipal/smu-ma-sociology.pdf")],
};

