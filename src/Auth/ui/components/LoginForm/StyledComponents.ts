import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: min(360px, 100%);
`

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #d0d0d0;
  border-radius: 8px;
`

export const Button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`

export const ErrorText = styled.p`
  color: #c62828;
  margin: 0;
`
