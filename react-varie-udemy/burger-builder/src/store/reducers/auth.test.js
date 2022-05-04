import reducer from './auth';
import actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userID: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        })
    })
});