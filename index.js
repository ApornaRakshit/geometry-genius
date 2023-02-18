//first card triangle
let serial= 0;
   document.getElementById('first-card').addEventListener('click',function(){
   serial += 1;
   let geometryName = document.getElementById('first-title').innerText;
   let inputValue = getInputValue('input-1');
   let inputValue1= getInputValue('input-2');
   let areaOfTriangle = 0.5 * parseFloat(inputValue) * parseFloat(inputValue1);
   let area = parseFloat(areaOfTriangle).toFixed(2);

   //................empty input validation error  message..............
   if(inputValue===''){
    alert("Input must be filled out");
    return false;
   }
    else if(inputValue1===''){
    alert("Input must be filled out");
    return false;
   }
   else if(inputValue1!=-'input-1'){
    alert("Input must be positive");
    return false;
   }
   displayData(geometryName,area)
});

//second card rectangle
   document.getElementById('second-card').addEventListener('click',function(){
    serial +=1;
    let geometryName = document.getElementById('second-title').innerText;
    let inputValue = getInputValue('first-input');
    let inputValue1= getInputValue('second-input');
    let area = parseInt(inputValue) * parseInt(inputValue1);

   //................empty input validation error  message..............
    if(inputValue===''){
        alert("Input must be filled out");
        return false;
       }
    else if(inputValue1===''){
        alert("Input must be filled out");
        return false;
       }
       else if(inputValue!='input-1'){
        alert("Input can not be string type");
        return false;
       }
   displayData(geometryName,area);
});


// ............common function for input field.............//
function getInputValue(id){
    let value =document.getElementById(id).value
    return value;
}


//third card Parallelogram
document.getElementById('third-card').addEventListener('click',function(){
    serial +=1;
    let geometryName = document.getElementById('third-name').innerText;
    let geometryValue1 = document.getElementById("value-1").innerText;
    let geometryValue2 = document.getElementById("value-2").innerText;
    console.log(geometryName,geometryValue1,geometryValue2)
    let area = parseInt(geometryValue1) * parseInt(geometryValue2);
    
    //show the data
    displayData(geometryName,area)
});

//forth card Rhombus
document.getElementById('forth-card').addEventListener('click',function(){
    //get data from using html id
    serial += 1;
    let geometryName = document.getElementById('forth-name').innerText;
    let geometryValue1 = document.getElementById("d1-value").innerText;
    let geometryValue2 = document.getElementById("d2-value").innerText;
    console.log(geometryName,geometryValue1,geometryValue2)
    let areaOfEllipse = 0.5 * parseFloat(geometryValue1) * parseFloat(geometryValue2);
    let area = parseFloat(areaOfEllipse).toFixed(2)
    //show the data
    displayData(geometryName,area)
});


//fifth card Pentagon
document.getElementById('fifth-card').addEventListener('click',function(){
    //get data from using html id
    serial += 1;
    
    let geometryName = document.getElementById('fifth-name').innerText;
    let geometryValue1 = document.getElementById("v-1").innerText;
    let geometryValue2 = document.getElementById("v-2").innerText;
    console.log(geometryName,geometryValue1,geometryValue2)
    let areaOfPentagon = 0.5 * parseFloat(geometryValue1) * parseFloat(geometryValue2);
    let area = parseFloat(areaOfPentagon).toFixed(2)
    //show the data
    displayData(geometryName,area)
});


//last card Ellipse
document.getElementById('last-card').addEventListener('click',function(){
    //get data from using html id
    serial += 1;
    let geometryName = document.getElementById('last-name').innerText;
    let geometryValue1 = document.getElementById("first-value").innerText;
    let geometryValue2 = document.getElementById("second-value").innerText;
    console.log(geometryName,geometryValue1,geometryValue2)
    let areaOfEllipse = 3.14 * parseFloat(geometryValue1) * parseFloat(geometryValue2);
    let area = parseFloat(areaOfEllipse).toFixed(2)

    //show the data
    displayData(geometryName,area)
});


//............common function for showing data..............
function displayData(geometryName,area){
    let container = document.getElementById('table-container')
    let tr= document.createElement("tr");
    //show the data 
    tr.innerHTML=`
    <td>${serial}.</td>
    <td>${geometryName}</td>
    <td>${area}cm<sup>2</sup></td>
    `;
    container.appendChild(tr);
}
 //mouse over part 
var color = [, "#3C9EE7", "#E7993C","#E73C99", "#3CE746", "#E7993C","#a991f7","#ffffff","#37cdbe","#f6d860",'#1EA1F1',"#1C96E1"];
document.getElementById('cards').addEventListener("mouseover",function() {
document.getElementById('cards').style.background = color[Math.floor(Math.random() * color.length)];
});