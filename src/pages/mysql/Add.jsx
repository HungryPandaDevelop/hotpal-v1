
import axios from 'axios';

const Add = () => {


  // const myArray = ["<i class='bokal-ico'></i>Бокал в лобби", "<i class='padushka-ico'></i>Свидание в номере", "<i class='pribor-ico'></i>Поход в ресторан"];
  const myArray = ['<i class="bokal-ico"></i>Бокал в лобби', '<i class="padushka-ico"></i>Свидание в номере',]
  const jsonString = JSON.stringify(myArray);

  const myArrayI = [{ url: 'https://hotpal.ru/uploads/6560796264445_3BAAB293-3334-4DEA-AAFC-73C39C72928D.jpeg', id: '6560796264445_3BAAB293-3334-4DEA-AAFC-73C39C72928D.jpeg' }, { url: 'https://hotpal.ru/uploads/65afb7839e05a_1.jpg', id: '65afb7839e05a_1.jpg' }]
  const jsonStringI = JSON.stringify(myArrayI);


  const addBase = () => {
    console.log('jsonString', jsonString)
    axios.get("https://hotpal.ru/api/base/vendor/create.php", {
      params: {
        email: 'mail@mail',
        name: 'fox',
        gender: 'olo',
        goals: jsonString,
        imgsAccount: jsonStringI,
        // interests: `['111', '222', '333']`
      }
    }).then(res => {

      console.log('in send', res);
      // saveListing({ vertificationSend: true }, account.uid, 'users');
    });
  };

  return (
    <div>
      <div className="stub"></div>
      <div className="main-full">
        <div className="content">
          <h1>Add</h1>
          <div>

          </div>
          <div onClick={addBase} className="btn btn--blue">Добавить</div>
        </div>
      </div>

    </div >
  )
}

export default Add;
