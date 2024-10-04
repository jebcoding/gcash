document.addEventListener('DOMContentLoaded', () => {
    const page = document.querySelector('meta[name = "page"').getAttribute('content');
    const loadingDiv = document.getElementById('loading');
    let hideLoadingTimeout;

   
    // Set a timeout to hide the loading indicator after 3 seconds
    function hideLoading() {
        if (loadingDiv) {
            loadingDiv.style.display = 'none';
        }
    }

    hideLoadingTimeout = setTimeout(() => {
        hideLoading();
        document.body
    }, 1000);

    //for 2 pages html
    if (page === 'login') {
        loginFunction();
    } else if (page === 'index') {
        indexFunction();
    }
//index.html
function indexFunction() {
    setTimeout(function() {
        window.location.href = "../login.html";
    }, 2000);
}

//login.html
function loginFunction() {
    //footer
   document.getElementById('but').addEventListener('click', () => {
   document.getElementById('foot').style.display = 'none';

   //pass field
    const passDiv = document.getElementById('pass');
    const circleDiv = document.getElementById('circle');

    passDiv.classList.remove('hidden');
    circleDiv.classList.remove('hidden');


    const circlesArray = [
        document.getElementById('circles1'),
        document.getElementById('circles2'),
        document.getElementById('circles3'),
        document.getElementById('circles4')
    ];

    let enteredNumbers = '';

    function handleInput(value) {
      

        if (value !== 'delete') {
            if(enteredNumbers.length < circlesArray.length) {
                enteredNumbers += value;
            }
        } else {
            enteredNumbers = enteredNumbers.slice(0, -1);
        }

        circlesArray.forEach((circle, index) => {
            if (index < enteredNumbers.length) {
                circle.style.backgroundColor = 'white';
            } else {
                circle.style.backgroundColor = '';
            }
        });
        
        if(enteredNumbers.length === circlesArray.length){
            enteredNumbers = enteredNumbers.slice(0, circlesArray.length);
            let password = '1234';
                if (enteredNumbers == password){
                    window.location.href = 'index.html';
                    
                } else {
                    console.log('Wrong MPIN',enteredNumbers);
                }
            }
        
        }
           
       //rewrite         
      passDiv.addEventListener("click", (e) => {
            if(e.target.dataset.value) {
                const value = e.target.dataset.value;

                handleInput(value);
            }
      });
      document.getElementById('del').addEventListener('click', () => {
            handleInput('delete');
      });

      document.addEventListener('keydown', (e) => {
        const key = e.key;
        if (!isNaN(key) && key !== ' ') { 
            handleInput(key);
        } else if (key === 'Backspace') {
            handleInput('delete')
        }
      });
    
        clearTimeout(hideLoadingTimeout);
        hideLoading();
      }); 
     
    }
});