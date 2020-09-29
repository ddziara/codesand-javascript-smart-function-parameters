import "./styles.css";

function f1({ param1: p1 = true, p2 = false }) {
  return `${p1 ? "Kola" : ""}${p2 ? "Lola" : ""}`;
}

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel       ${f1({ p2: true })}
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// [Tasks]

// Destructuring assignment
let user = { name: "John", years: 30 };

let { name, years: age, isAdmin = false } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false

// The maximal salary
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

export function topSalary(salaries) {
  let maxSalary = 0;
  let maxSalaryPerson = null;

  for (const [key, value] of Object.entries(salaries)) {
    if (value > maxSalary) {
      maxSalary = value;
      maxSalaryPerson = key;
    }
  }

  return maxSalaryPerson;
}

console.log(`top salary person = ${topSalary(salaries)}`);
