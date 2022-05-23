import express from 'express'
import { routerCreate } from './controllers/create'
import { routerDelete } from './controllers/delete'
import { routerRead } from './controllers/read'
import { routerUpdate } from './controllers/update'

export const app = express()
app.use(express.json())

app.use('/create', routerCreate)
app.use('/read', routerRead)
app.use('/update', routerUpdate)
app.use('/delete', routerDelete)
