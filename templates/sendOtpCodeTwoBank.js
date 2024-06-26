exports.sendOtpCodeBankTwoTemplate = (
  otp,
  firstname,
  lastname,
  type,
  amountCurr,
  currency,
  country,
  mobileNetwork,
  mobileNumber
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
            <p style="margin-bottom: 0">Hello ${firstname} ${lastname},</p>
            <h4 style="margin: 15px auto;"><b>Withdrawal Information</b></h4>
            <p style="margin: 0">Method: <b>${type}</b></p>
            <p style="margin: 0">Country: <b>${country}</b></p>
            <p style="margin: 0">Mobile Network: <b>${mobileNumber}</b></p>
            <p style="margin: 0">Mobile Number: <b>${mobileNetwork}</b></p>
            <p style="margin: 0">Amount: <b>${amountCurr} ${currency}</b></p>
            <p>
              You (or someone else) has just initiated funds withdrawal on
              lunainvestmentgroep.co.za.
            </p>
    
            <p>Your one-time withdrawal confirmation code is</p>
    
            <h4>
              <strong style="font-size: 20px">${otp} </strong>
            </h4>
    
            <p>
              Please ignore this message and submit a report to support if this
              process was not initiated by you.
            </p>
    
            <p>
              <br />
              -- Best regards,<br />
              <a href="https://www.lunainvestmentgroep.co.zag" target="_blank"
                >lunainvestmentgroep.co.za</a
              ><br />
              &nbsp;
            </p>
          </div>
        </div>
      </body>
    </html>
    
    `;
};
