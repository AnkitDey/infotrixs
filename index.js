
        var typed = new Typed('#element', {
          strings: ['Web Developer','Frontend Developer','Web Designer','Graphic Designer','Video Editor'],
          typeSpeed: 40,
        });

                      var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(event, tabname) {
        for (tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }

        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }
   
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwjx8SYQcUo5WimtvoiSw4wP3S4cuUKb1e6xba_h8WLBS26hrTb32ffihAxZQoFzFd9/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg");
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message send successfully"
                setTimeout(function(){
                    msg.innerHTML = ""
                },5000)
                form.reset()
            })
                
            
                
        
            .catch(error => console.error('Error!', error.message))
        })
    
    document.addEventListener('DOMContentLoaded', function() {
      const hamburger = document.querySelector('.hamburger');
      const sideMenu = document.querySelector('#sidemenu');
  
      hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        sideMenu.classList.toggle('show');
      });
    });
