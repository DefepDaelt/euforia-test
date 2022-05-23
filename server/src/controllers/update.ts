import { Router } from 'express'
import { updateAttributeController } from './../application/useCases/attribute/update/UpdateAttributeController'
import { updateCharacterController } from './../application/useCases/character/update/UpdateCharacterController'
import { updateSkillController } from './../application/useCases/skill/update/UpdateSkillController'

export const routerUpdate = Router()

routerUpdate.put('/character/:id', async (req, res) => {
  updateCharacterController.handle(req, res)
})

routerUpdate.put('/attribute/:id', async (req, res) => {
  updateAttributeController.handle(req, res)
})

routerUpdate.put('/skill/:id', async (req, res) => {
  updateSkillController.handle(req, res)
})
