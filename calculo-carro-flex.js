prompt("Vamos calcular qual melhor combustivel a ser utilzado, baseado em seus respectivos valores, se o valor do Álcool estiver 70%(0.7) ou mais, do valor da Gasolina, o melhor a ser usado é a Gasolina! ");

do{
 álcool = parseFloat(prompt(' Digite o preço do Álcool: '));
 gasolina = parseFloat(prompt(' Digite o preço da Gasolina: '));
 
 alert(' Resultado:' + álcool/gasolina);
 var resultado
 resultado = (álcool/gasolina)

 if (resultado > 0.7)
    alert(" Vale a pena o uso da Gasolina! ");
     else 
     if(resultado < 0.7)
     alert (" Vale a pena o uso do Álcool! ");
     else
     if(resultado = 0.7)
     alert(' Tanto faz! ');
        
 continuar = prompt(' Deseja fazer um novo calculo ? s/n ');
 
 alert(" ") 

}while(continuar === 's')
if(continuar === 'n')
alert('Calculo efetuado!');

