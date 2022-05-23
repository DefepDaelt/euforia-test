import { Request, Response } from 'express'
import { createAttribute } from './'

export class CreateAttributeController {
  async handle (req: Request, res: Response): Promise<Response> {
    const props = req.body

    try {
      await createAttribute.execute({
        name: props.name,
        description: props.description,
        createdAt: props.createdAt,
        updatedAt: props.updatedAt
      })

      return res.status(201).send({ message: 'Success: attribute created' })
    } catch (err) {
      return res.status(400).send({
        message: 'Faild: error creating attribute',
        error: err.message || 'Unexpected error creating attribute'
      })
    }
  }
}

export const createAttributeController = new CreateAttributeController()
