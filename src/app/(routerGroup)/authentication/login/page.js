import './page.style.css';
import FormLogin from '@/components/authentication/form/formLogin.components';
import Logo from '@/components/authentication/logo/logo.components';
import Alert from '@/components/alert/alert.components';
import 'bootstrap/dist/css/bootstrap.css';

export default function Login() {
  return (
    <>
      <div className="bodyLogin">
        <div className="card m-auto py-3 px-2">
          <div className="form-signin w-100 m-auto">
            <Logo />
            <hr />
            <Alert />
            <h3 className="mb-3 fw-normal text-center">Please Sign in</h3>
            <FormLogin />
          </div>
        </div>
      </div>
    </>
  );
}
