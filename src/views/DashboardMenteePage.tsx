import React, { useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import './../newstyle.css';
//@ts-ignore
import logoImage from './../assets/logo-mentor.jpg';
import Pass from './../assets/pass.png';
import Like from './../assets/like.png';

import Pdp1 from './../assets/silouhette.png';
import Pdp2 from './../assets/silouhette.png';
import Pdp3 from './../assets/silouhette.png';
import { setupDragAndDrop } from '../utils/main.js'

const MentorApp = () => {
  const profiles = [
    {
      name: 'Carl',
      age: 'M&A Consultant',
      description: 'I have been working in the M&A industry for 15 years but also have strong knowledge about Private Equity.',
      image: Pdp1,
    },
    {
      name: 'Sabrina',
      age: 'Junior M&A Consultant',
      description: 'I graduated 2 years ago and would be more than happy to help you in your journey in finance.',
      image: Pdp2,
    },
    {
      name: 'Paul',
      age: 'M&A VP',
      description: 'After working in this field for 40 years, I am very interested in sharing my experience with younger generations and so get to know you! (Bonus if you like BasketBall)',
      image: Pdp3,
    },
  ];

  useEffect(() => {
    let profiles = document.querySelectorAll('.profile');
    profiles.forEach(setupDragAndDrop);
}, []);

  // const handleSwipeLeft = (index) => {
  //   console.log('Swiped left on profile', index);
  //   // Add any additional functionality you want on swipe left
  // };

  // const handleSwipeRight = (index) => {
  //   console.log('Swiped right on profile', index);
  //   // Add any additional functionality you want on swipe right
  // };



  return (
    <main>
      <img src={logoImage} alt="Logo" />
      <div className="profiles">
        {profiles.map((profile, index) => {
          // const swipeHandlers = useSwipeable({
          //   onSwipedLeft: () => handleSwipeLeft(index),
          //   onSwipedRight: () => handleSwipeRight(index),
          //   // preventDefaultTouchmoveEvent: true,
          //   trackMouse: true
          // });

          return (
            // <div key={index} {...swipeHandlers} className="profile">
            <div key={index} className="profile">
              <div
                className="profile__image"
                style={{ backgroundImage: `url('${profile.image}')` }}
              ></div>
              <div className="profile__infos">
                <div className="profile__name">
                  {profile.name} <span className="profile__age">{profile.age}</span>
                </div>
                <div className="profile__description">{profile.description}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bottombar">
        <div className="bottombar__button">
          <img src={Pass} alt="Pass" />
        </div>
        <div className="bottombar__button">
          <img src={Like} alt="Like" />
        </div>
      </div>
    </main>
  );
};

export default MentorApp;