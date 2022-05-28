import { Request, Response } from 'express'
import { readSkill } from './'

class ReadSkillController {
  async handle (req: Request, res: Response) {
    let id: string

    if (req.params.id) {
      id = req.params.id
    }

    if (req.body.id) {
      id = req.body.id
    }

    const skills: any[] = await readSkill.execute(id)

    if (!skills) {
      return res.status(404).send({ message: 'Skills not found' })
    }

    if (skills.length === 0) {
      return res.status(200).send({ message: 'No skills found' })
    }

    return res.status(200).send({ skills })
  }
}

export const readSkillController = new ReadSkillController()
