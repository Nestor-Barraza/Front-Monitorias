
var newUrl =''
var url = 'http://localhost:5000/' + newUrl;
var data = this.state = {value: ''};

fetch(url, {
  method: 'POST', 
  body: JSON.stringify(data),
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));

