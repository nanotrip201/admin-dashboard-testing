const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const routes = require("./routes/v1")

const cors = require("cors");

const app = express();
app.use(express.json());

var bodyParser = require("body-parser");

//this code provide memory for save user images in database
app.use(bodyParser.json({ limit: "7mb" }));
app.use(
  bodyParser.urlencoded({ limit: "7mb", extended: true, parameterLimit: 7000 })
);

// list of allowed origins that currently contains URLs and Regexp entries
var allowedOrigins = [
  config.get("frontend_url.production"),
  /^https:\/\/stunning-dolphin-165038\.netlify\.app$/
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      if (!origin) return callback(null, true);

      for (var i = 0; i < allowedOrigins.length; i++) {
        var allowedOrigin = allowedOrigins[i];

        // if origin matches an allowed origin, allow the request
        if (typeof allowedOrigin === "string" && allowedOrigin == origin) {
          return callback(null, true);
        } else if (
          allowedOrigin instanceof RegExp &&
          allowedOrigin.test(origin)
        ) {
          return callback(null, true);
        }
      }

      // if origin is not allowed
      var msg =
        "The CORS policy for this site does not " +
        "allow access from the specified Origin.";
      return callback(new Error(msg), false);
    },
    credentials: true,
  })
);

const db = config.get("mongoURI");

mongoose.set("strictQuery", false); // Disabling strict query mode
mongoose
  .connect(db, {
    // Connecting using environment variable
    useNewUrlParser: true, // Use new URL parser
  })
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).send("Hello admin server is running").end();
});

// Reroute all API request starting with "/" route
app.use("/", routes);

app.listen(port, () => {
  console.log(`Server started and listening onn port: ${port}`);
});
