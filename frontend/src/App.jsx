
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-primary text-primary">
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
