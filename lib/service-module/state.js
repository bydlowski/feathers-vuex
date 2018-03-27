"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeDefaultState;
function makeDefaultState(servicePath, _ref) {
  var idField = _ref.idField,
      autoRemove = _ref.autoRemove,
      paginate = _ref.paginate;

  var state = {
    ids: [],
    keyedById: {},
    currentId: null,
    copy: null,
    idField: idField,
    servicePath: servicePath,
    autoRemove: autoRemove,
    pagination: {},

    isFindPending: false,
    isGetPending: false,
    isCreatePending: false,
    isUpdatePending: false,
    isPatchPending: false,
    isRemovePending: false,

    errorOnFind: null,
    errorOnGet: null,
    errorOnCreate: null,
    errorOnUpdate: null,
    errorOnPatch: null,
    errorOnRemove: null
  };
  return state;
}
module.exports = exports["default"];