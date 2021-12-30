import React from "react";
import './contact.scss';
export function Contact() {
  return (
    <div className="Contact" style={{margin: '1em 0', fontSize: '20px'}}>
      <address className="ContactAddress">
        <a className="ContactItem"
           href="mailto:giulio.savoca97@gmail.com">
          giulio.savoca97@gmail.com
        </a>
        <a
          className="ContactItem"
          href="tel:+393888916646">
          +39 388 891 6646
        </a>
      </address>
    </div>
  );
}
