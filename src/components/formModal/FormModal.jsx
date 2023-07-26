import React, { useState, useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { GiPirateFlag } from 'react-icons/gi';
import GameModal from 'components/gameModal/GameModal';
import Terms from 'components/footerModals/Terms';
import Privacy from 'components/footerModals/Privacy';
import Button from 'components/button/Button';
import Modal from 'components/modal/Modal';
import ButtonClose from 'components/buttonClose/ButtonClose';
import styles from './FormModal.module.scss';

function FormModal() {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Incorrect format')
      .matches(
        /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/,
        'Incorrect format'
      )
      .required('This field is required'),
    checkbox: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required'),
  });

  const modalRef = useRef();
  const [activeModal, setActiveModal] = useState(null);

  const openModal = modalName => {
    setActiveModal(modalName);
    modalRef.current.open();
  };

  const closeModal = () => {
    setActiveModal(null);
    modalRef.current.close();
  };

  const handleSubmit = values => {
    if (values) {
      openModal('gamemodal');
    }
  };

  return (
    <>
      <div className={styles.featured}>
        <GiPirateFlag fontSize="3.4em" />
      </div>

      <Formik
        initialValues={{
          email: '',
          checkbox: false,
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, touched, dirty, isValid }) => (
          <Form className={styles.form}>
            <label className={styles.label}>
              <Field
                required
                type="email"
                name="email"
                className={styles.input}
                placeholder="Enter your email"
              />
              {errors.email && touched.email && (
                <div className={styles.errorMsg}>{errors.email}</div>
              )}
            </label>
            <label className={styles.checkboxLabel}>
              <Field
                className={styles.checkboxInput}
                required
                name="checkbox"
                type="checkbox"
              />
              <span className={styles.checkboxText}>
                I'm 18 years old and I accept the &nbsp;
                <button
                  type="button"
                  className={styles.link}
                  onClick={() => openModal('terms')}
                >
                  Terms&Conditions &nbsp;
                </button>
                and &nbsp;
                <button
                  type="button"
                  className={styles.link}
                  onClick={() => openModal('privacy')}
                >
                  Privacy Policy
                </button>
              </span>
              {errors.checkbox && touched.checkbox && (
                <div className={styles.errorMsg}>{errors.checkbox}</div>
              )}
            </label>
            <Button
              type={'submit'}
              title={'Submit'}
              variant={!(dirty && isValid) ? 'disabledBtn' : 'button'}
              disabled={!(dirty && isValid)}
            />
          </Form>
        )}
      </Formik>
      <Modal ref={modalRef} activeModal={activeModal}>
        <ButtonClose onClick={closeModal} />
        {activeModal === 'gamemodal' && <GameModal />}
        {activeModal === 'terms' && <Terms />}
        {activeModal === 'privacy' && <Privacy />}
      </Modal>
    </>
  );
}

export default FormModal;
