import { ChangeEvent, SelectHTMLAttributes } from 'react'
import { SelectField, SelectLabel, SelectWrapper } from './StyledComponents'

export interface SelectOption {
  label: string
  value: string
}

interface Props extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'value'> {
  label?: string
  value: string
  options: SelectOption[]
  onChange: (value: string) => void
}

export const AppSelect = ({ label, value, options, onChange, id, ...restProps }: Props) => {
  const selectId = id ?? restProps.name ?? label ?? undefined

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value)
  }

  return (
    <SelectWrapper>
      {label ? <SelectLabel htmlFor={selectId}>{label}</SelectLabel> : null}
      <SelectField id={selectId} value={value} onChange={handleChange} {...restProps}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectField>
    </SelectWrapper>
  )
}