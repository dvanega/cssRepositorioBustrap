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
