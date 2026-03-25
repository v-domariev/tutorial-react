import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import HomePageNavigation from './components/navigation/HomePageNavigation.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>

        <BrowserRouter>
            {/*<App />*/}
            <HomePageNavigation/>
        </BrowserRouter>
    </StrictMode>
)
