<?php

  if(!isset($_POST['name']) and !isset($_POST['tel']) and !isset($_POST['password']) and !isset($_POST['email'])) {
    header('Location: /');
    exit;
  }
  $name = $_POST['name'];
  $phone = $_POST['tel'];
  $email = $_POST['email'];
  $pass = md5($_POST['password']);

  require 'phpmailer/Exception.php';
  require 'phpmailer/PHPMailer.php';
  require 'phpmailer/SMTP.php';

  $mail = new PHPMailer\PHPMailer\PHPMailer(true);

  try {
  
    $mail->SMTPDebug = 0;                  
    $mail->isSMTP();
    $mail->CharSet = 'UTF-8';                 
    $mail->Host       = 'smtp.gmail.com';                 
    $mail->SMTPAuth   = true;                                 
    $mail->Username   = 'roshhaleksej@gmail.com';                    
    $mail->Password   = 'dkw9lKaC9UO139pYdeCX';                             
    $mail->SMTPSecure = 'ssl';        
    $mail->Port       = 465;                       

    //Recipients
    $mail->setFrom('roshhaleksej@gmail.com', 'Алексей');
    $mail->addAddress('roshh-aleksej2009@yandex.ru');     
    
    // Content
    $mail->isHTML(true);                                  
    $mail->Subject = 'Новое сообщение с сайта';
    $mail->Body    = "Новый пользователь зарегистрировался:<br> Имя: {$name}<br> Телефон: {$phone}<br> Email: {$email}";
    $mail->AltBody = "Новый пользователь зарегистрировался:\r\n Имя: {$name}\r\n Телефон: {$phone}<br> Email: {$email}";

    $mail->send();
    echo '1';   
  } catch (Exception $e) {
    echo '0';
  }