// Scroll animation
const sections = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
},{threshold:0.2});
sections.forEach(sec => observer.observe(sec));

window.addEventListener('load', () => {
    document.querySelectorAll('.animate').forEach(el => el.classList.add('show'));
});

// Modal Pop-up
const projects = document.querySelectorAll('.project');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalLink = document.getElementById('modal-link');

projects.forEach(project => {
  project.addEventListener('click', () => {
    const template = project.querySelector('template');
    modalTitle.textContent = project.dataset.title;
    modalDesc.innerHTML = template ? template.innerHTML : project.dataset.desc;
    modalLink.href = project.dataset.link;
    modal.style.display = 'block';
  });
});

// Tutup modal
document.querySelectorAll('.modal .close').forEach(span => {
  span.addEventListener('click', () => {
    span.parentElement.parentElement.style.display = 'none';
  });
});



// Dark Mode Toggle
const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});


