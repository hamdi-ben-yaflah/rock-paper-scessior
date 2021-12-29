import { ReactNode } from "react";

export type Status = "win" | "lose" | "tie";

export type PossibleChoice = "rock" | "paper" | "scissors";

export interface IResult {
  status: "success" | "error" | "warning";
  title: string;
}

export type IGameMode = "solo" | "auto" | "not-set";

export interface IScore {
  wins: number;
  loses: number;
}

export interface Choice {
  id: number;
  name: PossibleChoice;
  component: ReactNode;
  beats: number;
}
