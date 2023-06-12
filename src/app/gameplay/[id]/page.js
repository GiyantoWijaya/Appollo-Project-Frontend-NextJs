import Game from '@/components/gameplay/game.components';
import './page.style.css';
import 'bootstrap/dist/css/bootstrap.css';

import { cookies } from 'next/headers';

export default function GamePlay({ params }) {
  const cookieStore = cookies();
  const userId = cookieStore.get('userId').value;

  return (
    <>
      <Game idgame={params.id} userId={userId} />
    </>
  );
}
