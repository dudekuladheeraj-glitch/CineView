import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.75);
`

export const ModalCard = styled.div`
  position: relative;
  width: min(960px, 100%);
  background: ${({ theme }) => theme.colors.mediaBackdrop};
  border-radius: 16px;
  overflow: hidden;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 1;
  border: none;
  border-radius: 999px;
  width: 36px;
  height: 36px;
  background: rgba(0, 0, 0, 0.6);
  color: ${({ theme }) => theme.colors.onMedia};
  font-size: 1.25rem;
  cursor: pointer;
`

export const VideoFrame = styled.iframe`
  width: 100%;
  aspect-ratio: 16 / 9;
  border: none;
  display: block;
`

export const ModalTitle = styled.h2`
  margin: 0;
  padding: 16px 20px;
  color: ${({ theme }) => theme.colors.onMedia};
  font-size: 1rem;
`