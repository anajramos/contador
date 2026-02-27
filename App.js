import react, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  // A lógica vai aqui
  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador(contador + 1); // O Grito de Atualização
  }

  function decrementar() {
    setContador(contador - 1); // O Grito de Atualização
  }


 return ( /* O visual vai aqui */ );
  
}