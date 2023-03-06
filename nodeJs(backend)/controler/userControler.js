


exports.getAllUser = (req, res) => {
    try {
      const time = (req.requestTime = new Date().toISOString());
  
      console.log(time);
      res.status(200).json({
        status: "success",
        // message:'the request is get successfully',
        createdAT: time,
        message: "The user router is not implemented yet",
      });
    } catch (error) {
      res.status(400).json({
        status: "Fail",
        message: `we cannot proccess the request due to the folllwing error  ${error}`,
      });
    }
  };
  
  exports.getUser = (req, res) => {
    try {
      const time = (req.requestTime = new Date().toISOString());
      const id = req.params.id * 1;
  
      console.log(time);
      res.status(200).json({
        status: "success",
        // message:'the request is get successfully',
        createdAT: time,
        message: `The user router yet  is not impleneted but the requested id is: ${id}`,
      });
    } catch (error) {
      res.status(400).json({
        status: "Fail",
        message: `we cannot proccess the request due to the folllwing error  ${error}`,
      });
    }
  };
  
  exports.deletUser = (req, res) => {
    try {
      const time = (req.requestTime = new Date().toISOString());
      const id = req.params.id * 1;
  
      console.log(time);
      res.status(200).json({
        status: "success",
        // message:'the request is get successfully',
        createdAT: time,
        message: `The user router yet  is not impleneted but the requested id is: ${id}`,
      });
    } catch (error) {
      res.status(400).json({
        status: "Fail",
        message: `we cannot proccess the request due to the folllwing error  ${error}`,
      });
    }
  };
  
  exports.updateUser = (req, res) => {
    try {
      const time = (req.requestTime = new Date().toISOString());
      const id = req.params.id * 1;
  
      console.log(time);
      res.status(200).json({
        status: "success",
        // message:'the request is get successfully',
        createdAT: time,
        message: `The user router yet  is not impleneted but the requested id is: ${id}`,
      });
    } catch (error) {
      res.status(400).json({
        status: "Fail",
        message: `we cannot proccess the request due to the folllwing error  ${error}`,
      });
    }
  };