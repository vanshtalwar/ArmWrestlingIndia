// Mobile menu toggle
   const menuBtn = document.getElementById('menuBtn');
   const navLinks = document.getElementById('navLinks');
   
   menuBtn.addEventListener('click', () => {
     navLinks.classList.toggle('active');
     
     // Toggle icon
     const icon = menuBtn.querySelector('i');
     if (icon.classList.contains('fa-bars')) {
       icon.classList.remove('fa-bars');
       icon.classList.add('fa-times');
     } else {
       icon.classList.remove('fa-times');
       icon.classList.add('fa-bars');
     }
   });
   
   // Close menu when clicking a link
   document.querySelectorAll('.nav-links a').forEach(link => {
     link.addEventListener('click', () => {
       navLinks.classList.remove('active');
       const icon = menuBtn.querySelector('i');
       icon.classList.remove('fa-times');
       icon.classList.add('fa-bars');
     });
   });
   
   // Back to top button
   const backToTopBtn = document.getElementById('backToTop');
   
   window.addEventListener('scroll', () => {
     if (window.scrollY > 300) {
       backToTopBtn.classList.add('active');
     } else {
       backToTopBtn.classList.remove('active');
     }
     
     // Shrink header on scroll
     if (window.scrollY > 100) {
       document.getElementById('header').style.padding = '5px 0';
     } else {
       document.getElementById('header').style.padding = '10px 0';
     }
   });
   
   // Smooth scrolling for all links
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
       e.preventDefault();
       
       const targetId = this.getAttribute('href');
       if(targetId === '#') return;
       
       const targetElement = document.querySelector(targetId);
       
       window.scrollTo({
         top: targetElement.offsetTop - 70,
         behavior: 'smooth'
       });
     });
   });