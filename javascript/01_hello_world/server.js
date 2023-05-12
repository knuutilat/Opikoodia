const express = require("express");

let app = express();

app.use("/",express.static("public")); // "public" hakemistossa oleva tavara menee fronttiin

app.listen(3000);

console.log("Running in port 3000");
