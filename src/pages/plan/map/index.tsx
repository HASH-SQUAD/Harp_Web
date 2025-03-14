// 라이브러리
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import ScreenMap from 'components/Maps/ScreenMap';
import BottomSheet from 'components/BottomSheet';
import { Plan_Result } from 'lib/apis/Plan';
import { PlanResult } from 'types/plan';
import { formatSelectedDate } from 'lib/utils/formatSelectedDate';
import { formatTravelPeriod } from 'lib/utils/formatTravelPeriod';
import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';

interface MapParams {
  id: string;
}

const Map: ActivityComponentType<MapParams> = ({ params }) => {
  const id = params.id;
  const [planInfos, setPlanInfos] = useState<PlanResult | null>(null);
  useQuery(['planResult', id], () => Plan_Result({ id }), {
    onSuccess: (response) => {
      if (response?.data?.PlanData) {
        setPlanInfos(response.data.PlanData);
      }
    },
    onError: (error) => {
      console.error('일정 정보 불러오기 실패: ', error);
    }
  });

  const startDate = planInfos?.startDate ?? null;
  const endDate = planInfos?.endDate ?? null;

  const formattedStartDate = formatSelectedDate(startDate, '.');
  const formattedEndDate = formatSelectedDate(endDate, '.');
  const travelPeriod = formatTravelPeriod(startDate ?? '', endDate ?? '');

  const duration =
    formattedStartDate === formattedEndDate
      ? `${formattedStartDate} (${travelPeriod})`
      : `${formattedStartDate}~${formattedEndDate} (${travelPeriod})`;

  return (
    <AppScreen>
      <_.Map_Layout>
        <Header title="지도" />
        <ScreenMap planInfos={planInfos!} />
        <BottomSheet planInfos={planInfos!} duration={duration} />
      </_.Map_Layout>
    </AppScreen>
  );
};

export default Map;
