## darg and drop

# HTML - JAVASCRIPT - CSS3

### exemplo

`html
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>drag drop</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <div class="container">
    <!--o wrapper só deve ter um tag filho raiz-->
    <!-- a class space é opcional na tag raiz, caso não for adicionado será aplicada dinamicamente-->
    <div class="space">
      <div class="drag drag-1">drag 1</div>
      <div class="drag drag-2"> drag 2</div>
      <div class="drag drag-3"> drag 3</div>
      <div class="drag drag-2"> drag 4</div>
      <div class="drag drag-3"> drag 5</div>
      <div class="drag drag-2"> drag 6</div>
      <div class="drag drag-3"> drag 7</div>
      <div class="drag drag-2"> drag 8</div>
      <div class="drag drag-3"> drag 9</div>
      <div class="drag drag-2"> drag 10</div>
      <div class="drag drag-3"> drag 11</div>
    </div>
  </div>

  <div class="wrapper container swiper">
    <!--o wrapper só deve ter um tag filho raiz-->
    <!-- class space é opcional no tag filha raiz, senão existe será adicionada dinamicamente-->
    <div>
      <div class="drag drag-1">drag 1</div>
      <div class="drag drag-2"> drag 2</div>
      <div class="drag drag-3"> drag 3</div>
      <div class="drag drag-2"> drag 4</div>
      <div class="drag drag-3"> drag 5</div>
      <div class="drag drag-2"> drag 6</div>
      <div class="drag drag-3"> drag 7</div>
      <div class="drag drag-2"> drag 8</div>
      <div class="drag drag-3"> drag 9</div>
      <div class="drag drag-2"> drag 10</div>
      <div class="drag drag-3"> drag 11</div>
      <div class="drag drag-2"> drag 12</div>
      <div class="drag drag-3"> drag 13</div>
      <div class="drag drag-2"> drag 14</div>
      <div class="drag drag-3"> drag 15</div>
      <div class="drag drag-3"> drag 16</div>
      <div class="drag drag-3"> drag 17</div>
      <div class="drag drag-3"> drag 18</div>
      <div class="drag drag-3"> drag 19</div>
      <div class="drag drag-3"> drag 20</div>
    </div>
  </div>
  <script src="drag.js"></script>
  <script>
    new dragElement('.container', true)
    new dragElement('.swiper', true, true)
  </script>
</body>

</html>

`
----------

# A funcção javascript recebe três paramatros dois deles opcionais
1. é o wrapper para limitação da área visível dos elementos
2. receber o valor <strong>true</strong> ou <strong>false</strong> para se mover na coordenada horizontal
3. receber o valor <strong>true</strong> ou <strong>false</strong> para se mover na coordenada vertical
