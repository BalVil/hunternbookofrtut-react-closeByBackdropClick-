import { useEffect, useState, useRef } from 'react';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HelmetHead from 'components/helmetHead/HelmetHead';
import AgeModal from 'components/ageModal/AgeModal';
import CookiesModal from 'components/cookies/CookiesModal';
import Modal from 'components/modal';
import { GetCookies } from 'hooks/Cookies';
import Home from 'pages/Home';

const App = () => {
  const [isOpenCookies, setIsOpenCookies] = useState(
    !GetCookies('hunternbookofrtut')
  );
  const modalRef = useRef();

  useEffect(() => {
    modalRef.current.open();
  }, []);

  const handleAgeModalClose = () => {
    modalRef.current.close();
  };

  return (
    <>
      <HelmetHead />
      <Modal ref={modalRef} activeModal="agemodal" disableBackdropClick={true}>
        <AgeModal onClose={handleAgeModalClose} />
      </Modal>
      <Home />
      {isOpenCookies && <CookiesModal showCookies={setIsOpenCookies} />}
      <ToastContainer autoClose={3000} transition={Slide} theme="dark" />
    </>
  );
};

export default App;
