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
      return tagSimp('see', 'Рассматриваю')

    case 'agree':
      return tagSimp('agree', 'Симпатия')

    case 'disagree':
      return tagSimp('disagree', 'Нету симпатии')

    default:
  }
}