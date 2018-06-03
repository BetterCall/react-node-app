import {FETCH_BOOKS_SUCCESS} from '../types'

//Selectors
import {createSelector} from 'reselect'

export default function books( state = {} , action = {}) {

  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:

      break;
    default: return state

  }
}

// Selectors
export const booksSelector = state => state.books

export const allBooksSelector = createSelector(
  booksSelector,
  booksHash => Object.values(booksHash)
)
