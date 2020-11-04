//const mongoose = require('mongoose');
const express = require('express');
const businessRoutes = express.Router();

let Business = require('./business.model'); 

/*businessRoutes.route('./add').post((req,res,next)=>{
    businessSchema.create(req.body, (error,data)=>{
        if(error){
            return next(error)
        }
        else{
            console.log(data)
            res.json(data)
        }
    })

});
*/
//store

businessRoutes.route('/add').post(function(req,res){
    let business = new Business(req.body);
    business.save()
        .then(business => {
            res.status(200).json({'business': 'business is added successfully'});
        })
        .catch( err => {
            res.status(400).send("unable to save db");
        });
});

//get data
businessRoutes.route('/').get(function(req,res){
    Business.find(function(err, business){
        if(err)
            console.log(err);
        else{
            res.json(business);
        }
    });

});

//edit
businessRoutes.route('/edit/:id').get(function(req,res){
    let id = req.params.id;
    Business.findById(id, function(err, business){
        res.json(business);
    });
});

//update
businessRoutes.route('/update/:id').post(function(req,res){
    Business.findById(req.params.id, function(err, business){
        if(!business)
            res.status(404).send("data is not found");
        else{
            business.person_name = req.body.person_name;
            business.business_name = req.body.business_name;
            business.business_nic_number =req.body.business_nic_number;

            business.save().then(business => {
                res.json('update complete');
            })
            .catch(err => {
                res.status(400).send("unable to update database");
            });
        }
    });
});

//delete
businessRoutes.route('/delete/:id').post(function(req,res){
    Business.findByIdAndRemove({id: req.params.id}, function(err,business){
        if(err)res.json(err);
        else res.json('succesfully removed');
    })

});

module.exports = businessRoutes;




