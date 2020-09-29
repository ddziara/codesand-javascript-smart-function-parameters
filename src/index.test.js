import { topSalary } from "./index";

test("topSalaryPerson is Greg", () => {
  const salaries = {
    Linda: 430,
    Like: 360,
    Greg: 700
  };
  expect(topSalary(salaries)).toBe("Greg");
});
