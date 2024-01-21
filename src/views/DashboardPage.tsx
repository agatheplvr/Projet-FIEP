import React, { useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import './../newstyle.css';
//@ts-ignore
import logoImage from './../assets/logo-mentor.jpg';
import Pass from './../assets/pass.png';
import Like from './../assets/like.png';
//@ts-ignore
import Pdp1 from './../assets/profil.jpg';
import Pdp2 from './../assets/1.png';
import Pdp3 from './../assets/3.png';
import { setupDragAndDrop } from './../utils/main.js'

const MentorApp = () => {
  const profiles = [
    {
      name: 'Agathe',
      age: 20,
      description: 'I want to know what is M&A concretely',
      image: Pdp3,
    },
    {
      name: 'Yuming',
      age: 20,
      description: 'I want advice for a successful internship interview',
      image: Pdp2,
    },
    {
      name: 'Capucine',
      age: 20,
      description:
        'I am a student at the Goethe Uni.\nI am looking for a mentor to answer my questions about the job of a financial analyst.\nIndeed, I am interested in data analytics and I want to discover how it is applied to finance.',
      image: Pdp1,
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