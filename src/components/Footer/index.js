import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <section>
        <ul>
          <li>
            <a href='https://facebook.com' target='_blank'>
              <img src='/images/fb.png' alt='Facebook icon' />
            </a>
          </li>
          <li>
            <a href='https://twitter.com' target='_blank'>
              <img src='/images/tw.png' alt='Twitter icon' />
            </a>
          </li>
          <li>
            <a href='https://instagram.com' target='_blank'>
              <img src='/images/ig.png' alt='Instagram icon' />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src='/images/logo.png' />
      </section>
      <section>
        <p>Desenvolvido por Alura.</p>
      </section>
    </footer>
  );
};

export default Footer;
