import Express from "express";

const app = Express()

app.use(Express.json())
app.use(Express.urlencoded({extended:true}))
app.use(Express.static("public"))
app.set('view engine','ejs')

app.get("/",(req,res)=>{
    res.render("home")
})

app.listen(3000,()=>{console.log("ok")})