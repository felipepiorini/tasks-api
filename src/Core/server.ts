import dotenv from "dotenv";
dotenv.config();
import "colors";
var colors = require("colors");
colors.enable();

import { Express } from "express";
import bodyParser = require("body-parser");
import cors = require("cors");

let express = require("express");

function startExpress() {
  let app: Express = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  var corsOptions = {
    origin: [/localhost/],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 200,
  };

  app.use(cors(corsOptions));
  return app;
}

export const app = startExpress();
