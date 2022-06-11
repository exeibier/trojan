//Package
import nodemailer from 'nodemailer'

//Components
import MailTemplate from '../../components/mails/inlined/contact'

// create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 465,
    auth: {
      user: "apikey",
      pass: "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"
    },
  });
  export default async (req, res) => {
    const {body, method} = req

    if(method !== 'POST') {
      res.status(400).json({
        error: 'Bad Request'
      })
      return
    }

    const view = 'Experiencias'

    transporter.sendMail({
      to: `${body.email}`,
      from: 'noreply@trojan.com',
      replyTo: `${body.email}`,
      subject: 'Experiencias trojan',
      html: `${MailTemplate({view: view, data: body})}`
    }, (error) => {
      if(error){
        res.status(200).json({
          error: `Your message haven't been sent
           Error: ${error.code}`
        })

        return
      }
      res.status(200).json({
        success: `Your message have been sent`
      })
    })
  }

