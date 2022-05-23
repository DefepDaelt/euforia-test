import { Request, Response } from 'express'
import { deleteAttribute } from '.'

class DeleteAttributeController {
  async handle (req: Request, res: Response): Promise<Response> {
    const { id } = req.params || req.body

    try {
      await deleteAttribute.execute(id)

      return res.status(200).send({ message: 'Success: attribute deleted' })
    } catch (err) {
      return res.status(400).send({
        message: 'Faild, error deliting attribute',
        error: err.message || 'Unexpected error deliting attribute'
      })
    }
  }
}

export const deleteAttributeController = new DeleteAttributeController()
