const express = require("express");
const userControler=require('./../controler/userControler')
//  ****************USER ROUTERS********************




const userRouter=express.Router();

userRouter.get("/", userControler.getAllUser);
userRouter.get("/:id", userControler.getUser);
userRouter.delete("/:id", userControler.deletUser);
userRouter.patch("/:id", userControler.updateUser);


module.exports=userRouter;