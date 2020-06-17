import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const iconAnim = keyframes`
  from {
    transform: rotate(-360deg);
    opacity: 0;
  }
  to {
    transform: rotate(0);
    opacity: 1;
  }
`;

const Icon = styled.span`
  width: 46px;
  height: 46px;
  line-height: 46px;
  text-align: center;
  background-color: ${({ theme }) => theme.primaryColor};
  color: #fff;
  font-size: 20px;
  border-radius: 10px;

  &.iconAnim {
    animation: ${iconAnim} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
`;

const ContactIcon = ({ iconClass }) => {
  const iconRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 1,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("iconAnim");
        }
      });
    }, options);

    observer.observe(iconRef.current);
  });

  return <Icon className={iconClass} ref={iconRef} />;
};

export default ContactIcon;
