//create button that starts at 0 and adds 1 every time its clicked

//html

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Button</title>
        <link rel="stylesheet" href="css/button.css" type="text/css">
    </head>
    <body>
        <button id="btn">0</button>
        <script src="js/button.js" type="text/javascript"></script>
    </body>
</html>


//js
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('btn');
    
    button.addEventListener('click', (e) => {
          const count = Number(e.currentTarget.innerText) + 1;
        
          e.currentTarget.innerText = count;
     });
});