const express = require("express");
const cors = require("cors");
const { sequelize } = require("./config/index"); // Adjust path if needed

const router = express.Router();

const app = express();

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
app.use(express.json());

const corsOptions = { origin: "*" };
app.use(cors(corsOptions));

const PORT = process.env.PORT || 7000;
require("./routes/employee")(app, router);
// swagger

const specs = swaggerJsDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "employee API",
      version: "1.0.0",
      description: "for employee panel",
    },
    servers: [{ url: ` http://localhost:${PORT}` }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./api-doc/*.js"],
});

app.use("/api-doc", swaggerUI.serveFiles(specs), swaggerUI.setup(specs));

app.get("/", (req, res) => {
  res.send("Home page");
});

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `DB is conncted and server running on http://localhost:${PORT}`
      );
    });
  })
  .catch((e) => {
    console.log("Error on db connection:", e);
  });

module.exports = { app };
