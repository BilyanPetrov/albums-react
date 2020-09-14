import React, { useState } from "react";
import "./App.css";
import Albums from "./components/Albums";
import AdminPanel from "./components/AdminPanel";
import AlbumDetails from "./components/AlbumDetails";

const views = {
  ALBUMS: "ALBUMS",
  ADMIN: "ADMIN",
  ALBUMDETAILS: "ALBUMDETAILS"
};

function App() {
  const [view, setView] = useState(views.ALBUMS);
  const [idPass, setIdPass] = useState();

  return (
    <div>
      <header>
        <nav>
        <button className={"nav-button " + 
            (view === views.ALBUMS? "active" : "")} 
            onClick={() => setView(views.ALBUMS)}>
              Albums
            </button>
            <button className={"nav-button " + 
            ((view === views.ADMIN)? "active" : "")} 
            onClick={() => setView(views.ADMIN)}>
              Admin
            </button>
        </nav>
      </header>
      <main>
        {view === views.ALBUMS && <Albums passId = {(id)=>setIdPass(id)} onImageClick = {(update)=>setView(update)} />}
        {view === views.ADMIN && <AdminPanel />}
        {view === views.ALBUMDETAILS && <AlbumDetails albumId = {idPass}/>}
      </main>
    </div>
  );
}
export default App;
