# MERN Stack Code Review Style Guide & Best Practices

## 1. Core Philosophy
- **Rule:** Write clean, modular, and DRY (Don't Repeat Yourself) code.
- **Rule:** Separate concerns. Frontend should only handle UI/UX and state; Backend should handle business logic, validation, and database operations.
- **Rule:** Use ES6+ syntax (arrow functions, destructuring, template literals, spread/rest operators).

## 2. React (Frontend)
### 2.1 Architecture & Naming
- **DO:** Use functional components and React Hooks. 
- **AVOID:** Class components unless maintaining legacy code.
- **DO:** Name components using PascalCase (e.g., `UserProfile.jsx`).
- **DO:** Name hooks using camelCase starting with 'use' (e.g., `useAuth.js`).
- **DO:** Keep components small. If a component exceeds 150-200 lines, break it down into smaller child components.

### 2.2 State & Hooks
- **DO:** Use `useState` for local component UI state.
- **DO:** Use a global state management tool (Zustand, Redux, or Context API) for shared data (like User Auth, Theme).
- **AVOID:** Prop drilling more than 2-3 levels deep.
- **DO:** Include all dependencies in the `useEffect` dependency array. Avoid omitting them to prevent stale closures.

### 2.3 API Integration
- **DO:** Centralize API calls using Axios instances or a dedicated API service file (e.g., `api/auth.js`).
- **AVOID:** Hardcoding API URLs inside components. Always use environment variables (`import.meta.env.VITE_API_URL` or `process.env.REACT_APP_API_URL`).
- **DO:** Handle Loading, Success, and Error states for every async API call.

## 3. Node.js & Express (Backend)
### 3.1 Architecture (MVC Pattern)
- **DO:** Structure the app using Routes, Controllers, and Models (MVC pattern).
  - `routes/`: Define API endpoints and attach middleware.
  - `controllers/`: Handle business logic and send responses.
  - `models/`: Define database schemas.
- **AVOID:** Writing complex business logic or database queries directly inside route definitions.

### 3.2 Error Handling & Async Code
- **DO:** Use `async/await` for asynchronous operations.
- **AVOID:** Using `.then().catch()` chains mixed with `async/await` to maintain readability.
- **DO:** Wrap all controller logic in `try...catch` blocks or use an `express-async-handler` wrapper to prevent server crashes.
- **DO:** Centralize error handling using an Express global error-handling middleware `(err, req, res, next)`.

### 3.3 API Responses & Status Codes
- **DO:** Return consistent JSON structures. Example: `{ success: true, data: {...}, message: "..." }`.
- **DO:** Use appropriate HTTP Status Codes:
  - `200` OK, `201` Created
  - `400` Bad Request (Validation errors)
  - `401` Unauthorized (Missing/invalid token)
  - `403` Forbidden (Lack of permissions)
  - `404` Not Found
  - `500` Internal Server Error

## 4. MongoDB & Mongoose (Database)
### 4.1 Schema Design
- **DO:** Name collections in plural, lowercase (e.g., `users`, `products`).
- **DO:** Name Mongoose models in singular, PascalCase (e.g., `User`, `Product`).
- **DO:** Add `timestamps: true` to all schemas to automatically track `createdAt` and `updatedAt`.
- **DO:** Validate data at the schema level (e.g., `required: true`, `minlength`, `enum`, regex matches for emails).

### 4.2 Query Optimization
- **DO:** Use Mongoose `.select()` to exclude sensitive fields (like passwords) when fetching users. Example: `User.findById(id).select('-password')`.
- **DO:** Use `.populate()` for referencing related documents, but avoid deep populating more than 2 levels as it hurts performance.
- **AVOID:** Fetching thousands of documents into memory. Always use pagination (`limit` and `skip`) for large datasets.

## 5. Security & Environment
- **MUST:** Never hardcode sensitive information (JWT Secrets, MongoDB URIs, API Keys) in the codebase.
- **MUST:** Use `.env` files and add `.env` to `.gitignore`.
- **DO:** Implement CORS middleware correctly to restrict unauthorized origins.
- **DO:** Hash passwords using `bcrypt` or `argon2` before saving them to the database. Never store plaintext passwords.
- **DO:** Use JWT (JSON Web Tokens) or secure HTTP-only cookies for authentication.