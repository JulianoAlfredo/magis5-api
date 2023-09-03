const axios = require('axios');

var idExterno = String
var notaFiscal = "13241"
const urlPesquisa = "https://app.magis5.com.br/ordermanagement/ordersInvoices/invoices"
var ativado = false
const token = 'yJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnYXJyYWltcG9ydGFjYW9AaG90bWFpbC5jb20jIyMxMjMwIiwiaXNzIjoiaHR0cDovL2FwcC5tYWdpczUuY29tLmJyL29yZGVybWFuYWdlbWVudC91c2VyL2xvZ2luV2ViIiwiaWF0IjoxNjkzNTE3NDIzLCJleHAiOjE2OTM1NjA2MjN9.7YKmfrGvKi2qjw7NluOioqz2wEpB7KfSPhi7ieXtvrgwpBqSp3Tz5ymdMB_n_WwJZ6ghvop5mr9_bbWb6lSm6A'; // Substitua pelo seu token de acesso
const axiosInstance = axios.create({
    timeout: 30000 // 15 segundos de timeout
  });
let arrPedido = new Array()
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
}



axios.post(urlPesquisa, payloadPesquisa, {
  headers: {
    'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnYXJyYWltcG9ydGFjYW9AaG90bWFpbC5jb20jIyMxMjMwIiwiaXNzIjoiaHR0cDovL2FwcC5tYWdpczUuY29tLmJyL29yZGVybWFuYWdlbWVudC91c2VyL2xvZ2luV2ViIiwiaWF0IjoxNjkzNTE3NDIzLCJleHAiOjE2OTM1NjA2MjN9.7YKmfrGvKi2qjw7NluOioqz2wEpB7KfSPhi7ieXtvrgwpBqSp3Tz5ymdMB_n_WwJZ6ghvop5mr9_bbWb6lSm6A`,
    'Content-Type': 'application/json',
    'Accept': '*/*'
  }
})
.then(async response => {
    
  if(response.data.quantityOrdersAll){
    for(var i=0; i<response.data.quantityOrdersAll; i++){
        if(response.data.list[i].erp == "magis5-DETERMINATION"){
            let resposta = await response.data.list[i]
            
            
            arrPedido.push( {
                notaFiscau: resposta.invoice_number, 
                chaveDeAcesso: resposta.key, 
                externoId: resposta.external_id,
                numeroPedido: resposta.complete_order_number,
                data: resposta.issueDate,
                status: resposta.status,
                line: resposta.line,
                valorTotal: resposta.total_value
            })
            devolucao(arrPedido)
        }
    }
    ativado = true
    console.log("✔️    Consulta realizada com sucesso!")
  }
}).catch(error => {
  console.error('Error:', error);
});



async function devolucao(arr){

    const payload = null
    const urlDevolucao = `https://app.magis5.com.br/ordermanagement/ordersInvoices/sendDevolutionInvoice/${arr[0].externoId}`;

    try {
        const response = await axiosInstance.post(urlDevolucao, payload, {
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnYXJyYWltcG9ydGFjYW9AaG90bWFpbC5jb20jIyMxMjMwIiwiaXNzIjoiaHR0cDovL2FwcC5tYWdpczUuY29tLmJyL29yZGVybWFuYWdlbWVudC91c2VyL2xvZ2luV2ViIiwiaWF0IjoxNjkzNTE3NDIzLCJleHAiOjE2OTM1NjA2MjN9.7YKmfrGvKi2qjw7NluOioqz2wEpB7KfSPhi7ieXtvrgwpBqSp3Tz5ymdMB_n_WwJZ6ghvop5mr9_bbWb6lSm6A',
            'Content-Type': 'application/json',
            'Accept': '*/*'
          }
        });
        if(response.data.message == undefined){
            console.log('✔️ DEU TUDO CERTO');
        } else{
            console.log(response.data.message)
        }
        
      } catch (error) {
        console.error('Erro:', error);
      }
}