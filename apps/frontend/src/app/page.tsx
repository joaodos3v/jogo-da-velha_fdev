import Card from '@/components/shared/Card';
import Modal from '@/components/shared/Modal';

export default function Home() {
  return (
    <div>
      <Card color='primary'> Estou dentro de um card </Card>

      <Modal visible> Estou dentro do modal</Modal>
    </div>
  );
}
