import { AppRouter } from '@routes/routes';

export const APP_ENVIRONMENT = 'develop';

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
