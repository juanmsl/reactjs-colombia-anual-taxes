import { Modal } from '@juanmsl/ui';

import { AsideModalStyle } from './aside-modal.style';

type AsideModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export const AsideModal = ({ children, isOpen, onClose }: AsideModalProps) => {
  return (
    <Modal id='aside' isOpen={isOpen} opacity={0.6} onClick={onClose}>
      <AsideModalStyle>{children}</AsideModalStyle>
    </Modal>
  );
};
