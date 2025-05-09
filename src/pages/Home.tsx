import { motion } from 'framer-motion';
import { useRef } from 'react';

const skillTags = [
  { label: 'Deep Learning', style: { top: '15%', left: '70%' } },
  { label: 'NLP', style: { top: '40%', left: '90%' } },
  { label: 'GenAI', style: { top: '70%', left: '75%' } },
  { label: 'Agentic AI', style: { top: '60%', left: '55%' } },
  { label: 'Machine Learning', style: { top: '30%', left: '50%' } },
];

const Hero = () => {
  const clickSound = useRef<HTMLAudioElement>(null);
  const playClickSound = () => {
    if (clickSound.current) {
      (clickSound.current as HTMLAudioElement).currentTime = 0;
      (clickSound.current as HTMLAudioElement).play();
    }
  };

  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center pt-28 pb-8 sm:pt-32 sm:pb-12">
      {/* Click sound audio */}
      <audio ref={clickSound} src="/key6.wav" preload="auto" />
      
      <div className="main-card w-full flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start justify-center w-full md:w-auto">
          <h1 className="section-title leading-tight mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Let's Work Together<br />to Create Wonders with AI
          </h1>
          <p className="section-subtitle max-w-xl text-base sm:text-lg md:text-xl">
            AI Engineer skilled in developing predictive models and scalable ML applications. Adept in Python, SQL, NLP, and automation tools. Strong passion for building data-driven solutions that optimize performance and reduce manual efforts.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 w-full sm:w-auto">
            <a
              href="/contact"
              className="btn-primary w-full sm:w-auto text-center flex items-center justify-center"
              onClick={playClickSound}
            >
              Let's Talk
            </a>
            <a
              href="/resume.pdf"
              download="Azan_Ali_Resume.pdf"
              className="btn-primary w-full sm:w-auto text-center flex items-center justify-center"
              onClick={playClickSound}
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right: PNG Avatar + Floating Skill Tags */}
        <div className="flex-1 relative flex items-center justify-center min-h-[220px] sm:min-h-[300px] md:min-h-[350px] w-full md:w-auto">
          <motion.div
            className="w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] rounded-full shadow-2xl border-4 border-white flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-200"
            initial={{ y: 0 }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
          >
            <img
              src="/avatar.png"
              alt="Azan Ali Avatar"
              className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] object-cover rounded-full"
              style={{ background: 'rgba(255,255,255,0.7)' }}
            />
          </motion.div>
          {/* Hide skill tags on xs screens */}
          <div className="hidden xs:block">
            {skillTags.map((tag, i) => (
              <motion.div
                key={tag.label}
                className="floating-tag"
                style={{ ...tag.style, zIndex: 2 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.2, duration: 0.8, type: 'spring' }}
              >
                {tag.label}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 