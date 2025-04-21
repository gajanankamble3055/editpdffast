document.getElementById('pdf-upload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      const fileURL = URL.createObjectURL(file);
      document.getElementById('pdf-viewer').innerHTML = `
        <embed id="pdf-embed" src="${fileURL}" type="application/pdf" width="100%" height="600px" />
      `;
    } else {
      alert('Please upload a valid PDF file.');
    }
  });
  
  // Add text to the PDF
  document.addEventListener('click', function(e) {
    const pdfEmbed = document.getElementById('pdf-embed');
    if (pdfEmbed) {
      const text = prompt("Enter text to add:");
      if (text) {
        const div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.left = `${e.clientX}px`;
        div.style.top = `${e.clientY}px`;
        div.style.color = 'red';
        div.style.fontSize = '16px';
        div.style.fontFamily = 'Arial';
        div.innerText = text;
        document.body.appendChild(div);
      }
    }
  });
/* Styles for added text */
div {
    font-size: 16px;
    color: red;
    position: absolute;
    pointer-events: none;
  }
    