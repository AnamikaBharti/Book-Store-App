const Book = require("./book.model");
 
const postABook = async (req, res) => {
  console.log("Bulk add route hit");
  try {
    const booksArray = req.body;

    if (!Array.isArray(booksArray) || booksArray.length === 0) {
      return res.status(400).send({ message: "Invalid books data" });
    }

    const newBooks = await Book.insertMany(booksArray);

    res.status(201).send({
      message: "Books created successfully",
      books: newBooks,
    });
  } catch (error) {
    console.error("Error creating books", error);
    res.status(500).send({ message: "Failed to create books" });
  }
};
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({createdAt:-1});
    res.status(200).send(books);
  } catch (error) {
    console.error("Error Fetchig books", error);
    res.status(500).send({ message: "Failed to fetch books" });
  }
};
const getSingleBook=async(req, res)=>{
  try {
    const {id}=req.params ;
    const book =await Book.findById(id);
    if(!book){
      res.status(404).send({message: "Book not found"});
    }
    res.status(200).send(book);
  } catch (error) {
    console.error("Error Fetchig books", error);
    res.status(500).send({ message: "Failed to fetch books" });
  }
}

const updateBook = async  (req, res) =>{
  try {
    const {id}=req.params ;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {new:true});
    if(!updatedBook){
       res.status(404).send({message: "Book not found"});
    }
  } catch (error) {
     console.error("Error Updating books", error);
    res.status(500).send({ message: "Failed to update books" });
  }
}
const deletebook = async (req,res)=>{
  try {
    const {id}=req.params ;
    const deletedBook = await Book.findByIdAndDelete(id);
    if(!deletebook){
      res.status(404).send({message: "Book is not found"});
    }
  } catch (error) {
     console.error("Error Deleting a book", error);
    res.status(500).send({ message: "Failed to delete book" });
  }
}
module.exports = { postABook, getAllBooks, getSingleBook ,updateBook,deletebook};
