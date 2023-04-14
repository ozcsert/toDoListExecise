const clearDOM = document.querySelector(".clear")
const listDOM = document.getElementById("list")
const inputDOM = document.getElementById("input")


const CHECK =  "fa fa-check-circle co";
const UNCHECK = "fa-sharp fa-regular fa-circle";
const LINETHROUGH = "checked";


//Ekleme function
function addToDo(toDO, id, done, trash) {

    if(trash) {return;} // BU bir boolean condition. Eger item trash icerisinde ise sonraki asamaya gecme anlamina geliyor.

    const DONE = done ? CHECK : UNCHECK; //Eger toDO tamamlanmis ise check ata. tamamlanmamis(done degil) ise uncheck ata.
    const LINE = done ? LINETHROUGH : ""; // Eger toDO tamamlanmis ise Ustunu ciz, tamamlanmamis ise atla.
    
    const item =   `<li class= ${LINE} > 
                        <i class="${DONE}" job="complete" id="${id}" ></i> 
                        ${toDO} 
                        <i style="float: right;" class= "fa fa-trash-o de" job="delete" id="${id}" ></i>
                    </li>`


    const position = "beforeend";
    listDOM.insertAdjacentHTML(position, item);                
}




//Enter tusuna basip serbest birakildiginda(keyup) ekleme functioni ni cagiriyoruz
document.addEventListener ("keyup", function(event){
    if (event.keyCode == 13) {
        const toDO = inputDOM.value;
        
        //eger input bos degilse eklemeyi gerceklestir.
        if(toDO) {
            addToDo(toDO);
        }
        inputDOM.value = "";
        
      } 
    }
)



addToDo("cof", 0, true, false); 