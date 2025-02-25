const nodemailer = require("nodemailer");
const router = require("express").Router();

async function run({ email, name, message }) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "streetso71@gmail.com",
        pass: process.env.GSECRET,
      },
    });

    const options = {
      from: "Ty the Portfolio Guy <streetso71@gmail.com>", // sender address
      to: "streetso71@gmail.com", // receiver email
      subject: "Portfolio Contact", // Subject line
      text: `Hi ${name}`,
      html: `
      <!DOCTYPE html>
      <html>
          <body>
              <h1>${name}</h1>
              <p>${email}</p>
              <p>${message}</p>
          </body>
      </html>`,
    };

    const clientOptions = {
      from: "Ty Streets <streetso71@gmail.com>", // sender address
      to: email, // receiver email
      subject: "Ty Streets - Portfolio Contact", // Subject line
      text: `Contact Updates`,
      html: `
        <!DOCTYPE html>
        <html>
            <body>
                <section style="background-color: black; color: white; text-align:    center; padding: 8px;">
                    <h1>Message Received</h1>
                    <p>Thank you ${name} for the message. I usually reply within 2 business days. Thank you for your patience!</p>
                    </section>

                <section>
                    <h3 style="text-decoration: underline;">Message Details</h3>
                    <p>Name: ${name}</p>
                    <p>Email: ${email}</p>
                    <p>Message: ${message}</p>
                </section>
            </body>
        </html>`,
    };

    await transporter.sendMail(options);
    await transporter.sendMail(clientOptions);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

router.post("/sendemail", async function (req, res) {
  try {
    await run(req.body);
    res.status(200).json({ msg: "Success" });
  } catch (e) {
    res.status(500).json({ msg: "Failure" });
  }
});

module.exports = router;
