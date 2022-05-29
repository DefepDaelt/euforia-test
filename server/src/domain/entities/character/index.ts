import { Entities } from './../../../core/domain/Entities'

type CharacterProps = {
  name: string,
  playerName: string,
  origin: string,
  class: string,
  patent: string,
  exposureLevel: string,
  currentHitPoints?: number,
  maxHitPoints?: number,
  currentSanity?: number,
  maxSanity?: number,
  currentStressPoints?: number,
  maxStressPoints?: number,
  createdAt?: Date,
  updatedAt?: Date
}

export class Character extends Entities<CharacterProps> {
  // eslint-disable-next-line no-useless-constructor
  private constructor (props: CharacterProps, id?: string) {
    super(props, id)
  }

  static async create (props: CharacterProps, id?: string) {
    if (!props.name.trim()) {
      throw new Error('Name is required')
    }

    return new Character({
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date()
    }, id)
  }
}
