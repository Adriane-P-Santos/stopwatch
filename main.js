window.onload = function () {
  var minutes = 00
  var seconds = 00
  var tens = 00
  var buttonStart = document.getElementById('startB')
  var buttonStop = document.getElementById('stopB')
  var buttonReset = document.getElementById('resetB')
  var secSpan = document.getElementById('sec')
  var minSpan = document.getElementById('min')
  var tenSpan = document.getElementById('ten')
  var interval
  var savedTime = document.getElementById('savedTime')

  buttonStart.onclick = function () {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
  }

  function startTimer() {
    tens++
    if (tens <= 9) {
      tenSpan.innerHTML = '0' + tens
    }

    if (tens > 9) {
      tenSpan.innerHTML = tens
    }

    if (tens > 99) {
      seconds++
      secSpan.innerHTML = '0' + seconds
      tens = 0
      tenSpan.innerHTML = '0' + 0
    }

    if (seconds > 9) {
      secSpan.innerHTML = seconds
    }

    if (seconds > 60) {
      minutes++
      minSpan.innerHTML = '0' + minutes
      seconds = 0
      secSpan.innerHTML = '0' + 0
    }

    if (minutes > 9) {
      minSpan.innerHTML = minutes
    }
  }

  buttonStop.onclick = function () {
    clearInterval(interval)
    var id = 0
    if (
      `${minSpan.innerHTML}:${secSpan.innerHTML}:${tenSpan.innerHTML}` !==
      '00:00:00'
    ) {
      // console.log(savedTime.firstChild !== `${minSpan.innerHTML}:${secSpan.innerHTML}:${tenSpan.innerHTML}`)
      var span = document.createElement('span')
      // var arrow = document.createElement("i");
      // arrow.setAttribute('class', 'fas fa-arrow-right')
      // arrow.setAttribute('style', 'font-size:36px')
      var spanText = document.createTextNode(
        minSpan.innerHTML + ':' + secSpan.innerHTML + ':' + tenSpan.innerHTML
      )
      span.appendChild(spanText)
      id++
      span.setAttribute('id', id)
      // span.appendChild(arrow);

      if (!savedTime.lastChild) {
        savedTime.appendChild(span)
        savedTime.appendChild(document.createElement('br'))
      } else {
        // console.log(spanText);
        // console.log(span.firstChild);
        if (spanText === savedTime.firstChild.firstChild) {
          console.log('1')
          console.log(savedTime.lastChild)
          console.log(spanText)
        } else {
          console.log('2')
          console.log(savedTime.lastChild)
          console.log(spanText)
          savedTime.appendChild(span)
        }
      }
      // savedTime.appendChild(span);
    }
    // console.log(savedTime.firstChild.firstChild)
  }

  buttonReset.onclick = function () {
    clearInterval(interval)
    tens = '00'
    seconds = '00'
    minutes = '00'
    secSpan.innerHTML = seconds
    minSpan.innerHTML = minutes
    tenSpan.innerHTML = tens
    while (savedTime.hasChildNodes()) {
      savedTime.removeChild(savedTime.firstChild)
    }
  }
}
