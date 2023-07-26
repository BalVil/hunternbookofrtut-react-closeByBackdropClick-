import React, { useState, useRef } from 'react';
import { TbRating18Plus } from 'react-icons/tb';
import Social from 'components/social';
import Container from 'components/container/Container';
import Terms from 'components/footerModals/Terms';
import Privacy from 'components/footerModals/Privacy';
import ContactForm from 'components/contactForm/ContactForm';
import Modal from 'components/modal/Modal';
import ButtonClose from 'components/buttonClose/ButtonClose';
import styles from './Footer.module.scss';

function Footer() {
  const [activeModal, setActiveModal] = useState(null);
  const modalRef = useRef();

  const openModal = modalName => {
    setActiveModal(modalName);
    modalRef.current.open();
  };

  const closeModal = () => {
    setActiveModal(null);
    modalRef.current.close();
  };

  return (
    <>
      <footer className={styles.footer}>
        <Container variant="footerContainer">
          <div className={styles.footerContainer}>
            <TbRating18Plus fontSize="2.4em" fill="red" stroke="white" />
            <div className={styles.disclaimer}>
              <p>
                Disclaimer: Our site is dedicated to offering complimentary
                social games exclusively for individuals aged 18 and above,
                without any inclusion of tangible prizes or monetary rewards.
                Please be aware that achievements in this free social casino
                game do not ensure success in "real money gambling".
              </p>
            </div>
            <div>
              <ul className={styles.footerLinks}>
                <li>
                  <button
                    className={styles.link}
                    type="button"
                    onClick={() => openModal('terms')}
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button
                    className={styles.link}
                    type="button"
                    onClick={() => openModal('privacy')}
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    className={styles.link}
                    type="button"
                    onClick={() => openModal('contact')}
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
            <div className={styles.bottom}>
              <Social />
              <p className={styles.copyright}>
                Hunternbookofrtut.com&copy; 2023 All rights reserved
              </p>
            </div>
          </div>
        </Container>
      </footer>
      <Modal ref={modalRef} activeModal={activeModal}>
        <ButtonClose onClick={closeModal} />
        {activeModal === 'terms' && <Terms />}
        {activeModal === 'privacy' && <Privacy />}
        {activeModal === 'contact' && <ContactForm />}
      </Modal>
    </>
  );
}

export default Footer;
