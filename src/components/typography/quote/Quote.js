import React from "react";
import './quote.scss'

export function Quote({quote, author}) {
  return (
    <cite className="Quote">
      <span>&laquo;{quote}&raquo;</span>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&mdash;{author}</span>
    </cite>
  );
}
