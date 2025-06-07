const projects = document.querySelectorAll('.projects');
const hiddenElements = document.querySelectorAll('.hidden');

projects.forEach(project => {
  project.addEventListener('click', () => {
    projects.forEach(p => {
      if (p !== project) {
        p.classList.remove('expanded');
        p.classList.add('collapsed');
      }
    });

    if (project.classList.contains('expanded')) {
      project.classList.remove('expanded');
      project.classList.add('collapsed');
    } else {
      project.classList.remove('collapsed');
      project.classList.add('expanded');
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting) {
      entry.target.classList.add('show');   
    } else {
      entry.target.classList.remove('show');
    }
  });
});

hiddenElements.forEach((el) => {
  observer.observe(el);
});
