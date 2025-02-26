



function addRec() {
    var name = document.getElementById("name")
    var input = document.getElementById("recInput");
    
    var recText = input.value.trim();
    var recName = name.value.trim();

    if (recText !== "") {
        const container = document.getElementById("recList");
        const fieldset=document.createElement("fieldset");

        const p = document.createElement("p");
        const n = document.createElement("p");

        // Create rec text element
        p.textContent = recText;
        n.textContent = recName;
        p.classList.add("rec-text");
        n.classList.add("rec-text");

        // Append list item to the list
        fieldset.appendChild(p);
        fieldset.appendChild(n);
        container.appendChild(fieldset);
        
        // Clear the input field
        name.value="";
        input.value = "";

        popup();

    }
    else {
            alert("Please enter a recommendation.");
        }
}


function popup(){
    var modal = document.getElementById("termsModal");
    var closeBtn = document.querySelector(".accept");
    
    modal.style.display = "block";
    
    closeBtn.onclick = function() {
        modal.style.display = "none";
    };
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
    
}