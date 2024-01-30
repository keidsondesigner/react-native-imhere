import React, { useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {

  //const [estado, atualizaEstado] = useState(['karol@gmail.com']);
  //Minha lista de participantes é o meu estado "participants" 
  const [participants, setParticipants] = useState<string[]>([]);

  const [participantInputName, setParticipantInputName] = useState<string>('');

  function handleParticipantAdd() {

    if (!participantInputName.trim()) {
      return Alert.alert('Campo vazio!', 'Por favor, insira um nome de participante válido.');
    }

    if(participants.includes(participantInputName)) {
      return Alert.alert('Participante existe!', 'Este nome já existe na lista.');
    }
    
    //atualizaEstado(estadoAtual => [...estadoAtual, 'teste@gmail.com']);
    setParticipants(prevState => [...prevState, participantInputName]);
    setParticipantInputName(''); // limpando o valor do input;
    console.log('Fun() adicionar', participants);
  }  2

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', 'Remover o participante ' + name + '?',
    [
      {
        text: 'Sim',
        onPress: () =>  setParticipants(prevState => prevState.filter(participant => participant !== name))
        // setParticipants()  Retornar todos os participantes, Menos o que estou passando como parametro. Isso remove o participante clicado.
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
          // onChangeText={eventText => console.log(eventText)}
          //onChangeText={setParticipantInputName} // Uma forma mais limpa;
          onChangeText={eventText => setParticipantInputName(eventText)} // Guardar texto do Input no estado;
          value={participantInputName} // valor do input;
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