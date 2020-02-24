#
## ESSE BIBLIOTÉCA É UTILIZADA PARA MANIPULAR IMAGENS ADICIONANDO EFEITOS E TEXT NA IMAGEM
  ESSA BIBLIOTECA AINDA ESTA NA VERSÃO BETA 0.0.1, AINDA NÃO POSSUI MUITAS FUNÇÕES

## FUNÇÕES DA BIBLIOTÉCA
  COMO DISSE ANTERIORMENTE ESSA BIBLIOTECA AINDA ESTÁ EM FASE BETA NÃO EXISTE MUITAS FUNÇÕES MAS EM BREVE ATUALIZAREI O MESMO

### addImage - ADICIONAR UMA IMAGEM NO CANVAS
  ESSA FUNÇÃO ADICIONARA A IMAGEM NA TELA
  PARAMETROS DA FUNÇÃO
  - canvas(String)
    AQUI FICARA O IDENTIFICADOR DO CANVAS, POR EXEMPLO '#myCanvas' ou '.myCanvas'
  - src(String)
    AQUI É O LINK DA IMAGEM A SER EDITADA
  - text(Object)
    AQUI SERA ADICIONADO OS TEXTO
    - title
    - subtitle
  - options?(Object)
    OPÇÕES DE CONFIGURAÇÃO DA IMAGEM, AINDA NÃO TEM MUITAS OPÇÕES POR SER UMA BIBLIOTECA EM FASE BETA
      - contrast: Adiciona uma configuração de constraste na imagem
      - brightness: Adiciona uma configuração de brilho na imagem

### downloadImage
    ESSA FUNÇÃO ELA EXECUTARA A OPÇÃO DE DOWNLOAD DA IMAGEM EDITADA
    ESSE FUNÇÃO TEM APENAS UM PARAMETRO
    - imageName: Nome da imagem ao ser salva pelo usuario

## EXEMPLO DE CÓDIGO
  ADICIONE UM HTML COM O SEGUINDO ELEMENTOS
  ```
    <canvas id="canvas-id"></canvas>
    <a>
        <button onclick="downloadImage('nome_do_arquivo')">Download</button>
    </a>
  ```

  AGORA NO SCRIPT DO SEU HTML ADICIONE O SEGUINTE
  ```
    <script>
        addImage('image.jpg',{
            title:'Hello'
        },{
            contrast: 2
        })
    </script>
  ```

  ## ATENÇÃO
  PARA QUE ESSA BIBLIOTECA FUNCIONE VOCÊ DEVE BAIXAR E UTILIZAR O **CAMANJS**