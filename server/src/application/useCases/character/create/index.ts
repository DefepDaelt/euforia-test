import { Character } from './../../../../domain/entities/character'
import { CharacterRepository } from './../../../repositories/character/index'
import { prismaCharacterRepository } from './../../../repositories/implements/prisma/PrismaCharacterRepository/index'
import { CreateCharacterDTO } from './CreateCharacterDTO'

class CreateCharacter {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private characterRepository: CharacterRepository
  ) {}

  async execute (props: CreateCharacterDTO) {
    const character = await Character.create(props)

    this.characterRepository.save(character)
  }
}

export const createCharacter = new CreateCharacter(
  prismaCharacterRepository
)
