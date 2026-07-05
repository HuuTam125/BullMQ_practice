const { Worker } = require("bullmq");

const worker = new Worker(
    "email",
    async (job) => {

        console.log("Processing");

        if (Math.random() > 0.5) {

            console.log("FAILED");

            throw new Error("Random Error");

        }

        console.log("SUCCESS");

    },
    {
        connection: {
            host: "localhost",
            port: 6379
        }
    }
);