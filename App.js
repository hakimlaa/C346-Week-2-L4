import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';

function Boat({ name, description, picture }) {
  return (
    <View style={{ marginBottom: 24 }}>
      <Text
        style={{
          fontSize: 22,
          textTransform: 'uppercase',
          color: '#444',
        }}>
        ⛵ {name}
      </Text>
      <Text style={{ color: '#666', marginBottom: 6 }}>{description}</Text>
      <Image
        source={picture}
        style={{ width: '100%', height: 200 }}
        resizeMode="cover"
      />
    </View>
  );
}

const boats = [
  {
    name: 'Sea Ray 500 Sundancer',
    description:
      'Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.',
    picture: require('./img/sea_ray.jpg'),
  },
  {
    name: 'Four Winns Horizon 180',
    description:
      'A sporty look and refined details truly set the Horizon 180 above all others.',
    picture: require('./img/four_winns.jpg'),
  },
  {
    name: 'Flipper 640 ST',
    description:
      'A modern take on the classic, traditional hardtop and perfect for a family picnic.',
    picture: require('./img/flipper.jpg'),
  },
  {
    name: 'Princess V48',
    description:
      'There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.',
    picture: require('./img/princess.jpg'),
  },
  {
    name: 'Bayliner 175 Bowrider',
    description:
      'Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.',
    picture: require('./img/bayliner.jpg'),
  },
  {
    name: 'Fairline Targa 47',
    description:
      'Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.',
    picture: require('./img/fairline.jpg'),
  },
];

export default function App() {
  return (
    <ScrollView style={{ padding: 10 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        GetABoat - For Sale
      </Text>

      {boats.map((boat) => (
        <Boat
          key={boat.name}
          name={boat.name}
          description={boat.description}
          picture={boat.picture}
        />
      ))}
    </ScrollView>
  );
}