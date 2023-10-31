const Joi = require('joi')
const { Book } = require('../db/index')
const { apiSuccess, apiError } = require('../utils/globalFunctions')

const addBook = async (req, res) => {
    const bookValidSchema = Joi.object({
        title: Joi.string().required(),
        author: Joi.string().required(),
        summary: Joi.string().required()
    })
    const validateBookData = bookValidSchema.validate(req.body, {
        abortEarly: true
    })
    let returnData = {}
    if (validateBookData && validateBookData.error) {
        returnData = {
            message: validateBookData.error.details[0].message.replace(/\"/g, ""),
            error: true,
            data: null
        }
        return apiError(req, res, returnData);

    }
    let alreadyBook = await Book.findOne({ title: req.body.title })
    if (alreadyBook) {
        returnData = {
            message: "Book already exist",
            error: true,
            data: alreadyBook
        }
        return apiError(req, res, returnData);
    }
    const bookData = await Book.create(req.body)
    returnData = {
        message: "Add Successfully",
        error: false,
        data: bookData
    }
    return apiSuccess(req, res, returnData);
}
const updateBook = async (req, res) => {
    const bookValidSchema = Joi.object({
        id: Joi.string().required(),
        title: Joi.string().required(),
        author: Joi.string().required(),
        summary: Joi.string().required()
    })
    const validateBookData = bookValidSchema.validate(req.body, {
        abortEarly: true
    })
    let returnData = {}
    console.log('validateBookData_____', validateBookData);
    if (validateBookData && validateBookData.error) {
        returnData = {
            message: validateBookData.error.details[0].message.replace(/\"/g, ""),
            error: true,
            data: null
        }
        return apiError(req, res, returnData);
    }
    let alreadyBook = await Book.findOne({ _id: req.body.id })
    console.log('alreadyBook_____', alreadyBook);
    if (!alreadyBook) {
        returnData = {
            message: "Book not found",
            error: true,
            data: null
        }
        return apiError(req, res, returnData);
    }
    const updatedData = await Book.findOneAndUpdate({ _id: req.body.id }, req.body, { new: true })
    returnData = {
        message: "Update Successfully",
        error: false,
        data: updatedData
    }
    return apiSuccess(req, res, returnData);
}
const deleteBook = async (req, res) => {
    const bookValidSchema = Joi.object({
        id: Joi.string().required()
    })
    const validateBookData = bookValidSchema.validate(req.params, {
        abortEarly: true
    })
    let returnData = {}
    if (validateBookData && validateBookData.error) {
        returnData = {
            message: validateBookData.error.details[0].message.replace(/\"/g, ""),
            error: true,
            data: null
        }
        return apiError(req, res, returnData);
    }
    console.log('REQQQQQQQQ_____', req.params.id);
    let alreadyBook = await Book.findOne({ _id: req.params.id })
    if (!alreadyBook) {
        returnData = {
            message: "Book not found",
            error: true,
            data: null
        }
        return apiError(req, res, returnData);
    }
    await Book.deleteOne({ _id: req.params.id })
    returnData = {
        message: "Delete Successfully",
        error: false,
        data: null
    }
    return apiSuccess(req, res, returnData);
}
const getAllBookList = async (req, res) => {
    let bookList = await Book.find();
    console.log('bookList_____', bookList);
    if (bookList && bookList.length > 0) {
        returnData = {
            message: "Success",
            error: false,
            data: bookList
        }
        return apiSuccess(req, res, returnData);
    }
    else {
        returnData = {
            message: "Not Found",
            error: true,
            data: null
        }
        return apiError(req, res, returnData);
    }

}
const getBookByBookId = async (req, res) => {
    const bookValidSchema = Joi.object({
        id: Joi.string().required()
    })
    const validateBookData = bookValidSchema.validate(req.params, {
        abortEarly: true
    })
    let returnData = {}
    if (validateBookData && validateBookData.error) {
        returnData = {
            message: validateBookData.error.details[0].message.replace(/\"/g, ""),
            error: true,
            data: null
        }
        return apiError(req, res, returnData);
    }
    let alreadyBook = await Book.findOne({ _id: req.params.id })
    if (!alreadyBook) {
        returnData = {
            message: "Book not found",
            error: true,
            data: null
        }
        return apiError(req, res, returnData);
    }
    returnData = {
        message: "Success",
        error: false,
        data: alreadyBook
    }
    return apiSuccess(req, res, returnData);
}

module.exports = {
    addBook: addBook,
    updateBook: updateBook,
    deleteBook: deleteBook,
    getAllBookList: getAllBookList,
    getBookByBookId: getBookByBookId,
}