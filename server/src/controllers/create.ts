import { Router } from 'express'
import { createAttributeController } from './../application/useCases/attribute/create/CreateAttributeController'
import { createCharacterController } from './../application/useCases/character/create/CreateCharacterController'
import { createSkillController } from './../application/useCases/skill/create/CreateSkillController'

export const routerCreate = Router()

routerCreate.post('/character', async (req, res) => {
  createCharacterController.handle(req, res)
})

routerCreate.post('/attribute', async (req, res) => {
  createAttributeController.handle(req, res)
})

routerCreate.post('/skill', async (req, res) => {
  createSkillController.handle(req, res)
})
