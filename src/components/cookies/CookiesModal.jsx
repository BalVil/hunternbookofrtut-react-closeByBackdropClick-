import React, { useState, useRef } from 'react';
import { SetCookies } from 'hooks/Cookies';
import Button from 'components/button/Button';
import ButtonClose from 'components/buttonClose/ButtonClose';
import Modal from 'components/modal/Modal';
import Privacy from 'components/footerModals/Privacy';
import styles from './CookiesModal.module.scss';

const CookiesModal = ({ showCookies }) => {
  const modalRef = useRef();
  function checkCookie() {
    showCookies(false);
    SetCookies('hunternbookofrtut', JSON.stringify(true));
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.cookieBar}>
        <div className={styles.content}>
          <p className={styles.text}>
            By continuing to browse our site, you consent to our use of cookies.
          </p>
          <button className={styles.link} onClick={handleButtonClick}>
            Privacy Policy
          </button>
        </div>

        <Button title={'Accept'} onClick={() => checkCookie(false)} />
      </div>
      {isModalOpen && (
        <Modal ref={modalRef} activeModal="privacy">
          <ButtonClose onClick={handleCloseModal} />
          <Privacy />
        </Modal>
      )}
    </>
  );
};

export default CookiesModal;
