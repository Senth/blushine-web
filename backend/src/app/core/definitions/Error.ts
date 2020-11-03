import { Immutable } from './Immutable'

/**
 * A custom type of error that is solely for sending error messages as an output.
 */
export class Error {
  readonly errors: Immutable<Error.Info[]>
  constructor(errors: Error.Info[]) {
    // Remove duplicates
    this.errors = errors.reduce((array, item) => {
      const exists = !!array.find((object) => object.type === item.type && object.data === item.data)
      if (!exists) {
        array.push(item)
      }
      return array
    }, new Array<Error.Info>())
  }

  static create(type: Error.Types, data?: string): Error {
    return new Error([{ type: type, data: data }])
  }
}

export namespace Error {
  export interface Info {
    type: Types
    data?: string
  }

  export enum Types {
    undefined = 'undefined',
  }
}
