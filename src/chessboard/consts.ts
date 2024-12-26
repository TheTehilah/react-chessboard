import { BoardPosition } from "./types";

export const COLUMNS = "abcdefgh".split("");

// export const START_POSITION_OBJECT: BoardPosition = {
//   a8: "bR",
//   b8: "bN",
//   c8: "bB",
//   d8: "bQ",
//   e8: "bK",
//   f8: "bB",
//   g8: "bN",
//   h8: "bR",
//   a7: "bP",
//   b7: "bP",
//   c7: "bP",
//   d7: "bP",
//   e7: "bP",
//   f7: "bP",
//   g7: "bP",
//   h7: "bP",
//   a2: "wP",
//   b2: "wP",
//   c2: "wP",
//   d2: "wP",
//   e2: "wP",
//   f2: "wP",
//   g2: "wP",
//   h2: "wP",
//   a1: "wR",
//   b1: "wN",
//   c1: "wB",
//   d1: "wQ",
//   e1: "wK",
//   f1: "wB",
//   g1: "wN",
//   h1: "wR",
// };

export const START_POSITION_OBJECT: BoardPosition = {
  b8: "wCheckersKing",
  d8: "wCheckersMan",
  f8: "wCheckersMan",
  h8: "wCheckersMan",
  a7: "wCheckersMan",
  c7: "wCheckersMan",
  e7: "wCheckersMan",
  g7: "wCheckersMan",
  b6: "wCheckersMan",
  d6: "wCheckersMan",
  f6: "wCheckersMan",
  h6: "wCheckersMan",
  a3: "bCheckersMan",
  c3: "bCheckersMan",
  e3: "bCheckersMan",
  g3: "bCheckersMan",
  b2: "bCheckersMan",
  d2: "bCheckersMan",
  f2: "bCheckersMan",
  h2: "bCheckersMan",
  a1: "bCheckersMan",
  c1: "bCheckersMan",
  e1: "bCheckersMan",
  g1: "bCheckersMan",
};

export const WHITE_COLUMN_VALUES: { [col in string]: number } = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
};
export const BLACK_COLUMN_VALUES: { [col in string]: number } = {
  a: 7,
  b: 6,
  c: 5,
  d: 4,
  e: 3,
  f: 2,
  g: 1,
  h: 0,
};

export const WHITE_ROWS = [7, 6, 5, 4, 3, 2, 1, 0];
export const BLACK_ROWS = [0, 1, 2, 3, 4, 5, 6, 7];
