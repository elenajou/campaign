document.querySelectorAll('.expandable').forEach(item => {
  const checkbox = item.querySelector('input[type="checkbox"]');
  const details = item.querySelector('.details');
  
  item.addEventListener('click', () => {
      checkbox.checked = !checkbox.checked;
  });

  checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
          details.style.display = 'block';
      } else {
          details.style.display = 'none';
      }
  });
});
