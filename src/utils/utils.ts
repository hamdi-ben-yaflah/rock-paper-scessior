import { Choice, IResult, Status } from "../typings/game";

const StatusResut: Record<string, IResult> = {
  win: { status: "success", title: "You Win" },
  lose: { status: "error", title: "You Lose" },
  tie: { status: "warning", title: "Tie" },
};

const winner = (player1Choice: Choice, player2Choice: Choice): Status => {
  if (player1Choice.id === player2Choice.id) return "tie";
  if (player1Choice.beats === player2Choice.id) return "win";
  return "lose";
};

const mapStatusToResut = (status: Status): IResult => {
  return {
    status: StatusResut[status].status,
    title: StatusResut[status].title,
  };
};

export { winner, mapStatusToResut };
