import { motion } from 'framer-motion';

const skills = [
  {
    title: 'Programming',
    items: [
      { name: 'Python', proficiency: 90 },
      { name: 'SQL', proficiency: 85 },
    ],
    icon: '💻',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'ML & Data Science',
    items: [
      { name: 'Scikit-learn', proficiency: 90 },
      { name: 'NLP', proficiency: 85 },
      { name: 'Feature Engineering', proficiency: 88 },
    ],
    icon: '🤖',
    color: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Deep Learning',
    items: [
      { name: 'TensorFlow', proficiency: 85 },
      { name: 'Keras', proficiency: 88 },
      { name: 'CNNs, RNNs', proficiency: 82 },
      { name: 'Transfer Learning', proficiency: 80 },
      { name: 'Hugging Face Transformers', proficiency: 85 },
    ],
    icon: '🧠',
    color: 'from-green-500 to-teal-600',
  },
  {
    title: 'MLOps & Deployment',
    items: [
      { name: 'FastAPI', proficiency: 80 },
      { name: 'Streamlit', proficiency: 85 },
      { name: 'Gradio', proficiency: 82 },
      { name: 'Docker', proficiency: 75 },
      { name: 'Git', proficiency: 85 },
      { name: 'Model Monitoring', proficiency: 78 },
    ],
    icon: '🚀',
    color: 'from-orange-500 to-red-600',
  },
];

const About = () => {
  return (
    <section className="w-full flex justify-center pt-24 pb-8 sm:pt-32 sm:pb-12 min-h-[80vh]">
      <div className="main-card w-full">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
            About Me
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-700">
            AI Engineer skilled in developing predictive models and scalable ML applications. 
            Adept in Python, SQL, NLP, and automation tools. Strong passion for building 
            data-driven solutions that optimize performance and reduce manual efforts.
          </p>
        </motion.div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.title}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              
              <div className="card relative hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-2xl text-white shadow-lg`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{skill.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {skill.items.map((item) => (
                    <div key={item.name} className="group/item">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium group-hover/item:text-indigo-600 transition-colors">
                          {item.name}
                        </span>
                        <span className="text-sm text-gray-500">{item.proficiency}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${item.proficiency}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 