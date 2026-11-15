const btnTemaEscuro = document.querySelector(".TemaEscuro");
const btnTemaClaro = document.querySelector(".TemaClaro");

if (localStorage.getItem("tema") === "claro") {
    document.body.classList.add("Claro");
}

btnTemaEscuro.addEventListener("click", function () {
    document.body.classList.remove("Claro");
    localStorage.setItem("tema", "escuro");
});

btnTemaClaro.addEventListener("click", function () {
    document.body.classList.add("Claro");
    localStorage.setItem("tema", "claro");
});


const carrossel = document.querySelector("#carrossel-principal");

if (carrossel) {
    const slides = carrossel.querySelectorAll(".carrossel-slide");
    const botaoAnterior = carrossel.querySelector(".carrossel-seta.anterior");
    const botaoProximo = carrossel.querySelector(".carrossel-seta.proximo");
    const indicadores = carrossel.querySelector(".carrossel-indicadores");

    let indiceAtual = 0;
    let temporizador;

    slides.forEach((slide, indice) => {
        const indicador = document.createElement("button");
        indicador.setAttribute("aria-label", `Ir para a imagem ${indice + 1}`);

        indicador.addEventListener("click", () => {
            mostrarSlide(indice);
            reiniciarCarrossel();
        });

        indicadores.appendChild(indicador);
    });

    const botoesIndicadores = indicadores.querySelectorAll("button");

    function mostrarSlide(indice) {
        indiceAtual = (indice + slides.length) % slides.length;

        slides.forEach((slide, i) => {
            slide.classList.toggle("ativo", i === indiceAtual);
        });

        botoesIndicadores.forEach((botao, i) => {
            botao.classList.toggle("ativo", i === indiceAtual);
        });
    }

    function proximoSlide() {
        mostrarSlide(indiceAtual + 1);
    }

    function slideAnterior() {
        mostrarSlide(indiceAtual - 1);
    }

    function iniciarCarrossel() {
        clearInterval(temporizador);
        temporizador = setInterval(() => {
            proximoSlide();
        }, 5000);
    }

    function reiniciarCarrossel() {
        iniciarCarrossel();
    }

    botaoProximo.addEventListener("click", () => {
        proximoSlide();
        reiniciarCarrossel();
    });

    botaoAnterior.addEventListener("click", () => {
        slideAnterior();
        reiniciarCarrossel();
    });

    carrossel.addEventListener("mouseenter", () => {
        clearInterval(temporizador);
    });

    carrossel.addEventListener("mouseleave", iniciarCarrossel);

    mostrarSlide(0);
    iniciarCarrossel();
}


