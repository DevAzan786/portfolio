import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const SOCIALS = [
  {
    icon: <FaLinkedin size={32} className="text-indigo-600" />,
    href: 'https://www.linkedin.com/in/malikazan/',
    label: 'LinkedIn',
  },
  {
    icon: <FaGithub size={32} className="text-gray-800" />,
    href: 'https://github.com/DevAzan786',
    label: 'GitHub',
  },
  {
    icon: <FaWhatsapp size={32} className="text-green-500" />,
    href: 'https://wa.me/923415123633',
    label: 'WhatsApp',
  },
];

// EmailJS Configuration
const EMAILJS_CONFIG = {
  serviceId: 'service_0r8e0bo',
  templateId: 'template_ub6kgvj',
  publicKey: 'oOZnkI4nDzIYxB5y8'
};

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }, []);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    setSent(false);

    if (!form.current) {
      setError('Form reference is missing');
      setSending(false);
      return;
    }

    try {
      const formData = new FormData(form.current);
      console.log('Form Data:', {
        name: formData.get('user_name'),
        email: formData.get('user_email'),
        message: formData.get('message')
      });

      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        form.current,
        EMAILJS_CONFIG.publicKey
      );

      console.log('EmailJS Result:', result);

      if (result.text === 'OK') {
        setSending(false);
        setSent(true);
        if (form.current) form.current.reset();
      } else {
        throw new Error(`Failed to send email: ${result.text}`);
      }
    } catch (err) {
      console.error('EmailJS error:', err);
      setSending(false);
      if (err instanceof Error) {
        if (err.message.includes('Failed to fetch')) {
          setError('Network error. Please check your internet connection.');
        } else if (err.message.includes('Invalid template')) {
          setError('Email template configuration error.');
        } else if (err.message.includes('Invalid service')) {
          setError('Email service configuration error.');
        } else {
          setError(`Failed to send email: ${err.message}`);
        }
      } else {
        setError('Failed to send email. Please try again later.');
      }
    }
  };

  return (
    <section className="w-full flex justify-center pt-24 pb-8 sm:pt-32 sm:pb-12 min-h-[80vh]">
      <div className="main-card w-full max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Contact</h2>
          <p className="section-subtitle max-w-2xl text-base sm:text-lg md:text-xl">Let's connect! Feel free to reach out for collaborations, project inquiries, or just to say hello.</p>
        </motion.div>
        <form ref={form} onSubmit={sendEmail} className="mt-8 flex flex-col gap-4">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base"
          />
          <input
            type="email"
            name="reply_to"
            placeholder="Your Email"
            required
            className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base"
          />
          <button
            type="submit"
            className="btn-primary w-full sm:w-auto mt-2 disabled:opacity-60"
            disabled={sending}
          >
            {sending ? 'Sending...' : 'Send Email'}
          </button>
        </form>
        {sent && (
          <div className="mt-4 text-green-600 font-semibold text-center">Message sent successfully!</div>
        )}
        {error && (
          <div className="mt-4 text-red-600 font-semibold text-center">{error}</div>
        )}
        <div className="mt-10 flex justify-center gap-8">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="hover:scale-110 transition-transform"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact; 