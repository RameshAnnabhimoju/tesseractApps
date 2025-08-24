export const newsletterConfirmationEmailTemplate = {
  subject: "TesseractApps newsletter subscription",
  text: (name: string) => `Dear ${name},\n
        \n
        Thank you for your request.\n
          We have received your request for our newsletter subscription. We will process your requests within one business day.
        \n
        Team TesseractApps\n
        [Our Website: www.tesseractapps.com.au]\n
        [+61261332819,02 6133 2800] | [sales@tesseractapps.com]`,
  html: (name: string) => `
    <div>
    <div>Dear ${name},</div>
    <p>Thank you for your request.</p>
    <p>We have received your request for our newsletter subscription. We will process your requests within one business day.</p>
    <div>
    <p>Warm regards,</p>
        <p>Team TesseractApps</p>
        <div>[Our Website: <a href="https://www.tesseractapps.com.au">TesseractApps</a>]</div>
        <div>✆;[<a href="tel:+61261332819">+61261332819</a>,<a href="tel:+61261332800">02 6133 2800</a>] 📧 [<a href="mailto:sales@tesseractapps.com?subject=Inquiry">sales@tesseractapps.com</a>]</div>
    </div>
    </div>`,
};

export const newsletterSubscriptionEmailTemplate = {
  email: "sales@tesseractapps.com",
  subject: "Request for newsletter subscription",
  body: (
    email: string
  ) => `${email} has requested a subscription for our newsletter.\n
        Email: ${email}\n
        \n
        Team TesseractApps\n`,
};

type requestTypes = {
  fullName: string;
  email: string;
  phone: string;
  organisation: string;
  role: string;
  areas: string;
  preferredTime: string;
};

export const bookDemoEmailTemplate = {
  email: "sales@tesseractapps.com",
  subject: "Request for Demo",
  body: ({
    fullName,
    email,
    phone,
    organisation,
    role,
    areas,
    preferredTime,
  }: requestTypes) => `${fullName} has requested a demo.\n
        Full Name: ${fullName}\n
        Email: ${email}\n
        Phone: ${phone}\n
        Organisation: ${organisation}\n
        Role: ${role}\n
        Areas of Interest: ${areas}\n
        Preferred Time: ${preferredTime}\n
        \n
        Team TesseractApps\n
        `,
};

export const bookDemoConfirmationEmailTemplate = {
  subject: "TesseractApps request for Demo",
  text: (fullName: string) => `Dear ${fullName},\n
      \n
      Thank you for your request.\n
        We have received your request for a demo and will be in touch within one business day.
      \n
      Best regards,\n
      Team TesseractApps\n
      [Our Website: www.tesseractapps.com.au]\n
      [+61261332819,02 6133 2800] | [sales@tesseractapps.com]`,
  html: (fullName: string) => `
    <div>Dear ${fullName},</div>
    <p>Thank you for your request.</p>
    <p>We have received your request for a demo and will be in touch within one business day.</p>
    <div>
    <p>Warm regards,</p>
        <p>Team TesseractApps</p>
        <div>[Our Website: <a href="https://www.tesseractapps.com.au">TesseractApps</a>]</div>
        <div>✆;[<a href="tel:+61261332819">+61261332819</a>,<a href="tel:+61261332800">02 6133 2800</a>] 📧 [<a href="mailto:sales@tesseractapps.com?subject=Inquiry">sales@tesseractapps.com</a>]</div>
    </div>
  `,
};

export const expertTalkEmailTemplate = {
  email: "sales@tesseractapps.com",
  subject: "Request for talk to an expert",
  body: ({
    fullName,
    email,
    phone,
    organisation,
    role,
    areas,
    preferredTime,
  }: requestTypes) => `${fullName} has made a request to talk to an expert.\n
        Full Name: ${fullName}\n
        Email: ${email}\n
        Phone: ${phone}\n
        Organisation: ${organisation}\n
        Role: ${role}\n
        Areas of Interest: ${areas}\n
        Preferred Time: ${preferredTime}\n
        \n
        Team TesseractApps\n
        `,
};

export const expertTalkConfirmationEmailTemplate = {
  subject: "TesseractApps request to talk to an expert",
  text: (fullName: string) => `Dear ${fullName},\n
      \n
      Thank you for your request.\n
        We have received your request. Our Expert will be in touch within one business day.
      \n
      Best regards,\n
      Team TesseractApps\n
      [Our Website: www.tesseractapps.com.au]\n
      [+61261332819,02 6133 2800] | [sales@tesseractapps.com]`,
  html: (fullName: string) => `
    <div>Dear ${fullName},</div>
    <p>Thank you for your request.</p>
    <p>We have received your request. Our Expert will be in touch within one business day.</p>
    <div>
    <p>Warm regards,</p>
        <p>Team TesseractApps</p>
        <div>[Our Website: <a href="https://www.tesseractapps.com.au">TesseractApps</a>]</div>
        <div>✆;[<a href="tel:+61261332819">+61261332819</a>,<a href="tel:+61261332800">02 6133 2800</a>] 📧 [<a href="mailto:sales@tesseractapps.com?subject=Inquiry">sales@tesseractapps.com</a>]</div>
    </div>
  `,
};

type signupTypes = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  company: string;
  abn: string;
  industry: string;
  features: string;
  demo: string;
};
export const signupEmaiTemplate = {
  email: "sales@tesseractapps.com",
  subject: "Request for free trial signup",
  body: ({
    firstName,
    lastName,
    phone,
    email,
    company,
    abn,
    industry,
    features,
    demo,
  }: signupTypes) => `${firstName} has made a request for free trial signup.\n
                First Name: ${firstName}\n
                Last Name: ${lastName}\n
                Phone: ${phone}\n
                Email: ${email}\n
                
                Company: ${company}\n
                ABN: ${abn}\n
                
                Industry: ${industry}\n
                Features: ${features}\n
                Demo: ${demo}
                \n
                Team TesseractApps\n
                `,
};
export const signupConfirmationEmailTemplate = {
  subject: "Thank You for Signing Up! We've Received Your Details",
  text: (firstName: string) => `Hi ${firstName},\n
    \n
      Thank you for signing up with Tesseract Apps!\n
      We've received your details and our team is currently reviewing them. One of our representatives will get in touch with you soon to guide you through the next steps.\n
      If you have any immediate questions, feel free to reach out to us at [sales@tesseractapps.com] or call us at [+61261332819, 1300 252 808].\n
      We're excited to connect with you soon!\n
      \n
      Warm regards,\n
      Team TesseractApps\n
      [Our Website: www.tesseractapps.com.au]\n
      [+61261332819,02 6133 2800] | [sales@tesseractapps.com]\n
      `,

  html: (firstName: string) => `
    <div>Hi ${firstName},</div>
    <p>Thank you for signing up with Tesseract Apps!</p>
    <p>We've received your details and our team is currently reviewing them. One of our representatives will get in touch with you soon to guide you through the next steps.
      If you have any immediate questions, feel free to reach out to us at [sales@tesseractapps.com] or call us at [+61261332819, 1300 252 808].
      We're excited to connect with you soon!
      Warm regards</p>
    <div>
    <p>Warm regards,</p>
        <p>Team TesseractApps</p>
        <div>[Our Website: <a href="https://www.tesseractapps.com.au">TesseractApps</a>]</div>
        <div>✆;[<a href="tel:+61261332819">+61261332819</a>,<a href="tel:+61261332800">02 6133 2800</a>] 📧 [<a href="mailto:sales@tesseractapps.com?subject=Inquiry">sales@tesseractapps.com</a>]</div>
    </div>
    `,
};
