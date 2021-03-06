import { randomUUID } from 'crypto'

export abstract class Entities<T> {
  protected readonly _id: string
  public props: T

  get id () { return this._id }

  constructor (props: T, id?: string) {
    this.props = props
    this._id = id ?? randomUUID()
  }
}
