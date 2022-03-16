<div align='justify'>

## **Twilio Whatsapp**

> Como enviar mensagems de WhatsApp usando NodeJS and Twilio.

- Altere o arquivo `.env.example` para `.env`. Inserindo as seuas credenciais ao ativar a sua Sandbox: 

Você pode pegar o seu SID e AUTH_NUMBER do seu SendBox do Twilio.
```
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_REGISTERED_PHONE_NUMBER=
```

Instale as dependências do projeto:

```bash
$ npm ci
```

Execute o projeto:

```bash
$ npm start
```

Utilizando a Twilio, você pode adicionar ou portar o seu número. Ao fazer isso, você deve adiciona-lo na variável `TWILIO_REGISTERED_PHONE_NUMBER`.


- Adicionar ou portar o seu número;


## **Referências**

- [Twilio Docs - Envie Mensagens de Whatsapp Usando NodeJS](https://www.twilio.com/pt-br/docs/whatsapp/quickstart/node)


</div>