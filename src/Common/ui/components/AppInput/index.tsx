import { ChangeEvent, InputHTMLAttributes } from 'react'
import { ErrorText, InputField, InputLabel, InputWrapper } from './StyledComponents'

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  label?: string
  value: string
  error?: string
  onChange: (value: string) => void
}

export const AppInput = ({ label, value, error, onChange, id, ...restProps }: Props) => {
  const inputId = id ?? restProps.name ?? label ?? undefined

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <InputWrapper>
      {label ? <InputLabel htmlFor={inputId}>{label}</InputLabel> : null}
      <InputField id={inputId} value={value} onChange={handleChange} $hasError={Boolean(error)} {...restProps} />
      {error ? <ErrorText>{error}</ErrorText> : null}
    </InputWrapper>
  )
}