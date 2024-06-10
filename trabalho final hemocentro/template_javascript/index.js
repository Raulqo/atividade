// Variáveis
let menu;
const doadoresSangue = [];

// Laço de repetição
while (menu !== 5) { // Esta função vai mostrar o menu 
  menu = Number(
    prompt(`===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
        1. Cadastrar doador
        2. Listar doadores
        3. Buscar doador por tipo sanguíneo
        4. Buscar doador por data da última doação
        5. Sair
        Escolha uma opção:
        `)
  );

  // Switch para fazer algo dependendo da função
  switch (menu) {
    case 1: // O "case" é uma estrutura de condição que define o codigo que será executado
      cadastrar();
      break; //o "break" serve para quebrar o laço de repetição
    case 2:
      listar();
      break;
    case 3:
      buscarDoadorTipoSanguineo();
      break;
    case 4:
      buscarDadosData();
      break;
      case 5 :
        alert("Programa finalizado, volte sempre!")
        break;
    default:
      
        alert("Está opção não foi encontrada, tente novamente!");
      break;

  }
}
// Cadastro de Doador
function cadastrar() { //Está function serve para cadastrar os doadores
  const nome = prompt("Digite seu nome");
  const idade = Number(prompt("Digite sua idade"));// o "Const" cria uma variavel
  const peso = Number(prompt("Digite seu peso"));
  const tipoSangue = prompt("Digite seu tipo sanguineo").toLowerCase();
  const ultimaData = prompt("Digite a ultima data de doação? DD/MM/AAAA");

  const doador = {
    nome,
    idade,
    peso,
    tipoSangue,
    ultimaData,
  };

  doadoresSangue.push(doador);

  alert("Doador cadastrado com sucesso");
}

// Lista todos os Doadores
function listar() { //Está fução lista todos os doadores 
  if (doadoresSangue.length === 0) {
    alert("Não existe doadores cadastrados");//este alert vai mostrar se não tiver nenhum doador cadastrado
  } else {
    let mensagem = `
        --------------------
        LISTAGEM DE DOADORES:
        --------------------
     NOME | IDADE |  PESO  | TIPO SANGUÍNEO  |  ÚLTIMA DOAÇÃO
        `;

    for (let doador of doadoresSangue) {
      mensagem += `\n     ${doador.nome}      ${doador.idade}         ${doador.peso}            ${doador.tipoSangue}               ${doador.ultimaData}`;
    }
    alert(mensagem);
  }
}

// Busca um Doador 
function buscarDoadorTipoSanguineo() { //Está function busca um doador pelo seu tipo sanguineo
  if (doadoresSangue.length === 0) {
    alert("Não existe doadores cadastrados com esse tipo sanguineo");
  } else {
    const buscaTipoSanguineo = prompt("Digite o tipo sanguine").toLowerCase();

    let mensagem = `
        ------------------------
        RESULTADO DA BUSCA:
        ------------------------
     NOME  |   IDADE  |   PESO   |   TIPO SANGUÍNEO   | ÚLTIMA DOAÇÃO
        `;

    for (let doador of doadoresSangue) {
      if (doador.tipoSangue.includes(buscaTipoSanguineo)) {
        mensagem += `\n         ${doador.nome} ||     ${doador.idade} ||      ${doador.peso} ||        ${doador.tipoSangue} ||             ${doador.ultimaData}`;
      }
    }

    alert(mensagem);
  }
}

// Buscar um doador pela data de ultima doação
function buscarDadosData() {
  if (doadoresSangue.length === 0) {
    alert("Não existe doadores cadastrados");
  } else {
    const dataBusca = prompt("Digite o a ultima data? DD/MM/AAAA");

    let mensagem = `
        ------------------------
        RESULTADO DA BUSCA:
        ------------------------
     NOME    |  IDADE  |  PESO  |  TIPO SANGUÍNEO |  ÚLTIMA DOAÇÃO
        `;

    for (let doador of doadoresSangue) {
      if (doador.ultimaData === dataBusca) {
        mensagem +=` \n      ${doador.nome} ||     ${doador.idade} ||      ${doador.peso} ||         ${doador.tipoSangue} ||            ${doador.ultimaData}`;
      }
    }

    alert(mensagem);
  }
 f0d1c23327558920afa11180aec99d17cb945183
}