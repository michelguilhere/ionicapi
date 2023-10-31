import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonTabButton, IonTitle, IonToolbar } from '@ionic/react';

import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle color="tertiary">Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Inicio</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonLabel class="ion-text-wrap">
            <section className="secao-1">
            <h1>Bem vindos ao meu site</h1>
            <p>Site teste para a matéria de programação para interface de usuário. Site feito através do VScode com ionic react por aluno de ciência da computação do 6º semestre no ano de 2023/2. is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <h2><strong ><i>É estudante?</i></strong><IonButton target="_blank" rel="noopener noreferrer" href="https://virtual.unijui.edu.br/Portal/Modulos/login/?redirect=/Portal/Modulos/unijuiVirtual/#!15787">Clique Aqui</IonButton></h2>
            <div className="img">
                            <img src="https://www.unijui.edu.br/images/stories/manual_identidade/marcas/download.php?arquivo=marca.png"></img>
                                
                        </div>
            </section>
          </IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
