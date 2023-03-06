module.exports=((err,req,res,next)=>{
    console.log(err.stack);
    err.statusCode=err.statusCode || 500;
    err.status=err.status || 'error';

    if(process.env.NODE_ENV==='development'){
        res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        error:err,
        stack:err.stack,
        message:err.message
    });
    }
    else if(process.env.NODE_ENV==='production'){
        res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        error:err,
        stack:err.stack,
        message:err.message
    });
    }
    //database error handler
    else if(err.name==='castError'){
        res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        error:err,
        stack:err.stack,
        message:err.message
    });
    }
    else{
            res.status(err.statusCode).json({
            status:'fail',
            message:'something serious is going wrong'
        });
    }
})