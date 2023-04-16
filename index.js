const clearDOM = document.querySelector(".clear")
const listDOM = document.getElementById("list")
const inputDOM = document.getElementById("input")
const resetDOM = document.getElementById("reset")



//STORAGE VARIABLES

let LIST = []
    , id = 0;

//Tamamlandi-Tamamlanmadi switchine daha duzenli sekilde atama yapabilmek icin degiskenlerimizi belirliyoruz. 
const CHECK = "bi-check2-circle"; //Tamamlanmis iconu class-fontawesome
const UNCHECK = "bi-circle"; //Tamamlanmadi iconu class-fontawesomne
const LINETHROUGH = "checked";//Ustu cizili iconu class-css


//Ekleme function
function addToDo(toDO, id, done, trash) {

    if(trash) {return;} // BU bir boolean condition. Eger item trash icerisinde ise sonraki asamaya gecme anlamina geliyor.

    const DONE = done ? CHECK : UNCHECK; //Eger toDO tamamlanmis ise check ata. tamamlanmamis(done degil) ise uncheck ata.
    const LINE = done ? LINETHROUGH : ""; // Eger toDO tamamlanmis ise Ustunu ciz, tamamlanmamis ise atla.
    
    const item =   `<li class= "${LINE}" > 
                        <i class=" ${DONE} " job="complete" id="${id}" ></i> 
                        ${toDO} 
                        <i style="float: right;" class= "fa fa-trash-o de trash" job="delete" id="${id}" ></i>
                    </li>`


    const position = "afterbegin";
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

        LIST.push({
            name : toDO,
            id : id,
            done : false,
            trash : false
        })
        id++;
        
      } 
    }
)



addToDo("cof", 0, true, false); 




function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.classList.toggle(LINETHROUGH);


    LIST[element.id].done = LIST [element.id].done ? false: true; 
    }   



function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}

//function reset(resetDOM) {
//    resetDOM.addEventListener("click", (event) => { 
//        listDOM bunyesindeki butun childlari bir array haline get ir.  a git . If there are elements. loop through them and delete them one by one. stop when it reaches 0. 
//
//    });
//
//    onclick = (event) => {};
//
//}


listDOM.addEventListener("click", function(event){
    const element = event.target; //return the clicked element inside list 
    const elementJob = element.attributes.job.value;//.value //will return complete or delete
  

    if(elementJob == "complete") {
        completeToDo(element) ;
    } else if (elementJob == "delete") {
        removeToDo(element);
    }
})



//if it is already CHECKED the HOVER class will light UNCHECKED vice versa . 