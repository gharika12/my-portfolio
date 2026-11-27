export const personalInfo = {
  name: "G. Harika",
  preferredName: "Harika",
  roleHeadline: "MCA Student | Aspiring IT Professional",
  location: "Bengaluru, India",
  email: "gharikareddy40@gmail.com",
  github: "https://github.com/gharika12",
  githubUsername: "gharika12",
  linkedin: "https://linkedin.com/in/g-harika-65aa26427",
  linkedinUsername: "g-harika-65aa26427",
  portfolio: "https://gharika.dev",
  tagline: "Learning Today. Building Tomorrow. Exploring AI Possibilities.",
  about: "I am Harika, an MCA student with a strong interest in Python development, Artificial Intelligence and Machine Learning. I enjoy learning new technologies, solving problems and building practical projects. I am continuously improving my technical skills and looking forward to starting my career in the IT industry.",
  summary: "I am an MCA student with a strong interest in Artificial Intelligence, Python programming and Full Stack Development. I am currently building my technical knowledge and practical skills through continuous learning and academic projects. I have basic knowledge of Python, HTML and CSS and am exploring Machine Learning and AI technologies. I am also working on research related to detecting and preventing AI hallucinations. As a quick learner with good communication and problem-solving skills, I am eager to gain practical experience and begin my career in the IT industry.",
  roles: [
    "Aspiring Software Developer",
    "Full Stack Developer",
    "Machine Learning",
    "Trustworthy AI"
  ],
  stats: [
    { label: "BCA CGPA", value: "9.18", highlight: "Bengaluru North University" },
    { label: "Internship", value: "Full Stack AI", highlight: "Zeta Coding Solutions" },
    { label: "Project", value: "CKD Detection", highlight: "ML & Flask" },
    { label: "Research", value: "PHPS Framework", highlight: "LLM Hallucinations" }
  ]
};

