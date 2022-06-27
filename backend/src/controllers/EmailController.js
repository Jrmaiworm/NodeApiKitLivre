const nodemailer = require("nodemailer");
const url = `${process.env.SITE}`;

var transporter = nodemailer.createTransport({
  host: "smtp.kitlivre.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "naoresponda@kitlivre.com", // generated ethereal user
    pass: "Livre@2022", // generated ethereal password
  },
});

// async..await is not allowed in global scope, must use a wrapper

module.exports = {
async sendMail(email, senha) {

    let info = await transporter.sendMail({
      from: 'naoresponda@kitlivre.com', // sender address
      to: email, // list of receivers
      subject: "Conclua o cadastro", // Subject line
      text: `Cadastro criado com sucesso sua senha é ${senha}`, // plain text body
      html: `<p>Cadastro criado com sucesso sua senha é</p> <b> ${senha} </b>`, // html body
    });

    //console.log("Message sent: %s", info.messageId);    
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  },
  async sendMailSimples(email,documento) {

    let info = await transporter.sendMail({
      from: 'naoresponda@kitlivre.com', // sender address
      to: email, // list of receivers
      subject: "Conclua o cadastro", // Subject line
      text: `Cadastro criado com sucesso crie sua senha `, // plain text body
      html: `<p>Cadastro criado com sucesso <br> cire sua senha</p> ${url}/troca-senha?documento=${documento}`, // html body
    });

    //console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  },
  async sendMailCadastro(email,documento) {

    let info = await transporter.sendMail({
      from: 'naoresponda@kitlivre.com', // sender address
      to: email, // list of receivers
      subject: "Conclua o cadastro", // Subject line
      text: `Cadastro criado com sucesso crie sua senha `, // plain text body
      html: `<p>Cadastro criado com sucesso <br> cire sua senha</p> ${url}/ativar-conta?documento=${documento}`, // html body
    });

    //console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }
}