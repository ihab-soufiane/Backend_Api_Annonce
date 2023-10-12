const asyncHandler = require("express-async-handler");
const {Annonce,validateEnonce,validateUpdateAnnonce}=require("../models/enonce")
const multer =require("multer");
const path= require("path");
/**
     * @desc Post All  hotels 
     * @route /api/hotels
     * @method POST
     * @access private(only admin)
     */
const AddAnnonce= asyncHandler(
    async(req, res) => {
        try {
            data1 = req.body;
    
            annonce = new Annonce(data1);
            annonce.image = filename;
            savedEnonce = await annonce.save();
            filename = '';
            res.send(savedEnonce)
        } catch (err) {
            res.send(err)
        }
    
    
    })
    /**
     * @desc Get All  Users 
     * @route /api/users
     * @method GET
     * @access private(only admin)
     */
const gettAllAnnonce = asyncHandler(async(req,res)=>{
    const annonces= await Annonce.find();
    res.status(200).send(annonces);
});
  /**
     * @desc Update  User 
     * @route /api/users/:id
     * @method PUT 
     * @access private
     */

const updateAnnonce =asyncHandler(async(req, res) => {
   
    /*if (req.user.id !== req.params.id) {
        return res.status(403).json({ message: 'you are not allow you ken update your profile' })
    }*/

   /* const { error } = validateUpdateAnnonce(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }*/
    
    const updateAnnonce = await Annonce.findByIdAndUpdate(req.params.id, {
        $set: {
            title: req.body.title,
            content: req.body.content,
            description: req.body.description,
            image:req.body.image,
            prix:req.body.prix
            
        }
      
    },{new:true});
    res.status(200).json(updateAnnonce);
})

 /**
     * @desc Get  annonce By Id
     * @route /api/annonce/:id
     * @method GET
     * @access public
     */
const getAnnonceById= asyncHandler(async(req,res)=>{
    const annonce= await Annonce.findById(req.params.id);
    if(annonce){
        res.status(200).json(annonce);
    }else {
        res.status(200).json({message:"annonce not found"})
    }
    
})




 /**
     * @desc Delete annonce 
     * @route /api/annonce/:id
     * @method DELETE
     * @access private(only admin )
     */
 /*const deleteHotel=asyncHandler(async(req,res)=>{
    const annonce= await User.findById(req.params.id);
    if(annonce){
        await Annonce.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"annonce has been deleted successfully"});
    }else {
        res.status(404).json({message:"annonce not found"})
    }
    
})*/
const deleteAnnonce=asyncHandler(async(req,res)=>{
    const annonce= await Annonce.findById(req.params.id);
    if(annonce){
        await Annonce.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"annonce has been deleted successfully"});
    }else {
        res.status(200).json({message:"annonce not found"})
    }
    
})
    module.exports={AddAnnonce,updateAnnonce,getAnnonceById,gettAllAnnonce,deleteAnnonce}