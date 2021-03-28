const loadingBg = document.querySelector('#loading_bg')
const loadingBgImg = document.querySelector('#loading_bg img')

document.onreadystatechange = function () {
    if (document.readyState == "interactive" || document.readyState == "complete") {

        loadingBg.style.transform = 'translateY(-100%)';
        setTimeout(() => {
            loadingBgImg.style.animation = 'none';
        }, 400);



        const header = document.querySelector('header')

        window.onscroll = function() {
            if(document.documentElement.scrollTop > (window.innerHeight /3)) {
                header.style.transform = 'translateY(0)';
            } else {
                header.style.transform = 'translateY(-100%)';
            }
        }

        let telegramWindowShowing = false;

        const telegramBts = document.querySelectorAll('.telegramtrigger')
        const telegramWindow = document.querySelector('#telegram_window')
        const exitWindow = document.querySelector('#exit_bg')

        for(i=0; i < telegramBts.length; i++) {

            telegramBts[i].addEventListener('click', function() {
                if(telegramWindowShowing == false) {
                    telegramWindowShowing = true;

                    exitWindow.style.opacity = 1;
                    exitWindow.style.visibility = 'visible';

                    setTimeout(() => {
                        telegramWindow.style.opacity = 1;
                        telegramWindow.style.visibility = 'visible';
                        telegramWindow.style.transform = "translateY(-50%)";
                    }, 200);
                }
            })
        }


        exitWindow.addEventListener('click', function() {
            telegramWindowShowing = false;

            exitWindow.style.opacity = 0;
            exitWindow.style.visibility = 'hidden';

            telegramWindow.style.opacity = 0;
            telegramWindow.style.visibility = 'hidden';
            telegramWindow.style.transform = "translateY(-40%)";
        })


        const bullets = document.querySelectorAll('details')

        if(window.matchMedia("(min-width:140vh)").matches) {

            for(i=0;i < bullets.length; i++) {
                bullets[i].setAttribute('open', 'true');
            }
    
        }




    }
  }

