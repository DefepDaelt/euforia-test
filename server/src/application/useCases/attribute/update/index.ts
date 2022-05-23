import { AttributeRepository } from '../../../../application/repositories/attribute'
import { prismaAttributeRepository } from '../../../../application/repositories/implements/prisma/PrismaAttributeRepository'
import { Attribute } from '../../../../domain/entities/attribute'
import { UpdateAttributeDTO } from './UpdateAttributeDTO'

class UpdateAttribute {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private attributeRepository: AttributeRepository
  ) {}

  async execute (newAttribute: UpdateAttributeDTO) {
    try {
      if (!newAttribute.id) {
        throw new Error('Id is required')
      }
      const attribute: Attribute = await this.attributeRepository.findUnique(newAttribute.id)

      if (!attribute) {
        throw new Error('Attribute does not exist')
      }

      await this.attributeRepository.update(await Attribute.create({
        name: newAttribute.name,
        description: newAttribute.description,
        createdAt: newAttribute.createdAt
      }, newAttribute.id))
    } catch (err) {
      if (err) {
        throw new Error(err.message || 'Unexpected error')
      }
      return null
    }
  }
}

export const updateAttribute = new UpdateAttribute(
  prismaAttributeRepository
)
