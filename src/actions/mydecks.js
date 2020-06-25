// @flow

import * as actionTypes from "constants/actionTypes";

import type {
  DisplayGrid,
  DisplayList,
  SortAlphanum,
  SortTag,
} from "constants/actionTypes";

type DisplayGridAction = {
  type: DisplayGrid,
};

export const displayGrid = (): DisplayGridAction => ({
  type: actionTypes.DISPLAY_GRID,
});

type DisplayListAction = {
  type: DisplayList,
};

export const displayList = (): DisplayListAction => ({
  type: actionTypes.DISPLAY_LIST,
});

type SortAlphanumAction = {
  type: SortAlphanum,
};

export const sortAlphanum = (): SortAlphanumAction => ({
  type: actionTypes.SORT_ALPHANUM,
});

type SortTagAction = {
  type: SortTag,
};

export const sortTag = (): SortTagAction => ({
  type: actionTypes.SORT_TAG,
});

export type MyDecksAction =
  | DisplayGridAction
  | DisplayListAction
  | SortAlphanumAction
  | SortTagAction;
