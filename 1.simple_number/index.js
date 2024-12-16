
/* ********************* 1.simple number ***************************** */ 
function btn1Click() {

    lbl1.innerHTML = " ";
 
 for (let i = 1; i <= parseInt(txt1.value); i++) {
   lbl1.innerHTML += i + " , ";  
 }   
}

/* ********************* 2.reverse number ***************************** */ 

function btn2Click() {

    lbl2.innerHTML = " ";

    for (let i = parseInt(txt2.value); i >=1; i--) {
        lbl2.innerHTML += i+ " , ";      
    } 
}
/* ********************* 3.double-textbox num series(11-20)-range ***************************** */

function btn3Click() {

    lbl3.innerHTML = " ";

    for (let i = parseInt(txt3.value); i <= parseInt(txt4.value) ; i++) {
        lbl3.innerHTML += i+ " , ";  
    }
}

/* ********************* 4.sigma number ***************************** */ 

function btn4Click() {

    var sum = 0;

    lbl4.innerHTML = " ";

    for (let i = 1; i <= parseInt(txt5.value); i++) {

        sum = sum + i;

        lbl4.innerHTML += i + "+";
    }
    lbl4.innerHTML +=  "=" + sum;
}

/* ********************* 5.factorial number ***************************** */ 

function btn5Click() {

    var mul = 1;

    lbl5.innerHTML = " ";

    for (let i = 1; i <= parseInt(txt6.value); i++) {

        mul = mul * i;

        lbl5.innerHTML += i + "*";
    }
    lbl5.innerHTML +=  "=" + mul;
}

/* ********************* 6.Odd-even number ***************************** */ 

function btn6Click() {

    var number = 1;
    lbl6.innerHTML = " ";
    lbl7.innerHTML = " ";

    for (let i = 1; i < parseInt(txt7.value); i++) {

        
        if (number % 2 != 0)
            {
                lbl6.innerHTML += number + ",";           
            }

            else{
                lbl7.innerHTML += number + ",";
            }
            number++;           
    } 
}

/* ********************* 7.harmoni number ***************************** */ 

function btn7Click() {

    lbl8.innerHTML = " ";
    var number = 0.0 ;

    for (let i = 1; i <= parseInt(txt8.value); i++) {

        number += 1.0/(txt8.value);
        lbl8.innerHTML += number + ",";

    }
    
}



