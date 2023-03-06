
const fs=reequire('fs');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const Tour=require('./../../models/tourModel');

dotenv.config({path:'./config.env'});


const dburl='mongodb+srv://root:root@cluster0.y61unny.mongodb.net/myWork?retryWrites=true&w=majority'

const cparams={
    useNewUrlParser: true,
    useUnifiedTopology:true
    // useCreateIndex: true,
    // useFindAndModify: false
}


mongoose.connect(dburl,cparams).then(con=>{
    // console.log(con.connection);
    console.log("database connection successfull")
}).catch((e)=>{
    console.log("Error"+e);
})


const tours=fs.readFileSync(`${__dirname}/tours-simple.json`);

const importdata=async()=>{
    try{
        await Tour.create(tours);
        console.log("The data is successfully loaded");
    }
    catch(err){
        console.log('Error: '+err);
    }
}

const deletedata=async()=>{
    try{
        await Tour.deleteMany(tours);
        console.log("The data is successfully deleted");
    }
    catch(err){
        console.log('Error: '+err);
    }
}

if(process.argv[2]=== '--import'){
    importdata();
}
else if(process.argv[2]==='--delete'){
    deletedata();
}

console.log(process.argv);