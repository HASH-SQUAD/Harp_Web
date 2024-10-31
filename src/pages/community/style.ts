import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Community_Layout = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 90px);
  overflow: auto;
`;

export const Community_Header = styled.header`
  width: 100%;
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.gray.white};
  position: fixed;
  top: 0;
  z-index: 1000;
`;

export const Community_Header_Title = styled.p`
  color: ${theme.gray.black};
  font-size: 19px;
  font-weight: 600;
`;

export const Community_CategoryList = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  padding: 5px 20px;
  position: fixed;
  top: 48px;
  z-index: 999;
  background-color: ${theme.gray.white};

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Community_Category = styled.div<{ isSelected?: boolean }>`
  padding: 3px 14px;
  border-radius: 500px;
  background-color: ${(props) =>
    props.isSelected ? theme.primary[7] : theme.sub[1]};
  color: ${(props) => (props.isSelected ? theme.gray.white : theme.gray.black)};
  box-shadow: 0px 0px 3px 0px #f1f1f1;
  font-size: 16px;
  font-weight: 500;
`;

export const Community_NoticeList = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  margin-top: 100px;
  padding: 0 20px 20px;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Community_Notice = styled.div`
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${theme.primary[7]};
`;

export const Community_Notice_Title = styled.p`
  color: ${theme.gray.white};
  font-size: 12px;
  font-weight: 400;
`;

export const Community_Notice_Content = styled.p`
  color: ${theme.gray.white};
  font-size: 15px;
  font-weight: 500;
  min-width: 170px;
`;

export const Community_Notice_Date = styled.p`
  color: ${theme.gray.white};
  font-size: 10px;
  font-weight: 300;
`;

export const Community_PostList = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  gap: 10px;
`;

export const Community_NotUploaded = styled.div`
  padding: 20px 20px 0%;
  width: 100%;
  height: calc(100vh - 400px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.gray['2.5']};
`;

export const Community_Writing = styled.div`
  bottom: 97px;
  right: 20px;
  position: fixed;
  background-color: ${theme.primary[7]};
  border-radius: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
