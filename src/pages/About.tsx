import { motion } from 'framer-motion';

const skills = [
  {
    title: 'Programming',
    items: ['Python', 'SQL'],
  },
  {
    title: 'ML & Data Science',
    items: ['Scikit-learn', 'NLP', 'Feature Engineering'],
  },
  {
    title: 'Deep Learning',
    items: ['TensorFlow', 'Keras', 'CNNs, RNNs', 'Transfer Learning', 'Hugging Face Transformers'],
  },
  {
    title: 'MLOps & Deployment',
    items: ['FastAPI', 'Streamlit', 'Gradio', 'Docker', 'Git', 'Model Monitoring'],
  },
];

const About = () => {
  return (
    <section className="w-full flex justify-center pt-24 pb-8 sm:pt-32 sm:pb-12 min-h-[80vh]">
      <div className="main-card w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900">About Me</h2>
          <p className="section-subtitle max-w-2xl text-base sm:text-lg md:text-xl text-gray-700">
            AI Engineer skilled in developing predictive models and scalable ML applications. Adept in Python, SQL, NLP, and automation tools. Strong passion for building data-driven solutions that optimize performance and reduce manual efforts.
          </p>
        </motion.div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.title}
              className="card w-full min-w-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: idx * 0.1 }}
            >
              <h3 className="text-lg font-bold text-indigo-600 mb-3">{skill.title}</h3>
              <ul className="list-disc ml-5 space-y-1 text-gray-700">
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 