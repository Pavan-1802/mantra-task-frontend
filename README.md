# Mantra Frontend

## Project Overview
Mantra Frontend is a modern web application built using React and Vite. It serves as the client-side interface for the Mantra project, providing users with an intuitive and responsive experience. The application includes various pages and components to handle bookings, reservations, and other functionalities.

## Features
- **Landing Page**: A welcoming page for users to explore the services.
- **Booking System**: Allows users to select services, choose reservation dates, and provide personal information.
- **Admin Panel**: A dedicated page for administrators to manage bookings.
- **Responsive Design**: Ensures compatibility across devices.
- **Components**: Modular components for scalability and maintainability.

## Project Structure
The project follows a structured folder hierarchy:

```
public/         # logo and _redirects file
src/
  assets/       # Component-specific assets
  components/   # Reusable React components
  pages/        # Page-level components
  index.css     # Global styles
  main.jsx      # Application entry point
```

### Key Files
- **index.html**: The main HTML file.
- **vite.config.js**: Configuration for Vite.
- **package.json**: Project dependencies and scripts.
- **App.jsx**: Root component of the application.

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (v16 or higher)
- npm (v8 or higher)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Pavan-1802/mantra-task-frontend
   ```
2. Navigate to the project directory:
   ```bash
   cd mantra/frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:5173`.

## Scripts
The following scripts are available in the `package.json` file:
- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the application for production.
- **`npm run preview`**: Previews the production build locally.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear messages.
4. Push your branch and create a pull request.