import { Request, Response } from 'express'
import { updateCharacter } from './'

class UpdateCharacterController {
  async handle (req: Request, res: Response) {
    try {
      req.body.id = req.params.id
      await updateCharacter.execute(req.body)
      return res.status(200).send({ message: 'Success: Character updated' })
    } catch (err) {
      return res.status(400).send({ message: 'Faild: Character not updeted' })
    }
  }
}

export const updateCharacterController = new UpdateCharacterController()
