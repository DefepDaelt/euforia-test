import { Request, Response } from 'express'
import { deleteSkill } from '.'

class DeleteSkillController {
  async handle (req: Request, res: Response): Promise<Response> {
    const { id } = req.params || req.body

    try {
      await deleteSkill.execute(id)

      return res.status(200).send({ message: 'Success: skill deleted' })
    } catch (err) {
      return res.status(400).send({
        message: 'Faild, error deliting skill',
        error: err.message || 'Unexpected error deliting skill'
      })
    }
  }
}

export const deleteSkillController = new DeleteSkillController()
