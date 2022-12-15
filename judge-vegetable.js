const judgeVegetable = function (vegetables, metric) {
  let best = vegetables[1];
  for (const people of vegetables) {
    if (people[metric] > best[metric]) {
      best = people;
    }
  }
  return best.submitter;
};
const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";

console.log(judgeVegetable(vegetables, metric));
