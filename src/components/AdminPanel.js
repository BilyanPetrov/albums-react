import React, {useState} from "react";
import "./AdminPanel.css";
import AdminForm from "./AdminForm";
import useDataHook from "./dataHook";
import AdminEdit from "./AdminEdit";

const views = {
  ADMINFORM: "ADMINFORM",
  ADMINEDIT: "ADMINEDIT"
};

const AdminPanel = () => {
  const { data, refetchData } = useDataHook();
  const [view, setView] = useState(views.ADMINFORM);
  const [albumEditId, setAlbumEditId] = useState();

  
  const deleteAlbum = (albumId) => {
    fetch(`http://localhost:3001/albums/${albumId}`, {
      method: "DELETE",
    }).then(() => refetchData());
  };

  const editAlbum = (albumId) => {
    setAlbumEditId(albumId);
    setView(views.ADMINEDIT);
  }
  return (
    <div>
      <h1>Admin panel</h1>
      {view === views.ADMINFORM && <AdminForm onSuccess={() => refetchData()} />}
      {view === views.ADMINEDIT && <AdminEdit editId={albumEditId} onSuccess={() => {refetchData(); 
        setView(views.ADMINFORM);}} />}
      <div className="albums-list">
        <div className="album-item">id</div>
        <div className="album-item">title</div>
        <div className="album-item">ACTIONS</div>
        {data.map((album, index) => {
          return (
            <React.Fragment key={index}>
              <div className="album-item">{album.id}</div>
              <div className="album-item">{album.title}</div>
              <div className="album-item">
                <button
                  className="delete-button"
                  onClick={() => deleteAlbum(album.id)}
                >
                  DELETE
                </button>
                <button
                  className="delete-button"
                  onClick={() => editAlbum(album.id)}
                >
                  EDIT
                </button>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default AdminPanel;
