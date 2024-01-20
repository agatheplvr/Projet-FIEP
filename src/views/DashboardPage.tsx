import React, { useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import './../newstyle.css'; // Import your CSS file
//@ts-ignore
import logoImage from './../assets/logo-mentor.jpg';
import Pass from './../assets/pass.png';
import Like from './../assets/like.png';
import Pdp from './../assets/1.png';
import HammerJS from 'hammerjs'; // Renamed to avoid conflicts

const MentorApp = () => {
  const profiles = [
    {
      name: 'Agathe',
      age: 20,
      description: 'I want to know what is M&A concretely',
      image: Pdp,
    },
    {
      name: 'Yuming',
      age: 20,
      description: 'I want advice for a successful internship interview',
      image: Pdp,
    },
    {
      name: 'Capucine',
      age: 20,
      description:
        'I am a student at the Goethe Uni.\nI am looking for a mentor to answer my questions about the job of a financial analyst.\nIndeed, I am interested in data analytics and I want to discover how it is applied to finance.',
      image: Pdp,
    },
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () => console.log('Swiped left'),
    onSwipedRight: () => console.log('Swiped right'),
    // Add other swipe handlers as needed
  });

  useEffect(() => {
    const maxAngle = 42;
    const smooth = 0.3;
    const thresholdMatch = 150;

    const setupDragAndDrop = (profile) => {
      const hammertime = new HammerJS(profile);

      hammertime.on('pan', function (e) {
        // ... (your existing pan event handling logic)
      });
    };

    const init = () => {
      const profileElements = document.querySelectorAll('.profile');
      profileElements.forEach(setupDragAndDrop);
    };

    // Ensure setup after component mount
    if (document.readyState === 'complete') {
      init();
    } else {
      window.addEventListener('load', init);
    }

    // Cleanup on unmount
    return () => {
      const profileElements = document.querySelectorAll('.profile');
      profileElements.forEach((profile) => {
        // Remove any event listeners or cleanup if needed
      });
    };
  }, []); // Ensure this effect runs once after the initial render

  return (
    <main {...handlers}>
      <img src={logoImage} alt="Logo" />
      <div className="profiles">
        {profiles.map((profile, index) => (
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
        ))}
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