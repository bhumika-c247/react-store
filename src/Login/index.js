import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './login.scss';
const Login = () => {
  const [inputs, setInputs] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({ usernameErr: '', passwordErr: '' });
  const history = useHistory();

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: null,
    });
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      history.push('/category');
    }
    // eslint-disable-next-line
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = inputs;
    // if (username === '' && password === '') {
    //   setErrors({
    //     usernameErr: 'Username is required',
    //     passwordErr: 'Password is required',
    //   });
    // } else if (username === '') {
    //   setErrors({
    //     usernameErr: 'Username is required',
    //     // passwordErr: 'Password is required',
    //   });
    // } else if (password === '') {
    //   setErrors({
    //     usernameErr: 'Username is required',
    //     passwordErr: 'Password is required',
    //   });
    // } else {
    //   setErrors({
    //     usernameErr: '',
    //     passwordErr: '',
    //   });
    // }

    try {
      const { data } = await axios.post('/auth/login', {
        username: username,
        password: password,
      });
      if (data && data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', username);
        history.push('/category');
      } else {
        alert(data.msg);
      }
    } catch (error) {
    } finally {
      // setIsLoading(false);
    }
  };
  const { username, password } = inputs;
  const { usernameErr, passwordErr } = errors;
  console.log(
    'errorserrorserrorserrorserrorserrorserrorserrorserrorserrors--------------',
    errors
  );
  return (
    <>
      <div className='wrapper'>
        <div className='form'>
          <div className='title'>Login to Trendy Store</div>
          <form onSubmit={onSubmit}>
            <div className='input_wrap'>
              <label htmlFor='input_text'>Username</label>
              <div className='input_field'>
                <input
                  type='text'
                  className='input'
                  id='input_text'
                  name='username'
                  value={username}
                  onChange={handleChange}
                />
              </div>
              <span className='error_msg'>{usernameErr}</span>
            </div>
            <div className='input_wrap'>
              <label htmlFor='input_password'>Password</label>
              <div className='input_field'>
                <input
                  type='password'
                  className='input'
                  id='input_password'
                  name='password'
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <span className='error_msg'>{passwordErr}</span>
            </div>
            <div className='input_wrap'>
              {/* <span className='error_msg'>
                Incorrect username or password. Please try again
              </span> */}
              <input
                type='submit'
                id='login_btn'
                className={'btn enabled'}
                value='Login'
                // disabled={username || password === '' ? 'btn disabled' : 'btn enabled'}
                // onClick={onLogin}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
