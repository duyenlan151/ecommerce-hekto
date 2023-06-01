import nodemailer from 'nodemailer';

const email = process.env.NEXT_PUBLIC_EMAIL;
const pass = process.env.NEXT_PUBLIC_EMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass,
  },
});

export async function sendEmail(params) {
  const { identifier, url, message, subject } = params;
  const { host } = new URL(url);
  // NOTE: You are not required to use `nodemailer`, use whatever you want.
  // const transport = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: email,
  //     pass,
  //   },
  // });
  const result = await transporter.sendMail({
    to: identifier,
    from: email,
    subject,
    text: message ?? text({ url, host }),
    html: html({ url, host }),
  });
  const failed = result.rejected.concat(result.pending).filter(Boolean);
  if (failed.length) {
    throw new Error(`Email(s) (${failed.join(', ')}) could not be sent`);
  }
}

/**
 * Email HTML body
 * Insert invisible space into domains from being turned into a hyperlink by email
 * clients like Outlook and Apple mail, as this is confusing because it seems
 * like they are supposed to click on it to sign in.
 *
 * @note We don't add the email address to avoid needing to escape it, if you do, remember to sanitize it!
 */
function html(params: { url: string; host: string }) {
  const { url, host } = params;

  const escapedHost = host.replace(/\./g, '&#8203;.');

  const brandColor = '#346df1';
  const color = {
    background: '#f9f9f9',
    text: '#444',
    mainBackground: '#fff',
    buttonBackground: brandColor,
    buttonBorder: brandColor,
    buttonText: '#fff',
  };

  return `<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <title>Reset Password</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta content="telephone=no" name="format-detection" />
    <meta content="email=no" name="format-detection" />
  </head>
  <body style="height: 100vh; background-color: #f9f9f9">
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      width="100%"
      style="
        height: 100vh;
        max-width: 500px;
        margin: 50px auto;
        height: auto;
        padding: 0 16px;
      "
    >
      <tr><td height="50"></td></tr>
      <tr
        style="
          font-size: 14px;
          line-height: 22px;
          max-width: 600px;
          width: 100%;
          background-color: #fff;
          padding: 8px 16px;
        "
      >
        <td
          colspan="3"
          height="60"
          bgcolor="#ffffff"
          style="border-bottom: 1px solid #eeeeee; padding-left: 16px"
          align="left"
        >
          <img
            src="https://ci3.googleusercontent.com/proxy/1mmLbbt_GO9TvI1V6pu5Q1xaFgI6zjQKB9rVibpuNqY4a5ZJDS8JAirx6hGKckbxdY9--NCpdHIGzQW7tqMDH49gI9V7em_m1TSL=s0-d-e1-ft#https://cloud.mongodb.com/static/images/logo-mongodb.png"
            width="140"
            height="35"
            style="display: block; width: 140px; height: 35px"
            class="CToWUd"
            data-bit="iit"
          />
        </td>
      </tr>
      <tr>
        <td style="vertical-align: top">
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style="
              font-size: 14px;
              line-height: 22px;
              max-width: 600px;
              width: 100%;
              margin: 0 auto 30px auto;
              background-color: #fff;
              padding: 16px;
            "
          >
            <tr>
              <td colspan="3">
                <h4>Reset Password</h4>

                A password reset event has been triggered. The password reset window is limited to
                5 minutes.<br /><br />

                If you do not reset your password within two hours, you will need to submit a new
                request.<br /><br />

                To complete the password reset process, visit the following link:<br /><br />

                <a
                  href=${url}
                  target="_blank"
                  data-saferedirecturl={'${url}'}
                  >${url}</a
                ><br /><br />
                If you did not request this email you can safely ignore it.<br /><br />
              </td>
            </tr>
            <tr>
              <td
                align="center"
                style="
                  font-size: 10px;
                  line-height: 22px;
                  font-family: Helvetica, Arial, sans-serif;
                  text-align: left;
                "
              >
                <a style="display: block" href="mailto:loanduyen151@gmail.com"
                  >Contact us: loanduyen151@gmail.com</a
                >
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>

`;
  return `
<body style="background: ${color.background}; margin: 10px 0px; ">
  <table width="100%" border="0" cellspacing="20" cellpadding="0"
    style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px;">
    <tr>
      <td align="center"
        style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
        Sign in to <strong>${escapedHost}</strong>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" style="border-radius: 5px;" bgcolor="${color.buttonBackground}"><a href="${url}"
                target="_blank"
                style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${color.buttonText}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${color.buttonBorder}; display: inline-block; font-weight: bold;">Sign
                in</a></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center"
        style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
        If you did not request this email you can safely ignore it.
      </td>
    </tr>
  </table>
</body>
`;
}

/** Email Text body (fallback for email clients that don't render HTML, e.g. feature phones) */
function text({ url, host }: { url: string; host: string }) {
  return `Sign in to ${host}\n${url}\n\n`;
}
