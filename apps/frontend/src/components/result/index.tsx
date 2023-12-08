'use client';
import { IconCircle, IconX } from '@tabler/icons-react';
import { PlayerType } from 'core';
import { useContext } from 'react';
import Button from '../shared/Button';
import GameContext from '@/contexts/GameContext';
import Modal from '../shared/Modal';

export default function Result() {
  const { result, restart, clear } = useContext(GameContext);

  return (
    <Modal visible={result.finished}>
      {result.tied ? (
        <span className='uppercase font-bold text-light'>Terminou empatado</span>
      ) : (
        <>
          <span className='uppercase font-bold text-light'>
            Jogador {result.xWins ? PlayerType.X : PlayerType.O} ganhou!
          </span>

          <div className={`flex items-center gap-5 ${result.xWins ? 'text-primary-500' : 'text-secondary-500'}`}>
            {result.xWins ? <IconX size={80} stroke={6} /> : <IconCircle size={70} stroke={6} />}
            <span className='uppercase text-6xl font-black'>ganhou a rodada</span>
          </div>
        </>
      )}

      <div className='flex gap-5'>
        <Button color='light' onClick={clear}>
          <div className='font-bold uppercase text-dark-500'>Zerar</div>
        </Button>

        <Button color='secondary' onClick={restart}>
          <div className='font-bold uppercase text-dark-500'>Próxima Rodada</div>
        </Button>
      </div>
    </Modal>
  );
}
