import React from 'react';
import './Animations.css';

const Meadow = () => {
  return (
    <div className="meadow">
      <div className="meadow-sky">
        <div className="sun sun-glow" />
        {/* Clouds */}
        <div className="cloud" style={{ bottom: '80px', left: '-200px', width: '100px', height: '50px' }}></div>
        <div className="cloud" style={{ bottom: '120px', left: '-300px', width: '150px', height: '70px' }}></div>
        <div className="cloud" style={{ bottom: '60px', left: '-100px', width: '120px', height: '60px' }}></div>
      </div>
      <div className="meadow-ground">
        {/* Distant hills */}
        <div style={{ position: 'absolute', bottom: '60px', left: '0', width: '100%', height: '80px', background: 'linear-gradient(to top, #8fbc8f 0%, #8fbc8f 50%, transparent 50%)', clipPath: 'polygon(0 0, 15% 50%, 30% 0, 45% 60%, 60% 30%, 75% 70%, 90% 40%, 100% 60%, 100% 100%, 0 100%)' }}></div>
        {/* Trees */}
        <div className="tree" style={{ position: 'absolute', bottom: '60px', left: '100px', width: '60px', height: '100px', background: 'saddlebrown', clipPath: 'polygon(50% 0%, 30% 100%, 70% 100%)' }}></div>
        <div className="tree" style={{ position: 'absolute', bottom: '60px', left: '500px', width: '50px', height: '90px', background: 'saddlebrown', clipPath: 'polygon(50% 0%, 30% 100%, 70% 100%)' }}></div>
        <div className="tree" style={{ position: 'absolute', bottom: '60px', left: '700px', width: '70px', height: '110px', background: 'saddlebrown', clipPath: 'polygon(50% 0%, 30% 100%, 70% 100%)' }}></div>
        {/* Bushes */}
        <div className="bush" style={{ position: 'absolute', bottom: '60px', left: '200px', width: '80px', height: '40px', background: '#228b22', borderRadius: '50%' }}></div>
        <div className="bush" style={{ position: 'absolute', bottom: '60px', left: '400px', width: '100px', height: '50px', background: '#228b22', borderRadius: '50%' }}></div>
        <div className="bush" style={{ position: 'absolute', bottom: '60px', left: '600px', width: '90px', height: '45px', background: '#228b22', borderRadius: '50%' }}></div>
        {/* Grass blades */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="grass"
            style={{
              left: `${i * 20}px`,
              height: `${15 + Math.random() * 25}px`,
              background: `#${((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')}`
            }}
          />
        ))}
        {/* Flowers */}
        <div className="flower" style={{ left: '100px', bottom: '40px', width: '40px', height: '40px', backgroundImage: 'url(/src/assets/objects/flower.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
        <div className="flower" style={{ left: '300px', bottom: '20px', width: '40px', height: '40px', backgroundImage: 'url(/src/assets/objects/flower.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
        <div className="flower" style={{ left: '500px', bottom: '50px', width: '40px', height: '40px', backgroundImage: 'url(/src/assets/objects/flower.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
        <div className="flower" style={{ left: '700px', bottom: '30px', width: '40px', height: '40px', backgroundImage: 'url(/src/assets/objects/flower.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
      </div>
    </div>
  );
};

export default Meadow;
