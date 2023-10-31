import express from "express";
import { createPdf } from "./src/controller.js";

const app = express();

const port = 4400;
app.listen(port, () => {
  console.log(
    `server started on [${process.env.NODE_ENV}] mode at port [${port}]`
  );
});

app.post("/sendacceptancemail", createPdf);
