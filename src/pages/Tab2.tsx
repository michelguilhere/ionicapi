import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import './Tab2.css';

const Tab2: React.FC = () => {
    const [dadosDaAPI, setDadosDaAPI] = useState<any>(null);
  
    useEffect(() => {
      buscarDadosDaAPI();
    }, []);
    
  
    const buscarDadosDaAPI = async () => {
      try {
        const resposta = await fetch('https://picsum.photos/200/300');
        
        const imagemBlob = await resposta.blob();
        const urlImagem = URL.createObjectURL(imagemBlob); 
        setDadosDaAPI({ url: urlImagem });
      } catch (erro) {
        console.error('Erro ao buscar dados da API:', erro);
      }
    };
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle color="tertiary">Teste API</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="container">
          <h3>-----</h3>
          <h1>Gerador de fotos aleatórias</h1>
          
          {dadosDaAPI && (
            <div className="dados-da-api">
              <img src={dadosDaAPI.url} alt="Imagem aleatória" />
            </div>
          )}
          <IonButton id="botaoAPI" onClick={buscarDadosDaAPI}>
            Buscar dados da API
          </IonButton>
        </IonContent>
      </IonPage>
    );
};

export default Tab2;
