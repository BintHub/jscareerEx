let myAtmCard={
    fullName: "Dele Fatima",
    age: 25,
    accountNumber : "3102872115",
    balance:500000,
    pin: 5432,
    bank: "stanbic bank",
    state: "lagos",
}

function myTranfer(){
    myAtmCard = prompt("Please insert your ATM card by clicking YES");
    let Pin = prompt("Please enter your pin");
    confirmPin = confirm(`Are you sure ${Pin} is correct ?`);
    confirmPin?alert("correct Pin"):alert("incorrect Pin");

    prompt(" type 1 to WITHDRAW \n type 2 to TRANSFER");
    let accountNumber = prompt("Enter recipient bank details");
    let bank = prompt("select recipient bank:\n 1.GTBank \n 2.Access Bank \n 3.Zenith Bank");
    myAtmCard = confirm(`Cornfirm recipient details:\n Bello Gift \n ${accountNumber}\n ${bank}`);

     let amount= prompt("enter amount to transfer");
     let confirmAmount = confirm(`Are you sure ? ${amount}`);
     if(myAtmCard.balance <= confirmAmount ){
        alert("insufficient balance!!");
    }else{alert("Transaction successful!!");}

    confirm("Do you want to make another transaction?");
          alert("Thank you for using stanbic ibtc");  
}




