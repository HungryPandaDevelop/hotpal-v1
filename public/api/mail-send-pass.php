<?php
header("Access-Control-Allow-Origin: *");

$mail = isset($_GET['mail']) ? $_GET['mail'] : null;
$name = isset($_GET['name']) ? $_GET['name'] : null;
$host = isset($_GET['host']) ? $_GET['host'] : null;
// $mail = 'bink@inbox.ru';
$uid = isset($_GET['uid']) ? $_GET['uid'] : null;


$date = date("Y-m-d H:i:s");

$htmlContent = ' 
	<html> 
	<head> 
		<title>Welcome to HotPal</title> 
	</head> 
	<body> 
	<table  class="table" cellspacing="0" border="0" 
	style="padding: 30px;  width: 100%;  height: 100%;"  >
		<tr>
			<td>
				<table style=" background-color: #fff; border-radius: 30px;    width: 630px;    text-align: center;    padding-top: 30px; position: relative;">
					<tr>
						<td>
							<img width="290px" src="http://hotpal.ru/mail/logo.jpg" alt="">
						</td>
					</tr>
					<tr>
						<td>
		<h2 style="font-size: 40px; margin: 15px 0px;">Здравствуйте, '.$name.'!</h2>
						</td>
		
					</tr>
					<tr>
					<tr> 
				<td>Для смены пароля на сайте, Вам необходимо перейти по ссылке: <a href="http://'.$host.'/change-forgot-pass?uid='.$uid.'">www.hotpal</td> 
			</tr> 
					</tr>
	
					<tr>
						<td style="font-size: 0px;">
							<img src="http://hotpal.ru/mail/mail.jpg" alt="">
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>

		
	</body> 
	</html>'; 

// Создаем дату и время отправки письма
$subject = 'Change password';


$headers = "MIME-Version: 1.0" . "\r\n"; 
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 

// Additional headers 
$headers .= 'From: <support@hotpal.ru>' . "\r\n"; 
$headers .= 'Reply-To: webmaster@example.com' . "\r\n"; 
// $headers .= 'Cc: hotpal@example.com' . "\r\n"; 
$headers .= 'Bcc: webmaster@example.com' . "\r\n"; 
$headers .= 'X-Mailer: PHP/' . phpversion();

$mailSent = mail($mail, $subject, $htmlContent, $headers);

if($mailSent){
	echo 'отправлено на '.$mail;
}else{
	echo 'Произошел сбой';
};


/*


*/