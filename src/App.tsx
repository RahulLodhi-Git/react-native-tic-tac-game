import React, {useEffect, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import Icons from '../components/Icons';

export default function App(): React.JSX.Element {
  const deviceColorScheme = useColorScheme();
  const [playerTurn, setPlayerTurn] = useState('circle-o');
  let playerChance: string[] = [
    'pencil',
    'pencil',
    'pencil',
    'pencil',
    'pencil',
    'pencil',
    'pencil',
    'pencil',
    'pencil',
  ];
  const [playerChanceState, SetPlayerChanceState] = useState(playerChance);
  const handlePress = (index: any) => {
    playerChanceState[index] = playerTurn;
    setPlayerTurn(prevState =>
      prevState === 'circle-o' ? 'remove' : 'circle-o',
    );
  };
  const handleGameReload = () => {
    setPlayerTurn('circle-o');
    SetPlayerChanceState(playerChance);
  };

  return (
    <SafeAreaView style={[styleClass.mainWrapper]}>
      <View>
        <Text style={styleClass.defaultText}>
          Player's <Icons name={playerTurn} /> Turn
        </Text>
        <View style={styleClass.gameBoard}>
          <View style={styleClass.gameRow}>
            <View style={styleClass.gameBox}>
              <TouchableOpacity
                onPress={() => {
                  handlePress(0);
                }}>
                <Icons name={playerChanceState[0]} />
              </TouchableOpacity>
            </View>
            <View style={styleClass.gameBox}>
              <TouchableOpacity
                onPress={() => {
                  handlePress(1);
                }}>
                <Icons name={playerChanceState[1]} />
              </TouchableOpacity>
            </View>
            <View style={styleClass.gameBox}>
              <TouchableOpacity
                onPress={() => {
                  handlePress(2);
                }}>
                <Icons name={playerChanceState[2]} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styleClass.gameRow}>
            <View style={styleClass.gameBox}>
              <TouchableOpacity
                onPress={() => {
                  handlePress(3);
                }}>
                <Icons name={playerChanceState[3]} />
              </TouchableOpacity>
            </View>
            <View style={styleClass.gameBox}>
              <TouchableOpacity
                onPress={() => {
                  handlePress(4);
                }}>
                <Icons name={playerChanceState[4]} />
              </TouchableOpacity>
            </View>
            <View style={styleClass.gameBox}>
              <TouchableOpacity
                onPress={() => {
                  handlePress(5);
                }}>
                <Icons name={playerChance[5]} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styleClass.gameRow}>
            <View style={styleClass.gameBox}>
              <TouchableOpacity
                onPress={() => {
                  handlePress(6);
                }}>
                <Icons name={playerChanceState[6]} />
              </TouchableOpacity>
            </View>
            <View style={styleClass.gameBox}>
              <TouchableOpacity
                onPress={() => {
                  handlePress(7);
                }}>
                <Icons name={playerChanceState[7]} />
              </TouchableOpacity>
            </View>
            <View style={styleClass.gameBox}>
              <TouchableOpacity
                onPress={() => {
                  handlePress(8);
                }}>
                <Icons name={playerChanceState[8]} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Pressable style={styleClass.button} onPress={() => handleGameReload()}>
          <Text style={styleClass.btnText}>Reload Game</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styleClass = StyleSheet.create({
  mainWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    zIndex: 1,
    backgroundColor: '#f1f2f6',
  },
  gameBoard: {
    rowGap: 15,
    width: '100%',
  },
  gameRow: {
    columnGap: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  gameBox: {
    width: '33%',
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: '#a855f7',
    backgroundColor: '#faf5ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2f3542',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 36,
    backgroundColor: '#8D3DAF',
    marginTop: 40,
  },
  btnText: {
    color: '#fff',
    fontSize: 25,
  },
});
