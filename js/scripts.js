$(document).ready(function () {
  let containerA = document.getElementById("circleA")
  let circleA = new ProgressBar.Circle(containerA, {
    color: "#64daf9",
    strokeWidth: 8,
    duration: 1500,
    from: { color: "#AAA" },
    to: { color: "#65daf9" },
    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color)
      let value = Math.round(circle.value() * 52)
      circle.setText(value)
    },
  })

  let containerB = document.getElementById("circleB")
  let circleB = new ProgressBar.Circle(containerB, {
    color: "#64daf9",
    strokeWidth: 8,
    duration: 2000,
    from: { color: "#AAA" },
    to: { color: "#65daf9" },
    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color)
      let value = Math.round(circle.value() * 93)
      circle.setText(value)
    },
  })

  let containerC = document.getElementById("circleC")
  let circleC = new ProgressBar.Circle(containerC, {
    color: "#64daf9",
    strokeWidth: 8,
    duration: 2500,
    from: { color: "#AAA" },
    to: { color: "#65daf9" },
    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color)
      let value = Math.round(circle.value() * 88)
      circle.setText(value)
    },
  })

  let containerD = document.getElementById("circleD")
  let circleD = new ProgressBar.Circle(containerD, {
    color: "#64daf9",
    strokeWidth: 8,
    duration: 3000,
    from: { color: "#AAA" },
    to: { color: "#65daf9" },
    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color)
      let value = Math.round(circle.value() * 215)
      circle.setText(value)
    },
  })

  //Starting the loader when user scrolls
  let dataAreaOffset = $("#data-area").offset()
  let stop = false

  $(window).scroll(function (e) {
    let scroll = $(window).scrollTop()
    if (scroll > dataAreaOffset.top - 500 && stop == false) {
      circleA.animate(1.0)
      circleB.animate(1.0)
      circleC.animate(1.0)
      circleD.animate(1.0)

      stop = true
    }
  })

  //Parallax Effect
  setTimeout(function () {
    $("#data-area").parallax({ imageSrc: "img/cidadeparallax.png" })
    $("#apply-area").parallax({ imageSrc: "img/cidadeparallax.png" })
  }, 250)

  //Portfolio filter
  $(".filter-btn").on("click", function () {
    let type = $(this).attr("id")
    let boxes = $(".project-box")

    $(".main-btn").removeClass("active")
    $(this).addClass("active")

    if (type == "dsg-btn") {
      eachBoxes("dsg", boxes)
    } else if (type == "dev-btn") {
      eachBoxes("dev", boxes)
    } else if (type == "seo-btn") {
      eachBoxes("seo", boxes)
    } else {
      eachBoxes("all", boxes)
    }
  })

  function eachBoxes(type, boxes) {
    if (type == "all") {
      $(boxes).fadeIn()
    } else {
      $(boxes).each(function () {
        if (!$(this).hasClass(type)) {
          $(this).fadeOut("slow")
        } else {
          $(this).fadeIn()
        }
      })
    }
  }
})
