'use client';
import Button from '@/components/shared/Button';
import Card from '@/components/shared/Card';
import Modal from '@/components/shared/Modal';

export default function Home() {
  return (
    <div>
      <Card color='primary'> Estou dentro de um card </Card>

      <Modal visible={false}> Estou dentro do modal</Modal>

      <Button onClick={() => console.log('Clicou')}>Clique aqui!</Button>
    </div>
  );
}
