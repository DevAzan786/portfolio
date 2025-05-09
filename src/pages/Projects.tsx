import { motion } from 'framer-motion';

const projects = [
  {
    title: "Semantic Book Recommender",
    description: "Built an NLP and LLM-powered book recommendation system. Classified books based on emotional tone and semantic similarity. Designed a user-friendly Gradio dashboard for interactive book discovery.",
    tags: ["NLP", "LLM", "Gradio", "Python"],
  },
  {
    title: "TedPal: TED Talks Chatbot",
    description: "Developed TedPal, a RAG-based chatbot that delivers instant TED Talk summaries. Eliminated the need to manually search and watch full videos. Boosted user motivation and learning efficiency through AI-driven summaries.",
    tags: ["RAG", "Chatbot", "NLP", "Python"],
  },
  {
    title: "Log Classification System",
    description: "Designed a hybrid classifier using Regex, Sentence Transformers, and Logistic Regression. Integrated DeepSeek LLM for enhanced contextual accuracy. Deployed with FastAPI backend and Streamlit UI for real-time log analysis.",
    tags: ["ML", "FastAPI", "Streamlit", "Python"],
  },
  {
    title: "Islamabad House Price Prediction",
    description: "Created a regression model achieving 96% accuracy for predicting house prices. Applied advanced feature engineering to improve prediction accuracy. Enabled intelligent property price estimation using real estate data.",
    tags: ["ML", "Regression", "Feature Engineering", "Python"],
  },
];

const Projects = () => {
  return (
    <section className="w-full flex justify-center pt-24 pb-8 sm:pt-32 sm:pb-12 min-h-[80vh]">
      <div className="main-card w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Projects</h2>
          <p className="section-subtitle max-w-2xl text-base sm:text-lg md:text-xl">A selection of my work in machine learning, NLP, and data-driven solutions.</p>
        </motion.div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="card w-full min-w-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-indigo-600 mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4 text-sm sm:text-base">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-indigo-50 text-indigo-500 px-3 py-1 rounded-full text-xs font-medium">#{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 