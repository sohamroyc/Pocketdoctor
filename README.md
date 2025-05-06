---
title: devfolio-hackathon
emoji: 🐳
colorFrom: pink
colorTo: gray
sdk: static
pinned: false
tags:
  - deepsite
---

Check out the configuration reference at https://huggingface.co/docs/hub/spaces-config-reference

# Pocket Doctor - AI Healthcare Assistant

An AI-powered healthcare assistant that helps users check symptoms, track health metrics, and get instant medical guidance. Built for [Hackathon Name].

## Features

- 🏥 AI-powered symptom checker
- 📊 Health metrics dashboard
- 🌙 Dark mode support
- 💊 Prescription tracker
- 🩺 First aid guides
- 🎯 Health goals tracking

## Live Demo

[Add your deployed app URL here]

## Quick Start

1. Clone the repository:
```bash
git clone [your-repo-url]
cd pocket-doctor
```

2. Install dependencies:
```bash
npm install
```

3. Create a .env file:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Run the development server:
```bash
npm run dev
```

5. Open http://localhost:3000 in your browser

## Deployment

### Deploy to Render (Recommended for Hackathons)

1. Create a new account on [Render](https://render.com)
2. Click "New +" and select "Web Service"
3. Connect your GitHub repository
4. Configure the deployment:
   - Name: pocket-doctor
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Plan: Free

### Alternative Deployment Options

- **Vercel**: Great for static site deployment
- **Heroku**: Traditional choice for Node.js apps
- **Railway**: Modern alternative with generous free tier

## Tech Stack

- Frontend: HTML, TailwindCSS, JavaScript
- Backend: Node.js, Express
- Real-time: Socket.IO
- Deployment: Render

## Contributing

This project was created for [Hackathon Name]. Feel free to fork and modify for your own use.

## License

MIT

## Team

- [Your Name] - [Role]
- [Team Member] - [Role]
- [Team Member] - [Role]

## Acknowledgments

- TailwindCSS for the UI components
- Font Awesome for icons
- [Add other credits]