import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'

import {
  CloseButton,
  ModalCard,
  ModalTitle,
  Overlay,
  VideoFrame,
} from './StyledComponents'

interface Props {
  isOpen: boolean
  videoKey: string | null
  title: string
  onClose: () => void
}

export const TrailerModal = ({ isOpen, videoKey, title, onClose }: Props) => {
  const { t } = useTranslation('movies')

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen || !videoKey) {
    return null
  }

  const dialogLabel = t('trailer.dialogLabel', { title })

  return createPortal(
    <Overlay role="dialog" aria-modal="true" aria-label={dialogLabel} onClick={onClose}>
      <ModalCard onClick={(event) => event.stopPropagation()}>
        <CloseButton type="button" aria-label={t('trailer.closeAria')} onClick={onClose}>
          ×
        </CloseButton>
        <VideoFrame
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
          title={dialogLabel}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <ModalTitle>{title}</ModalTitle>
      </ModalCard>
    </Overlay>,
    document.body,
  )
}