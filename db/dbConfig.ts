import { DataSource } from "typeorm";
import { Book } from "./entites/Book.js";

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "book-db",
    synchronize: true,
    logging: false,
    entities: [Book],
})

export default AppDataSource ; 
