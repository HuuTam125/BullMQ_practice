function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const worker = new Worker(
    "email",
    async (job) => {

        console.log("Start", job.data.id);

        await sleep(5000);

        console.log("Done", job.data.id);

    },
    {
        concurrency: 1,
        connection: {
            host: "localhost",
            port: 6379
        }
    }
);