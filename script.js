document.getElementById('caseForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var caseDescription = document.getElementById('caseDescription').value;
    var policeStation = document.getElementById('policeStation').value;
  
    // Perform validation or additional processing if necessary
  
    // For demonstration purposes, log form values
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Case Description:', caseDescription);
    console.log('Desired Police Station/District:', policeStation);
  
    // You can add further logic here to send the data to a server for processing
  });
  