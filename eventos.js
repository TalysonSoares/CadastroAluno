let alunos = [
    ['Samuel', 'samuel@email.com', '85 8888888'],
    ['Bruno', 'bruno@email.com', '85 8888888'],
    ['Matheus', 'matheus@email.com', '85 8888888'],
    ['Talyson', 'talysin085@email.com', '085 777-6666'],
];


function novo() {
    pagina_novo.style.display = 'block'; //mostrar
    pagina_listar.style.display = 'none'; //esconder
}

function adicionar() {
    event.preventDefault();
    alunos.push([`${nome.value}`, `${email.value}`, `${telefone.value}`]);
    listar();
 }

function cleaning() {     //lembrar de anotar no caderno 
    tabela_alunos.innerHTML = '';
}

function listar() {
    pagina_listar.style.display = 'block'; //mostrar
    pagina_novo.style.display = 'none'; //enconder

cleaning();
    
    alunos.forEach(function (cadaAluno) {
        tabela_alunos.innerHTML += `
            <tr>
                <td>${cadaAluno[0]}</td>
                <td>${cadaAluno[1]}</td>
                <td>${cadaAluno[2]}</td>
                <td>---</td>
            </tr>
        `;
    });
}