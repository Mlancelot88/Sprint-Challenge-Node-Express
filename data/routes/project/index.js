const express = require("express");
const projectModel = require("../../helpers/projectModel.js");
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
    .get(id)
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
    .catch(err => res.status(500).json(`Project submission failed: ${err}`));
});

// Identify and edit Project by ID. Return revision.
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, description, completed } = req.body;
  const updatedProject = { name, description, completed };
  projectModel
    .update(id, updatedProject)
    .then(project => {
      if (project) {
        return res.status(200).json(project);
      } else {
        return res.status(404).json(`Project, ID ${id}, does not exist.`);
      }
    })
    .catch(err =>
      res.status(500).json(`Revision failed. Server could not update: ${err}`)
    );
});

// Identify and delete Project by ID.
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  projectModel
    .remove(id)
    .then(del => {
      if (del)
        return res.status(200).json(`Project, ID ${id}, successfully deleted.`);
      else return res.status(404).json(`Project, ID ${id}, does not exist.`);
    })
    .catch(err =>
      res.status(500).json(`Server could not delete project: ${err}`)
    );
});

// Retrieve all possible actions for Project by ID
router.get("/:id/actions", (req, res) => {
  const { id } = req.params;
  projectModel
    .getProjectActions(id)
    .then(actions => {
      if (actions.length) {
        return res.status(200).json(actions);
      } else {
        return res
          .status(404)
          .json(`Project, ID ${id}, does not exist OR actions do not apply.`);
      }
    })
    .catch(err =>
      res
        .status(500)
        .json(`Server could not retrieve project information: ${err}`)
    );
});

module.exports = router;
