import React, { useEffect } from 'react';
import * as _ from './style';
import FalseCircleCheck from 'assets/image/FalseCircleCheck';
import TrueCircleCheck from 'assets/image/TrueCircleCheck';
import TermsContent from 'components/TermsContent';
import TermsData from 'data/Terms';
import NextButton from 'components/NextButton';
import { useRecoilState } from 'recoil';
import {
  successAllState,
  checkState,
  nextButtonState,
  CheckState
} from 'atoms/user';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import { useFlow } from 'stackflow';

const Terms: ActivityComponentType = () => {
  const { push } = useFlow();
  const [successAll, setSuccessAll] = useRecoilState(successAllState);
  const [check, setCheck] = useRecoilState(checkState);
  const [nextButtonStateValue, setNextButtonState] =
    useRecoilState(nextButtonState);

  useEffect(() => {
    const allChecked = Object.values(check).every(Boolean);
    setSuccessAll(allChecked);

    const necessaryChecked = check[1] && check[2] && check[3];
    setNextButtonState(necessaryChecked);
  }, [check, setSuccessAll, setNextButtonState]);

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
    <AppScreen>
      <_.Terms_Layout>
        <_.Terms_Container>
          <_.Terms_Title>서비스 이용을 위해</_.Terms_Title>
          <_.Terms_SubTitle>
            <_.Terms_SubTitle_Highlight>
              이용약관 동의
            </_.Terms_SubTitle_Highlight>
            가 필요합니다.
          </_.Terms_SubTitle>
          <_.Terms_SuccessAll onClick={handleAllCheck}>
            {successAll ? (
              <_.TrueCircleCheckIcon>
                <TrueCircleCheck />
              </_.TrueCircleCheckIcon>
            ) : (
              <_.TrueCircleCheckIcon>
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
                isTerms={true}
              />
            ))}
          </_.Terms_Deatil>
        </_.Terms_Container>
        <NextButton
          text="다음"
          state={nextButtonStateValue}
          onNextClick={() => {
            push('UserInfo', {});
          }}
        />
      </_.Terms_Layout>
    </AppScreen>
  );
};

export default Terms;
