Node.js Architecture

Node.js follows an event-driven, non-blocking, single-threaded architecture designed to handle multiple client requests efficiently.

Key points:

Uses a single main thread to execute JavaScript code

Heavy or blocking tasks are offloaded to background systems

Built on top of the V8 engine and libuv

Best suited for I/O-intensive applications

Working:

JavaScript runs on the main thread

Asynchronous tasks are delegated to libuv

Event loop monitors task completion

Callbacks are executed when tasks finish

JavaScript Engine (V8)

V8 is the JavaScript engine developed by Google.

Responsibilities:

Converts JavaScript into machine code

Uses Just-In-Time (JIT) compilation

Manages memory and garbage collection

V8 only executes JavaScript.
It does not handle file system, networking, or timers.

Node.js Core APIs

Node.js provides built-in APIs to interact with system resources.

Examples:

fs – file system operations

http – create web servers

os – system information

path – file paths

crypto – encryption

Purpose:

Allow JavaScript to access OS features

Hide complex C/C++ implementations

Native Bindings

Native bindings connect JavaScript with C/C++ code.

Why needed:

JavaScript cannot directly access OS resources

Native bindings allow high-performance system operations

Flow:
JavaScript → Native Binding → C/C++ → Operating System

Event Loop

The event loop is the heart of Node.js asynchronous behavior.

Responsibilities:

Executes callbacks

Manages async operations

Prevents blocking of the main thread

It continuously checks queues and executes ready tasks.

libuv

libuv is a C library used by Node.js to provide asynchronous I/O.

Why Node.js needs libuv:

JavaScript alone cannot perform async OS operations

libuv provides event loop and background execution

Responsibilities:

Event loop management

Thread pool management

File system operations

Networking

Timers

Thread Pool

A thread pool is a collection of background threads managed by libuv.

Key points:

Default size is 4 threads

Used for operations that cannot be async at OS level

Operations handled:

File system operations

DNS lookup

Crypto operations

Compression

Worker Threads

Worker threads are separate JavaScript threads in Node.js.

Why needed:

To execute CPU-intensive tasks

Prevent blocking of the main thread

Examples:

Image processing

Heavy calculations

Encryption tasks

Each worker thread has its own event loop and V8 instance.

Difference Between Thread Pool and Worker Threads

Thread Pool:

Managed by libuv

Cannot execute JavaScript

Used for I/O tasks

Shared event loop

Worker Threads:

Managed by Node.js

Executes JavaScript

Used for CPU-heavy tasks

Separate event loops

Event Loop Queues

Macro Task Queue:

setTimeout

setInterval

setImmediate

I/O callbacks

Micro Task Queue:

Promise.then

Promise.catch

Promise.finally

process.nextTick

Execution Priority

Order of execution:

Micro Task Queue

Macro Task Queue

Microtasks are always executed before macrotasks.

Examples

Micro Task example:
Promise.resolve().then(() => console.log("Microtask"))

Macro Task example:
setTimeout(() => console.log("Macrotask"), 0)

Output:
Microtask
Macrotask