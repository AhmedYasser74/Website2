function DesignFilter(){


var design=document.getElementById("DesignFilter");
design.addEventListener('click',()=>{

    var coursesContainer = document.getElementById("courses");
    var coursecards=coursesContainer.querySelectorAll(".image");
    
   
   coursecards.forEach(element => {
    if(element.id!="Design")
    element.style.display= "none";

   });
  
   


}
)


}
function All(){


    var All=document.getElementById("All");
    All.addEventListener('click',()=>{
     console.log("aasfas")
    var allcontent=document.getElementById("courses");
    var coursecards=allcontent.querySelectorAll(".image");
    coursecards.forEach(element=>{
        element.style.display= "";
    })

    })
}
DesignFilter();

All();