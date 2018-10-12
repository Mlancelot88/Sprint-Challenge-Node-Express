const express = require("express");
const projectModel = require("../../data/helpers/projectModel.js");
const router = express.Router();

// Retreive ALL Projects
router.get("/", (req, res) => {
  projectModel
    .get()
    .then(projects => {
      if (projects.length) {
        return res.status(200).json(projects);
      } else {
        return res
          .status(404)
          .json("Server could not retrieve projects at this time.");
      }
    })
    .catch(err =>
      res
        .status(500)
        .json(`Server could not retrieve project information: ${err}`)
    );
});

// Retrieve Projects by specific ID
router.get("/:id", (req, res) => {
  const { id } = req.params.id;
  projectModel
    .get(parseInt(id))
    .then(project => {
      if (project.length === 1) {
        return res.status(200).json(project);
      } else {
        return res.status(404).json(`Project, ID ${id}, does not exist.`);
      }
    })
    .catch(err =>
      res
        .status(500)
        .json(`Server could not retrieve project information: ${err}`)
    );
});

module.exports = router;
