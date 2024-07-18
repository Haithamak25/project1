import { Router } from "express"
import { filterArrayController, printData } from "../Controllers/book.js"
// comment 1 
const router = Router()

router.get("/", printData)

router.get("/filter-arr", filterArrayController)

export default router;