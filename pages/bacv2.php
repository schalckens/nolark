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
    <link href="../css/bacv2.css" rel="stylesheet" type="text/css">
    <script src="../js/bacv2.js"></script>
    <link rel="icon" href="../favicon.ico">
</head>
<body>
<?php include('../includes/header.html.inc.php'); ?>
<section>
    <h1>Simulateur de mention au bac</h1>
    <hr>
    <form>
        <fieldset>
            <fieldset id="spec">
                <legend>Votre Option au BAC S :</legend>
                <p>
                <input id ="rd_specmath" name="rd_spec" type="radio" value="math" checked>
                <label for="rd_specmath">Mathématiques</label><br/>
                </p>
                <p>
                <input id ="rd_specphys" name="rd_spec" type="radio" value="phys">
                <label for="rd_specphys">Physique-Chimie</label><br/>
                </p>
                <p>
                <input id ="rd_specsvt" name="rd_spec" type="radio" value="svt">
                <label for="rd_specsvt">S.V.T (Science et Vie de la Terre)</label><br/>
                </p>
            </fieldset>
            <legend>Saisir vos notes</legend>
            <p>
                <label for="fre"> Note obtenu en Français Ecrit : </label>
                <input id="fre" type="number">
            </p>
            <p>
                <label for="fro"> Note obtenu en Français Oral : </label>
                <input id="fro" type="number">
            </p>
            <p>
                <label for="hg"> Note obtenu en Histoire-Géographie : </label>
                <input id="hg" type="number">
            </p>
            <p>
                <label for="math"> Note obtenu en Mathématique: </label>
                <input id="math" type="number">
            </p>
            <p>
                <label for="phys"> Note obtenu en Physique-Chimie : </label>
                <input id="phys" type="number">
            </p>
            <p>
                <label for="svt"> Note obtenu en S.V.T : </label>
                <input id="svt" type="number">
            </p>
            <p>
                <label for="lv1"> Note obtenu en LV1 : </label>
                <input id="lv1" type="number">
            </p>
            <p>
                <label for="lv2"> Note obtenu en LV2 : </label>
                <input id="lv2" type="number">
            </p>
            <p>
                <label for="phil"> Note obtenu en Philosophie : </label>
                <input id="phil" type="number">
            </p>
            <p>
                <label for="eps"> Note obtenu en E.P.S : </label>
                <input id="eps" type="number">
            </p>
        </fieldset>
    </form>
    <hr>
</section>
<?php include('../includes/footer.inc.php'); ?>
</body>