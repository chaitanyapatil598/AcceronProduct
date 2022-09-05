const app = require("./app")

const dotenv =  require("dotenv")

const connectDataBase = require('./configration/database')

dotenv.config({path:"backEnd/configration/config.env"})


//Models

require("./models/memberInfoModel")

connectDataBase()

app.listen(process.env.PORT,()=>{
    console.log(`server is listen isn http://localhost${process.env.PORT}`)
})