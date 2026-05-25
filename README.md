# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).


Tasks 
─────────────────────────────────────────
🔧 Phase 6 — Laravel Backend Setup
🎯 Goal: Build the API that will power Auth, Lists, History, and Recommendations
─────────────────────────────────────────
- Create a new Laravel project: laravel new movie-app-api
- Install Laravel Sanctum for token-based auth: php artisan install:api
- Configure CORS in config/cors.php to allow requests from the Vue dev server (localhost:5173)
- Set up the database (MySQL or SQLite) and run the default migrations
- Create the following migrations and models:
    users             → default Laravel migration (already exists)
    lists             → id, user_id, name, timestamps
    list_movies       → id, list_id, movie_id (TMDB id), title, poster_path, timestamps
    history           → id, user_id, movie_id (TMDB id), title, poster_path, visited_at
- Run: php artisan migrate
- Create API Resource controllers for each model
- Set all API routes in routes/api.php under the auth:sanctum middleware group

─────────────────────────────────────────
🔐 Phase 7 — Auth (Vue + Laravel)
🎯 Goal: Login, register, protected routes — frontend connected to backend
─────────────────────────────────────────
Backend:
- Create AuthController with register, login, and logout methods using Sanctum
- register  → validate input, create user, return token
- login     → validate credentials, return token
- logout    → revoke current token
- Expose routes: POST /api/register, POST /api/login, POST /api/logout

Frontend:
- Update src/api/axios.js — add Authorization: Bearer <token> header if token exists in localStorage
- Create an authStore in Pinia: holds user, token, isAuthenticated
- login() and register() actions call the Laravel API and store the returned token
- logout() calls POST /api/logout and clears the store + localStorage
- Create Login and Register pages with form validation
- Add router.beforeEach guards — redirect unauthenticated users away from /lists, /history, /favorites

─────────────────────────────────────────
📋 Phase 8 — Custom Lists (Vue + Laravel)
🎯 Goal: Create and manage named movie lists, persisted in the database
─────────────────────────────────────────
Backend:
- ListController: index, store, show, destroy
- ListMovieController: store (add movie to list), destroy (remove movie from list)
- Routes (auth:sanctum):
    GET    /api/lists
    POST   /api/lists
    DELETE /api/lists/{list}
    POST   /api/lists/{list}/movies
    DELETE /api/lists/{list}/movies/{movie}

Frontend:
- Create src/stores/listsStore.js — holds all lists, actions: fetchLists, createList, deleteList, addMovie, removeMovie
- All actions call the Laravel API (no more localStorage)
- Build a /lists page: shows all user lists, create form, delete button
- Build a /lists/:id page: shows movies inside a specific list with a remove option
- Add an "Add to list" dropdown in MovieCard and MovieDetail

─────────────────────────────────────────
🎭 Phase 9 — Filter by Genre
🎯 Goal: Browse movies by genre using TMDB's discover endpoint
─────────────────────────────────────────
- Fetch the full genre list from TMDB's /genre/movie/list
  and store it in a genreStore
- Add a genre filter bar on the MovieList page
- Replace the trending fetch with TMDB's /discover/movie endpoint,
  passing with_genres as a query param when a genre is selected
- Watch the active genre in the store and re-fetch automatically when it changes
(No backend needed for this phase — TMDB is called directly from the frontend)

─────────────────────────────────────────
✨ Phase 10 — Recommendations
🎯 Goal: Show similar movies based on what the user has viewed
─────────────────────────────────────────
- In MovieDetail, call TMDB's /movie/{id}/recommendations
  and display a horizontal scroll row of MovieCard results
- Create a /recommended page:
    — reads the last 5 visited movie IDs from the backend history
    — fetches recommendations for each, deduplicates results
    — displays them as a MovieCard grid
- Each recommendation card navigates to its own MovieDetail and logs to history
(Recommendations come from TMDB directly; history source comes from Laravel)

─────────────────────────────────────────
🕐 Phase 11 — View History (Vue + Laravel)
🎯 Goal: Auto-log every MovieDetail visit, persisted per user in the database
─────────────────────────────────────────
Backend:
- HistoryController: index, store, destroy (single entry), destroyAll (clear all)
- Routes (auth:sanctum):
    GET    /api/history
    POST   /api/history
    DELETE /api/history/{entry}
    DELETE /api/history

Frontend:
- Create src/stores/historyStore.js
- In MovieDetail's onMounted, call POST /api/history with the movie id, title, and poster
- Build a /history page: movies sorted by most recent visit, with the visited_at date displayed
- Add a "Clear history" button and a per-entry remove button
- Migrate the Recommendations page to read history from the store (which now calls the API)