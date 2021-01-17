const express = require("express");
const cors = require("cors");
const http = require("http");
const bodyParser =require("body-parser");

const routes = require("./routes");
const {setupWebsocket} = require("./websocket");

const app = express();

const server = http.Server(app);

setupWebsocket(server);

app.use(express.json());

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);




server.listen(process.env.PORT || 3333 );
