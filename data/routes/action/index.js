const express = require("express");
const actionModel = require("../../data/helpers/actionModel.js");
const router = express.Router();

// Retrieves all available actions
router.get("/", (req, res) => {
  actionModel
    .get()
    .then(actions => {
      if (actions.length) return res.status(200).json(actions);
      else return res.status(404).json("Actions retrieval failed.");
    })
    .catch(err =>
      res
        .status(500)
        .json(`Server could not retrieve action information: ${err}`)
    );
});

// Retrieve Action by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  actionModel
    .get(id)
    .then(action => res.status(200).json(action))
    .catch(err =>
      res
        .status(500)
        .json(
          `Server could not retrieve action information: ${err}. It is likely the action with ID ${id} does not exist.`
        )
    );
});

module.exports = router;
