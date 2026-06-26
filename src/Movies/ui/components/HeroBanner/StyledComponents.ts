import styled from 'styled-components'

export const BannerRoot = styled.section`
  position: relative;
  min-height: 420px;
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
    rgba(17, 24, 39, 0.75) 45%,
    rgba(17, 24, 39, 0.2) 100%
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
  color: #ffffff;
`

export const Overview = styled.p`
  margin: 0;
  color: #e5e7eb;
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
  color: #fbbf24;
  font-weight: 600;
`

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`
