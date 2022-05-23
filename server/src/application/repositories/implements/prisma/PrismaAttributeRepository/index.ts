import { Attribute } from '../../../../../domain/entities/attribute'
import { prisma } from '../../../../../utils/prisma'
import { AttributeRepository } from './../../../attribute/index'

export class PrismaAttributeRepository implements AttributeRepository {
  async save (attribute: Attribute) {
    await prisma.attribute.create({
      data: {
        id: attribute.id,
        name: attribute.props.name,
        description: attribute.props.description,
        createdAt: attribute.props.createdAt,
        updatedAt: attribute.props.updatedAt
      }
    })
  }

  async findUnique (id: string) {
    try {
      const attribute = await prisma.attribute.findUnique({
        where: {
          id
        }
      })

      return attribute
    } catch (err) {
      return null
    }
  }

  async findMany () {
    const attributes = await prisma.attribute.findMany()
    return attributes
  }

  async update (attribute: Attribute) {
    await prisma.attribute.update({
      where: {
        id: attribute.id
      },

      data: {
        name: attribute.props.name,
        description: attribute.props.description,
        updatedAt: attribute.props.updatedAt
      }
    })
  }

  async delete (id: string) {
    const attribute = prisma.attribute.delete({
      where: {
        id
      }
    })

    const character = prisma.characterAttributes.deleteMany({
      where: {
        attributeId: id
      }
    })

    await prisma.$transaction([character, attribute])
  }
}

export const prismaAttributeRepository = new PrismaAttributeRepository()
