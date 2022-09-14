    let modalButtons = document.querySelectorAll(".boton")
    let modalContainer = document.querySelector(".modal-container")
    
    
    modalButtons.forEach(el => el.addEventListener("click",(e) => {
        modalContainer.style.visibility = "visible"
    }))
    
       modalContainer.addEventListener("click", (e) => {
        if (e.target === e.currentTarget) {
            modalContainer.style.visibility = "hidden"
        }
    })
    
   

