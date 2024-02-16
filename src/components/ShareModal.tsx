import Modal from 'react-modal';
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FaFacebook, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { IoCloseOutline } from 'react-icons/io5';


Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 1000
  }
};

interface Share {
  visible: boolean,
  onClose: any,
  slide: number
}

export function ShareModal({ visible, onClose, slide }: Share) {
  const url = `https://paponga.com/?slide=${slide}`
  return (
    <Modal isOpen={visible} onRequestClose={onClose} style={customStyles}  className="md:container md:mx-auto md:max-w-md modal-content-bottom" contentLabel="Compartir">
      <button className='absolute right-3 top-3' onClick={onClose}><IoCloseOutline size={32} /></button>
      <div className='flex justify-around'>
        <FacebookShareButton url={url}>
          <FaFacebook size={32}/>
        </FacebookShareButton>
        <TwitterShareButton title="juego" url={url}>
          <FaTwitter size={32} />
        </TwitterShareButton>
        <TelegramShareButton url={url}>
          <FaTelegram size={32} />
        </TelegramShareButton>
        <WhatsappShareButton url={url}>
          <FaWhatsapp size={32} />
        </WhatsappShareButton>
      </div>
    </Modal>
  )
}