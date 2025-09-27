export type Course = {
  id: string;
  title: string;
  university: "Amity University" | "Manipal University";
  category: "Undergraduate" | "Postgraduate" | "Integrated" | "Certification";
  description: string;
  duration: string;
};

export const courses: Course[] = [
  {
    "id" : "ug-bba-gen",
    "title" : "Bachelor of Business Administration",
    "university": "Amity University",
    "category" : "Undergraduate",
    "description" : "Our Bachelor of Business Administration (BBA) is a comprehensive 3-year (6 semester) undergraduate program offering in-depth study of theoretical concepts and functional areas in Business Administration. Earn your Bachelor of Business Administration (Online BBA) degree conveniently, develop business acumen, learn from expert faculty, and collaborate with peers, all while balancing your commitments.",
    "duration" : "3 years"
  },
  {
    "id" : "pg-mba-gen",
    "title" : "MASTER OF BUSINESS ADMINISTRATION",
    "university": "Amity University",
    "category" : "Postgraduate",
    "description" : "A dynamic blend of academic excellence, AI-powered tools, and real-world projects designed to make you industry-ready. Experience personalized learning, 24x7 mentorship, and cutting-edge simulations that empower you to excel in today's digital-first business world.",
    "duration" : "2 years"
  },
  {
    "id" : "ug-bca-gen",
    "title" : "Bachelor of Computer Applications",
    "university": "Amity University",
    "category" : "Undergraduate",
    "description" : "Bachelor of Computer Applications (Online BCA) is a 3 years (6 semesters) course that will teach you the basics of software development and assist you in setting up a sound career in the field of computer applications as a software engineer, web designer or system analyst. Work on real-world projects, get mentoring sessions and complete your degree online.",
    "duration" : "3 years"
  },
  {
    "id" : "pg-mca-general",
    "title" : "Master of Computer Application",
    "university": "Amity University",
    "category" : "Postgraduate",
    "description" : "Our Master of Computer Application (Online MCA) is a 2 year (4 semesters) program that prepares you for the IT sector by teaching you the fundamentals of programming constructs and application modelling. Learn from renowned international faculty online and become industry-ready.",
    "duration" : "2 years"
  },
  {
    "id" : "ug-bcom-gen",
    "title" : "Bachelor of Commerce",
    "university": "Amity University",
    "category" : "Undergraduate",
    "description" : "Our Bachelors of Commerce Degree provides you with a strong foundation in business and economics, thereby opening up career opportunities in finance and accounting. Learn from an eminent international faculty and finish your degree online. Adapt to the ever-evolving job market and stay ahead of the curve.",
    "duration" : "3 years"
  },
  {
    "id" : "pg-mca-cyber",
    "title" : "Master of Computer Applications program with a specialization in Cyber security",
    "university": "Amity University",
    "category" : "Postgraduate",
    "description" : "A Master of Computer Applications program with a specialization in Cyber security online is tailored to equip students with advanced knowledge and skills in protecting digital systems, networks, and data from cyber threats. The curriculum starts with foundational courses covering computer networks, operating systems, and information security principles. Students then delve into specialized cybersecurity courses online topics such as ethical hacking, cryptography, risk management, and incident response. Throughout the program, students gain hands-on experience with cyber security tools and techniques, including penetration testing tools, encryption algorithms, and intrusion detection systems. They learn to identify vulnerabilities, assess risks, and implement security measures to safeguard against cyber attacks. Practical projects and simulations allow students to apply their cyber security skills in simulated environments, preparing them to address real-world cyber threats effectively. By graduation, students are well-equipped to pursue roles as cyber security analysts, security consultants, or information security managers, ready to protect organizations from cyber threats and ensure the integrity and confidentiality of digital assets. Partner with HCLTech for cutting-edge internships in your final semester!",
    "duration" : "2 years"
  },
  {
    "id" : "pg-mba-dual-spec",
    "title" : "MBA With Dual Specialization",
    "university": "Amity University",
    "category" : "Postgraduate",
    "description" : "Take your career to new heights with Amity University Online's globally accredited MBA with Dual Specialization. The 2-year program offers the flexibility to choose one major and one minor specialization from a diverse range of options, giving you in-depth knowledge in one field while building versatile skills in another. The curriculum is meticulously designed to address real-world challenges, which prepares you for cross-functional roles in today’s dynamic business environment. Recognized and valued by top employers globally, Amity Online's MBA with Dual Specialization is the ideal choice for professionals seeking career growth and global opportunities.",
    "duration" : "2 years"
  },
  {
    "id" : "pg-ma-psychology",
    "title" : "Master of Arts in Psychology",
    "university": "Amity University",
    "category" : "Postgraduate",
    "description" : "Our Master of Arts (Psychology) degree helps you navigate through complex societal issues and develop effective solutions. This online MA in Psychology degree program equips you to make a significant impact on the mental health and wellness of diverse populations in various settings, including hospitals, schools, government facilities, and more.",
    "duration" : "2 years"
  },
  {
    "id" : "ug-bba-data-analytics",
    "title" : "Bachelor of Business Administration with specialization in Data Analytics",
    "university": "Amity University",
    "category" : "Undergraduate",
    "description" : "A Bachelor of Business Administration with specialization in Data Analytics blends business fundamentals with cutting-edge data skills. Students delve into core business subjects like finance, marketing, and management, alongside specialized courses in statistical analysis, data mining, and machine learning. These courses equip students with the ability to collect, analyze, and interpret data to drive strategic business decisions. The curriculum typically includes quantitative analysis training, teaching students to apply mathematical and statistical techniques to solve business problems. Moreover, students learn programming languages like Python and R for data manipulation and analysis. Hands-on projects and internships allow students to apply their skills to real-world scenarios, preparing them for the demands of the industry. Ethical considerations and privacy concerns in data usage are also emphasized. Overall, this program empowers graduates with a blend of business acumen and technical expertise, positioning them for roles in business intelligence, market research, and strategic decision-making, where proficiency in data analytics is paramount. Gain practical experience with HCLTech internships as you complete your major project!",
    "duration" : "3 years"
  },
  {
    "id" : "ug-bca-cloud-security",
    "title" : "Bachelor of Computer Applications (BCA) with Specialization in Cloud and Security",
    "university": "Amity University",
    "category" : "Undergraduate",
    "description" : "Our Bachelor of Computer Applications with specialization in Cloud and Security and equips students with comprehensive knowledge of cloud computing, spanning architecture, development, and security. It provides students with an in-depth understanding and practical application of information using data mining and analytics. It particularly focuses on areas such as information security, cryptography, and cybersecurity, providing students with a well-rounded skill set in these domains. Get Assured Internship Opportunities: Internship opportunities for all eligible learners from the IHP subject/courses. Placement support by Amity University Online, trusted by our students, through various virtual placement drives. Get additional benefits of TCS iON National Qualifier Test (NQT) – Cognitive & Subject tests.",
    "duration" : "3 years"
  },
  {
    "id" : "ug-ba-gen",
    "title" : "Bachelor of Arts degree (BA Course)",
    "university": "Amity University",
    "category" : "Undergraduate",
    "description" : "Our Bachelor of Arts degree (BA Course) is a 3 years and 6 semesters program that will equip you with skills and knowledge required in an evolving job market. Acquire problem solving skills and expand your career prospects among your peers.",
    "duration" : "3 years"
  },
  {
    "id" : "ug-bajmc",
    "title" : "Bachelor of Arts in Journalism and Mass Communication (BAJMC)",
    "university": "Amity University",
    "category" : "Undergraduate",
    "description" : "Our BA in Journalism and Mass Communication (BAJMC) program will help you gain essential skills in writing, reporting, editing and multimedia production. Learn from an international faculty online and become media-savvy with critical thinking abilities.",
    "duration" : "3 years"
  },
  {
    "id" : "pg-mcom-financial-mgmt",
    "title" : "Master of Commerce ( Financial Management )",
    "university": "Amity University",
    "category" : "Postgraduate",
    "description" : "Our Master of Commerce degree will equip you with in-depth knowledge and specialisation in areas such as finance, marketing and accounting. Complete your degree online with an international faculty and earn your place in leadership positions. Develop analytical skills and shine among your peers in top sectors.",
    "duration" : "2 years"
  },
  {
    "id" : "pg-ma-journalism",
    "title" : "Master of Arts in Journalism and Mass Communication",
    "university": "Amity University",
    "category" : "Postgraduate",
    "description" : "Our MA in Journalism and Mass Communication program that offers insights into journalistic storytelling, media production and communication strategies. Complete your degree online with our international faculty and gain a competitive edge in the job market. Engage in cutting-edge research and live industry projects to showcase your talent.",
    "duration" : "2 years"
  },
  {
    "id" : "pg-ma-public-policy",
    "title" : "Master of Arts in Public Policy and Governance",
    "university": "Amity University",
    "category" : "Postgraduate",
    "description" : "Our MA in Public Policy and Governance helps you navigate through complex societal issues and develop effective policy solutions. Become well prepared to work on international issues and solve challenges by completing your degree online. Get global education from a renowned faculty and become a valuable asset in various sectors.",
    "duration" : "2 years"
  },
  {
    "id" : "ug-bca-software-eng",
    "title" : "Bachelor of Computer Applications program with a specialization in Software Engineering",
    "university": "Amity University",
    "category" : "Undergraduate",
    "description" : "A Bachelor of Computer Applications program with a specialization in Software Engineering focuses on blending core computer science concepts with practical software development skills. Students begin with foundational courses covering programming languages, data structures, algorithms, and computer architecture. Then, they dive into specialized software engineering topics like development methodologies, software design, testing, and project management. By the end of the program, graduates are well-prepared for careers as software engineers, developers, or analysts. They possess the technical skills and practical experience needed to design, develop, and maintain software systems effectively, meeting the demands of the ever-evolving tech industry. Gain practical experience with HCLTech internships as you complete your major project!",
    "duration" : "3 years"
  },
  {
    "id" : "pg-mca-software-eng",
    "title" : "Master of Computer Applications program with a specialization in Software Engineering",
    "university": "Amity University",
    "category" : "Postgraduate",
    "description" : "A Master of Computer Applications program with a specialization in Software Engineering is designed to provide students with advanced knowledge and skills in both computer science fundamentals and software development practices. Students start with core courses covering advanced topics in programming languages, algorithms, and computer architecture. They then delve into specialized software engineering areas such as software design, development methodologies, and software testing. Throughout the program, students gain hands-on experience with modern software development tools and technologies, including integrated development environments (IDEs), version control systems, and software testing frameworks. They learn to design and develop complex software systems, following industry best practices and standards. Practical projects and internships allow students to apply their software engineering skills to real-world problems, gaining valuable industry experience. By graduation, students are equipped to pursue roles as software engineers, software developers, or technical leads, prepared to tackle complex software development challenges and contribute effectively to the technology industry. Partner with HCLTech for cutting-edge internships in your final semester!",
    "duration" : "2 years"
  },
  {
    "id" : "pg-msc-data-science",
    "title" : "Master of Science (Data Science)",
    "university": "Amity University",
    "category" : "Postgraduate",
    "description" : "This Master of Science (Data Science) program is designed for you to build a distinctive career in analytical and leadership roles in various sectors. With a perfect blend of machine learning, big data analytics, and statistics, the program helps you gain experience in solving problems with real-world data.",
    "duration" : "2 years"
  },
  {
    "id" : "ug-bcom-hons",
    "title" : "Bachelor of Commerce (Hons)",
    "university": "Amity University",
    "category" : "Undergraduate",
    "description" : "Our Bachelor of Commerce (Hons) degree provides you with a strong foundation in business and economics, thereby opening up career opportunities in finance and accounting. Learn from an eminent international faculty and finish your degree online. Adapt to the ever-evolving job market and stay ahead of the curve.",
    "duration" : "3 years"
  },
  {
    "id" : "ug-bcom-hons-dup",
    "title" : "Bachelor of Commerce (Hons)",
    "university": "Amity University",
    "category" : "Undergraduate",
    "description" : "Our Bachelor of Commerce (Hons) degree provides you with a strong foundation in business and economics, thereby opening up career opportunities in finance and accounting. Learn from an eminent international faculty and finish your degree online. Adapt to the ever-evolving job market and stay ahead of the curve.",
    "duration" : "3 years"
  },
  {
    "id" : "ug-bcom-ifna",
    "title" : "Bachelor of Commerce with specialization in International Finance & Accounting",
    "university": "Amity University",
    "category" : "Undergraduate",
    "description" : "This program in International Finance and Accounting accredited by ACCA, UK prepares students to become skilled leaders and entrepreneurial specialists in finance. By nurturing technical expertise and fostering strategic thinking alongside ethical values, the program opens doors to various job opportunities such as Audit, Corporate Reporting, Financial Management, Taxation, Governance, and Ethics. Completing the program with an ACCA qualification sets graduates up for successful careers in the global realm of accounting and finance. Get 9 ACCA paper exemptions!",
    "duration" : "3 years"
  },
  {
    "id" : "int-ug-pg",
    "title" : "UG + PG Degree Program",
    "university": "Amity University",
    "category" : "Integrated",
    "description" : "The UG + PG Degree Program is designed for ambitious learners who want to fast-track their education and career. By combining a Bachelor’s and Master’s degree into just 4.5* years, inclusive of an internship, this program saves you valuable time and money. With options like BBA + MBA, BCA + MCA, and B.Com + MBA, it caters to diverse career aspirations while equipping you with in-depth knowledge, advanced skills, and real-world experience through projects and case studies. Graduate job-ready, gain a competitive edge in today’s market, and achieve your career goals with efficiency and expertise. (*1. As per the recent regulatory notification on Accelerated Degree Programs 2. Based on your performance in Year 1.)",
    "duration" : "4.5 years"
  },
  {
    "id" : "int-bba-mba",
    "title" : "BBA + MBA Degree Program",
    "university": "Amity University",
    "category" : "Integrated",
    "description" : "Fast-track your journey to becoming a business leader with our BBA + MBA Degree Program. This streamlined pathway allows you to earn both a Bachelor’s and Master’s degree in just 4.5* years, combining foundational knowledge with advanced expertise. Gain a competitive edge through an integrated curriculum, a corporate internship for real-world experience, and the cost-saving benefits of a comprehensive dual-degree program. Equip yourself with the skills and credentials needed to excel in today’s dynamic business world and graduate ready to take on leadership roles with confidence and distinction. (*1. As per the recent regulatory notification on Accelerated Degree Programs 2. Based on your performance in Year 1.)",
    "duration" : "4.5 years"
  },
  {
    "id" : "int-bcom-mba",
    "title" : "B.Com + MBA Degree Program",
    "university": "Amity University",
    "category" : "Integrated",
    "description" : "Amity Online's B.Com + MBA Degree Program is meticulously crafted to blend commerce expertise with business acumen. This unique program offers dual qualifications in just 4.5* years, and an internship will help you gain practical exposure with hands-on expertise. With a comprehensive curriculum that transitions seamlessly from fundamentals to advanced skills, it equips you for success in finance, marketing, and management roles. Elevate your career prospects with this efficient and streamlined path to dual expertise, and graduate career-ready to lead the business world with confidence and competence. (*1. As per the recent regulatory notification on Accelerated Degree Programs 2. Based on your performance in Year 1.)",
    "duration" : "4.5 years"
  },
  {
    "id" : "int-bca-mca",
    "title" : "BCA + MCA Degree Program",
    "university": "Amity University",
    "category" : "Integrated",
    "description" : "Amity Online’s BCA + MCA Degree Program offers a unique opportunity to turn your passion for technology into expertise with a dual-degree advantage. In just 4.5* years, you can earn both a Bachelor’s and Master’s degree, setting you on a fast-tracked, tech-driven career path. The program combines foundational learning with advanced, cutting-edge technologies, ensuring you graduate industry ready. The inclusive internship provides hands-on experience through real-world tech projects, enhancing your practical knowledge. With this accelerated program, you’ll emerge as a highly skilled innovator equipped to thrive in the ever-evolving tech world. (*1. As per the recent regulatory notification on Accelerated Degree Programs 2. Based on your performance in Year 1.)",
    "duration" : "4.5 years"
  },
  {
    "id" : "ug-bca-data-science",
    "title" : "Bachelor of Computer Applications in Data Science",
    "university": "Amity University",
    "category" : "Undergraduate",
    "description" : "Bachelor of Computer Applications (Online BCA) in Data Science is a 3-year (6-semester) program designed to equip you with foundational knowledge in data analysis, machine learning, and statistical modeling. This degree will prepare you for a rewarding career as a Data Analyst, Machine Learning Engineer, or Business Intelligence Specialist. You'll gain practical experience through real-world projects and benefit from mentoring sessions, all while completing your degree online.",
    "duration" : "3 years"
  },
  {
    "id" : "ug-bca-data-engineering",
    "title" : "Bachelor of Computer Applications with specialization in Data Engineering",
    "university": "Amity University",
    "category" : "Undergraduate",
    "description" : "A Bachelor of Computer Applications with specialization in Data Engineering focuses on merging core computer science principles with practical data management and processing skills. Students begin with foundational courses covering programming languages, data structures, and database management systems. Then, they advance into specialized data engineering topics such as data modeling, data warehousing, and big data technologies. Throughout the program, students gain hands-on experience with tools and platforms commonly used in data engineering, such as Hadoop, Spark, and Apache Kafka. They learn to design and build data pipelines, integrate data from various sources, and ensure the reliability and efficiency of data workflows. Practical projects and internships provide students with real-world exposure, allowing them to apply their data engineering skills to solve practical challenges. Upon completion of the program, graduates are well-prepared for roles as data engineers, data architects, or database administrators, equipped to design, build, and manage robust data infrastructure to support the needs of modern organizations. Gain practical experience with HCLTech internships as you complete your major project!",
    "duration" : "3 years"
  },
  {
    "id" : "ug-bba-travel-tourism",
    "title" : "Bachelor of Business Administration in Travel and Tourism Management",
    "university": "Amity University",
    "category" : "Undergraduate",
    "description" : "Our Bachelor of Business Administration in Travel and Tourism Management is a 3-year (6 semesters) program designed to equip you with a deep understanding of the global tourism and hospitality industry. Learn from industry leaders, explore real-world case studies, and develop essential business and management skills tailored to the dynamic travel and tourism sector. Engage with a diverse community of learners and gain hands-on knowledge through projects and practical exposure. Excel in the evolving world of travel, tourism, and hospitality with Amity Online's flexible and industry-relevant program.",
    "duration" : "3 years"
  },
  {
    "id" : "ug-bba-professional-cert-business-analytics",
    "title" : "Bachelor of Business Administration Professional Certificate in Business Analytics",
    "university": "Amity University",
    "category" : "Undergraduate",
    "description" : "Gain a dual advantage with Amity Online’s BBA with a Professional Certificate in Business Analytics. Master core business management and data-driven decision-making skills with hands-on training in Excel, Power BI, and Python. With the 13-week Professional Certificate in Business Analytics, learn from industry experts, work on real-world projects, and step into the business world with future-ready expertise and confidence.",
    "duration" : "3 years"
  },
  {
    "id" : "ug-bbca-applied-data-eng",
    "title" : "Bachelor of Computer Applications Professional Certificate in Applied Data Engineering",
    "university": "Amity University",
    "category" : "Undergraduate",
    "description" : "Unlock dual expertise with our 3-year BCA program integrated with a Professional Certificate in Applied Data Engineering. Master computer applications and cutting-edge data engineering skills, guided by industry experts. With the 14-week Professional Certificate in Applied Data Engineering, learn to build data pipelines, work on real-world projects, and gain in-demand knowledge of cloud and big data technologies. Stand out in the competitive tech world and accelerate your career with Amity Online’s flexible and globally recognized program.",
    "duration" : "3 years"
  },
  {
    "id" : "pg-mba-hr-analytics",
    "title" : "Master of Business Administration with specialization in Human Resource Analytics",
    "university": "Amity University",
    "category" : "Postgraduate",
    "description" : "Gain hands-on experience by learning to analyze HR data and taking strategic decisions using predictive analytics in HR. Enroll yourself in a comprehensive curriculum that will prepare you for business leadership in the 21st century.",
    "duration" : "2 years"
  },
  {
    "id" : "pg-mba-data-science",
    "title" : "Master of Business Administration with specialization in Data Science",
    "university": "Amity University",
    "category" : "Postgraduate",
    "description" : "This specialized program MBA in data science aims to transform data into valuable business insights while providing expertise in high-demand tools and technologies within the industry. Our extensive curriculum is designed to equip learners with the latest data-driven technologies in the field of data science. The module is crafted to be result-oriented, challenging and to foster the development of skills necessary for business leadership in the 21st century.",
    "duration" : "2 years"
  },
  {
    "id" : "pg-mba-business-analytics",
    "title" : "Master of Business Administration with specialization in Business Analytics",
    "university": "Amity University",
    "category" : "Postgraduate",
    "description" : "We offer a cutting-edge analytics program, delivered by prominent industry leaders and esteemed faculty. This specialized course aims to empower learners with sought-after skills in utilizing advanced statistical methods and data visualization tools for handling dynamic data. Structured with a focus on tangible outcomes, challenge-driven coursework, and a comprehensive curriculum, the program is designed to equip students for leadership roles in the 21st century.",
    "duration" : "2 years"
  },
  {
    "id" : "pg-mca-blockchain",
    "title" : "Master of Computer Applications with specialization in Blockchain Technology and Management",
    "university": "Amity University",
    "category" : "Postgraduate",
    "description" : "The demand for blockchain professionals is on the rise. With this mca specialization, students will gain access to diverse career paths. Graduates can explore roles in blockchain development, cybersecurity, fintech, supply chain, and more as companies across industries integrate blockchain solutions. The course not only offers a deep understanding of an innovative technology but also provides a pathway to rewarding and impactful career opportunities in a wide array of industries.",
    "duration" : "2 years"
  },
  {
    "id" : "pg-mca-ml-ai",
    "title" : "Master of Computer Applications with specialization in Machine Learning and Artificial Intelligence",
    "university": "Amity University",
    "category" : "Postgraduate",
    "description" : "Our UGC-approved online MCA program fosters innovation in the advanced realms of Machine Learning and Deep Learning techniques. This distinctive program is customized to empower a new breed of leaders, offering a broad scope beneficial to both seasoned professionals and newcomers. It enables them to acquire extensive insights, versatile competencies, and specialized expertise crucial for success in a dynamically evolving economy. The course focuses on emerging technologies like Artificial Intelligence (AI) and Machine Learning (ML).",
    "duration" : "2 years"
  },
  {
    "id" : "pg-mca-ml-ai-short",
    "title" : "MCA with specialization in Machine Learning & Artificial Intelligence (ML & AI)",
    "university": "Amity University",
    "category" : "Postgraduate",
    "description" : "An MCA with specialization in Machine Learning & Artificial Intelligence covers end-to-end, in-depth, industry-ready curriculum on different domains and technologies of artificial intelligence, machine learning, deep learning, etc. It equips students with in-depth knowledge of algorithms, data analysis, artificial intelligence, and deep learning techniques, preparing them for careers in data science, AI development, and related fields. Get Assured Internship Opportunities: Internship opportunities for all eligible learners from the IHP subject/courses. Placement support by Amity University Online, trusted by our students, through various virtual placement drives. Get additional benefits of TCS iON National Qualifier Test (NQT) – Cognitive & Subject tests.",
    "duration" : "2 years"
  },
  {
    "id" : "pg-mba-intl-finance",
    "title" : "Master of Business Administration with specialization in International Finance",
    "university": "Amity University",
    "category" : "Postgraduate",
    "description" : "Our program is accredited by ACCA, UK and focuses on global financial dynamics, studying how money circulates internationally and how multinational companies manage their finances and investments across borders. It also delves into international banking systems and the exchange of foreign currencies. Graduates gain enhanced value and increased job opportunities, both locally and globally, due to the expertise gained from this program. Get 9 ACCA paper exemptions!",
    "duration" : "2 years"
  },
  {
    "id" : "pg-mba-digital-entrepreneurship",
    "title" : "Master of Business Administration with specialization in Digital Entrepreneurship",
    "university": "Amity University",
    "category" : "Postgraduate",
    "description" : "Our specialized MBA with specialization in Digital Entrepreneurship offers a hands-on approach, using real-world examples to teach budding entrepreneurs and business leaders the core concepts of entrepreneurship. The program focuses on a practical, result-oriented curriculum tailored for 21st-century business leadership. It teaches students to think of ideas and make them successful in the market, along with equipping them to solve problems and find innovative solutions.",
    "duration" : "2 years"
  },
  {
    "id" : "pg-mcom-fintech",
    "title" : "Master of Commerce with specialization in Financial Technology",
    "university": "Amity University",
    "category" : "Postgraduate",
    "description" : "This program offers fintech insights and centers on understanding digital regulations and consumer adoption in the upcoming digital world. It aims to prepare graduates and working professionals in Financial Management and thus empower them to create value through fintech and utilize fintech opportunities for organizations. The finance industry is rapidly evolving through technology. Fintech specialization equips students with comprehensive knowledge, providing a competitive edge in understanding financial innovations. Graduates can pursue careers as financial analysts, fintech consultants, risk managers, or in entrepreneurial ventures. Learning Fintech fosters an innovative mindset, crucial for modern financial landscape.",
    "duration" : "2 YEARS"
  },
  {
    "id" : "ug-bcom-intl-finance",
    "title" : "Bachelor of Commerce with specialization in International Finance & Accounting",
    "university": "Amity University",
    "category" : "Undergraduate",
    "description" : "This program in International Finance and Accounting accredited by ACCA, UK prepares students to become skilled leaders and entrepreneurial specialists in finance. By nurturing technical expertise and fostering strategic thinking alongside ethical values, the program opens doors to various job opportunities such as Audit, Corporate Reporting, Financial Management, Taxation, Governance, and Ethics. Completing the program with an ACCA qualification sets graduates up for successful careers in the global realm of accounting and finance. Get 9 ACCA paper exemptions!",
    "duration" : "3 YEARS"
  },
  {
    "id" : "pg-mca-ar-vr",
    "title" : "Master of Computer Applications with specialization in Augmented Reality and Virtual Reality",
    "university": "Amity University",
    "category" : "Postgraduate",
    "description" : "This program covers in-depth knowledge of immersive experience, enabling students to specialize in domains including augmented reality, virtual reality, machine learning, and conversational experiences. The unique blend of immersive experience with machine learning and conversational experience grooms learners with the next-generation skills and knowledge. Get Assured Internship Opportunities: Internship opportunities for all eligible learners from the IHP subject/courses. Placement support by Amity University Online, trusted by our students, through various virtual placement drives. Get additional benefits of TCS iON National Qualifier Test (NQT) – Cognitive & Subject tests.",
    "duration" : "2 years"
  },
  {
    "id" : "pg-mba-digital-marketing",
    "title" : "Master of Business Administration with specialization in Digital Marketing",
    "university": "Amity University",
    "category" : "Postgraduate",
    "description" : "Embrace transformation by enrolling in our specialized MBA program with a focus on digital marketing. Gain comprehensive knowledge, hands-on experience, and strategic acumen crucial for excelling in the dynamic realm of MBA in digital marketing. Propel your career toward triumph in the digital era.",
    "duration" : "2 years"
  },
  {
    "id" : "pg-mba-general-management",
    "title" : "Master of Business Administration in General Management",
    "university": "Amity University",
    "category" : "Postgraduate",
    "description" : "Amity Online’s MBA in General Management is a 2-year, 4-semester program designed to develop well-rounded leaders with expertise in key business areas like Marketing, Finance, Operations, and Strategy. The curriculum combines theoretical knowledge with practical learning through case studies and industry projects, preparing you to address complex business challenges. This program will overall hone your ability to make strategic decisions, lead diverse teams, and drive organizational success across industries. If you choose to specialize in a specific field, you have the opportunity to do so in your second year.",
    "duration" : "2 years"
  },
  // Manipal University Courses
    {
      "id": "manipal-pg-mba-gen",
      "title": "Master of Business Administration",
      "university": "Manipal University",
      "category": "Postgraduate",
      "description": "Prepare for the future workplace with this UGC-entitled online Master of Business Administration (MBA) from Manipal University Jaipur (MUJ), a NAAC A+ rated university. This QS-ranked MBA degree offers 13 career-focused specializations such as Digital Marketing, Operations, International Business, and Analytics & Data Science. During the third semester, learners can opt for either a super specialization by selecting one elective group to become a domain expert, or a dual specialization to hone skills in two distinct domains. With this 100% online MBA program, learners have exclusive access to Coursera to earn industry-relevant certificates in high-demand skills. Boost career prospects with placement assistance and build a robust professional network with access to the Manipal Alumni network.",
      "duration": "2 years"
    },
    {
      "id": "manipal-ug-bba-gen",
      "title": "Bachelor of Business Administration",
      "university": "Manipal University",
      "category": "Undergraduate",
      "description": "Prepare for a management career with an online Bachelor of Business Administration (BBA) program from Manipal University Jaipur (MUJ). This three-year online undergraduate program is suitable for students who completed 10+2 to stand out in various sectors like banking & insurance, hospitality, healthcare, manufacturing, and others. Learners can choose from 7 in-demand electives such as Finance & Accounting, Digital Marketing, Entrepreneurship & Family Business, Retail & E-commerce, and more allowing learners to tailor their education to their career paths. Experience anytime, anywhere learning through an advanced platform that gives access to the latest pedagogy with exhaustive e-learning content and live & recorded classes by expert faculty. With this 100% online BBA program, learners receive exclusive access to Coursera to earn industry-relevant certificates from global universities and companies.",
      "duration": "3 years"
    },
    {
      "id": "manipal-ug-bca-gen",
      "title": "Bachelor of Computer Application",
      "university": "Manipal University",
      "category": "Undergraduate",
      "description": "The online Bachelor of Computer Application ( BCA) from Manipal University Jaipur (MUJ) is designed to prepare learners for the dynamic IT industry. This 3-year online undergraduate program covers the foundations of computer applications while allowing learners to enhance their expertise in software development, programming, machine learning, and database management. Hone your coding skills in a high-tech virtual programming environment and receive exclusive access to Coursera to earn internationally recognized certificates from universities and tech companies. During the final year of this online BCA course, learners can choose electives from Cloud Computing, Data Science & Analytics, and Cybersecurity to boost their career prospects in emerging domains.",
      "duration": "3 years"
    },
    {
      "id": "manipal-pg-mca-gen",
      "title": "Master of Computer Application",
      "university": "Manipal University",
      "category": "Postgraduate",
      "description": "The online Master of Computer Application (MCA) from NAAC A+ accredited Manipal University Jaipur (MUJ) is designed to empower learners to excel as strategic and innovative technology leaders in the data-driven digital world. By combining practical labs and theory, this 2-year online MCA degree program equips learners with the skills across key areas of computer applications & IT. Specialize in new-age domains by choosing from electives such as AI, data science, machine learning, cloud computing, cybersecurity, and emerging technologies. Learners can also earn additional skill-oriented certifications from Microsoft and Coursera, along with access to extensive e-libraries, an advanced virtual programming lab, and industry expert sessions.",
      "duration": "2 years"
    },
    {
      "id": "manipal-ug-bcom-gen",
      "title": "Bachelor of Commerce",
      "university": "Manipal University",
      "category": "Undergraduate",
      "description": "Boost your career prospects with an online Bachelor of Commerce (BCom) from Manipal University Jaipur (MUJ), a NAAC A+ accredited institution. This 100% online undergraduate degree program is designed to equip learners with high-demand skills in the field of commerce. Through this online BCom degree, learners are exposed to the working knowledge of accounting principles, export & import laws, economic policies, and other key areas that influence trade and business. The advanced learning management system allows learners to access superior learning materials, live and recorded classes, discussion forums, and quizzes, all from the comfort of their homes.",
      "duration": "3 years"
    },
    {
      "id": "manipal-pg-ma-economics",
      "title": "Master of Arts in Economics",
      "university": "Manipal University",
      "category": "Postgraduate",
      "description": "The online Master of Arts (MA) in Economics from Manipal University Jaipur (MUJ) is designed to equip learners with future-ready skill sets to succeed in the dynamic policy-making fields. Delivered by experienced faculty, the robust curriculum of this online MA in Economics covers a wide range of topics, including public economics & policies, health economics, game theory, environmental economics, and others. The program is offered through an advanced learning management system that allows 24/7 learning by providing access to cutting-edge content, live and recorded classes, video tutorials, discussion forums, and quizzes. Learners also receive exclusive access to Coursera to earn in-demand certificates from top organizations to enhance their career prospects in various sectors.",
      "duration": "2 years"
    },
    {
      "id": "manipal-pg-mcom-gen",
      "title": "Master of Commerce",
      "university": "Manipal University",
      "category": "Postgraduate",
      "description": "The online Master of Commerce (MCom) program from Manipal University Jaipur (MUJ) is designed to equip learners with the essential skills to fast-track their careers in the evolving business ecosystem. The exhausted curriculum helps learners to become future-ready professionals by gaining an in-depth understanding of areas like cost analysis & control, corporate tax laws & planning, and international business & e-commerce. Through an advanced learning portal, learners can attend live & recorded classes delivered by experienced faculty, access extensive e-libraries, participate in discussion forums, and take online examinations, all from the comfort of home. With this online MCom course, learners can also earn additional certificates from global universities and companies through Coursera and boost their career prospects and professional networks with placement assistance and Manipal Alumni status.",
      "duration": "2 years"
    },
    {
      "id": "manipal-pg-ma-journalism",
      "title": "Master of Arts (MA) in Journalism and Mass Communication",
      "university": "Manipal University",
      "category": "Postgraduate",
      "description": "The online Master of Arts (MA) in Journalism and Mass Communication from Manipal University Jaipur (MUJ) is designed to produce future-ready media professionals with essential skills that equip them to thrive in the evolving media industry. This flexible two-year online postgraduate degree enables learners to gain hands-on experience in writing for new media, digital publishing, audio-visual editing, script & screenwriting, mobile editing software, and photography. Delivered by experienced faculty, learners can master concepts such as news & reporting, broadcast journalism, digital media marketing, and film appreciation - while continuing to full-time work. Learners also receive exclusive access to Coursera to earn globally recognized certificates from top universities and organizations and 100% placement assistance.",
      "duration": "2 years"
    },
    {
      "id": "manipal-pg-ma-english",
      "title": "Master of Arts (MA) in English",
      "university": "Manipal University",
      "category": "Postgraduate",
      "description": "The online Master of Arts (MA) in English from Sikkim Manipal University (SMU) is designed for learners to delve into the world of English language and literature across periods and cultures. With a comprehensive curriculum, learners can master key areas in English literature, including gender studies in literature, literary theory & criticism, postcolonial literature, Commonwealth literature, and more. Through an AI-powered platform, online MA in English learners can access learning resources, live and recorded classes, discussion forums, e-libraries, AI-tutor, and quizzes - all while you continue to work. The program helps learners boost their career prospects through networking opportunities and alumni status.",
      "duration": "2 years"
    },
    {
      "id": "manipal-pg-ma-political-science",
      "title": "Master of Arts (MA) in Political Science",
      "university": "Manipal University",
      "category": "Postgraduate",
      "description": "The online Master of Arts (MA) in Political Science from Sikkim Manipal University (SMU) is designed for learners with advanced knowledge and skills in political systems to stand out in their careers. With an up-to-date curriculum, learners can learn key political science subjects such as political theory, international politics, comparative politics, peace & conflicts, and more. This online master's degree program, delivered by expert faculty through live and recorded classes, enables learners to pursue new opportunities and advance their careers in public policy, advocacy, academia, government, and media. The AI-powered learning management system allows learners to access learning materials, e-libraries, discussion forums, and quizzes to learn anytime, anywhere.",
      "duration": "2 years"
    },
    {
      "id": "manipal-pg-ma-sociology",
      "title": "Master of Arts (MA) in Sociology",
      "university": "Manipal University",
      "category": "Postgraduate",
      "description": "The online Master of Arts (MA) in Sociology from Sikkim Manipal University (SMU) is designed to equip learners with the latest advancements in the field of sociology. This two-year online master's degree program covers sociological thoughts, gender and society, sociological theories, sociology of development, and sociology of health. Delivered through an AI-powered learning platform, learners can access up-to-date resources, live and recorded classes, quizzes, discussion forums, and online proctored examinations from the comfort of their homes. This affordable sociology degree program enables learners to boost their career prospects in social service, advocacy, academia, non-government sectors, and media.",
      "duration": "2 years"
    },
];
