const fs=require('fs');
const express=require('express');
const morgan=require('morgan');
const AppError=require('./utils/appError');
const globalErrorHandler=require('./controler/errorControler')
const tourRouter=require('./routes/tourRouter');
const userRouter=require('./routes/userRouter');
const { getTourStats } = require('../Udemy-Practice-code/Node-Farm-master/udemy-natours-app-master/udemy-natours-app-master/mypractice-natours-app/controlers/tourControler');

const app=express();
app.use(morgan('dev'));
app.use(express.json())  
app.use('/tours', tourRouter);
app.use('/users', userRouter);
//**********ERROR HANDLER***********
app.all('*', (req,res,next)=>{
    // // res.status(404).json({
    // //     status:'fail',
    // //     message:`can't find ${req.originalUrl} on this server`
    // // })

    // const err=new Error(`can't find ${req.originalUrl} on this server`);
    // err.status='fail';
    // err.statusCode=404; 

    next(new AppError(`can't find ${req.originalUrl} on this server`));
})

app.use(globalErrorHandler);

module.exports=app  ;

