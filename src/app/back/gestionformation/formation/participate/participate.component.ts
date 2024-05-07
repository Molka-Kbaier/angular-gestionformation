import { Component, OnInit } from '@angular/core';
import { FormationService } from 'src/app/back/service/formation.service';




@Component({
  selector: 'app-participate',
  templateUrl: './participate.component.html',
  styleUrls: ['./participate.component.css']
})
export class ParticipateComponent implements OnInit {
  formations: any[] = []; // Initialisez formations avec un tableau vide par défaut
  userId: number = 1;
  constructor(private formationService: FormationService) { }

  ngOnInit(): void {
    this.loadFormations(); // Appelez la méthode pour charger les formations au moment de l'initialisation du composant
  }

  loadFormations(): void {
    // Utilisez le service pour récupérer les données des formations et affectez-les à la propriété formations
    this.formationService.getAll().subscribe(formations => this.formations = formations);
  }
  participate(formationId: number, userId: number): void {
    this.formationService.participateInFormation(formationId, userId)
      .subscribe(
        (response) => {
          alert('Vous avez participé à la formation avec succès.');
          console.log(response); // Vous pouvez également traiter la réponse ici
          this.loadFormations(); // Rechargez les formations après la participation réussie si nécessaire
        },
        (error) => {
          alert('Échec de la participation à la formation: ' + error.error);
          console.error(error); // Affichez l'erreur dans la console pour le débogage
        }
      );
  }
}
