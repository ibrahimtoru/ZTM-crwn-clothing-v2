import { takeLatest, all, call, put } from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./category.actions";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export function* fetchCategoriesAsync() {
  try {
    // call key word turns a function into an effect
    // call takes twe params a method/fn and the args you'd pass to that fn
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    // put instead of dispatch
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  // takeLatest(param1, param2) param2 wait for param1 to happen, to exectecute
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all(
    // all() === run everything inside and only complete when it's done
    [call(onFetchCategories)]
  );
}
