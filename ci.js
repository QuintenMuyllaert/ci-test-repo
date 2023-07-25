process.on("uncaughtException", (err) => console.error(err.message) || process.exit(1));

throw new Error("Build failed");
