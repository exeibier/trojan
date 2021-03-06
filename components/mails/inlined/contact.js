

/* Lang */
// import Attributes from '../../../lang/es/attributes'

const MailTemplate = (props) => {
  const {view, data} = props
  const date = new Date()

  return (
    `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">

    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <title>${view}</title>
    </head>

    <body class="" style="-ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; background-color: #0e457f; font-family: sans-serif; font-size: 14px; line-height: 1.4; margin: 0; padding: 0;">
      <style>
        @media only screen and (max-width: 620px) {
          table[class=body] h1 {
            font-size: 28px !important;
            margin-bottom: 10px !important;
          }
          table[class=body] p,
          table[class=body] ul,
          table[class=body] ol,
          table[class=body] td,
          table[class=body] span,
          table[class=body] a {
            font-size: 16px !important;
            color: #ffff;
            font-weight:bold;
            text-align:center;
          }
          table[class=body] .wrapper,
          table[class=body] .article {
            padding: 10px !important;
          }
          table[class=body] .content {
            padding: 0 !important;
          }
          table[class=body] .container {
            padding: 0 !important;
            width: 100% !important;
          }
          table[class=body] .main {
            border-left-width: 0 !important;
            border-radius: 0 !important;
            border-right-width: 0 !important;
          }
          table[class=body] .btn table {
            width: 100% !important;
          }
          table[class=body] .btn a {
            width: 100% !important;
          }
          table[class=body] .img-responsive {
            height: auto !important;
            max-width: 100% !important;
            width: auto !important;
          }
        }

        @media all {
          .ExternalClass {
            width: 100%;
          }
          .ExternalClass,
          .ExternalClass p,
          .ExternalClass span,
          .ExternalClass font,
          .ExternalClass td,
          .ExternalClass div {
            line-height: 100%;
          }
          .apple-link a {
            color: inherit !important;
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            text-decoration: none !important;
          }
          #MessageViewBody a {
            color: inherit;
            text-decoration: none;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            line-height: inherit;
          }
          .btn-primary table td:hover {
            background-color: #34495e !important;
          }
          .btn-primary a:hover {
            background-color: #34495e !important;
            border-color: #34495e !important;
          }
        }
      </style>
      <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; mso-hide: all; opacity: 0; overflow: hidden; visibility: hidden; width: 0;">Experiencias Trojan</span>
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="background-color: #0e457f; border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
        <tbody>
          <tr>
            <td class="container" style="display: block; font-family: sans-serif; font-size: 14px; margin: 0 auto !important; max-width: 580px; padding: 10px; vertical-align: top; width: 580px;">
              <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 10px;">
                <table role="presentation" class="main" style="background: #0e457f; border-collapse: separate; border-radius: 3px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                  <tbody>
                    <tr>
                      <td class="wrapper" style="box-sizing: border-box; font-family: sans-serif; font-size: 14px; padding: 20px; vertical-align: top;">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                          <tbody>
                            <tr>
                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                                <p style="color: #ffff; font-family: sans-serif; font-size: 14px; font-weight: bold; margin: 0; margin-bottom: 5px; margin-top: 5px; text-align: center;">??Felicidades!,</p>
                                <p style="color: #ffff;  font-family: sans-serif; font-size: 14px;font-weight: bold; margin: 0; margin-bottom: 5px; margin-top: 5px; text-align: center;">${data.name} ${data.last_name_first} ${data.last_name}</p>
                              </td>
                            </tr>
                            <tr>
                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                                <hr style="border: none; border-bottom: 1px solid #0e457f; margin: 10px 0;">
                              </td>
                            </tr>
                            <tr>
                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                                <hr style="border: none; border-bottom: 1px solid #0e457f; margin: 10px 0;">
                              </td>
                            </tr>
                            <tr>
                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; text-align: center;">
                                <img src="https://trojan-cdn.vercel.app/_next/image?url=%2Fmailing.jpeg&w=1080&q=75" style ='width: 500px; height:675px;' alt="mail" />
                              </td>
                            </tr>
                            <tr>
                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                                <hr style="border: none; border-bottom: 1px solid #0e457f; margin: 10px 0;">
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="footer" style="clear: both; margin-top: 10px; text-align: center; width: 100%;">
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                    <tbody>
                      <tr>
                        <td class="content-block" style="color: #ffff; font-family: sans-serif; font-size: 12px; padding-bottom: 10px; padding-top: 10px; text-align: center; vertical-align: top;">
                          <span class="apple-link" style="color: #ffff; font-size: 12px; text-align: center;">Trojan, ${date.getFullYear()}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
    </html>`
  )
}

export default MailTemplate
