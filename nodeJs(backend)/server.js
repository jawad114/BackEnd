const dotenv=require('dotenv');
const app=require('./index');
const mongoose=require('mongoose');
// const Tour=require('./models/tourModel')

dotenv.config({path:'./config.env'});
console.log(process.env)

const DB=process.env.DATABASE_LOCAL;

mongoose.connect(DB,{
    useNewUrlParser:true,
    // useCreateIndex:true,
    // useFindAndModify:false
}).then(()=>{
    console.log('Successfull connection');
})

// const testTour= new Tour({
//     name:'Forest Hiker',
//     name: "The Pablo Hunters",
//     duration: 5,
//     maxGroupSize: 25,
//     difficulty: "easy",
//     ratingsAverage: 4.7,
//     ratingsQuantity: 37,
//     price: 397,
//     summary: "Breathtaking hike through the Canadian Banff National Park",
//     description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     imageCover: "tour-1-cover.jpg",
//     images: ["tour-1-1.jpg", "tour-1-2.jpg", "tour-1-3.jpg"],
//     startDates: ["2021-04-25,10:00", "2021-07-20,10:00", "2021-10-05,10:00"]
// })

// testTour.save().then(doc=>{
//     console.log(doc)
// }).catch(error=>{
//     console.log(error);
// })

app.listen(4000, 'localhost', (req,res)=>{
    console.log("The server is running on the port 3000");
   
})
