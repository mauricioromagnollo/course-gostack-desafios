<div align='justify'>
  <div align='center'>
    <img src='./sass.png' width='200'>
  </div>

<br>

# Índice

- [Variáveis](#variáveis)
#

## **Variáveis**

Utilizando o SCSS, nós podemos definir as nossas próprias variáveis de forma mais semântica, reaproveitando de diversas formas em nosso projeto. E por padrão, vamos seguir algumas convenções:

1. Separar as variáveis em um arquivo;
2. Utilizar a convenção de escrever um arquivo iniciando com **_**, por exemplo: **`_variables.scss`**. Essa convenção do _ é utilizada quando precisamos criar um arquivo em que ele somente será importado para outros arquivos.

Exemplo do arquivo **`_variables.scss`**:

```scss
$base-font-size: 28px;
$default-padding: 10px;
```

Agora, precisamos importar esse arquivo onde vamos utilizar:

```scss
@import "./_variables";

// Podemos importar também dessa forma, pois o _ é tão utilizados que podemos omitir na importação:
@import "./variables";
```

</div>