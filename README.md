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

  The current setup is set to use port `4000` so changing this will require you to modify the `src/api/apiClientConfig.ts` file to use the port you have selected. For example, if it's a default port, put 3000.
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

---

## Demo Video

Click on the link to watch the demo video of the dashboard. I used voice over for the screencapture so use a crop ratio of 2.26:1 to view it properly otherwise it looks small with the default ration after voice over. [Demo Link](https://drive.google.com/file/d/1wcGj5jqwIcTKEhOYvFyQ4DyN2f1DMhFs/view?usp=sharing)

## UI/UX improvement ideas

There are so many features that I can improve in terms of UI and UX.

1. **System Colors**

    Using color theory, I would go for colors that are more inline and descriptive.

2. **Optimistic updates for better perfomance**

    I would add optimistic updates for all the mutations to increase perfomance for a better use experince. Optmistic updates are handled before invalidating the queries thus sending another request. So the optimistic update would make an update to the UI before sending another request to update the querycache and when it invalidates, it's as if nothing has changed. This would reduce the amount of time a use has to see the updated records. Optimistic updates only work when the server is sending back the newly created record or the updated record.

3. **Adding shimmer effect aka loading skeletons**
    
    Loading spinners are a better way of engaging users to somehow mimic the kind og content they are expecting to see to keep their attention instead of a loading spinner or text.

    For the buttons, spinners would be a good choice.

4. **Disabling inputs and buttons on a mutation**

    Disabling inputs and buttons when a mutation is pending is cruicial to avoid multiple requests or any other user unexpected behavior.

5. **Adding React Hook Form**

    Adding packages like `react-hook-form` gives a better user experience in working with forms and it's also a better approach to validate user input as schema validation  with packages like `zod` or `yup`. It works well if the backend also has schema validation.

6. **Adding search functionality**

    Adding search functionality would with debouncing technique to improve user experience.

7. **Adding pagination**

    Adding pagination in a case where we have so many records. This would increase app perfomance. It can also be an infinite scroll technique but this is not a good solution in a cse of a user dashboard.