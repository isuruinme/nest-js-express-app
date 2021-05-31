import * as express from "express";
import { AppMiddleware } from "./app.middleware";

const app = express();

app.use((req, res, next) => {
  const nest = new AppMiddleware(app).use(req, res, next);
  nest
    .then(() => {
      next();
    })
    .catch((err) => {
      next();
    });
});

module.exports = app;

// app.listen(3000, () => {
//   console.log('Listening on port 3000');
// });
