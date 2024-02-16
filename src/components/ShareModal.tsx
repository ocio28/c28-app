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
  slide: number,
  game: string
}

export function ShareModal({ visible, onClose, slide, game }: Share) {
  const url = `https://paponga.com/?slide=${slide}`
  const title = `Juega ${game} en`

  return (
    <Modal isOpen={visible} onRequestClose={onClose} style={customStyles}  className="md:container md:mx-auto md:max-w-md modal-content-bottom" contentLabel="Compartir">
      <button className='absolute right-3 top-3' onClick={onClose}><IoCloseOutline size={32} /></button>
      <h3 className='text-center mt-4 font-bold'>Compartir</h3>
      <div className='flex justify-around mt-8'>
        <FacebookShareButton url={url} hashtag='#paponga'>
          <FaFacebook size={32}/>
        </FacebookShareButton>
        <TwitterShareButton title={title} url={url}>
          <FaTwitter size={32} />
        </TwitterShareButton>
        <TelegramShareButton url={url} title={title}>
          <FaTelegram size={32} />
        </TelegramShareButton>
        <WhatsappShareButton url={url} title={title}>
          <FaWhatsapp size={32} />
        </WhatsappShareButton>
      </div>
    </Modal>
  )
}