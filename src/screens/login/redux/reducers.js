import produce from 'immer';
import {assign} from 'lodash-es';
import {LOGIN, FETCHING_TOKEN, LOGIN_FAILURE} from '.';

const INITIAL_STATE = {
  isFetchingToken: false,
  response: undefined,
  loginError: undefined,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return produce(state, nextState =>
        assign(nextState, {
          response: action.response,
        }),
      );
    case FETCHING_TOKEN:
      return produce(state, nextState =>
        assign(nextState, {
          isFetchingToken: action.isFetchingToken,
        }),
      );
    case LOGIN_FAILURE:
      return produce(state, nextState =>
        assign(nextState, {
          loginError: action.loginError,
        }),
      );
    default:
      return state;
  }
};
