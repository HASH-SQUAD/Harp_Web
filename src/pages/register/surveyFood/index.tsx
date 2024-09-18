//라이브러리
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

//파일
import * as _ from './style';
import Header from 'components/Header';
import SurveyFoodData from 'data/SurveyFood';
import SurveyContent from 'components/SurveyContent';
import NextButton from 'components/NextButton';
import { selectedFoodsState, selectedFoodsStringState } from 'atoms/user';
import { formatSelectedContents } from 'lib/utils/formatSelectedContents';

const SurveyFood = () => {
  const navigate = useNavigate();
  const [selectedFoods, setSelectedFoods] = useRecoilState(selectedFoodsState);
  const [selectedFoodsString, setSelectedFoodsString] = useRecoilState(
    selectedFoodsStringState
  );

  const handleToggle = (id: number) => {
    setSelectedFoods((prevState) => {
      const selectedCount = prevState.foods.filter((item) => item.state).length;

      const isItemSelected = prevState.foods.find(
        (item) => item.id === id
      )?.state;

      if (isItemSelected) {
        return {
          foods: prevState.foods.map((item) =>
            item.id === id ? { ...item, state: !item.state } : item
          )
        };
      } else if (selectedCount < 2) {
        return {
          foods: prevState.foods.map((item) =>
            item.id === id ? { ...item, state: !item.state } : item
          )
        };
      }
      return prevState;
    });
  };
  const isFormValid = () => {
    const selectedCount = selectedFoods.foods.filter(
      (item) => item.state
    ).length;
    return selectedCount >= 1;
  };

  useEffect(() => {
    setSelectedFoodsString(formatSelectedContents(selectedFoods.foods));
  }, [selectedFoods]);

  return (
    <_.SurveyFood_Container>
      <Header title="2" />
      <_.SurveyFood_Content>
        <_.SurveyFood_ProgressText>2/3</_.SurveyFood_ProgressText>
        <_.SurveyFood_MainText>
          당신의 음식 취향을
          <br />
          알려주세요.
          <_.SurveyFood_SubText>
            최대 2개까지 선택할 수 있어요!
          </_.SurveyFood_SubText>
        </_.SurveyFood_MainText>

        <_.SurveyFood_Contents>
          {SurveyFoodData.map((item) => {
            const currentItem = selectedFoods.foods.find(
              (stateItem) => stateItem.id === item.id
            );
            const state = currentItem ? currentItem.state : false;

            return (
              <SurveyContent
                key={item.id}
                width={150}
                text={item.text}
                img={item.img}
                state={state}
                onClick={() => handleToggle(item.id)}
              />
            );
          })}
        </_.SurveyFood_Contents>
      </_.SurveyFood_Content>
      <NextButton
        text="다음"
        state={!!isFormValid()}
        onNextClick={() => {
          navigate('/register/surveymbti');
        }}
      />
    </_.SurveyFood_Container>
  );
};

export default SurveyFood;
