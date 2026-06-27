import styled from 'styled-components'

export const BannerRoot = styled.section`
  position: relative;
  min-height: 420px;
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
    rgba(0, 0, 0, 0.6) 45%,
    rgba(0, 0, 0, 0.15) 100%
  );
`

export const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 16px;
  min-height: 420px;
  padding: 40px;
  max-width: 640px;
`

export const Title = styled.h1`
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
  color: ${({ theme }) => theme.colors.onMedia};
`

export const Overview = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.onMediaMuted};
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const RatingBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  color: ${({ theme }) => theme.colors.rating};
  font-weight: 600;
`

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`
export const WatchlistButton = styled.button<{ $active?: boolean }>`
  border: 1px solid ${({ $active }) => $active ? 'rgba(255,255,255,0.8)' : 'rgba(255, 255, 255, 0.4)'};
  border-radius: 8px;
  padding: 10px 20px;
  background: ${({ $active }) => $active ? 'rgba(255,255,255,0.25)' : 'rgba(255, 255, 255, 0.1)'};
  color: #ffffff;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: ${({ $active }) => $active ? '600' : '400'};
  backdrop-filter: blur(4px);
  transition: background 0.15s, border-color 0.15s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.7);
  }
`