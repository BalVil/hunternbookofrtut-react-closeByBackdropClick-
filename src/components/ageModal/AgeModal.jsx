import Button from 'components/button/Button';
import styles from './AgeModal.module.scss';

function AgeModal({ onClose }) {
  const handleButtonClick = () => {
    onClose();
  };

  return (
    <>
      <div className={styles.text}>
        <p>
          Indulge in this delightful social game designed for individuals who
          have reached the age of 18 or above. It's purely meant for
          entertainment purposes and does not involve any real-money gambling or
          betting.
          <br />
          Are you interested in giving it a try?
        </p>
      </div>
      <div className={styles.buttons}>
        <Button
          variant="btnYes"
          title={'YES'}
          onClick={handleButtonClick}
        ></Button>
        <Button variant="btnNo" title={'NO'}></Button>
      </div>
    </>
  );
}

export default AgeModal;
