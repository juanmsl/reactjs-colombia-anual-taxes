import { Icon, Modal, Tooltip } from '@juanmsl/ui';

import { AsideModalStyle } from './aside-modal.style';

type AsideModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export const AsideModal = ({ children, isOpen, onClose }: AsideModalProps) => {
  return (
    <Modal id='aside' isOpen={isOpen} opacity={0.6} onClick={onClose} zIndex={999}>
      <AsideModalStyle>
        <Tooltip content='Cerrar' position='left'>
          <span className='close-modal-button'>
            <Icon name='cross' onClick={onClose} />
          </span>
        </Tooltip>
        {children}
      </AsideModalStyle>
    </Modal>
  );
};
