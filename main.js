
$.ajax({
  url:'http://fvi-grad.com:4004/sudoku',
  success: function(res){
    for (var f = 0; f < 9; f++) {
      for (var c = 0; c < 9; c++) {
        var fila =$("tr")[f];
        var celda =$(fila).find("td")[c];
        if (res[f][c]!="") {
          $(celda).find("input").val(res[f][c]);
        }
      }
    }
  }
});

function generaTablero(){
  var resultado =new Array(9).fill(1).map(e=>new Array(9) );
  for (var f = 0; f < 9; f++) {
    for (var col = 0; col < 9; col++) {
      var fila =$("tr")[f];
      var celda =$(fila).find("td")[col];
      resultado[f][col] =   Number($(celda).find("input").val());
      }
  }
  return resultado;
}
$(".button").click(function(){
  console.log(generaTablero());
    $.ajax({
    url: 'http://fvi-grad.com:4004/sudoku',
    method:"POST",
    data: {board:generaTablero()} ,
    success: function(){

    },
    })
});
