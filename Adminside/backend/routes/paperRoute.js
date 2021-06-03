const router = require('express').Router();
const Paper = require("../models/paperModel"); 

router.post("/", async (req, res) => {
    //retrieve the data from the request
    const {title, createAt, tags, html} = req. body;

    //construct the post model
    const newPaper = new this.post({
        title, 
        createAt,
        tags,
        html
    });

    //save post model
    try{
        const savedPaper = await newPaper.save();
    }catch(err){
        console.error(err);
    }
});

router.get("/", async (req, res) => {
    const papers = await Paper.find();
    res.json(papers);
});

router.get("/:id", async (req, res) => {
    const paper = await Paper.findById(req.params.id);
    res.json(paper);
});

module.exports = router;