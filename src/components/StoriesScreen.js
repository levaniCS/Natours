import React from 'react';

const StoriesScreen = () => {
  return (
    <section className='section-stories'>
      <div className='bg-video'>
        <video className='bg-video__content' autoPlay muted loop>
          <source src={require('../assets/video.mp4')} type='video/mp4' />
          <source src={require('../assets/video.webm')} type='video/mp4' />
          Your browser is not supported!
        </video>
      </div>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>We make people genuinely happy</h2>
      </div>
      <div className='row'>
        <div className='story'>
          <figure className='story__shape'>
            <img
              src={require('../assets/nat-8.jpg')}
              alt='Person on a tour'
              className='story__img'
            />
            <figcaption className='story__caption'>Mary Smith</figcaption>
          </figure>
          <div className='story__text'>
            <h3 className='heading-tertiary u-margin-bottom-small'>
              I had the best week ever with my family
            </h3>
            <p>
              Nature, in the broadest sense, is the natural, physical, or
              material world or universe. "Nature" can refer to the phenomena of
              the physical world, and also to life in general "Nature" can refer
              to the phenomena of the physical world, and also to life.
            </p>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='story'>
          <figure className='story__shape'>
            <img
              src={require('../assets/nat-9.jpg')}
              alt='Person on a tour'
              className='story__img'
            />
            <figcaption className='story__caption'>Jack Wilson</figcaption>
          </figure>
          <div className='story__text'>
            <h3 className='heading-tertiary u-margin-bottom-small'>
              WOW! My life is completely different now
            </h3>
            <p>
              Nature, in the broadest sense, is the natural, physical, or
              material world or universe. "Nature" can refer to the phenomena of
              the physical world, and also to life in general "Nature" can refer
              to the phenomena of the physical world, and also to life.
            </p>
          </div>
        </div>
      </div>
      <div className='u-center-text u-margin-top-huge'>
        <a href=' ' className='btn-text'>
          Read all stories &rarr;
        </a>
      </div>
    </section>
  );
};

export default StoriesScreen;
