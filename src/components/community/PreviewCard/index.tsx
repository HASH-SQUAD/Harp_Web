// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import Heart from 'assets/image/Heart';
import Comment from 'assets/image/Comment';
import { community } from 'types/community';
import { getDayMinuteCounter } from 'lib/utils/getDayMinuteCounter';
import { useFlow } from 'stackflow';

const PreviewCard = ({
  communityId,
  title,
  tag,
  wishCount,
  commentCount,
  updatedAt,
  images
}: community) => {
  const { push } = useFlow();
  return (
    <_.PreviewCard_Layout
      onClick={() => {
        push('Detail', { communityId: communityId });
      }}
    >
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
        <_.PreviewCard_Image url={images![0]} />
      </_.PreviewCard_Right>
    </_.PreviewCard_Layout>
  );
};

export default PreviewCard;
