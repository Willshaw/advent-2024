const readline = require("readline");

// import runs
import { run_1 } from "./1/index";

const provided_solution = parseInt(process.argv[2]);

const solutions: (() => void)[] = [];
solutions.push(run_1);

// get list of solution numbers
const solution_numbers = Object.keys(solutions).map((i) =>
  solutions[parseInt(i)].name.replace(/run_/, "")
);

const checkValidSolution = (i: number) => {
  return solution_numbers.includes("" + i);
};

const runSolution = (solution: number) => {
  if (!checkValidSolution(solution)) {
    console.log(`!! ${solution} is not a valid solution !!`);
    askForSolution();
  } else {
    console.log(`\n>> Running solution ${solution}\n`);
    solutions[solution_numbers.indexOf(solution + "")]();
    process.exit();
  }
};

const askForSolution = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    `Choose solution [${solution_numbers}]: `,
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
