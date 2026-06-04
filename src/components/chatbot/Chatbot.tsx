import "./Chatbot.css";
import HelpDeskIcon from "../../assets/help_desk_bubble.png";
import SendVector from "../../assets/send_vector.png";

const Chatbot = () => {
  return (
    <div className="chat-widget-container">

      <header className="chat-header">
        <div className="header-content">
          <div className="help-desk-icon">
            <img src={HelpDeskIcon} alt="Help Desk Icon" />
          </div>
          <span className="header-title">Help Desk</span>
        </div>
      </header>

      <main className="chat-body">
        
        <div className="message-row user-sent">
          <div className="message-bubble">
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>

        <div className="message-row agent-received">
          <div className="message-bubble">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="message-row agent-received">
          <div className="typing-indicator">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        
      </main>

      <footer className="chat-footer">
        <form className="chat-input-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-wrapper">
            <input
              type="text"
              id="chatMessage"
              name="chatMessage"
              placeholder="Type your message here.."
              autoComplete="off"
            />
            <button type="submit" className="send-btn" aria-label="Send Message">
              <img src={SendVector} alt="Send Arrow Icon" />
            </button>
          </div>
        </form>
      </footer>

    </div>
  );
};

export default Chatbot;