import { Router } from "express"
import { createBooks, filterArrayController, getAllBooks ,deleteBook , getSingleBook  } from "../Controllers/book.js"
// comment 1 
const router = Router()

router.get("/", getAllBooks)

router.get("/filter-arr", filterArrayController)

router.post ("/" ,createBooks )

router.delete("/:id", deleteBook)

router.get ("/:id" , getSingleBook) 
export default router;