if (document.getElementById("mudarTamanho")) {

const hambur = document.querySelectorAll(".hambur");
const botaoHamb = document.getElementById("test");
const div = document.getElementById("mudarTamanho");

botaoHamb.addEventListener('click', () => {
    div.style.height = "auto";
    botaoHamb.style.backgroundColor = "#FFB800"
    botaoHamb.style.color = "#121212"
    botaotodos.style.backgroundColor = "var(--cor-card)"
    botaotodos.style.color = "var(--cor-texto)"
    botaoacomp.style.backgroundColor = "var(--cor-card)"
    botaoacomp.style.color = "var(--cor-texto)"
    botaobeb.style.backgroundColor = "var(--cor-card)"
    botaobeb.style.color = "var(--cor-texto)"
    botaocombo.style.backgroundColor = "var(--cor-card)"
    botaocombo.style.color = "var(--cor-texto)"

    acomp.forEach(acomp => {
        acomp.classList.remove("mostrar");
    });
    hambur.forEach(hambur => {
        hambur.classList.remove("mostrar");
    });
    beb.forEach(beb => {
        beb.classList.remove("mostrar");
    });
    combo.forEach(combo => {
        combo.classList.remove("mostrar");
    });

    acomp.forEach(acomp => {
        acomp.classList.toggle("mostrar");
    });
    beb.forEach(beb => {
        beb.classList.toggle("mostrar");
    });
    combo.forEach(combo => {
        combo.classList.toggle("mostrar");
    });
});

const acomp = document.querySelectorAll(".acomp");
const botaoacomp = document.getElementById("test2");

botaoacomp.addEventListener('click', () => {
    div.style.height = "auto";
    botaoacomp.style.backgroundColor = "#FFB800" 
    botaoacomp.style.color = "#121212"
    botaotodos.style.backgroundColor = "var(--cor-card)"
    botaotodos.style.color = "var(--cor-texto)"
    botaoHamb.style.backgroundColor = "var(--cor-card)"
    botaoHamb.style.color = "var(--cor-texto)"
    botaobeb.style.backgroundColor = "var(--cor-card)"
    botaobeb.style.color = "var(--cor-texto)"
    botaocombo.style.backgroundColor = "var(--cor-card)"
    botaocombo.style.color = "var(--cor-texto)"

    acomp.forEach(acomp => {
        acomp.classList.remove("mostrar");
    });
    hambur.forEach(hambur => {
        hambur.classList.remove("mostrar");
    });
    beb.forEach(beb => {
        beb.classList.remove("mostrar");
    });
    combo.forEach(combo => {
        combo.classList.remove("mostrar");
    });

    hambur.forEach(hambur => {
        hambur.classList.toggle("mostrar");
    });
    beb.forEach(beb => {
        beb.classList.toggle("mostrar");
    });
    combo.forEach(combo => {
        combo.classList.toggle("mostrar");
    });
});

const beb = document.querySelectorAll(".beb");
const botaobeb = document.getElementById("test3");

botaobeb.addEventListener('click', () => {
    div.style.height = "auto";
    botaobeb.style.backgroundColor = "#FFB800" 
    botaobeb.style.color = "#121212"
    botaotodos.style.backgroundColor = "var(--cor-card)"   
    botaotodos.style.color = "var(--cor-texto)"
    botaoHamb.style.backgroundColor = "var(--cor-card)"
    botaoHamb.style.color = "var(--cor-texto)"
    botaoacomp.style.backgroundColor = "var(--cor-card)"
    botaoacomp.style.color = "var(--cor-texto)"
    botaocombo.style.backgroundColor = "var(--cor-card)"
    botaocombo.style.color = "var(--cor-texto)"

    acomp.forEach(acomp => {
        acomp.classList.remove("mostrar");
    });
    hambur.forEach(hambur => {
        hambur.classList.remove("mostrar");
    });
    beb.forEach(beb => {
        beb.classList.remove("mostrar");
    });
    combo.forEach(combo => {
        combo.classList.remove("mostrar");
    });

    combo.forEach(combo => {
        combo.classList.toggle("mostrar");
    });
    hambur.forEach(hambur => {
        hambur.classList.toggle("mostrar");
    });
    acomp.forEach(acomp => {
        acomp.classList.toggle("mostrar");
    });
});

const combo = document.querySelectorAll(".combo");
const botaocombo = document.getElementById("test4");

botaocombo.addEventListener('click', () => {
    div.style.height = "auto";
    botaocombo.style.backgroundColor = "#FFB800" 
    botaocombo.style.color = "#121212"
    botaotodos.style.backgroundColor = "var(--cor-card)"    
    botaotodos.style.color = "var(--cor-texto)"
    botaoHamb.style.backgroundColor = "var(--cor-card)"
    botaoHamb.style.color = "var(--cor-texto)"
    botaoacomp.style.backgroundColor = "var(--cor-card)"
    botaoacomp.style.color = "var(--cor-texto)"
    botaobeb.style.backgroundColor = "var(--cor-card)"
    botaobeb.style.color = "var(--cor-texto)"

    acomp.forEach(acomp => {
        acomp.classList.remove("mostrar");
    });
    hambur.forEach(hambur => {
        hambur.classList.remove("mostrar");
    });
    beb.forEach(beb => {
        beb.classList.remove("mostrar");
    });
    combo.forEach(combo => {
        combo.classList.remove("mostrar");
    });

    hambur.forEach(hambur => {
        hambur.classList.toggle("mostrar");
    });
    acomp.forEach(acomp => {
        acomp.classList.toggle("mostrar");
    });
    beb.forEach(beb => {
        beb.classList.toggle("mostrar");
    });
});

const botaotodos = document.getElementById("ativo");

botaotodos.addEventListener('click', () => {
    div.style.height = "200vh";
    botaotodos.style.backgroundColor = "#FFB800" 
    botaotodos.style.color = "#121212"
    botaocombo.style.backgroundColor = "var(--cor-card)"     
    botaocombo.style.color = "var(--cor-texto)"
    botaoHamb.style.backgroundColor = "var(--cor-card)"
    botaoHamb.style.color = "var(--cor-texto)"
    botaoacomp.style.backgroundColor = "var(--cor-card)"
    botaoacomp.style.color = "var(--cor-texto)"
    botaobeb.style.backgroundColor = "var(--cor-card)"
    botaobeb.style.color = "var(--cor-texto)"

    acomp.forEach(acomp => {
        acomp.classList.remove("mostrar");
    });
    hambur.forEach(hambur => {
        hambur.classList.remove("mostrar");
    });
    beb.forEach(beb => {
        beb.classList.remove("mostrar");
    });
    combo.forEach(combo => {
        combo.classList.remove("mostrar");
    });
});

const linkHome = document.getElementById('link-home');
const linkCardapio = document.getElementById('link-cardapio');

window.addEventListener('scroll', () => {
    const scrollAtual = window.scrollY;
    const alturaGatilho = window.innerHeight;

    if (scrollAtual < alturaGatilho) {
        linkHome.style.color = '#FFB800';
        linkCardapio.style.color = '';    
    } else {
        linkHome.style.color = '';
        linkCardapio.style.color = '#FFB800'; 
    }
});

window.dispatchEvent(new Event('scroll'));

const barraPesquisa = document.getElementById('barra-pesquisa');

barraPesquisa.addEventListener('keypress', (elemento) => {
    if (elemento.key === 'Enter') {
        const termoBuscado = barraPesquisa.value.toLowerCase().trim();

        if (termoBuscado === "") return;

        const todosOsProdutos = document.querySelectorAll('.card-produto');
        let produtoEncontrado = null;
        
        todosOsProdutos.forEach(produto => {
            const nomeProduto = produto.querySelector('h3').textContent.toLowerCase();
            
            if (nomeProduto.includes(termoBuscado)) {
                produtoEncontrado = produto;
            }
        });
        
        if (produtoEncontrado) {
            produtoEncontrado.scrollIntoView({
                behavior: 'smooth', 
                block: 'center'    
            });
        
            produtoEncontrado.style.outline = "3px solid #ffcc00";
            produtoEncontrado.style.borderRadius = "8px";
            setTimeout(() => {
                produtoEncontrado.style.outline = "none";
            }, 2000);
        } else {
            alert('Produto não encontrado! Tente digitar outra palavra.');
        }
    }
});

}






