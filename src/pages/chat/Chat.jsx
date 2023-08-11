import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { connect } from 'react-redux';

import ChatForm from 'pages/chat/Form';
import Messages from 'pages/chat/Messages';

import Rooms from 'pages/chat/Rooms';
import Tabs from 'pages/cabinet/parts/Tabs';


const Chat = ({ uid }) => {

  const params = useParams();

  return (
    <>
      <div className='main-full'>
        <div className="stub"></div>
        <Tabs active={2} />

        <div className="border-container border-null-left chat">
          <div className='main-grid'>
            <div className="col-4">
              <Rooms
                uid={uid}
                roomId={params.roomId}
                type='page'
              />
            </div>
            <div className="col-8">
              <div className="chat-messages">
                {params.roomId ? (<>
                  <Messages
                    roomId={params.roomId}
                  />
                  <ChatForm
                    roomId={params.roomId}
                    type='page'
                  />
                </>) : ('Выбрать комнату')}
              </div>
            </div>



          </div>
        </div>
      </div>
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    uid: state.account.uid,
  }
}

export default connect(mapStateToProps)(Chat);