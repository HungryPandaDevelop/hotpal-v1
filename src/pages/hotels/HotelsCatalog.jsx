
import axios from 'axios';

const Hotels = () => {





  const getApi = () => {

    // axios.get("/api").then(res => {
    //   console.log('res', res.data.getData)
    // });
    axios.get("http://hotpal.sait.website/api.php").then(res => {
      console.log('res', res.data.data)
    });

    // fetch("/api")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data)
    //   });



    // trash
    // axios.get({
    //   method: 'POST',
    //   url: "http://hotpal.sait.website/api.php",
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',

    //   },
    // }).then(res => {
    //   console.log('res', res)
    // });


    // fetch('http://hotpal.sait.website/api.php', {
    //   method: "POST",
    //   header: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   body: JSON.stringify({ action: 1 })
    // }).then(res => res.text())
    //   .then(res => {
    //     console.log('res', res)
    //   })
  }


  return (
    <div>
      HotelsCatalog

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="btn"
        onClick={getApi}
      >GET</div>

    </div>
  )
}

export default Hotels
