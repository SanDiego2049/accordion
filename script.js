const answers = document.querySelectorAll(".collapsed");
const plusBtns = document.querySelectorAll(".icon-plus");

// making an array of the two icon paths as I'll be switching them with js
const icons = ['assets/images/icon-plus.svg','assets/images/icon-minus.svg']

//destructured the array so I can easily reference the paths with a variable
const[plus,minus] = icons

// A function to close all the dropdowns
function closeAllAnswers(){
  answers.forEach(answer=>{
    answer.style.display = `none`
  })
}

// Since I'm using a single button for both opening and closing, there is a state to manage whether
// the button has been clicked or not. The logic behind this is: if the button has not been clicked at all
// it performs a function, but if it has been clicked once it performs another function. You'll see that in a bit...
//It is triggered when any of the buttons is clicked, and It works on all the buttons except the one that calls it.
//It is also responsible for the changing of the icon on the open button when you click another button.

function clearBtnStates(btn){
  plusBtns.forEach(btn=>{
    btn.clicked = false
    btn.children[0].src = plus
  })
}

//This function takes five parameters and it takes five arguments.
//The first, num, refers to theposition of the answer (dropdown)
//we are targeting in the nodelist (answer) i.e when you use querySelectorAll,
//every element with the classname being selected is a child of the variable created.
//It acts like an array.The second, visibility, states whether we want to set the
// style of the dropdown to none or block.setClick is used to change the state of the btn.
//clicked. icon will take an argument of whether plus or minus depending 
//on the state of the btn. Btn is a reference to the btn that is currently being worked on.
//Without this function having it as an arguement, the would be a reference error as this function
//won't know what function I'm talking about. This function will be called onclick
// of each of the buttons 
function toggleAnswer(num,visibility,setClick,icon,btn){
  clearBtnStates()
  answers[num].style.display = visibility
  btn.children[0].src = icon
  btn.clicked = setClick
}


//For each of the buttons, We first create a clicked porperty which we set to false i.e
// each of the buttons has not been clicked. Then onclick of each button,
// we close all the dropdowns with the function created above. This ensure that when we click a button,
//only the corresponding dropdown is open after the click. e.target.id refers to the id of the element
//being clicked. I gave each of the buttons an id "btn1... etc." I used the switch-case syntax
//instead of the if-else because there are four conditions. It is also more compact. I used a ternary operator 
// check if the button has been clicked then gave the toggleAnswer arguments in accordance with the side effect
// I want from it. 
plusBtns.forEach(btn=>{
  btn.clicked = false
  btn.onclick = (e) =>{
    closeAllAnswers(btn) 
    switch(e.target.id){
      case 'btn1': (()=>{
        !btn.clicked? (()=>{
          toggleAnswer(0,'block',true,minus,btn)
        })():(()=>{
          toggleAnswer(0,'none',false,plus,btn)
        })()
      })();break;
      case 'btn2': (()=>{
        !btn.clicked? (()=>{
          toggleAnswer(1,'block',true,minus,btn)
        })():(()=>{
          toggleAnswer(1,'none',false,plus,btn)
        })()
      })();break;
      case 'btn3': (()=>{
        !btn.clicked? (()=>{
          toggleAnswer(2,'block',true,minus,btn)
        })():(()=>{
          toggleAnswer(2,'none',false,plus,btn)
        })()
      })();break;
      case 'btn4': (()=>{
        !btn.clicked? (()=>{
          toggleAnswer(3,'block',true,minus,btn)
        })():(()=>{
          toggleAnswer(3,'none',false,plus,btn)
        })()
      })();break;
      default: console.log("hahaha")
    }
  }
})