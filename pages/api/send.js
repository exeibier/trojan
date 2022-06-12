//Package
import nodemailer from 'nodemailer'
//Components
import MailTemplate from '../../components/mails/inlined/contact'


  const transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 465,
    secure: true,
    auth: {
      user: 'xabierhh@gmail.com',
      pass: process.env.SENDGRID_PASSWORD
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
      replyTo: `noreply@trojan.com`,
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

