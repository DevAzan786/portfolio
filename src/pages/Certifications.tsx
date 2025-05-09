import { motion } from 'framer-motion';

const certifications = [
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera",
    date: "2023",
  },
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    date: "2023",
  },
  {
    title: "SQL for Data Analysis",
    issuer: "Udacity",
    date: "2023",
  },
  {
    title: "Programming for Everybody (Python)",
    issuer: "University of Michigan",
    date: "2022",
  },
  {
    title: "Building Deep Learning Applications with Keras",
    issuer: "LinkedIn Learning",
    date: "2022",
  },
];

const education = [
  {
    degree: "Bachelor of Science in Artificial Intelligence",
    institution: "Air University, Islamabad",
    period: "Sep 2023 – Present",
    description: "Focused coursework in Machine Learning, Deep Learning, and Data Science. Developing strong foundations in AI systems, model deployment, and real-world projects.",
  },
  {
    degree: "Intermediate in Computer Science (ICS)",
    institution: "F.G Sir Syed College, Rawalpindi",
    period: "Nov 2021 – Jun 2023",
    description: "Studied core concepts of programming, data structures, and algorithms. Participated in coding competitions and collaborative academic projects.",
  },
];

const Certifications = () => {
  return (
    <section className="w-full flex justify-center pt-24 pb-8 sm:pt-32 sm:pb-12 min-h-[80vh]">
      <div className="main-card w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900">Education & Certifications</h2>
          <p className="section-subtitle max-w-2xl text-base sm:text-lg md:text-xl text-gray-700">My academic background and professional certifications in AI, ML, and data science.</p>
        </motion.div>
        <div className="mt-8">
          <h3 className="text-lg sm:text-xl font-bold text-indigo-600 mb-4 sm:mb-6">Education</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                className="card w-full min-w-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                <h4 className="text-base sm:text-lg font-bold mb-1 text-gray-900">{edu.degree}</h4>
                <p className="text-gray-700 font-medium text-sm sm:text-base">{edu.institution}</p>
                <p className="text-gray-400 text-xs sm:text-sm mb-2">{edu.period}</p>
                <p className="text-gray-600 text-xs sm:text-sm">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-10 sm:mt-12">
          <h3 className="text-lg sm:text-xl font-bold text-indigo-600 mb-4 sm:mb-6">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="card w-full min-w-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                <h4 className="text-base sm:text-lg font-bold mb-1 text-gray-900">{cert.title}</h4>
                <p className="text-gray-700 font-medium text-sm sm:text-base">{cert.issuer}</p>
                <p className="text-gray-400 text-xs sm:text-sm">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications; 