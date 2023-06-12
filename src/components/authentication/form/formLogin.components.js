'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import jwt from 'jwt-decode';
import axios from 'axios';
import Cookies from 'js-cookie';

import Button from '@/components/authentication/button/buttonAuth.components';
import { alertService } from '@/services/alert.services';
import Link from 'next/link';

export default function FormLogin(props) {
  const [status, setStatus] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const getYear = () => {
    return new Date().getFullYear();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const usernameInput = event.target.username.value;
    const passwordInput = event.target.password.value;
    setIsLoading(true);
    try {
      axios
        .post(`https://api-apollo.niceblue.my.id/api/authentication/login`, {
          username: usernameInput,
          password: passwordInput,
        })
        // .post(`http://localhost:5001/api/authentication/login`, {
        //   username: usernameInput,
        //   password: passwordInput,
        // })
        .then((res) => {
          let data = res.data;

          const token = data.data.token;

          let user = jwt(token);
          Cookies.set('token', token, { expires: 1 });
          Cookies.set('userId', user.id, { expires: 1 });
          Cookies.set('username', user.username, { expires: 1 });
          console.log(data.message);
          alertService.success('Berhasil Login', true);
          setIsLoading(false);
          router.push('/home');

          //   console.log(res.status);
        })
        .catch((res) => {
          console.log(res);
          setStatus(false);
          //   if (res.response.status === 400) {
          //     setStatus(false);
          //   }
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCancel = (event) => {
    router.push('/');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-floating">
          <input type="text" className="form-control" id="username" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>

        <Button typeName={'submit'} title={'Sign In'} class={'w-100 btn btn-lg btn-primary'} isLoading={isLoading} />
        <Button
          typeName={'button'}
          title={'Cancel'}
          class={'w-100 my-2 btn btn-lg btn-danger'}
          handleCancel={handleCancel}
        />
        <Link href="/authentication/register">Dont have account ? Please Register</Link>
        <p className="mt-5 mb-3 text-body-secondary text-center">&copy; APOLLO PROJECT {getYear()}</p>
      </form>
    </>
  );
}
