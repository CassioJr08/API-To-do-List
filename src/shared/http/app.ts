import express, { NextFunction, Request, Response } from 'express'
import { routes } from './routes'
import { AppError } from '../errors'

const app = express()
app.use(express.json())
app.use(routes)

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if(error instanceof AppError){
        return res.status(error.statusCode).json({
            status: 'error',
            message: error.message
        })
    }

    console.log(error)
    return res.status(500).json({
        status: 'error',
        message: 'internal server error'
    })
} )
export { app }