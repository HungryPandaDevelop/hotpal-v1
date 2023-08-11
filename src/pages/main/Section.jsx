import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import img1 from 'default/frontend/images/partners/1.svg'
import img2 from 'default/frontend/images/partners/2.svg'
import img3 from 'default/frontend/images/partners/3.svg'
import img4 from 'default/frontend/images/partners/4.svg'


const Section = ({ account }) => {
  return (
    <>
      <section className="main-home">
        <div className="main-home-img img-cover" >

        </div>
        <div className="main-home-content main-full">
          <div className="main-home-info">
            <h1>Знакомство в отелях</h1>
            {!account.uid && (
              <div className="btn-container">
                <Link className="element-btn btn btn--black" to="/reg-start">Создать аккаунт</Link>
              </div>
            )}

          </div>
        </div>
      </section>
      <section className="home-simple-text">
        <div className="main-full">
          <h2>Как это работает?</h2>
          <div className="text">
            Около 35% людей одиноки. В мире, где существует бесконечное множество локаций для знакомств.
            Но мы уверены, что знакомство в отеле является одним из лучших. Вы отдохнувшие, радостные
            и заинтересованные, как никогда, в новых приключениях.

            И поэтому мы решили облегчить вам поиск и сделать ваш отпуск увлекательным и незабываемым!
          </div>
        </div>
      </section>
      <section className="partners-home">
        <div className="partners-container main-full">
          <div className="partners-item"> <img src={img1} alt="" /><b>2560</b><span>гостей</span></div>
          <div className="partners-item"> <img src={img2} alt="" /><b>2560</b><span>гостей</span></div>
          <div className="partners-item"> <img src={img3} alt="" /><b>2560</b><span>гостей</span></div>
          <div className="partners-item"> <img src={img4} alt="" /><b>2560</b><span>гостей</span></div>
        </div>
      </section>
    </>
  )
}

const mapStateToProps = (state) => {

  return {
    account: state.account
  }
}

export default connect(mapStateToProps)(Section);