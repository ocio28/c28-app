import Modal from 'react-modal';
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FaFacebook } from "react-icons/fa6";


Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export function ShareModal({ visible, onClose }: { visible: boolean, onClose: any }) {
  return (
    <Modal
      isOpen={visible}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2>Hello</h2>
      <button onClick={onClose}>close</button>
      <div>I am a modal</div>
      <FacebookShareButton url="">
        <FaFacebook />
      </FacebookShareButton>
      <TelegramShareButton url="">tel</TelegramShareButton>
      <TwitterShareButton title="juego" url="">twitter</TwitterShareButton>
      <WhatsappShareButton url="">wat</WhatsappShareButton>
    </Modal>
  )
}