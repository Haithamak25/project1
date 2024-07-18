
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

const printData = (req: Request ,res:Response ) => {
    res.send("this is book route");
}

export { filterArrayController, printData }
