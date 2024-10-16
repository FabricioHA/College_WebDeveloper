function addTask()
{
    const list = document.querySelector(".task-list");
    const newTask = document.querySelector(".add-text-area").value;
    
    if(newTask == "")
    {
        alert("Por favor, Insira uma nova tarefa!");
        return;
    }

    //Criar novo elemento na lista
    let li = document.createElement("li");
    li.textContent = newTask;

    //criar botão para fechar tarefa
    let span = document.createElement("span");
    span.textContent = "X";
    span.onclick = function(){
        list.removeChild(li)
    };

    //Adiciona botão para remover ao item da lista
    li.appendChild(span);
    list.appendChild(li);
}