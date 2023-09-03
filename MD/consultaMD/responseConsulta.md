Request URL:
https://app.magis5.com.br/ordermanagement/ordersInvoices/invoices
Request Method:
POST
Status Code:
200
Remote Address:
35.190.64.194:443
Referrer Policy:
no-referrer-when-downgrade
Access-Control-Allow-Credentials:
true
Access-Control-Allow-Headers:
origin, content-type, accept, authorization, X-MAGIS5-APIKEY
Access-Control-Allow-Methods:
GET, POST, PUT, DELETE, OPTIONS, HEAD, PATCH
Access-Control-Allow-Origin:
*
Alt-Svc:
h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
Content-Length:
2233
Content-Type:
application/json
Date:
Fri, 01 Sep 2023 00:13:31 GMT
Via:
1.1 google
:authority:
app.magis5.com.br
:method:
POST
:path:
/ordermanagement/ordersInvoices/invoices
:scheme:
https
Accept:
*/*
Accept-Encoding:
gzip, deflate, br
Accept-Language:
pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7
Authorization:
Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnYXJyYWltcG9ydGFjYW9AaG90bWFpbC5jb20jIyMxMjMwIiwiaXNzIjoiaHR0cDovL2FwcC5tYWdpczUuY29tLmJyL29yZGVybWFuYWdlbWVudC91c2VyL2xvZ2luV2ViIiwiaWF0IjoxNjkzNTI3MTY1LCJleHAiOjE2OTM1NzAzNjV9.M-7FSCtqg6u_GrvbSC4CiBdfICcXeKGMEy9DGfO0tYefRkUt_LRLmM_T6LSI8t-mmu_0rRVVI2F1G2XqKQFq6w
Content-Length:
196
Content-Type:
application/json
Cookie:
_fbp=fb.2.1681817431151.431279645; __hs_opt_out=no; hubspotutk=e59c381d1d6d9c8a5d766df02bf8ffb9; messagesUtk=2afcccce90c942cfb4af59bee095ea7a; _hjSessionUser_1913796=eyJpZCI6ImZhZjMwYmYyLTNlZjctNTQzYi1hMzc2LTQyNjc2YmIzZjI4MyIsImNyZWF0ZWQiOjE2ODE4MTc0MzA4MzMsImV4aXN0aW5nIjp0cnVlfQ==; messagesUtk=82e487208c1d450b84ed654cca2db675; _gcl_au=1.1.1769657097.1692670987; _tt_enable_cookie=1; _ttp=QHx946OCRx6kNHaW-VjcyH0Gqwm; _ga_YMKVXKW47N=GS1.1.1692702455.4.0.1692702455.60.0.0; _gid=GA1.3.1070245511.1693517382; __hssrc=1; userName=Garra; userEmail=garraimportacao@hotmail.com; crmId=undefined; layoutVersion=V2; upsellId=04315beac7de40bf83bf4d71b2f8327d; isMainErpMagis5=true; userType=Master; printerVersionUrl=https://storage.googleapis.com/magis5-storage-3/printer/v1/1.1.5/Magis5-Impressora_v2.jar; PHPSESSID=sm0rqs6og5jsc9est03uh5g35t; _hjIncludedInSessionSample_1913796=0; _hjSession_1913796=eyJpZCI6ImQ4OWJmNjE3LTVjMjQtNDVjNS04N2NkLTM4MDY4N2MwZDBlYyIsImNyZWF0ZWQiOjE2OTM1MjcxNDAxMTcsImluU2FtcGxlIjpmYWxzZX0=; _hjAbsoluteSessionInProgress=1; _uetsid=7f2069e0484511ee81d60112709b800f; _uetvid=d5176490409211ee910b57ceb14ec052; _ga=GA1.1.2078265296.1681817431; _clck=1h485qe|2|fen|0|1329; __hstc=223636164.e59c381d1d6d9c8a5d766df02bf8ffb9.1681817464590.1693517383820.1693527143671.13; _clsk=1gd71j6|1693527145728|1|1|v.clarity.ms/collect; _ga_JP1DRS201V=GS1.1.1693527141.10.0.1693527146.0.0.0; _ga_9ZH82XMF6E=GS1.1.1693527141.15.0.1693527148.53.0.0; DSALKHDASDHSAKDSAH213872398732198DHKSAKADSJHDASKJH1823723189312=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnYXJyYWltcG9ydGFjYW9AaG90bWFpbC5jb20jIyMxMjMwIiwiaXNzIjoiaHR0cDovL2FwcC5tYWdpczUuY29tLmJyL29yZGVybWFuYWdlbWVudC91c2VyL2xvZ2luV2ViIiwiaWF0IjoxNjkzNTI3MTY1LCJleHAiOjE2OTM1NzAzNjV9.M-7FSCtqg6u_GrvbSC4CiBdfICcXeKGMEy9DGfO0tYefRkUt_LRLmM_T6LSI8t-mmu_0rRVVI2F1G2XqKQFq6w; __hssc=223636164.2.1693527143671
Origin:
https://app.magis5.com.br
Referer:
https://app.magis5.com.br/v2/admin/invoices/consult.php
Sec-Ch-Ua:
"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"
Sec-Ch-Ua-Mobile:
?1
Sec-Ch-Ua-Platform:
"Android"
Sec-Fetch-Dest:
empty
Sec-Fetch-Mode:
cors
Sec-Fetch-Site:
same-origin
User-Agent:
Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36
X-Requested-With:
XMLHttpRequest


payload

{page: 1, pageSize: 50, status: "", line: null, invoiceNumber: "9999", biller: null, erp: "",…}
biller
: 
null
channels
: 
[]
completeOrderNumber
: 
""
erp
: 
""
invoiceKey
: 
""
invoiceNumber
: 
"9999"
issueDateEnd
: 
""
issueDateInit
: 
""
line
: 
null
page
: 
1
pageSize
: 
50
status
: 
""
type
: 
""



preview

{quantityOrdersAll: 3, quantityOrders: 3, totalPages: 1, pageSize: 50,…}
currentPage
: 
1
list
: 
{biller: "magis5", total_value: 64.95, erp: "magis5-DETERMINATION", line: 3,…}
biller
: 
"magis5"
cause
: 
""
channel
: 
"magazineluiza-DETERMINATION"
complete_order_number
: 
"LU-1249670665600173"
erp
: 
"magis5-DETERMINATION"
external_id
: 
"67324bfc09a447038c1c3e669068f578"
invoice_number
: 
"9999"
issueDate
: 
"2023-07-01 18:51:07.0"
key
: 
"33230746683612000127550030000099991002123176"
key_referenced
: 
""
line
: 
3
status
: 
"authorized"
total_value
: 
64.95
type
: 
"S"
type_referenced
: 
""
urlPdf
: 
"https://api.enotasgw.com.br/file/30b1db45-c94a-4a65-9b1a-e86710580700/6e608f30-a9d8-4caa-9169-1227e56c0800/4c54794b-e524-4a0c-9024-264110870900/pdf"
urlXml
: 
"https://api.enotasgw.com.br/file/30b1db45-c94a-4a65-9b1a-e86710580700/6e608f30-a9d8-4caa-9169-1227e56c0800/4c54794b-e524-4a0c-9024-264110870900/xml"
: 
{biller: "magis5", total_value: 64.95, erp: "magis5-DETERMINATION", line: 3,…}
1
: 
{biller: "magis5", total_value: 182, erp: "magis5-FOCO", line: 3, channel: "ml-FOCO", cause: "",…}
2
: 
{biller: "magis5", total_value: 102.6, erp: "magis5-GARRA", line: 4, channel: "ml-GARRA", cause: "",…}
pageSize
: 
50
quantityOrders
: 
3
quantityOrdersAll
: 
3
status
: 
"OK"
totalPages
: 
1


response 

{
    "quantityOrdersAll": 3,
    "quantityOrders": 3,
    "totalPages": 1,
    "pageSize": 50,
    "list": [
        {
            "biller": "magis5",
            "total_value": 64.95,
            "erp": "magis5-DETERMINATION",
            "line": 3,
            "channel": "magazineluiza-DETERMINATION",
            "cause": "",
            "external_id": "67324bfc09a447038c1c3e669068f578",
            "type_referenced": "",
            "type": "S",
            "complete_order_number": "LU-1249670665600173",
            "urlXml": "https://api.enotasgw.com.br/file/30b1db45-c94a-4a65-9b1a-e86710580700/6e608f30-a9d8-4caa-9169-1227e56c0800/4c54794b-e524-4a0c-9024-264110870900/xml",
            "issueDate": "2023-07-01 18:51:07.0",
            "urlPdf": "https://api.enotasgw.com.br/file/30b1db45-c94a-4a65-9b1a-e86710580700/6e608f30-a9d8-4caa-9169-1227e56c0800/4c54794b-e524-4a0c-9024-264110870900/pdf",
            "invoice_number": "9999",
            "key": "33230746683612000127550030000099991002123176",
            "key_referenced": "",
            "status": "authorized"
        },
        {
            "biller": "magis5",
            "total_value": 182,
            "erp": "magis5-FOCO",
            "line": 3,
            "channel": "ml-FOCO",
            "cause": "",
            "external_id": "60814bc9d04c4fa881346659cb26cca5",
            "type_referenced": "",
            "type": "S",
            "complete_order_number": "2000005013169426",
            "urlXml": "https://api.enotasgw.com.br/file/30b1db45-c94a-4a65-9b1a-e86710580700/20c7a4a3-afcf-409c-b80e-eb43e36c0800/8082b920-a0e3-47b5-a666-9ecee00d0900/xml",
            "issueDate": "2023-01-28 15:36:38.0",
            "urlPdf": "https://api.enotasgw.com.br/file/30b1db45-c94a-4a65-9b1a-e86710580700/20c7a4a3-afcf-409c-b80e-eb43e36c0800/8082b920-a0e3-47b5-a666-9ecee00d0900/pdf",
            "invoice_number": "9999",
            "key": "33230144167429000143550030000099991162328385",
            "key_referenced": "",
            "status": "authorized"
        },
        {
            "biller": "magis5",
            "total_value": 102.6,
            "erp": "magis5-GARRA",
            "line": 4,
            "channel": "ml-GARRA",
            "cause": "",
            "external_id": "75518217ff8a4b6c936202c040e0ba17",
            "type_referenced": "",
            "type": "S",
            "complete_order_number": "2000004414095322",
            "urlXml": "https://api.enotasgw.com.br/file/30b1db45-c94a-4a65-9b1a-e86710580700/e341c999-017c-48cf-bb3b-2461e46c0800/83b552e2-ed16-4bd0-a723-2248e8c00800/xml",
            "issueDate": "2022-10-22 17:46:08.0",
            "urlPdf": "https://api.enotasgw.com.br/file/30b1db45-c94a-4a65-9b1a-e86710580700/e341c999-017c-48cf-bb3b-2461e46c0800/83b552e2-ed16-4bd0-a723-2248e8c00800/pdf",
            "invoice_number": "9999",
            "key": "33221017256061000117550040000099991017222282",
            "key_referenced": "",
            "status": "authorized"
        }
    ],
    "currentPage": 1,
    "status": "OK"
}

