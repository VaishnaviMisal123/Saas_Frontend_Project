document.querySelectorAll('.list-group-item').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.list-group-item').forEach(i => i.classList.remove('active'));
    this.classList.add('active');
  });
});
