const testimonialObjs = [{
    name: 'Sahil Kumar Verma',
    comment: 'Great classes and trainers. ',
    city: 'Varansi',
    country: 'Uttar Pradesh, India',
    imgsrc: 'images/person1.jpg',
    imgdescription: 'person1',
  },
  {
    name: 'Mr. Sen',
    comment: 'I absolutely love this fitness center.',
    city: 'Azamgarh',
    country: 'Uttar Pradesh, India',
    imgsrc: 'images/person2.jpg',
    imgdescription: 'person2',
  },
  {
    name: 'Rajkumar Rajbhar',
    comment: 'The cleanliness and hygiene standards at this fitness center are exceptional.',
    city: 'Ballia',
    country: 'Uttar Pradesh, India',
    imgsrc: 'images/person3.jpg',
    imgdescription: 'person3',
  },
  {
    name: 'Amritanshu Kumar Singh',
    comment: 'I had some concerns about joining a fitness center, but the team here made me feel welcomed and at ease from day one.',
    city: 'Barisha',
    country: 'West Bengal, India',
    imgsrc: 'images/person4.jpg',
    imgdescription: 'person4',
  },
  {
    name: 'M.Prasant',
    comment: 'The staffs professionalism and passion for fitness shine through in every interaction.',
    city: 'Vijayawada',
    country: 'Andhra Pradesh, India',
    imgsrc: 'images/person5.jpg',
    imgdescription: 'person5',
  },
  {
    name: 'Sankalp Rajguru',
    comment: 'Joining this fitness center was the best decision I made for my health.', 
    city: 'Odisha',
    country: 'India',
    imgsrc: 'images/person6.jpg',
    imgdescription: 'person6',
  }];
  const hamburgerBtn = document.querySelector('.icon-menu-mobile img');
  const crossBtn = document.querySelector('.cross img');
  const showMoreBtn = document.querySelector('.testimonial-btn button');
  const mobileMenu = document.querySelector('.nav-mobile');
  const mobileMenuElements = document.querySelectorAll('.nav-mobile .container li');
  const testimonialContainer = document.querySelector('.testimonial-container');
  hamburgerBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
    hamburgerBtn.style.display = 'none';
  });
  crossBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    hamburgerBtn.style.display = 'block';
  });
  
  mobileMenuElements.forEach((menuElement) => {
    menuElement.addEventListener('click', () => {
      mobileMenu.style.display = 'none';
      hamburgerBtn.style.display = 'block';
    });
  });
  let content = '';
  testimonialObjs.forEach((testimonialObj) => {
    content += `<div class="testimonial-card">
       <div class="testimonial-image">
           <img src="${testimonialObj.imgsrc}" alt="${testimonialObj.imgdescription}">
       </div>
       <div class="testimonial-content">
           <h2>${testimonialObj.name}</h2>
           <h4>"${testimonialObj.comment}"
           </h4>
           <hr>
           <p>From ${testimonialObj.city}, ${testimonialObj.country}</p>
       </div>
    </div>`;
  });
  
  testimonialContainer.innerHTML += content;
  const testimonials = document.querySelectorAll('.testimonial-card');
  if (showMoreBtn !== null) {
    showMoreBtn.addEventListener('click', () => {
      testimonials.forEach((testimonial, index) => {
        if (index > 1) {
          if (window.getComputedStyle(testimonial).display === 'none') {
            testimonial.style.display = 'flex';
          } else {
            testimonial.style.display = 'none';
          }
        }
      });
      if (testimonials[2].style.display === 'none') {
        showMoreBtn.innerHTML = 'More <img src="images/icons/down-arrow.svg" alt="down icon">';
      } else {
        showMoreBtn.innerHTML = 'Less <img src="images/icons/up-arrow.svg" alt="down icon">';
      }
    });
  }
  