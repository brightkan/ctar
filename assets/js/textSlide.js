
function textSlide() {
	

    var classNo=1,classSelector;
    classSelector = ".p"+classNo+"t";
    $(classSelector).fadeIn();
    
    //alert(classSelector);
    function changeText(){
                                                                                                                      
    	$(classSelector).fadeOut(1000);
    	classNo++;
    	classSelector = ".p"+classNo+"t";
        

        if(classNo > 2){
        	classNo = 1;
            classSelector = ".p"+classNo+"t";
        }

        $(classSelector).fadeIn(1000);
        
    }


    window.setInterval(function(){changeText();},5000);


}

textSlide();