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
  const [count, setCount] = useState(0);
  const [playerChanceState, SetPlayerChanceState] = useState(playerChance);
  const [winner, setWinner] = useState(null);
  const handlePress = (index: any) => {
    playerChanceState[index] = playerTurn;
    setPlayerTurn(prevState =>
      prevState === 'circle-o' ? 'remove' : 'circle-o',
    );
    setCount(prevState => prevState + 1);
  };
  const handleGameReload = () => {
    setPlayerTurn('circle-o');
    SetPlayerChanceState(playerChance);
    setWinner(0);
    setCount(0);
  };

  useEffect(() => {
    checkWinner();
  }, [playerTurn]);

  const checkWinner = () => {
    if (
      playerChanceState[0] === 'circle-o' &&
      ((playerChanceState[4] === 'circle-o' &&
        playerChanceState[8] === 'circle-o') ||
        (playerChanceState[1] === 'circle-o' &&
          playerChanceState[2] === 'circle-o') ||
        (playerChanceState[3] === 'circle-o' &&
          playerChanceState[6] === 'circle-o'))
    ) {
      setWinner('circle');
    } else if (
      playerChanceState[2] === 'circle-o' &&
      ((playerChanceState[4] === 'circle-o' &&
        playerChanceState[6] === 'circle-o') ||
        (playerChanceState[5] === 'circle-o' &&
          playerChanceState[8] === 'circle-o'))
    ) {
      setWinner('circle');
    } else if (
      playerChanceState[1] === 'circle-o' &&
      playerChanceState[4] === 'circle-o' &&
      playerChanceState[7] === 'circle-o'
    ) {
      setWinner('circle');
    } else if (
      playerChanceState[3] === 'circle-o' &&
      playerChanceState[4] === 'circle-o' &&
      playerChanceState[5] === 'circle-o'
    ) {
      setWinner('circle');
    } else if (
      playerChanceState[0] === 'remove' &&
      ((playerChanceState[1] === 'remove' &&
        playerChanceState[2] === 'remove') ||
        (playerChanceState[4] === 'remove' &&
          playerChanceState[8] === 'remove') ||
        (playerChanceState[3] === 'remove' &&
          playerChanceState[6] === 'remove'))
    ) {
      setWinner('remove');
    } else if (
      playerChanceState[2] === 'remove' &&
      ((playerChanceState[4] && playerChanceState[6] === 'remove') ||
        (playerChanceState[5] && playerChanceState[8] === 'remove'))
    ) {
      setWinner('remove');
    } else if (
      playerChanceState[1] === 'remove' &&
      playerChanceState[4] === 'remove' &&
      playerChanceState[7] === 'remove'
    ) {
      setWinner('remove');
    } else if (
      playerChanceState[3] === 'remove' &&
      playerChanceState[4] === 'remove' &&
      playerChanceState[5] === 'remove'
    ) {
      setWinner('remove');
    } else if (!playerChanceState.includes('pencil') && count >= 8) {
      setWinner('draw');
    } else {
      setWinner(0);
    }
  };

  console.log('wubber', playerChanceState, winner, count);
  return (
    <SafeAreaView style={[styleClass.mainWrapper]}>
      <View>
        {!winner ? (
          <Text style={styleClass.defaultText}>
            Player's <Icons name={playerTurn} /> Turn
          </Text>
        ) : (
          <Text style={styleClass.defaultText}>
            {winner === 'draw'
              ? 'Draw 😕😵‍💫🤔😓'
              : `Congratulations ${winner?.toUpperCase()} 👋❤️❤️`}
          </Text>
        )}

        <View style={styleClass.gameBoard}>
          <View style={styleClass.gameRow}>
            <View style={styleClass.gameBox}>
              <TouchableOpacity
                style={[
                  styleClass.iconItem,
                  playerChanceState[0] === 'circle-o' ? styleClass.circle : '',
                  playerChanceState[0] === 'remove' ? styleClass.remove : '',
                ]}
                onPress={() => {
                  handlePress(0);
                }}>
                <Icons name={playerChanceState[0]} />
              </TouchableOpacity>
            </View>
            <View style={styleClass.gameBox}>
              <TouchableOpacity
                style={[
                  styleClass.iconItem,
                  playerChanceState[1] === 'circle-o' ? styleClass.circle : '',
                  playerChanceState[1] === 'remove' ? styleClass.remove : '',
                ]}
                onPress={() => {
                  handlePress(1);
                }}>
                <Icons name={playerChanceState[1]} />
              </TouchableOpacity>
            </View>
            <View style={styleClass.gameBox}>
              <TouchableOpacity
                style={[
                  styleClass.iconItem,
                  playerChanceState[2] === 'circle-o' ? styleClass.circle : '',
                  playerChanceState[2] === 'remove' ? styleClass.remove : '',
                ]}
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
                style={[
                  styleClass.iconItem,
                  playerChanceState[3] === 'circle-o' ? styleClass.circle : '',
                  playerChanceState[3] === 'remove' ? styleClass.remove : '',
                ]}
                onPress={() => {
                  handlePress(3);
                }}>
                <Icons name={playerChanceState[3]} />
              </TouchableOpacity>
            </View>
            <View style={styleClass.gameBox}>
              <TouchableOpacity
                style={[
                  styleClass.iconItem,
                  playerChanceState[4] === 'circle-o' ? styleClass.circle : '',
                  playerChanceState[4] === 'remove' ? styleClass.remove : '',
                ]}
                onPress={() => {
                  handlePress(4);
                }}>
                <Icons name={playerChanceState[4]} />
              </TouchableOpacity>
            </View>
            <View style={styleClass.gameBox}>
              <TouchableOpacity
                style={[
                  styleClass.iconItem,
                  playerChanceState[5] === 'circle-o' ? styleClass.circle : '',
                  playerChanceState[5] === 'remove' ? styleClass.remove : '',
                ]}
                onPress={() => {
                  handlePress(5);
                }}>
                <Icons name={playerChanceState[5]} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styleClass.gameRow}>
            <View style={styleClass.gameBox}>
              <TouchableOpacity
                style={[
                  styleClass.iconItem,
                  playerChanceState[6] === 'circle-o' ? styleClass.circle : '',
                  playerChanceState[6] === 'remove' ? styleClass.remove : '',
                ]}
                onPress={() => {
                  handlePress(6);
                }}>
                <Icons
                  name={playerChanceState[6]}
                  styleClass={styleClass.icon}
                />
              </TouchableOpacity>
            </View>
            <View style={styleClass.gameBox}>
              <TouchableOpacity
                style={[
                  styleClass.iconItem,
                  playerChanceState[7] === 'circle-o' ? styleClass.circle : '',
                  playerChanceState[7] === 'remove' ? styleClass.remove : '',
                ]}
                onPress={() => {
                  handlePress(7);
                }}>
                <Icons name={playerChanceState[7]} />
              </TouchableOpacity>
            </View>
            <View style={styleClass.gameBox}>
              <TouchableOpacity
                style={[
                  styleClass.iconItem,
                  playerChanceState[8] === 'circle-o' ? styleClass.circle : '',
                  playerChanceState[8] === 'remove' ? styleClass.remove : '',
                ]}
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
    width: '33.33%',
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: '#a855f7',
    backgroundColor: '#faf5ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultText: {
    fontSize: 25,
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
  iconItem: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    backgroundColor: '#8bec98',
  },
  remove: {
    backgroundColor: '#f8a085',
  },
});
