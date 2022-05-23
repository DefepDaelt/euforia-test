import { Router } from 'express'
import { readAttributeController } from './../application/useCases/attribute/read/ReadAttributeController'
import { readCharacterController } from './../application/useCases/character/read/ReadCharacterControllers'
import { readSkillController } from './../application/useCases/skill/read/ReadSkillController'

export const routerRead = Router()

routerRead.get('/character', async (req, res) => {
  readCharacterController.handle(req, res)
})

routerRead.get('/character/:id', async (req, res) => {
  readCharacterController.handle(req, res)
})

routerRead.get('/attribute', async (req, res) => {
  readAttributeController.handle(req, res)
})

routerRead.get('/attribute/:id', async (req, res) => {
  readAttributeController.handle(req, res)
})

routerRead.get('/skill', async (req, res) => {
  readSkillController.handle(req, res)
})

routerRead.get('/skill/:id', async (req, res) => {
  readSkillController.handle(req, res)
})
