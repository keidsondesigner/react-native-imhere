import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {

  function handleParticipantAdd() {
    console.log('Adicionar');
  } 

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Hello world
      </Text>
      <Text style={styles.eventDate}>
        Segunda, 29 de Janeiro de 2024.
      </Text>
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <Participant name="Keidson"/>
      <Participant name="Karol"/>
      <Participant name="Arthur"/>
    </View>
  );
}