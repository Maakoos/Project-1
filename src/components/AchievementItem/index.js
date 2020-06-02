import React from "react";
import styled from "styled-components";

const Item = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  text-align: center;
`;

const Icon = styled.span`
  color: ${({ theme }) => theme.primaryColor};
  /* font-size: 40px; */
  font-size: ${({ small }) => (small ? "30px" : "40px")};
`;

const Amount = styled.span`
  margin: 20px 0 10px;
  /* font-size: 36px; */
  font-size: ${({ small }) => (small ? "24px" : "36px")};
  font-weight: 700;
`;

const Txt = styled.span`
  font-size: 16px;
  font-size: ${({ small }) => (small ? "13px" : "16px")};
  text-transform: uppercase;
`;

const AchievementItem = ({ names, numbers, icon, small }) => (
  <Item>
    <Icon className={icon} small={small}></Icon>
    <Amount small={small}>{numbers}</Amount>
    <Txt small={small}>{names}</Txt>
  </Item>
);

export default AchievementItem;
