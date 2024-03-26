
$("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
    esemenyKezeles1();
    esemenyKezeles2();
    esemenyKezeles3();
    esemenyKezeles4();
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
    const ELEM=$(".ide").eq(0)
    ELEM.html(`<p>jó reggelt!</p>`)
}
function elemekElerese4() {
    /**Ide jön az 4. feladat */
    const ELEM=$(".lista").eq(0)
    szam=Math.random(0,30)+10
    Math.floor(szam)
    ELEM.html(`<p>szöveg ${szam} szöveg</p>`)
}
function elemekFormazasa1() {
    /**Ide jön az 1. feladat */
    const ELEM=$(".lista").eq(0)
    ELEM.addClass("formazott")
}
function esemenyKezeles1() {
    /**Ide jön az 1. feladat */
    $(document).ready(function(){
        $(".lista").on("click",function(){
            $(".kattintasutan").html($(this).html());
        });
    })
}
function esemenyKezeles2(){
    /**Ide jön az 2. feladat */
    const ELEM=$(".feladat")
    ELEM.html(`<button>OK</button>`)
    const gombELEM=$(".feladat button")
    $(".feladat button").on("click", "gombELEM", function(){
        ELEM.html(`<div><img src='kep.jpg alt='Kep'></div>`)
    })
}
function esemenyKezeles3(){
    /**Ide jön az 3. feladat */
}
function esemenyKezeles4(){
    /**Ide jön az 4. feladat */
    $(document).ready(function(){
        for (let index = 0; index < tarolo.length; index++) {
            $(".tarolo").on("click", "div", function() {
                $(".eredmeny").html($(this).html());
            });
        }
    });
}
