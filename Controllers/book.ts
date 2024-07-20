
import { Request, Response } from "express"

const filterArrayController = (req: Request ,res:Response ) => {
    const arr = [1,2,3,4,5,6,7,8,9]

    const filteredArray = arr.filter((item) => item % 2 === 0)

    res.status(200).json({
        message: "success",
        success: true,
        data: filteredArray
    })
}

const books  = [{
   id : 1 , 
   author : "haitham " , 
  book :  "algorithms for creeative ai solutions" 
} , 

{
    id : 2, 
    author : "haitham abu Khaled " , 
   book :  "algorithms" 
 } , 
]

const getAllBooks = (req: Request ,res:Response ) => {
   res.json ({
    message : "getting all book sucssfully " , 
    status : true , 
    books : books 
   })
}

const createBooks = (req: Request ,res:Response) => {

    const newBook =   {
        id : 3 , 
        author : "Nabeel 3rman" , 
        book : "DataBase 2 " 
    }
    books.push(newBook) 
    res.status(201).json( {  
        message : "add new book" , 
        books : books 

    } ) 
}

const deleteBook = (req: Request ,res:Response) => {  
    const bookId = Number(req.params.id)  
    
    const bookIndex = books.findIndex((book) => book.id === bookId) 
    
    if (bookIndex === -1) {
        res.status(404).json ({
            message : "book not found"
        })
    }
    books.splice(bookIndex , 1)  

    res.status(200).json({
        message : "Book deleted successfully" ,
        books : books
        
    })

}

const getSingleBook = (req: Request ,res:Response) => { 

        const bookId = Number(req.params.id)

        const book = books.find((book) => book.id === bookId) 
        
        if (!book) {
            res.status(404).json ( { 
                message : "book not found" 
            }
        ) } 

        res.status(200).json( { 
            message : "success" , 
            book : book 
        } ) 

}

export { filterArrayController, getAllBooks , createBooks , deleteBook ,getSingleBook}
