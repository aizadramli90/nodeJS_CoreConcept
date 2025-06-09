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


// asynchronous event handling
// OS operations are asynchronous, so we can use the event emitter to handle events asynchronously
// For example, we can emit an event when a file is read or written
// This allows us to handle events without blocking the main thread
// example: keyboard input, file read/write, network requests, etc.
// when keyboard key is pressed, for example, key 'a' is pressed,
// OS will call this thing an interrupt
