import { Request, Response, Router } from "express"
import { CreateTaskController } from "../UseCases/createTask/CreateTaskController"


const tasksRouter = Router()
const createTaskController = new CreateTaskController()

tasksRouter.post('/', (req: Request, res: Response) => {
    return createTaskController.handle(req, res)
})
tasksRouter.get('/', (req: Request, res: Response) => {
    res.send('Read')
})

tasksRouter.put('/:id', (req: Request, res: Response) => {
    res.send('Update')
})
tasksRouter.delete('/:id', (req: Request, res: Response) => {
    res.send('Delete')
})

export { tasksRouter }
