exports.signupEmailTemplate = (firstname, newuser, randomToken) => {
  return `<!DOCTYPE html>
  <html
    lang="en"
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
  >
    <head>
      <meta charset="utf-8" />
      <!-- utf-8 works for most cases -->
      <meta name="viewport" content="width=device-width" />
      <!-- Forcing initial-scale shouldn't be necessary -->
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <!-- Use the latest (edge) version of IE rendering engine -->
      <meta name="x-apple-disable-message-reformatting" />
      <!-- Disable auto-scale in iOS 10 Mail entirely -->
      <title>Verify Your Email Address</title>
      <!-- The title tag shows in email notifications, like Android 4.4. -->
  
      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
        rel="stylesheet"
      />
    </head>
    <body>
    <div style="width: 100%; margin-top: 30px">
        <div>
          <p>Hello ${firstname},</p>
  
          <p>
            You (or someone else) has just registered an account on
            lunainvestmentgroep.co.za.
          </p>
  
          <p>Clicking on the link below will activate the account:</p>
  
          <p>
            <a
              href="https://lunainvestmentgroep-bdadd37d6335.herokuapp.com/api/v1/auth/verify/${newuser}/${randomToken}"
              target="_blank"
              >Click here to activate your account</a
            >
          </p>
  
          <p>or copy the following link in your browser and hit enter:</p>
  
          <p><a href="https://lunainvestmentgroep-bdadd37d6335.herokuapp.com/api/v1/auth/verify/${newuser}/${randomToken}">
            https://lunainvestmentgroep-bdadd37d6335.herokuapp.com/api/v1/auth/verify/${newuser}/${randomToken}</a>
          </p>
  
          <p>
            <br />
            -- Best regards,<br />
           
            <a href="https://www.lunainvestmentgroep.co.zag" target="_blank">lunainvestmentgroep.co.za</a><br />
            &nbsp;
          </p>
        </div>
      </div>
    </body>
  </html>`;
};
