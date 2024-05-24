import React from 'react';
import Header from '../../components/header';
import Card from './component/card';
import {PassCardType} from '../../common/enum';

const MyPass = () => {
  return (
    <Header title="My Pass">
      <Card
        passCardText={PassCardType.buildingPass}
        name="Peterson Homes"
        location="Spatium offices Pvt. Ltd."
        issueDate="12 Dec 2023"
      />

      <Card
        passCardText={PassCardType.parkingPass}
        name="Peterson Homes"
        location="Spatium offices Pvt. Ltd."
        vehicle="2 Wheeler"
      />
    </Header>
  );
};

export default MyPass;
