import { Helmet } from 'react-helmet-async';
import { HomeContent } from '../../components/HomeContent/HomeContent';
import css from './Home.module.css';

export default function Home() {
  return (
    <div>
      <HomeContent />
      <Helmet>
        <title>Home</title>
      </Helmet>
    </div>
  );
}
