import React from 'react';
import styled from "styled-components";


export default function PageTitle({styles, title, subtitle, paragraph }) {
  return (
    <div>
      {title ? title : null}
      {subtitle ? subtitle : null}
      {paragraph ? paragraph : null}
    </div>
  );
}
