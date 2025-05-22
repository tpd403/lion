// PostDetail.jsx
import { useLocation, useNavigate } from 'react-router-dom';
import './PostDetail.css';
import CreatePostButton from '../components/CreatePostButton';
import Header from './Header'; // 헤더 컴포넌트 임포트

const PostDetail = () => {
  const location = useLocation();
	const navigate = useNavigate();
  const { id, imageUrl, title, description, date } = location.state || {};
	console.log(date)
	console.log(title)

  const handleDelete = () => {
    // 삭제 로직 구현
    console.log(`Post with ID ${id} deleted`);
  }

  const handleEdit = () => {
    // 수정 로직 구현
    navigate(`/edit/${id}`, {
			state: { id, imageUrl, title, description, date }  // 선택적: 상세페이지에서 props 없이 접근 가능
		});
  }
  return (
    <div className="post-detail">
      <Header />
      <div className="detail-page">
				<div className="detail-title">
					<img src={imageUrl} alt={title} className="detail-image" />
					<div className="detail-title-date">
						<div className='title'>{title}</div>
						<div className="date">{date}</div>
					</div>
        </div>
        <p className="description">{description}</p>
        <div className="action-buttons">
          <CreatePostButton label='Delete Post' onClick={handleDelete}/>
          <CreatePostButton label='Edit Post' onClick={handleEdit}/>
        </div>
      </div>
		</div>
  );
};

export default PostDetail;
