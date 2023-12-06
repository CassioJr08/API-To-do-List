import 'dotenv/config'
import { app } from './app'


app.listen(process.env.PORT,() => {
    console.log(`Servidor aberto na porta ${process.env.PORT}`)
})
