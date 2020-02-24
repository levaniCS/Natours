import React from 'react';

const Footer = () => {
  /*  images depend on a screen width can be using <picture> tag element */
  return (
    <section className='footer'>
      <div className='footer__logo-box'>
        <picture className='footer__logo'>
          <source
            srcSet={`${require('../assets/logo-green-small-1x.png')} 1x, 
             ${require('../assets/logo-green-small-2x.png')} 2x`}
            media='(max-width: 37.5rem)'
          />
          <img
            srcSet={`${require('../assets/logo-green-1x.png')} 1x, 
                      ${require('../assets/logo-green-2x.png')} 2x`}
            alt='Full logo'
            src={require('../assets/logo-green-2x.png')}
          />
        </picture>
      </div>
      <div className='row'>
        <div className='col-1-of-2'>
          <div className='footer__navigation'>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a href='#2' className='footer__link'>
                  Company
                </a>
              </li>
              <li className='footer__item'>
                <a href='#2' className='footer__link'>
                  Contact us
                </a>
              </li>
              <li className='footer__item'>
                <a href='#2' className='footer__link'>
                  Careers
                </a>
              </li>
              <li className='footer__item'>
                <a href='#2' className='footer__link'>
                  Privacy policy
                </a>
              </li>
              <li className='footer__item'>
                <a href='#2' className='footer__link'>
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-1-of-2'>
          <p className='footer__copyright'>
            Built by{'  '}
            <a href='#$' className='footer__link'>
              Levan Sarishvili
            </a>{' '}
            for just fun :) Copyright &copy; By Levan Sarishvili.Nature, in the
            broadest sense, is the natural, physical, or material world or
            universe. "Nature" can refer to the phenomena.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
