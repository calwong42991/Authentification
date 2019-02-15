import { userConstants } from '../_constants';

function login(username, password) {}

function logout() {}

function register(user) {}

function getAll() {}

function _delete(id) {}

export const userActions = {
  login,
  logout,
  register,
  getAll,
  delete: _delete
}