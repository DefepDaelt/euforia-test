import { Entities } from './../../../core/domain/Entities'

type SkillProps = {
  name: string,
  description?: string,
  createdAt?: Date,
  updatedAt?: Date,
}

export class Skill extends Entities<SkillProps> {
  // eslint-disable-next-line no-useless-constructor
  private constructor (props: SkillProps, id?: string) {
    super(props, id)
  }

  static async create (props: SkillProps, id?: string) {
    if (!props.name.trim()) {
      throw new Error('Name is required')
    }

    return new Skill({
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date()
    }, id)
  }
}
