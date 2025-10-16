# Cypress Heroes Demo Application

This is a demo application that shows how to use Cypress to run end-to-end,
component, and API tests against an application.

Cypress Heroes is a web application for managing heroes. It allows users to:
- Create, edit, delete, and list heroes.
- Assign powers, set a price, and track fans and saves for each hero.
- Upload an optional avatar for each hero.

The project demonstrates automated test scenarios using **Cypress** and **TypeScript** 
to ensure the application behaves as expected, covering both positive and negative cases.
It also showcases best practices for organizing e2e tests and using page object patterns.

## Getting Started

The app is a mono repo that uses npm workspaces. Once you clone the project,
install the dependencies at the root folder:

```sh
npm install
```

After that a few more things need to be set up (databases and such), to do so run:

```sh
npm run setup
```


To launch the app for development, run:

```sh
npm run dev
```

This will start both the client and server apps in dev mode. The site will be
available at http://localhost:3000.


Additionally, for running the Cypress tests, ensure the following packages are installed (they should already be in `package.json`):

- `cypress`
- `cypress-file-upload`
- `@types/cypress` (for TypeScript support)

To open the Cypress test runner:

```sh
npx cypress open
```

To run all tests headlessly:

```sh
npx cypress run
```


## App Overview

The Cypress Heroes app consists of a frontend React client app using Vite, and a backend server using NestJS with Prisma for database ORM.

### React Client App

The React client app is located in the **client** folder. It is a standard React [Vite](https://vitejs.dev/) app.

Handles UI for listing heroes, creating new heroes, editing, deleting, liking, and buying heroes. Supports file uploads for hero avatars.

Todo: fill out

### NestJS Server App

The server app is in the **server** folder. It is built with the [NestJS](https://nestjs.com/) Node.js framework. It uses [Prisma](https://www.prisma.io/) for the database ORM. 

#### Database seeding and resetting

The database is seeded from the **server/prisma/seed.ts** script when you set up the app. If at any time you want to reset the database back to its initial state, run:

```sh
npm run resetdb
```

## Environment Variables

The client app uses an environment variable to know what the URL is for the
backend api named `VITE_API_URL`. It defaults to "http://localhost:3001" for use
in dev mode, and should be overriden in other environments/modes.


# Automated Test Scenarios

This document describes the automated end-to-end test scenarios implemented for the **Cypress Heroes** application using **Cypress + TypeScript**.

It covers login, hero actions (like, buy, edit, delete), and creating new heroes, including both positive and negative test cases.

---

## 1. Login Tests

**Objective:** Ensure users can log in successfully or fail with invalid credentials.

### Test Case: Login - Success
- **Precondition:** App is on the login page.
- **Steps:**
  1. Enter valid email and password.
  2. Click **Sign in**.
- **Expected Result:** User is redirected to the dashboard, and the hero grid is visible.

### Test Case: Login - Fail
- **Precondition:** App is on the login page.
- **Steps:**
  1. Enter invalid email and/or password.
  2. Click **Sign in**.
- **Expected Result:** User remains on the login page and an error message is displayed indicating invalid credentials.


---

## 2. Hero Actions

**Objective:** Validate interactions with heroes (like, buy, edit, delete).

### Test Case: Like Hero - Success
- **Precondition:** At least one hero exists on the dashboard.
- **Steps:**
  1. Check the current number of fans.
  2. Click the **like** button.
- **Expected Result:** Fans count increments by 1.

### Test Case: Buy Hero - Success
- **Precondition:** At least one hero exists on the dashboard.
- **Steps:**
  1. Check the current saves count.
  2. Click the **buy/money** button.
  3. Confirm purchase by clicking **Yes**.
- **Expected Result:** Saves count increments by 1.

### Test Case: Buy Hero - Cancel
- **Precondition:** At least one hero exists on the dashboard.
- **Steps:**
  1. Click the **buy/money** button.
  2. Cancel purchase by clicking **No**.
- **Expected Result:** Saves count remains unchanged.

### Test Case: Edit Hero Price - Success
- **Precondition:** At least one hero exists on the dashboard.
- **Steps:**
  1. Open the hero **edit** page.
  2. Update the price.
  3. Click **Submit**.
- **Expected Result:** Price is updated correctly on the hero card.

### Test Case: Delete Hero - Success
- **Precondition:** At least one hero exists on the dashboard.
- **Steps:**
  1. Click the **delete** button on a hero.
  2. Confirm deletion by clicking **Yes**.
- **Expected Result:** Hero is removed from the dashboard.

### Test Case: Delete Hero - Cancel
- **Precondition:** At least one hero exists on the dashboard.
- **Steps:**
  1. Click the **delete** button on a hero.
  2. Cancel deletion by clicking **No**.
- **Expected Result:** Hero remains on the dashboard.

---

## 3. New Hero Creation

**Objective:** Ensure new heroes can be created with all attributes.

### Test Case: Create New Hero - Success
- **Precondition:** User is logged in and dashboard is visible.
- **Steps:**
  1. Navigate to the **New Hero** page.
  2. Fill in hero name, price, fans, saves, select powers, and upload an avatar image.
  3. Submit the form.
- **Expected Result:** Hero appears in the dashboard with correct details.

---

## Notes

- The tests are implemented using **Cypress + TypeScript**.
- Both positive and negative scenarios are covered to validate business rules.
- Tests use **page object pattern** for better organization and reusability.
- The dashboard layout and hero attributes (name, price, fans, saves, powers, avatar) are verified in each relevant test.
- All tests are designed to run independently, ensuring consistent results.

---

## How to Run Tests

1. Ensure the app is running:

```sh
npm run dev
```

2. Open Cypress test runner:

```sh
npx cypress open
```

3. Run all tests headlessly:
```sh
npx cypress run
```

## Required Packages

Make sure the following packages are installed (already in package.json):

- cypress

- cypress-file-upload

- @types/cypress (for TypeScript support)