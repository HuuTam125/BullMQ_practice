// worker.js

const { Worker } = require("bullmq");

const worker = new Worker(
    "email",
    async job => {
      setTimeout(()=>{
        console.log("Processing...");
        console.log(job.data.email);
      },10000)



    },
    {
        connection: {
            host: "localhost",
            port: 6379
        }
    }
);