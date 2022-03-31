import React, { useEffect ,useContext, useState, Component} from 'react';
import { axios, fornecedor1, fornecedor2}  from 'axios';

import { AuthContext } from '../../contexts/auth';

import { getUsers } from '../../services/api';





const HomePage = () => {

    const { authenticated, logout } = useContext(AuthContext);
    const [users, setUsers] = useState ([]);
    const [loading, setLoading] = useState (true);

    useEffect(() => {
      (async () => {
        const response = await getUsers();
        setUsers(response.data);
        setLoading(false);
      })();  
    },[]);

    const handleLogout = () => {
        logout();
    };

    if(loading) {
       return <div className="loading">Carregando dados...</div>
    }
    
  
    return (
      
        <div>
            <h1> Loja de Variedades</h1>
            <h2>Produtos de primeira para sua familia</h2>
           
            <button onClick={handleLogout}>Logout</button>
<ul>
    {users.map((user)=>(
        <li key={user._id} >
            {user.id} - {user.email}
        </li>
    ))}
</ul>
                        
                
        </div>
    );



};

export default HomePage;

