const contactModel=require("../models/contact-models");

const contactForm= async(req, res)=>{
    try {
        const {name, email, message} = req.body;
        if(!name || !email || !message){
            return res.status(400).json({error: "Please fill all the fields."})
            }
            const data = await contactModel.create({
                name, email, message
                })
                console.log(data);
                res.status(200).json({data})

    } catch (error) {
        console.log(error);  
        return res.status(500).json({message:"message not dilivered"});
        
        
    }

};
module.exports={contactForm};
