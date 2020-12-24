var lnbBtn = document.querySelector('.lnb_btn span')


lnbBtn.addEventListener('click', function(){ 
    function linBtnClick(){
        lnbBtn.classList.toggle('active');
    }
    
    lnbBtn.classList.toggle('active',true);
    

});