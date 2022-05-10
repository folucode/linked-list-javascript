const LinkedList = require('./LinkedList');

const dogBreeds = new LinkedList();

dogBreeds.addToHead('Bulldog');
dogBreeds.addToHead('German Shepard');

dogBreeds.addToTail('Poodle');
dogBreeds.addToTail('Boxer');

dogBreeds.removeHead();

dogBreeds.printList();
