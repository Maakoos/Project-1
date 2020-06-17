import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CountUp from "react-countup";

const Item = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  text-align: center;
`;

const Icon = styled.span`
  color: ${({ theme }) => theme.primaryColor};
  font-size: ${({ small }) => (small ? "30px" : "40px")};
`;

const Amount = styled.span`
  margin: 20px 0 10px;
  font-size: ${({ small }) => (small ? "24px" : "36px")};
  font-weight: 700;
`;

const Txt = styled.span`
  font-size: 16px;
  font-size: ${({ small }) => (small ? "13px" : "16px")};
  text-transform: uppercase;
`;

const AchievementItem = ({ names, numbers, icon, small }) => {
  const [visible, setVisible] = useState(false);

  const numberRef = useRef(null);

  useEffect(() => {
    // console.log(numberRef);
    const opitons = {
      root: null,
      threshold: 1,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    }, opitons);

    observer.observe(numberRef.current);
  });

  return (
    <Item>
      <Icon className={icon} small={small}></Icon>
      <Amount small={small} ref={numberRef}>
        {/*  {numbers} */}
        <CountUp end={visible && numbers} />
      </Amount>
      <Txt small={small}>{names}</Txt>
    </Item>
  );
};

export default AchievementItem;
