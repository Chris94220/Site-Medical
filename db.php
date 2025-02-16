<?php
$host = 'localhost';
$user = 'root'; // Par défaut pour XAMPP/WAMP
$password = '';
$dbname = 'paiement_db';

// Connexion
$conn = new mysqli($host, $user, $password, $dbname);

// Vérification
if ($conn->connect_error) {
    die("Connexion échouée : " . $conn->connect_error);
}
?>
