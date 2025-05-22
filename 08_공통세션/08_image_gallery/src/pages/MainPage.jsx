import { useNavigate } from 'react-router-dom';
import './MainPage.css';
import CreatePostButton from '../components/CreatePostButton';
import ImageCard from '../components/ImageCard';
import tempImageData from '../components/temp';
import Header from './Header';
import Pagination from '../components/Pagination';
import { useState, useEffect} from 'react';

const MainPage = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16; // 한 페이지에 보여줄 카드 개수

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tempImageData.slice(indexOfFirstItem, indexOfLastItem);

  // 새 글 작성 버튼
  const handleCreatePost = () => {
    navigate("/post");
  };


  return (
    <div className="main-page">
      <Header />
      <main className="main-body">
        <CreatePostButton onClick={handleCreatePost} />

        <div className="imagetext">
          <p>Image</p>
        </div>

        <div className="image-grid">
          {currentItems.map((img) => (
            <ImageCard
              key={img.id}
              id={img.id}
              imageUrl={img.imageUrl}
              title={img.title}
              description={img.description}
              date={img.date}
            />
          ))}
        </div>

        <div className="pagination">
          <Pagination
            currentPage={currentPage}
            totalItems={tempImageData.length}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </main>
    </div>
  );
};

export default MainPage;
