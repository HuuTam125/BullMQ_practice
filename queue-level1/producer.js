// producer.js

const { Queue } = require("bullmq");

const emailQueue = new Queue("email", {
    connection: {
        host: "localhost",
        port: 6379
    }
});

async function run() {

    await emailQueue.add("send-email", {
        email: "abc@gmail.com"
    });

    console.log("Job Added");

    process.exit(0);
}

run();