import { Router } from 'express'
import { deleteAttributeController } from './../application/useCases/attribute/delete/DeleteAttributeController'
import { deleteCharacterController } from './../application/useCases/character/delete/DeleteCharacterController'
import { deleteSkillController } from './../application/useCases/skill/delete/DeleteSkillController'

export const routerDelete = Router()

routerDelete.delete('/character/:id', async (req, res) => {
  deleteCharacterController.handle(req, res)
})

routerDelete.delete('/attribute/:id', async (req, res) => {
  deleteAttributeController.handle(req, res)
})

routerDelete.delete('/skill/:id', async (req, res) => {
  deleteSkillController.handle(req, res)
})
