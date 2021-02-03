// extra functionality filtering words we don't need
import { CREATE_POST } from "./types";
import { showAlert } from "./actions";

const forbidddenWords = ["fuck", "spam", "php"];

// function accerts dispatch
export function forbiddenWordsMiddlewear({ dispatch }) {
  return function (next) {
    return function (action) {
      // if we do action create post then
      if (action.type === CREATE_POST) {
        // let's find forbidden words
        console.log(action.payload)
        const found = forbidddenWords.filter((w) =>
          action.payload.title.includes(w)
        );
        if (found.length) {
          return dispatch(showAlert("You are spammer"));
        }
      }
      return next(action);
    };
  };
}
