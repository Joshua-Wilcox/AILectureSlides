# AI Lecture Slides (COMP2321)

A centralized hub for the **COMP2321: Artificial Intelligence** module lecture slides and notes.

## Why this exists?

> **The Problem:** The current module resources are scattered across different platforms and weeks, making it difficult to find specific slides or get a holistic view of the course content. Our module team doesn't have lecture slides all in one place.

> **The Solution:** This application aggregates all lecture materials into a single, easy-to-navigate timeline, ensuring you have everything you need for revision and study in one accessible location.

## Features

- **Timeline View**: A chronological list of all lectures, topics, and descriptions.
- **Direct Access**: Quick links to view individual lecture slides (PDF/PPTX) and reading materials.
- **Aggregated Notes**: A massive single PDF containing all my lecture notes for the course so far, available for preview and download.

## Contributing

Found a mistake in the notes or slides?

Please [submit an issue on GitHub](https://github.com/Joshua-Wilcox/AILectureSlides/issues) so I can fix it!

## Tech Stack

- **React**: For the UI library.
- **Vite**: For fast tooling and build process.
- **CSS**: Custom styling for the specific "Dark Academia" look.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### Running Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Joshua-Wilcox/AILectureSlides
    cd AILectureSlides
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start Development Server:**
    This runs the app in development mode with hot-reloading.
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` in your browser.

4.  **Build for Production (Optional):**
    To test the optimized production build locally:
    ```bash
    npm run build
    npm run preview
    ```
    This serves the built files on `http://localhost:4173`.
