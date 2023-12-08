import BoardArea from '@/components/game/BoardArea';
import Result from '@/components/result';
import ScoreBoard from '@/components/game/ScoreBoard';
import Menu from '@/components/menu';

export default function Home() {
  return (
    <div className='flex flex-col gap-7'>
      <Result />
      <Menu />
      <BoardArea />
      <ScoreBoard />
    </div>
  );
}
