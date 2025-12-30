 
 const dropdownBtn = document.querySelector('.dropbtn');
        const dropdownContent = document.getElementById("myDropdown");
    
        dropdownBtn.addEventListener('click', function(){
            dropdownContent.classList.toggle("show");
        });

        window.onclick = function(event) {
            const dropdowns = document.getElementsByClassName('dropdown-content');
            if (!event.target.matches(".dropbtn")) {
                const dropdowns = document.getElementsByClassName("dropdown-content");
           if (dropdowns[0].classList.contains('show')) {
                dropdowns[0].classList.remove('show');
            }
        }
    }

