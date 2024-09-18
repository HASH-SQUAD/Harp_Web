import SurveyFoodData from 'data/SurveyFood';
import SurveyStyleData from 'data/SurveyStyle';
import { atom } from 'recoil';

export const userInfosState = atom({
  key: 'userInfosState',
  default: {
    username: '',
    birthday: '',
    gender: ''
  }
});

export const isGenderSelectedState = atom({
  key: 'isGenderSelectedState',
  default: {
    female: false,
    male: false
  }
});

export const checkedStylesState = atom({
  key: 'checkedStylesState',
  default: {
    styles: SurveyStyleData.map((item) => ({ id: item.id, state: false }))
  }
});

export const checkedFoodsState = atom({
  key: 'checkedFoodsState',
  default: {
    foods: SurveyFoodData.map((item) => ({ id: item.id, state: false }))
  }
});
