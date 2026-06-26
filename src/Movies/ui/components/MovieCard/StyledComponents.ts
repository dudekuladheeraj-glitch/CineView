import styled from 'styled-components'

export const CardLink = styled.div`
  display: block;
  width: 160px;
  flex: 0 0 auto;
  cursor: pointer;
  text-align: left;
`

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Title = styled.h3`
  margin: 0;
  font-size: 0.95rem;
  color: #111827;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const MetaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`

export const Rating = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: #b45309;
`

export const WatchlistButton = styled.button`
  border: 1px solid #d1d5db;
  border-radius: 999px;
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  color: #6b7280;
  cursor: not-allowed;
  opacity: 0.7;
`