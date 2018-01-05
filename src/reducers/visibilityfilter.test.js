import { SET_VISIBILITY_FILTER, SHOW_ALL} from '../constants/ActionTypes';
import reducer from './visibilityFilter';

describe('visibility filter reducer', () => {
  
 it('should handle visibility filter', () => {
    expect(
      reducer([], {
        type: SET_VISIBILITY_FILTER,
        filter: SHOW_ALL
      })
    ).toEqual(SHOW_ALL) 
  
  
});
});

