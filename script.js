// JavaScript for Testimonials Slider
const testimonials = document.querySelectorAll('.single_review');
const totalTestimonials = testimonials.length;
let currentTestimonial = 0;

const showTestimonial = (index) => {
  testimonials.forEach((testimonial, i) => {
    testimonial.style.display = i === index ? 'flex' : 'none';
  });
};

const nextTestimonial = () => {
  currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
  showTestimonial(currentTestimonial);
};

const prevTestimonial = () => {
  currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
  showTestimonial(currentTestimonial);
};

// Initialize the slider
showTestimonial(currentTestimonial);

// Auto-slide every 5 seconds
setInterval(nextTestimonial, 5000);

// Optional: Adding navigation buttons
document.getElementById('nextBtn').addEventListener('click', nextTestimonial);
document.getElementById('prevBtn').addEventListener('click', prevTestimonial);