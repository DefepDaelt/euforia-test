import { Entities } from '../../../core/domain/Entities'

type AttributeProps = {
  name: string,
  description?: string,
  createdAt?: Date,
  updatedAt?: Date,
}

export class Attribute extends Entities<AttributeProps> {
  // eslint-disable-next-line no-useless-constructor
  private constructor (props: AttributeProps, id?: string) {
    super(props, id)
  }

  static async create (props: AttributeProps, id?: string) {
    if (!props.name.trim()) {
      throw new Error('Name is required')
    }

    return new Attribute({
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date()
    }, id)
  }
}
