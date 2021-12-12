<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/root.css" rel="stylesheet">
    <link href="css/header.css" rel="stylesheet">
    <link href="css/footer.css" rel="stylesheet">
    <link href="css/contactUs.css" rel="stylesheet">
    <link href="css/contactUs_mobile.css" rel="stylesheet">
    <link href="css/contactUs_tab.css" rel="stylesheet">
    <script src="javascript/header.js" defer></script>
    <script src="javascript/contactUs.js" defer></script>
    <title>Always Sahi Academy | Contact Us</title>
</head>
<body>
    <?php 
        include './public/header.php'
    ?>
    <div class="contact">
        <form action="" method="post" class="contact__form">
            <div class="contact__title">Contact Us</div>
            <input type="text" placeholder="Name" class="contact__input" required>
            <input type="email" placeholder="Email" class="contact__input" required>
            <input type="tel" placeholder="Phone Number" class="contact__input" required>
            <input type="text" class="contact__message contact__input"  required>
            <button value="submit" class="contact__submit">Submit</button>
        </form>
        <div class="contact__info">
            <div class="contact__mail"><a href="mailto:hello.alwayssahi@gmail.com" class="contact__link">hello.alwayssahi@gmail.com</a></div>
            <div class="contact__phone"><a href="tel:+91 8857086790" class="contact__link">+91 8857086790</a></div>
            <div class="contact__social">
                <div class="contact__media">
                    <a href="" class="contact__link">
                        <img src="image/instagram.png" alt="instagram" class="contact__instagram_image">
                    </a>
                </div>
                <div class="contact__media">
                    <a href="" class="contact__link">
                        <img src="image/linkedin.png" alt="linkedin" class="contact__instagram_image">
                    </a>
                </div>
                <div class="contact__media">
                    <a href="" class="contact__link">
                        <img src="image/facebook.png" alt="facebook" class="contact__instagram_image">
                    </a>
                </div>
                <div class="contact__media">
                    <a href="" class="contact__link">
                        <img src="image/telegram.png" alt="telegram" class="contact__instagram_image">
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="faq">
        <div class="faq__title">FAQ</div>
        <div class="faq__breif">Hey, I dont want you to be confused anywhere, So let’s answer some of the Frequently Asked Questions, by the Students of Always Sahi Academy.</div>
        <div class="faq__questions" id="faq_1">
            <div class="faq__question">
                <span>How do I get Enrolled? </span>
                <div class="faq__show">+</div>
            </div>
            <div class="faq__answer">We have a Simple Sign up Form, through which you Create an Account, & Explore your Learning. </div>
        </div>
        <div class="faq__questions" id="faq_2">
            <div class="faq__question">
                <span>Are there any Refunds?</span>
                <div class="faq__show">+</div>
            </div>
            <div class="faq__answer">Transactions & Learning being though digital Mode, there are no Refunds Provided.</div>
        </div>
        <div class="faq__questions" id="faq_3">
            <div class="faq__question">
                <span>I dont have any Startup Planned?</span>
                <div class="faq__show">+</div>
            </div>
            <div class="faq__answer">There is no need to worry, here at Always Sahi Academy you are handheld by the experts who will be clearing your Niche and Starting from the Basics.</div>
        </div>
        <div class="faq__questions" id="faq_4">
            <div class="faq__question">
                <span>Can I Join if I am a School & College Student?</span>
                <div class="faq__show">+</div>
            </div>
            <div class="faq__answer">Joining as a Student is a Perfect Decision, here you get complete knowledge to build your Skills & Side Hustle. Which is Beneficial to grow your Full-time Business or Build your Resume if you are looking for a Perfect Job.</div>
        </div>
        <div class="faq__questions" id="faq_5">
            <div class="faq__question">
                <span>Is this an Online Course?</span>
                <div class="faq__show">+</div>
            </div>
            <div class="faq__answer">Yes this Course is Online. </div>
        </div>
        <div class="faq__questions" id="faq_6">
            <div class="faq__question">
                <span>Are there any Restrictions to joining Always Sahi Academy?</span>
                <div class="faq__show">+</div>
            </div>
            <div class="faq__answer">No there are No Restrictions to Join Always Sahi Academy. Do join in & Explore.</div>
        </div>
        <div class="faq_details">I am Glad, you are now all set to join Always Sahi Academy, I Cant Wait to See you Inside.</div>
    </div>

    <?php 
        include('public/footer.php')
    ?>
</body>
</html>