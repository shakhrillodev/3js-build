import express from "express";
import path from "path";
import fs from "fs";

const app = express();
const PORT = 3000;

// Build directories root
const buildsDir = path.join(process.cwd(), "builds");

// Automatically serve each subfolder as its own route
// fs.readdirSync(buildsDir, { withFileTypes: true })
//   .forEach(file => {
//     const version = file.name;
//     const versionPath = path.join(buildsDir, version);
//     app.use(`/${version}`, express.static(versionPath));
//   });

// Home page with links to all versions
app.get("/", (req, res) => {
    const versions = fs.readdirSync(buildsDir)
    const links = versions.map(v => `<li><a href="/builds/${v}" target="_blank">${v}</a></li>`).join("");
    res.send(`<h2>Available Builds</h2><ul>${links}</ul>`);
});

app.use(`/assets`, express.static("assets"));
app.use(`/builds`, express.static("builds"));
app.use(express.static("public"));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 All builds available at http://localhost:${PORT}`);
});
