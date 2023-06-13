const router = require('express').Router()
const Todo = require("../model/Todo")

//routes
router.post("/add/todo", (req, res)=> {
    const {todo} = req.body;
  const newTodo =new Todo({todo})

  //save the todo
  newTodo.save()
  .then(()=> {
    console.log("successfully added todo!")
    res.redirect("/")
  })
  .catch(err => console.log(err));
})

.get("/delete/todo/:_id", (req, res)=> {
    const {_id} = req.params;
    Todo.deleteOne({_id})
    .then(()=> {
        console.log("successfully Deleted!");
        res.redirect("/");
    })
    .catch(err => console.log(err));
});

module.exports = router;