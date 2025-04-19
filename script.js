// TODO : Ajouter un écouteur d'événement sur le formulaire 
document.getElementById('form-examen').addEventListener('submit', function(e) 
{ 
    e.preventDefault(); 
   
    // TODO : Récupérer les valeurs du formulaire 
    const examen = { 
      nom: document.getElementById('nom').value, 
      duree: parseInt(document.getElementById('duree').value), 
      description: document.getElementById('description').value, 
      proprietaire: document.getElementById('proprietaire').value, 
      questions: [] 
    }; 
   
    // TODO : Sauvegarder l'examen dans le localStorage sous une clé basée sur 
le nom du propriétaire 
    const examsKey = 'examens_' + examen.proprietaire; 
    const exams = JSON.parse(localStorage.getItem(examsKey)) || []; 
    exams.push(examen); 
    localStorage.setItem(examsKey, JSON.stringify(exams)); 
   
    alert('Examen ajouté avec succès !'); 
    this.reset(); 
  });
  // TODO : Ajouter un écouteur d'événement pour enregistrer la question 
document.getElementById('form-question').addEventListener('submit', 
    function(e) { 
        e.preventDefault(); 
    
        const enonce = document.getElementById('enonce').value; 
        const duree = parseInt(document.getElementById('duree').value); 
        const points = parseInt(document.getElementById('points').value); 
        const proprietaire = document.getElementById('proprietaire').value; 
        const nomExamen = document.getElementById('nom-examen').value; 
       
        const propositions = []; 
        document.querySelectorAll('#propositions div').forEach(div => { 
          const texte = div.querySelector('input[type="text"]').value; 
          const correcte = div.querySelector('input[type="checkbox"]').checked; 
          propositions.push({ texte, correcte }); 
        }); 
       
        // TODO : Trouver l'examen existant à partir du localStorage 
        const examsKey = 'examens_' + proprietaire; 
        const exams = JSON.parse(localStorage.getItem(examsKey)) || []; 
        const exam = exams.find(e => e.nom === nomExamen); 
        if (!exam) { 
          alert('Examen non trouvé !'); 
          return; 
        }
        // TODO : Ajouter la question à l'examen et mettre à jour le localStorage 
    const question = { enonce, duree, points, propositions }; 
    exam.questions.push(question); 
   
    localStorage.setItem(examsKey, JSON.stringify(exams)); 
   
    alert('Question ajoutée avec succès !'); 
    
    this.reset(); 
    document.getElementById('propositions').innerHTML = ''; 
  });