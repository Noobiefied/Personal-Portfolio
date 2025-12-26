document.addEventListener('DOMContentLoaded', function () {
        const skillsSection = document.querySelector('.skills');
        const bars = Array.from(document.querySelectorAll('.progress-bar div'));

        if (!skillsSection) return;

        const io = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Stagger fills: 200ms between each bar
              bars.forEach((bar, i) => {
                const percentAttr = bar.getAttribute('data-percent');
                const textPercent = bar.textContent.replace(/[^0-9]/g, '');
                const percent = percentAttr ? parseInt(percentAttr, 10) : (textPercent ? parseInt(textPercent, 10) : 0);
                setTimeout(() => { bar.style.width = percent + '%'; }, i * 200);
              });
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.3 });

        io.observe(skillsSection);
      });