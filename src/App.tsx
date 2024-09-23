import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import Icons from '../components/Icons';

export default function App(): React.JSX.Element {
  const deviceColorScheme = useColorScheme();
  const [iconState, setIconState] = useState('pencil');
  return (
    <SafeAreaView style={[styleClass.mainWrapper]}>
      <View>
        <Text style={styleClass.defaultText}>Your Turn</Text>
        <View style={styleClass.gameBoard}>
          <View style={styleClass.gameRow}>
            <View style={styleClass.gameBox}>
              <Icons name={iconState} />
            </View>
            <View style={styleClass.gameBox}>
              <Icons name={iconState} />
            </View>
            <View style={styleClass.gameBox}>
              <Icons name={iconState} />
            </View>
          </View>
          <View style={styleClass.gameRow}>
            <View style={styleClass.gameBox}>
              <Icons name={iconState} />
            </View>
            <View style={styleClass.gameBox}>
              <Icons name={iconState} />
            </View>
            <View style={styleClass.gameBox}>
              <Icons name={iconState} />
            </View>
          </View>
          <View style={styleClass.gameRow}>
            <View style={styleClass.gameBox}>
              <Icons name={iconState} />
            </View>
            <View style={styleClass.gameBox}>
              <Icons name={iconState} />
            </View>
            <View style={styleClass.gameBox}>
              <Icons name={iconState} />
            </View>
          </View>
        </View>
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
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });
