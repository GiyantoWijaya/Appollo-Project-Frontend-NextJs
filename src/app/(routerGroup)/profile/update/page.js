import FormUpdate from '@/components/profile/form/form.components';
import 'bootstrap/dist/css/bootstrap.css';
import './page.styles.css';

export default function ProfileUpdate() {
  return (
    <>
      <div className="profile">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <h1 className="text-center mt-5 mb-5">User Profile</h1>
            <FormUpdate />
          </div>
        </div>
      </div>
    </>
  );
}
