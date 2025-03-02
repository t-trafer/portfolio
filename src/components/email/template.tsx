interface EmailTemplateProps {
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  email,
  subject,
  message,
}) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <p>From: {email}</p>
    <p>Subject: {subject}</p>
    <div>
      <h2>Message:</h2>
      <p>{message}</p>
    </div>
  </div>
);
