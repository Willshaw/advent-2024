const readline = require("readline");

// import runs
import { run_1 } from "./1/index";
import { run as run_2 } from "./2/index";

const provided_solution = parseInt(process.argv[2]);

const solutions: (() => void)[] = [];
solutions.push(run_1);
solutions.push(run_2);

const checkValidSolution = (i: number) => {
  return i <= solutions.length && i > 0;
};

const runSolution = (solution: number) => {
  if (!checkValidSolution(solution)) {
    console.log(`!! ${solution} is not a valid solution !!`);
    askForSolution();
  } else {
    console.log(`\n>> Running solution ${solution}\n`);
    solutions[solution - 1]();
    process.exit();
  }
};

const askForSolution = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    `Choose solution (1 -> ${solutions.length}): `,
    function (solution: number) {
      // validate index
      rl.close();
      if (!checkValidSolution(solution)) {
        console.log("!! please choose a valid solution !!");
        askForSolution();
      }
      runSolution(solution);
    }
  );
};

if (!provided_solution || typeof provided_solution !== "number") {
  askForSolution();
} else {
  runSolution(provided_solution);
}
