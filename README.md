# Technician Portal

Welcome to the **Technician Portal**, a mobile-first knowledge capture interface for manufacturing technicians. This project demonstrates building responsive, simple pixel-perfect UI with CRUD functionality, API integration, and automated testing.

---

## Tools & Technologies

* [Bun](https://bun.sh/) + [Vite](https://vitejs.dev/) + [React](https://react.dev/) (TypeScript)
* [TanStack Router](https://tanstack.com/router/latest) + [TanStack Query](https://tanstack.com/query/latest) (for routing and making API requests respectively)
* [JSON Server](https://github.com/typicode/json-server) (for mock API)
* [Playwright](https://playwright.dev/) (for end-to-end testing)

---

## Setup Instructions

Follow these steps to run the project locally:

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd react-frontend-assessment
   ```

2. **Install dependencies**
   You can use either bun or npm:

   ```bash
   bun install
   # or
   npm install
   ```

3. **Run the React app**
   Start the development server (default port: `5173`):

   ```bash
   bun dev
   # or
   npm run dev
   ```

4. **Run the JSON Server (Mock API)**
   Start the JSON server (default port: `3000`):

   ```bash
   npx json-server --watch db.json --port 4000
   ```

   > You may use a different port if `4000` is not available or just leave the default port without having to specify --port.

---

## Running Tests

This project uses [Playwright](https://playwright.dev/) for automated end-to-end tests.

1. **Install Playwright (if not installed)**

   ```bash
   bun create playwright
   # or
   npx playwright install
   ```

2. **Run tests**
   Run Playwright in interactive UI mode for easy debugging visualization:

   ```bash
   npx playwright test --ui
   ```
---

* The app is designed with a **mobile-first** approach, then desktop.
* Running the add a new entery test once will create a new entry and running it for the second time would cause an error. You can to delete the newly created entry first then run it again. This can also be solved by checking for the first element only with .first() function.
* For production testing, build the app first:

  ```bash
  bun run build && bun run preview
  ```
