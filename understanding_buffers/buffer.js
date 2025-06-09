//Encoders and Decoders
// Image encoders, video encoders, audio encoders, and text encoders?
// Image decoders, video decoders, audio decoders, and text decoders?

//Encoders
// take something human readable and convert it to a format that is not human readable which is binary

//Decoders
// take 0 and 1 and convert it to something human readable

//Character Encoding
// ASCII, UTF-8, UTF-16, UTF-32
// A sysytem of assigning a sequence of bytes (0s and 1s) to a character

// BUFFERS
// A container in memory.
// allocate a piece of our memory.
// A buffers acts like an array of bytes.
// example: _0_,_1_,_2_,_3_  4 bytes (32 bits) of memory, indexed from 0 to 3
// as soon as we create a buffer, all the elements in the buffer are initialized to 0
// In nodeJS, each element of buffers holds a byte, which is 8 bits.
// Buffer size is fixed, once we create a buffer, we cannot change its size.
// if we try to write more date than the allocated size, node will discard the extra data.
// Buufers are data structure, hold data
// specifically designed to hold binary data.
// A container that has been allocated in memory to us only