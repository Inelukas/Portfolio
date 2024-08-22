import styled from "styled-components";

const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input,
  textarea {
    width: 400px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1rem;
  }

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: var(--primary-color);
    color: white;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export function ContactForm({ language }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <StyledContactForm onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder={
          language === "en"
            ? "Your Name"
            : language === "de"
            ? "Dein Name"
            : "お名前"
        }
      />
      <input
        type="email"
        name="email"
        placeholder={
          language === "en"
            ? "Your Email"
            : language === "de"
            ? "Deine E-Mail"
            : "メアド"
        }
      />
      <textarea
        rows={4}
        name="message"
        placeholder={
          language === "en"
            ? "Your Message"
            : language === "de"
            ? "Deine Nachricht"
            : "メッセージ"
        }
      />
      <button>
        {language === "en" ? "Send" : language === "de" ? "Senden" : "送信"}
      </button>
    </StyledContactForm>
  );
}