document.addEventListener('DOMContentLoaded', () => {
    const inputCpf = document.getElementById('cad-cpf');
    const inputTel = document.getElementById('cad-tel');
    const inputCep = document.getElementById('end-cep');

    if (inputCpf) {
        inputCpf.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11);
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            e.target.value = value;
        });
    }

    if (inputTel) {
        inputTel.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11);
            value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
            value = value.replace(/(\d)(\d{4})$/, '$1-$2');
            e.target.value = value;
        });
    }

    if (inputCep) {
        inputCep.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 8) value = value.slice(0, 8);
            value = value.replace(/^(\d{5})(\d)/, '$1-$2');
            e.target.value = value;
        });
    }
});



// ===== LOGIN E CADASTRO =====

// Lê a lista de clientes cadastrados (se não existir nenhum, devolve lista vazia)

function lerClientes() {
    return JSON.parse(localStorage.getItem("clientes")) || [];
}

// Devolve o cliente que está logado, ou null se ninguém estiver

function clienteLogado() {
    const id = localStorage.getItem("clienteLogadoId");
    if (id === null) return null;
    return lerClientes().find(c => c.id === Number(id)) || null;
}

// --- Proteção das páginas: sem login, volta para a home e abre o pop-up ---
if (document.body.classList.contains("protegida") && !clienteLogado()) {
    sessionStorage.setItem("abrirModal", "sim");
    window.location.replace("index.html");
}

const botaoEntrar = document.getElementById("Cadastro");
const modalAuth = document.getElementById("modal-auth");

// --- Botão do cabeçalho: vira "Sair" quando há alguém logado ---
if (clienteLogado()) {
    botaoEntrar.textContent = "Sair";
}

