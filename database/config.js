const config = {
    db: {
        host: process.env.HOST,  
        user: 'root',  
        password: process.env.PASSWORD,  
        database: process.env.DATABASE 
    }
}

module.exports = config;