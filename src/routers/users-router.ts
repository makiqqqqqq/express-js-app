import {Router, Request, Response} from "express";
import {users} from "../utils/data";
import {emptyCheck} from "../helpers";

export const usersRouter = Router({});

usersRouter.get('/', (req: Request, res: Response) => {
    emptyCheck(users, res)
})
usersRouter.get('/:id', (req: Request, res: Response) => {
    const searchUser = users.find(({id}) => id === Number(req.params.id))
    emptyCheck(searchUser, res)
})
usersRouter.delete('/:id', (req: Request, res: Response) => {
    users.forEach((user) => {
        if (user.id === Number(req.params.id)) {
            users.splice(user.id, 1)
            res.send(204)
        } else {
            res.send(404)
        }
    })

})