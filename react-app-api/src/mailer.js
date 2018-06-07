import nodemailer from "nodemailer";

const from = '"Bookworm" <info@bookworm.com>';

function setup() {
  console.log("setup email")

  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER ,
      pass: process.env.EMAIL_PASS
    }
  })
}

export function sendConfirmationEmail(user) {
  console.log("sending email")
  const tranport  = setup()

  const email = {
    from,
    to: user.email,
    subject: "Welcome to Bookworm",
    text: `
    Welcome to Bookworm. Please, confirm your email.
    ${user.generateConfirmationUrl()}
    `
  }

  tranport.sendMail(email, (error, info) => {
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  })
}

export function sendResetPasswordEmail(user) {
  const transport = setup()

  const email = {
    from,
    to : user.email,
    suject : "Reset Password" ,
    text : `
      Reset Password with this link
      ${user.generateResetPasswordLink()}
    `
  }

  transport.sendMail(email , (error , info ) => {
    if (error)
      return console.log(error)

      console.log('Message sent: ' + info.response )
  })

}
