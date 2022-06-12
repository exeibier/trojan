//Package
import nodemailer from 'nodemailer'
const nodemailMailGun = require('nodemailer-mailgun-transport')
//Components
import MailTemplate from '../../components/mails/inlined/contact'

const auth = {
  auth: {
    api_key:'82d53e2eb05bbbbbb79c399db788bb1a-523596d9-b2da2087',
    domain: 'https://experienciaschurchanddwight.com/api/send'
  }
}
// create reusable transporter object using the default SMTP transport
  // const transporter = nodemailer.createTransport({
  //   host: "smtp.sendgrid.net",
  //   port: 465,
  //   secure: false,
  //   auth: {
  //     user: "apikey",
  //     pass: "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"
  //   },
  // });

  // const transporter = nodemailer.createTestAccount(nodemailMailGun(auth))
  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 465,
    auth: {
      user: "c3380cf4df9109",
      pass: "b35765be2c8f9e"
    }
  })
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

