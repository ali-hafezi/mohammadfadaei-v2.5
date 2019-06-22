<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>mohammad fadaei :: محمد فدایی</title>
<meta name="keywords" content="mohammad fadaei,محمد فدایی , graphic group, فدایی,mohammad,mohamad,fadaei,محمد,fadaee">
<meta name="description" content="Mohammad Fadaei Tehran -1978 B.A Philosophy from Tehran University Press Graphic from Bureau of Media Studies and Planing ">
<link href="styles/reset.css" rel="stylesheet" type="text/css">
<link href="styles/style.css" rel="stylesheet" type="text/css">
<link href="styles/page-style.css" rel="stylesheet" type="text/css">
</head>

<body>
<div id="main-holder">
  <div id="header-holder">
    <div id="logo-holder"> <a href="home.html"><img src="images/logo.png" alt="AAohamad Fadaei" title="AAohamad Fadaei"></a> </div>
    <ul>
      <li><a href="Calligrapher-at-Works/Calligrapher-at-Works(1)-Ultimate-Situationl.html">Calligrapher-at-Works</a></li>
      <li><a href="artwork/index.html">Gallery</a></li>
      <li><a href="Design/graphic-design.html">Design</a></li>
      <li><a href="Me-Contact.php" style="color:#fff;">Contact-Me</a></li>
      <li><a href="biography.html" >Biography</a></li>
      <li><a href="assay/index.html" >Word</a></li>
      <div class="fixer"></div>
    </ul>
  </div>
  <div id="content-holder">
    <div id="biography">
      <div id="biopic"> </div>
      <div id="biotext" dir="rtl" itemscope itemtype ="http://schema.org/Person">

        
      </div>
    </div>
    <div id="contact-holder">
      <div id="table-holder">
      <?php
      if (!isset($_POST["submit"])) {
  ?>
<form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>">
        <table width="350" height="270" >
          <tr height="50">
            <td width="70" style="color:#fff;">name:</td>
            <td width="260"><input type="text" name="from" id="txtname" ></td>
          </tr >
          <tr height="50">
            <td style="color:#fff;">subject:</td>
            <td><label for="txtemail"></label>
              <input type="text" name="subject" id="txtemail"></td>
          </tr >
          <tr height="170">
            <td style="color:#fff;">Content:</td>
            <td><label for="txtcontent"></label>
              <textarea rows="10" cols="40"  name="message" id="txtcontent"></textarea></td>
          </tr>
          <tr height="50">
            <td>&nbsp;</td>
            <td><input type="submit" name="submit" id="submit" value="Submit"></td>
          </tr>
        </table>
		<h2 itemprop="email"><a href="mailto:info@mohammaffadaei.com" style="color:#fff;">info@mohammadfadaei.com</a></h2>
          </form>
  <?php 
  } else {    // the user has submitted the form
  // Check if the "from" input field is filled out
  if (isset($_POST["from"])) {
    $from = $_POST["from"]; // sender
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    // message lines should not exceed 70 characters (PHP rule), so wrap it
    $message = wordwrap($message, 70);
    // send mail
    mail("info@mohammadfadaei.com",$subject,$message,"From: $from\n");
    echo "<p style=\"color:#fff;\">Thank you for sending us feedback</p>";
  }
}
?>
      </div>
    </div>
    <div class="fixer"></div>
  </div>
</div>
<div id="footer-holder">
  <div id="copyright-holder">
    <p>Copyright © 2012–2016 (version 2.1.2)</p>
    <h6>Designed By Ali Hafezi</h6>
  </div>
</div>
</body>
</html>
