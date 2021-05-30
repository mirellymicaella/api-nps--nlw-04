import {Connection, createConnection, getConnectionOptions} from "typeorm";

//jeito mais simples e baśico (funciona ok)
//createConnection();

export default async (): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();

    return createConnection(
        Object.assign(defaultOptions,{
            database: process.env.NODE_ENV === 
                'test' ?
                "./src/database/database.test.sqlite"
                : defaultOptions.database,
        })
    );
};
