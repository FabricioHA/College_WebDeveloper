function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    
    // Validação simples
    if (name === "" || email === "" || password === "") 
    {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Todos os campos devem ser preenchidos!";
        return false;
    }
    
    // Validação de e-mail simples
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(email)) {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Por favor, insira um e-mail válido.";
    return false;
    }
    
    // Se a validação for bem-sucedida, esconder a mensagem de erro
    errorMessage.style.display = "none";
    alert("Formulário enviado com sucesso!");
    return true;
}