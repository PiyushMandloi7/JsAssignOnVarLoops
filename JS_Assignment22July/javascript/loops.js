let x = 1; 
  
// Exit when x becomes greater than 4 
while (x <= 4) 
{ 
    console.log("Value of x:" + x ); 

    // increment the value of x for 
    // next iteration 
    x++; 
} 
let languages = { first : "C", second : "Java",  
                      third : "Python", fourth : "PHP",  
                      fifth : "JavaScript" }; 
  
    // iterate through every property of the 
    // object languages and print all of them 
    // using for..in loops 
    for (itr in languages)  
    { 
        console.log(languages[itr] ) 
    } 
let z=21
    do 
    { 
        // The line while be printer even 
        // if the condition is false 
        console.log("Value of z:" +z); 
  
        z++; 
    } while (z < 20);

    let i = 2s;  
    
    switch (i)   
    {  
       case 0:  
           console.log("i is zero.");  
           break;  
       case 1:  
           console.log("i is one.");  
           break;  
       case 2:  
           console.log("i is two.");  
           break;  
       default:  
           console.log("i is greater than 2.");  
    } 