import styled from 'styled-components'

export const HeaderRoot = styled.section`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 32px;
  background: ${({ theme }) => theme.colors.mediaBackdrop};
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
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primaryHover},
    ${({ theme }) => theme.colors.mediaBackdrop}
  );
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.65) 50%,
    rgba(0, 0, 0, 0.25) 100%
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
  color: ${({ theme }) => theme.colors.onMedia};
`

export const Tagline = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.onMediaSubtle};
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
  color: ${({ theme }) => theme.colors.onMediaMuted};
  font-size: 0.85rem;
`

export const Overview = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.onMediaMuted};
  line-height: 1.6;
`

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`

export const WatchlistButton = styled.button<{ $active?: boolean }>`
  border: 1px solid ${({ $active }) => $active ? 'rgba(255,255,255,0.8)' : 'rgba(255, 255, 255, 0.3)'};
  border-radius: 8px;
  padding: 10px 14px;
  background: ${({ $active }) => $active ? 'rgba(255,255,255,0.25)' : 'rgba(255, 255, 255, 0.1)'};
  color: ${({ theme }) => theme.colors.onMedia};
  cursor: pointer;
  font-weight: ${({ $active }) => $active ? '600' : '400'};
  transition: background 0.15s, border-color 0.15s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.6);
  }
`