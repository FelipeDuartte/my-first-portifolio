
const myObserver = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
        else{
          entry.target.classList.remove('show')  
        }
    })
})
const elements = document.querySelectorAll('.hidden')

elements.forEach( (element) => myObserver.observe(element))

const competenciasObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-competencias");
        } else {
            entry.target.classList.remove("show-competencias");
        }
    });
});

const competenciasElements = document.querySelectorAll('.hidden-competencias');

competenciasElements.forEach((element) => competenciasObserver.observe(element));
