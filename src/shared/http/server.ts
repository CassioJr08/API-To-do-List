import 'dotenv/config'
import { app } from './app'
import { dataSource } from '../typeorm'
import 'reflect-metadata'

dataSource.initialize().then(() => {
    
    app.listen(process.env.PORT,() => {
        console.log(`Servidor aberto na porta ${process.env.PORT}`)
    })

}).catch((err) => {
    if(err) {
        console.log('Erro ao inicializar DataBase!!!')
    }
})
