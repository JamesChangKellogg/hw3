function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  // the 'ride' variable contains data about a random ride (i.e. when the page)
  // is refreshed or reloaded, the 'ride' variable will contain something different
  // to get started, try to write other parts of 'ride' to the JavaScript console in Chrome
  // e.g. ask 'ride' for its length or only grab the first member of the Array
  console.log(ride)

  // DEFAULT LEVEL OF SERVICE = NOOBER X
  levelOfService = "Noober X"

  // If ride contains 1 passenger request
  if (ride.length==1) { 
    // Request 1: Output variables as strings
    passenger1Name = `${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}`// Display Passsenger Name
    passenger1Phone = `${ride[0].passengerDetails.phoneNumber}` // Show Phone #
    passenger1NumberOfPassengers = `${ride[0].numberOfPassengers}` // Show # of passengers
    passenger1PickupAddressLine1 = `${ride[0].pickupLocation.address}` // Show Street address
    passenger1PickupAddressLine2 = `${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}` // Show City, State, Zip
    passenger1DropoffAddressLine1 = `${ride[0].dropoffLocation.address}` // Show Street address
    passenger1DropoffAddressLine2 = `${ride[0].dropoffLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}` // Show City, State, Zip
      
  // Revise 'levelOfService' if necessary
      // if # purple requested, set 'Noober Purple'
      if (ride[0].purpleRequested == true) {
        levelOfService = 'Noober Purple'    
      }
      // If # of passengers > 3, display 'Noober XL'
      else if (passenger1NumberOfPassengers > 3) {
      levelOfService = 'Noober XL'      
    }
      else levelOfService = 'Noober X'
  }

  // If ride contains 2 passenger requests
  if (ride.length==2) { 
    // Request 1: Output variables as strings
    passenger1Name = `${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}`// Display Passsenger Name
    passenger1Phone = `${ride[0].passengerDetails.phoneNumber}` // Show Phone #
    passenger1NumberOfPassengers = `${ride[0].numberOfPassengers}` // Show # of passengers
    passenger1PickupAddressLine1 = `${ride[0].pickupLocation.address}` // Show Street address
    passenger1PickupAddressLine2 = `${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}` // Show City, State, Zip
    passenger1DropoffAddressLine1 = `${ride[0].dropoffLocation.address}` // Show Street address
    passenger1DropoffAddressLine2 = `${ride[0].dropoffLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}` // Show City, State, Zip

    // Request 2: Output variables as strings
    passenger2Name = `${ride[1].passengerDetails.first} ${ride[1].passengerDetails.last}`// Display Passsenger Name
    passenger2Phone = `${ride[1].passengerDetails.phoneNumber}` // Show Phone #
    passenger2NumberOfPassengers = `${ride[1].numberOfPassengers}` // Show # of passengers
    passenger2PickupAddressLine1 = `${ride[1].pickupLocation.address}` // Show Street address
    passenger2PickupAddressLine2 = `${ride[1].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}` // Show City, State, Zip
    passenger2DropoffAddressLine1 = `${ride[1].dropoffLocation.address}` // Show Street address
    passenger2DropoffAddressLine2 = `${ride[1].dropoffLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}` // Show City, State, Zip
      
  // Revise 'levelOfService'to 'Noober Pool'
    levelOfService = "Noober Pool"
  }

  // If ride contains 3 passenger requests
    if (ride.length==3) { 
      // Request 1: Output variables as strings
      passenger1Name = `${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}`// Display Passsenger Name
      passenger1Phone = `${ride[0].passengerDetails.phoneNumber}` // Show Phone #
      passenger1NumberOfPassengers = `${ride[0].numberOfPassengers}` // Show # of passengers
      passenger1PickupAddressLine1 = `${ride[0].pickupLocation.address}` // Show Street address
      passenger1PickupAddressLine2 = `${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}` // Show City, State, Zip
      passenger1DropoffAddressLine1 = `${ride[0].dropoffLocation.address}` // Show Street address
      passenger1DropoffAddressLine2 = `${ride[0].dropoffLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}` // Show City, State, Zip
  
      // Request 2: Output variables as strings
      passenger2Name = `${ride[1].passengerDetails.first} ${ride[1].passengerDetails.last}`// Display Passsenger Name
      passenger2Phone = `${ride[1].passengerDetails.phoneNumber}` // Show Phone #
      passenger2NumberOfPassengers = `${ride[1].numberOfPassengers}` // Show # of passengers
      passenger2PickupAddressLine1 = `${ride[1].pickupLocation.address}` // Show Street address
      passenger2PickupAddressLine2 = `${ride[1].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}` // Show City, State, Zip
      passenger2DropoffAddressLine1 = `${ride[1].dropoffLocation.address}` // Show Street address
      passenger2DropoffAddressLine2 = `${ride[1].dropoffLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}` // Show City, State, Zip

      // Request 3: Output variables as strings
      passenger3Name = `${ride[2].passengerDetails.first} ${ride[2].passengerDetails.last}`// Display Passsenger Name
      passenger3Phone = `${ride[2].passengerDetails.phoneNumber}` // Show Phone #
      passenger3NumberOfPassengers = `${ride[2].numberOfPassengers}` // Show # of passengers
      passenger3PickupAddressLine1 = `${ride[2].pickupLocation.address}` // Show Street address
      passenger3PickupAddressLine2 = `${ride[2].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}` // Show City, State, Zip
      passenger3DropoffAddressLine1 = `${ride[2].dropoffLocation.address}` // Show Street address
      passenger3DropoffAddressLine2 = `${ride[2].dropoffLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}` // Show City, State, Zip
    // Revise 'levelOfService'to 'Noober Pool'
      levelOfService = "Noober Pool"
    }


  // these variables map to the elements on the finished page;
  // assign the proper value to each variable

  // levelOfService
  // passenger1Name, passenger1Phone, passenger1NumberOfPassengers
  // passenger1PickupAddressLine1, passenger1PickupAddressLine2
  // passenger1DropoffAddressLine1, passenger1DropoffAddressLine2

  // passenger2Name, passenger2Phone, passenger2NumberOfPassengers
  // passenger2PickupAddressLine1, passenger2PickupAddressLine2
  // passenger2DropoffAddressLine1, passenger2DropoffAddressLine2

  // passenger3Name, passenger3Phone, passenger3NumberOfPassengers
  // passenger3PickupAddressLine1, passenger3PickupAddressLine2
  // passenger3DropoffAddressLine1, passenger3DropoffAddressLine2
  
  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
}