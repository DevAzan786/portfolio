import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
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

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    setSent(false);
    emailjs
      .sendForm(
        'service_0r8e0bo', // <-- Replace with your EmailJS service ID
        'template_ub6kgvj', // <-- Replace with your EmailJS template ID
        form.current!,
        'oOZnkI4nDzIYxB5y8' // <-- Replace with your EmailJS user/public key
      )
      .then(
        () => {
          setSending(false);
          setSent(true);
          if (form.current) form.current.reset();
        },
        (err) => {
          setSending(false);
          setError('Failed to send. Please try again.');
        }
      );
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
            name="user_name"
            placeholder="Your Name"
            required
            className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base"
          />
          <input
            type="email"
            name="user_email"
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
          <div className="mt-4 text-green-600 font-semibold text-center">Mail has been sent!</div>
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