

---

# AI Code Reviewer - Global Style Guide & Best Practice

**Objective:** This document serves as the foundational rulebook for code reviews. The AI agent must enforce these standards strictly across all pull requests to ensure maintainability, performance, and security.

## 1. General Programming Principles 🌍

* **Production Readiness:** `console.log`, `print()`, or `System.out.println()` statements are strictly forbidden in production code. Use proper logging libraries (e.g., Winston, Morgan, or Python's `logging` module).
* **Naming Clarity:** Never use the same variable or function name for different purposes. Scope variables as tightly as possible.
* **DRY & KISS:** Do Not Repeat Yourself. Keep It Simple, Stupid. If logic is repeated more than twice, extract it into a helper function.
* **Comments:** Code should be self-documenting through excellent naming conventions. Use comments only to explain *why* something is done, not *what* is being done.

---

## 2. JavaScript

* **Variable Declarations:** Do not use `var` for variable declarations. Strictly use `let` (for re-assignable values) or `const` (for constants).
* **Equality:** Always use strict equality (`===` and `!==`) instead of loose equality (`==` and `!=`) to prevent unexpected type coercion.
* **Naming Conventions:** Always use `camelCase` for variable and function names. Use `PascalCase` for Classes and Constructor functions.
* **Environment Validation:** Always use strict mode (`"use strict";`) in JavaScript files.
* **Security:** Never use the `eval()` function under any circumstances. It is a severe security vulnerability.
* **Scope:** Never use global variables. Encapsulate logic within modules, classes, or closures.
* **Syntax:** Always use semicolons at the end of each statement.
* **Strings:** Always use single quotes (`'`) for standard string literals. Use template literals (backticks ```) when string interpolation is required.

---

## 3. MERN Stack (MongoDB, Express, React, Node.js) ⚛️

### React.js

* **Styling:** Never use inline CSS (`style={{ color: 'red' }}`) in React components. Always use external stylesheets, CSS modules, or utility-first frameworks like Tailwind CSS.
* **Component Structure:** Use functional components and Hooks. Avoid legacy Class components.
* **State Management:** Avoid prop-drilling. Use Context API for light global state and tools like Redux or Zustand for complex state.
* **Effect Hooks:** Always include a comprehensive dependency array in `useEffect`. If a value is used inside the effect, it must be in the array to prevent stale closures.

### Node.js & Express

* **Asynchronous Code:** Avoid callback hell. Strictly use `async/await` with `try...catch` blocks for asynchronous operations.
* **Real-Time Architecture:** When handling persistent connections (like WebSocket/Socket.io), ensure memory leaks are prevented by properly cleaning up event listeners on disconnect.
* **Middleware:** Keep route controllers thin. Move business logic to service files and data validation to custom middleware.

### MongoDB (Mongoose)

* **Schema Design:** Avoid infinitely growing arrays within documents. Use references (normalization) for unbounded relationships and embedded documents (denormalization) for data that is frequently read together.
* **Query Performance:** Always create indexes on fields that are frequently used in `match`, `sort`, or `group` operations.

---


---
