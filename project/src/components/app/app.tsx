import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  countCard : number
}

function App({countCard}: AppScreenProps): JSX.Element {
  return (
    <MainScreen countCard={countCard}/>
  );
}

export default App;
