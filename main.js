const axios = require('axios');
const fs = require('fs');
const dotenv = require('dotenv');

// Carrega variáveis de ambiente do arquivo .env
dotenv.config();

const urlPesquisa = "https://app.magis5.com.br/ordermanagement/ordersInvoices/invoices";
const notaFiscal = "13241";
const tokenFilePath = process.env.TOKEN_FILE_PATH;

// Lê o conteúdo do arquivo
fs.readFile(tokenFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Erro ao ler o arquivo ${tokenFilePath}:`, err);
    return;
  }

  const token = data.trim(); // Remove espaços em branco extras, se houver

  console.log('Token recuperado:', token);

  // Agora você pode usar o token como necessário no seu aplicativo

  const axiosInstance = axios.create({
    timeout: 30000, // 15 segundos de timeout
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': '*/*'
    }
  });

  const payloadPesquisa = {
    biller: null,
    channels: [],
    completeOrderNumber: "",
    erp: "",
    invoiceKey: "",
    invoiceNumber: notaFiscal,
    issueDateEnd: "",
    issueDateInit: "",
    line: null,
    page: 1,
    pageSize: 50,
    status: "",
    type: "",
  };

  axiosInstance.post(urlPesquisa, payloadPesquisa)
    .then(async response => {
      if (response.data.quantityOrdersAll) {
        for (let i = 0; i < response.data.quantityOrdersAll; i++) {
          if (response.data.list[i].erp === "magis5-DETERMINATION") {
            const resposta = await response.data.list[i];

            const arrPedido = [{
              notaFiscal: resposta.invoice_number,
              chaveDeAcesso: resposta.key,
              externoId: resposta.external_id,
              numeroPedido: resposta.complete_order_number,
              data: resposta.issueDate,
              status: resposta.status,
              line: resposta.line,
              valorTotal: resposta.total_value
            }];

            await devolucao(arrPedido, axiosInstance);
          }
        }
        ativado = true;
        console.log("✔️    Consulta realizada com sucesso!");
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

async function devolucao(arr, axiosInstance) {
  const urlDevolucao = `https://app.magis5.com.br/ordermanagement/ordersInvoices/sendDevolutionInvoice/${arr[0].externoId}`;

  try {
    const response = await axiosInstance.post(urlDevolucao, null);
    if (response.data.message === undefined) {
      console.log('✔️ DEU TUDO CERTO');
    } else {
      console.log(response.data.message);
    }

  } catch (error) {
    console.error('Erro:', error);
  }
}
