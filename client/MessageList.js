import React from 'react';

import styles from './MessageList.css';

const Message = props => (
  <div className={styles.Message}>
    <p><span className={styles.ClientName}>{props.from} :</span></p>
    <span>{props.text}</span>
  </div>
);

const MessageClient = props => (
  <div className={styles.MessageClient}>
    <p><span className={styles.ClientName}>{props.from} :</span></p>
    <span>{props.text}</span>
  </div>
);

const MessageList = props => (
  <div className={styles.MessageList}>
    {
      props.messages.map((message, i) => {
        if (message.from === props.client) {
        return (
          <Message
            key={i}
            from='Me'
            text={message.text}
          />
          );
        } else {
        return (
          <MessageClient
            key={i}
            from={message.from}
            text={message.text}
          />
          );
        }
      })
    }
  </div>
);

export default MessageList;