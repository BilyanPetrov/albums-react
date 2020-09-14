import React, {useState, useEffect} from 'react';
import useDataHook from "./dataHook";
import AdminEditShow from "./AdminEditShow";


const AdminEdit = ({editId, onSuccess}) => {
    const { data } = useDataHook();
    const [album, setAlbum] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const found = data.find(element => element.id === editId);
        setAlbum(found);
        console.log(album);
        setLoading(false);
    }, [data]);

    return (
        
        <div>
            <div className="loading">
                {loading?"Loading" : ""}
            </div>
            {(!loading&&album)&&<AdminEditShow album={album} onSuccess={onSuccess}/>}
        </div>
    );




}

export default AdminEdit;