export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  demo: string;
  repo: string;
  images: string[];
}

export interface Internship {
  id: number;
  company: string;
  role: string;
  duration: string;
  details: string[];
  skills: string[];
  image: string; // Added image property
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  badgeUrl: string;
  link: string;
}

export const content = {
  profile: {
    name: "Dharmik Champaneri",
    title: "Master’s Student in Data Science | Aspiring Data & Business Analyst",
    bio: "I specialize in solving real-world problems with Machine Learning & Business Analytics. Currently pursuing my Master's in Berlin, I am passionate about transforming raw data into actionable insights.",
    links: {
      linkedin: "https://www.linkedin.com/in/dharmikchampaneri/",
      github: "https://github.com/DevDharmik",
      credly: "https://www.credly.com/users/dharmik-champaneri"
    }
  },
  internships: [
    {
      id: 1,
      company: "Tata Consultancy Services",
      role: "Data Visualization Simulation",
      duration: "Jan 2025",
      details: ["Designed dashboards to improve clarity for stakeholders", "Improved communication efficiency by 20-30%"],
      skills: ["Power BI", "Tableau"],
      image: "E:\\portfolio\\public\\Tata.jpg" // Path from LinkedIn
    },
    {
      id: 2,
      company: "Boston Consulting Group (BCG X)",
      role: "Data Science Simulation",
      duration: "Jan 2025",
      details: ["Executed end-to-end DS workflow: preprocessing to modeling", "Uncovered trends in business data using Python"],
      skills: ["Python", "EDA", "SQL"],
      image: "E:\\portfolio\\public\\BCG X.jpg" // Path from LinkedIn
    },
    {
      id: 3,
      company: "Accenture",
      role: "Business Data Analytics Simulation",
      duration: "Jan 2025",
      details: ["Analyzed 10,000+ rows of business data", "Built KPI dashboards for actionable decision-making"],
      skills: ["Excel", "Data Modeling"],
      image: "E:\\portfolio\\public\\Accenture.jpg" // Path from LinkedIn
    }
  ] as Internship[],
  projects: [
    {
      id: 1,
      title: "World Bank Development Indicators Dashboard",
      description: "Interactive analytics app transforming World Bank data into insights (1960–2022) using Streamlit.",
      tech: ["Python", "Streamlit", "Pandas", "Data Visualization"],
      demo: "https://lnkd.in/dN47HXxj",
      repo: "https://lnkd.in/dYrd5jCj",
      images: [
        "E:\\portfolio\\public\\World Bank.png",
        "E:\\portfolio\\public\\World Bank-2.png",
        "E:\\portfolio\\public\\World Bank-3.png",
        "E:\\portfolio\\public\\World Bank-4.png",
        "E:\\portfolio\\public\\World Bank-5.png"
      ]
    },
    {
      id: 2,
      title: "Decision Support System for Irrigation",
      description: "Automated irrigation recommendations using ReactJS and Weather APIs, improving accuracy by 30%.",
      tech: ["ReactJS", "API Integration", "Automation"],
      demo: "#",
      repo: "#",
      images: ["E:\\portfolio\\public\\result 1.png" , "E:\\portfolio\\public\\result 2.png"] //
    },
    {
      id: 3,
      title: "Sentiment Analysis YouTube",
      description: "Real-time system using SVM classification model (85% accuracy) to process thousands of comments.",
      tech: ["Python", "Machine Learning", "SVM", "APIs"],
      demo: "#",
      repo: "#",
      images: ["/images/bar-chart.jpg", "/images/stat.jpg"] // Using your existing files
    }
  ] as Project[],
  skills: [
    { category: "Technical", items: ["Python", "SQL", "ReactJS", "Machine Learning"] },
    { category: "Analytics", items: ["Power BI", "Tableau", "Excel", "Business Intelligence"] }
  ],
  certifications: [
    {
      id: 1,
      title: "McKinsey.org Forward Program",
      issuer: "McKinsey & Company",
      badgeUrl: "/images/mckinsey-org-forward-program.png",
      link: "https://www.credly.com/badges/d2f7b185-c180-4c36-965a-d1cc8b93455f/public_url"
    }
  ] as Certification[]
};