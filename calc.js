
 function calc() {

    var d = document, profil = risunok = ustanovka = dostavka = resultt= 0;

    var vis = +d.getElementById("vis").value,

    shir = +d.getElementById("shir").value,

    dveri = d.getElementById("dveri"),

    fill = d.getElementById("fill"),

    dost = d.getElementById("dost"),

    ust = d.getElementById("ust"),

    ris = d.getElementById("ris"),

    result = d.getElementById("result"),

    recvder = d.getElementById("recvder");

    mindver = d.getElementById("mindver");

    sh1dver = d.getElementById("sh1dver");
    
    eror = d.getElementById("eror");
               
var rec;
if ( Math.round(shir/800)<2){rec =2;}
else {rec = Math.round(shir/800); };

var mindveri;
if ( Math.ceil(shir/1200)<2){mindveri =2;}
else {mindveri = Math.ceil(shir/1200); };






        if(mindveri >= 3) {

            if(dveri.options[dveri.selectedIndex].value == '2') {dveri.options[2].selected = true;}

            d.getElementById('2dveri').disabled = true;

                               }
           else d.getElementById('2dveri').disabled = false;


            if(mindveri >= 4) {

            if(dveri.options[dveri.selectedIndex].value == '3') {dveri.options[3].selected = true;}

            d.getElementById('3dveri').disabled = true;

                               }
           else d.getElementById('3dveri').disabled = false;


       if(mindveri >= 5) {

            if(dveri.options[dveri.selectedIndex].value == '4') {dveri.options[4].selected = true;}

            d.getElementById('4dveri').disabled = true;

                               }
           else d.getElementById('4dveri').disabled = false;





        if(fill.selectedIndex == 0 || fill.selectedIndex == 6 || fill.selectedIndex == 7  ) {

            ris.checked = false;

            ris.disabled = true;

        } else {

            ris.disabled = false;

        };



        var sq = shir * vis / 1000000,

        cdveri = +dveri.value||mindveri;

        var shirdver;
         shirdver =  Math.ceil(shir/cdveri);

        if (shirdver <600) profil = 3472 * cdveri;

        else if (shirdver >=600&&shirdver< 800) profil = 3666 * cdveri;

        else if (shirdver >=800&&shirdver<=1200) profil = 4053.5 * cdveri;

        if (ust.checked) ustanovka = +ust.value * cdveri;

        if (dost.checked) dostavka = +dost.value;

        if (ris.checked) risunok = +ris.value *sq;
       
       
       
        recdver.innerHTML = rec;
        mindver.innerHTML = mindveri;
        sh1dver.innerHTML = shirdver;
        if (vis > 2600) {result.innerHTML = 0; eror.innerHTML = "Мы производим двери высотой не более 2600мм! Введите другое значение!";}
        else if (shir < 600) {result.innerHTML = 0; eror.innerHTML = "Мы производим двери шкафов-купе общей шириной от 600мм и не более 6000мм! Введите другое значение!";}

        else {resultt = Math.ceil((sq *(+fill.value||0)) + profil + dostavka + ustanovka + risunok );
result.innerHTML=resultt;
        eror.innerHTML = "";};

    }