// // let x = document.body.firstElementChild
// let z = "2px solid red"
// // x.firstElementChild.style.border = z;
// // x.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.border = z;	
// // x.lastElementChild.style.border = z;

// let quars = document.getElementsByClassName( "quar" ); // находим элементы с классом block
// 	 for( let i = 0; i < quars.length; i++){ // проходим циклом по всем элементам массивоподобного объекта
// 	    quars[4].style.border = z
//  		quars[0].style.border = z
//  		quars[8].style.border = z
// 	  }		


// 	// ________________________________________

// let suite = document.querySelectorAll('li a');
//   console.log(suite)
// for (let suit of suite) {
//   console.log(suit)
//   let checked = suit.getAttribute('href');
//   console.log (typeof checked);
//     if (checked.includes('://')) {
//     suit.style.color = 'orange'
//     }
// };
let button = document.getElementById('button');
let input = document.getElementById('input');
let todo = document.getElementById('todo');
let Arr = [];

button.addEventListener('click',
  function() {
  let newTodo = input.value;
  Arr.push(newTodo);
  render(Arr);
  console.log(Arr)
});

const render = function (newArr) {
  const newLi = Arr.forEach(function(item) {
    console.log(`<li><p id="todoin">${item}</p>/li>`)
    // return (`<li><p id="todoin">${item}</p>/li>`);
    });
  todo.innerHTML = newLi;

}


// <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=">
  <title></title>
</head>
<body>
  <div class="wrapper">
    <button id='button' >Click me</button>
    <input id='input' value=''type='text'>
  </div>
  
  <div class="mytodo">
    <ul id='todo'>

    </ul>
  </div>
</body>
</html>

body {
  background: gray;
}

.wrapper {
  display: flex;
  border: red 1px solid;
  width: 50%;
  margin: 0 auto;
}

#button {
  margin: 0 auto;
  width: 80px;
  height: 30px;
}

#input {
    margin: 0 auto;
  width: 350px;
  height: 20px;
}

.mytodo {
  height: 600px;
  width: 65%;
  border: 2px solid white;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 10px;
}


