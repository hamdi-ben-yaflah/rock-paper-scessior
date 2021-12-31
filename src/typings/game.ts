import { ReactNode } from "react";

export type Status = "win" | "lose" | "tie" | "not-set";

export type PossibleChoice = "rock" | "paper" | "scissors";

export type IGameMode = "solo" | "auto" | "not-set";
export interface IResult {
  status: "success" | "error" | "warning";
  title: string;
}

export interface IScore {
  wins: number;
  loses: number;
}
export interface IChoice {
  id: number;
  name: PossibleChoice;
  component: ReactNode;
  beats: number;
}