botaoEntrar.addEventListener("click", function (e) {
    e.preventDefault();
    if (clienteLogado()) {
        localStorage.removeItem("clienteLogadoId");   // faz o logout
        window.location.href = "index.html";
    } else if (modalAuth) {
        modalAuth.classList.add("ativo");             // abre o pop-up
    }
});

// --- Pop-up: fechar e abrir automaticamente quando vier redirecionado ---
if (modalAuth) {
    document.getElementById("btn-fechar-modal").addEventListener("click", function () {
        modalAuth.classList.remove("ativo");
    });

    modalAuth.addEventListener("click", function (e) {
        if (e.target === modalAuth) modalAuth.classList.remove("ativo");
    });

    if (sessionStorage.getItem("abrirModal") === "sim") {
        sessionStorage.removeItem("abrirModal");
        modalAuth.classList.add("ativo");
    }
}

// --- Cadastro ---
const formCadastro = document.getElementById("form-cadastro");

if (formCadastro) {
    formCadastro.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("cad-nome").value.trim();
        const email = document.getElementById("cad-email").value.trim().toLowerCase();
        const telefone = document.getElementById("cad-tel").value.replace(/\D/g, "");  // só números
        const cpf = document.getElementById("cad-cpf").value.replace(/\D/g, "");       // só números
        const senha = document.getElementById("cad-senha").value;

        if (nome.length < 3) { alert("Digite seu nome completo."); return; }
        if (telefone.length < 10) { alert("Telefone incompleto."); return; }
        if (cpf.length !== 11) { alert("CPF incompleto."); return; }
        if (senha.length < 6) { alert("A senha precisa ter pelo menos 6 caracteres."); return; }

        const clientes = lerClientes();

        if (clientes.some(c => c.email === email)) { alert("Este e-mail já está cadastrado."); return; }
        if (clientes.some(c => c.cpf === cpf)) { alert("Este CPF já está cadastrado."); return; }

        // o novo id é o do último cliente + 1 (ou 1, se for o primeiro)
        let novoId = 1;
        if (clientes.length > 0) {
            novoId = clientes[clientes.length - 1].id + 1;
        }

        clientes.push({
            id: novoId,
            nome: nome,
            email: email,
            telefone: telefone,
            cpf: cpf,
            senha: senha,
            dataCadastro: new Date().toISOString()
        });

        localStorage.setItem("clientes", JSON.stringify(clientes));
        localStorage.setItem("clienteLogadoId", novoId);   // já entra logado
        window.location.reload();
    });
}

// --- Login ---
const formLogin = document.getElementById("form-login");

if (formLogin) {
    formLogin.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("login-email").value.trim().toLowerCase();
        const senha = document.getElementById("login-senha").value;

        const cliente = lerClientes().find(c => c.email === email && c.senha === senha);

        if (!cliente) {
            alert("E-mail ou senha incorretos.");
            return;
        }

        localStorage.setItem("clienteLogadoId", cliente.id);
        window.location.reload();
    });
}













// ===== CARRINHO =====
// Cada cliente tem o seu: carrinho_1, carrinho_2...

function chaveCarrinho() {
    return "carrinho_" + localStorage.getItem("clienteLogadoId");
}

function lerCarrinho() {
    return JSON.parse(localStorage.getItem(chaveCarrinho())) || [];
}

function salvarCarrinho(carrinho) {
    localStorage.setItem(chaveCarrinho(), JSON.stringify(carrinho));
    atualizarContador();
}

// Soma as quantidades e mostra no (0) do cabeçalho
function atualizarContador() {
    let total = 0;

    if (clienteLogado()) {
        lerCarrinho().forEach(function (item) {
            total = total + item.qtd;
        });
    }

    document.querySelector(".numero-carrinho").textContent = "(" + total + ")";
}

atualizarContador();

// --- Botões "+ Adicionar" ---
const botoesAdicionar = document.querySelectorAll(".btn-adicionar");

