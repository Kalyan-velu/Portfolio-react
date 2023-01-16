import express from "express"
import cors from 'cors'
import 
const app =express()

app.use(cors())

app.get('/request',(req,res)=>{
   const user=new User({
      name:"Kalyan",
      password:"Hehe"
   })
   user.save()
   res.status(200).json({
      user,
      message:"Created"
   })
})
const PORT=8000

app.listen(PORT,()=>{
   console.log(`Server is running on ${PORT}`)
})