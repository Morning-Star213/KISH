'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { type ReactElement, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  trigger?: ReactElement
  open?: boolean
  onClose?: () => void
  className?: string
  overlayClassName?: string
}

export const Modal = ({ open, onClose, className, overlayClassName, children }: Props) => {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      {/* {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>} */}
      <Dialog.Portal>
        <Dialog.Overlay
          className={`fixed inset-0 z-10 max-h-screen overflow-y-auto bg-overlay bg-opacity-50 ${overlayClassName}`}
        />
        <Dialog.Content
          className={`fixed top-1/2 left-1/2 z-10 bg-white px-8 py-4 rounded-sm ${className}`}
        >
          {/* <Dialog.Close asChild>
            <div className='flex justify-end'>
              <Image
                alt='close'
                className='cursor-pointer'
                height={20}
                src={CloseIcon}
                width={20}
              />
            </div>
          </Dialog.Close> */}
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
