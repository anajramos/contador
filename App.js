import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1a1a2e",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
  },
  numero: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#00d4ff",
    marginBottom: 30,
  },
  linhaDebotoes: {
    flexDirection: "row",
    gap: 20,
  },
  botao: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  botaoMais: {
    backgroundColor: "#4CAF50",
  },
  botaoMenos: {
    backgroundColor: "#f44336",
  },
  textoBotao: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default function App() {
  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador(contador + 1);
  }

  function decrementar() {
    setContador(contador - 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador Digital</Text>

      <Text style={styles.numero}>{contador}</Text>

      <View style={styles.linhaDebotoes}>
        <TouchableOpacity
          style={[styles.botao, styles.botaoMenos]}
          onPress={decrementar}
        >
          <Text style={styles.textoBotao}>−</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, styles.botaoMais]}
          onPress={incrementar}
        >
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

