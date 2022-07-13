for(let number = 1; number <= 500; number++){
    document.write(number);
    if(number % 4 === 0){
        document.write(" es multiplo de 4 ");
    }
    if(number % 9 === 0){
        document.write(" es multiplo de 9 ");
    }
    document.write("<br>");
    if(number % 5 === 0){
        document.write("<hr>");
    }
}
