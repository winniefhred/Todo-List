const input = document.querySelector('.addTask__textArea');
const btn = document.querySelector('.btn');
const ol = document.querySelector('ol') ;
const delbtn = document.createElement('button');

// 1 add new item to the li from the input when we click on the add button

btn.addEventListener('click',function(e){
   const newLi = document.createElement('li'); 
    const delbtn = document.createElement('button');
    let text = input.value; 
    if(text !== ""){
        newLi.textContent= text;
        text = '';
        ol.append(newLi);
        delbtn.innerHTML = '<i class="fas fas-2x fa-times"></i>'
        newLi.append(delbtn);
  
// 2 when we click on the li it should turn green

        newLi.addEventListener('click',function(){
            newLi.classList.add('completed');
        })
//3 when we click on the X button it should remove the list
      delbtn.addEventListener('click',function(){
          const parent = this.parentNode
          parent.remove();

      })

    }
 
  
})