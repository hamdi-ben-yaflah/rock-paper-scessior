import { IChoice } from "../typings/game";
import { compare, mapStatusToIResut } from "./utils";

describe("compare", () => {
  const rock: IChoice = {
    id: 1,
    name: "rock",
    component: null,
    beats: 3,
  };
  const paper: IChoice = {
    id: 2,
    name: "paper",
    component: null,
    beats: 1,
  };
  const scissors: IChoice = {
    id: 3,
    name: "scissors",
    component: null,
    beats: 2,
  };

  it("should return tie when both arguments are equal", () => {
    expect(compare(rock, rock)).toBe("tie");
    expect(compare(paper, paper)).toBe("tie");
    expect(compare(scissors, scissors)).toBe("tie");
  });

  it("should return win if choice one is rock and choice two is scessior", () => {
    expect(compare(rock, scissors)).toBe("win");
  });

  it("should return win if choice one is paper and choice two is rock", () => {
    expect(compare(paper, rock)).toBe("win");
  });

  it("should return win if choice one is scissors and choice two is paper", () => {
    expect(compare(scissors, paper)).toBe("win");
  });

  it("should return lose if choice one is rock and choice two is paper", () => {
    expect(compare(rock, paper)).toBe("lose");
  });
  it("should return lose if choice one is paper and choice two is scissors", () => {
    expect(compare(paper, scissors)).toBe("lose");
  });
  it("should return lose if choice one is scissors and choice two is rock", () => {
    expect(compare(scissors, rock)).toBe("lose");
  });
});

describe("mapStatusToResult", () => {
  it("should map to win result", () => {
    expect(mapStatusToIResut("win")).toEqual({
      status: "success",
      title: "You Win",
    });
  });
  it("should map to lose result", () => {
    expect(mapStatusToIResut("lose")).toEqual({
      status: "error",
      title: "You Lose",
    });
  });
  it("should map to tie result", () => {
    expect(mapStatusToIResut("tie")).toEqual({
      status: "warning",
      title: "Tie",
    });
  });
});
