import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
 
export function ChatRoom() {
  const [messages, setMessages] = useState([]);
 
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello Bitch !!',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])
 
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  const

   renderBubble=(props) => {
      return(
      <Bubble 
      {...props}
      wrapperStyle={{
          right:{ backgroundColor: "#181228" }
      }}
      textStyle={{
          left:{color:"#181228"}
      }} />
      )}

  
 
  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble }
      alwaysShowSend
      scrollToBottom
    />
  )
}