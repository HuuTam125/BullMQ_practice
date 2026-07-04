const { createClient } = require("redis");

async function run() {

    const client = createClient();

    await client.connect();

    setInterval(async () => {

        const now = Date.now();

        const jobs = await client.zRangeByScore(
            "delayQueue",
            0,
            now
        );

        for (const item of jobs) {

            console.log("Execute");

            console.log(JSON.parse(item));

            await client.zRem("delayQueue", item);

        }

    }, 1000);

}

run();