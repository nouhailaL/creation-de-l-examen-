document.getElementById('form-examen').addEventListener('submit', function(e) {
  e.preventDefault();

  const examen = {
    nom: document.getElementById('nom').value.trim(),
    duree: parseInt(document.getElementById('duree').value),
    description: document.getElementById('description').value.trim(),
    proprietaire: document.getElementById('proprietaire').value.trim(),
    questions: []
  };

  const examsKey = 'examens_' + examen.proprietaire.toLowerCase();
  const exams = JSON.parse(localStorage.getItem(examsKey)) || [];

  if (exams.some(e => e.nom === examen.nom)) {
    alert('Un examen avec ce nom existe déjà pour ce propriétaire.');
    return;
  }

  exams.push(examen);
  localStorage.setItem(examsKey, JSON.stringify(exams));
  alert('Examen ajouté avec succès !');
  this.reset();
});
