import React, { useEffect, useRef, useState } from 'react';
import * as _ from './style';
import useStatusBarHeight from 'hooks/useStatusBarHeight';
import Header from 'components/Header';
import Send from 'assets/image/Send';
import { theme } from 'lib/utils/style/theme';
import { ChatContent } from 'data/ChatContent';
import MessageBox from 'components/MessageBox';

const Chat = () => {
  const statusBarHeight = useStatusBarHeight();
  const [message, setMessage] = useState<string>('');
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessage('');
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [ChatContent]);

  return (
    <_.Chat_Container StatusBarSize={`${statusBarHeight}px`}>
      <_.Chat_Header>
        <Header
          title="AI 디토"
          buttonState=""
          isOnChatting={true}
          onClickMethod={() => {}}
        />
      </_.Chat_Header>
      <_.Chat_Messages>
        {ChatContent.map((item, index) => (
          <MessageBox key={index} message={item.content.text} role={item.role}>
            {item.content.text}
          </MessageBox>
        ))}
        <div ref={messageEndRef} />
      </_.Chat_Messages>
      <_.Chat_Typing_Container>
        <_.Chat_Typing_Box>
          <_.Chat_Input
            type="text"
            value={message}
            placeholder="메시지 보내기..."
            ref={inputRef}
            onChange={(e) => {
              setMessage(e.currentTarget.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <_.Chat_SendIcon onClick={handleSendMessage}>
            <Send stroke={message ? theme.primary[7] : theme.gray[2]} />
          </_.Chat_SendIcon>
        </_.Chat_Typing_Box>
      </_.Chat_Typing_Container>
    </_.Chat_Container>
  );
};

export default Chat;
