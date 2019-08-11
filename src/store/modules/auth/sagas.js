import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signFailure, signUpSuccess } from './actions';
import { toast } from 'react-toastify';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    toast.success('Conta criada com sucesso, favor efetuar o login');

    yield put(signUpSuccess());

    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados');
    yield put(signFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
