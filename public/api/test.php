<?php
$to = "bink3715406@yandex.ru";
// $to = "hungrypandadevelop@gmail.com";
// $to = "test-ql3qln4p9@srv1.mail-tester.com";
// $subject = "Тема письма";
// $message = "Текст сообщения";

// $headers = "MIME-Version: 1.0" . "\r\n"; 
// $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 

// $headers .= 'From: <support@hotpal.ru>' . "\r\n"; 
// $headers .= 'Bcc: support@hotpal.ru' . "\r\n"; 
// $headers .= 'X-Mailer: PHP/' . phpversion();


// if (mail($to, $subject, $message, $headers)) {
//     echo "Письмо отправлено успешно.";
// } else {
//     echo "Ошибка при отправке письма.";
// }

// $to      = 'nobody@example.com';
$subject = 'verification';

$message = 'hello';

$headers = "MIME-Version: 1.0" . "\r\n"; 
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 

$headers .= 'From: <support@hotpal.ru>' . "\r\n" ;
$headers .= 'X-Mailer: PHP/' . phpversion();

if (mail($to, $subject, $message, $headers)) {
    echo "Письмо отправлено успешно. hotpal@inbox.ru";
} else {
    echo "Ошибка при отправке письма.";
}
?>