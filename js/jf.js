   //rewrite
   const passDiv = document.getElementById('pass');
   const circleDiv = document.getElementById('circle');
   const circles = [
       document.getElementById('circles1'),
       document.getElementById('circles2'),
       document.getElementById('circles3'),
       document.getElementById('circles4')
   ];

   let enteredNumbers = '';

   passDiv.addEventListener('click', (e) => {
       if (e.target.dataset.value) {
           const value = e.target.dataset.value;

           // Add the clicked number to the entered numbers
           enteredNumbers += value;
           
           // Limit the number of digits to the number of circles
           if (enteredNumbers.length > circles.length) {
               enteredNumbers = enteredNumbers.slice(0, circles.length);
               window.location.href = 'index.html';
           }

           // Update circles based on the entered numbers
           circles.forEach((circle, index) => {
               if (index < enteredNumbers.length) {
                   circle.style.backgroundColor = 'white'; // Change color to indicate active state
                   
               } else {
       
               }
           });
       }
   });


          // Handle click events on the number pad
          passDiv.addEventListener('click', (e) => {
            if (e.target.dataset.value) {
                const value = e.target.dataset.value;
                handleInput(value);
            }
        });

        // Handle keyboard input (only digits 0-9)
        document.addEventListener('keydown', (e) => {
            const key = e.key;
            if (!isNaN(key) && key !== ' ') { // Ensure the key is a digit
                handleInput(key);
            }
        });
            