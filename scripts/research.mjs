import fs from "fs"; import https from "https";
const feeds = [
  "https://nextjs.org/feed.xml",
  "https://vercel.com/changelog/feed",
  "https://tailwindcss.com/feeds/feed.xml"
];
const fetch = url => new Promise((res, rej) =>
  https.get(url, r => { let d=""; r.on("data", c => d+=c); r.on("end", () => res({url, size:d.length})); }).on("error", rej)
);
const rows = [];
for (const f of feeds) {
  try { const r = await fetch(f); rows.push(`- ${r.url} -> bytes ${r.size}`); }
  catch(e){ rows.push(`- ${f} -> ERROR ${e.message}`); }
}
fs.mkdirSync("docs",{recursive:true});
fs.writeFileSync("docs/tech-watch.md", `# Tech Watch\\n\\nUpdated: ${new Date().toISOString()}\\n\\n${rows.join("\\n")}\\n`);
