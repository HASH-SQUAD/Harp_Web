import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const PostDetail_Layout = styled.div`
  position: fixed;
  width: 100%;
  height: calc(100vh - 40px);
`;

export const PostDetail_Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  height: 100%;
`;

export const PostDetail_SapceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const PostDetail_TagBox = styled.div`
  border-radius: 5px;
  padding: 5px 8px;
  background-color: ${theme.sub[1]};
  color: ${theme.gray.black};
  font-size: 12px;
`;

export const PostDetial_Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: ${theme.gray.black};
  margin-top: 8px;
`;


export const PostDetail_Info = styled.div`
  margin-top: 8px;
  font-size: 12px;
  color: ${theme.gray['3.5']};
`;

  export const PostDetail_Description = styled.div`
    margin-top: 10px;
    font-size: 17px;
    color: ${theme.gray.black};
  `;