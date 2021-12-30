import { Choice, IResult, Status } from "../typings/game";

const StatusResut: Record<string, IResult> = {
  win: { status: "success", title: "You Win" },
  lose: { status: "error", title: "You Lose" },
  tie: { status: "warning", title: "Tie" },
};

const compare = (playerOneChoice: Choice, playerTwoChoice: Choice): Status => {
  if (playerOneChoice.id === playerTwoChoice.id) return "tie";
  if (playerOneChoice.beats === playerTwoChoice.id) return "win";
  return "lose";
};

const mapStatusToResut = (status: Status): IResult => {
  return {
    status: StatusResut[status].status,
    title: StatusResut[status].title,
  };
};

export { compare, mapStatusToResut };
