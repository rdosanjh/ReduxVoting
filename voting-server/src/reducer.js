import {setEntries, next, vote, INITIAL_STATE} from './core';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_ENTRIES':
    console.log('SET_ENTRIES');
      return setEntries(state, action.entries);
    case 'NEXT':
    console.log('NEXT');
      return next(state);
    case 'VOTE':
    console.log('VOTE');
      return state.update('vote',
        voteState => vote(voteState, action.entry));
  }
  return state;
}