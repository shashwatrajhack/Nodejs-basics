const express = require('express')
const router = express.Router();

router.get("/", (req, res) => {
    res.send(courses);
  });
  
  router.post("/", (req, res) => {
    console.log("######", req.body);
    let vm = {
      id: courses.length + 1,
      name: req.body.name,
    };
    courses.push(vm);
    res.send(vm);
  });
  
  router.delete("/:id", (req, res) => {
    if (req.params.id < 0 || req.params.id > courses.length) {
      return res.send("this id doesn't exist");
    }
  
    const popc = courses.splice(req.params.id, 1);
    console.log(popc);
    return res.send(popc);
  });
  
  router.get("/:id", (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send("The course is not found");
    console.log("###", req.params.id);
    console.log("******", course);
    res.send(course);
  });

  module.export = router;