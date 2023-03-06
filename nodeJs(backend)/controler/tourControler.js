const { json } = require('express');
const fs=require('fs');
const Tour=require('./../models/tourModel')


const tour=JSON.parse(fs.readFileSync(`${__dirname}/../data/tours-simple.json`))

//****************TO FIND THE TOUR STATS*************

exports.getTourStats=async(req,res)=>{
    const stats=await tour.aggregate([
        {
            $match: {ratingsAverage: {$gte:4.5}}
        },

        {$group:{
            id:difficulty,
            avgRatings:{$avg: '$ratingsAverage'},
            avgPrice: {$avg: '$price'},
            minPrice: {$min: '$price'},
            maxPrice: {$max: '$price'},
            numRatings:{$sum: '$ratingsQuantity'},
            numTours: {$sum:1}

    }},
    {
        $sort:{
            $sort:{avgPrice:1}
        }
    },
    {
        $match:{
            id:{
                    $ne:'EASY'
                
            }
        }
    }
    ])
}

//****************TO FIND THE BUSY YEAR****************
exports.getMonthlyPlan=async(req,res)=>{
    const year=req.params.year*1;
    const plan=await tour.aggregate([
        {
            unwind:'$startDates'
        },
        {
            $match:{startDates:{
                $gte:new Date(`${year}-01-01`),
                $lte:new Date(`${year}-12-31`)
            }}

        },
        {
            $group:{
                id:{$month:startDates},
                numTourStarts:{$sum:1},
                tours: {$push:{$name}}
            }
        },
        {
            $addFields:{$month: {$id}}
        },
        {
            $sort:{numTourStarts:-1}
        }
    ])
}

// exports.checkId=((req,res,next,val)=>{
//     console.log(`Tour id is ${val}`)
//     const id=req.params.id*1;
//     const tourLength=tour.length;
//     if(id>tourLength){
//        return  res.status(404).json({
//             status:'fail',
//             message:'Error'
//         })
//     }
//     next();
// })


// exports.checkBody=((req,res,next)=>{
//     if(!req.body.name || !req.body.price){
//         return res.status(404).json({
//             status:'fail',
//             message:'name or price missing'
//         })
//     }
//     next();
// })

exports.allTours=(async(req,res)=>{
    try{
        //*****************Filtering*******************
        const queryObject={...req.query};
        const excludeFields=['page', 'sort', 'fields']; 
        excludeFields.forEach(el=>delete queryObject[el])
        
         //*****************Advance Filtering*******************
        let queryStr=JSON.stringify(queryObject);
        queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match=> `$${match}`);
        console.log(JSON.parse(queryStr));
       const query=await Tour.find(JSON.parse(queryStr));

        //*****************SORT*******************

    //    if(req.query.sort){
    //     const sortBy=req.query.sort.split(',').join(' ');
    //     newTour=query.sort(sortBy);
    //     console.log(JSON.parse(newTour))
    //    }else{
    //     query=query.sort('startDate')
    //    }

    //*****************Fields*******************
        if(req.query.fields){
            const fields=req.query.sort.split(',').join(' ');
            query=query.select(fields);
        } 
       res.status(202).json({
        status:'success',
        data:query
       }) 
    }catch(error){
        res.status(404).json({
            status:'fail',
            message:`Error:  ${error}`
        })
    }
        
    })   

exports.getOneTour=(async(req,res)=>{
    try{
       const newTour=await Tour.findById(req.params.id);
       res.status(202).json({
        status:'success',
        data:newTour
       }) 
    }catch(error){
        res.status(404).json({
            status:'fail',
            message:`Error:  ${error}`
        })
    }
        
    })    

exports.createTour=(async(req,res)=>{
    try{
       const newTour=await Tour.create(req.body);
       res.status(202).json({
        status:'success',
        data:newTour
       }) 
    }catch(error){
        res.status(404).json({
            status:'fail',
            message:`Error:  ${error}`
        })
    }
        
    })  
    
    
exports.deleteTours=(async(req,res)=>{
    try{
       const newTour=await Tour.findByIdAndDelete(req.params.id);
       res.status(202).json({
        status:'success',
        data:newTour
       }) 
    }catch(error){
        res.status(404).json({
            status:'fail',
            message:`Error:  ${error}`
        })
    }
        
    })  


exports.updateTour=(async(req,res)=>{
    try{
       const newTour=await Tour.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators:true
       });
       res.status(202).json({
        status:'success',
        data:newTour
       }) 
    }catch(error){
        res.status(404).json({
            status:'fail',
            message:`Error:  ${error}`
        })
    }
        
    })  