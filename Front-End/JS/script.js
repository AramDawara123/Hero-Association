function storeInput(formId) {
    var formInput = {};
    var form = document.getElementById(formId).elements;

    for (var i = 0; i < form.length; i++) {
      var Result = form[i];
      if (Result.tagName === "INPUT" || Result.tagName === "TEXTAREA") {
        formInput[Result.id] = Result.value;
      }
    }
  }

function search(){
    var text = document.getElementById('search').value;
    const tr = document.getElementsByTagName('tr');
    for (let i=1;i<tr.length;i++){
        if(!tr[i].children[1].children[1].innerHTML.toLowerCase().includes(
            text.toLowerCase()
        )){
            tr[i].style.display = 'none';
        }
        else{
            tr[i].style.display = '';
        }
    }
}


function filterByScore() {
  var score = document.getElementById('scoreFilter').value.trim();
  filterRows(score, 2);
}

function filterRows(filterText, columnIndex) {
  const rows = document.querySelectorAll('tbody tr');
  let closestScore = Infinity;
  let closestRow = null;

  for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const cell = row.getElementsByTagName('td')[columnIndex];
      if (cell) {
          const content = cell.textContent || cell.innerText;
          const scoreDiff = parseInt(content) - parseInt(filterText);

          if (scoreDiff >= 0 && scoreDiff < closestScore) {
              closestScore = scoreDiff;
              closestRow = row;
          }
      }
  }

  for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      if (row === closestRow || closestRow === null) {
          row.style.display = '';
      } else {
          row.style.display = 'none';
      }
  }
}

