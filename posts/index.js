const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

// below endpoint is only for testing. Actual GET /post in in query app
app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts/create", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = { id, title };
  await axios
    .post("http://event-bus-srv:4005/events", {
      type: "PostCreated",
      data: { id, title },
    })
    .catch((err) => {
      console.log("Failed to emit event to event-bus", err);
    });
  res.status(201).send(posts[id]);
});

app.post("/events", (req, res) => {
  console.log("Event Received:", req.body.type);
  res.send({});
});

app.listen(4000, () => {
  console.log("v55");
  console.log("Posts listening on port 4000");
});
