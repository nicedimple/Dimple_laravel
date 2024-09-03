document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let name = document.getElementById('name').value;
    let age = Number(document.getElementById('age').value);
    let hobbies = document.getElementById('hobbies').value; 
    let isStudent = document.getElementById('student').checked; 


let summaryItem = document.createElement('div');
summaryItem.classList.add('summary-item');

let summaryContent = `<p>Name: ${name} <br>Age: ${age} <br>Hobbies: ${hobbies} <br>Student: ${isStudent ? 'Yes' : 'No'} </p>`;

 let editButton = document.createElement('button');
 editButton.textContent = '✏️';
 editButton.onclick = function(){

    document.getElementById('name').value =name;
    document.getElementById('age').value =age;
    document.getElementById('hobbies').value =hobbies.join(', ')
    document.getElementById('student').checked = isStudent;

    summaryItem.remove();
};

 let deleteButton = document.createElement('button');
 deleteButton.textContent = '⛔';
 deleteButton.onclick = function(){

    summaryItem.remove();
 };

 summaryItem.innerHTML = summaryContent;
 summaryItem.appendChild(editButton);
 summaryItem.appendChild(deleteButton);

 document.getElementById('summary').appendChild(summaryItem);

 document.getElementById("infoForm").reset();
 });

 

//  document.getElementById('summary').appendChild(summary);


//  function editEntry(summary,name,age,hobbies,isStudent) {
    




 