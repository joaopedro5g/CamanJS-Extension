#
## ESSE BIBLIOTÉCA É UTILIZADA PARA MANIPULAR IMAGENS ADICIONANDO EFEITOS E TEXTO NA IMAGEM
  ESSA BIBLIOTECA AINDA ESTA NA VERSÃO BETA 0.0.1, AINDA NÃO POSSUI MUITAS FUNÇÕES

## FUNÇÕES DA BIBLIOTÉCA
  COMO DISSE ANTERIORMENTE ESSA BIBLIOTECA AINDA ESTÁ EM FASE BETA NÃO EXISTE MUITAS
  
  FUNÇÕES MAS EM BREVE ATUALIZAREI O MESMO

### addImage - ADICIONAR UMA IMAGEM NO CANVAS
  ESSA FUNÇÃO ADICIONARA A IMAGEM NA TELA

  PARAMETROS DA FUNÇÃO
  
  ###### PARAMETROS DA FUNÇÃO
  - canvas(String)
    AQUI FICARA O IDENTIFICADOR DO CANVAS, POR EXEMPLO '#myCanvas' ou '.myCanvas'
  - src(String)
    AQUI É O LINK DA IMAGEM A SER EDITADA
  - options?(Object)
    OPÇÕES DE CONFIGURAÇÃO DA IMAGEM, AINDA NÃO TEM MUITAS OPÇÕES POR SER UMA

    BIBLIOTECA EM FASE BETA
      - contrast: Adiciona uma configuração de constraste na imagem
      - brightness: Adiciona uma configuração de brilho na imagem
      - title: Configuração passadas para o titulo
        - positionX: Posição do titulo no eixo X
        - positionX: Posição do titulo no eixo Y
        - fontFamily: Nome da fonte a ser utilizada no texto
        - fontSize: Tamanho do texto
        - text: Texto que seria impresso na imagem
      - subtitle: Configuração passadas para o sub titulo
        - positionX: Posição do titulo no eixo X
        - positionX: Posição do titulo no eixo Y
        - fontFamily: Nome da fonte a ser utilizada no texto
        - fontSize: Tamanho do texto
        - text: Texto que seria impresso na imagem

### downloadImage
   ESSA FUNÇÃO ELA EXECUTARA A OPÇÃO DE DOWNLOAD DA IMAGEM EDITADA
    
   ESSE FUNÇÃO TEM APENAS UM PARAMETRO
    - imageName: Nome da imagem ao ser salva pelo usuario


## EXEMPLO DE CÓDIGO
  ADICIONE UM HTML COM O SEGUINDO ELEMENTOS
  ```
    <canvas id="canvas-id"></canvas>
    <a id="download" download="">
        <button onclick="download('banner de João');">Download</button>
    </a>
  ```

  AGORA NO SCRIPT DO SEU HTML ADICIONE O SEGUINTE
  ```
    <script>
        addImage('#canvas','image.jpg',{
            contrast: 2,
            title: {
                positionX: 200,
                positionY: 100,
                fontSize: 50,
                fontFamily: 'Georgia',
                text: "HEHE BOY"
            },
            subtitle: {
                fontSize: 30,
                positionX: 300,
                positionY: 200,
                fontFamily: 'Georgia',
                text:"PAU NELAS"
            }
        });
    </script>
  ```

  ## ATENÇÃO
  PARA QUE ESSA BIBLIOTECA FUNCIONE VOCÊ DEVE BAIXAR E UTILIZAR O [CamanJS](http://camanjs.com/)
