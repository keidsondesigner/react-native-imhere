import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {
  const participants = ['Karol', 'Keidson', 'Arthur', 'Lucas', 'Joaquim', 'exemplo 1', 'exemplo 2', 'exemplo 3', 'exemplo 4', 'exemplo 5'];

  function handleParticipantAdd() {
    console.log('Adicionar');
  } 

  function handleParticipantRemove(name: string) {
    console.log('remover' + name);
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