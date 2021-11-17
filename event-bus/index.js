const express = require("express");
const bodayParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodayParser.json());
// app.use(cors());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;
  events.push(event);
  axios.post("http://localhost:4000/events", event).catch((err) => {
    console.log("Crashed at 4000", err);
  });
  axios.post("http://localhost:4001/events", event).catch((err) => {
    console.log("Crashed at 4001", err);
  });
  axios.post("http://localhost:4002/events", event).catch((err) => {
    console.log("Crashed at 4002", err);
  });
  axios.post("http://localhost:4003/events", event).catch((err) => {
    console.log("Crashed at 4003", err);
  });
  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.status(200).send(events);
});

app.listen(4005, () => {
  console.log("Event bus listening on port 4005");
});
