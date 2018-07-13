let p1 = "papas"
let p2 = "tortas"
let pre1 = 2.5
let pre2 = 12.5

let html = 
`<ul>
<li>${p1}"</li>
<li>${pre1}"</li>
<li>${p2}"</li>
<li>${pre2}"</li>
</ul>`

var $app = document.getElementById("app");
console.log($app);
$app.innerHTML = html;

function btnsaluda(){
    console.log("hola mundo");
}

let a = 10;

let b = a;
console.log(a);
console.log(b);

a = 20;
console.log(a);
//paso por referencia
let pedro = {
    edad:25
};
let luis = pedro;
console.log(luis.edad);
luis.edad = 30;
console.log(pedro.edad);

let mayor =  function(a){
    return 5 > a;
}

let Persona = function(nombre){
    this.name = nombre;
    this.pv =100;
    this.sp=100;
    this.cura=function(targetPerson){
        console.log(this);
        if(this.sp > 40){
            targetPerson.pv += 40;
            this.pv -= 40;
        }else {
            console.warn("no tienes puntos de magia");
        } 
    }
    this.status = function(targetPerson) {
        console.log(this);
        console.log(targetPerson);
    } 
    this.atacar = function(targetPerson){
        if(targetPerson.pv > 0)
        {
            if(this.sp > 0){
                targetPerson.pv -= 30;
                this.sp -= 20;
            }else{
                if(this.pv > 0){
                    targetPerson.pv -= 30;
                    this.pv -= 30;
                }else{
                    console.log("lo intente");
                }
            }
        }else
        {
            console.log("esta muerto")
        }
    }  
}   

let gandal = new Persona("gandalf");
let javier = new Persona("pedro");

gandal.cura(javier);

console.log("-----------");
gandal.status(javier);
