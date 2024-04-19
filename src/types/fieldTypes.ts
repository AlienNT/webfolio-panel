export type InputType = 'text' | 'email' | 'phone' | 'number' | 'password'
export type InputValue = string | boolean | number

export interface Input {
  type: InputType,
  value: InputValue,
  placeholder?: string,
  readonly?: boolean,
  disabled?: boolean
}