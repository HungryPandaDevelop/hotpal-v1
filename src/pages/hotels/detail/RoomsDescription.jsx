
const RoomsDescription = ({ listing }) => {

  return (
    <div className="rooms-description">
      <div className="main-full">
        <h3>
          Описание отеля
        </h3>
        {listing.description_struct.map((el, index) => (
          <div key={index}>
            <h4>{el.title}</h4>
            {el.paragraphs.map((par, indexP) => (
              <p key={indexP} dangerouslySetInnerHTML={{ __html: par }}></p>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default RoomsDescription