export const technicalSkills = [
  {
    category: "Programming Languages",
    skills: ["Python", "PHP", "SQL", "C", "C#"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Django", "Flask", "Laravel", "React", "Tailwind CSS", "Bootstrap"]
  },
  {
    category: "Web Technologies",
    skills: ["HTML5", "CSS3", "REST APIs", "WordPress", "WooCommerce", "Elementor"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"]
  },
  {
    category: "Tools & DevOps",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Kubernetes",
      "Nginx",
      "CI/CD",
      "Postman",
      "VS Code",
      "MS Excel (Pivot Tables, XLOOKUP)",
      "AWS & Azure (fundamentals)"
    ]
  },
  {
    category: "AI & Data",
    skills: [
      "LangChain",
      "LangGraph",
      "Neo4j",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Power BI",
      "Model training and evaluation",
      "Feature engineering"
    ]
  }
];

export const workExperience = [
  {
    role: "Full Stack AI with Python Intern",
    company: "Zeta coding innovative solutions",
    period: "19th-jan-2026 – 21st-feb-2026",
    bullets: [
      "Developed and tested Python-based machine learning models using Pandas, NumPy and Scikit-learn.",
      "Built web application features using HTML, CSS, JavaScript and Flask, connecting the front end to trained models through APIs.",
      "Cleaned and pre-processed datasets handled missing values and evaluated models using accuracy, precision and recall.",
      "Used Git and GitHub for version control and collaborated with the team on code reviews."
    ]
  }
];

export const project = {
  title: "Chronic Kidney Disease (CKD) Detection using Machine Learning",
  tech: "Python, Pandas, NumPy, Scikit-learn, Flask",
  bullets: [
    "Built a classification model to predict the presence of chronic kidney disease from clinical patient data (blood pressure, serum creatinine, haemoglobin, albumin and others).",
    "Pre-processed the dataset: handled missing values, encoded categorical features and scaled numerical features.",
    "Trained and compared multiple algorithms and selected the best model based on accuracy, precision, recall and confusion matrix.",
    "Created a Flask web interface where users enter patient values and get a CKD / non-CKD prediction."
  ]
};

export const researchPaper = {
  title: "A Proactive Framework for Detecting and Preventing AI Hallucinations Before Answer Delivery",
  institution: "Acharya Bangalore B-School, Dept. of MCA, Bengaluru",
  domain: "AI · NLP · Trustworthy AI · Hallucination Prevention",
  date: "2026",
  pdfUrl: "/research-paper.pdf",
  abstract: "Artificial Intelligence (AI), particularly Large Language Models (LLMs), has become increasingly important in generating information, answering questions, and supporting decision-making across various fields. However, one of the major challenges associated with these systems is AI hallucination, where AI generates false, fabricated, or unsupported information while presenting it as factual. This research proposes a Proactive Pre-Answer Verification Framework that introduces an additional verification layer between AI response generation and final answer delivery. The proposed framework aims to examine AI-generated responses by evaluating factual consistency, supporting evidence, reliability, and uncertainty levels, assigning a hallucination risk score to identify potentially unreliable information and classify responses into low, medium, and high-risk categories to prevent hallucinations before reaching the user.",
  keywords: [
    "Artificial Intelligence",
    "AI Hallucination Detection",
    "Pre-Answer Verification",
    "Large Language Models",
    "Hallucination Prevention"
  ],
  stages: [
    { name: "Claim Extraction", desc: "Splits generated draft answers into atomic, independently checkable factual statements." },
    { name: "Factual Consistency Check", desc: "Generates k sample responses at non-zero temperature to compute consistency score F across samples." },
    { name: "Evidence Support & Source Reliability", desc: "Queries vetted knowledge bases with natural-language-inference (NLI) to calculate evidence score E and source tier weight L." },
    { name: "Uncertainty Estimation", desc: "Measures semantic entropy and token probabilities calibrated to derive uncertainty score U." }
  ],
  riskScoreFormula: "R = w_F(1 - F) + w_E(1 - E) + w_L(1 - L) + w_U · U",
  riskCategories: [
    { category: "Low Risk", range: "R < 0.30", action: "Deliver response immediately as generated." },
    { category: "Medium Risk", range: "0.30 ≤ R ≤ 0.60", action: "Run additional verification; append uncertainty note if risk stays elevated." },
    { category: "High Risk", range: "R > 0.60", action: "Request regeneration; if still high, display claim-specific uncertainty warning or decline to answer." }
  ],
  bullets: [
    "Proposes a proactive pre-answer verification layer placed between response generation and final user delivery.",
    "Formulates a composite risk score (R) combining factual consistency (F), evidence support (E), source reliability (L), and uncertainty estimation (U).",
    "Establishes a three-tier decision policy: immediate delivery (low risk), additional verification (medium risk), or regeneration/warning (high risk).",
    "Designed an evaluation against standard benchmarks (TruthfulQA, FActScore) to enhance trust, transparency, and reliability in mission-critical AI."
  ]
};

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Acharya Bangalore B-School",
    period: "2026 – Present",
    score: null
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Bengaluru North University",
    period: "2023 – 2026",
    score: "9.18 CGPA"
  },
  {
    degree: "12th (Intermediate)",
    institution: "Board of Intermediate Education, Andhra Pradesh",
    period: "2021 – 2023",
    score: "85%"
  },
  {
    degree: "10th",
    institution: "Board of Secondary Education, Andhra Pradesh",
    period: "2020 – 2021",
    score: "86%"
  }
];

export const softSkills = {
  core: ["Problem solving", "Attention to detail", "Team leadership", "Time management"],
  interpersonal: ["Communication", "Teamwork and collaboration", "Adaptability", "Willingness to learn"]
};

export const languages = ["English", "Telugu", "Kannada", "Tamil"];

export const certifications = [
  {
    title: "Full Stack AI with Python Intern",
    issuer: "Zeta coding innovative solutions"
  }
];
