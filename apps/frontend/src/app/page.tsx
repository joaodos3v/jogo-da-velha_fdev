import CellArea from '@/components/game/CellArea';
import { PlayerType } from 'core';

export default function Home() {
  return (
    <div>
      <CellArea type={PlayerType.O} highlighted />
      <CellArea type={PlayerType.X} highlighted />
      <CellArea type={PlayerType.O} />
      <CellArea type={PlayerType.X} />
      <CellArea />
    </div>
  );
}
