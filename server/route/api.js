const express = require('express')
const router = express.Router()
const axios = require('axios');
const City = require('./DBModels/City.js')

router.get('/',function(req,res){
    console.log("ohh hi new visitor")
    res.send("ok working")
})

router.get(`/city/:cityName`,async function(req,res){
    const cityName = req.params.cityName
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=561ae52a3ff46bd22a23af0e1667cbf1`)
    .then(function (response) {
       // handle success
      res.send(response.data)
    })
    .catch(function (error) {
      // handle error
      res.send(error)
    })
})

router.get('/cities',async function(req,res){
    City.find({},function(err, cities){
        if(err)
            res.send(err)
        else
            res.send(cities)
    })
})

router.post('/city', async function(req,res){
    const newCity = new City(req.body)
    newCity.save(function(err){
        
        if(err)
            res.send(err)
        else
            res.send("ok")
    })
    
})

router.delete('/city/:cityName',function(req,res){
    const cityName = req.params.cityName

    City.deleteMany({name:cityName}, function(err){
        if(err)
            res.send(err)
        else
            res.send("ok")
    })
   
})


module.exports = router