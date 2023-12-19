function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const pointsPerExcess = 5;
    const demeritPointsThreshold = 12;
    
    
    // Check if speed is less than or equal to the speed limit
    if (speed <= speedLimit) {
      console.log ("Ok");
    } else {
      // Calculate demerit points
      const excessSpeed = speed - speedLimit;
      //calculates and returns an integer for the demerit points
      const demeritPoints = Math.floor(excessSpeed / pointsPerExcess);
  
      // Output the demerit points
      console.log (`Points: ${demeritPoints}`);
  
      // Check if the driver's license should be suspended
      if (demeritPoints > demeritPointsThreshold) {
        console.log("License suspended");
      }
    }
  }
  
  
  const carSpeed = 80;
  calculateDemeritPoints(carSpeed);