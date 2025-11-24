# MovieDux

A small React app for browsing movies (built with Create React App).

## Quick start — run locally

Prerequisites:

- Node.js (v14+ recommended). Install from https://nodejs.org/.
- A terminal (PowerShell examples are shown below).

Install dependencies:

```powershell
npm install
```

Start the development server:

```powershell
npm start
```

- The dev server uses Create React App defaults and will open the app at http://localhost:3000.
- If the browser doesn't open automatically, open that address manually.

Run tests:

```powershell
npm test
```

Build for production:

```powershell
npm run build
```

This creates an optimized `build/` folder ready for deployment.

## Project structure (high level)

- `public/` — static assets and sample data (e.g. `public/movies.json`).
- `src/` — source code (React components, styles, tests).
  - `src/index.js` — app entry.
  - `src/App.js` — main app component.
  - `src/components/` — UI components (e.g., `MoviesGrid.js`, `MovieCard.js`, `WatchList.js`).

## Notes & troubleshooting

- If port 3000 is already in use, the dev server will prompt to use another port. You can accept or stop the process using that port.
- If you get permission/script execution errors on Windows PowerShell, try running PowerShell as Administrator or adjust execution policy cautiously.
- Check the terminal and your browser console for build or runtime errors — stack traces will point to the problematic file.

## Inspect sample data

The app ships with a sample dataset at `public/movies.json`. Edit this file if you want to change the movies shown by the app without touching source code.

## Contributing

Small project — feel free to open issues or submit pull requests.

## License

No license file is included in this repo. Add a license if you plan to publish or share this project.

---

If you'd like, I can also run `npm install` and `npm start` locally (in your environment) to verify the instructions and update this README with any extra notes (port changes, warnings). Let me know if you want me to do that now.
This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
