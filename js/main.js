jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 62
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $('.carousel').carousel({
    interval: 3500
  });

  const skills = {
      "python": [{
        value: 85,
        color: "#1abc9c"
      },
      {
        value: 15,
        color: "#ecf0f1"
      }
    ],

      "C++": [{
        value: 75,
        color: "#1abc9c"
      },
      {
        value: 25,
        color: "#ecf0f1"
      }
    ],

      "C": [{
        value: 70,
        color: "#1abc9c"
      },
      {
        value: 30,
        color: "#ecf0f1"
      }
    ],

      "Java": [{
        value: 5,
        color: "#1abc9c"
      },
      {
        value: 95,
        color: "#ecf0f1"
      }
    ],

    "PHP": [{
      value: 5,
      color: "#1abc9c"
    },
    {
      value: 95,
      color: "#ecf0f1"
    }
  ],

      "Bootstrap": [{
        value: 60,
        color: "#1abc9c"
      },
      {
        value: 40,
        color: "#ecf0f1"
      }
    ],

      "Wordpress": [{
        value: 10,
        color: "#1abc9c"
      },
      {
        value: 90,
        color: "#ecf0f1"
      }
    ],

      "HTML": [{
        value: 80,
        color: "#1abc9c"
      },
      {
        value: 20,
        color: "#ecf0f1"
      }
    ]
};


  for (let data in skills) {
    let myDoughnut = new Chart(document.getElementById(data).getContext("2d")).Doughnut(skills[data]);
  }

});
