

const isvelid=(req,res,next)=>{
    let {titel,cetgory,price}=req.body

    if(!titel,!cetgory,!price){
        res.send("enter velid data")
    }

    else{
        next()
    }
}
