import { IoCloseCircleOutline } from 'react-icons/io5';
import styles from './ButtonClose.module.scss';

function ButtonClose({ variant = 'closeBtn', type = 'button', onClick }) {
  return (
    <button
      type={type}
      aria-label="close"
      className={styles[variant]}
      onClick={onClick}
    >
      <IoCloseCircleOutline size={32} />
    </button>
  );
}

export default ButtonClose;
