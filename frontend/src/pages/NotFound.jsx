import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center px-6 max-w-mobile mx-auto">
      <i className="fa-solid fa-magnifying-glass text-8xl mb-4 text-base-content/20"></i>
      <h1 className="text-2xl font-bold mb-2">404</h1>
      <p className="text-base-content/60 text-center mb-6">
        ไม่พบหน้าที่คุณค้นหา
      </p>
      <Link to="/dashboard" className="btn btn-primary">
        <i className="fa-solid fa-house mr-2"></i>กลับหน้าแรก
      </Link>
    </div>
  );
};

export default NotFound;