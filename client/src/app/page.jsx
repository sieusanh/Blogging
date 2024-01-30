
import './globals.css';
import HomePage from './pages/HomePage';
import { StoreProvider } from './store';


export default function Home() {
  return (
    <StoreProvider>
      <HomePage />
    </StoreProvider>
  )
}
