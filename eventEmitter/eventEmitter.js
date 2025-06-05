import eventEmitter from "events"; // Import the events module

class MyEventEmitter extends eventEmitter {} // Create an instance of the event emitter

const myE = new MyEventEmitter(); // Instantiate the event emitter

myE.on("hello", () => {
  // Register a listener for the 'hello' event
  // This function will be called when the 'hello' event is emitted
  console.log("Hello Brader!"); // Log a message when the 'hello' event is emitted
});

myE.emit("hello");
// Emit the 'hello' event to trigger the listener
