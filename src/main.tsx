import {Refine} from '@refinedev/core'; import {BrowserRouter} from 'react-router-dom'; import {createRoot} from 'react-dom/client'; import App from './App'; import './styles.css';
createRoot(document.getElementById('root')!).render(<BrowserRouter><Refine options={{syncWithLocation:true}}><App/></Refine></BrowserRouter>);
