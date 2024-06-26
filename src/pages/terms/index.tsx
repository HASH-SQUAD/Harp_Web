import React, { useState, useEffect } from 'react';
import useStatusBarHeight from 'hooks/useStatusBarHeight';
import * as _ from './style';
import Header from 'components/Header';
import FalseCircleCheck from 'assets/image/FalseCircleCheck';
import TrueCircleCheck from 'assets/image/TrueCircleCheck';
import TermsContent from 'components/TermsContent';
import TermsData from '../../data/Terms';
import NextButton from 'components/NextButton';

interface CheckState {
  [key: number]: boolean;
}

const Terms = () => {
  const statusBarHeight = useStatusBarHeight();
  const [successAll, setSuccessAll] = useState<boolean>(false);
  const [check, setCheck] = useState<CheckState>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  });
  const [nextButtonState, setNextButtonState] = useState<boolean>(false);

  useEffect(() => {
    const allChecked = Object.values(check).every(Boolean);
    setSuccessAll(allChecked);

    const necessaryChecked = check[1] && check[2] && check[3];
    setNextButtonState(necessaryChecked);
  }, [check]);

  const handleAllCheck = () => {
    const newState = !successAll;
    setSuccessAll(newState);
    const updatedChecks: CheckState = Object.keys(check).reduce((acc, key) => {
      acc[Number(key)] = newState;
      return acc;
    }, {} as CheckState);
    setCheck(updatedChecks);
  };

  const handleSingleCheck = (id: number) => {
    setCheck((prevCheck) => ({
      ...prevCheck,
      [id]: !prevCheck[id]
    }));
  };

  return (
    <_.Terms_Container>
      <_.Terms_Layout StatusBarSize={`${statusBarHeight}px`}>
        <_.Header_Layout>
          <Header
            StatusBar={0}
            title=""
            buttonState=""
            onClickMethod={() => {
              return 0;
            }}
          />
        </_.Header_Layout>

        <_.Terms_Title>서비스 이용을 위해</_.Terms_Title>

        <_.Terms_SubTitle>
          <_.Terms_SubTitle_Highlight>이용약관 동의</_.Terms_SubTitle_Highlight>
          가 필요합니다.
        </_.Terms_SubTitle>

        <_.Terms_SuccessAll>
          {successAll ? (
            <_.TrueCircleCheckIcon onClick={handleAllCheck}>
              <TrueCircleCheck />
            </_.TrueCircleCheckIcon>
          ) : (
            <_.TrueCircleCheckIcon onClick={handleAllCheck}>
              <FalseCircleCheck />
            </_.TrueCircleCheckIcon>
          )}
          약관 전체 동의
        </_.Terms_SuccessAll>

        <_.Terms_Deatil>
          {TermsData.map((item) => (
            <TermsContent
              key={item.id}
              id={item.id}
              title={item.title}
              detail={item.desc}
              state={check[item.id]}
              setState={handleSingleCheck}
            />
          ))}
        </_.Terms_Deatil>

        <NextButton text="다음" state={nextButtonState} />
      </_.Terms_Layout>
    </_.Terms_Container>
  );
};

export default Terms;
