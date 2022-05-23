const func = [{
    Nome: "Laura",
    Cargo: "Adm",
    Senha: 20
},
{
    Nome: "Julio",
    Cargo: "Vendedor",
    Senha: 10
},
{
    Nome: "Francisco",
    Cargo: "Adm",
    Senha: 30
},
{
    Nome: "Ana",
    Cargo: "Adm",
    Senha: 40
},
{
    Nome: "Rebeca",
    Cargo: "Vendedor",
    Senha: 50
},
{
    Nome: "Guilherme",
    Cargo: "Vendedor",
    Senha: 20
},
]


const apenasAdm = func.filter(func => (func.Cargo == "Adm"))

const btn = document.getElementById('send')
btn.addEventListener("click", function(e){
    e.preventDefault();
    
    const name = document.getElementById('login').value

    if (name == apenasAdm[0].Nome||apenasAdm[1].Nome||apenasAdm[2].Nome){
        window.location.href = "admpage.html"
    }     
})

const btn2 = document.getElementById('sendadm');

btn.addEventListener("click", function(e){
    e.preventDefault();

    const pass = document.getElementById('senha').value

    if (pass == apenasAdm[0].Senha||apenasAdm[1].Senha||apenasAdm[2].Senha){
        window.alert("cccsd")
    }
})