import { Link } from "react-router-dom";
import { getSingleListing } from "services/getSingleListing"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { pagesFields } from 'base/forms/pagesFields';
import RenderForm from 'components/forms/RenderForm';
import { saveListing } from 'services/saveListing';

import { connect } from 'react-redux';


const PageList = ({ formData }) => {


  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);


  const params = useParams();


  useEffect(() => {
    getSingleListing('pages', params.pageId).then((res) => {

      setListings(res);
      setLoading(false);
    })
  }, []);

  const submitSuccess = () => {
    saveListing(formData.values, params.pageId, 'pages');

  };

  if (loading) { return 'Loading...' }



  return (

    <div>
      <div className="stub"></div>
      <div className="main-full">
        <h1>edit {listings.title}</h1>
        <Link to='/page-list' className="btn btn--blue">К списку страниц</Link>
        <RenderForm
          btnSaveText="Сохранить изменения"
          fields={pagesFields}
          initialValues={{ title: listings.title, content: listings.content }}
          btnSubmiText="Сохранить"
          // initialValues={listings}
          submitSuccess={submitSuccess}

        />
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {

  return {
    formData: state.form.singleInput,
  }
}

export default connect(mapStateToProps)(PageList);

