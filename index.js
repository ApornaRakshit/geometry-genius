//first card triangle
let serial= 0;
   document.getElementById('first-card').addEventListener('click',function(){
   serial += 1;
   let geometryName = document.getElementById('first-title').innerText;
    let geometryValue1 = document.getElementById('input-1').value;
    let geometryValue2 = document.getElementById('input-2').value;
    let areaOfTriangle = 0.5 * parseFloat(geometryValue1) * parseFloat(geometryValue2);
    let area = parseFloat(areaOfTriangle).toFixed(2)

   displayData(geometryName,area)
});

//second card rectangle

   document.getElementById('second-card').addEventListener('click',function(){
    serial +=1;
    let geometryName = document.getElementById('second-title').innerText;
    let geometryValue1 = document.getElementById('first-input').value;
    let geometryValue2 = document.getElementById('second-input').value;
    let area = parseInt(geometryValue1) * parseInt(geometryValue2);
   
   
   displayData(geometryName,area)
});

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
    let areaOfEllipse = 0.5 * parseFloat(geometryValue1) * parseFloat(geometryValue2);
    let area = parseFloat(areaOfEllipse).toFixed(2)

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







//common function for showing data
function displayData(geometryName,area){
    let container = document.getElementById('table-container')
    let tr= document.createElement("tr");
    //show the data 
    tr.innerHTML=`
    <td>${serial}.</td>
    <td>${geometryName}</td>
    <td>${area}cm<sup>2</sup></td>
    <td>${area}m<sup>2</sup></td>
    `;
    container.appendChild(tr);
}