const express = require("express");
const applyGlobalMiddleware = require("./middleware/globalMiddleware.js");
// const { projectRoutes, actionRoutes } = require("./routes");
const projectRoutes = require("./data/routes/project");
const actionRoutes = require("./data/routes/action");

const server = express();
const port = 3300;

applyGlobalMiddleware(server);

server.use("/api/projects", projectRoutes);
server.use("/api/actions", actionRoutes);

server.listen(port, () => console.log(`Server is running on port ${port}`));
