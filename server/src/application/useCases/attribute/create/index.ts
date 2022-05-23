import { Attribute } from '../../../../domain/entities/attribute'
import { AttributeRepository } from './../../../repositories/attribute'
import { prismaAttributeRepository } from './../../../repositories/implements/prisma/PrismaAttributeRepository'
import { CreateAttributeDTO } from './CreateAttributeDTO'

class CreateAttribute {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private attributeRepository: AttributeRepository
  ) {}

  async execute (props: CreateAttributeDTO) {
    const attribute = await Attribute.create(props)

    this.attributeRepository.save(attribute)
  }
}

export const createAttribute = new CreateAttribute(
  prismaAttributeRepository
)
