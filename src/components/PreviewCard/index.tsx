// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import Heart from 'assets/image/Heart';
import Comment from 'assets/image/Comment';
import { previewData } from 'types/community';
import { getDayMinuteCounter } from 'lib/utils/getDayMinuteCounter';

const PreviewCard = ({
  title,
  tag,
  wishCount,
  commentCount,
  updatedAt
}: previewData) => {
  return (
    <_.PreviewCard_Layout>
      <_.PreviewCard_Left>
        <_.PreviewCard_Gray>{tag}</_.PreviewCard_Gray>
        <_.PreviewCard_Title>{title}</_.PreviewCard_Title>
        <_.PreviewCard_ReactionList>
          <_.PreviewCard_Reaction>
            <Heart width="16" height="16" />
            <_.PreviewCard_Gray>{wishCount}</_.PreviewCard_Gray>
          </_.PreviewCard_Reaction>
          <_.PreviewCard_Reaction>
            <Comment />
            <_.PreviewCard_Gray>{commentCount}</_.PreviewCard_Gray>
          </_.PreviewCard_Reaction>
        </_.PreviewCard_ReactionList>
      </_.PreviewCard_Left>
      <_.PreviewCard_Right>
        <_.PreviewCard_Gray>
          {getDayMinuteCounter(updatedAt)}
        </_.PreviewCard_Gray>
        <_.PreviewCard_Image />
      </_.PreviewCard_Right>
    </_.PreviewCard_Layout>
  );
};

export default PreviewCard;
