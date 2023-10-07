let ProdReq = Number(prompt("Quantos produtos você deseja pegar: "))
let ProdEst = 100

if(ProdReq <= ProdEst && ProdReq > 0){
    alert("há quantidade suficiente em estoque!")
}else{
    alert("não ha quantidade suficiente em estoque")
}
