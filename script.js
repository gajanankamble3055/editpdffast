document.getElementById('pdf-upload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      const fileURL = URL.createObjectURL(file);
      document.getElementById('pdf-viewer').innerHTML = `
        <embed src="${fileURL}" type="application/pdf" width="100%" height="600px" />
      `;
    } else {
      alert('Please upload a valid PDF file.');
    }
  });
  