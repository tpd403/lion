import './Post.css';
import Header from './Header'; // 헤더 컴포넌트 임포트
import { useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트
import CreatePostButton from '../components/CreatePostButton';
import file from '../assets/file.png'; // 파일 아이콘 임포트
import { createGallery } from '../api/Axios';
import axios from 'axios';
import { string } from 'prop-types';


const Post = () => {

	
const [data, setDaga] = useState();
	const [imageFile, setImageFile] = useState(null);
	const [imagePreview, setImagePreview] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
	const fileInputRef = useRef(null);
	const navigate = useNavigate();

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setImageFile(file);
			setImagePreview(URL.createObjectURL(file)); 
		}
	};

   const  handleSubmit  = async() => {
		const response = await axios.get('http://localhost:8080/api/galleries', )
		setDaga(response.data);
    e.preventDefault();
    if (!imageFile || title.trim() === '' || description.trim() === '') {
      alert('모든 필드를 입력해주세요.');
      return;
    }

		const now = new Date();
  	const date = now.toISOString().slice(0, 10); // 'YYYY-MM-DD' 형식

    // 폼 데이터 처리 예: 서버 전송 또는 상태 저장
    console.log({ imageFile, title, description, date });
		navigate('/main'); // 메인 페이지로 이동
  };


  return (
    <div className="post-page">
      <Header />
			<div className='create-page'>
				<form className="upload-form" onSubmit={handleSubmit}>
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

					{/* Hidden file input */}
					<input
						type="file"
						accept="image/*"
						ref={fileInputRef}
						style={{ display: 'none' }}
						onChange={handleImageChange}
					/>

					<div className='mypc-button'>
						<CreatePostButton label="My PC" onClick={() => fileInputRef.current.click()} />
					</div>

					{/* Title */}
					<label>Title *</label>
					<input
						type="text"
						maxLength="20"
						placeholder="Text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<small>*Please enter no more than 20 characters.</small>

					{/* Description */}
					<label>Description *</label>
					<input
						type="text"
						maxLength="20"
						placeholder="Description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
					<small>*Please enter no more than 200 characters.</small>
					<div className="submit-button">
						<CreatePostButton label="submit" onClick={handleSubmit} />
					</div>
      	</form>
			</div>
    </div>
  );
};

export default Post;
