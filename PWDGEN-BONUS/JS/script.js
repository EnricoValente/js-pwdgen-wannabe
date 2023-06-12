let password = ('My new safe password');
console.log = (password, typeof password);

document.getElementById('my-data').innerHTML = 'Your new password is: ' + '<strong>' + password + '</strong>'