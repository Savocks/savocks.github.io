import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

export const FullPageContainer = ({ children }) => (
  <ReactFullpage
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          {children}
        </ReactFullpage.Wrapper>
      );
    }}
  />
)
