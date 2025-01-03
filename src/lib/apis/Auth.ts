import { AuthInstance } from './Axios';

export const Auth_KakaoLogin = async () => {
  const { data } = await AuthInstance.get(`/auth/kakao/authstate`);
  return data;
};

export const Auth_AllInfo = async () => {
  const { data } = await AuthInstance.get(`/auth/authstate`);
  return data;
};

interface UserInfoParams {
  profileImg?: string;
  nickname: string;
  birthdate: string;
  gender: string;
}

export const Auth_UserInfo = async (params: UserInfoParams) => {
  const { data } = await AuthInstance.put(`/auth/newaccount`, params);
  return data;
};

interface SuveryParams {
  Q1: string;
  Q2: string;
  Q3: string;
  etc: string;
}

export const Auth_Survey = async (params: SuveryParams) => {
  const { data } = await AuthInstance.post(`/auth/survey`, {
    headers: {
      Q1: params.Q1,
      Q2: params.Q2,
      Q3: params.Q3,
      Qetc: params.etc
    }
  });
  return data;
};

export const Auth_UpdateUser = async (params: UserInfoParams) => {
  const { data } = await AuthInstance.put(`/auth/updateuser`, params);
  return data;
};

export const Auth_Logout = async () => {
  const { data } = await AuthInstance.delete(`/auth/kakao/logout`);
  return data;
};

export const Auth_DeleteUser = async () => {
  const { data } = await AuthInstance.delete(`/auth/deleteuser`);
  return data;
};
