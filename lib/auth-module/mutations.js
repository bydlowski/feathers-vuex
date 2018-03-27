"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeAuthMutations;
function makeAuthMutations(feathers) {
  return {
    setAccessToken: function setAccessToken(state, payload) {
      state.accessToken = payload;
    },
    setPayload: function setPayload(state, payload) {
      state.payload = payload;
    },
    setUser: function setUser(state, payload) {
      state.user = payload;
    },
    setAuthenticatePending: function setAuthenticatePending(state) {
      state.isAuthenticatePending = true;
    },
    unsetAuthenticatePending: function unsetAuthenticatePending(state) {
      state.isAuthenticatePending = false;
    },
    setLogoutPending: function setLogoutPending(state) {
      state.isLogoutPending = true;
    },
    unsetLogoutPending: function unsetLogoutPending(state) {
      state.isLogoutPending = false;
    },
    setAuthenticateError: function setAuthenticateError(state, error) {
      state.errorOnAuthenticate = Object.assign({}, error);
    },
    clearAuthenticateError: function clearAuthenticateError(state) {
      state.errorOnAuthenticate = null;
    },
    setLogoutError: function setLogoutError(state, error) {
      state.errorOnLogout = Object.assign({}, error);
    },
    clearLogoutError: function clearLogoutError(state) {
      state.errorOnLogout = null;
    },
    logout: function logout(state) {
      state.payload = null;
      state.accessToken = null;
      if (state.user) {
        state.user = null;
      }
    }
  };
}
module.exports = exports["default"];