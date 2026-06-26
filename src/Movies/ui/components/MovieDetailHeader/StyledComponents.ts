import styled from 'styled-components'

export const HeaderRoot = styled.section`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 32px;
  background: #111827;
`

export const BackdropImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const BackdropFallback = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1f2937, #111827);
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(17, 24, 39, 0.95) 0%,
    rgba(17, 24, 39, 0.8) 50%,
    rgba(17, 24, 39, 0.35) 100%
  );
`

export const Content = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 24px;
  padding: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

export const Title = styled.h1`
  margin: 0;
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  color: #ffffff;
`

export const Tagline = styled.p`
  margin: 0;
  color: #d1d5db;
  font-style: italic;
`

export const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

export const MetaBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  color: #f3f4f6;
  font-size: 0.85rem;
`

export const Overview = styled.p`
  margin: 0;
  color: #e5e7eb;
  line-height: 1.6;
`

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`

export const WatchlistButton = styled.button`
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  cursor: not-allowed;
  opacity: 0.7;
`