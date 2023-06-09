


 const firstName = prompt ('Inserisci nome')

 console.log (firstName, typeof firstName)



 const surname = prompt ('Inserisci cognome')

 console.log (surname, typeof surname)


 const age = prompt ('Inserisci età')

 console.log (age, typeof age)

 const color = prompt ('Il tuo colore preferto')

 console.log (color, typeof color)

 const classNumber = prompt ('Classe Boolean')

 console.log (classNumber, typeof classNumber)

 const password = firstName + ' ' + surname + ' ' + age + ' ' + color + ' ' + classNumber 

 document.getElementById('my-data').innerHTML = 'La tua nuova password è: ' + '<strong>' + password + '</strong>'
