import { forwardRef, useState, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Modal.module.scss';

const Modal = forwardRef((props, ref) => {
  const {
    children,
    activeModal,
    disableBackdropClick,
    setIsModalOpen = 'undefined',
  } = props;
  const [open, setOpen] = useState(activeModal);

  const handleBackdropClick = () => {
    if (!disableBackdropClick) {
      setOpen(false);
      if (activeModal === 'formmodal') {
        setIsModalOpen(false);
      }
    }
  };

  useImperativeHandle(ref, () => {
    return {
      open: () => setOpen(true),
      close: () => setOpen(false),
    };
  });

  const getModalClassName = () => {
    switch (activeModal) {
      case 'gamemodal':
        return styles.gameModal;
      case 'formmodal':
        return styles.formModal;
      case 'agemodal':
        return styles.ageModal;
      case 'terms':
        return styles.textModal;
      case 'privacy':
        return styles.textModal;
      default:
        return styles.modal;
    }
  };

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { delay: 0.2 } }}
            className={styles.backDrop}
            onClick={handleBackdropClick}
          >
            <motion.div
              initial={{ scale: 0, transform: { translate: (-50, -50) } }}
              animate={{ scale: 1, transition: { duration: 0.3 } }}
              exit={{ scale: 0, transition: { delay: 0.2 } }}
              className={`${styles.modal} ${getModalClassName(activeModal)}`}
              onClick={e => e.stopPropagation()}
            >
              {children}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.querySelector('#modal-root')
  );
});

export default Modal;
