import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonLabel,
  IonItem,
  IonAvatar,
} from '@ionic/react';

import { useAuthConnect } from '@ionic-enterprise/auth-react';

interface User {
  name: string;
  picture: string;
  email: string;
}

interface UserCardProps {}

const UserCard: React.FC<UserCardProps> = () => {
  const {
    accessToken,
    refreshToken,
    isAuthenticated,
    idToken,
  } = useAuthConnect<User>();

  return (
    <IonCard className="provider">
      <IonCardHeader>
        <IonCardTitle>User Info</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonItem lines="none">
          <IonAvatar slot="start">
            <img src={idToken?.picture} alt={idToken?.name} />
          </IonAvatar>
          <IonLabel>
            <h2>{idToken?.name}</h2>
            <p>{idToken?.email}</p>
            <p>Status: {isAuthenticated ? 'Logged In' : 'Logged Out'}</p>
            <p>Access Token: {accessToken}</p>
            <p>Refresh Token: {refreshToken}</p>
          </IonLabel>
        </IonItem>
      </IonCardContent>
    </IonCard>
  );
};

export default UserCard;