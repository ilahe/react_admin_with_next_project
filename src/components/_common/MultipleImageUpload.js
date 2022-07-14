
import React, { useState } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import Button from "./Button";
const MultipleImageUpload = () => {
    const [file, setFile] = useState([]);

    const uploadSingleFile = (e) => {
        setFile([...file, URL.createObjectURL(e.target.files[0])]);
        console.log("file", file);
    }
    const upload = (e) => {
        e.preventDefault();
        console.log(file);
    }

    const deleteFile = (e) => {
        const s = file.filter((item, index) => index !== e);
        setFile(s);
        console.log(s);
    }

    return (
        <div>
            <Button
                className="upload_avatar w-85 mt-3"
                btn-size="small"
                color="primary"
            ><input
                    type="file"
                    className="form-control"
                    onChange={uploadSingleFile}
                />
                Şəkil əlavə et
            </Button>
            <div className="form-group preview">
                {file.length > 0 &&
                    file.map((item, index) => {
                        return (
                            <div key={item}>
                                <img src={item} alt="" />
                                <CancelIcon className="deleteimg" onClick={() => deleteFile(index)}></CancelIcon>
                            </div>
                        );
                    })}
            </div>

            <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={upload}
            >
                Upload
            </button>
        </div>
    )
}

export default MultipleImageUpload;