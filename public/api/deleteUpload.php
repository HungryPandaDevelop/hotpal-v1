<?php
header("Access-Control-Allow-Origin: *");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fileToDelete = $_POST['fileToDelete']; // Имя файла, который нужно удалить
    $filePath = '../uploads/' . $fileToDelete; // Полный путь к файлу
    
    if (file_exists($filePath) && unlink($filePath)) {
        echo 'Файл успешно удален.'.$fileToDelete;
    } else {
        echo 'Произошла ошибка при удалении файла.';
    }
} else {
    echo 'Недопустимый запрос.';
}