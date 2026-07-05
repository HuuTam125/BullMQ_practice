// producer.js

const { Queue } = require("bullmq");

const queue = new Queue("email", {
    connection: {
        host: "localhost",
        port: 6379
    }
});

async function run() {

    for (let i = 1; i <= 10; i++) {

        await queue.add("send-email", {
            id: i
        });

    }

    console.log("Done");
    process.exit(0);
}

run();