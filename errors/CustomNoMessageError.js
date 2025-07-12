class CustomNoMessageError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
    this.name = "MessagesNotFound";
  }
}

module.exports = CustomNoMessageError;
