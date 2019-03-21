import React from "react";
import Mailchimp from "react-mailchimp-form";

const EmailList = () => {
  return (
    <div>
      <p>
        I send out occasional updates of projects I am working on here. Figure
        about once or twice a year.
      </p>
      <p>
        When you sign up, be sure to click on the link in your email to confirm.
      </p>
      <Mailchimp
        action="https://constantsail.us1.list-manage.com/subscribe/post?u=0383bd92ff7d130fcca724893&amp;id=0bebd5ea23"
        fields={[
          {
            name: "EMAIL",
            placeholder: "Email",
            type: "email",
            required: true
          }
        ]}
      />
    </div>
  );
};

export default EmailList;
