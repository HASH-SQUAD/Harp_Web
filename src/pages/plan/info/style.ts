import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Info_Layout = styled.div<{ StatusBarSize?: string }>`
  /* padding-top: ${(props) => props.StatusBarSize || '54px'} 54px; */
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

export const Info_Header = styled.div<{ BackgroundImage: string }>`
  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%),
    url(${(props) => props.BackgroundImage}) lightgray 50% / cover no-repeat;
  width: 100%;
  height: 200px;
  padding: 20px;
  border-radius: 0 0 10px 10px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
`;

export const Info_Title = styled.p`
  color: ${theme.gray.white};
  font-size: 20px;
  font-weight: 600;
`;

export const Info_Camera = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
`;

export const Info_DDay = styled.div`
  color: ${theme.gray.white};
  font-size: 44px;
  font-weight: 600;
  align-self: self-end;
`;

export const Info_Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 20px 0 20px;
  width: 100%;
`;

export const Info_Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Info_Duration = styled.p`
  color: ${theme.gray.black};
  font-size: 18px;
  font-weight: 500;
`;

export const Info_Schedule = styled.div`
  position: relative;
  padding-top: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Info_Times = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 10px;
`;

export const Info_WhatDay = styled.div`
  color: ${theme.gray.black};
  font-size: 18px;
  font-weight: 500;
`;

export const Info_Date = styled.div`
  color: ${theme.gray[3]};
  font-size: 13px;
  font-weight: 400;
`;

export const Info_Line = styled.div`
  position: absolute;
  left: 88px;
  width: 2px;
  z-index: -1;
  height: calc(75px + 118px * 3);
  border-radius: 5px;
  background: ${theme.gray[1]};
`;

export const Info_DetailList = styled.div`
  padding: 20px 0 20px 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 28px;
`;

export const Info_GoToMap = styled.p`
  position: absolute;
  color: ${theme.gray[3]};
  font-size: 14px;
  font-weight: 400;
  top: 13px;
  right: 7px;
`;
