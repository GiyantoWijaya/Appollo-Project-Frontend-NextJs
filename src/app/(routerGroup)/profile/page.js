import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './page.styles.css';
import ButtonProfile from '@/components/profile/buttonProfile/buttonProfile.components';
import { cookies } from 'next/headers';

const getData = async () => {
  const cookieStore = cookies();
  const userId = cookieStore.get('userId').value;
  // const dataUser = await axios.get(`http://localhost:5001/api/userProfile/show/${userId}`);
  const dataUser = await axios.get(`https://api-apollo.niceblue.my.id/api/userProfile/show/${userId}`);
  const data = dataUser.data.data.dataProfile;
  return data;
};

export default async function Profile() {
  const data = await getData();
  // console.log(data);
  return (
    <>
      <div className="profile">
        <div id="gradient"></div>
        <div id="card">
          <h2>First Name : {data.firstname}</h2>
          <h2>Last Name : {data.lastname}</h2>
          <h2>City : {data.city}</h2>
          <h2>Bio : {data.bio}</h2>
          <span class="right bottom">
            {/* <button onClick={handleButtonProfile} className="button-42">
            Update Profile
          </button> */}
            <ButtonProfile />
          </span>
          <span class="left bottom">Social Media : {data.social_media_url}</span>
        </div>
      </div>
    </>
  );
}
