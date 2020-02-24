import React from 'react';

const AboutScreen = () => {
  return (
    <main>
      <section className='section-about'>
        <div className='u-center-text u-margin-bottom-big'>
          <h2 className='heading-secondary'>
            Exciting tours for adventurous people
          </h2>
        </div>
        <div className='row'>
          <div className='col-1-of-2'>
            <h3 className='heading-tertiary u-margin-bottom-small'>
              You're going to fall in love with nature
            </h3>
            <p className='paragraph'>
              Nature, in the broadest sense, is the natural, physical, or
              material world or universe. "Nature" can refer to the phenomena of
              the physical world, and also to life in general. The study of
              nature is a large, if not the only, part of science
            </p>
            <h3 className='heading-tertiary u-margin-bottom-small'>
              Live adventures like you never have before
            </h3>
            <p className='paragraph'>
              Earth is the only planet known to support life, and its natural
              features are the subject of many fields of scientific research.
            </p>
            <a href='$#' className='btn-text'>
              Learn more &rarr;
            </a>
          </div>
          <div className='col-1-of-2'>
            <div className='composition'>
              <img
                srcSet={`${require('../assets/nat-1.jpg')} 300w, 
                ${require('../assets/nat-1-large.jpg')} 1000w`}
                sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
                alt='pic1'
                className='composition__photo composition__photo--p1'
                src={require('../assets/nat-1-large.jpg')}
              />
              <img
                srcSet={`${require('../assets/nat-2.jpg')} 300w, 
             ${require('../assets/nat-2-large.jpg')} 1000w`}
                sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
                alt='pic2'
                className='composition__photo composition__photo--p2'
                src={require('../assets/nat-2-large.jpg')}
              />
              <img
                srcSet={`${require('../assets/nat-3.jpg')} 300w, 
             ${require('../assets/nat-3-large.jpg')} 1000w`}
                sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
                alt='pic3'
                className='composition__photo composition__photo--p3'
                src={require('../assets/nat-3-large.jpg')}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutScreen;
