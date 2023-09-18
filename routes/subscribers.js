const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

//get
router.get('/', async (req,res)=>{
  // res.send('get all')
  // "moscow_marriott_imperial_plaza_hotel"
  try{
    // const subscribers = await Subscriber.find({},{name:"Q Bungalows"})
    // const subscribers = await Subscriber.find({'region.id': '965850015'})
    // const subscribers = await Subscriber.find({'id': {$in: ['holiday_inn_express_moscow_paveletskaya']}})
    // const subscribers = await Subscriber.findById('64e88304f53d2e02e2afd227')
    const subscribers = await Subscriber.find({'_id':{$in:['64e88304f53d2e02e2afd227','64e88304f53d2e02e2afd22b']}})

    // const subscribers = await Subscriber.find().limit(2)
    res.json(subscribers)
  }catch (err){
    res.status(500).json({message: err.message})
  }
})
//get one
router.get('/:id', getSubscriber, (req,res)=>{
  res.send(res.subscriber.name)
})
//create one
router.post('/',async (req,res)=>{
  const subscriber = new Subscriber({
    name: req.body.name,
    subscriberToChannel: req.body.subscriberToChannel
  })

  try{
    const newSubscriber = await subscriber.save()
    res.status(201).json(newSubscriber)
  }catch(err){
    res.status(400).json({message: err.message})
  }
  // res.send(req.params.id)
})


//update one


//delete one
router.delete('/:id',async (req,res)=>{
  // res.subscriber()

  // res.send(req.params.id)
})


async function getSubscriber(req,res,next){
  let subscriber
  try{
   
      subscriber = await Subscriber.findById(req.params.id)
 
      if(subscriber==null){
        return res.status(404).json({message: 'err subs'})
      }
  }
  catch (err){
    return res.status(500).json({message: err.message})
  }

  res.subscriber = subscriber;
  next()
}

module.exports = router