import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppScreen } from '@stackflow/plugin-basic-ui';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import ProfileEdit from 'assets/Icon/ProfileEdit';
import EmailCopy from 'assets/Icon/EmialCopy';
import NextButton from 'components/NextButton';
import { formatBirthday } from 'lib/utils/formatBirthday';
import { handleImageEdit } from 'lib/utils/handleImageEdit';
import { isValidDate } from 'lib/utils/isValidDate';
import { Auth_AllInfo, Auth_UpdateUser } from 'lib/apis/Auth';
import { user } from 'types/user';
import { useFlow } from 'stackflow';
import { ActivityComponentType } from '@stackflow/react';

interface EditParams {
  imageUrl: string;
}

const Edit: ActivityComponentType<EditParams> = ({ params }) => {
  const { push, replace } = useFlow();

  const [initialInfos, setInitialInfos] = useState<user | null>(null);

  const [infos, setInfos] = useState<user>({
    profileImg: '',
    email: '',
    nickname: '',
    birthdate: '',
    gender: ''
  });
  const imageUrl = params.imageUrl;

  const [isImageChanged, setIsImageChanged] = useState(false);
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const { data } = await Auth_AllInfo();
        const { profileImg, email, nickname, birthdate, gender } = data;

        const fetchedInfos = {
          profileImg: imageUrl || profileImg,
          email,
          nickname: nickname,
          birthdate,
          gender: gender == 'female' ? '여자' : '남자'
        };

        setInfos(fetchedInfos);
        setInitialInfos({ ...fetchedInfos });
      } catch (error) {
        console.error('유저 정보를 불러오는 데 실패했습니다:', error);
      }
    };
    getUserInfo();
  }, []);

  const handleInfos = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.currentTarget;
      const newValue = name === 'birthday' ? formatBirthday(value) : value;

      setInfos((prevInfos) => {
        const newInfos = { ...prevInfos, [name]: newValue };
        return newInfos;
      });
    },
    [infos, imageUrl]
  );

  const handleEmailCopy = useCallback(() => {
    navigator.clipboard
      .writeText(infos.email ?? '')
      .then(() => {
        alert('이메일이 복사되었습니다.');
      })
      .catch((err) => {
        console.error('이메일 복사에 실패했습니다.', err);
      });
  }, [infos.email]);

  useEffect(() => {
    if (imageUrl) {
      setInfos((prev) => ({ ...prev, profileImg: imageUrl }));
      setIsImageChanged(true);
      setIsProfileUpdated(true);
    }
  }, [imageUrl]);

  const handleProfileImageEdit = () => {
    handleImageEdit(async (selectedImage) => {
      push('CropPage', { imageSrc: URL.createObjectURL(selectedImage) });
    });
  };

  const handleUpdateProfile = async () => {
    try {
      await Auth_UpdateUser({
        profileImg: infos.profileImg,
        nickname: infos.nickname,
        birthdate: infos.birthdate ?? '',
        gender: infos.gender == '남자' ? 'male' : 'female'
      });
      alert('프로필 수정 성공!');
      replace('All', {}, { animate: false });
    } catch (error) {
      console.error('프로필 수정 실패:', error);
    }
  };

  const isFormValid = useCallback(() => {
    const { nickname, birthdate, gender } = infos;

    const isInfoChanged =
      nickname !== initialInfos?.nickname ||
      birthdate !== initialInfos?.birthdate ||
      gender !== initialInfos?.gender ||
      isImageChanged ||
      isProfileUpdated;

    return (
      nickname.length >= 2 &&
      birthdate &&
      isValidDate(birthdate) &&
      (gender === '남자' || gender === '여자') &&
      isInfoChanged
    );
  }, [infos, initialInfos, isImageChanged, isProfileUpdated]);

  return (
    <AppScreen>
      <_.Edit_Layout>
        <Header title="회원 정보 수정" />
        <_.Edit_Content>
          {/* <_.Edit_Profile>
            <_.Edit_Profile_Img src={infos.profileImg} alt="프로필 이미지" />
            <_.Edit_Profile_Edit onClick={handleProfileImageEdit}>
              <ProfileEdit />
            </_.Edit_Profile_Edit>
          </_.Edit_Profile> */}
          <_.Edit_Infos>
            <_.Edit_Info>
              <_.Edit_Info_Label>이메일</_.Edit_Info_Label>
              <_.Edit_Info_Email>
                {infos.email}
                <EmailCopy onClick={handleEmailCopy} />
              </_.Edit_Info_Email>
            </_.Edit_Info>
            <_.Edit_Info>
              <_.Edit_Info_Label>여행자 닉네임</_.Edit_Info_Label>
              <_.Edit_Info_Input
                name="nickname"
                value={infos.nickname}
                onChange={handleInfos}
              />
            </_.Edit_Info>
            <_.Edit_Info>
              <_.Edit_Info_Label>생년월일</_.Edit_Info_Label>
              <_.Edit_Info_Input
                name="birthdate"
                value={infos.birthdate}
                onChange={handleInfos}
              />
            </_.Edit_Info>
            <_.Edit_Info>
              <_.Edit_Info_Label>성별</_.Edit_Info_Label>
              <_.Edit_Info_Input
                name="gender"
                value={infos.gender}
                onChange={handleInfos}
              />
            </_.Edit_Info>
          </_.Edit_Infos>
        </_.Edit_Content>
        <NextButton
          text="저장하기"
          state={!!isFormValid()}
          onNextClick={handleUpdateProfile}
        />
      </_.Edit_Layout>
    </AppScreen>
  );
};

export default Edit;
