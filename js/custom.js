// to get current year in footer
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


//  owl carousel script
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    autoplay: true,
    navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        991: {
            items: 2
        }
    }
});

//    end owl carousel script 

// sticky navbar 

const nav_header = document.querySelector(".header_section")
const hero_section = document.querySelector(".hero_bg_box")

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        //  console.log(ent);
        ent.isIntersecting === false
            ? nav_header.classList.add('sticky')
            : nav_header.classList.remove('sticky');
 },
    {
        root: null,
        rootMargin: "",
        threshold: "",
    });

observer.observe(hero_section);