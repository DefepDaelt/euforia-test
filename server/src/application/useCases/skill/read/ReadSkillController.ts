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

    const skill: any[] = await readSkill.execute(id)

    if (!skill) {
      return res.status(404).send({ message: 'Skills not found' })
    }

    if (skill.length === 0) {
      return res.status(200).send({ message: 'No skills found' })
    }

    if (skill.length === 1) {
      return res.status(200).send({ skill })
    }

    return res.status(200).send({ skills: skill })
  }
}

export const readSkillController = new ReadSkillController()
