const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

function chooseStations(stations) {
  let goodStations = [];
  for (const station of stations) {
    //console.log(station);
    const capacity = station[1];
    const venue = station[2];
    const name = station[0];
    if (
      capacity >= 20 &&
      (venue === "school" || venue === "community centre")
    ) {
      //console.log(station);
      goodStations.push(station[0]);
    }
  }
  console.log(goodStations);
  return goodStations;
}

chooseStations(stations);
