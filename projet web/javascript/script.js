x = 0
function reponse(id) {
    if (
        (document.getElementById(id).check[0].checked === false) &&
        (document.getElementById(id).check[1].checked === false) &&
        (document.getElementById(id).check[2].checked === true) &&
        (document.getElementById(id).check[3].checked === false)
    ) {
        x++
    }
    if (
        (document.getElementById(id).check[4].checked === false) &&
        (document.getElementById(id).check[5].checked === false) &&
        (document.getElementById(id).check[6].checked === false) &&
        (document.getElementById(id).check[7].checked === true)
    ) {
        x++
    }
    if (
        (document.getElementById(id).check[8].checked === true) &&
        (document.getElementById(id).check[9].checked === true) &&
        (document.getElementById(id).check[10].checked === false) &&
        (document.getElementById(id).check[11].checked === true)
    ) {
        x++
    }
    if (
        (document.getElementById(id).check[12].checked === false) &&
        (document.getElementById(id).check[13].checked === true) &&
        (document.getElementById(id).check[14].checked === false) &&
        (document.getElementById(id).check[15].checked === false)
    ) {
        x++
    }
    if (
        (document.getElementById(id).check[16].checked === false) &&
        (document.getElementById(id).check[17].checked === false) &&
        (document.getElementById(id).check[18].checked === false) &&
        (document.getElementById(id).check[19].checked === true)
    ) {
        x++
    }
    if (
        (document.getElementById(id).check[20].checked === false) &&
        (document.getElementById(id).check[21].checked === true) &&
        (document.getElementById(id).check[22].checked === false) &&
        (document.getElementById(id).check[23].checked === false)
    ) {
        x++
    }
    if (
        (document.getElementById(id).check[24].checked === true) &&
        (document.getElementById(id).check[25].checked === false) &&
        (document.getElementById(id).check[26].checked === false) &&
        (document.getElementById(id).check[27].checked === false)
    ) {
        x++
    }
    if (
        (document.getElementById(id).check[28].checked === false) &&
        (document.getElementById(id).check[29].checked === true) &&
        (document.getElementById(id).check[30].checked === false) &&
        (document.getElementById(id).check[31].checked === false)
    ) {
        x++
    }
    if (
        (document.getElementById(id).check[32].checked === false) &&
        (document.getElementById(id).check[33].checked === false) &&
        (document.getElementById(id).check[34].checked === false) &&
        (document.getElementById(id).check[35].checked === true)
    ) {
        x++
    }
    if (
        (document.getElementById(id).check[36].checked === true) &&
        (document.getElementById(id).check[37].checked === false) &&
        (document.getElementById(id).check[38].checked === false) &&
        (document.getElementById(id).check[39].checked === false)
    ) {
        x++
    }
    else {
        console.log(document.getElementById(id).check[0].checked);

        x = x
    }
    document.write("Vous avez obtenu un score de " , x, " sur 10.", "<br><br>", "La correction du quiz: ", "<br><br>",
        "1-France","<br>", "2-Lionel Messi","<br>", "3-HTML/CSS/JavaScript", "<br>", "4-1914", "<br>", "5-Pancreas", "<br>", "6-Effectuer des calculs et des opérations logique", "<br>", "7-H2O", "<br>", "8-Basketball", "<br>", "9-Pacifique", "<br>", "10-Windows",);

}
function sendmail() {
    alert("votre message est envoyé  par succès")
}