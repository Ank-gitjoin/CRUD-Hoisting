const book = require('../models/book');


const getAll = async (req, res) => {
	try {
		const getAllBooks = await book.find({});
		res.status(200).json({
			message: "get all books",
			getAllBooks: getAllBooks
		})

	} catch (error) {
		res.json(500).json({
			message: "Some issue fetch data"
		})
		console.log(error);
	}
}

const getBook = async (req, res) => {
	try {
		const getSingleBook = await book.findById(req.params.id);
		res.status(200).json({
			message: "Get single book record",
			getSingleBook: getSingleBook
		})
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: " Some issue into book"
		})

	}
}

const register = async (req, res) => {
	try {
		const Book = await book.create(req.body);
		Book.save();
		res.status(201).json({
			message: "Book is register",
			Book: Book
		})
	} catch (error) {
		res.status(500).json({ message: "Some error in register" });
		console.log(error);
	}
}

const updateBook = async (req, res) => {
	try {
		const id = req.params.id;
		const bookExist = await book.findOne({ _id: id });
		if (!bookExist) {
			return res.status(400).json({ message: "Book does not exist" });
		}
		const updateBook = await book.findByIdAndUpdate(id, req.body, { new: true })
		res.status(200).json({
			message: "Update the book record",
			updateBook: updateBook
		})
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: "Some issue on update the record"
		})
	}
}

const deleteBook = async (req, res) => {

	try {
		const id = req.params.id;
		const bookExist = await book.findOne({ _id: id });
		if (!bookExist) {
			return res.status(400).json({ message: "Book does not exist" });
		}
		const deleteBook = await book.findByIdAndDelete(id)
		res.status(200).json({
			message: "Delete the book record",
			deleteBook: deleteBook
		})
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: "Some issue on delete the record"
		})
	}

}

module.exports = { getAll, getBook, register, updateBook, deleteBook }