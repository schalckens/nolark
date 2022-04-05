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
        <link href="../css/campagne.css" rel="stylesheet" type="text/css">
        <link rel="icon" href="../favicon.ico">
    </head>
    <body>
        <?php include('../includes/header.html.inc.php'); ?>

        <section><p id = "grosTitre">Campagne de sensibilisation : Quel est votre taux d'alcoolémie ?</p></section>

        <section>
            <hr>
            <label id="num_poids"> Poids :<input type="number"> </label>
            <fieldset id="sexe" style="width: 250px">
                <legend>Sexe :</legend>
                    <input type="radio" id="Homme" checked>
                    <label for="Homme">Homme</label><br/>
                    <input type="radio" id="Femme">
                    <label for="Femme">Femme</label><br/>
            </fieldset>
            <label id="num_verre">Nombre de verres bus :<input type="number"></label>
            <hr>

        </section>

        <?php include('../includes/footer.inc.php'); ?>
    </body>

