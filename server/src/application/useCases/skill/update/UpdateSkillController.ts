import { Request, Response } from 'express'
import { updateSkill } from './'

class UpdateSkillController {
  async handle (req: Request, res: Response) {
    try {
      req.body.id = req.params.id
      await updateSkill.execute(req.body)
      return res.status(200).send({ message: 'Success: Skill updated' })
    } catch (err) {
      return res.status(400).send({ message: 'Faild: Skill not updeted' })
    }
  }
}

export const updateSkillController = new UpdateSkillController()
