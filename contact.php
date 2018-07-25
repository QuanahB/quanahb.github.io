<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Contact Form</title>
    </head>
    <body>
        <p>Send Email</p>
        <form class="contact-form" action="contactCode.php" method="post">
            <input type="text" name="name" placeholder="Full Name">
            <input type="text" name="mail" placeholder="Your Email">
            <input type="text" name="subject" placeholder="Subject">
            <textarea name="message" placeholder="Message"></textarea>
            <button type="submit" name="Submit">Send</button>
        </form>
    </body>
</html>