const express = require("express");
const projectModel = require("../../data/helpers/projectModel.js");
const router = express.Router();

// Retrieve ALL Projects
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

// Allow user to post Project & return submission
router.post("/", (req, res) => {
  const { name, description } = req.body;
  const newProject = { name, description };
  projectModel
    .insert(newProject)
    .then(project => res.status(201).json(project))
    .catch(err =>
      res.status(500).json(`Project submission failed: ${err}`)
    );
});

module.exports = router;
