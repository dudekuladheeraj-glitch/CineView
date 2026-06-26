import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`

export const Title = styled.h2`
  margin: 0;
  font-size: 1.25rem;
`

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

export const SeasonLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid #d1d5db;
  text-decoration: none;
  color: #374151;
  background: #ffffff;

  &.active {
    border-color: #2563eb;
    background: #dbeafe;
    color: #1d4ed8;
  }
`