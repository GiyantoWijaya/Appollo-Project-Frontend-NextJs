import FormRegister from '@/components/authentication/form/formRegister.components';

import './page.style.css';
import Logo from '@/components/authentication/logo/logo.components';
import Alert from '@/components/alert/alert.components';

import 'bootstrap/dist/css/bootstrap.css';

export default function Register() {
  return (
    <>
      <div className="bodyRegister">
        <div className="card m-auto py-3 px-2">
          <div className="form-signin w-100 m-auto">
            <Logo />

            <hr />
            <Alert />
            <h3 className="mb-3 fw-normal text-center">Sign up with your email</h3>
            <FormRegister />
          </div>
        </div>
      </div>
    </>
  );
}
