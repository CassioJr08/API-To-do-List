import { Request, Response, Router } from "express"
import { tasksRouter } from "../../../tasks/routes/routes"

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
    return res.json({message: 'Olá Dev!'})
})

routes.use('/tasks', tasksRouter)


export { routes }