document.addEventListener("DOMContentLoaded", () =>{
    const element = document.querySelector("main form .warning");
    const email = document.querySelector(".email");
    const password = document.querySelector(".password");
    const submit = document.querySelector(".submit");

    
	let envoieUser = () => {
	
		if (!email || !password ) {
			element.innerText = "Veuillez remplir tous les champs ";
            sessionStorage.clear();
		 
		} else {
			element.innerText = "Votre formulaire a bien été envoyé";
			localStorage.setItem("user", email, "userpassword", password);
			sessionStorage.setItem("user", "sessionid", "userpassword", "passwordid");

		}
	};
    submit.addEventListener("click", e => {
		e.preventDefault();
		envoieUser();
	});
    
})