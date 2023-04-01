import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import { styles } from './styles';

export default function App(){
  return(
    <View>
      <Text style={styles.titulo}>
        Vagas
      </Text>

      <ScrollView>
        <View style={styles.vagas}>
          <Text style={styles.tituloVaga}>Desenvolvedor Backend.</Text>
          <Text style={styles.descricao}>Salário: RS3000,00.</Text>
          <Text style={styles.descricao}>Descrição: Vaga PJ.</Text>
          <Text style={styles.descricao}>Contato: (13) 0000-0000.</Text>
      </View>
      <View style={styles.vagas}>
        <Text style={styles.tituloVaga}>Desenvolvedor Frontend.</Text>
        <Text style={styles.descricao}>Salário: RS4000,50.</Text>
        <Text style={styles.descricao}>Descrição: Vaga CLT.</Text>
        <Text style={styles.descricao}>Contato: (11) 0000-0000.</Text>
      </View>
      <View style={styles.vagas}>
        <Text style={styles.tituloVaga}>Estrutura de dados.</Text>
        <Text style={styles.descricao}>Salário: RS1000,00.</Text>
        <Text style={styles.descricao}>Descrição: Vaga preferencialmente para mulheres..</Text>
        <Text style={styles.descricao}>Contato: (12) 0000-0000.</Text>
      </View>
      </ScrollView>
    </View>
  )
}