import React from 'react';
import './section.scss';
export const Section = ({ bgColor, direction, children }) => {
  return (
    <>
      <section className={`Section ${bgColor} ${direction}`}>
        <div className="Section-Content">
          { children }
        </div>
      </section>
    </>

  );
};
