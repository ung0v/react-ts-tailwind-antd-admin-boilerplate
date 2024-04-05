export type WithRequiredProp<Type, Key extends keyof Type> = Type &
  Required<Pick<Type, Key>>
