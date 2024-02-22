'use client'
import React, { useState, useEffect } from 'react';

export default function TypingText({ children, className }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = isTyping ? 0 : children.length;
    const intervalId = setInterval(() => {
      if (isTyping) {
        setTimeout(() => {
          if (index < children.length) {
            setDisplayedText(children.substring(0, index + 1));
            index++;
          } else {
            setIsTyping(false); // Switch to reverse phase
          }
        }, 500)
      } else {
        // Reverse phase
        setTimeout(() => {
          if (index >= 0) {
            setDisplayedText(children.substring(0, index));
            index--;
          } else {
            setIsTyping(true);
          }
        }, 1000)
      }
    }, isTyping ? 100 : 50);

    return () => clearInterval(intervalId);
  }, [children, 100, 50, isTyping]);

  return <p className={className}>{displayedText}</p>;
}
