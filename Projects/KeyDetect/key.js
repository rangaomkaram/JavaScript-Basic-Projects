const insert = document.getElementById('insert');

 // there are inbuilit property from window so use key,KeyCode,Code to get require details

window.addEventListener('keydown',(ev)=>{
    insert.innerHTML = `<div class= "codeofkey">
    <table>
    <tr>
    <th>Key</th>
    <th>keyCode</th>
    <th>which</th>
    <th>Code</th>
    </tr>
    <tr>
    <td>${ev.key === ' '? 'Space': ev.key}</td>
    <td>${ev.keyCode}</td>
    <td>${ev.which}</td>
    <td>${ev.code}</td>
    
    </tr>
    </table>
    </div>`
})



