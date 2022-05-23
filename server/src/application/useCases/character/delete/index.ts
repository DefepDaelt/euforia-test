import { prismaCharacterRepository } from './../../../../application/repositories/implements/prisma/PrismaCharacterRepository'
import { CharacterRepository } from './../../../repositories/character/index'

class DeleteCharacter {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private characterRepository: CharacterRepository
  ) {}

  async execute (id: string) {
    if (!id.trim()) {
      throw new Error('Id is required')
    }

    if (!await this.characterRepository.findUnique(id)) {
      throw new Error('Character does not exist')
    }

    await this.characterRepository.delete(id)
  }
}

export const deleteCharacter = new DeleteCharacter(
  prismaCharacterRepository
)
