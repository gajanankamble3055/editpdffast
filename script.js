document.getElementById('pdf-upload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      const fileURL = URL.createObjectURL(file);
      document.getElementById('pdf-viewer').innerHTML = `
        <iframe id="pdf-iframe" src="${fileURL}" width="100%" height="600px"></iframe>
      `;
    } else {
      alert('Please upload a valid PDF file.');
    }
  });
  
  document.addEventListener('click', function(e) {
    const pdfIframe = document.getElementById('pdf-iframe');
    if (pdfIframe) {
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
  