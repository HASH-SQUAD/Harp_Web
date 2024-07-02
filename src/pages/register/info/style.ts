import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Info_Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
`;

export const Info_Layout = styled.div<{ StatusBarSize?: string }>`
  padding: 54px 30px 54px 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Info_Title_Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 18px;
`;

export const Info_Title_Big = styled.p`
  color: ${theme.gray[4]};
  font-size: 24px;
  font-weight: 700;
  white-space: pre-wrap;
`;

export const Info_Title_Small = styled.p`
  color: ${theme.gray[4]};
  font-size: 15px;
  font-weight: 400;
`;

export const Info_Inputs = styled.div`
  padding: 28px 10px 0 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Info_Input_Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Info_Input_Title = styled.p`
  color: ${theme.gray[4]};
  font-size: 14px;
  font-weight: 400;
`;

export const Info_Input_Title_Star = styled.span`
  color: ${theme.sub.red};
`;

export const Info_Input_Box = styled.input`
  width: 100%;
  height: 56px;
  padding-left: 16px;
  font-size: 14px;
  color: ${theme.gray[4]};
  border: 1.5px solid ${theme.gray[2]};
  border-radius: 5px;
  font-weight: 400;

  &:focus {
    outline: none;
    border: 1.5px solid ${theme.primary[7]};
  }
  &::placeholder {
    color: ${theme.gray[2]};
  }
  caret-color: ${theme.primary[7]};
`;