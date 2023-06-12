'use client';
import Image from 'next/image';
import Button from '@/components/authentication/button/buttonAuth.components';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function FormRegister(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [status, setStatus] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // const [inputData, setInputData] = useState({
  //   username: '',
  //   password: '',
  //   email: '',
  // });

  const getYear = () => {
    return new Date().getFullYear();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // let result = await axios.post('http://localhost:5001/api/authentication/register', {
      //   username,
      //   email,
      //   password,
      // });
      let result = await axios.post('https://api-apollo.niceblue.my.id/api/authentication/register', {
        username,
        email,
        password,
      });

      if (result.status === 201) {
        setStatus(false);
      }
      setIsLoading(true);
      router.push('/authentication/login');
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    router.push('/home');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            minLength={6}
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="username">Username</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
          />
          <label htmlFor="password">Password</label>
        </div>
        <Button typeName={'submit'} title={'Sign Up'} class={'w-100 btn btn-lg btn-primary'} isLoading={isLoading} />
        <Button
          typeName={'button'}
          title={'Cancel'}
          class={'w-100 my-2 btn btn-lg btn-danger'}
          handleCancel={handleCancel}
        />
        <Link href="/authentication/login">Already have account ? Please Sign In</Link>
        <p className="mt-5 mb-3 text-body-secondary text-center">&copy; APOLLO PROJECT {getYear()}</p>
      </form>
    </>
  );
}
