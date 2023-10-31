import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../estudante/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Instituição</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Instituição</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>FILMES</h1>
        <form>
          <input id="pesquisa" placeholder='Digite o nome do filme'/>
          <button>Pesquisar</button>
        </form>
        <div className="lista">
          <div className = "item">
            <h2></h2>
            <img src=""/>
          </div>
        </div>
        <ExploreContainer name="Instituição" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
