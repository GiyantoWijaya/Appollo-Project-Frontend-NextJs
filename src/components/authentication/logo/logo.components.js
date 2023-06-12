import Image from 'next/image';
import './logo.styles.css';

export default function Logo() {
  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-center">
        <Image src="/img/logoapollogames.png" className="imageLogo" alt="logo apollo games" width={200} height={100} />
        <h1 className="h1 title text-center">Appollo Games</h1>
      </div>
    </div>
  );
}
