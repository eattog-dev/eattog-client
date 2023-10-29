# eattog-client

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Padrões de Desenvolvimento Recomendados

- Nomeação de classes seguindo a regra BEM.
- Use REM para estilos CSS. Se estiver usando pixels (px), converta-os para REM, sendo 16px equivalente a 1 REM.
- Os códigos de cores são definidos como variáveis no arquivo main.css; use `var(--namexxx)`.

## Criar um Restaurante via URL

Você pode criar um restaurante fazendo uma solicitação POST para o seguinte URL: `http://54.233.122.212/criar/restaurante`. Exemplo de carga JSON:

```json
{
    "imagem": "https://rioandlearn.com/wp-content/uploads/Vocabulário-Lanchonete.png",
    "logo": "https://img.freepik.com/vetores-gratis/uma-estrela-restaurante-icon-ilustracao_53876-40629.jpg?w=2000",
    "banner": "https://img.freepik.com/vetores-gratis/uma-estrela-restaurante-icon-ilustracao_53876-40629.jpg?w=2000",
    "titulo": "pit lanches",
    "avaliacao": 5.0,
    "tipoRefeicao": "refeição",
    "distancia": "2.5km",
    "tipoRetirada": "Local e retirada",
    "descricao": "Lanchonete tradicional de Campo Grande",
    "localizacao": "Avenida Mascarenhas de Moraes"
}
```

## Criar um Prato via URL

Você pode criar um prato fazendo uma solicitação POST para o seguinte URL: `http://54.233.122.212/criar/prato`. Exemplo de carga JSON:

```json
{
    "nome": "Feijoada",
    "valor": 25.99,
    "imagem": "https://www.sabornamesa.com.br/media/k2/items/cache/7b98703f48b0025160f2b9b5aad2a874_XL.jpg",
    "ingredientes": ["Feijão Preto", "Carne de Porco", "Arroz"],
    "restaurante": 2,
    "categoria_prato": 0, 
    "desconto": false,
    "valor_desconto": 0,
    "descricao": "A feijoada é um prato brasileiro clássico, preparado com feijão preto e diversas carnes de porco, como linguiça e bacon. É um prato rico em sabor, acompanhado de arroz, couve e laranja."
}
```

## Criar uma Categoria via URL

Você pode criar uma categoria fazendo uma solicitação POST para o seguinte URL: `http://54.233.122.212/criar/categoria`. Exemplo de carga JSON:

```json
{
    "categoria_prato": "comida mexicana"
}
```

## Criar um Usuário via URL

Você pode criar um usuário fazendo uma solicitação POST para o seguinte URL: `http://54.233.122.212/users/sign-up`. Exemplo de carga JSON:

```json
{
    "nome": "Gabigol Bruno Henrique De Arrascaeta",
    "email": "flamengoJJ2019@gmail.com",
    "cpf": "23112019185",
    "numero_celular": "11111111111",
    "senha": "biLibertadores19"
}
```

```

