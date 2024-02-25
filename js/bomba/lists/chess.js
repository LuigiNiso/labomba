var solutions = [
  {

    white: [
      { piece: 2, cell: 49 },
      { piece: 3, cell: 60 },
    ],
    black: [
      { piece: 1, cell: 48 },
      { piece: 5, cell: 5 },
      { piece: 0, cell: 8 },
      { piece: 0, cell: 9 },
      { piece: 0, cell: 10 },
      { piece: 0, cell: 13 },
      { piece: 0, cell: 14 },
      { piece: 0, cell: 15 },
    ],
    moves: [
      {
        piece: 2,
        prevCell: 49,
        currentCell: 40,
        player: "white",
        notation: "Bh6+",
        king: 5,
      },
      {
        piece: 1,
        prevCell: 48,
        currentCell: 33,
        player: "black",
        notation: "Ng5",
        king: 5,
      },
      {
        piece: 2,
        prevCell: 40,
        currentCell: 33,
        player: "white",
        notation: "Bxg5+",
        king: 5,
      },
      {
        piece: 0,
        prevCell: 10,
        currentCell: 26,
        player: "black",
        notation: "f4",
        king: 5,
      },
      {
        piece: 2,
        prevCell: 33,
        currentCell: 26,
        player: "white",
        notation: "Bxf4+",
        king: 5,
      },
      {
        piece: 5,
        prevCell: 5,
        currentCell: 6,
        player: "black",
        notation: "Kb1+",
        king: 6,
      },
      {
        piece: 3,
        prevCell: 60,
        currentCell: 4,
        player: "white",
        notation: "Rd1#",
        king: 6,
      },
    ],
  },
  {
    white: [
      { piece: 0, cell: 40 },
      { piece: 3, cell: 9 },
      { piece: 1, cell: 35 },
      { piece: 0, cell: 41 },
    ],
    black: [
      { piece: 5, cell: 25 },
      { piece: 0, cell: 17 },
      { piece: 4, cell: 20 },
    ],
    moves: [
      {
        piece: 0,
        prevCell: 40,
        currentCell: 32,
        player: "white",
        notation: "h5+",
        king: 25,
      },
      {
        piece: 5,
        prevCell: 25,
        currentCell: 18,
        player: "black",
        notation: "Kf3",
        king: 18,
      },
      {
        piece: 3,
        prevCell: 9,
        currentCell: 17,
        player: "white",
        notation: "Rxg3+",
        king: 18,
      },
      {
        piece: 5,
        prevCell: 18,
        currentCell: 27,
        player: "black",
        notation: "Ke4",
        king: 27,
      },
      {
        piece: 3,
        prevCell: 17,
        currentCell: 20,
        player: "white",
        notation: "Rxd3#",
        king: 27,
      },
    ],
  },
  {
    white: [
      { piece: 2, cell: 46 },
      { piece: 0, cell: 39 },
      { piece: 0, cell: 32 },
      { piece: 5, cell: 10 },
    ],
    black: [
      { piece: 3, cell: 4 },
      { piece: 2, cell: 0 },
      { piece: 5, cell: 8 },
      { piece: 0, cell: 16 },
      { piece: 1, cell: 19 },
      { piece: 3, cell: 27 },
    ],
    moves: [
      {
        piece: 2,
        prevCell: 46,
        currentCell: 53,
        player: "white",
        notation: "bc7+",
        king: 8,
      },
      {
        piece: 3,
        prevCell: 4,
        currentCell: 44,
        player: "black",
        notation: "rd6",
        king: 8,
      },
      {
        piece: 2,
        prevCell: 53,
        currentCell: 44,
        player: "white",
        notation: "bxd6+",
        king: 8,
      },
      {
        piece: 3,
        prevCell: 27,
        currentCell: 26,
        player: "black",
        notation: "rf4",
        king: 8,
      },
      {
        piece: 2,
        prevCell: 44,
        currentCell: 26,
        player: "white",
        notation: "bxf4#",
        king: 8,
      },
    ],
  },
  {
    white: [
      { piece: 4, cell: 37 },
      { piece: 3, cell: 58 },
      { piece: 5, cell: 56 },
    ],
    black: [
      { piece: 5, cell: 1 },
      { piece: 0, cell: 8 },
      { piece: 0, cell: 9 },
      { piece: 0, cell: 10 },
      { piece: 3, cell: 5 },
    ],
    moves: [
      {
        piece: 4,
        prevCell: 37,
        currentCell: 10,
        player: "white",
        notation: "Qxf2+",
        king: 1,
      },
      {
        piece: 5,
        prevCell: 1,
        currentCell: 0,
        player: "black",
        notation: "Kh1",
        king: 0,
      },
      {
        piece: 4,
        prevCell: 10,
        currentCell: 2,
        player: "white",
        notation: "Qf1",
        king: 0,
      },
      {
        piece: 3,
        prevCell: 5,
        currentCell: 2,
        player: "black",
        notation: "rxf1",
        king: 0,
      },
      {
        piece: 3,
        prevCell: 58,
        currentCell: 2,
        player: "white",
        notation: "Rxf1#",
        king: 0,
      },
    ],
  },
  {
  white: [
    { piece: 2, cell: 44 },
    { piece: 4, cell: 53 },
    { piece: 1, cell: 32 },
    { piece: 0, cell: 28 },
  ],
  black: [
    { piece: 1, cell: 12 },
    { piece: 0, cell: 27 },
    { piece: 0, cell: 20 },
    { piece: 0, cell: 18 },
    { piece: 0, cell: 17 },
    { piece: 0, cell: 8 },
    { piece: 5, cell: 3 },
    { piece: 4, cell: 4 },
  ],
  moves: [
    {
      piece: 2,
      prevCell: 44,
      currentCell: 17,
      player: "white",
      notation: "Bxg3+",
      king: 3,
    },
    {
      piece: 0,
      prevCell: 8,
      currentCell: 17,
      player: "black",
      notation: "xg3",
      king: 3,
    },
    {
      piece: 4,
      prevCell: 53,
      currentCell: 17,
      player: "white",
      notation: "Qxg3+",
      king: 3,
    },
    {
      piece: 5,
      prevCell: 3,
      currentCell: 11,
      player: "black",
      notation: "Ke2",
      king: 11,
    },
    {
      piece: 1,
      prevCell: 32,
      currentCell: 26,
      player: "white",
      notation: "Nf4#",
      king: 11,
    },
  ],
  },
  {
    white: [
      { piece: 2, cell: 38 },
      { piece: 4, cell: 53 },
      { piece: 3, cell: 61 },
    ],
    black: [
      { piece: 3, cell: 0 },
      { piece: 3, cell: 5 },
      { piece: 5, cell: 6 },
      { piece: 0, cell: 14 },
      { piece: 0, cell: 15 },
    ],
    moves: [
      {
        piece: 2,
        prevCell: 38,
        currentCell: 20,
        player: "white",
        notation: "Bd3+",
        king: 6,
      },
      {
        piece: 3,
        prevCell: 5,
        currentCell: 13,
        player: "black",
        notation: "Rc2",
        king: 6,
      },
      {
        piece: 4,
        prevCell: 53,
        currentCell: 13,
        player: "white",
        notation: "Qxc2+",
        king: 6,
      },
      {
        piece: 5,
        prevCell: 6,
        currentCell: 7,
        player: "black",
        notation: "Ka8",
        king: 7,
      },
      {
        piece: 4,
        prevCell: 13,
        currentCell: 5,
        player: "white",
        notation: "Qc1+",
        king: 7,
      },
      {
        piece: 3,
        prevCell: 0,
        currentCell: 5,
        player: "white",
        notation: "Rfc1",
        king: 7,
      },
      {
        piece: 4,
        prevCell: 61,
        currentCell: 5,
        player: "white",
        notation: "Rxc1#",
        king: 7,
      },
    ],
  },
  {
    white: [
      { piece: 3, cell: 60 },
      { piece: 2, cell: 40 },
    ],
    black: [
      { piece: 3, cell: 4 },
      { piece: 5, cell: 6 },
      { piece: 0, cell: 13 },
      { piece: 0, cell: 22 },
      { piece: 0, cell: 15 },
    ],
    moves: [
      {
        piece: 3,
        prevCell: 60,
        currentCell: 4,
        player: "white",
        notation: "Rxd1+",
        king: 6,
      },
      {
        piece: 5,
        prevCell: 6,
        currentCell: 14,
        player: "black",
        notation: "Kb2",
        king: 14,
      },
      {
        piece: 2,
        prevCell: 40,
        currentCell: 5,
        player: "white",
        notation: "Bc1+",
        king: 14,
      },
      {
        piece: 5,
        prevCell: 14,
        currentCell: 6,
        player: "black",
        notation: "Kb1",
        king: 6,
      },
      {
        piece: 2,
        prevCell: 5,
        currentCell: 23,
        player: "white",
        notation: "Ba3#",
        king: 6,
      },
    ],
  },
  {
    white: [
      { piece: 4, cell: 60 },
      { piece: 3, cell: 56 },
      { piece: 2, cell: 28 },
    ],
    black: [
      { piece: 5, cell: 0 },
      { piece: 2, cell: 9 },
      { piece: 2, cell: 26 },
      { piece: 0, cell: 8 },
      { piece: 0, cell: 17 },
    ],
    moves: [
      {
        piece: 3,
        prevCell: 56,
        currentCell: 8,
        player: "white",
        notation: "Rxh2+",
        king: 0,
      },
      {
        piece: 5,
        prevCell: 0,
        currentCell: 8,
        player: "black",
        notation: "Kxh2",
        king: 8,
      },
      {
        piece: 4,
        prevCell: 60,
        currentCell: 56,
        player: "white",
        notation: "Qh8+",
        king: 8,
      },
      {
        piece: 2,
        prevCell: 26,
        currentCell: 40,
        player: "black",
        notation: "Bh6",
        king: 8,
      },
      {
        piece: 4,
        prevCell: 56,
        currentCell: 40,
        player: "white",
        notation: "Qxh6#",
        king: 8,
      },
    ],
  },
  {
    white: [
      { piece: 3, cell: 56 },
      { piece: 1, cell: 33 },
      { piece: 1, cell: 18 },
      { piece: 0, cell: 25 },
    ],
    black: [
      { piece: 5, cell: 9 },
      { piece: 3, cell: 19 },
      { piece: 2, cell: 11 },
      { piece: 0, cell: 17 },
    ],
    moves: [
      {
        piece: 3,
        prevCell: 56,
        currentCell: 8,
        player: "white",
        notation: "Rh2+",
        king: 9,
      },
      {
        piece: 5,
        prevCell: 9,
        currentCell: 2,
        player: "black",
        notation: "Kf1",
        king: 2,
      },
      {
        piece: 3,
        prevCell: 8,
        currentCell: 0,
        player: "white",
        notation: "Rh1+",
        king: 2,
      },
      {
        piece: 5,
        prevCell: 2,
        currentCell: 9,
        player: "black",
        notation: "Kg2",
        king: 9,
      },
      {
        piece: 3,
        prevCell: 0,
        currentCell: 1,
        player: "white",
        notation: "Rg1+",
        king: 9
      },
      {
        piece: 5,
        prevCell: 9,
        currentCell: 10,
        player: "black",
        notation: "Kf2",
        king: 10,
      },
      {
        piece: 1,
        prevCell: 33,
        currentCell: 16,
        player: "white",
        notation: "Nh3#",
        king: 10,
      },
    ],
  },
];

var pieces = ["p", "N", "B", "R", "Q", "K"];