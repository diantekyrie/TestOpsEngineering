+++
title = "Contact"
+++

## Get in touch

<form action="https://formsubmit.co/YOUR_EMAIL@example.com" method="POST">
  <input type="hidden" name="_subject" value="New QA consulting inquiry" />
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />
  <input type="hidden" name="_next" value="https://USERNAME.github.io/thanks/" />

  <p>
    <label>Name<br />
      <input type="text" name="name" required />
    </label>
  </p>

  <p>
    <label>Email<br />
      <input type="email" name="email" required />
    </label>
  </p>

  <p>
    <label>What do you need help with?<br />
      <textarea name="message" rows="6" required></textarea>
    </label>
  </p>

  <p>
    <button type="submit">Send</button>
  </p>
</form>
