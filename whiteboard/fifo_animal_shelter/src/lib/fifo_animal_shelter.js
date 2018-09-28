'use strict';

// development notes:
//   conceptualizing stacks and queues as arrays:
//     - push method pushes to 'end of array'
//     - pop method removes from 'end of array'
//     - unshift inserts at 'front of array'
//     - shift removes at 'front of array'
//   Stack
//     - in a normal case a stack would work as LIFO
//   Queue
//     - in a normal case a queue would work as FIFO

let AnimalShelter = {};

class Queue {
  constructor() {
    // shelter = queue in which cats/dogs will be taken out of FIFO without passing *perf
    this.shelter = []; // to enqueue
    // ticketNumber = order to default to when cat or dog is passed as *perf
    this.ticketNumber = 0;
  }

  get appointmentNumber() {
    this.ticketNumber += 1;
    return this.ticketNumber;
  }

  setAppointment() {
    return this.ticketNumber;
  }

  enqueue(value) {
    this.setAppointment();
    return this.shelter.unshift(value);
  }

  dequeue(perf) { // O(n^3)
    let beenHereTheLongest = null;
    let toRemove = null;
    // create a new array of cats with filter next appointment
    if (perf) {
      const animals = this.shelter.filter((animal) => { // O(n)
        return animal.type === perf;
      });
      animals.sort((a, b) => { // O(n)
        return b.placeInLine > a.placeInLine;
      });
      beenHereTheLongest = animals.pop();
      toRemove = this.shelter.indexOf(beenHereTheLongest); // O(1)
      return this.shelter.splice(toRemove, 1); // O(n)
    }
    return this.shelter.pop();
  }
}

AnimalShelter = new Queue();
// uncomment these for testing and or debugging
// AnimalShelter.enqueue({ type: 'cat', name: 'betsy', placeInLine: AnimalShelter.appointmentNumber });
// AnimalShelter.enqueue({ type: 'cat', name: 'tom', placeInLine: AnimalShelter.appointmentNumber });
// AnimalShelter.enqueue({ type: 'dog', name: 'cindy', placeInLine: AnimalShelter.appointmentNumber });
// AnimalShelter.enqueue({ type: 'dog', name: 'alex', placeInLine: AnimalShelter.appointmentNumber });
// AnimalShelter.enqueue({ type: 'cat', name: 'paul', placeInLine: AnimalShelter.appointmentNumber });
// AnimalShelter.enqueue({ type: 'dog', name: 'frank', placeInLine: AnimalShelter.appointmentNumber });
// AnimalShelter.dequeue('dog');

module.exports = AnimalShelter;
