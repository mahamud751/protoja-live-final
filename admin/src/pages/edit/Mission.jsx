import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "./Main_steam.css";
import axios from "axios";

const Mission = ({ data, refetch }) => {
  const { _id, desc } = data;
  const [user, setUser] = useState(data);
  const [files, setFiles] = useState("");

  const MySwal = withReactContent(Swal);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...user };
    newInfo[field] = value;
    setUser(newInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      ...user,
    };
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dtpvtjiry/image/upload",
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );

      const product = {
        ...newPost,
        photos: list,
      };

      await axios.put(`https://api.yarnlink.com/api/mission/${_id}`, product);
      MySwal.fire("Good job!", "successfully edited", "success");
      refetch();
    } catch (err) {
      MySwal.fire("Something Error Found.", "warning");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div>
            <div className="card-body">
              <div className="col-md-12 form_sub_stream">
                <label
                  htmlFor="inputState"
                  className="form-label profile_label3 "
                >
                  Desc
                </label>
                <textarea
                  className="main_form w-100"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="desc"
                  placeholder="Mission Desc"
                  onBlur={handleOnBlur}
                  defaultValue={desc || ""}
                ></textarea>
              </div>
              <div className="col-md-12 mb-3">
                <label
                  htmlFor="inputState"
                  className="form-label profile_label3"
                >
                  Picture
                </label>
                <input
                  type="file"
                  className="main_form w-100 p-0"
                  name="img"
                  onChange={(e) => setFiles(e.target.files)}
                  multiple
                />
              </div>

              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="profile_btn"
                  style={{ width: 220 }}
                >
                  Edit Mission
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Mission;
