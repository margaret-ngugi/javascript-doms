//1.Change document background color to
//silver

//2.Change the font color for h1 title tag to
//green

//3.Change the font case for h3 title tags to
//uppercase

//4.Add one more fruit to the fruits list

//5.Add one more vegetable to the vegetables
//list


//Q1
document.getElementById('body').style.backgroundColor='silver';

//Q2
document.getElementById('title').style.color='Green'


//Q3
document.getElementById('fru').style.textTransform='uppercase'
document.getElementById('veg').style.textTransform='uppercase'


//Q4
let li=document.createElement('li');
li.innerHTML="apple";
document.getElementById('fruList').appendChild('li');

//Q5
let list=document.createElement('list');
list.innerHTML="spinach";
document.getElementById('fruList').appendChild('list');

