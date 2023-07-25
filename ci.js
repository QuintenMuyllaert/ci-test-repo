process.on("uncaughtException", (err) => console.error(err.message) || process.exit(1));

if (Math.random() > 0.5) throw new Error("Build failed");
