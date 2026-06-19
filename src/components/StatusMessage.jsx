const StatusMessage = ({ type }) => {
  const messages = {
    loading: "Loading student roster...",
    error: "Failed to fetch students."
  };

  return (
    <div className={`status-message message-${type}`}>
      {messages[type]}
    </div>
  );
};

export default StatusMessage;