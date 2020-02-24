import React from 'react';
import { FaGlobe, FaCompass, FaMap, FaHeart } from 'react-icons/fa';

const FeaturesScreen = () => {
  return (
    <section className='section-features'>
      <div className='row'>
        <div className='col-1-of-4'>
          <div className='feature-box'>
            <FaGlobe className='feature-box__icon' />
            <h3 className='heading-tertiary u-margin-bottom-small'>
              Explore the world
            </h3>
            <p className='feature-box__text'>
              Nature, in the broadest sense, is the natural, physical, or
              material world or universe. "Nature" can refer to the phenomena.
            </p>
          </div>
        </div>
        <div className='col-1-of-4'>
          <div className='feature-box'>
            <FaCompass className='feature-box__icon' />
            <h3 className='heading-tertiary u-margin-bottom-small'>
              Meet nature
            </h3>
            <p className='feature-box__text'>
              Nature, in the broadest sense, is the natural, physical, or
              material world or universe. "Nature" can refer to the phenomena.
            </p>
          </div>
        </div>
        <div className='col-1-of-4'>
          <div className='feature-box'>
            <FaMap className='feature-box__icon' />
            <h3 className='heading-tertiary u-margin-bottom-small'>
              Find your way
            </h3>
            <p className='feature-box__text'>
              Nature, in the broadest sense, is the natural, physical, or
              material world or universe. "Nature" can refer to the phenomena.
            </p>
          </div>
        </div>
        <div className='col-1-of-4'>
          <div className='feature-box'>
            <FaHeart className='feature-box__icon' />
            <h3 className='heading-tertiary u-margin-bottom-small'>
              Live a healthier life
            </h3>
            <p className='feature-box__text'>
              Nature, in the broadest sense, is the natural, physical, or
              material world or universe. "Nature" can refer to the phenomena.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesScreen;
