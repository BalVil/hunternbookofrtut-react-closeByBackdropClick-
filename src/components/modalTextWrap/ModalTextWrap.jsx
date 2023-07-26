import styles from './ModalTextWrap.module.scss';

function ModalTextWrap({ title, children }) {
  return (
    <div className={styles.modalContent}>
      <h2 className={styles.modalTitle}>{title}</h2>
      {children}
    </div>
  );
}

export default ModalTextWrap;
