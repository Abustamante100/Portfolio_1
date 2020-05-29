<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $mailFrom = $_POST['email'];
  $message = $_POST['message'];

  $mailTo = "ArnoldBustamante@Gmail.com";
  $headers = "From: ".$mailFrom;
  $txt = "You have received an e-mail through your website. It's from ".$name.".\n\n".$message;

  mail($mailTo, $txt, $headers);
  header("Location: index.html?mailsend");
}
