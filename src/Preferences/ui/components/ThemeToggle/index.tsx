import type { SelectOption } from '../../../../Common/ui/components/AppSelect'
import { OptionButton, OptionsGroup, Wrapper, Label } from './StyledComponents'

interface Props {
  label: string
  value: string
  options: SelectOption[]
  onChange: (value: string) => void
}

export const ThemeToggle = ({ label, value, options, onChange }: Props) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <OptionsGroup role="radiogroup" aria-label={label}>
        {options.map((option) => (
          <OptionButton
            key={option.value}
            type="button"
            role="radio"
            aria-checked={value === option.value}
            $active={value === option.value}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </OptionButton>
        ))}
      </OptionsGroup>
    </Wrapper>
  )
}