var vegek=[];
var kitunok=[];
function Vege(nev,jegy1,jegy2){
    this.nev=nev;
    this.jegy1=jegy1;
    this.jegy2=jegy2;
    this.tovabb=tovabb;
}
function felvesz(){
    var nev=document.getElementById("nev").value;
    var jegy1=document.getElementById("jegy1").value;
    var jegy2=document.getElementById("jegy2").value;
    var tovabb=document.getElementById("tovabb").checked;
    var atlag=document.getElementById("atlag");
    var hiba=document.getElementById("hiba");
    var jo=true;
    
    if (nev=="" || 0>jegy1 || jegy1>5 || 0>jegy2 || jegy2>5 || jegy1=="" || jegy2==""){
        jo=false;
        hiba.innerHTML="Hibás adatokat adtál meg, vagy nem adtál meg elég adatot!!"
    }
        
    
    if (!tovabb && jo){
        var vege=new Vege(nev, jegy1, jegy2, atlag);
        vegek.push(vege);
        kiir();
    }

    if (tovabb && jo){
        var vege=new Vege(nev, jegy1, jegy2, atlag);
        kitunok.push(vege);
        elkiir();
    }
}
    function kiir(){
        var a=parseInt(jegy1.value);
        var b=parseInt(jegy2.value);
        var atlag=(a+b)/2;
        var ki=document.getElementById("ki");
        ki.innerHTML="";
        var tablazat=document.createElement("table")
        for (let i=0; i<vegek.length;i++){
            var vege=vegek[i];
            var sor=document.createElement("tr")
            var cella=document.createElement("td")
            cella.innerHTML=vege.nev+" / ";
            sor.appendChild(cella);
            var cella=document.createElement("td")
            cella.innerHTML="JavaScript osztályzat: "+vege.jegy1+" / ";
            sor.appendChild(cella);
            var cella=document.createElement("td")
            cella.innerHTML="Python osztályzat: "+vege.jegy2+" / ";           
            sor.appendChild(cella);
            var cella=document.createElement("td")
            cella.innerHTML="A kettő jegy átlaga: "+atlag;           
            sor.appendChild(cella);
            sor.onclick=function(){atrak(i)};
            tablazat.appendChild(sor);
            }
        ki.appendChild(tablazat);
    }
    function atrak(id){
        nev.value=""
        vege=vegek[id];
        kitunok.push(vege);
        vegek.splice(id,1);
        kiir();
        elkiir();
    }

    function tovabb(id) {
        vege = vegek[id];
        if (tovabb.checked) {
            elkiir();
        }
    
    }

    function elkiir(){
        var a=parseInt(jegy1.value);
        var b=parseInt(jegy2.value);
        var atlag=(a+b)/2;
        var el=document.getElementById("el")
        el.innerHTML="";
        var tablazat=document.createElement("table");
        for (var i=0; i<kitunok.length;i++){
            var vege=kitunok[i];
            var sor=document.createElement("tr")
            var cella=document.createElement("td")
            cella.innerHTML=vege.nev+" / ";
            sor.appendChild(cella);
            var cella=document.createElement("td");
            cella.innerHTML="JavaScrip osztályzat: "+vege.jegy1+" / ";
            sor.appendChild(cella);
            var cella=document.createElement("td");
            cella.innerHTML="Python osztályzat: "+vege.jegy2+" / ";
            sor.appendChild(cella);
            var cella=document.createElement("td")
            cella.innerHTML="A kettő jegy átlaga: "+atlag;           
            sor.appendChild(cella);
            tablazat.appendChild(sor);
    
            }
        el.appendChild(tablazat);
    }


