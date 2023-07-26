import React, { useRef, useState } from 'react';

import Container from 'components/container/Container';
import FormModal from 'components/formModal/FormModal';
import ButtonClose from 'components/buttonClose/ButtonClose';
import Modal from 'components/modal/Modal';

import styles from './Hero.module.scss';
import homeImage from 'images/game.jpg';
import Button from 'components/button/Button';
import Section from 'components/section/Section';

function Hero() {
  const modalRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Section>
      <Container>
        <h1 className={styles.heroTitle}>
          Indulge in a complimentary social game opportunity
        </h1>

        <div className={styles.homeImgWrap}>
          <img
            src={homeImage}
            alt="Captain Glum: Pirate Hunter"
            className={styles.gameImg}
            width={640}
            height={480}
          />
        </div>
        <div className={styles.btnContainer}>
          <Button
            variant="btnHero"
            title={'Play'}
            onClick={handleButtonClick}
          />
          {isModalOpen && (
            <Modal
              ref={modalRef}
              activeModal="formmodal"
              onCloseModal={handleCloseModal}
              setIsModalOpen={setIsModalOpen}
            >
              <ButtonClose onClick={handleCloseModal} />
              <FormModal />
            </Modal>
          )}
        </div>
      </Container>
    </Section>
  );
}

export default Hero;
