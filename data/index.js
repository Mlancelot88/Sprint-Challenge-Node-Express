const express = require("express");
const applyGlobalMiddleware = require("./middleware/globalMiddleware.js");
const projectRoutes = require("./routes/project");

const server = express();
const port = 3300;

applyGlobalMiddleware(server);

server.use("/api/projects", projectRoutes);
server.listen(port, () => console.log(`Server is running on port ${port}`));
