// app.js  
import os from "os";
import fs from "fs/promises";

// Part A – OS Module

console.log("Free Memory:", os.freemem());
console.log("Total CPU Cores:", os.cpus().length);

// Part B – File System (CRUD)
async function fileOperations() {
    try {
        // 1. Create data.txt
        await fs.writeFile("data.txt", "Hello World");
        console.log("Created data.txt");

        // 2. Create Readme.md
        await fs.writeFile("Readme.md", "## This is first line in Readme");
        console.log("Created Readme.md");

        // 3. Read data.txt and print its content
        const data = await fs.readFile("data.txt", "utf8");
        console.log("\nContents of data.txt:");
        console.log(data);

        // 4. Append new line to data.txt
        await fs.appendFile("data.txt", "\nThis is second line");
        console.log("Appended to data.txt");

        // 5. Delete Readme.md
        await fs.unlink("Readme.md");
        console.log("Deleted Readme.md");

    } catch (err) {
        console.error("Error:", err.message);
    }
}

fileOperations();
