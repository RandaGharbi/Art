import React from 'react'
import { Card, Image, Input, Button } from 'semantic-ui-react'
import art from '../../images/art.png';
import Login from '../../pages/LoginPage/components/FacebookLogin/Login';
import Google from'../../pages/GooglePage/components/GooglePage/Google';
import Modals from '../../pages/ModalPage/Modal/components/Modal'
const CardExampleContentBlock = () => (

  <Card>
    <Card.Content>
      <Card.Header>
      <Image src={art} size='mini' />
      <div>
      <span className="Titre">
      Bienvenue sur ArtSpread !
      </span>
      <p className="sous-titre">
      Trouvez de nouvelles idées à tester
      </p>
      <div className="input">
      <input placeholder='Email' />
      <input placeholder='Céer un mot de passe' />
      </div>
      </div>
      <div>
      <Button negative>Continuer</Button>
      </div>
      <span className="Ou">Ou</span>
      <div>

   <Login />
    <Google />
    </div>
    <span className="Description">
      En continuant, vous acceptez les 
      <strong>conditions d'utilisation</strong>
       et la
      <strong>politique de confidentialité</strong>
       de ArtSpread
    </span>
      <div className='bulle'>
    ArtSpread vous aide à trouver des idées à tester
      </div>
      <div>
     <Modals />
      </div>
      </Card.Header>
    </Card.Content>
  </Card>

)

export default CardExampleContentBlock