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
      name: 'Carl',
      age: 'M&A Consultant',
      description: 'I have been working in the M&A industry for 15 years but also have strong knowledge about Private Equity.',
      image: Pdp,
    },
    {
      name: 'Sabrina',
      age: 'Junior M&A Consultant',
      description: 'I graduated 2 years ago and would be more than happy to help you in your journey in finance.',
      image: Pdp,
    },
    {
      name: 'Paul',
      age: 'M&A VP',
      description: 'After working in this field for 40 years, I am very interested in sharing my experience with younger generations and so get to know you! (Bonus if you like BasketBall)',
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