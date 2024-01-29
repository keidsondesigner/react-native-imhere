import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {
  const participants = ['karol@gmail.com', 'keidson@gmail.com', 'arthur@gmail.com', 'kucas@gmail.com', 'joaquim@gmail.com', 'exemplo1@gmail.com', 'exemplo2@gmail.com', 'exemplo 3@gmail.com', 'exemplo 4@gmail.com', 'exemplo 5@gmail.com'];

  function handleParticipantAdd() {
    console.log('Adicionar');
    if(participants.includes('karol@gmail.com')) {
      return Alert.alert('Participante existe!', 'Este nome já existe na lista.');
    }
  } 

  function handleParticipantRemove(name: string) {
    console.log('remover' + name);
    return Alert.alert('Remover', 'Remover o participante ' + name + '?',
    [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Removido', 'O participante ' + name + ' foi removido.')
      },
      {
        text: "Não",
        style: "cancel"
      }
    ]);
  } 

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Criador de Eventos
      </Text>
      <Text style={styles.eventDate}>
        Segunda, 29 de Janeiro de 2024.
      </Text>
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          keyboardType="email-address"
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
      <Text style={styles.eventTextList}>
        Lista de participantes
      </Text>
      {/* 
        <Participant 
          name="Keidson"
          onRemove={() => handleParticipantRemove('Keidson')} // função com parametro;
        />
      */}
      {/* 
        <ScrollView showsVerticalScrollIndicator={false}>
          {
            participants.map(participant => (
              <Participant 
                key={participant}
                name={participant}
                onRemove={() => handleParticipantRemove(participant)} // função com parametro;
              />
            ))
          }
        </ScrollView>
      */}
      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)} // função com parametro;
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  );
}