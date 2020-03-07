import app from "./app";

function onError(error: any) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof app.get("port") === "string" ? "Pipe " + app.get("port") : "Port " + app.get("port");

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      console.warn(error.code);
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  console.info("Listening on " + bind);
}

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"));

server.on("error", onError);
server.on("listening", onListening);

process.on("unhandledRejection", function(error) {
  console.warn("unhandledRejection", error);
});

export default server;