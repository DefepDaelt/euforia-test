import { prismaAttributeRepository } from './../../../../application/repositories/implements/prisma/PrismaAttributeRepository'
import { AttributeRepository } from './../../../repositories/attribute/index'

class DeleteAttribute {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private attributeRepository: AttributeRepository
  ) {}

  async execute (id: string) {
    if (!id.trim()) {
      throw new Error('Id is required')
    }

    if (!await this.attributeRepository.findUnique(id)) {
      throw new Error('Attribute does not exist')
    }

    await this.attributeRepository.delete(id)
  }
}

export const deleteAttribute = new DeleteAttribute(
  prismaAttributeRepository
)
