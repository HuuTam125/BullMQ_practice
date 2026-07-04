// producer-delay.js

const { createClient } = require("redis");

async function run() {

    const client = createClient();

    await client.connect();

    const executeTime = Date.now() + 10000;

    await client.zAdd("delayQueue", [
        {
            score: executeTime,
            value: JSON.stringify({
                email: "abc@gmail.com"
            })
        }
    ]);

    console.log("Delay Job Added");

    await client.quit();

}

run();