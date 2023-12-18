function calculateDemeritPoints() {
    const speedLimit = 70;
    const pointsPerExcess = 5;
    const demeritPointsThreshold = 12;
    
    let speed = prompt("Enter the speed of the car!");
    // Check if speed is less than or equal to the speed limit
    if (speed <= speedLimit) {
      alert ("Ok");
    } else {
      // Calculate demerit points
      const excessSpeed = speed - speedLimit;
      //calculates and returns an integer for the demerit points
      const demeritPoints = Math.floor(excessSpeed / pointsPerExcess);
  
      // Output the demerit points
      alert (`Points: ${demeritPoints}`);
  
      // Check if the driver's license should be suspended
      if (demeritPoints > demeritPointsThreshold) {
        alert ("License suspended");
      }
    }
  }
  
  
  const carSpeed = 80;
  calculateDemeritPoints(carSpeed);