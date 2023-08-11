import moment from 'moment';

export const getCurrentTime = (roomUserInfo) => {

  let onlineUserTime = moment.unix(roomUserInfo.timestamp.seconds).format("DD.MM.YYYY HH:mm");

  let calcDate = moment() - moment.unix(roomUserInfo.timestamp.seconds);
  let minutes = moment.duration(calcDate).minutes();

  if (minutes < 5) {
    return <div className="rooms-item-online">В сети</div>
  }
  else {
    return <>Был(а) {onlineUserTime}</>
  }

  // var seconds = moment.duration(calcDate).seconds();
  // var hours = Math.trunc(moment.duration(calcDate).asHours());
}