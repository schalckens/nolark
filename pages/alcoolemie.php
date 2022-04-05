<!DOCTYPE html>
<!--
     Page web créé dans le cadre du cours de monsieur José Gil pour une Campagne de sensibilisation au danger de l'alcool.
     Auteur : Valentine SCHALCKENS
     Email : v.schalckens@gmail.com
-->
<html lang="fr-FR">
<head>
    <title>Casques Nolark&nbsp;:&nbsp;Sécurité et confort, nos priorités !</title>
    <meta charset="UTF-8">
    <meta name="author" content="Valentine SCHALCKENS">
    <meta name="description" content="Découvrez des casques moto dépassant même les exigences des tests de sécurité. Tous les casques Nolark au meilleur prix et avec en prime la livraison gratuite !">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="../js/cookies/tarteaucitron/tarteaucitron.js"></script>
    <script src="../js/cookies/tarteaucitron.init.js"></script>
    <link href="../css/styles.css" rel="stylesheet" type="text/css">
    <link href="../css/alcoolemie.css" rel="stylesheet" type="text/css">
    <script src="../js/alcoolemie.js" type="text/javascript"></script>
    <link rel="icon" href="../favicon.ico">
</head>
<body>
<?php include('../includes/header.html.inc.php'); ?>
<section>
    <h1>Simulateur d'alcoolémie</h1>
    <hr>
    <form>
        <fieldset>
            <legend>Saisie de vos informations</legend>
            <p>
                <label for="num_poids"> Poids : </label>
                <input id="num_poids" type="number">
            </p>
            <fieldset id="sexe">
                <legend>Sexe :</legend>
                <p>
                <input id ="rd_sexehomme" name="rd_sexe" type="radio" value="homme" checked>
                <label for="rd_sexehomme">Homme</label><br/>
                </p>
                <p>
                <input id ="rd_sexefemme" name="rd_sexe" type="radio" value="femme">
                <label for="rd_sexefemme">Femme</label><br/>
                </p>
            </fieldset>
            <p>
                <label for="num_verre">Nombre de verres bus :</label>
                <input id="num_verre" type="number">
            </p>
        </fieldset>
    </form>
    <hr>
</section>
<?php include('../includes/footer.inc.php'); ?>
</body>