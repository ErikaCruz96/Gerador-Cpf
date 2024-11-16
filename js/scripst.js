//Selecionar elementos

const btnGerar = document.querySelector(".generate-cpf");
const btnCopiar = document.querySelector(".copy-cpf");
const containerCpf = document.querySelector(".container-cpf");

//Eventos

btnGerar.addEventListener("click", gerarCPF);
btnCopiar.addEventListener("click", copiarCPF);


//Funções


function gerarCPF() {
    let n = Math.floor(Math.random() * 999999999) + 1;
    let nStr = n.toString().padStart(9, "0");
    let dv1 = calcularDV(nStr, 10);
    let dv2 = calcularDV(nStr + dv1, 11);
  
    containerCpf.innerText = formatarCPF(nStr + dv1 + dv2);
  }
  
  function calcularDV(numero, peso) {
    let total = 0;
    for (let i = 0; i < numero.length; i++) {
      total += parseInt(numero.charAt(i)) * peso--;
    }
    let resto = total % 11;
    return resto < 2 ? 0 : 11 - resto;
  }
  function formatarCPF(cpf) {
    const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
    return cpf.replace(cpfRegex, "$1.$2.$3-$4");
  }


  // Função para copiar CPF para área de transferência
function copiarCPF() {
    const cpf = containerCpf.innerText;
    navigator.clipboard.writeText(cpf).then(
      () => {
        alert(`CPF ${cpf} copiado para a área de transferência!`);
      },
      (err) => {
        console.error("Erro ao copiar CPF: ", err);
      }
    );
  }
    












// function generateCPF(){

//     containerCpf.innerHTML = "";
//     const numb = Math.floor(10000000000 + Math.random() * 90000000000);
    
//     const formattedCpf = formatCpf(numb);

//     const pCpf = document.createElement("p");
//     containerCpf.appendChild(pCpf);

//     pCpf.textContent = formattedCpf;
// }


// function formatCpf(numb){
//     const cpfString = numb.toString(); //converte para string
//     return `${cpfString.slice(0,3)}.${cpfString.slice(3,6)}.${cpfString.slice(6,9)}-${cpfString.slice(9-11)}`
// }