import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const PreviewCard_Layout = styled.div`
  width: 100%;
  display: flex;
  padding: 16px;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid ${theme.gray[1]};
  background: #fff;
`;

export const PreviewCard_Left = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

export const PreviewCard_Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: self-end;
`;

export const PreviewCard_Gray = styled.p`
  color: ${theme.gray[3]};
  font-size: 14px;
  font-weight: 400;
`;

export const PreviewCard_Title = styled.p`
  color: ${theme.gray[4]};
  font-size: 17px;
  font-weight: 500;
  padding-top: 4px;
`;

export const PreviewCard_ReactionList = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  padding-top: 12px;
`;

export const PreviewCard_Reaction = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;
`;

export const PreviewCard_Image = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background-color: #c4c4c4;
`;
