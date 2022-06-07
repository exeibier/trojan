/* Config */
import App from '../../../config/app'

/* Lang */
// import Attributes from '../../../lang/es/attributes'

const MailTemplate = (props) => {
  const {view, data} = props
  const date = new Date()

  return (
    `
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <title>${view}</title>
      </head>
      <body class="">
        <span class="preheader">Un usuario del sitio web ha envíado un formulario de contacto.</span>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
          <tr>
            <td>&nbsp;</td>
            <td class="container">
              <div class="content">
                <table role="presentation" class="main">
                  <tr>
                    <td class="wrapper">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td>
                            <p>Hello,</p>
                            <p>A website user sent the following message :</p>
                          </td
                        </tr>
                        <tr>
                          <td><hr/></td>
                        </tr>
                        <tr>
                          <td><hr/></td>
                        </tr>
                        <tr>
                          <td>
                            ${
                              Object.keys(data).map((item, i) => {
                                return(
                                  `<p>${item}: <br/><b>${data[item]}</b></p>`
                                )
                              }).join('')
                            }
                          </td>
                        </tr>
                        <tr>
                          <td><hr/></td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <div class="footer">
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                      <td class="content-block">
                        <span class="apple-link">${App.name}, ${date.getFullYear()}</span>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </td>
            <td>&nbsp;</td>
          </tr>
        </table>
      </body>
    </html>
    `
  )
}

export default MailTemplate
