const express = require('express');
const router = require('express').Router();
const asyncHandler = require("express-async-handler");
const { Annonce, validateUpdateAnnonce } = require("../models/enonce");
const { verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin } = require("../middlewares/verifyToken");
const{AddAnnonce,updateAnnonce,getAnnonceById,gettAllAnnonce,deleteAnnonce}= require("../controllers/enonceController");
const multer =require("multer");
const path= require("path");
/**
 * @desc Ajoute Enonce
 * @route api/todos/ajouter
 * @method post
 */



//image storage

        filename = '';
        const mystorage = multer.diskStorage({
        
            destination: './images',
            filename: (req, file, redirect) => {
                let date = Date.now();
        
                let fl = date + '.' + file.mimetype.split('/')[1];
                redirect(null, fl);
                filename = fl;
        
            }
        })
        const upload = multer({ storage: mystorage });
        
        router.post('/add', upload.any('image'), AddAnnonce);
    /**
     * @desc update Enonce 
     * @route /api/users/:id
     * @method PUT 
     * @access private
     */
router.put("/update/:id",updateAnnonce );

 /**
     * @desc Get All  Enonce 
     * @route /api/users
     * @method GET
     * @access private(only admin)
     */
router.get("/",gettAllAnnonce );
 
 /**
     * @desc Get  Enonce By Id
     * @route /api/users/:id
     * @method GET
     * @access private(only admin & user himself)
     */
 router.get("/:id",getAnnonceById)

 /**
     * @desc Delete Enonce 
     * @route /api/users/:id
     * @method DELETE
     * @access private(only admin )
     */
 router.delete("/:id", deleteAnnonce)
 
module.exports = router;