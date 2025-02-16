<?php
// Paramètres de connexion
$host = 'localhost';
$dbname = 'mon-docteur';
$username = 'root'; // Par défaut pour XAMPP/WAMP
$password = '';

// Connexion à la base de données avec PDO
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die('Erreur de connexion : ' . $e->getMessage());
}

// Traitement du formulaire d'inscription
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nom = $_POST['Nom'] ?? '';
    $prenom = $_POST['prenom'] ?? '';
    $adresse = $_POST['address'] ?? '';
    $date_naissance = $_POST['birthdate'] ?? '';
    $email = $_POST['email'] ?? '';
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // Validation simple
    if (!empty($nom) && !empty($prenom) && !empty($adresse) && !empty($date_naissance) && !empty($email) && !empty($password)) {
        try {
            $stmt = $pdo->prepare("INSERT INTO utilisateurs (nom, prenom, adresse, date_naissance, email, mot_de_passe) 
                                   VALUES (:nom, :prenom, :adresse, :date_naissance, :email, :password)");
            $stmt->execute([
                ':nom' => $nom,
                ':prenom' => $prenom,
                ':adresse' => $adresse,
                ':date_naissance' => $date_naissance,
                ':email' => $email,
                ':password' => $password
            ]);
            echo "✅ Utilisateur créé avec succès !";
        } catch (PDOException $e) {
            echo "❌ Erreur lors de la création de l'utilisateur : " . $e->getMessage();
        }
    } else {
        echo "⚠️ Tous les champs sont obligatoires.";
    }
}
?>


