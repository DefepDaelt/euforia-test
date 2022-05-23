import { Request, Response } from 'express'
import { updateAttribute } from './'

class UpdateAttributeController {
  async handle (req: Request, res: Response) {
    try {
      req.body.id = req.params.id
      await updateAttribute.execute(req.body)
      return res.status(400).send({ message: 'Success: Attribute updated' })
    } catch (err) {
      return res.status(400).send({ message: 'Faild: Attribute not updeted' })
    }
  }
}

export const updateAttributeController = new UpdateAttributeController()
