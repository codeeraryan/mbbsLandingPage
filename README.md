# Study MBBS Abroad Landing Page

A modern, responsive landing page for a Study MBBS Abroad consultancy service built with React, Vite, JavaScript, and Tailwind CSS.

Live Link: [https://landingpagembbs.netlify.app/](https://landingpagembbs.netlify.app/)

## Features

- 📚 Interactive landing page showcasing MBBS study opportunities abroad
- 🌍 Featured countries section with program details
- 💡 Benefits and unique selling points showcase
- 📝 User-friendly application form
- 🎨 Modern UI with smooth animations and transitions
- 📱 Fully responsive design for all devices

## Project Structure

The project is organized into reusable components:

```
src/
├── components/
│   ├── Hero.jsx          # Hero section with main CTA
│   ├── Benefits.jsx      # Benefits/features section
│   ├── Countries.jsx     # Featured countries section
│   ├── Form.jsx          # Application form component
│   └── CtaBanner.jsx     # Call-to-action banner
├── App.jsx               # Main application component
└── index.css            # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/codeeraryan/mbbsLandingPage
```

2. Navigate to the project directory:
```bash
cd study-mbbs-abroad
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

The application will start running at `http://localhost:8080`

## Built With

- [React](https://reactjs.org/) - Frontend library
- [Vite](https://vitejs.dev/) - Build tool and development server
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide React](https://lucide.dev/) - Modern icon set

## Component Usage

### Hero Section
The hero section (`Hero.jsx`) displays the main headline and call-to-action:
```jsx
<Hero />
```

### Benefits Section
The benefits section (`Benefits.jsx`) showcases key advantages:
```jsx
<Benefits />
```

### Countries Section
The countries section (`Countries.jsx`) displays available study destinations:
```jsx
<Countries />
```

### Application Form
The application form (`Form.jsx`) handles user applications:
```jsx
<Form />
```

### CTA Banner
The call-to-action banner (`CtaBanner.tsx`) encourages user engagement:
```jsx
<CtaBanner />
```

## Customization

### Colors
The project uses a carefully selected color palette:
- Primary Blue: `from-blue-900 to-blue-800`
- Accent Yellow: `yellow-400`
- Text Colors: Various shades of gray and white
- Background: `bg-gray-50` for main content

### Icons
Icons are imported from Lucide React:
```jsx
import { GraduationCap, Globe, BookOpen, Check, ArrowRight } from 'lucide-react';
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Email - [aryanpandey0326@gmail.com](mailto:aryanpandey0326@gmail.com)

Live Link: [https://landingpagembbs.netlify.app/](https://landingpagembbs.netlify.app/)
