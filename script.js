
$("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
});

function elemekElerese1() {
    /**Ide jön az első feladat */
    const ELEM = $("section h2")
    console.log("1. feladat: ",ELEM.html())
}
function elemekElerese2() {
    /**Ide jön az 2.  feladat */
    const ELEM=$("#ide")
    ELEM.eq(0).html(`<p>jó reggelt!</p>`)
}
function elemekElerese3() {
    /**Ide jön az 3. feladat */
    const ELEM=$(".ide")[0]
    ELEM.html(`<p>jó reggelt!</p>`)
}
function elemekElerese4() {
    /**Ide jön az 4. feladat */
    const ELEM=document.querySelectorAll("#lista")[0]
    szam=Math.random(0,30)+10
    Math.floor(szam)
    ELEM.innerHTML = `szöveg ${valtozonev} szöveg`
}
