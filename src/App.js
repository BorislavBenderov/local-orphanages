import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as postService from './services/postService';
import { PostContext } from './contexts/PostContext';
import { AuthContext } from './contexts/AuthContext';
import { useLocalStorage } from './hooks/useLocalStorage';

import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Create } from "./components/Create/Create";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Logout } from "./components/Logout/Logout";
import { MyPosts } from "./components/MyPosts/MyPosts";
import { Details } from "./components/Details/Details";
import { Edit } from "./components/Edit/Edit";


function App() {
  const [posts, setPosts] = useState([]);
  const [auth, setAuth] = useLocalStorage('auth', {});

  useEffect(() => {
    postService.getAll()
      .then(result => setPosts(Object.values(result)))
  }, []);

  const onLogin = (userdata) => {
    setAuth(userdata)
  }

  const onLogout = () => {
    setAuth({});
  }

  const onCreate = (newPost) => {
    setPosts(oldPosts => ([
      ...oldPosts, newPost
    ]))
  }

  return (
    <AuthContext.Provider value={{auth, onLogin, onLogout}}>
      <div className="App">
        <Header />
        <PostContext.Provider value={{ posts, onCreate }}>
          <main id="main-content">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/create' element={<Create />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/myposts' element={<MyPosts />} />
              <Route path='/details/:postId' element={<Details />} />
              <Route path='/edit/:postId' element={<Edit />} />
            </Routes>
          </main>
        </PostContext.Provider>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
