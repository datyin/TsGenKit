/**
 * Type alias for all primitive types.
 */
export type Primitive =
  | string
  | number
  | symbol
  | bigint
  | boolean
  | null
  | undefined
;

/**
 * Type alias for all primitive types or array of primitive types.
 */
export type Scalars = Primitive | Primitive[];
