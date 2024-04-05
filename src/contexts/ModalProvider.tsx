import { Modal } from '~/libs'
import { PropsWithChildren } from 'react'
import { CommonModal } from '~/components'

export enum COMMON_DIALOGS {
  CONFIRM = 'CONFIRM',
  INFO = 'INFO',
  BOOKING = 'BOOKING'
}

Modal.register(COMMON_DIALOGS.CONFIRM, CommonModal)

export const ModalProvider = ({ children }: PropsWithChildren) => {
  return <Modal.Provider>{children}</Modal.Provider>
}
