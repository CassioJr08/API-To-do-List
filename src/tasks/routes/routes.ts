import { Request, Response, Router } from "express"

const tasksRouter = Router()

tasksRouter.post('/', (req: Request, res: Response) => {
    res.send('Create')
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
