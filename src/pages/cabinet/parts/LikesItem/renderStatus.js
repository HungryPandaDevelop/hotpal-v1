export const renderStatus = (like) => {

  const tagSimp = (name, text) => {
    return (
      <>
        <div className="like-hint">
        Ответ на симпатию
        </div>
        <div className={`status-like status--${name}`}>
          {text}
        </div>
      </>)
  }


  switch (like.status) {
    case 'see':
      return tagSimp('see', 'Рассматривает')

    case 'agree':
      return tagSimp('agree', 'Взаимно')

    case 'disagree':
      return tagSimp('disagree', 'Не взаимно')

    default:
  }
}