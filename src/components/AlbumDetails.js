import React, {useState, useEffect} from 'react';
import AlbumDetailsShow from "./AlbumDetailsShow";
import useDataHook from "./dataHook";
import './AlbumDetails.css';

const AlbumDetails = ({albumId}) => {
    const { data } = useDataHook();
    const [loading, setLoading] = useState(true);
    const [album, setAlbum] = useState();

    useEffect(()=>{
        const found = data.find(element => element.id === albumId);
        setAlbum(found);
        setLoading(false);
    }, [data]);
    return (
        
        <div>
            <div className="loading">
                {loading?"Loading" : ""}
            </div>
            {(!loading&&album)&&<AlbumDetailsShow myAlbum={album}/>}
        </div>
    );
}
export default AlbumDetails;