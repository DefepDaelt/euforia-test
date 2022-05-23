import { Request, Response } from 'express'
import { createSkill } from './'

export class CreateSkillController {
  async handle (req: Request, res: Response): Promise<Response> {
    const props = req.body

    try {
      await createSkill.execute({
        name: props.name,
        description: props.description,
        createdAt: props.createdAt,
        updatedAt: props.updatedAt
      })

      return res.status(201).send({ message: 'Success: skill created' })
    } catch (err) {
      return res.status(400).send({
        message: 'Faild, error creating skill',
        error: err.message || 'Unexpected error creating skill'
      })
    }
  }
}

export const createSkillController = new CreateSkillController()
