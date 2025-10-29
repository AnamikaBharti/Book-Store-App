const express = require("express");
const router = express.Router();
const Book = require("./book.model");
const {postABook, getAllBooks, getSingleBook, updateBook, deletebook}= require('./book.controller');

router.post("/create-book",postABook);
//get all books

router.get("/",getAllBooks);
router.get("/:id", getSingleBook);
router.put("/edit/:id",updateBook );
router.delete("/:id", deletebook)
module.exports = router;
