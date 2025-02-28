import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState } from "react";
import { TINY_MCE_EDITOR_INIT } from "../utils/constants";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material"; // Import MUI components

const Add_Blog = () => {
  const [files, setFiles] = useState("");

  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState(""); // State for type selection
  const [contents, setContents] = useState([
    { title: "", description: "", images: [] },
  ]); // State for contents array
  const MySwal = withReactContent(Swal);
  const formRef = useRef(null);

  // Function to handle changes in the contents array
  const handleContentChange = (index, field, value) => {
    const updatedContents = [...contents];
    updatedContents[index][field] = value;
    setContents(updatedContents);
  };

  // Function to add a new content item
  const addContentItem = () => {
    setContents([...contents, { title: "", description: "", images: [] }]);
  };

  // Function to handle image upload for a specific content item
  const handleContentImageUpload = async (index, files) => {
    const list = await Promise.all(
      Object.values(files).map(async (file) => {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "upload");
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dtpvtjiry/image/upload",
          data
        );
        return uploadRes.data.url;
      })
    );

    const updatedContents = [...contents];
    updatedContents[index].images = list;
    setContents(updatedContents);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data2 = {
      desc: desc,
      name: name,
      link: link,
      type: type, // Include selected type
      contents: contents, // Include contents array in the data
    };

    try {
      // Upload main blog images
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dtpvtjiry/image/upload",
            data
          );
          return uploadRes.data.url;
        })
      );

      const product = {
        ...data2,
        photos: list,
      };

      await axios.post("http://localhost:8002/api/blogs", product);
      MySwal.fire("Good job!", "successfully added", "success");
      formRef.current.reset();
      setContents([{ title: "", description: "", images: [] }]); // Reset contents
    } catch (err) {
      MySwal.fire("Something Error Found.", "warning");
    }
  };

  return (
    <div className="wrapper">
      <div className="content-wrapper" style={{ background: "unset" }}>
        <div className="customize registration_div card">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="row p-3">
              <div className="col-md-12 form_sub_stream">
                <label
                  htmlFor="inputState"
                  className="form-label profile_label3"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="main_form w-100"
                  name="name"
                  value={name}
                  placeholder="Blog Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-md-12 form_sub_stream">
                <label
                  htmlFor="inputState"
                  className="form-label profile_label3"
                >
                  Link
                </label>
                <input
                  type="text"
                  className="main_form w-100"
                  name="link"
                  value={link}
                  placeholder="Blog link"
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>

              {/* Add Select dropdown for type selection */}
              <div className="col-md-12 form_sub_stream">
                <FormControl fullWidth>
                  <InputLabel id="type-label">Select Type</InputLabel>
                  <Select
                    labelId="type-label"
                    id="type"
                    value={type}
                    label="Select Type"
                    onChange={(e) => setType(e.target.value)}
                  >
                    <MenuItem value="use-design">Use Design</MenuItem>
                    <MenuItem value="product-design">Product Design</MenuItem>
                    <MenuItem value="ui-design">UI Design</MenuItem>
                    <MenuItem value="ux-design">UX Design</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="col-md-12 form_sub_stream">
                <label
                  htmlFor="inputState"
                  className="form-label profile_label3"
                >
                  Description
                </label>
                <input
                  type="text"
                  className="main_form w-100"
                  name="desc"
                  value={desc}
                  placeholder="Blog Description"
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>

              <div className="col-md-12 form_sub_stream">
                <label
                  htmlFor="inputState"
                  className="form-label profile_label3"
                >
                  Image upload
                </label>
                <input
                  type="file"
                  className="main_form w-100 p-0"
                  name="img"
                  onChange={(e) => setFiles(e.target.files)}
                  multiple
                />
              </div>

              {/* Contents Section */}
              {contents.map((content, index) => (
                <div key={index} className="col-md-12 form_sub_stream">
                  <h5>Content {index + 1}</h5>
                  <label
                    htmlFor="inputState"
                    className="form-label profile_label3"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    className="main_form w-100"
                    value={content.title}
                    placeholder="Content Title"
                    onChange={(e) =>
                      handleContentChange(index, "title", e.target.value)
                    }
                  />
                  <label
                    htmlFor="inputState"
                    className="form-label profile_label3"
                  >
                    Description
                  </label>
                  <Editor
                    apiKey="9i9siri6weyxjml0qbccbm35m7o5r42axcf3lv0mbr0k3pkl"
                    init={TINY_MCE_EDITOR_INIT}
                    value={content.description}
                    onEditorChange={(newValue) =>
                      handleContentChange(index, "description", newValue)
                    }
                  />
                  <label
                    htmlFor="inputState"
                    className="form-label profile_label3"
                  >
                    Images
                  </label>
                  <input
                    type="file"
                    className="main_form w-100 p-0"
                    multiple
                    onChange={(e) =>
                      handleContentImageUpload(index, e.target.files)
                    }
                  />
                </div>
              ))}

              {/* Button to add more content items */}
              <div className="col-md-12 form_sub_stream">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={addContentItem}
                >
                  Add More Content
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-center my-5">
              <button
                type="submit"
                className="profile_btn"
                style={{ width: 175 }}
              >
                Add Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add_Blog;
