const { Queue } = require("bullmq");

const queue = new Queue("email", {
    connection: {
        host: "localhost",
        port: 6379
    }
});

async function run() {

    await queue.add(
        "send-email",
        {
            email: "abc@gmail.com"
        },
        {
            attempts: 5
        }
    );

    console.log("Job Added");

    process.exit(0);
}

run();