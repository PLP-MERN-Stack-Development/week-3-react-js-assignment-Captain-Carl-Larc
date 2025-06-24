# 🎨 Week 3: React.js, JSX, and Tailwind CSS – Mastering Front-End Development

## 🚀 Objective
Build a responsive React application using JSX and Tailwind CSS that demonstrates component architecture, state management, hooks usage, and API integration.

## 📂 Project Structure
```
week-3-react-js-assignment
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── ThemeSwitcher.tsx
│   ├── hooks
│   │   └── useLocalStorage.ts
│   ├── context
│   │   └── ThemeContext.tsx
│   ├── layout
│   │   └── MainLayout.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   ├── Tasks.tsx
│   │   └── ApiData.tsx
│   ├── utils
│   │   └── api.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 🛠️ Setup Instructions
1. Ensure you have Node.js installed (v18 or higher recommended).
2. Clone the repository to your local machine.
3. Navigate to the project directory.
4. Install the required dependencies:
   ```
   npm install
   ```
5. Start the development server:
   ```
   npm run dev
   ```

## 📋 Features
- **Reusable Components**: The application includes reusable UI components such as buttons, cards, a navbar, and a footer.
- **State Management**: Implements a `TaskManager` component for managing tasks with features to add, mark, delete, and filter tasks.
- **Custom Hooks**: Utilizes a custom hook for local storage management.
- **Theme Management**: Supports light and dark themes using React's Context API.
- **API Integration**: Fetches data from a public API and handles loading and error states.
- **Responsive Design**: Built with Tailwind CSS for a responsive layout across devices.

## 🧪 Expected Outcome
- A fully functional React application with multiple components.
- Proper state management using React hooks.
- API integration with loading and error handling.
- Responsive design implemented with Tailwind CSS.
- Clean, well-organized code following React best practices.

## ✅ Submission Instructions
1. Commit and push your code regularly to show progress.
2. Include in your repository:
   - All project files with proper organization.
   - A comprehensive README.md with setup instructions.
   - Screenshots of your application in the README.md.
3. Deploy your application to Vercel, Netlify, or GitHub Pages.
4. Add the deployed URL to your README.md.
5. Your submission will be automatically graded based on the criteria in the autograding configuration.
6. The instructor will review your submission after the autograding is complete.