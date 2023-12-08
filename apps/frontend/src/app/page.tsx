import BoardArea from '@/components/game/BoardArea';
import ScoreBoard from '@/components/game/ScoreBoard';

export default function Home() {
  return (
    <div className='flex flex-col gap-7'>
      <BoardArea />
      <ScoreBoard />
    </div>
  );
}
