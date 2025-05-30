# 3D Portfolio Website

A modern, interactive 3D portfolio website built with React, Three.js, and TypeScript. This portfolio showcases projects and skills in an immersive 3D environment.

## 🚀 Features

- **3D Interactive Environment**: Built with Three.js and React Three Fiber
- **Modern UI/UX**: Clean and responsive design using Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion and GSAP
- **Contact Form**: Integrated with EmailJS for seamless communication
- **Responsive Design**: Optimized for all device sizes
- **TypeScript**: Type-safe code for better development experience

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion, GSAP
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Language**: TypeScript
- **Icons**: React Icons
- **Email Service**: @emailjs/browser

## 🏗️ Project Structure

```
portfolio-3d/
├── src/              # Source files
├── public/           # Static assets
├── portfolio/        # Portfolio content
└── ...config files
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/DevAzan786/portfolio.git
   cd portfolio-3d
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🛠️ Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 📝 EmailJS Configuration

To set up the contact form, you'll need to:

1. Create an account on [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{user_name}}`
   - `{{user_email}}`
   - `{{message}}`
4. Update the `EMAILJS_CONFIG` in `src/pages/Contact.tsx` with your credentials:

```typescript
const EMAILJS_CONFIG = {
  serviceId: 'your_service_id',    // From EmailJS dashboard
  templateId: 'your_template_id',  // From EmailJS dashboard
  publicKey: 'your_public_key'     // From EmailJS dashboard
};
```

## 🚀 Deployment

This project is deployed on Vercel. The build process includes:
- TypeScript compilation
- Vite build optimization
- Automatic deployment on push to main branch

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Contact

DevAzan786 - [Your Email]
Project Link: https://github.com/DevAzan786/portfolio
