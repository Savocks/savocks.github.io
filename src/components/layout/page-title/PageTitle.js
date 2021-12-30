import React from "react";
import './page-title.scss';

export function PageTitle({children}) {
  return (
    <div className="PageTitle">
      {children}
    </div>
  );
}
