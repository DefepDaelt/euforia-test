import { Request, Response } from 'express'
import { deleteCharacter } from '.'

class DeleteCharacterController {
  async handle (req: Request, res: Response): Promise<Response> {
    const { id } = req.params || req.body

    try {
      await deleteCharacter.execute(id)

      return res.status(200).send({ message: 'Success: character deleted' })
    } catch (err) {
      return res.status(400).send({
        message: 'Faild, error deliting character',
        error: err.message || 'Unexpected error deliting character'
      })
    }
  }
}

export const deleteCharacterController = new DeleteCharacterController()
