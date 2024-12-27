function printNumber(num)
{   
    if(num==2)
    {
        setTimeout(()=>console.log(num),0);
        
    }
    else{
        console.log(num);
        
    }
}

printNumber(1);
printNumber(2);
printNumber(3);
