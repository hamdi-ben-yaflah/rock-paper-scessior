import { IChoice } from "../typings/game";
import { getPlayerOneStatus, mapStatusToIResut } from "./utils";

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
    expect(getPlayerOneStatus(rock, rock)).toBe("tie");
    expect(getPlayerOneStatus(paper, paper)).toBe("tie");
    expect(getPlayerOneStatus(scissors, scissors)).toBe("tie");
  });

  it("should return win if choice one is rock and choice two is scessior", () => {
    expect(getPlayerOneStatus(rock, scissors)).toBe("win");
  });

  it("should return win if choice one is paper and choice two is rock", () => {
    expect(getPlayerOneStatus(paper, rock)).toBe("win");
  });

  it("should return win if choice one is scissors and choice two is paper", () => {
    expect(getPlayerOneStatus(scissors, paper)).toBe("win");
  });

  it("should return lose if choice one is rock and choice two is paper", () => {
    expect(getPlayerOneStatus(rock, paper)).toBe("lose");
  });
  it("should return lose if choice one is paper and choice two is scissors", () => {
    expect(getPlayerOneStatus(paper, scissors)).toBe("lose");
  });
  it("should return lose if choice one is scissors and choice two is rock", () => {
    expect(getPlayerOneStatus(scissors, rock)).toBe("lose");
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
