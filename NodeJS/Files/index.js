const fs = require('fs');

fs.appendFile('employees.json','{"name":"Employee 1 Name", "salary": 2000}' , (err)=> {
    if (err) console.log(err);
})

fs.readFile('employees.json', 'utf8', (err, data)=> {
    if (err) console.log(err);
    console.log(data);
})

fs.writeFile('employees.json', '{"name":"Employee 1 Name", "salary": 4000}', 'utf8', (err)=>{
    if (err) console.log(err);
})

fs.unlink('employees.json', (err) => {
    if (err) console.log(err);
}) 
