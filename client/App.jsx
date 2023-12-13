import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppProvider from './utils/AppProvider';
import { Header, ProtectedRoute } from './components';
import { HomePage, AuthPage, Logout, ViewPage, CreatePage } from './pages/'
import { ArcadeStory, ParkStory, PizzaStory, ZooStory } from './pages/stories/'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserPage from './pages/UserPage';

export default function App(){

  return (
    <AppProvider>
      <BrowserRouter>
        <Header />
        <div className="container pt-5">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/viewstory" element={<ViewPage />} />
            
            <Route path="/create-page" element={<CreatePage />}/>
            <Route path="/park-story" element={<ParkStory />}/>
            <Route path="/arcade-story" element={<ArcadeStory />}/>
            <Route path="/pizza-story" element={<PizzaStory />}/>
            <Route path="/zoo-story" element={<ZooStory />}/>

            
            <Route path="/user" element={
              <ProtectedRoute>
                <UserPage />
              </ProtectedRoute>
            }/>
            

            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppProvider>
  )
}
