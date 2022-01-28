export interface IInputProps {
  placeholder: string,
  name: string,
  id: string,
}

export interface IButtonProps {
  type: "button" | "submit" | "reset" | undefined,
  name: string,
}

export interface IDiceProps {
  number: number,
}

export interface IDicesProps {
  numberOfDices: number,
}

export interface IDotProps {
  show: boolean,
}