import { useNavigate } from 'react-router-dom';
import './ImageCard.css';

const ImageCard = ({ id, imageUrl, title, description, date }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${id}`, {
      state: { id, imageUrl, title, description, date }  // 선택적: 상세페이지에서 props 없이 접근 가능
    });
  };

  return (
    <div className="image-card" onClick={handleClick}>
      <img src={imageUrl} alt={title} className="image-card-img" />
      <div className="image-card-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;