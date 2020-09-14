import React from 'react';
import "./AlbumDetailsShow.css";


const defaultImage =
  "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg";

const AlbumDetailsShow = ({myAlbum}) =>{
    console.log(myAlbum);
    return(
        <div>
            <h1>Current album details</h1>
            <div className="album">
                <div className="image-container" > 
                    <img src={myAlbum.image || defaultImage} alt="Album cover" />
                </div>
                <div className="album-info">
                  <h2>Title: {myAlbum.title}</h2>
                  <h3>Author: {myAlbum.author}</h3>
                  {myAlbum.songs&&
                  <h4>Songs:
                      <ul className="songs" >{myAlbum.songs.map(item =>{
                            return(
                                <li key={myAlbum.songs.indexOf(item)}>
                                    {item}
                                </li>
                            )
                            })}</ul>
                  </h4>
                  }
                </div>
            </div>
        </div>
    );
}

export default AlbumDetailsShow;