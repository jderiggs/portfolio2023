var layers = [],
      layerElements = document.getElementsByClassName('layer'),
      _scrollY = window.scrollY;

    function init() {
      for (var i = 0; i < layerElements.length; i += 1) {
        var el = layerElements[i];
        var offset = layerElements[i].dataset.offset;
        layers.push({el: el, y: 0, offset: offset});
      }

      window.addEventListener('scroll', handle_scroll);
      requestAnimationFrame(animate);
    }

    function handle_scroll(e) {
      _scrollY = window.scrollY;
    }

    function animate() {
      //_scrollY = window.scrollY;  //for mobile only

      for (var i = 0; i < layers.length; i += 1) {
        var oldY = layers[i].y;
        layers[i].y = _scrollY * layers[i].offset;

        if (oldY !== layers[i].y) {
          layers[i].el.style.transform = 'translateY(' + layers[i].y + 'px)';
        }
      }

      requestAnimationFrame(animate);
    }
init();

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 150 - Math.random() * 100;

  if (this.isDeleting) { delta /= 3; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #3380ff }";
  document.body.appendChild(css);
};

const card = document.querySelector("#description-box")
const card2 = document.querySelector("#description-box2")
const card3 = document.querySelector("#description-box3")
const card4 = document.querySelector("#description-box4")
const link = document.querySelector('.link')
const link2 = document.querySelector('.link2')
const link3 = document.querySelector('.link3')
const link4 = document.querySelector('.link4')

card.addEventListener("click", handleClick)

function handleClick(event) {
  const isTextSelected = window.getSelection().toString();
  if (!isTextSelected) {
    link.click();
  }
}

card2.addEventListener("click", handleClick2)

function handleClick2(event) {
  const isTextSelected = window.getSelection().toString();
  if (!isTextSelected) {
    link2.click();
  }
}

card3.addEventListener("click", handleClick3)

function handleClick3(event) {
  const isTextSelected = window.getSelection().toString();
  if (!isTextSelected) {
    link3.click();
  }
}

card4.addEventListener("click", handleClick4)

function handleClick4(event) {
  const isTextSelected = window.getSelection().toString();
  if (!isTextSelected) {
    link4.click();
  }
}