botoesAdicionar.forEach(function (botao) {
    botao.addEventListener("click", function () {
        if (!clienteLogado()) {
            modalAuth.classList.add("ativo");
            return;
        }

        // pega o card do produto onde o botão está
        const card = botao.closest(".card-produto");
        const id = Number(card.dataset.id);

        const carrinho = lerCarrinho();
        const itemExistente = carrinho.find(function (item) {
            return item.produto_id === id;
        });

        if (itemExistente) {
            itemExistente.qtd = itemExistente.qtd + 1;
        } else {
            carrinho.push({
                produto_id: id,
                nome: card.querySelector("h3").textContent,
                preco: Number(card.dataset.preco),
                imagem: card.querySelector("img").getAttribute("src"),
                qtd: 1
            });
        }

        salvarCarrinho(carrinho);

        // aviso rápido de que adicionou
        botao.textContent = "✓ Adicionado";
        setTimeout(function () {
            botao.textContent = "+ Adicionar";
        }, 1000);
    });
});





// ===== PÁGINA DO CARRINHO =====
const TAXA_ENTREGA = 0;
const listaCarrinho = document.getElementById("lista-carrinho");

// Transforma 71.7 em "R$ 71,70"
function formatarPreco(valor) {
    return "R$ " + valor.toFixed(2).replace(".", ",");
}

function desenharCarrinho() {
    const carrinho = lerCarrinho();
    let subtotal = 0;

    listaCarrinho.innerHTML = "";

    if (carrinho.length === 0) {
        listaCarrinho.innerHTML = "<p class='carrinho-vazio'>Seu carrinho está vazio.</p>";
    }

    carrinho.forEach(function (item) {
        const totalItem = item.preco * item.qtd;
        subtotal = subtotal + totalItem;

        listaCarrinho.innerHTML += `
            <div class="item-carrinho">
                <img src="${item.imagem}" alt="">
                <div class="item-info">
                    <h3>${item.nome}</h3>
                    <span>${formatarPreco(item.preco)} cada</span>
                </div>
                <div class="item-qtd">
                    <button data-acao="menos" data-id="${item.produto_id}">-</button>
                    <span>${item.qtd}</span>
                    <button data-acao="mais" data-id="${item.produto_id}">+</button>
                </div>
                <span class="item-total">${formatarPreco(totalItem)}</span>
                <button class="btn-remover" data-acao="remover" data-id="${item.produto_id}">✕</button>
            </div>`;
    });

    // Resumo do pedido
    document.getElementById("resumo-subtotal").textContent = formatarPreco(subtotal);
    document.getElementById("resumo-taxa").textContent = formatarPreco(TAXA_ENTREGA);
    document.getElementById("resumo-total").textContent = formatarPreco(subtotal + TAXA_ENTREGA);

    // O botão só funciona se houver itens
    document.getElementById("btn-finalizar").disabled = (carrinho.length === 0);
}

function mostrarEndereco() {
    const cliente = clienteLogado();
    const campo = document.getElementById("resumo-endereco");

    if (cliente && cliente.endereco) {
        campo.textContent = cliente.endereco.rua + ", " + cliente.endereco.numero + " - " +
                            cliente.endereco.bairro + ", " + cliente.endereco.cidade + "/" +
                            cliente.endereco.estado;
    } else {
        campo.innerHTML = "Nenhum endereço cadastrado. <a href='perfil.html'>Cadastrar no perfil</a>";
    }
}

if (listaCarrinho) {
    desenharCarrinho();
    mostrarEndereco();

    // Um único "ouvinte" para todos os botões da lista (+, - e ✕)
    listaCarrinho.addEventListener("click", function (e) {
        const botao = e.target.closest("button");
        if (!botao) return;

        const id = Number(botao.dataset.id);
        const acao = botao.dataset.acao;
        let carrinho = lerCarrinho();
        const item = carrinho.find(function (i) {
            return i.produto_id === id;
        });

        if (acao === "mais") {
            item.qtd = item.qtd + 1;
        }
        if (acao === "menos") {
            item.qtd = item.qtd - 1;
        }
        if (acao === "remover" || item.qtd <= 0) {
            carrinho = carrinho.filter(function (i) {
                return i.produto_id !== id;
            });
        }

        salvarCarrinho(carrinho);
        desenharCarrinho();
    });
}














// ===== PÁGINA DO PERFIL =====
const formPerfil = document.getElementById("form-perfil");

function salvarClientes(lista) {
    localStorage.setItem("clientes", JSON.stringify(lista));
}

