const express=require('express')
const app=express();
const userModel=require('./models/user');
const postModel=require('./models/post');

app.get('/', (req, res)=>{
    res.send("Radhe Radhe")
})

app.get('/create', async(req, res)=>{
    let user=await userModel.create({
        username:"Bhavesh",
        email:"bhavesh@gmail.com",
        age:34,

    })
    res.send(user)
})

app.get('/post/create', async(req, res)=>{
    let post=await postModel.create({
        postdata:"I am very greatful to the God, Thanks for taking care of Me",
        user:"676e02dfb15d049183dbdf90",

    })
    let user=await userModel.findOne({_id:"676e02dfb15d049183dbdf90"})
    user.posts.push(post);
    await user.save();
    res.send({post, user})
})

app.listen(3000, (req, res)=>{
    console.log("It's working")
})