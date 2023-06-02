import "reflect-metadata"
import { DataSource } from "typeorm"
import { cliente } from "./entity/cliente"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "AngelicaS2004",
    database: "dblab1",
    synchronize: true,
    logging: false,
    entities:[cliente],
    migrations: [],
    subscribers: [],
})

