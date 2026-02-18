import Section from "../section";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Resume Analyzer",
    desc: "NLP powered resume scoring + ATS insights",
    span: "col-span-2 row-span-2",
  },
  {
    title: "Realtime Analytics Dashboard",
    desc: "Optimized grid rendering 10k+ rows with virtualization",
    span: "col-span-1 row-span-1",
  },
  {
    title: "SaaS CRM Platform",
    desc: "Fullstack lead + pipeline management tool",
    span: "col-span-1 row-span-2",
  },
  {
    title: "ML Model Deployment",
    desc: "Dockerized AI microservice with CI/CD",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Portfolio v3",
    desc: "Framer Motion + advanced animations",
    span: "col-span-1 row-span-1",
  },
  {
    title: "E-Commerce AI Recommender",
    desc: "Collaborative filtering recommendation engine",
    span: "col-span-2 row-span-1",
  },
  {
    title: "Open Source Contributions",
    desc: "UI components + performance fixes",
    span: "col-span-1 row-span-1",
  },
];

const Projects = () => {
  return (
    <Section title="What I've Built" highlight="Impact" showDivider={false}>
      <div className="gap-3 grid grid-cols-1 md:grid-cols-3 auto-rows-[180px] my-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className={`
        ${project.span}
        group relative rounded-xl
        bg-white
        p-6 flex flex-col justify-between
        overflow-hidden cursor-pointer
        border border-neutral-200
        hover:shadow-sm
        hover:border-neutral-300
        transition-all duration-300
      `}
          >
            {/* Soft Gradient Hover Layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Content */}
            <div className="z-10 relative">
              <h3 className="mb-2 font-semibold text-neutral-900 text-xl">
                {project.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {project.desc}
              </p>
            </div>

            <div className="z-10 relative mt-4 font-medium text-neutral-400 group-hover:text-neutral-700 text-sm transition">
              View Project →
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
