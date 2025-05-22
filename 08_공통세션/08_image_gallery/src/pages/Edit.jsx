// Edit.jsx
import './Post.css';
import Header from './Header';
import { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CreatePostButton from '../components/CreatePostButton';
import file from '../assets/file.png';

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, imageUrl:initImageUrl, title: initTitle, description: initDesc, date } = location.state || {};

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(initImageUrl);
  const [title, setTitle] = useState(initTitle);
  const [description, setDescription] = useState(initDesc);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log('[수정]', { id, imageFile, imagePreview, title, description, date });
    navigate('/main');
  };

  return (
    <div className="post-page">
      <Header />
      <div className="create-page">
        <form className="upload-form" onSubmit={handleUpdate}>
          <label>Image *</label>
          <div className={`file-box ${imagePreview ? 'uploaded' : ''}`}>
            {imagePreview ? (
              <img src={imagePreview} alt="preview" className="preview-image" />
            ) : (
              <div className="file-placeholder">
                <img src={file} alt="file icon" className="file-icon" />
                <span>Drag and drop your file here.</span>
              </div>
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />

          <div className="mypc-button">
            <CreatePostButton label="My PC" onClick={() => fileInputRef.current.click()} />
          </div>

          <label>Title *</label>
          <input type="text" maxLength="20" value={title} onChange={(e) => setTitle(e.target.value)} />
          <small>*Please enter no more than 20 characters.</small>

          <label>Description *</label>
          <input type="text" maxLength="200" value={description} onChange={(e) => setDescription(e.target.value)} />
          <small>*Please enter no more than 200 characters.</small>

          <div className="submit-button">
            <CreatePostButton label="Changes Saved" onClick={handleUpdate} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
