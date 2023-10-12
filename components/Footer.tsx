import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
     <footer className="bg-lavender gap-1 flex justify-center items-center flex-col py-3">
      <p className="text-rose text-2xl">
          Mom Meet Up 
      </p>
      <div className='flex my-5 gap-3'>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-rose text-2xl hover:text-peach" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-rose text-2xl hover:text-peach" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-rose text-2xl hover:text-peach" />
            </a>
      </div>
      <p>&copy; Aleksandra {currentYear}</p>
     </footer>
  )
}
export default Footer