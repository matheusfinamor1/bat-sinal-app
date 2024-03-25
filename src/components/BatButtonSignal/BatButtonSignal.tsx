import React, {useState} from 'react';
import { Pressable, Text } from 'react-native';

import { styles } from './BatButtonSignalStyle';

export function BatButtonSignal(){
  const [signal, setSignal] = useState(false)

  function handlerBatSignal(){
    let batSignal = !signal
    setSignal(batSignal)
    console.log(batSignal);
    
  }

  return (
    <>
      <Pressable onPress={handlerBatSignal} style={styles.button}>
          <Text style={styles.text}>Ativar BatSinal</Text>
      </Pressable>
    </>
  )

}