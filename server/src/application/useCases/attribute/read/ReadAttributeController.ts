import { Request, Response } from 'express'
import { readAttribute } from './'

class ReadAttributeController {
  async handle (req: Request, res: Response) {
    let id: string

    if (req.params.id) {
      id = req.params.id
    }

    if (req.body.id) {
      id = req.body.id
    }

    const character: any[] = await readAttribute.execute(id)

    if (!character) {
      return res.status(404).send({ message: 'Attributes not found' })
    }

    if (character.length === 0) {
      return res.status(200).send({ message: 'No attributes found' })
    }

    if (character.length === 1) {
      return res.status(200).send({ character })
    }

    return res.status(200).send({ attributes: character })
  }
}

export const readAttributeController = new ReadAttributeController()
