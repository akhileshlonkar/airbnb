# Airbnb (clone)

[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE) [![Node.js CI](https://img.shields.io/badge/node-%3E%3D14-brightgreen)](https://nodejs.org/)

A lightweight Airbnb-style listing and booking web app built with Node.js, Express and EJS templates. This repository implements server-rendered pages (EJS) and plain CSS styling for a simple property listing and booking experience.

Main language composition
- JavaScript — 54.6%
- EJS templates — 29.2%
- CSS — 16.2%

---

## Table of contents

- [Demo](#demo)
- [What this project is](#what-this-project-is)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Scripts](#scripts)
- [Project structure](#project-structure)
- [Seeding / Example data](#seeding--example-data)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Demo
If you have a running demo or screenshots, add them here.

Example:
- Live demo: https://your-demo.example.com
- Screenshot:
  ![screenshot](./public/images/screenshot.png)

---

## What this project is

This repository is a minimal clone of Airbnb intended for learning and prototyping:
- Server-rendered pages using EJS templates
- REST-style routes for listings and bookings
- Static CSS for responsive UI
- Simple persistence (file, in-memory, or a DB depending on configuration)

It's designed to be small and easy to extend: add authentication, database-backed models, image upload, payments, etc.

---

## Features

- Create, list and view property listings (title, description, price, location, images)
- Browse and filter listings
- Listing detail page (EJS)
- Simple booking/reservation form and server handling
- Responsive layout using plain CSS
- Basic server-side validation

---

## Tech stack

- Node.js (JavaScript)
- Express.js
- EJS templates for views
- Plain CSS for styling
- (Optional) MongoDB / PostgreSQL / SQLite for persistence

---

## Prerequisites

- Node.js 14+ and npm or yarn
- (Optional) A database (MongoDB recommended) if you want persisted storage
- Git

---

## Quick start

1. Clone the repo
   ```bash
   git clone https://github.com/akhileshlonkar/airbnb.git
   cd airbnb
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create `.env` (see [Configuration](#configuration)).

4. Run in development
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open http://localhost:3000

---

## Configuration

Create a `.env` file in the project root. Example:

```
PORT=3000
NODE_ENV=development
SESSION_SECRET=replace_with_a_secret

# If using MongoDB
DATABASE_URL=mongodb://localhost:27017/airbnb

# Optional: Cloud storage or other keys
# S3_BUCKET=
# AWS_ACCESS_KEY_ID=
# AWS_SECRET_ACCESS_KEY=
```

If no database URL is provided the app will default to an in-memory or simple file-based store (check the repository code to confirm the fallback).

---

## Scripts

Add or update scripts in package.json as appropriate. Typical scripts:

- npm start — Run the app in production mode
- npm run dev — Run the app in development with auto-reload (e.g., nodemon)
- npm test — Run tests
- npm run lint — Run linters

Example:
```bash
npm run dev
npm start
npm test
```

---

## Project structure (typical)

Actual structure may vary; update to match this repo if different.

```
/
├─ package.json
├─ server.js / app.js
├─ config/
├─ routes/
├─ controllers/
├─ models/
├─ views/         # EJS templates
├─ public/        # static assets (css, images, js)
├─ data/          # optional seed or sample data
└─ README.md
```

---

## Seeding / Example data

If the repository includes seed scripts or sample data, run them to populate example listings:

```bash
npm run seed      # if a seed script exists
# or
node scripts/seed.js
```

If no seed script exists, create a few listings via the app's UI or by inserting data into your database.

---

## Testing

If tests are present:
```bash
npm test
```

If there are no tests yet, consider adding unit tests for routes and controllers and integration tests for end-to-end flows.

---

## Deployment

Common hosts:
- Heroku: set env vars and use `npm start`
- Render / Railway / DigitalOcean App Platform
- Docker: add a Dockerfile and deploy to any container platform

Before deploying, ensure environment variables (DATABASE_URL, SESSION_SECRET, etc.) are configured in the host.

---

## Contributing

Contributions welcome. Suggested workflow:

1. Fork the repo
2. Create a branch: git checkout -b feature/your-feature
3. Commit: git commit -m "Add feature"
4. Push and open a pull request

Please include: description, screenshots (if applicable), tests for new behavior, and update docs when behavior changes.

For larger contributions, open an issue first to discuss design and scope.

---

## Roadmap / Ideas

- User authentication & profiles
- Host dashboards & listing management
- Image upload & cloud storage (S3)
- Reviews, ratings, messaging
- Payment integration (Stripe)
- Advanced search and filters

---

## License

This project is provided under the MIT License.

```
MIT © akhileshlonkar
```

(Replace with your preferred license and include a LICENSE file.)

---

## Contact

Maintainer: akhileshlonkar  
GitHub: https://github.com/akhileshlonkar

---

If you'd like, tell me what exact changes you want (add screenshots, CI badges, database instructions, or a Dockerfile) and I will update the README accordingly.
