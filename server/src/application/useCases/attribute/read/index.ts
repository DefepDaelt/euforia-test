import { AttributeRepository } from '../../../../application/repositories/attribute'
import { prismaAttributeRepository } from '../../../../application/repositories/implements/prisma/PrismaAttributeRepository'

class ReadAttribute {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private attributeRepository: AttributeRepository
  ) {}

  async execute (id?: string) {
    try {
      if (!id) {
        const attributes = await this.attributeRepository.findMany()

        return attributes
      }
      const attribute = await this.attributeRepository.findUnique(id)

      return attribute
    } catch (err) {
      if (err) {
        throw new Error(err.message || 'Unexpected error')
      }
      return null
    }
  }
}

export const readAttribute = new ReadAttribute(
  prismaAttributeRepository
)