// Máscaras (mesma lógica das do cadastro)
function mascaraCpf(valor) {
    let v = valor.replace(/\D/g, "").slice(0, 11);
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return v;
}

function mascaraTel(valor) {
    let v = valor.replace(/\D/g, "").slice(0, 11);
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
    v = v.replace(/(\d)(\d{4})$/, "$1-$2");
    return v;
}

function mascaraCep(valor) {
    let v = valor.replace(/\D/g, "").slice(0, 8);
    v = v.replace(/^(\d{5})(\d)/, "$1-$2");
    return v;
}

if (formPerfil) {
    const campoNome = document.getElementById("perfil-nome");
    const campoEmail = document.getElementById("perfil-email");
    const campoTel = document.getElementById("perfil-tel");
    const campoCpf = document.getElementById("perfil-cpf");

    const cardForm = document.getElementById("card-form-endereco");
    const formEndereco = document.getElementById("form-endereco");
    const campoEstado = document.getElementById("end-estado");

    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
                   "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    // ---------- Preencher a tela com os dados do cliente ----------
    function preencherPerfil() {
        const cliente = clienteLogado();

        document.getElementById("perfil-titulo-nome").textContent = cliente.nome;
        document.getElementById("perfil-id").textContent = "#" + String(cliente.id).padStart(6, "0");

        if (cliente.dataCadastro) {
            const data = new Date(cliente.dataCadastro);
            document.getElementById("perfil-membro").textContent =
                "Membro desde " + meses[data.getMonth()] + " " + data.getFullYear();
        }

        campoNome.value = cliente.nome;
        campoEmail.value = cliente.email;
        campoTel.value = mascaraTel(cliente.telefone);
        campoCpf.value = mascaraCpf(cliente.cpf);
    }

    // ---------- Mostrar o endereço no cartão lateral ----------
    function mostrarEnderecoPerfil() {
        const cliente = clienteLogado();
        const texto = document.getElementById("endereco-texto");
        const botaoEditar = document.getElementById("btn-editar-endereco");
        const botaoRemover = document.getElementById("btn-remover-endereco");

        if (cliente.endereco) {
            const e = cliente.endereco;
            let linha1 = e.rua + ", " + e.numero;
            if (e.complemento) linha1 = linha1 + " (" + e.complemento + ")";

            texto.innerHTML = linha1 + "<br>" + e.bairro + "<br>" +
                              e.cidade + "/" + e.estado + "<br>CEP " + mascaraCep(e.cep);
            botaoEditar.textContent = "Editar";
            botaoRemover.classList.remove("oculto");
        } else {
            texto.textContent = "Nenhum endereço cadastrado.";
            botaoEditar.textContent = "Adicionar endereço";
            botaoRemover.classList.add("oculto");
        }
    }

    preencherPerfil();
    mostrarEnderecoPerfil();

    // ---------- Máscaras ao digitar ----------
    campoTel.addEventListener("input", function () {
        campoTel.value = mascaraTel(campoTel.value);
    });

    campoCpf.addEventListener("input", function () {
        campoCpf.value = mascaraCpf(campoCpf.value);
    });

    // o estado só aceita letras, sempre maiúsculas
    campoEstado.addEventListener("input", function () {
        campoEstado.value = campoEstado.value.replace(/[^a-zA-Z]/g, "").toUpperCase();
    });

    // ---------- Atualizar perfil ----------
    formPerfil.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = campoNome.value.trim();
        const email = campoEmail.value.trim().toLowerCase();
        const telefone = campoTel.value.replace(/\D/g, "");
        const cpf = campoCpf.value.replace(/\D/g, "");

        if (nome.length < 3) { alert("Digite seu nome completo."); return; }
        if (telefone.length < 10) { alert("Telefone incompleto."); return; }
        if (cpf.length !== 11) { alert("CPF incompleto."); return; }

        const lista = lerClientes();
        const idAtual = clienteLogado().id;

        // e-mail e CPF não podem ser de OUTRO cliente
        const emailRepetido = lista.some(function (c) {
            return c.email === email && c.id !== idAtual;
        });
        const cpfRepetido = lista.some(function (c) {
            return c.cpf === cpf && c.id !== idAtual;
        });

        if (emailRepetido) { alert("Este e-mail já pertence a outra conta."); return; }
        if (cpfRepetido) { alert("Este CPF já pertence a outra conta."); return; }

        const cliente = lista.find(function (c) { return c.id === idAtual; });
        cliente.nome = nome;
        cliente.email = email;
        cliente.telefone = telefone;
        cliente.cpf = cpf;
        salvarClientes(lista);

        preencherPerfil();
        alert("Perfil atualizado!");
    });

    // ---------- Endereço: abrir o formulário ----------
    document.getElementById("btn-editar-endereco").addEventListener("click", function () {
        const e = clienteLogado().endereco;

        // se já existe endereço, preenche o formulário com ele
        document.getElementById("end-cep").value = e ? mascaraCep(e.cep) : "";
        document.getElementById("end-rua").value = e ? e.rua : "";
        document.getElementById("end-numero").value = e ? e.numero : "";
        document.getElementById("end-complemento").value = e ? e.complemento : "";
        document.getElementById("end-bairro").value = e ? e.bairro : "";
        document.getElementById("end-cidade").value = e ? e.cidade : "";
        campoEstado.value = e ? e.estado : "";

        cardForm.classList.remove("oculto");
        cardForm.scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("btn-cancelar-endereco").addEventListener("click", function () {
        cardForm.classList.add("oculto");
    });

    // ---------- Endereço: salvar ----------
    formEndereco.addEventListener("submit", function (e) {
        e.preventDefault();

        const cep = document.getElementById("end-cep").value.replace(/\D/g, "");
        const estado = campoEstado.value.trim().toUpperCase();

        if (cep.length !== 8) { alert("CEP incompleto."); return; }
        if (estado.length !== 2) { alert("Digite a sigla do estado com 2 letras. Ex.: MG"); return; }

        const lista = lerClientes();
        const cliente = lista.find(function (c) { return c.id === clienteLogado().id; });

        cliente.endereco = {
            cep: cep,
            rua: document.getElementById("end-rua").value.trim(),
            numero: document.getElementById("end-numero").value.trim(),
            complemento: document.getElementById("end-complemento").value.trim(),
            bairro: document.getElementById("end-bairro").value.trim(),
            cidade: document.getElementById("end-cidade").value.trim(),
            estado: estado
        };
        salvarClientes(lista);

        cardForm.classList.add("oculto");
        mostrarEnderecoPerfil();
    });

    // ---------- Endereço: remover ----------
    document.getElementById("btn-remover-endereco").addEventListener("click", function () {
        if (!confirm("Remover o endereço cadastrado?")) return;

        const lista = lerClientes();
        const cliente = lista.find(function (c) { return c.id === clienteLogado().id; });
        delete cliente.endereco;
        salvarClientes(lista);

        mostrarEnderecoPerfil();
    });

    // ---------- Logout ----------
    document.getElementById("btn-logout").addEventListener("click", function () {
        localStorage.removeItem("clienteLogadoId");
        window.location.href = "index.html";
    });
}












// ===== FINALIZAR PEDIDO =====
const botaoFinalizar = document.getElementById("btn-finalizar");

// Põe um zero na frente: 5 vira "05"
function doisDigitos(n) {
    return String(n).padStart(2, "0");
}

// Arredonda para 2 casas (evita 71.69999999)
function arredondar(valor) {
    return Number(valor.toFixed(2));
}

if (botaoFinalizar) {
    botaoFinalizar.addEventListener("click", function () {
        const cliente = clienteLogado();
        const carrinho = lerCarrinho();

        if (carrinho.length === 0) {
            alert("Seu carrinho está vazio.");
            return;
        }

        if (!cliente.endereco) {
            alert("Cadastre um endereço no perfil para finalizar o pedido.");
            window.location.href = "perfil.html";
            return;
        }

        // --- Calcula os valores ---
        let subtotal = 0;
        carrinho.forEach(function (item) {
            subtotal = subtotal + item.preco * item.qtd;
        });
        subtotal = arredondar(subtotal);

        // --- Data e código do pedido ---
        const agora = new Date();
        const dia = agora.getFullYear() + doisDigitos(agora.getMonth() + 1) + doisDigitos(agora.getDate());
        const hora = doisDigitos(agora.getHours()) + doisDigitos(agora.getMinutes()) + doisDigitos(agora.getSeconds());
        const dataTexto = agora.getFullYear() + "-" + doisDigitos(agora.getMonth() + 1) + "-" + doisDigitos(agora.getDate()) +
                          "T" + doisDigitos(agora.getHours()) + ":" + doisDigitos(agora.getMinutes()) + ":" + doisDigitos(agora.getSeconds());
        const codigo = dia + "-" + hora + "-C" + cliente.id;

        // --- Monta a lista de itens ---
        const itens = [];
        carrinho.forEach(function (item) {
            itens.push({
                produto_id: item.produto_id,
                nome: item.nome,
                quantidade: item.qtd,
                preco_unitario: item.preco
            });
        });

        // --- Monta o pedido ---
        const pedido = {
            codigo_site: codigo,
            cliente: {
                nome: cliente.nome,
                email: cliente.email,
                telefone: cliente.telefone,
                cpf: cliente.cpf,
                senha: cliente.senha
            },
            endereco: cliente.endereco,
            data_pedido: dataTexto,
            subtotal: subtotal,
            taxa_entrega: TAXA_ENTREGA,
            total: arredondar(subtotal + TAXA_ENTREGA),
            itens: itens
        };

        // --- Gera o texto do JSON e baixa o arquivo ---
        const texto = JSON.stringify({ pedidos: [pedido] }, null, 2);

        const link = document.createElement("a");
        link.href = "data:application/json;charset=utf-8," + encodeURIComponent(texto);
        link.download = "pedido-" + codigo + ".json";
        link.click();

        // --- Guarda no navegador para o histórico (Etapa 7) ---
        // (isso vem DEPOIS de gerar o arquivo, para não entrar nele)
        pedido.clienteId = cliente.id;
        pedido.status = "Recebido";

        const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
        pedidos.push(pedido);
        localStorage.setItem("pedidos", JSON.stringify(pedidos));

        // --- Esvazia o carrinho ---
        salvarCarrinho([]);

        alert("Pedido " + codigo + " realizado!\nO arquivo foi baixado na pasta Downloads.");
        window.location.href = "historico.html";
    });
}












// ===== HISTÓRICO DE PEDIDOS =====
const listaHistorico = document.getElementById("lista-historico");

// Escolhe a cor da etiqueta de acordo com o status
function classeStatus(status) {
    if (status === "Em preparação") return "preparo";
    if (status === "Saiu para entrega") return "entrega";
    if (status === "Entregue") return "entregue";
    if (status === "Cancelado") return "cancelado";
    return "recebido";
}

// "2026-11-09T19:30:45" vira "09/11/2026 19:30"
function formatarData(texto) {
    const partes = texto.split("T");
    const data = partes[0].split("-");
    return data[2] + "/" + data[1] + "/" + data[0] + " " + partes[1].slice(0, 5);
}

if (listaHistorico) {
    const idAtual = clienteLogado().id;

    // pega só os pedidos deste cliente
    const meusPedidos = (JSON.parse(localStorage.getItem("pedidos")) || []).filter(function (p) {
        return p.clienteId === idAtual;
    });

    // os mais novos primeiro
    meusPedidos.reverse();

    if (meusPedidos.length === 0) {
        listaHistorico.innerHTML =
            "<p class='historico-vazio'>Você ainda não fez nenhum pedido. " +
            "<a href='index.html#secao-cardapio'>Ver cardápio</a></p>";
    }

    meusPedidos.forEach(function (pedido) {
        // monta o texto "2x Double Bacon, 1x Batata Frita"
        const nomes = [];
        pedido.itens.forEach(function (item) {
            nomes.push(item.quantidade + "x " + item.nome);
        });

        listaHistorico.innerHTML += `
            <div class="pedido-linha">
                <span class="pedido-codigo">
                    Pedido #${pedido.codigo_site}
                    <span class="pedido-data">${formatarData(pedido.data_pedido)}</span>
                </span>
                <span class="etiqueta-status ${classeStatus(pedido.status)}">${pedido.status}</span>
                <span class="pedido-itens">${nomes.join(", ")}</span>
                <span class="pedido-total">${formatarPreco(pedido.total)}</span>
            </div>`;
    });
}