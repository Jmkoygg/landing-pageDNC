let seta2=window.document.getElementById("seta2")
let leo=window.document.getElementById("leo")
let sam=window.document.getElementById("sam")
let bru=window.document.getElementById("bru")
let seta=window.document.getElementById("seta")

function Rolardireita(){
    seta.style ="display:none"
    leo.style ="display:none"
    bru.style ="display:flex"
    seta2.style ="display:flex"
}

function Rolaresquerda(){
    seta.style ="display:flex"
    leo.style ="display:flex"
    bru.style ="display:none"
    seta2.style ="display:none"
}