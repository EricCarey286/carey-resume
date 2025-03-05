import Image from "next/image";
import './Project.css';
const bbhPreview = '/images/bbh-preview.png';

export default function Project(){
  return (
      <div className='project-container'>
        <h3 className='project-header'>Banned Books Hub</h3>
        <p>I am developing a database UI of books that have been banned in the US. The first(rough) version is available <a target="_blank" rel="noopener noreferrer" href='https://www.bannedbookshub.com'>here</a></p>
        <p>This project was built using a Node.js/Express.js backend, Vite React frontend, and a MySQL database. The whole project is deployed on Railway which offers fast and relialble deployments and logging.</p>
        <a title='Banned Books Hub Preview' className='project-preview' target="_blank" rel="noopener noreferrer" href='https://www.bannedbookshub.com'>
          <Image className='preview-img' id="bbh-preview" src={bbhPreview} alt="Banned Books Hub Preview" 
            style={{ objectFit: 'contain' }} 
            width={600}
            height={335}
          />
        </a>
      </div>
  );
}