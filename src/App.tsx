import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import ReactHookForm from './Components/ReactHookForm';
import { hookFormHandlers } from './Mocks/services/hookFormHandlers';

export default function App() {
  return (
    <QueryClientProvider client={new QueryClient}>
      <ReactHookForm id = "vasanthuser  " />
    </QueryClientProvider>
  );
};
