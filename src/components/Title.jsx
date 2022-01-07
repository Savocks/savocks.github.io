import React from 'react';


export default function PageTitle({styles, title, subtitle, paragraph }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <blockquote>{paragraph}</blockquote>
    </div>
  );
}
