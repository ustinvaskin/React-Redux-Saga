// extra functionality filtering words we don't need
import { CREATE_POST } from "./type";
import { showAlert } from "./actions";

const forbidddenWords = ["fuck", "spam", "php"];


// function accerts dispatch
export function forbiddenWordsMiddlewear({ dispatch }) {
  return function (next) {
    return function (action) {
        // if we do action create post then
      if (action.type === CREATE_POST) {
          // let's find forbidden words 
        const found = forbidddenWords.filter((w) =>
          action.payload.post.title.includes(w)
        );
        // if exists, then show alert with the text
        if (found.length) {
          return dispatch(showAlert(("You are spammer")));
        }
      }
      return next(action);
    };
  };
}
