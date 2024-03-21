
window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
});

function elemekElerese1() {
    /**Ide jön az első feladat */
    const ELEM=document.querySelectorAll("#f1")[0]
    console.log(ELEM.innerHTML)
}
function elemekElerese2() {
    /**Ide jön az 2.  feladat */
    const ELEM=document.querySelectorAll("#ide")[0]
    ELEM.innerHTML = "jó reggelt!"
}
function elemekElerese3() {
    /**Ide jön az 3. feladat */
    const ELEM=document.querySelectorAll(".ide")[0]
    ELEM.innerHTML = "jó reggelt!"
}
function elemekElerese4() {
    /**Ide jön az 4. feladat */
    const ELEM=document.querySelectorAll("#lista")[0]
    szam=Math.random(0,30)+10
    Math.floor(szam)
    ELEM.innerHTML = `szöveg ${valtozonev} szöveg`
}
