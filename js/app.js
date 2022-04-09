document.addEventListener("DOMContentLoaded", () =>{


    let element = document.querySelector("main form .warning");
    let submit = document.querySelector(".submit");

    
	submit.addEventListener("click", (e) => {
		e.preventDefault();
		envoieUser();
	});

	let envoieUser = () => {

		let email = document.getElementsByTagName("input")[2].value;
		let password = document.getElementsByTagName("input")[3].value;
		if (!email || !password ) {
			
			element.innerText = "Veuillez remplir tous les champs ";
			element.style.color = "red";
            sessionStorage.clear();
		 
		} else {
			element.innerText = "Vous êtes connecté";
			element.style.color = "green";
			localStorage.setItem("userEmail", email);
            sessionStorage.setItem("userEmail", email);
			localStorage.setItem("userPassword", password);
            sessionStorage.setItem("userPassword", password);

		}
	};
 
    
})