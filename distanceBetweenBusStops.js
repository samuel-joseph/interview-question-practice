// A bus has n stops numbered from 0 to n - 1 that form a circle. We know the distance between all pairs of neighboring stops where distance[i] is the distance between the stops number i and (i + 1) % n.

// The bus goes along both directions i.e. clockwise and counterclockwise.

// Return the shortest distance between the given start and destination stops.

// Input: distance = [1,2,3,4], start = 0, destination = 1
// Output: 1
// Explanation: Distance between 0 and 1 is 1 or 9, minimum is 1.

var distanceBetweenBusStops = function (distance, start, destination) {
  let totalDistance = 0;
  let clockwiseDistance = 0;
  for (let i = 0; i < distance.length; i++) {
    if (start < destination && i >= start && i < destination) {
      clockwiseDistance += distance[i];
    }
    if (start > destination && (i >= start || i < destination)) {
      clockwiseDistance += distance[i];
    }

    totalDistance += distance[i];
  }

  return Math.min(clockwiseDistance, totalDistance - clockwiseDistance);
};

console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 3));
