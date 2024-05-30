exports.depositRequestTemplate = (
  firstname,
  lastname,
  amountCurr,
  currency
) => {
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
      <title>Funds Deposit Success</title>
      <!-- The title tag shows in email notifications, like Android 4.4. -->
  
      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
        rel="stylesheet"
      />
    </head>
    <body>
      <div style="width: 100%; margin-top: 30px">
        <div>
          <p>
            Hello ${firstname} ${lastname}, deposit request submitted
            successfully,
          </p>
  
          <p>
            You made a deposit request which has been received and is under
            review. ${amountCurr} ${currency} will be depositted into your account
            once transaction is confirmed. Please be patient. Thank you.
          </p>
  
          <p>
            Please submit a report to support if this process was not initiated by
            you.
          </p>
  
          <p>
            <br />
            -- Best regards,<br />
            lunainvestmentgroep.co.za<br />
            <a href="https://www.lunainvestmentgroep.co.zag" target="_blank"></a><br />
            &nbsp;
          </p>
        </div>
      </div>
    </body>
  </html>
  `;
};
