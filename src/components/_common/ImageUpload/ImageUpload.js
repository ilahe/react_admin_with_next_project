import React, { useState, useEffect } from "react";
import Button from "../Button";
import { Avatar } from "../../../../svg";
import { getBase64 } from "../../../helpers/imageUpload";

const ImageUpload = ({ getCustomersAvatar, setImageToStore }) => {
    const [img, setImg] = useState({
        url: "",
        file: [],
        base64URL: "",
    });

    const fileOnchange = (e) => {
        setImg({
            url: URL.createObjectURL(e.target.files[0]),
            file: e.target.files[0],
        });
        let file = img.file;
        file = e.target.files[0];
        getBase64(file)
            .then((result) => {
                img.file["base64"] = result;
                setImageToStore(result);
                setImg({
                    url: URL.createObjectURL(e.target.files[0]),
                    base64URL: result,
                    file,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <div className="customer-img">
                {getCustomersAvatar !== "" ? <img src={`${getCustomersAvatar}`} alt="" /> : <Avatar />}
            </div>
            <Button
                className="upload_avatar w-85 mt-3"
                btn-size="small"
                color="primary"
            >
                <input
                    className="avatar_input form-control"
                    onChange={fileOnchange}
                    type="file"
                    name="file"
                />
                Şəkil əlavə et
            </Button>
        </div>
    );
};

export default ImageUpload;
