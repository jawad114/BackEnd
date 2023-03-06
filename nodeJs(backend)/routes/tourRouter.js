const express=require('express')
const fs=require('fs');
const tourControler=require('./../controler/tourControler')



const tourRouter=express.Router();
tourRouter.route('/tour-stats').get(tourControler.getTourStats)
tourRouter.route('/monthlyplan/:year').get(tourControler.getMonthlyPlan)
// tourRouter.param('id',tourControler.checkId);
tourRouter.get('/', tourControler.allTours);
// tourRouter.param('body',tourControler.checkBody);
tourRouter.post('/', tourControler.createTour);
tourRouter.get('/:id',tourControler.getOneTour);
tourRouter.delete('/:id',tourControler.deleteTours)
tourRouter.patch('/:id',tourControler.updateTour)





module.exports=tourRouter;