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

    const attributes: any[] = await readAttribute.execute(id)

    if (!attributes) {
      return res.status(404).send({ message: 'Attributes not found' })
    }

    if (attributes.length === 0) {
      return res.status(200).send({ message: 'No attributes found' })
    }

    return res.status(200).send({ attributes })
  }
}

export const readAttributeController = new ReadAttributeController()
