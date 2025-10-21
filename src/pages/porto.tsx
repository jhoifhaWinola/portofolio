import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  BarChart3,
  TrendingUp,
  Database,
  Menu,
  X,
} from "lucide-react";

export default function PortfolioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const profile = {
    name: "Jhoifha Winola",
    title: "Data Analyst",
    tagline: "Turning data into actionable insights",
    email: "jhoifhawinola@gmail.com",
    github: "https://github.com/jhoifhaWinola",
    linkedin: "https://www.linkedin.com/in/jhoifha-winola-36473a332/",
    cvUrl:
      "https://drive.google.com/file/d/1NjVP9IkMu4nNpRp0G1f39IOiKizkG1Oj/view?usp=sharing",
  };

  const skills = [
    { category: "Analysis", items: ["SQL", "Excel", "Python"] },
    { category: "Visualization", items: ["Tableau", "Power BI"] },
    // { category: 'Machine Learning', items: ['Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy'] },
    { category: "Tools", items: ["Jupyter Notebook"] },
  ];

  const stockData = [
    { name: "Jojo", value: 2062830 },
    { name: "Adm", value: 454972 },
    { name: "Fris", value: 454972 },
    { name: "Fjar", value: 454972 },
    { name: "Heal", value: 244992 },
  ];

  const trendData = [
    { month: "Jan", revenue: 45000, customers: 120 },
    { month: "Feb", revenue: 52000, customers: 145 },
    { month: "Mar", revenue: 48000, customers: 135 },
    { month: "Apr", revenue: 61000, customers: 170 },
    { month: "May", revenue: 58000, customers: 165 },
    { month: "Jun", revenue: 70000, customers: 195 },
  ];

  // const projects = [
  //   {
  //     id: 1,
  //     title: 'Stock Profit Distribution Analysis',
  //     description: 'Analyzed profit distribution across stakeholders using statistical modeling and data visualization techniques.',
  //     impact: '+45% insight accuracy',
  //     tech: ['Python', 'Pandas', 'Matplotlib'],
  //     data: stockData
  //   },
  //   {
  //     id: 2,
  //     title: 'Revenue Trend Forecasting',
  //     description: 'Built predictive models to forecast revenue trends with time series analysis and machine learning.',
  //     impact: '92% prediction accuracy',
  //     tech: ['R', 'Prophet', 'ggplot2'],
  //     data: trendData
  //   },
  //   {
  //     id: 3,
  //     title: 'Customer Behavior Analytics',
  //     description: 'Segmented customer base using clustering algorithms to optimize marketing strategies.',
  //     impact: '+30% conversion rate',
  //     tech: ['SQL', 'Tableau', 'Scikit-learn']
  //   }
  // ];

  // Ganti objek projects LAMA dengan yang BARU ini
  const projects = [
    {
      id: 1,
      title: "ADVANCED SQL DATA CLEANING & EDA",
      description:
        "Cleaned and analyzed a global layoffs dataset (2,000+ rows) using MySQL for visualization readiness. Applied ROW_NUMBER(), CTE, text standardization, and executed exploratory queries using JOIN, GROUP BY, and Window Functions to reveal layoff trends.",
      impact: "Improved Data Quality & Query Performance",
      tech: ["SQL (MySQL)", "CTE", "Window Functions", "Data Cleaning"],
      // Ganti path ini dengan path gambar (screenshot) dari hasil analisis SQL Anda
      imagePath: "/images/image-cleaning-sql.png",
    },
    {
      id: 2,
      title: "DATA PROFESSIONAL SURVEY DASHBOARD (Power BI)",
      description:
        "Developed an interactive Power BI dashboard analyzing survey data from 630 data professionals worldwide. Performed ETL via Power Query and created DAX measures for KPIs like Salary Satisfaction and Work-Life Balance.",
      impact: "Multi-Page Interactive Dashboard",
      tech: ["Power BI", "ETL (Power Query)", "DAX", "Data Visualization"],
      // Ganti path ini dengan screenshot dashboard Power BI Anda
      imagePath: "/images/image-survey-powerBI.png",
    },
    {
      id: 3,
      title: "EXCEL BIKE SALES DASHBOARD",
      description:
        "Built an interactive Excel dashboard visualizing customer purchase patterns for a bike sales dataset. Utilized Pivot Tables, Slicers, Charts, and applied TRIM(), IF(), and XLOOKUP() for consistent data preparation.",
      impact: "KPI-Driven Management Report",
      tech: ["Excel", "Pivot Tables", "XLOOKUP", "Data Preparation"],
      // Ganti path ini dengan screenshot dashboard Excel Anda
      imagePath: "/images/image-excel-bike.png",
    },
    {
      id: 4,
      title: "AIRBNB DATA VISUALIZATION DASHBOARD (Tableau)",
      description:
        "Built an interactive Tableau dashboard analyzing Airbnb pricing and occupancy trends. Created calculated fields, parameters, and combined maps/charts for clear market insights.",
      impact: "Enhanced Data Exploration",
      tech: ["Tableau", "Calculated Fields", "Mapping", "Data Visualization"],
      // Ganti path ini dengan screenshot dashboard Tableau Anda
      imagePath: "/images/tablue.jpg",
    },
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-bold text-slate-900 hover:text-slate-700 transition-colors"
            >
              {profile.name}
            </button>

            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                Contact
              </button>
            </div>

            <button
              className="md:hidden text-slate-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-3">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-slate-600 hover:text-slate-900 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left text-slate-600 hover:text-slate-900 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-slate-600 hover:text-slate-900 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors w-fit"
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      <section
        id="hero"
        className="pt-32 pb-20 px-6 bg-cover bg-center bg-no-repeat bg-[url('images/banner.png')]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-700">
                Available for opportunities
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Data Analyst
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all"
              >
                <Mail size={20} />
                Get in touch
              </a>

              <a
                href={profile.cvUrl}
                target="_blank" // <-- TAMBAHKAN INI
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-50 transition-all"
              >
                <Download size={20} />
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Data Analysis
              </h3>
              <p className="text-slate-600">
                Expert in statistical analysis, data cleaning, and exploratory
                data analysis.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Visualization
              </h3>
              <p className="text-slate-600">
                Creating compelling visualizations that tell data stories
                effectively.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                <Database className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                SQL & Databases
              </h3>
              <p className="text-slate-600">
                Proficient in complex queries, database optimization, and data
                modeling.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
            Skills & Tools
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-slate-50 p-6 rounded-xl border border-slate-200"
              >
                <h3 className="font-bold text-slate-900 mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white text-slate-700 text-sm rounded-lg border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
            Featured Projects
          </h2>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12 order-2 lg:order-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-mono text-slate-500">
                        0{project.id}
                      </span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">
                        {project.impact}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-50 text-slate-700 text-sm rounded-lg border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* <div className="bg-slate-50 p-8 flex items-center justify-center order-1 lg:order-2">
                    {project.data && index === 0 && (
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={project.data}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                          <XAxis dataKey="name" stroke="#64748b" />
                          <YAxis stroke="#64748b" />
                          <Tooltip
                            formatter={(value: number) => formatCurrency(value)}
                            contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                          />
                          <Bar dataKey="value" fill="#0f172a" radius={[8, 8, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    )}

                    {project.data && index === 1 && (
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={project.data}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                          <XAxis dataKey="month" stroke="#64748b" />
                          <YAxis stroke="#64748b" />
                          <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                          <Line type="monotone" dataKey="revenue" stroke="#0f172a" strokeWidth={3} dot={{ fill: '#0f172a', r: 4 }} />
                        </LineChart>
                      </ResponsiveContainer>
                    )}

                    {!project.data && (
                      <div className="w-full h-64 flex items-center justify-center text-slate-400">
                        <BarChart3 size={64} />
                      </div>
                    )}
                  </div> */}
                  <div className="bg-slate-50 p-8 flex items-center justify-center order-1 lg:order-2 min-h-[300px]">
                    {project.imagePath ? (
                      <img
                        src={project.imagePath}
                        alt={`Visualisasi untuk proyek: ${project.title}`}
                        // Gunakan object-contain agar gambar pas di dalam kotak tanpa terpotong
                        className=" w-full h-full max-h-[300px] object-contain rounded-lg shadow-lg border border-slate-200 hover:scale-105 transition-all duration-300"
                      />
                    ) : (
                      // Placeholder jika gambar belum disiapkan
                      <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 border border-dashed border-slate-300 rounded-lg p-8">
                        <Database size={48} className="mb-2" />
                        <span className="text-center text-sm">
                          Gambar Visualisasi Belum Tersedia
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Let's work together
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and
            projects.
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            {/* <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center hover:bg-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a> */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center hover:bg-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
              target="_blank"
              className="w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center hover:bg-slate-800 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white text-lg rounded-lg hover:bg-slate-800 transition-all"
          >
            <Mail size={20} />
            {profile.email}
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-slate-600">
          <p>© 2024 {profile.name}. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
