const express = require("express");
const reqHeaderParser = require("./reqHeaderParser");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
   res.json(reqHeaderParser(req.headers));
});

app.listen(port, function() {
    console.log("Listening on port", port);
});