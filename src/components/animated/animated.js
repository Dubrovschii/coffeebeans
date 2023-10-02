import React from 'react';
import { useSpring, animated } from 'react-spring';

const Animate = () => {
  const { o, xyz, color } = useSpring({
    from: {
      o: 0,
      xyz: [-190, 0, 0],
      color: 'red',
    },
    to: {
        o: 1,
        xyz: [20, 0, 15],
        color: 'green',
    },
    config: 0.8,
});

  return (
    
     <animated.div style={{
        opacity: o, // Используйте значение o для анимации прозрачности
        transform: xyz.to((x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`), // Используйте значение xyz для анимации трансформации
        color, // Используйте значение color для анимации цвета
      }}>
    </animated.div>

  );
};

export default Animate;
